## Setup repo

We need few packages installed globally.

### Install with installer

```
npm run repo:setup
```

### Manual install

> We also need to install rust to use versio
> Ensure to have MacOS developer tools installed.
> `xcode-select --install`

```shell
# Install rust (if not installed)
brew install rustup && rustup-init && source $HOME/.cargo/env && rustc --version

# Install packages
cargo install versio --locked cargo && npm i -g pnpm lerna
```

## Install

```
pnpm install
```


