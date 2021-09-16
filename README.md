# WebFrontend

WebFrontend will serve supr-data content API.

WebFrontend will include Black Lion and Dark Origin website.

WebFrontend is presenting black lion website as prototype without content API via firebase hosting.

WebFrontend automatically deploys to firebase hosting via git. Just execute `npm run blacklion:deploy` for a new version.

## Install

Run `npm install` to install all project dependencies.

## Development server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment and Publishing

Run `git push origin master` from console or use "push" via Github Client to deploy the project to firebase. 

### Workflow

Github utilizes an action 

 - to build project files (build artifacts), 
 - deploy them to firebase on successful build and 
 - firebase will publish the latest website release via firebase hosting.

## Code scaffolding

Run `ng generate module black-lion/module-name` and `ng generate component black-lion/module-name/component-name` to generate a new component within module. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
