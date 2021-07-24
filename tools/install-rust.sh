#!/usr/bin/env bash

brew install rustup && rustup-init && source $HOME/.cargo/env && rustc --version
