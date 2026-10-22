/* The src/lib.rs file is the root of the Rust crate that
we are compiling to WebAssembly. It uses wasm-bindgen to
interface with JavaScript. It imports the window. alert
JavaScript function, and exports the greet Rust function,
which alerts a greeting message. */

mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    let greet_msg = format!("Hello {name}, welcome to the wasm-game-of-life");
    alert(&greet_msg);
}
