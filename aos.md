# AOS - Testing and Source Files

[GitHub Repo](https://github.com/AO-ZKP/aos) for AOS

## AOS Repo Contains the Lua Source Files and Test Files for AO wasm modules


## How to Use

Make sure to have setup our  [AO Dev Container](ao.md) first.

Then clone the AOS repo and run the following command:

```bash

git clone https://github.com/AO-ZKP/aos
cd process
yarn install
docker run --platform linux/amd64 -e DEBUG=1 -v ${PWD}:/src p3rmaw3b/ao ao-build-module && yarn test

```
To generate a process.wasm module and test it


Refer to the official the docs: [https://hackmd.io/@ao-docs/H16LENGcA](https://hackmd.io/@ao-docs/H16LENGcA)

On How to setup your project structure