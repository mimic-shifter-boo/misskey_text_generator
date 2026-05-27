*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #0d0f14;
  --surface: #161920;
  --surface2: #1e2130;
  --border: #2a2f45;
  --accent: #86b300;
  --accent2: #53b6ec;
  --text: #d4d9e8;
  --text-muted: #6b7394;
  --danger: #e96854;
  --radius: 10px;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Noto Sans JP', sans-serif;
  min-height: 100vh;
  line-height: 1.6;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--surface);
}
::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 3px;
}
