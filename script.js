function triggerShell() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <h1>Umbraeon Architect Console</h1>
    <p>Initializing secure environment...</p>
    <div class="terminal">
      <p>🟢 Connection verified: Architect Notae</p>
      <p>🔒 Session token granted</p>
      <p>🧠 Loading neural extensions...</p>
      <p>✅ Umbraeon Core is now active</p>
      <button onclick="launchCodex()">Open Codex Interface</button>
    </div>
  `;
}

function launchCodex() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Codex Interface</h1>
    <p>This is where your Codex UI will go — fully customizable.</p>
    <button onclick="triggerShell()">⬅ Back to Shell</button>
  `;
}
