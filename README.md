## Install

We need few packages installed globally.

### Install with installer

```
bash tools/setup.sh
```

### Manual install

> We also need to install rust to use versio

```
# Install rust (if not installed)
brew install rustup && rustup-init && rustc --version

# Install packages
cargo install versio && npm i -g pnpm lerna

# Install repositories with pnpm
pnpm install
```


