## Setup repo

We need few packages installed globally.

### Install with installer

```
npm run repo:setup
```

### Manual install

> We also need to install rust to use versio

```
# Install rust (if not installed)
brew install rustup && rustup-init && rustc --version

# Install packages
cargo install versio && npm i -g pnpm lerna
```

## Install

```
pnpm install
```


