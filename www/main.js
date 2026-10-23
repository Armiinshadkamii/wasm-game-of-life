// Import the default 'init' function and the 'greet' function
import init, { greet } from '../pkg/wasm_game_of_life.js';

async function start() {
  // 1. Initialize the WebAssembly module using the generated init function
  await init();
  
  // 2. Update the UI
  const statusEl = document.getElementById('status');
  if (statusEl) {
    statusEl.textContent = 'WebAssembly is running!';
  }

  // 3. Attach the click listener
  const btn = document.getElementById('greet-btn');
  const input_val = document.getElementById("name").value;

  if (btn && input_val) {
    btn.addEventListener('click', () => {
      console.log('Calling Rust greet function...');
      greet(input_val || "annonymos");
    });
  } else {
      console.log('Oops...');
      greet("sth went wrong");
  }
}

start();