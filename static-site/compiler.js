const fs = require('fs');
const fse = require('fs-extra');
const Mustache = require('mustache');

class PageConfig {
  /**
   * Read target
   *
   * {string}
   */
  source;

  /**
   * Write target
   *
   * {string}
   */
  target;

  /**
   * Variables inside of a file
   *
   * {Object}
   */
  var = Object;

  constructor(json) {
    this.source = json.source;
    this.target = json.target;
    this.var = json.var;
  }
}

class Config {
  /**
   *
   * @type {string}
   */
  rootSrc;

  /**
   *
   * @type {PageConfig[]}
   */
  pages = [];

  constructor(json) {
    this.rootSrc = json.rootSrc;
    this.pages = (json.pages || []).map((page) => new PageConfig(page))
  }
}

// 1. Load config

/**
 * @param {string} srcPath
 * @returns {function(*)}
 */
const pathBuilder = (srcPath) =>
  /**
   * @param {string} targetPath
   * @returns {string}
   */
    (targetPath) => (__dirname + '/' + srcPath + '/' + targetPath).replace('//', '/');

// 2. generate files
/**
 *
 * @param {string} source
 * @param {string} target
 */
const generateFiles = (source, target) => {
  if (source) {
    fse.copySync(source, target);
  } else {
    fs.writeFileSync(target, '');
  }

  console.log('Written:', target);
}

/**
 * Make template files
 *
 * @param {PageConfig[]} pages
 * @param {string} src
 */
const makeFiles = (pages, src) => {
  const fromSrcPath = pathBuilder(src);
  return pages
    // Avoid overwriting source from their target, if both are the same
    .filter(page => page.source !== page.target)
    .reduce(
      /**
       * @param prev
       * @param {PageConfig} current
       */
      (prev, current) => generateFiles(
        fromSrcPath(current.source),
        fromSrcPath(current.target)
      ),
      null
    );
}

// 3. Add variables

/**
 *
 * @param {PageConfig} page
 * @param {string} srcPath
 */
const renderPage = (page, srcPath) => {
  const fromSrcPath = pathBuilder(srcPath);
  const view = {
    ...page.var,
    readFile: () => (_v, render) => {
      const path = render(_v).trim();
      if(!!path) {
        const file = fs.readFileSync(fromSrcPath(path.replace('&#x2F;', '/')));
        return file.toString();
      } else {
        return '';
      }
    }
  };

  const templatePath = fromSrcPath(page.target);
  const template = fs.readFileSync(templatePath);
  const rendered = Mustache.render(template.toString(), view);
  // console.log(rendered);
  fs.writeFileSync(templatePath, rendered);

  console.log('Rendered:', templatePath);
}

/**
 * Render template files
 *
 * @param {PageConfig[]} pages
 * @param {string} src
 */
const renderFiles = (pages, src) => pages
  .reduce(
    /**
     *
     * @param {PageConfig} prev
     * @param {PageConfig} current
     */
    (prev, current) => renderPage(current, src),
    null
  );

// 4. compile templates
const compile = (configFile) => {
  const rawData = fs.readFileSync(configFile);
  const config = new Config(JSON.parse(rawData.toString('utf8')));
  const pages = config.pages || [];

  makeFiles(pages, config.rootSrc);
  renderFiles(pages, config.rootSrc);
}

// 5. execute compiler

compile(__dirname + '/config.json');
