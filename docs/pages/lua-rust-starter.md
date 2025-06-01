# Lua Rust Starter - Write Lua in Rust


[GitHub Repo for Lua Rust Starter](https://github.com/AO-ZKP/lua-rust-starter)


Please checkout [AO](ao.md) and [AOS](aos.md) for prequelites for this project.

## How to Use

Run
```bash
git clone https://github.com/AO-ZKP/lua-rust-starter

cd lua-rust-starter

cargo build
```

And voila, your Lua Rust code is compiled as a static lib, you can find your binary in the 
`target/wasm32-unknown-emscripten/release/*.a` folder

You can add this binary to the libs folder of your project, and thats it! 

You have successfully compiled your Lua code to Rust to wasm.

---


Refer to the official the docs: [https://hackmd.io/@ao-docs/H16LENGcA](https://hackmd.io/@ao-docs/H16LENGcA)
