.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 16px 24px;
}
.header-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.logo {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 4px;
}
.logo-mk {
  font-family: 'BIZ UDGothic', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: var(--accent);
  letter-spacing: 2px;
}
.logo-sub {
  font-size: 14px;
  color: var(--text-muted);
}
.header-desc {
  font-size: 12px;
  color: var(--text-muted);
}

/* Main layout */
.main {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  padding: 24px;
  gap: 24px;
}

@media (max-width: 768px) {
  .main {
    grid-template-columns: 1fr;
    padding: 16px;
  }
}

/* Sections */
.section {
  margin-bottom: 16px;
}
.section-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

/* Textarea */
.textarea {
  width: 100%;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font-family: 'BIZ UDGothic', monospace;
  font-size: 14px;
  padding: 12px;
  resize: vertical;
  outline: none;
  transition: border-color 0.2s;
  line-height: 1.7;
}
.textarea:focus {
  border-color: var(--accent);
}
.textarea::placeholder {
  color: var(--text-muted);
}

/* Decoration groups */
.decorations {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}
.deco-group {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 10px 12px;
}
.deco-group-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}
.deco-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* Buttons */
.btn {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.1s;
  white-space: nowrap;
}
.btn:hover {
  background: var(--border);
  border-color: var(--accent);
  color: var(--accent);
}
.btn:active {
  transform: scale(0.96);
}
.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.btn-accent {
  background: var(--accent);
  border-color: var(--accent);
  color: #000;
  font-weight: 700;
}
.btn-accent:hover {
  background: #9dcf00;
  color: #000;
}
.btn-copy {
  flex: 1;
  padding: 10px;
  font-size: 13px;
  font-weight: 700;
  background: var(--accent2);
  border-color: var(--accent2);
  color: #000;
}
.btn-copy:hover {
  background: #6dc8f5;
  color: #000;
}
.btn-copy.copied {
  background: var(--accent);
  border-color: var(--accent);
}
.btn-danger {
  padding: 10px 16px;
  font-size: 13px;
  border-color: var(--danger);
  color: var(--danger);
}
.btn-danger:hover {
  background: var(--danger);
  color: #fff;
}

/* Action row */
.action-row {
  display: flex;
  gap: 8px;
}

/* Color input */
.color-input-wrap {
  position: relative;
}
.color-popup {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 10px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}
.color-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.color-picker {
  width: 36px;
  height: 28px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
}
.color-text {
  flex: 1;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-family: monospace;
  font-size: 12px;
  padding: 4px 8px;
  outline: none;
}
.color-text:focus {
  border-color: var(--accent);
}
.range-input {
  flex: 1;
  accent-color: var(--accent);
}
.deg-label {
  font-size: 12px;
  color: var(--text-muted);
  min-width: 36px;
  text-align: right;
}

/* Preview */
.preview-area {
  display: flex;
  flex-direction: column;
}
.preview-box {
  flex: 1;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  min-height: 200px;
}
.preview-text {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14px;
  white-space: pre-wrap;
  word-break: break-all;
  color: var(--text);
  line-height: 1.8;
}
.preview-empty {
  color: var(--text-muted);
  font-size: 13px;
}
.output-box {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 12px;
  margin-top: 0;
  word-break: break-all;
}
.output-code {
  font-family: 'BIZ UDGothic', monospace;
  font-size: 13px;
  color: var(--accent2);
  white-space: pre-wrap;
  user-select: all;
}
