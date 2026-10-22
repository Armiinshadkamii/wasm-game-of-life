<div align="center">

  <h1><code>wasm-game-of-life</code></h1>

  <strong>A modern, up-to-date implementation of the Rust + WebAssembly Game of Life tutorial, using <a href="https://github.com/rustwasm/wasm-pack">wasm-pack</a> and <a href="https://vitejs.dev/">Vite</a>.</strong>

  <h3>
    <a href="https://rustwasm.github.io/docs/book/game-of-life/introduction.html">Official Book Tutorial</a>
    <span> | </span>
    <a href="https://discordapp.com/channels/442252698964721669/443151097398296587">Rust Wasm Discord</a>
  </h3>

  <sub>Built with 🦀🕸 by <a href="https://rustwasm.github.io/">The Rust and WebAssembly Working Group</a> (Modernized)</sub>
</div>

## About

This project follows the official [Rust WebAssembly Game of Life book](https://rustwasm.github.io/docs/book/game-of-life/introduction.html), but with a **modernized frontend toolchain**. 

The official tutorial's JavaScript template relies on Webpack 4, which is incompatible with modern Node.js (v18+) due to the removal of internal APIs like `http_parser`. This repository replaces that legacy setup with **Vite**, providing:
- Full compatibility with modern Node.js (v18, v20, v22+)
- Lightning-fast Hot Module Replacement (HMR)
- Native ES Module support without complex bundler plugins
- A cleaner, more maintainable development workflow

## Usage

1. Build the Rust WebAssembly Code
   From the root of the project, compile the Rust code into WebAssembly with the web target (run this anytime you modify the Rust code in src/):
   wasm-pack build --target web

2. Install Frontend Dependencies
   Navigate to the www directory and install the modern JavaScript tooling:
   cd www
   npm install

3. Start the Development Server
   Still in the www directory, start the Vite development server:
   npm run dev
   Open the provided URL (usually http://localhost:5173) in your browser. Vite will automatically hot-reload when you rebuild the Rust code.

4. Build for Production
   To generate an optimized, production-ready bundle:
   npm run build
   npm run preview

## Batteries Included

- `wasm-bindgen`: For seamless, type-safe communication between WebAssembly and JavaScript.
- `console_error_panic_hook`: For logging Rust panic messages directly to the browser's developer console.
- `Vite`: A modern, blazing-fast frontend build tool that natively supports WebAssembly via ES modules, replacing legacy Webpack setups.

## License

Licensed under either of:
- Apache License, Version 2.0, (LICENSE-APACHE or http://www.apache.org/licenses/LICENSE-2.0)
- MIT license (LICENSE-MIT or http://opensource.org/licenses/MIT)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.