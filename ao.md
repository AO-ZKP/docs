## AO Dev Container


[GitHub Repo](https://github.com/AO-ZKP/ao) for AO Dev Container


### How to use

Clone the repo and run the following command:

```bash
git clone https://github.com/AO-ZKP/ao
cd ao/dev-cli/container
chmod +x ./build.sh
./build.sh

```

To build the container

To use the container after building, run the following command inside your project folder:

```bash
docker run --platform linux/amd64 -e DEBUG=1 -v ${PWD}:/src p3rmaw3b/ao ao-build-module
```

This will bundle up all the Lua files and the Rust Static Lib presenting in the lib/ folder into a wasm.


Your Project

```
project-root/
│
├── libs/
│ ├── libao_rust.a
│ ├── libanother.so
│ └── libmore.o
│
├── process.lua
├── ao.lua
│
└── config.yml

```
Refer to official the [hackmd docs: https://hackmd.io/@ao-docs/H16LENGcA](https://hackmd.io/@ao-docs/H16LENGcA)
