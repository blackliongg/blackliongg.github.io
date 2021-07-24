#!/usr/bin/env bash

# Optional Rust install
brew list rustup &>/dev/null || brew install rustup && rustup-init && rustc --version

cargo install versio && npm i -g pnpm lerna

pnpm install
