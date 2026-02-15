// ─────────────────────────────────────────────
// GOOGLE FONTS
// ─────────────────────────────────────────────
const GOOGLE_FONTS = [
  { name: 'JetBrains Mono', family: "'JetBrains Mono', monospace", url: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap' },
  { name: 'Fira Code', family: "'Fira Code', monospace", url: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap' },
  { name: 'Source Code Pro', family: "'Source Code Pro', monospace", url: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap' },
  { name: 'IBM Plex Mono', family: "'IBM Plex Mono', monospace", url: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap' },
  { name: 'Roboto Mono', family: "'Roboto Mono', monospace", url: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap' },
  { name: 'Inconsolata', family: "'Inconsolata', monospace", url: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap' },
  { name: 'Ubuntu Mono', family: "'Ubuntu Mono', monospace", url: 'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap' },
  { name: 'Space Mono', family: "'Space Mono', monospace", url: 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap' },
  { name: 'Anonymous Pro', family: "'Anonymous Pro', monospace", url: 'https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&display=swap' },
  { name: 'Cousine', family: "'Cousine', monospace", url: 'https://fonts.googleapis.com/css2?family=Cousine:wght@400;700&display=swap' },
  { name: 'Red Hat Mono', family: "'Red Hat Mono', monospace", url: 'https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@400;700&display=swap' },
  { name: 'Martian Mono', family: "'Martian Mono', monospace", url: 'https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400;700&display=swap' },
];
const SYSTEM_FONTS = [
  { name: 'System Default', family: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace", url: null },
  { name: 'Cascadia Code', family: "'Cascadia Code', monospace", url: null },
  { name: 'Consolas', family: "'Consolas', monospace", url: null },
  { name: 'Menlo', family: "'Menlo', monospace", url: null },
  { name: 'Monaco', family: "'Monaco', monospace", url: null },
];
const ALL_FONTS = [...SYSTEM_FONTS, ...GOOGLE_FONTS];
const loadedGoogleFonts = new Set();
function loadGoogleFont(font) {
  if (!font.url || loadedGoogleFonts.has(font.name)) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = font.url;
  document.head.appendChild(link); loadedGoogleFonts.add(font.name);
}
GOOGLE_FONTS.forEach(f => loadGoogleFont(f));

// ─────────────────────────────────────────────
// THEMES
// ─────────────────────────────────────────────
const THEMES = {
  catppuccin: { name: 'Catppuccin Mocha', colors: { keyword: '#cba6f7', string: '#a6e3a1', comment: '#6c7086', function: '#89b4fa', type: '#f9e2af', number: '#fab387', operator: '#89dceb', variable: '#f5c2e7', constant: '#f38ba8', decorator: '#94e2d5', tag: '#cba6f7', attribute: '#89b4fa' } },
  monokai: { name: 'Monokai', colors: { keyword: '#f92672', string: '#e6db74', comment: '#75715e', function: '#a6e22e', type: '#66d9ef', number: '#ae81ff', operator: '#f92672', variable: '#fd971f', constant: '#ae81ff', decorator: '#a6e22e', tag: '#f92672', attribute: '#a6e22e' } },
  dracula: { name: 'Dracula', colors: { keyword: '#ff79c6', string: '#f1fa8c', comment: '#6272a4', function: '#50fa7b', type: '#8be9fd', number: '#bd93f9', operator: '#ff79c6', variable: '#ffb86c', constant: '#bd93f9', decorator: '#50fa7b', tag: '#ff79c6', attribute: '#50fa7b' } },
  solarized: { name: 'Solarized Dark', colors: { keyword: '#b58900', string: '#2aa198', comment: '#586e75', function: '#268bd2', type: '#cb4b16', number: '#d33682', operator: '#859900', variable: '#6c71c4', constant: '#dc322f', decorator: '#2aa198', tag: '#b58900', attribute: '#268bd2' } },
  github_dark: { name: 'GitHub Dark', colors: { keyword: '#ff7b72', string: '#a5d6ff', comment: '#8b949e', function: '#d2a8ff', type: '#79c0ff', number: '#79c0ff', operator: '#ff7b72', variable: '#ffa657', constant: '#79c0ff', decorator: '#d2a8ff', tag: '#7ee787', attribute: '#79c0ff' } },
  nord: { name: 'Nord', colors: { keyword: '#81a1c1', string: '#a3be8c', comment: '#616e88', function: '#88c0d0', type: '#8fbcbb', number: '#b48ead', operator: '#81a1c1', variable: '#d08770', constant: '#b48ead', decorator: '#8fbcbb', tag: '#81a1c1', attribute: '#88c0d0' } },
  gruvbox: { name: 'Gruvbox Dark', colors: { keyword: '#fb4934', string: '#b8bb26', comment: '#928374', function: '#fabd2f', type: '#83a598', number: '#d3869b', operator: '#fe8019', variable: '#8ec07c', constant: '#d3869b', decorator: '#fabd2f', tag: '#fb4934', attribute: '#b8bb26' } },
  one_dark: { name: 'One Dark', colors: { keyword: '#c678dd', string: '#98c379', comment: '#5c6370', function: '#61afef', type: '#e5c07b', number: '#d19a66', operator: '#56b6c2', variable: '#e06c75', constant: '#d19a66', decorator: '#61afef', tag: '#e06c75', attribute: '#d19a66' } },
  // ── Pastels ──
  candy: {
    name: 'Candy',
    colors: {
      keyword: '#ff79c6',
      string: '#f1c40f',
      comment: '#7a7a8e',
      function: '#79e8ff',
      type: '#c9a0ff',
      number: '#ffb347',
      operator: '#ff6e8a',
      variable: '#7cffb2',
      constant: '#ffd700',
      decorator: '#e8a4d0',
      tag: '#ff9aa2',
      attribute: '#b5ead7',
    }
  },

  // ── Warm sunset tones ──
  sunset: {
    name: 'Sunset',
    colors: {
      keyword: '#ff6b6b',
      string: '#feca57',
      comment: '#636e72',
      function: '#ff9f43',
      type: '#ee5a24',
      number: '#f8b739',
      operator: '#e17055',
      variable: '#fdcb6e',
      constant: '#fab1a0',
      decorator: '#e77f67',
      tag: '#ff7979',
      attribute: '#f5cd79',
    }
  },

  // ── Cool ocean blues and greens ──
  oceanic: {
    name: 'Oceanic',
    colors: {
      keyword: '#6c9bff',
      string: '#5af78e',
      comment: '#5c6773',
      function: '#45aaf2',
      type: '#2bcbba',
      number: '#4ecdc4',
      operator: '#a0d2db',
      variable: '#7bed9f',
      constant: '#70a1ff',
      decorator: '#1dd1a1',
      tag: '#48dbfb',
      attribute: '#55efc4',
    }
  },

  // ── Cyberpunk / neon ──
  neon: {
    name: 'Neon',
    colors: {
      keyword: '#ff00ff',
      string: '#00ff9f',
      comment: '#555577',
      function: '#00e5ff',
      type: '#ff3d71',
      number: '#ffff00',
      operator: '#ff6fff',
      variable: '#00ffcc',
      constant: '#ffd319',
      decorator: '#c471f5',
      tag: '#ff2e63',
      attribute: '#08f7fe',
    }
  },

  // ── Earthy muted greens and browns ──
  forest: {
    name: 'Forest',
    colors: {
      keyword: '#a8cc8c',
      string: '#dbbc7f',
      comment: '#68826d',
      function: '#88c0d0',
      type: '#d3a86c',
      number: '#e0ac6e',
      operator: '#9bb58e',
      variable: '#b8d49c',
      constant: '#d4956a',
      decorator: '#7faa8c',
      tag: '#c9b67e',
      attribute: '#a3be8c',
    }
  },

  // ── Frosty cool pastels ──
  frost: {
    name: 'Frost',
    colors: {
      keyword: '#b0c4de',
      string: '#a7d8de',
      comment: '#5a6a7a',
      function: '#87ceeb',
      type: '#dda0dd',
      number: '#add8e6',
      operator: '#b0b7c3',
      variable: '#98d8c8',
      constant: '#cdb4db',
      decorator: '#a0c4e8',
      tag: '#bbd0e8',
      attribute: '#c5dedd',
    }
  },

  // ── High contrast retro terminal ──
  phosphor: {
    name: 'Phosphor',
    colors: {
      keyword: '#00ff41',
      string: '#00e5ff',
      comment: '#3a5f3a',
      function: '#39ff14',
      type: '#7dff7d',
      number: '#b5ff4d',
      operator: '#00ff41',
      variable: '#76ff7a',
      constant: '#ccff00',
      decorator: '#44ff88',
      tag: '#00ff66',
      attribute: '#88ffa8',
    }
  },

  // ── Purple-heavy cosmic ──
  nebula: {
    name: 'Nebula',
    colors: {
      keyword: '#c792ea',
      string: '#ecc48d',
      comment: '#5c5c7a',
      function: '#82aaff',
      type: '#f78c6c',
      number: '#f5a623',
      operator: '#89ddff',
      variable: '#addb67',
      constant: '#ff5572',
      decorator: '#b480d6',
      tag: '#f07178',
      attribute: '#c3e88d',
    }
  },

  // ── Muted vintage / sepia ──
  parchment: {
    name: 'Parchment',
    colors: {
      keyword: '#a67458',
      string: '#8a9a5b',
      comment: '#7a7062',
      function: '#b07850',
      type: '#c49060',
      number: '#9b8b6e',
      operator: '#8e7b6a',
      variable: '#a08c6e',
      constant: '#b49272',
      decorator: '#917860',
      tag: '#a87b5a',
      attribute: '#98a070',
    }
  },

  // ── Vibrant synthwave / outrun ──
  synthwave: {
    name: 'Synthwave',
    colors: {
      keyword: '#ff7edb',
      string: '#f97e72',
      comment: '#6556a5',
      function: '#36f9f6',
      type: '#fede5d',
      number: '#ff8b39',
      operator: '#e8d44d',
      variable: '#72f1b8',
      constant: '#f92aad',
      decorator: '#c991e1',
      tag: '#fe4450',
      attribute: '#2ee2fa',
    }
  },

  // ── Monochrome with blue accent ──
  ink: {
    name: 'Ink',
    colors: {
      keyword: '#e0e0e0',
      string: '#6eaeff',
      comment: '#4a4a5a',
      function: '#c8c8d0',
      type: '#8ab4f8',
      number: '#a0a0b0',
      operator: '#909098',
      variable: '#d0d0d8',
      constant: '#5e9ff5',
      decorator: '#7888a0',
      tag: '#bac0cc',
      attribute: '#7eaadc',
    }
  },

  // ── Cherry blossom pink/white ──
  sakura: {
    name: 'Sakura',
    colors: {
      keyword: '#e891a8',
      string: '#d4a0b0',
      comment: '#7a6872',
      function: '#c484a0',
      type: '#f0b0c0',
      number: '#d09888',
      operator: '#c898a8',
      variable: '#e0a8b8',
      constant: '#d88898',
      decorator: '#c880a0',
      tag: '#e898b0',
      attribute: '#d0a0a8',
    }
  },
};

// ─────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────
const DEFAULT_SHORTCUTS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const EXTRA_SHORTCUTS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
let categories = [
  { id: 'keyword', label: 'Keyword', shortcut: '1', bold: true, italic: false },
  { id: 'string', label: 'String', shortcut: '2', bold: false, italic: false },
  { id: 'comment', label: 'Comment', shortcut: '3', bold: false, italic: true },
  { id: 'function', label: 'Function', shortcut: '4', bold: false, italic: false },
  { id: 'type', label: 'Type', shortcut: '5', bold: false, italic: false },
  { id: 'number', label: 'Number', shortcut: '6', bold: false, italic: false },
  { id: 'operator', label: 'Operator', shortcut: '7', bold: false, italic: false },
  { id: 'variable', label: 'Variable', shortcut: '8', bold: false, italic: false },
  { id: 'constant', label: 'Constant', shortcut: '9', bold: true, italic: false },
  { id: 'decorator', label: 'Decorator', shortcut: '0', bold: false, italic: true },
  { id: 'tag', label: 'Tag', shortcut: '-', bold: false, italic: false },
  { id: 'attribute', label: 'Attribute', shortcut: '=', bold: false, italic: false },
];

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let highlights = [];
let currentThemeId = 'catppuccin';
let customColors = null;
let indentSize = 4;
let editorLineHeight = 1.6;
let selectedFontFamily = ALL_FONTS[0].family;
let selectedFontName = ALL_FONTS[0].name;
let customFontName = null;
let customFontFamily = null;
let customFontDataUrl = null;
let previousText = '';
let foldedRegions = []; // Array of { startLine, endLine } (0-indexed)

// ─────────────────────────────────────────────
// DOM REFS
// ─────────────────────────────────────────────
const editorEl = document.getElementById('editor');
const highlightLayer = document.getElementById('highlight-layer');
const indentGuidesEl = document.getElementById('indent-guides');
const lineNumbers = document.getElementById('line-numbers');
const themeSelect = document.getElementById('theme-select');
const sidebar = document.getElementById('sidebar');
const toastEl = document.getElementById('toast');
const statusLeft = document.getElementById('status-left');
const statusHighlights = document.getElementById('status-highlights');
const statusCursor = document.getElementById('status-cursor');

// ─────────────────────────────────────────────
// COLOR UTILITIES
// ─────────────────────────────────────────────
function hexToHSL(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255, g = parseInt(hex.slice(3, 5), 16) / 255, b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; } else {
    const d = max - min; s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) { case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break; case g: h = ((b - r) / d + 2) / 6; break; case b: h = ((r - g) / d + 4) / 6; break; }
  }
  return [h * 360, s * 100, l * 100];
}
function hslToHex(h, s, l) {
  h /= 360; s /= 100; l /= 100; let r, g, b;
  if (s === 0) { r = g = b = l; } else {
    const hue2rgb = (p, q, t) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1 / 6) return p + (q - p) * 6 * t; if (t < 1 / 2) return q; if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6; return p; };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s; const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3); g = hue2rgb(p, q, h); b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = x => { const hex = Math.round(x * 255).toString(16); return hex.length === 1 ? '0' + hex : hex; };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function generateColorForTheme(themeColors, index) {
  const existing = Object.values(themeColors);
  let totalS = 0, totalL = 0; const hues = [];
  for (const hex of existing) { const [h, s, l] = hexToHSL(hex); totalS += s; totalL += l; hues.push(h); }
  const avgS = totalS / existing.length, avgL = totalL / existing.length;
  const avgH = hues.reduce((a, b) => a + b, 0) / hues.length;
  const newHue = (avgH + 137.508 * (index + 1)) % 360;
  const sVar = Math.min(100, Math.max(20, avgS + (index % 3 - 1) * 8));
  const lVar = Math.min(85, Math.max(40, avgL + (index % 5 - 2) * 5));
  return hslToHex(newHue, sVar, lVar);
}

// ─────────────────────────────────────────────
// DYNAMIC STYLES
// ─────────────────────────────────────────────
let dynamicStyleEl = null;
function ensureDynamicStyles() { if (!dynamicStyleEl) { dynamicStyleEl = document.createElement('style'); document.head.appendChild(dynamicStyleEl); } }
function updateDynamicStyles() {
  ensureDynamicStyles(); let css = '';
  for (const cat of categories) {
    const styles = [`color: var(--hl-${cat.id})`];
    if (cat.bold) styles.push('font-weight: bold');
    if (cat.italic) styles.push('font-style: italic');
    css += `.hl-${cat.id} { ${styles.join('; ')}; }\n`;
  }
  dynamicStyleEl.textContent = css;
}

// ─────────────────────────────────────────────
// FONT MANAGEMENT
// ─────────────────────────────────────────────
let customFontStyleEl = null;
function applyFont(family) { document.documentElement.style.setProperty('--editor-font', family); }
function loadCustomFontFromDataUrl(name, dataUrl) {
  if (!customFontStyleEl) { customFontStyleEl = document.createElement('style'); document.head.appendChild(customFontStyleEl); }
  customFontStyleEl.textContent = `@font-face{font-family:'CustomUserFont';src:url('${dataUrl}');font-weight:100 900;font-style:normal;}`;
  customFontName = name; customFontFamily = "'CustomUserFont', monospace"; customFontDataUrl = dataUrl;
}
function applyLineHeight(val) { document.documentElement.style.setProperty('--editor-line-height', val); }

// ─────────────────────────────────────────────
// SCROLL PAST END
// ─────────────────────────────────────────────
function updateScrollPadding() {
  const container = editorEl.parentElement;
  const containerHeight = container.clientHeight;
  // Allow scrolling so last line can reach the top third of the viewport
  const pad = Math.max(0, containerHeight - 60);
  editorEl.style.paddingBottom = pad + 'px';
  highlightLayer.style.paddingBottom = pad + 'px';
}

// ─────────────────────────────────────────────
// FOLDING
// ─────────────────────────────────────────────
function getLineIndent(line) {
  const match = line.match(/^( *)/);
  return match ? match[1].length : 0;
}

function findFoldRange(lines, startLine) {
  // startLine is the line BEFORE the indented block (the "header")
  // The block starts at startLine+1
  if (startLine >= lines.length - 1) return null;
  const headerIndent = getLineIndent(lines[startLine]);
  const blockIndent = getLineIndent(lines[startLine + 1]);
  if (blockIndent <= headerIndent) return null;

  let endLine = startLine + 1;
  for (let i = startLine + 2; i < lines.length; i++) {
    const line = lines[i];
    // Empty lines don't break the block
    if (line.trim() === '') { endLine = i; continue; }
    const indent = getLineIndent(line);
    if (indent > headerIndent) { endLine = i; }
    else break;
  }
  return endLine > startLine ? { startLine, endLine } : null;
}

function getFoldableLines(lines) {
  // Returns set of line indices that can start a fold
  const foldable = new Set();
  for (let i = 0; i < lines.length - 1; i++) {
    if (isLineFolded(i)) continue;
    const range = findFoldRange(lines, i);
    if (range && range.endLine > range.startLine) foldable.add(i);
  }
  return foldable;
}

function isLineFolded(lineIdx) {
  return foldedRegions.some(r => r.startLine === lineIdx);
}

function isLineHidden(lineIdx) {
  return foldedRegions.some(r => lineIdx > r.startLine && lineIdx <= r.endLine);
}

function toggleFold(lineIdx) {
  const existing = foldedRegions.findIndex(r => r.startLine === lineIdx);
  if (existing >= 0) {
    foldedRegions.splice(existing, 1);
  } else {
    const lines = editorEl.value.split('\n');
    const range = findFoldRange(lines, lineIdx);
    if (range) {
      foldedRegions.push(range);
    }
  }
  render();
  updateLineNumbers();
  updateIndentGuides();
  saveToStorage();
}

function getVisibleLines(lines) {
  // Returns array of { lineIdx, text } for visible lines
  const visible = [];
  for (let i = 0; i < lines.length; i++) {
    if (!isLineHidden(i)) {
      visible.push({ lineIdx: i, text: lines[i] });
    }
  }
  return visible;
}

// Recalculate fold regions when text changes
function recalcFoldsAfterEdit(oldText, newText) {
  const oldLines = oldText.split('\n');
  const newLines = newText.split('\n');
  const oldCount = oldLines.length;
  const newCount = newLines.length;
  const delta = newCount - oldCount;

  if (delta === 0) return;

  // Find first changed line
  let firstChanged = 0;
  while (firstChanged < oldCount && firstChanged < newCount && oldLines[firstChanged] === newLines[firstChanged]) firstChanged++;

  const updated = [];
  for (const r of foldedRegions) {
    if (r.endLine < firstChanged) {
      updated.push(r);
    } else if (r.startLine >= firstChanged) {
      const ns = r.startLine + delta;
      const ne = r.endLine + delta;
      if (ns >= 0 && ne >= ns && ne < newCount) {
        updated.push({ startLine: ns, endLine: ne });
      }
    }
    // Folds that span the edit region are dropped
  }
  foldedRegions = updated;
}

// ─────────────────────────────────────────────
// INDENT GUIDES
// ─────────────────────────────────────────────

function updateIndentGuides() {
  indentGuidesEl.innerHTML = '';
  const text = editorEl.value;
  if (!text) return;

  const lines = text.split('\n');
  const visibleLines = getVisibleLines(lines);

  const cursorPos = editorEl.selectionStart;
  const cursorLine = text.substring(0, cursorPos).split('\n').length - 1;
  const cursorLineIndent = getLineIndent(lines[cursorLine] || '');

  let blockStart = cursorLine, blockEnd = cursorLine;
  if (cursorLineIndent > 0) {
    for (let i = cursorLine - 1; i >= 0; i--) {
      const li = lines[i];
      if (li.trim() === '') continue;
      if (getLineIndent(li) >= cursorLineIndent) blockStart = i;
      else break;
    }
    for (let i = cursorLine + 1; i < lines.length; i++) {
      const li = lines[i];
      if (li.trim() === '') continue;
      if (getLineIndent(li) >= cursorLineIndent) blockEnd = i;
      else break;
    }
  }

  const measure = document.createElement('span');
  measure.style.cssText = 'font-family:var(--editor-font);font-size:0.9rem;position:absolute;visibility:hidden;white-space:pre;';
  measure.textContent = 'X';
  document.body.appendChild(measure);
  const charWidth = measure.getBoundingClientRect().width;
  document.body.removeChild(measure);

  const fontSize = parseFloat(getComputedStyle(editorEl).fontSize);
  const lh = fontSize * editorLineHeight;

  const container = document.createElement('div');
  container.id = 'indent-guides-container';
  container.style.position = 'relative';
  container.style.width = '100%';
  container.style.height = (visibleLines.length * lh) + 'px';
  // Offset by current scroll position so guides track the content
  container.style.transform = `translateY(${-editorEl.scrollTop}px)`;

  for (let vi = 0; vi < visibleLines.length; vi++) {
    const { lineIdx, text: lineText } = visibleLines[vi];
    const indent = getLineIndent(lineText);
    if (indent < indentSize) continue;

    const levels = Math.floor(indent / indentSize);
    for (let lvl = 1; lvl <= levels; lvl++) {
      const guide = document.createElement('div');
      guide.className = 'indent-guide-line';
      const x = (lvl * indentSize) * charWidth;
      const y = vi * lh;
      guide.style.left = x + 'px';
      guide.style.top = y + 'px';
      guide.style.height = lh + 'px';

      const isInBlock = lineIdx >= blockStart && lineIdx <= blockEnd;
      if (isInBlock && (lvl * indentSize) <= cursorLineIndent) {
        guide.classList.add('active');
      }
      container.appendChild(guide);
    }
  }

  indentGuidesEl.appendChild(container);
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
function init() {
  // 1. Load data first (restores themes, settings, etc.)
  loadFromStorage();

  // 2. Build UI from restored state
  buildThemeSelect();
  updateDynamicStyles();
  buildSidebar();

  // 3. Apply themes
  applyTheme(currentThemeId);
  applyUITheme(customUIColors || UI_THEMES[currentUIThemeId]);
  applyFont(selectedFontFamily);
  applyLineHeight(editorLineHeight);

  // 4. Render
  render();
  updateLineNumbers();
  updateHelpContent();
  updateScrollPadding();
  updateIndentGuides();

  // ── Event listeners ──

  editorEl.addEventListener('input', onEditorInput);
  editorEl.addEventListener('scroll', syncScroll);
  editorEl.addEventListener('keydown', onKeyDown);
  editorEl.addEventListener('mouseup', () => { updateCursorStatus(); updateIndentGuides(); });
  editorEl.addEventListener('keyup', () => { updateCursorStatus(); updateIndentGuides(); });
  editorEl.addEventListener('click', () => updateIndentGuides());

  new ResizeObserver(() => updateScrollPadding()).observe(editorEl.parentElement);

  themeSelect.addEventListener('change', () => {
    currentThemeId = themeSelect.value; customColors = null;
    applyTheme(currentThemeId); render(); saveToStorage();
  });

  document.getElementById('btn-edit-theme').addEventListener('click', openThemeEditor);
  document.getElementById('btn-settings').addEventListener('click', openSettingsModal);
  document.getElementById('btn-export').addEventListener('click', exportData);
  document.getElementById('btn-import').addEventListener('click', () => document.getElementById('file-import').click());
  document.getElementById('file-import').addEventListener('change', importData);
  document.getElementById('btn-help').addEventListener('click', () => document.getElementById('help-modal').classList.add('open'));
  document.getElementById('btn-help-close').addEventListener('click', () => document.getElementById('help-modal').classList.remove('open'));
  document.getElementById('btn-theme-cancel').addEventListener('click', () => document.getElementById('theme-modal').classList.remove('open'));
  document.getElementById('btn-theme-save').addEventListener('click', saveThemeEdits);
  document.getElementById('btn-new-cat-cancel').addEventListener('click', () => {
    const modal = document.getElementById('new-cat-modal');
    modal._editCatId = null;
    modal.querySelector('h2').textContent = 'Add Highlight Category';
    document.getElementById('btn-new-cat-add').textContent = 'Add Category';
    modal.classList.remove('open');
  });
  document.getElementById('btn-new-cat-add').addEventListener('click', addNewCategory);
  document.getElementById('new-cat-name').addEventListener('input', updateNewCatPreview);
  document.getElementById('btn-settings-cancel').addEventListener('click', () => document.getElementById('settings-modal').classList.remove('open'));
  document.getElementById('btn-settings-save').addEventListener('click', saveSettings);
  document.getElementById('btn-load-font').addEventListener('click', () => document.getElementById('font-file-input').click());
  document.getElementById('font-file-input').addEventListener('change', onFontFileSelected);
  document.getElementById('setting-line-height').addEventListener('input', e => {
    document.getElementById('line-height-display').textContent = parseFloat(e.target.value).toFixed(1);
  });

  document.getElementById('btn-ui-theme').addEventListener('click', openUIThemeModal);
  document.getElementById('btn-ui-theme-cancel').addEventListener('click', () => document.getElementById('ui-theme-modal').classList.remove('open'));
  document.getElementById('btn-ui-theme-apply').addEventListener('click', applyCustomUITheme);

  document.getElementById('btn-export-img').addEventListener('click', openExportImageModal);
  document.getElementById('btn-img-cancel').addEventListener('click', () => document.getElementById('export-img-modal').classList.remove('open'));
  document.getElementById('btn-img-export').addEventListener('click', doExportImages);
  document.getElementById('img-all-lines').addEventListener('change', () => { updateImgPageInfo(); updateImgPreview(); });
  document.getElementById('img-lines-per').addEventListener('input', () => { updateImgPageInfo(); updateImgPreview(); });
  document.getElementById('img-export-theme').addEventListener('change', updateImgPreview);
  document.getElementById('img-padding').addEventListener('input', updateImgPreview);
  document.getElementById('img-line-numbers').addEventListener('change', updateImgPreview);
  document.getElementById('img-scale').addEventListener('input', e => {
    document.getElementById('img-scale-display').textContent = e.target.value + 'x';
  });

  document.getElementById('btn-import-syntax-theme').addEventListener('click', () => document.getElementById('file-import-syntax-theme').click());
  document.getElementById('file-import-syntax-theme').addEventListener('change', importSyntaxTheme);
  document.getElementById('btn-import-ui-theme').addEventListener('click', () => document.getElementById('file-import-ui-theme').click());
  document.getElementById('file-import-ui-theme').addEventListener('change', importUITheme);
  document.getElementById('btn-syntax-theme-export').addEventListener('click', exportSyntaxTheme);
  document.getElementById('btn-ui-theme-export').addEventListener('click', exportUITheme);
  document.getElementById('btn-export-theme-cancel').addEventListener('click', () => document.getElementById('export-theme-modal').classList.remove('open'));
  document.getElementById('btn-export-theme-save').addEventListener('click', doExportTheme);

  document.getElementById('btn-random-syntax-theme').addEventListener('click', applyRandomSyntaxTheme);
  document.getElementById('btn-random-ui-theme').addEventListener('click', applyRandomUITheme);

  document.getElementById('btn-manage-themes').addEventListener('click', openManageThemesModal);
  document.getElementById('btn-manage-themes-close').addEventListener('click', () => document.getElementById('manage-themes-modal').classList.remove('open'));

  // Dropdown menus
  document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = trigger.parentElement;
      const wasOpen = dropdown.classList.contains('open');
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
      if (!wasOpen) dropdown.classList.add('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('.dropdown-menu')) return;
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  });

  // Close dropdown when clicking a dropdown-item (but not theme picker options)
  document.addEventListener('click', (e) => {
    const item = e.target.closest('.dropdown-item');
    if (item) {
      item.closest('.dropdown').classList.remove('open');
    }
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
  });

  // File explorer
  initFileExplorer();

  document.getElementById('btn-toggle-files').addEventListener('click', () => {
    fileExplorerOpen = false;
    document.getElementById('file-explorer').classList.remove('open');
    saveAllToStorage();
  });

  document.getElementById('file-explorer-tab').addEventListener('click', () => {
    fileExplorerOpen = true;
    document.getElementById('file-explorer').classList.add('open');
    saveAllToStorage();
  });

  document.getElementById('btn-new-file').addEventListener('click', () => createNewFile());

  // Save files whenever editor changes
  editorEl.addEventListener('input', () => {
    // Update the current file's modified time
    const file = files.find(f => f.id === activeFileId);
    if (file) file.modifiedAt = new Date().toISOString();
  });
}

// ─────────────────────────────────────────────
// THEME
// ─────────────────────────────────────────────
function buildThemeSelect() {
  // Keep the hidden <select> in sync for any legacy references
  themeSelect.innerHTML = '';
  for (const [id, theme] of Object.entries(THEMES)) {
    const opt = document.createElement('option');
    opt.value = id;
    opt.textContent = theme.name;
    themeSelect.appendChild(opt);
  }
  themeSelect.value = currentThemeId;

  // Build the visual picker
  buildSyntaxThemePicker();
}

function buildSyntaxThemePicker() {
  const picker = document.getElementById('syntax-theme-picker');
  if (!picker) return;
  picker.innerHTML = '';

  const previewKeys = ['keyword', 'string', 'function', 'type', 'number', 'variable', 'comment'];

  for (const [id, theme] of Object.entries(THEMES)) {
    const option = document.createElement('button');
    option.className = 'syntax-theme-option' + (id === currentThemeId ? ' active' : '');

    // Color swatches
    const swatches = document.createElement('div');
    swatches.className = 'syntax-theme-swatches';
    for (const key of previewKeys) {
      const bar = document.createElement('span');
      bar.className = 'swatch-bar';
      bar.style.background = theme.colors[key] || '#888';
      swatches.appendChild(bar);
    }

    // Name
    const name = document.createElement('span');
    name.className = 'syntax-theme-name';
    name.textContent = theme.name;

    option.appendChild(swatches);
    option.appendChild(name);

    // Active indicator
    if (id === currentThemeId) {
      const dot = document.createElement('span');
      dot.className = 'syntax-theme-active-dot';
      option.appendChild(dot);
    }

    option.addEventListener('click', (e) => {
      e.stopPropagation();
      currentThemeId = id;
      customColors = null;
      themeSelect.value = id;
      applyTheme(id);
      render();
      saveToStorage();
      buildSyntaxThemePicker(); // refresh active state
    });

    picker.appendChild(option);
  }
}
function getActiveColors() { return customColors || THEMES[currentThemeId].colors; }
function applyTheme(id) {
  const colors = getActiveColors(); const root = document.documentElement;
  for (const [key, val] of Object.entries(colors)) root.style.setProperty(`--hl-${key}`, val);
  for (const cat of categories) { if (!colors[cat.id]) { const idx = categories.indexOf(cat); root.style.setProperty(`--hl-${cat.id}`, generateColorForTheme(THEMES[id].colors, idx)); } }
  themeSelect.value = id;
}
function openThemeEditor() {
  const container = document.getElementById('theme-color-rows'); container.innerHTML = ''; const colors = getActiveColors();
  for (const cat of categories) {
    const color = colors[cat.id] || getComputedStyle(document.documentElement).getPropertyValue(`--hl-${cat.id}`).trim();
    const row = document.createElement('div'); row.className = 'color-row';
    row.innerHTML = `<label>${cat.label}</label><input type="color" data-cat="${cat.id}" value="${color}" />`;
    container.appendChild(row);
  }
  document.getElementById('theme-modal').classList.add('open');
}
function saveThemeEdits() {
  const inputs = document.querySelectorAll('#theme-color-rows input[type="color"]'); customColors = {};
  for (const [key, val] of Object.entries(THEMES[currentThemeId].colors)) customColors[key] = val;
  inputs.forEach(input => { customColors[input.dataset.cat] = input.value; });
  applyTheme(currentThemeId); render(); document.getElementById('theme-modal').classList.remove('open');
  showToast('Theme customized'); saveToStorage();
}

// ─────────────────────────────────────────────
// SETTINGS
// ─────────────────────────────────────────────
function openSettingsModal() {
  document.getElementById('setting-indent-size').value = indentSize;
  document.getElementById('setting-line-height').value = editorLineHeight;
  document.getElementById('line-height-display').textContent = editorLineHeight.toFixed(1);
  const fontList = document.getElementById('font-list'); fontList.innerHTML = '';
  const allOptions = [...ALL_FONTS];
  if (customFontName && customFontFamily) allOptions.unshift({ name: `📁 ${customFontName}`, family: customFontFamily, url: null, isCustom: true });
  for (const font of allOptions) {
    const btn = document.createElement('button');
    btn.className = 'font-option' + (selectedFontFamily === font.family ? ' selected' : '');
    btn.innerHTML = `<span class="font-check">${selectedFontFamily === font.family ? '✓' : ''}</span><span class="font-preview" style="font-family:${font.family}">${font.name}</span>`;
    btn.addEventListener('click', () => { fontList.querySelectorAll('.font-option').forEach(b => { b.classList.remove('selected'); b.querySelector('.font-check').textContent = ''; }); btn.classList.add('selected'); btn.querySelector('.font-check').textContent = '✓'; btn._fontFamily = font.family; btn._fontName = font.name; });
    btn._fontFamily = font.family; btn._fontName = font.name; fontList.appendChild(btn);
  }
  document.getElementById('custom-font-name').textContent = customFontName ? `Loaded: ${customFontName}` : '';
  document.getElementById('settings-modal').classList.add('open');
}
function onFontFileSelected(e) {
  const file = e.target.files[0]; if (!file) return; const reader = new FileReader();
  reader.onload = () => { loadCustomFontFromDataUrl(file.name, reader.result); document.getElementById('custom-font-name').textContent = `Loaded: ${file.name}`; showToast(`Font "${file.name}" loaded`); selectedFontFamily = customFontFamily; selectedFontName = customFontName; openSettingsModal(); };
  reader.readAsDataURL(file); e.target.value = '';
}
function saveSettings() {
  indentSize = Math.max(1, Math.min(16, parseInt(document.getElementById('setting-indent-size').value) || 4));
  editorLineHeight = parseFloat(document.getElementById('setting-line-height').value) || 1.6;
  const selectedBtn = document.querySelector('#font-list .font-option.selected');
  if (selectedBtn) { selectedFontFamily = selectedBtn._fontFamily; selectedFontName = selectedBtn._fontName; }
  applyFont(selectedFontFamily); applyLineHeight(editorLineHeight);
  updateLineNumbers(); updateHelpContent(); updateScrollPadding(); updateIndentGuides(); render();
  document.getElementById('settings-modal').classList.remove('open'); showToast('Settings applied'); saveToStorage();
}

// ─────  ───────────────────────────────────────
// SIDEBAR
// ─────────────────────────────────────────────
function buildSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = '<h3>Highlight As</h3>';

  categories.forEach((cat, idx) => {
    const isCustom = !BUILTIN_IDS.has(cat.id);

    const wrapper = document.createElement('div');
    wrapper.className = 'sidebar-btn-wrapper';

    const btn = document.createElement('button');
    btn.className = 'highlight-btn';
    const theme = THEMES[currentThemeId];
    const color = (customColors && customColors[cat.id]) || (theme && theme.colors[cat.id]) || '#888';
    const styleStr = `background:${color};${cat.bold ? 'border-width:2px;' : ''}`;
    const shortcutLabel = idx < 9 ? `Alt+${idx + 1}` : '';
    btn.innerHTML = `<span class="swatch" style="${styleStr}"></span>${cat.label}<span class="shortcut">${shortcutLabel}</span>`;
    btn.addEventListener('click', () => applyHighlight(cat.id));
    wrapper.appendChild(btn);

    if (isCustom) {
      const actions = document.createElement('div');
      actions.className = 'sidebar-cat-actions';

      const editBtn = document.createElement('button');
      editBtn.className = 'sidebar-cat-action-btn';
      editBtn.textContent = '✏️';
      editBtn.title = 'Edit category';
      editBtn.addEventListener('click', (e) => { e.stopPropagation(); openEditCategoryModal(cat.id); });

      const delBtn = document.createElement('button');
      delBtn.className = 'sidebar-cat-action-btn delete';
      delBtn.textContent = '✕';
      delBtn.title = 'Delete category';
      delBtn.addEventListener('click', (e) => { e.stopPropagation(); deleteCategory(cat.id); });

      actions.appendChild(editBtn);
      actions.appendChild(delBtn);
      wrapper.appendChild(actions);
    }

    sidebar.appendChild(wrapper);
  });

  // Divider
  const div = document.createElement('div');
  div.className = 'sidebar-divider';
  sidebar.appendChild(div);

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.className = 'highlight-btn remove-btn';
  removeBtn.innerHTML = `<span class="swatch remove-swatch">✕</span>Remove<span class="shortcut">Alt+⌫</span>`;
  removeBtn.addEventListener('click', removeHighlight);
  sidebar.appendChild(removeBtn);

  // Add category button
  const addBtn = document.createElement('button');
  addBtn.className = 'highlight-btn add-cat-btn';
  addBtn.innerHTML = `<span class="swatch" style="background:transparent;border:1px dashed var(--line-num);display:flex;align-items:center;justify-content:center;font-size:0.7rem;color:var(--line-num);">+</span>Add Category`;
  addBtn.addEventListener('click', openNewCategoryModal);
  sidebar.appendChild(addBtn);
}

// ─────────────────────────────────────────────
// NEW CATEGORY
// ─────────────────────────────────────────────
function getNextShortcut() { const used = new Set(categories.map(c => c.shortcut)); for (const s of [...DEFAULT_SHORTCUTS, ...EXTRA_SHORTCUTS]) if (!used.has(s)) return s; return null; }
function openNewCategoryModal() { document.getElementById('new-cat-name').value = ''; document.getElementById('new-cat-bold').checked = false; document.getElementById('new-cat-italic').checked = false; updateNewCatPreview(); document.getElementById('new-cat-modal').classList.add('open'); document.getElementById('new-cat-name').focus(); }

function updateNewCatPreview() {
  const preview = document.getElementById('new-cat-preview');
  const name = document.getElementById('new-cat-name').value.trim();
  preview.innerHTML = '';

  if (!name) return;

  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');

  for (const [themeId, theme] of Object.entries(THEMES)) {
    const modal = document.getElementById('new-cat-modal');
    const editId = modal._editCatId;
    const color = (editId && theme.colors[editId]) ? theme.colors[editId] : generateColorForTheme(theme.colors, categories.length);

    const chip = document.createElement('div');
    chip.className = 'preview-color';
    chip.innerHTML = `<span class="dot" style="background:${color};width:10px;height:10px;border-radius:50%;flex-shrink:0;"></span><span>${theme.name}</span>`;
    preview.appendChild(chip);
  }
}

function addNewCategory() {
  const modal = document.getElementById('new-cat-modal');
  const nameInput = document.getElementById('new-cat-name');
  const boldCheck = document.getElementById('new-cat-bold');
  const italicCheck = document.getElementById('new-cat-italic');

  const name = nameInput.value.trim();
  if (!name) { showToast('Enter a category name'); return; }

  const editId = modal._editCatId;

  if (editId) {
    // ── Editing existing category ──
    const cat = categories.find(c => c.id === editId);
    if (!cat) return;

    cat.label = name;
    cat.bold = boldCheck.checked;
    cat.italic = italicCheck.checked;

    modal._editCatId = null;
    modal.querySelector('h2').textContent = 'Add Highlight Category';
    document.getElementById('btn-new-cat-add').textContent = 'Add Category';
    modal.classList.remove('open');

    updateDynamicStyles();
    buildSidebar();
    render();
    saveToStorage();
    showToast(`Updated category "${name}"`);
  } else {
    // ── Creating new category ──
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
    if (categories.some(c => c.id === id)) {
      showToast('Category already exists');
      return;
    }

    const newCat = {
      id,
      label: name,
      bold: boldCheck.checked,
      italic: italicCheck.checked,
    };

    // Generate colors for each theme
    for (const [themeId, theme] of Object.entries(THEMES)) {
      theme.colors[id] = generateColorForTheme(theme.colors, categories.length);
    }

    categories.push(newCat);
    modal.classList.remove('open');

    updateDynamicStyles();
    buildSidebar();
    updateHelpContent();
    saveToStorage();
    showToast(`Added category "${name}"`);
  }

  nameInput.value = '';
  boldCheck.checked = false;
  italicCheck.checked = false;
}

// ─────────────────────────────────────────────
// HELP
// ─────────────────────────────────────────────
function updateHelpContent() {
  const el = document.getElementById('help-content');
  const sl = categories.filter(c => c.shortcut).map(c => `<kbd>Alt+${c.shortcut}</kbd> ${c.label}`).join(' · ');
  el.innerHTML = `<h4>Applying Highlights</h4><p>Select text, then press the shortcut or click a sidebar button:</p><p>${sl}</p><h4>Removing Highlights</h4><p><kbd>Alt+Backspace</kbd> Remove highlights from selected text</p><h4>Indentation</h4><p><kbd>Ctrl+]</kbd> Indent selected lines (${indentSize} spaces)</p><p><kbd>Ctrl+[</kbd> Outdent selected lines (${indentSize} spaces)</p><h4>Folding</h4><p>Click the ▶ arrow next to a line number to fold/unfold an indented block</p><h4>Other</h4><p><kbd>Ctrl+S</kbd> / <kbd>⌘+S</kbd> Save to browser storage</p><p><kbd>Tab</kbd> Insert ${indentSize} spaces</p><p><kbd>Enter</kbd> New line with auto-indent</p><p>You can scroll past the end of the document.</p>`;
}

// ─────────────────────────────────────────────
// HIGHLIGHT LOGIC
// ─────────────────────────────────────────────
function applyHighlight(category) {
  const start = editorEl.selectionStart, end = editorEl.selectionEnd;
  if (start === end) { showToast('Select some text first'); return; }
  removeOverlapping(start, end);
  highlights.push({ start, end, category });
  highlights.sort((a, b) => a.start - b.start);
  render(); saveToStorage();
  showToast(`Applied "${category}" highlight`);
  statusLeft.textContent = `Highlighted as ${category}`;
}

function removeHighlight() {
  const start = editorEl.selectionStart, end = editorEl.selectionEnd;
  if (start === end) { showToast('Select text to remove highlighting'); return; }
  const before = highlights.length;
  removeOverlapping(start, end);
  if (highlights.length < before) {
    render(); saveToStorage();
    showToast('Highlights removed');
    statusLeft.textContent = 'Highlights removed';
  } else {
    showToast('No highlights in selection');
  }
}

function removeOverlapping(start, end) {
  highlights = highlights.filter(h => h.end <= start || h.start >= end);
}

// ─────────────────────────────────────────────
// EDITOR INPUT
// ─────────────────────────────────────────────
function onEditorInput() {
  const newText = editorEl.value;
  adjustHighlightsOnEdit(previousText, newText);
  recalcFoldsAfterEdit(previousText, newText);
  previousText = newText;
  render(); updateLineNumbers(); updateScrollPadding();
  updateIndentGuides(); saveToStorage();
}

function adjustHighlightsOnEdit(oldText, newText) {
  const oldLen = oldText.length, newLen = newText.length;
  let prefixLen = 0;
  while (prefixLen < oldLen && prefixLen < newLen && oldText[prefixLen] === newText[prefixLen]) prefixLen++;
  let oldSuffix = oldLen, newSuffix = newLen;
  while (oldSuffix > prefixLen && newSuffix > prefixLen && oldText[oldSuffix - 1] === newText[newSuffix - 1]) { oldSuffix--; newSuffix--; }
  const deleteStart = prefixLen, deleteEnd = oldSuffix;
  const insertLen = newSuffix - prefixLen;
  const delta = insertLen - (deleteEnd - deleteStart);
  const updated = [];
  for (const h of highlights) {
    const { start, end, category } = h;
    if (end <= deleteStart) updated.push(h);
    else if (start >= deleteEnd) updated.push({ start: start + delta, end: end + delta, category });
    else if (start >= deleteStart && end <= deleteEnd) { /* deleted */ }
    else if (start < deleteStart && end > deleteEnd) updated.push({ start, end: end + delta, category });
    else if (start < deleteStart && end > deleteStart && end <= deleteEnd) updated.push({ start, end: deleteStart, category });
    else if (start >= deleteStart && start < deleteEnd && end > deleteEnd) updated.push({ start: deleteStart + insertLen, end: end + delta, category });
  }
  highlights = updated.filter(h => h.end > h.start);
}

// ─────────────────────────────────────────────
// INDENT / OUTDENT
// ─────────────────────────────────────────────
function indentLines() {
  const val = editorEl.value;
  const start = editorEl.selectionStart, end = editorEl.selectionEnd;
  const indent = ' '.repeat(indentSize);
  const blockStart = val.lastIndexOf('\n', start - 1) + 1;
  const afterEnd = val.indexOf('\n', end);
  const blockEnd = afterEnd === -1 ? val.length : afterEnd;
  const before = val.substring(0, blockStart);
  const block = val.substring(blockStart, blockEnd);
  const after = val.substring(blockEnd);
  const lines = block.split('\n');
  const newBlock = lines.map(line => indent + line).join('\n');
  const oldText = editorEl.value;
  editorEl.value = before + newBlock + after;
  editorEl.selectionStart = start + indentSize;
  editorEl.selectionEnd = end + indentSize * lines.length;
  adjustHighlightsOnEdit(oldText, editorEl.value);
  recalcFoldsAfterEdit(oldText, editorEl.value);
  previousText = editorEl.value;
  render(); updateLineNumbers(); updateIndentGuides(); saveToStorage();
}

function outdentLines() {
  const val = editorEl.value;
  const start = editorEl.selectionStart, end = editorEl.selectionEnd;
  const blockStart = val.lastIndexOf('\n', start - 1) + 1;
  const afterEnd = val.indexOf('\n', end);
  const blockEnd = afterEnd === -1 ? val.length : afterEnd;
  const before = val.substring(0, blockStart);
  const block = val.substring(blockStart, blockEnd);
  const after = val.substring(blockEnd);
  const lines = block.split('\n');
  let removedFirst = 0, totalRemoved = 0, firstDone = false;
  const newLines = lines.map(line => {
    let removed = 0, nl = line;
    for (let j = 0; j < indentSize && nl.length > 0 && nl[0] === ' '; j++) { nl = nl.substring(1); removed++; }
    if (!firstDone) { removedFirst = removed; firstDone = true; }
    totalRemoved += removed; return nl;
  });
  const newBlock = newLines.join('\n');
  const oldText = editorEl.value;
  editorEl.value = before + newBlock + after;
  editorEl.selectionStart = Math.max(blockStart, start - removedFirst);
  editorEl.selectionEnd = end - totalRemoved;
  adjustHighlightsOnEdit(oldText, editorEl.value);
  recalcFoldsAfterEdit(oldText, editorEl.value);
  previousText = editorEl.value;
  render(); updateLineNumbers(); updateIndentGuides(); saveToStorage();
}

// ─────────────────────────────────────────────
// RENDER
// ─────────────────────────────────────────────
function render() {
  const text = editorEl.value;
  if (!text) { highlightLayer.innerHTML = ''; updateStatusHighlights(); return; }

  const lines = text.split('\n');
  const visibleLines = getVisibleLines(lines);

  // Build a mapping from visible lines back to char offsets
  const lineOffsets = [];
  let offset = 0;
  for (let i = 0; i < lines.length; i++) {
    lineOffsets.push(offset);
    offset += lines[i].length + 1; // +1 for \n
  }

  // Build the visible text with fold ellipses
  let html = '';
  for (let vi = 0; vi < visibleLines.length; vi++) {
    const { lineIdx } = visibleLines[vi];
    const lineStart = lineOffsets[lineIdx];
    const lineEnd = lineStart + lines[lineIdx].length;

    // Render this line with highlights
    html += renderLineHighlights(text, lineStart, lineEnd);

    // If this line has a fold, add ellipsis
    if (isLineFolded(lineIdx)) {
      html += '<span class="fold-ellipsis">⋯</span>';
    }

    if (vi < visibleLines.length - 1) html += '\n';
  }

  html += '\n';
  highlightLayer.innerHTML = html;
  updateStatusHighlights();
}

function renderLineHighlights(text, lineStart, lineEnd) {
  const sorted = highlights
    .filter(h => h.end > lineStart && h.start < lineEnd)
    .sort((a, b) => a.start - b.start);

  let html = '';
  let pos = lineStart;

  for (const h of sorted) {
    const hStart = Math.max(h.start, lineStart);
    const hEnd = Math.min(h.end, lineEnd);
    if (hStart < pos) continue;
    if (hStart > pos) html += escapeHtml(text.slice(pos, hStart));
    html += `<span class="hl-${h.category}">${escapeHtml(text.slice(hStart, hEnd))}</span>`;
    pos = hEnd;
  }
  if (pos < lineEnd) html += escapeHtml(text.slice(pos, lineEnd));
  return html;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ─────────────────────────────────────────────
// LINE NUMBERS (with fold toggles)
// ─────────────────────────────────────────────

function updateLineNumbers() {
  lineNumbers.innerHTML = '';
  const lines = editorEl.value.split('\n');
  const visibleLines = getVisibleLines(lines);
  const foldable = getFoldableLines(lines);

  // Measure actual line height from the editor
  const editorStyles = getComputedStyle(editorEl);
  const fontSize = parseFloat(editorStyles.fontSize);
  const lh = fontSize * editorLineHeight;

  const wrapper = document.createElement('div');
  wrapper.style.paddingBottom = editorEl.style.paddingBottom || '0px';

  for (const { lineIdx } of visibleLines) {
    const row = document.createElement('div');
    row.className = 'line-num-row';
    // Force exact pixel height to match textarea
    row.style.height = lh + 'px';
    row.style.lineHeight = lh + 'px';

    if (foldable.has(lineIdx) || isLineFolded(lineIdx)) {
      const toggle = document.createElement('span');
      toggle.className = 'fold-toggle';
      toggle.textContent = isLineFolded(lineIdx) ? '▶' : '▼';
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFold(lineIdx);
      });
      row.appendChild(toggle);
    }

    const num = document.createElement('span');
    num.className = 'line-num-text';
    num.textContent = lineIdx + 1;
    row.appendChild(num);
    wrapper.appendChild(row);
  }

  lineNumbers.appendChild(wrapper);
}

// ─────────────────────────────────────────────
// SCROLL SYNC
// ─────────────────────────────────────────────
function syncScroll() {
  highlightLayer.scrollTop = editorEl.scrollTop;
  highlightLayer.scrollLeft = editorEl.scrollLeft;
  lineNumbers.scrollTop = editorEl.scrollTop;

  // Move indent guides with scroll via transform
  const container = document.getElementById('indent-guides-container');
  if (container) {
    container.style.transform = `translateY(${-editorEl.scrollTop}px)`;
  }
}

// ─────────────────────────────────────────────
// KEYBOARD SHORTCUTS
// ─────────────────────────────────────────────
function onKeyDown(e) {
  // Auto-indent on Enter
  if (e.key === 'Enter') {
    e.preventDefault();
    const start = editorEl.selectionStart;
    const val = editorEl.value;
    const lineStart = val.lastIndexOf('\n', start - 1) + 1;
    const line = val.slice(lineStart, start);
    const indent = line.match(/^[\t ]*/)[0];
    const insert = '\n' + indent;
    editorEl.value = val.substring(0, start) + insert + val.substring(editorEl.selectionEnd);
    editorEl.selectionStart = editorEl.selectionEnd = start + insert.length;
    onEditorInput();
    return;
  }

  // Tab — insert spaces
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = editorEl.selectionStart;
    const end = editorEl.selectionEnd;
    const val = editorEl.value;
    const spaces = ' '.repeat(indentSize);
    editorEl.value = val.substring(0, start) + spaces + val.substring(end);
    editorEl.selectionStart = editorEl.selectionEnd = start + indentSize;
    onEditorInput();
    return;
  }

  // Ctrl+S / Cmd+S — save
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    saveToStorage();
    showToast('Saved to browser storage');
    return;
  }

  // Ctrl+] — indent
  if ((e.ctrlKey || e.metaKey) && e.key === ']') {
    e.preventDefault();
    indentLines();
    return;
  }

  // Ctrl+[ — outdent
  if ((e.ctrlKey || e.metaKey) && e.key === '[') {
    e.preventDefault();
    outdentLines();
    return;
  }

  // Alt shortcuts
  if (e.altKey) {
    if (e.key === 'Backspace') {
      e.preventDefault();
      removeHighlight();
      return;
    }
    const shortcutMap = {};
    for (const cat of categories) {
      if (cat.shortcut) shortcutMap[cat.shortcut] = cat.id;
    }
    if (shortcutMap[e.key]) {
      e.preventDefault();
      applyHighlight(shortcutMap[e.key]);
    }
  }
}

// ─────────────────────────────────────────────
// STATUS BAR
// ─────────────────────────────────────────────
function updateCursorStatus() {
  const val = editorEl.value;
  const pos = editorEl.selectionStart;
  const lines = val.substring(0, pos).split('\n');
  const ln = lines.length;
  const col = lines[lines.length - 1].length + 1;
  statusCursor.textContent = `Ln ${ln}, Col ${col}`;
}

function updateStatusHighlights() {
  const n = highlights.length;
  statusHighlights.textContent = `${n} highlight${n !== 1 ? 's' : ''}`;
}

// ─────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────
let toastTimeout;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toastEl.classList.remove('show'), 2000);
}

// ─────────────────────────────────────────────
// PERSISTENCE
// ─────────────────────────────────────────────
const BUILTIN_IDS = new Set([
  'keyword', 'string', 'comment', 'function', 'type', 'number',
  'operator', 'variable', 'constant', 'decorator', 'tag', 'attribute'
]);

function getThemeExtensions() {
  const exts = {};
  for (const [themeId, theme] of Object.entries(THEMES)) {
    const ext = {};
    for (const [key, val] of Object.entries(theme.colors)) {
      if (!BUILTIN_IDS.has(key)) ext[key] = val;
    }
    if (Object.keys(ext).length > 0) exts[themeId] = ext;
  }
  return exts;
}

function saveToStorage() {
  const data = {
    text: editorEl.value,
    highlights,
    themeId: currentThemeId,
    customColors,
    customCategories: categories.filter(c => !BUILTIN_IDS.has(c.id)),
    themeExtensions: getThemeExtensions(),
    indentSize,
    editorLineHeight,
    selectedFontFamily,
    selectedFontName,
    customFontName,
    customFontFamily,
    customFontDataUrl,
    foldedRegions,
    currentUIThemeId,
    customUIColors,
    importedSyntaxThemes: getImportedSyntaxThemes(),
    importedUIThemes: getImportedUIThemes(),
  };
  localStorage.setItem('chromatura_data', JSON.stringify(data));
}

const _baseSaveToStorage = saveToStorage;
saveToStorage = function () {
  _baseSaveToStorage();
  saveFilesToStorage();
};

function loadFromStorage() {
  try {
    const raw = localStorage.getItem('chromatura_data');
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.text) { editorEl.value = data.text; previousText = data.text; }
    if (data.highlights) highlights = data.highlights;
    if (data.themeId) currentThemeId = data.themeId;
    if (data.customColors) customColors = data.customColors;
    if (data.indentSize) indentSize = data.indentSize;
    if (data.editorLineHeight) editorLineHeight = data.editorLineHeight;
    if (data.selectedFontFamily) selectedFontFamily = data.selectedFontFamily;
    if (data.selectedFontName) selectedFontName = data.selectedFontName;
    if (data.foldedRegions) foldedRegions = data.foldedRegions;
    if (data.customFontDataUrl && data.customFontName) {
      loadCustomFontFromDataUrl(data.customFontName, data.customFontDataUrl);
      if (data.customFontFamily) customFontFamily = data.customFontFamily;
    }
    if (data.customCategories && data.customCategories.length > 0) {
      for (const cat of data.customCategories) {
        if (!categories.some(c => c.id === cat.id)) categories.push(cat);
      }
    }
    if (data.themeExtensions) {
      for (const [themeId, ext] of Object.entries(data.themeExtensions)) {
        if (THEMES[themeId]) Object.assign(THEMES[themeId].colors, ext);
      }
    }

    // Restore imported/random syntax themes
    if (data.importedSyntaxThemes) {
      for (const [id, theme] of Object.entries(data.importedSyntaxThemes)) {
        if (!THEMES[id]) {
          THEMES[id] = theme;
        }
      }
    }

    // Restore imported/random UI themes
    if (data.importedUIThemes) {
      for (const [id, theme] of Object.entries(data.importedUIThemes)) {
        if (!UI_THEMES[id]) {
          UI_THEMES[id] = theme;
        }
      }
    }

    // Restore UI theme selection
    if (data.currentUIThemeId) {
      currentUIThemeId = data.currentUIThemeId;
    }
    if (data.customUIColors) {
      customUIColors = data.customUIColors;
    }

    // Validate that the saved syntax theme still exists
    if (!THEMES[currentThemeId]) {
      currentThemeId = 'catppuccin';
      customColors = null;
    }

    // Validate that the saved UI theme still exists
    if (currentUIThemeId && !UI_THEMES[currentUIThemeId] && !customUIColors) {
      currentUIThemeId = 'catppuccin_mocha';
      customUIColors = null;
    }

  } catch (e) {
    console.warn('Failed to load saved data:', e);
  }
}

function getImportedSyntaxThemes() {
  const builtinIds = new Set([
    'catppuccin', 'monokai', 'dracula', 'solarized',
    'github_dark', 'nord', 'gruvbox', 'one_dark'
  ]);
  const imported = {};
  for (const [id, theme] of Object.entries(THEMES)) {
    if (!builtinIds.has(id)) {
      imported[id] = theme;
    }
  }
  return imported;
}

function getImportedUIThemes() {
  const originals = new Set([
    'catppuccin_mocha', 'catppuccin_latte', 'tokyo_night', 'rose_pine',
    'github_dimmed', 'everforest', 'kanagawa', 'solarized_dark',
    'midnight', 'warm_dark', 'nord_ui', 'ayu_dark'
  ]);
  const imported = {};
  for (const [id, theme] of Object.entries(UI_THEMES)) {
    if (!originals.has(id)) {
      imported[id] = theme;
    }
  }
  return imported;
}

// ─────────────────────────────────────────────
// EXPORT / IMPORT
// ─────────────────────────────────────────────
function exportData() {
  const data = {
    text: editorEl.value,
    highlights,
    themeId: currentThemeId,
    customColors,
    customCategories: categories.filter(c => !BUILTIN_IDS.has(c.id)),
    themeExtensions: getThemeExtensions(),
    indentSize,
    editorLineHeight,
    selectedFontFamily,
    selectedFontName,
    customFontName,
    customFontFamily,
    customFontDataUrl,
    foldedRegions,
    currentUIThemeId,
    customUIColors,
    exportedAt: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `chromatura-export-${Date.now()}.json`;
  a.click(); URL.revokeObjectURL(url);
  showToast('Exported!');
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (data.text !== undefined) { editorEl.value = data.text; previousText = data.text; }
      if (data.highlights) highlights = data.highlights;
      if (data.themeId && THEMES[data.themeId]) currentThemeId = data.themeId;
      if (data.customColors) customColors = data.customColors;
      if (data.indentSize) indentSize = data.indentSize;
      if (data.editorLineHeight) editorLineHeight = data.editorLineHeight;
      if (data.selectedFontFamily) selectedFontFamily = data.selectedFontFamily;
      if (data.selectedFontName) selectedFontName = data.selectedFontName;
      if (data.foldedRegions) foldedRegions = data.foldedRegions;
      if (data.customFontDataUrl && data.customFontName) {
        loadCustomFontFromDataUrl(data.customFontName, data.customFontDataUrl);
        if (data.customFontFamily) customFontFamily = data.customFontFamily;
      }
      if (data.customCategories) {
        for (const cat of data.customCategories) {
          if (!categories.some(c => c.id === cat.id)) categories.push(cat);
        }
      }
      if (data.themeExtensions) {
        for (const [themeId, ext] of Object.entries(data.themeExtensions)) {
          if (THEMES[themeId]) Object.assign(THEMES[themeId].colors, ext);
        }
      }

      // Restore UI theme
      if (data.currentUIThemeId && UI_THEMES[data.currentUIThemeId]) {
        currentUIThemeId = data.currentUIThemeId;
      }
      if (data.customUIColors) {
        customUIColors = data.customUIColors;
      }
      applyUITheme(customUIColors || UI_THEMES[currentUIThemeId]);

      updateDynamicStyles(); applyTheme(currentThemeId);
      applyFont(selectedFontFamily); applyLineHeight(editorLineHeight);
      buildSidebar(); render(); updateLineNumbers();
      updateHelpContent(); updateScrollPadding();
      updateIndentGuides(); saveToStorage();
      showToast('Imported successfully!');
    } catch (err) {
      showToast('Invalid file format');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// ─────────────────────────────────────────────
// EXPORT TO IMAGE
// ─────────────────────────────────────────────

function openExportImageModal() {
  // Populate theme select
  const sel = document.getElementById('img-export-theme');
  sel.innerHTML = '';
  for (const [id, theme] of Object.entries(THEMES)) {
    const opt = document.createElement('option');
    opt.value = id;
    opt.textContent = theme.name;
    if (id === currentThemeId) opt.selected = true;
    sel.appendChild(opt);
  }

  const totalLines = editorEl.value.split('\n').length;
  document.getElementById('img-lines-per').value = totalLines;
  document.getElementById('img-all-lines').checked = true;
  document.getElementById('img-lines-per').disabled = true;
  updateImgPageInfo();
  updateImgPreview();

  document.getElementById('export-img-modal').classList.add('open');
}

function updateImgPageInfo() {
  const totalLines = editorEl.value.split('\n').length;
  const allLines = document.getElementById('img-all-lines').checked;
  const linesPerInput = document.getElementById('img-lines-per');
  const info = document.getElementById('img-page-info');

  if (allLines) {
    linesPerInput.disabled = true;
    info.textContent = `${totalLines} lines → 1 image`;
  } else {
    linesPerInput.disabled = false;
    const linesPerPage = Math.max(1, parseInt(linesPerInput.value) || totalLines);
    const pages = Math.ceil(totalLines / linesPerPage);
    info.textContent = `${totalLines} lines ÷ ${linesPerPage} per image → ${pages} image${pages > 1 ? 's' : ''}`;
  }
}

function updateImgPreview() {
  const preview = document.getElementById('img-preview');
  preview.innerHTML = '';

  const lines = editorEl.value.split('\n');
  // Show first few lines as a mini preview
  const previewLines = lines.slice(0, Math.min(8, lines.length));
  const canvas = renderCodeToCanvas(previewLines, 0, {
    scale: 1,
    padding: parseInt(document.getElementById('img-padding').value) || 32,
    showLineNumbers: document.getElementById('img-line-numbers').checked,
    themeId: document.getElementById('img-export-theme').value,
    maxWidth: 460,
  });
  preview.appendChild(canvas);
}

function getThemeColors(themeId) {
  if (customColors && themeId === currentThemeId) return { ...customColors };
  const base = { ...THEMES[themeId].colors };
  // Include any custom category colors
  for (const cat of categories) {
    if (!base[cat.id]) {
      base[cat.id] = generateColorForTheme(THEMES[themeId].colors, categories.indexOf(cat));
    }
  }
  return base;
}

function measureTextWidth(ctx, text) {
  return ctx.measureText(text).width;
}

function renderCodeToCanvas(lines, startLineIdx, opts) {
  const {
    scale = 2,
    padding = 32,
    showLineNumbers = true,
    themeId = currentThemeId,
    maxWidth = null,
  } = opts;

  const colors = getThemeColors(themeId);
  const bgColor = '#181825'; // editor bg
  const fgColor = '#cdd6f4'; // editor fg
  const lineNumColor = '#6c7086';

  // Create a temp canvas to measure
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');

  // Get the current font
  const fontFamily = selectedFontFamily || "'JetBrains Mono', monospace";
  const baseFontSize = 14; // px at 1x
  const fontSize = baseFontSize * scale;
  const lineHeight = fontSize * editorLineHeight;

  tempCtx.font = `${fontSize}px ${fontFamily}`;

  // Calculate line number width
  const maxLineNum = startLineIdx + lines.length;
  const lineNumStr = String(maxLineNum);
  const lineNumWidth = showLineNumbers
    ? measureTextWidth(tempCtx, lineNumStr) + 24 * scale
    : 0;

  // Calculate content width (measure all lines)
  let maxContentWidth = 0;
  for (const line of lines) {
    const w = measureTextWidth(tempCtx, line || ' ');
    if (w > maxContentWidth) maxContentWidth = w;
  }

  const contentWidth = lineNumWidth + maxContentWidth + padding * 2 * scale;
  let canvasWidth = contentWidth;

  if (maxWidth) {
    canvasWidth = Math.min(canvasWidth, maxWidth * scale);
  }

  const canvasHeight = lines.length * lineHeight + padding * 2 * scale;

  const canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Optional: rounded rect clip for nicer look
  const radius = 8 * scale;
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(canvasWidth - radius, 0);
  ctx.quadraticCurveTo(canvasWidth, 0, canvasWidth, radius);
  ctx.lineTo(canvasWidth, canvasHeight - radius);
  ctx.quadraticCurveTo(canvasWidth, canvasHeight, canvasWidth - radius, canvasHeight);
  ctx.lineTo(radius, canvasHeight);
  ctx.quadraticCurveTo(0, canvasHeight, 0, canvasHeight - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();
  ctx.clip();
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  const padX = padding * scale;
  const padY = padding * scale;

  // Compute character offsets for the full text so we can map highlights
  const fullText = editorEl.value;
  const allLines = fullText.split('\n');
  const lineOffsets = [];
  let off = 0;
  for (let i = 0; i < allLines.length; i++) {
    lineOffsets.push(off);
    off += allLines[i].length + 1;
  }

  for (let i = 0; i < lines.length; i++) {
    const actualLineIdx = startLineIdx + i;
    const y = padY + i * lineHeight + fontSize * 0.8; // baseline

    // Line number
    if (showLineNumbers) {
      ctx.font = `${fontSize}px ${fontFamily}`;
      ctx.fillStyle = lineNumColor;
      const numText = String(actualLineIdx + 1);
      const numWidth = measureTextWidth(ctx, numText);
      ctx.fillText(numText, padX + lineNumWidth - numWidth - 12 * scale, y);
    }

    // Line content with highlights
    const lineText = lines[i];
    const lineStart = lineOffsets[actualLineIdx];
    const lineEnd = lineStart + lineText.length;
    const x0 = padX + lineNumWidth;

    // Gather highlights for this line
    const lineHighlights = highlights
      .filter(h => h.end > lineStart && h.start < lineEnd)
      .sort((a, b) => a.start - b.start);

    let charX = x0;
    let pos = lineStart;

    for (const h of lineHighlights) {
      const hStart = Math.max(h.start, lineStart);
      const hEnd = Math.min(h.end, lineEnd);

      // Draw unhighlighted text before this highlight
      if (hStart > pos) {
        const segment = fullText.slice(pos, hStart);
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = fgColor;
        ctx.fillText(segment, charX, y);
        charX += measureTextWidth(ctx, segment);
      }

      // Draw highlighted text
      const segment = fullText.slice(hStart, hEnd);
      const cat = categories.find(c => c.id === h.category);
      const color = colors[h.category] || fgColor;

      let fontStyle = '';
      if (cat && cat.bold && cat.italic) fontStyle = 'bold italic ';
      else if (cat && cat.bold) fontStyle = 'bold ';
      else if (cat && cat.italic) fontStyle = 'italic ';

      ctx.font = `${fontStyle}${fontSize}px ${fontFamily}`;
      ctx.fillStyle = color;
      ctx.fillText(segment, charX, y);
      charX += measureTextWidth(ctx, segment);
      pos = hEnd;
    }

    // Draw remaining unhighlighted text
    if (pos < lineEnd) {
      const segment = fullText.slice(pos, lineEnd);
      ctx.font = `${fontSize}px ${fontFamily}`;
      ctx.fillStyle = fgColor;
      ctx.fillText(segment, charX, y);
    }
  }

  return canvas;
}

async function doExportImages() {
  const allLines = editorEl.value.split('\n');
  const totalLines = allLines.length;
  const useAllLines = document.getElementById('img-all-lines').checked;
  const linesPerPage = useAllLines ? totalLines : Math.max(1, parseInt(document.getElementById('img-lines-per').value) || totalLines);
  const scale = parseInt(document.getElementById('img-scale').value) || 2;
  const padding = parseInt(document.getElementById('img-padding').value) || 32;
  const showLineNumbers = document.getElementById('img-line-numbers').checked;
  const themeId = document.getElementById('img-export-theme').value;

  const pages = Math.ceil(totalLines / linesPerPage);

  document.getElementById('export-img-modal').classList.remove('open');

  // Show progress for multiple images
  let progressEl = null;
  if (pages > 1) {
    progressEl = document.createElement('div');
    progressEl.className = 'img-export-progress';
    progressEl.textContent = `Exporting image 1 of ${pages}...`;
    document.body.appendChild(progressEl);
  }

  for (let page = 0; page < pages; page++) {
    if (progressEl) {
      progressEl.textContent = `Exporting image ${page + 1} of ${pages}...`;
    }

    const startLine = page * linesPerPage;
    const endLine = Math.min(startLine + linesPerPage, totalLines);
    const pageLines = allLines.slice(startLine, endLine);

    const canvas = renderCodeToCanvas(pageLines, startLine, {
      scale,
      padding,
      showLineNumbers,
      themeId,
    });

    // Convert to blob and download
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const suffix = pages > 1 ? `-part${page + 1}` : '';
    a.download = `chromatura${suffix}.png`;
    a.click();
    URL.revokeObjectURL(url);

    // Small delay between downloads so browser doesn't block them
    if (pages > 1) {
      await new Promise(r => setTimeout(r, 300));
    }
  }

  if (progressEl) {
    progressEl.textContent = `Exported ${pages} images!`;
    setTimeout(() => progressEl.remove(), 2000);
  } else {
    showToast('Image exported!');
  }
}

// ─────────────────────────────────────────────
// UI THEMES
// ─────────────────────────────────────────────
const UI_THEMES = {
  catppuccin_mocha: {
    name: 'Catppuccin Mocha',
    bg: '#1e1e2e', editorBg: '#181825', fg: '#cdd6f4',
    accent: '#cba6f7', toolbar: '#313244', border: '#45475a',
    buttonBg: '#45475a', buttonHover: '#585b70', lineNum: '#6c7086',
    scrollThumb: '#45475a', selection: 'rgba(203, 166, 247, 0.25)',
    accentHover: '#b4befe',
  },
  catppuccin_latte: {
    name: 'Catppuccin Latte',
    bg: '#eff1f5', editorBg: '#e6e9ef', fg: '#4c4f69',
    accent: '#8839ef', toolbar: '#ccd0da', border: '#bcc0cc',
    buttonBg: '#bcc0cc', buttonHover: '#acb0be', lineNum: '#9ca0b0',
    scrollThumb: '#acb0be', selection: 'rgba(136, 57, 239, 0.2)',
    accentHover: '#7287fd',
  },
  tokyo_night: {
    name: 'Tokyo Night',
    bg: '#1a1b26', editorBg: '#16161e', fg: '#a9b1d6',
    accent: '#7aa2f7', toolbar: '#24283b', border: '#3b4261',
    buttonBg: '#3b4261', buttonHover: '#414868', lineNum: '#565f89',
    scrollThumb: '#3b4261', selection: 'rgba(122, 162, 247, 0.25)',
    accentHover: '#89ddff',
  },
  rose_pine: {
    name: 'Rosé Pine',
    bg: '#191724', editorBg: '#1f1d2e', fg: '#e0def4',
    accent: '#c4a7e7', toolbar: '#26233a', border: '#403d52',
    buttonBg: '#403d52', buttonHover: '#524f67', lineNum: '#6e6a86',
    scrollThumb: '#403d52', selection: 'rgba(196, 167, 231, 0.25)',
    accentHover: '#f6c177',
  },
  github_dimmed: {
    name: 'GitHub Dimmed',
    bg: '#22272e', editorBg: '#1c2128', fg: '#adbac7',
    accent: '#539bf5', toolbar: '#2d333b', border: '#444c56',
    buttonBg: '#444c56', buttonHover: '#545d68', lineNum: '#768390',
    scrollThumb: '#444c56', selection: 'rgba(83, 155, 245, 0.25)',
    accentHover: '#6cb6ff',
  },
  everforest: {
    name: 'Everforest',
    bg: '#2d353b', editorBg: '#272e33', fg: '#d3c6aa',
    accent: '#a7c080', toolbar: '#343f44', border: '#475258',
    buttonBg: '#475258', buttonHover: '#56635a', lineNum: '#859289',
    scrollThumb: '#475258', selection: 'rgba(167, 192, 128, 0.25)',
    accentHover: '#83c092',
  },
  kanagawa: {
    name: 'Kanagawa',
    bg: '#1f1f28', editorBg: '#16161d', fg: '#dcd7ba',
    accent: '#7e9cd8', toolbar: '#2a2a37', border: '#363646',
    buttonBg: '#363646', buttonHover: '#54546d', lineNum: '#727169',
    scrollThumb: '#363646', selection: 'rgba(126, 156, 216, 0.25)',
    accentHover: '#957fb8',
  },
  solarized_dark: {
    name: 'Solarized Dark',
    bg: '#002b36', editorBg: '#073642', fg: '#839496',
    accent: '#268bd2', toolbar: '#073642', border: '#586e75',
    buttonBg: '#586e75', buttonHover: '#657b83', lineNum: '#586e75',
    scrollThumb: '#586e75', selection: 'rgba(38, 139, 210, 0.25)',
    accentHover: '#2aa198',
  },
  midnight: {
    name: 'Midnight Blue',
    bg: '#0d1117', editorBg: '#010409', fg: '#c9d1d9',
    accent: '#58a6ff', toolbar: '#161b22', border: '#30363d',
    buttonBg: '#21262d', buttonHover: '#30363d', lineNum: '#484f58',
    scrollThumb: '#30363d', selection: 'rgba(88, 166, 255, 0.25)',
    accentHover: '#79c0ff',
  },
  warm_dark: {
    name: 'Warm Dark',
    bg: '#1a1410', editorBg: '#15110d', fg: '#d4c4a8',
    accent: '#e6a855', toolbar: '#2a2118', border: '#3d3228',
    buttonBg: '#3d3228', buttonHover: '#4d4238', lineNum: '#7a6e5d',
    scrollThumb: '#3d3228', selection: 'rgba(230, 168, 85, 0.25)',
    accentHover: '#f0c070',
  },
  nord_ui: {
    name: 'Nord',
    bg: '#2e3440', editorBg: '#242933', fg: '#d8dee9',
    accent: '#88c0d0', toolbar: '#3b4252', border: '#4c566a',
    buttonBg: '#4c566a', buttonHover: '#5e6779', lineNum: '#616e88',
    scrollThumb: '#4c566a', selection: 'rgba(136, 192, 208, 0.25)',
    accentHover: '#81a1c1',
  },
  ayu_dark: {
    name: 'Ayu Dark',
    bg: '#0b0e14', editorBg: '#0d1017', fg: '#bfbdb6',
    accent: '#e6b450', toolbar: '#15191e', border: '#1c2028',
    buttonBg: '#1c2028', buttonHover: '#262b34', lineNum: '#565b66',
    scrollThumb: '#1c2028', selection: 'rgba(230, 180, 80, 0.2)',
    accentHover: '#ffb454',
  },
  // ── Warm Rosé ──
  rose: {
    name: 'Rosé',
    bg: '#2a1f2d', editorBg: '#231a26', fg: '#e8d5e0',
    accent: '#e8849a', toolbar: '#332838', border: '#4a3650',
    buttonBg: '#4a3650', buttonHover: '#5c4562', lineNum: '#7a6580',
    scrollThumb: '#4a3650', selection: 'rgba(232, 132, 154, 0.25)',
    accentHover: '#f0a0b4',
  },

  // ── Deep ocean ──
  abyss: {
    name: 'Abyss',
    bg: '#060b18', editorBg: '#040810', fg: '#8ea4c8',
    accent: '#3d8ef0', toolbar: '#0c1528', border: '#162040',
    buttonBg: '#162040', buttonHover: '#1e2d55', lineNum: '#3a5070',
    scrollThumb: '#162040', selection: 'rgba(61, 142, 240, 0.2)',
    accentHover: '#5eaaff',
  },

  // ── Mint fresh ──
  mint: {
    name: 'Mint',
    bg: '#1a2a28', editorBg: '#152422', fg: '#c8e0d8',
    accent: '#6ee7b7', toolbar: '#223832', border: '#305048',
    buttonBg: '#305048', buttonHover: '#3d6058', lineNum: '#5a8878',
    scrollThumb: '#305048', selection: 'rgba(110, 231, 183, 0.2)',
    accentHover: '#86efca',
  },

  // ── Amber / golden ──
  amber: {
    name: 'Amber',
    bg: '#1c1810', editorBg: '#17140c', fg: '#d8caa8',
    accent: '#f0a830', toolbar: '#28220e', border: '#3d3518',
    buttonBg: '#3d3518', buttonHover: '#504822', lineNum: '#7a6e48',
    scrollThumb: '#3d3518', selection: 'rgba(240, 168, 48, 0.2)',
    accentHover: '#f5c050',
  },

  // ── Clean light theme ──
  paper: {
    name: 'Paper',
    bg: '#f8f6f1', editorBg: '#ffffff', fg: '#2e2e2e',
    accent: '#2563eb', toolbar: '#eae8e3', border: '#d4d0c8',
    buttonBg: '#e0ddd6', buttonHover: '#d0cdc5', lineNum: '#9a9590',
    scrollThumb: '#c8c4bc', selection: 'rgba(37, 99, 235, 0.15)',
    accentHover: '#3b82f6',
  },

  // ── Warm cream light theme ──
  linen: {
    name: 'Linen',
    bg: '#faf5ee', editorBg: '#fefbf5', fg: '#3a3530',
    accent: '#b45309', toolbar: '#f0e8dc', border: '#ddd4c4',
    buttonBg: '#e8dfcf', buttonHover: '#ddd4c4', lineNum: '#a09888',
    scrollThumb: '#cec4b4', selection: 'rgba(180, 83, 9, 0.15)',
    accentHover: '#d97706',
  },

  // ── Slate / industrial ──
  slate: {
    name: 'Slate',
    bg: '#1e2430', editorBg: '#181e28', fg: '#b0bec5',
    accent: '#78909c', toolbar: '#263040', border: '#374555',
    buttonBg: '#374555', buttonHover: '#445568', lineNum: '#5a6e7e',
    scrollThumb: '#374555', selection: 'rgba(120, 144, 156, 0.25)',
    accentHover: '#90a4ae',
  },

  // ── Neon cyberpunk ──
  cyber: {
    name: 'Cyber',
    bg: '#0a0a14', editorBg: '#06060e', fg: '#c0c8e0',
    accent: '#ff00ff', toolbar: '#12121f', border: '#1e1e35',
    buttonBg: '#1e1e35', buttonHover: '#2a2a48', lineNum: '#4a4a6a',
    scrollThumb: '#1e1e35', selection: 'rgba(255, 0, 255, 0.15)',
    accentHover: '#ff66ff',
  },

  // ── Lavender soft purple ──
  lavender: {
    name: 'Lavender',
    bg: '#22202e', editorBg: '#1c1a28', fg: '#d8d0e8',
    accent: '#b8a0e0', toolbar: '#2c2840', border: '#3e385a',
    buttonBg: '#3e385a', buttonHover: '#4e4870', lineNum: '#6a6088',
    scrollThumb: '#3e385a', selection: 'rgba(184, 160, 224, 0.25)',
    accentHover: '#cbb8f0',
  },

  // ── Cherry red ──
  cherry: {
    name: 'Cherry',
    bg: '#1e1015', editorBg: '#180c10', fg: '#dcc8cc',
    accent: '#e84060', toolbar: '#2a1820', border: '#402030',
    buttonBg: '#402030', buttonHover: '#552840', lineNum: '#7a5060',
    scrollThumb: '#402030', selection: 'rgba(232, 64, 96, 0.2)',
    accentHover: '#f06080',
  },

  // ── Sepia vintage ──
  sepia: {
    name: 'Sepia',
    bg: '#201c14', editorBg: '#1a1610', fg: '#c8b898',
    accent: '#c8a060', toolbar: '#2a2418', border: '#3a3020',
    buttonBg: '#3a3020', buttonHover: '#4a4030', lineNum: '#786848',
    scrollThumb: '#3a3020', selection: 'rgba(200, 160, 96, 0.2)',
    accentHover: '#d8b878',
  },

  // ── Soft green on dark — terminal inspired ──
  terminal: {
    name: 'Terminal',
    bg: '#0c100c', editorBg: '#080a08', fg: '#30d050',
    accent: '#00ff41', toolbar: '#141a14', border: '#1e281e',
    buttonBg: '#1e281e', buttonHover: '#283828', lineNum: '#1e6e2e',
    scrollThumb: '#1e281e', selection: 'rgba(0, 255, 65, 0.12)',
    accentHover: '#50ff70',
  },

  // ── High contrast light ──
  daylight: {
    name: 'Daylight',
    bg: '#ffffff', editorBg: '#fafafa', fg: '#1a1a1a',
    accent: '#0550ae', toolbar: '#f0f0f0', border: '#d0d0d0',
    buttonBg: '#e0e0e0', buttonHover: '#d0d0d0', lineNum: '#8a8a8a',
    scrollThumb: '#b0b0b0', selection: 'rgba(5, 80, 174, 0.15)',
    accentHover: '#0969da',
  },

  // ── Cozy fireplace warm dark ──
  ember: {
    name: 'Ember',
    bg: '#1a1210', editorBg: '#14100c', fg: '#d0b898',
    accent: '#e07030', toolbar: '#241c14', border: '#3a2c1e',
    buttonBg: '#3a2c1e', buttonHover: '#4a3c2e', lineNum: '#6e5840',
    scrollThumb: '#3a2c1e', selection: 'rgba(224, 112, 48, 0.2)',
    accentHover: '#f09050',
  },

  // ── Arctic ice blue ──
  arctic: {
    name: 'Arctic',
    bg: '#0e1824', editorBg: '#0a1420', fg: '#c0d8ef',
    accent: '#5cc4ff', toolbar: '#142030', border: '#1e3048',
    buttonBg: '#1e3048', buttonHover: '#284060', lineNum: '#3e6080',
    scrollThumb: '#1e3048', selection: 'rgba(92, 196, 255, 0.2)',
    accentHover: '#80d4ff',
  },

  // ── Soft pink light theme ──
  blossom: {
    name: 'Blossom',
    bg: '#fdf2f4', editorBg: '#fff8f9', fg: '#3a2830',
    accent: '#d6336c', toolbar: '#f5e0e5', border: '#e8c8d0',
    buttonBg: '#f0d0d8', buttonHover: '#e8c0c8', lineNum: '#a08890',
    scrollThumb: '#dcc0c8', selection: 'rgba(214, 51, 108, 0.12)',
    accentHover: '#e8508a',
  },
};

let currentUIThemeId = 'catppuccin_mocha';
let customUIColors = null;

function applyUITheme(theme) {
  const root = document.documentElement;
  root.style.setProperty('--bg', theme.bg);
  root.style.setProperty('--editor-bg', theme.editorBg);
  root.style.setProperty('--editor-fg', theme.fg);
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--accent-hover', theme.accentHover || theme.accent);
  root.style.setProperty('--toolbar-bg', theme.toolbar);
  root.style.setProperty('--toolbar-border', theme.border);
  root.style.setProperty('--button-bg', theme.buttonBg);
  root.style.setProperty('--button-fg', theme.fg);
  root.style.setProperty('--button-hover', theme.buttonHover);
  root.style.setProperty('--line-num', theme.lineNum);
  root.style.setProperty('--scrollbar-thumb', theme.scrollThumb);
  root.style.setProperty('--scrollbar-track', theme.editorBg);
  root.style.setProperty('--selection', theme.selection);
  root.style.setProperty('--indent-guide-active-color', theme.accent.replace(')', ', 0.35)').replace('rgb', 'rgba').replace('#', ''));

  // Better active guide color from accent
  const accentForGuide = theme.accent;
  root.style.setProperty('--indent-guide-active-color', hexToRgba(accentForGuide, 0.35));
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function openUIThemeModal() {
  const grid = document.getElementById('ui-theme-grid');
  grid.innerHTML = '';

  for (const [id, theme] of Object.entries(UI_THEMES)) {
    const card = document.createElement('div');
    card.className = 'ui-theme-card' + (id === currentUIThemeId && !customUIColors ? ' active' : '');
    card.innerHTML = `
      <div class="ui-preview">
        <div class="ui-preview-sidebar" style="background:${theme.toolbar};border-right:1px solid ${theme.border};"></div>
        <div class="ui-preview-editor" style="background:${theme.editorBg};">
          <div class="ui-preview-line" style="background:${theme.accent};"></div>
          <div class="ui-preview-line" style="background:${theme.fg};opacity:0.5;"></div>
          <div class="ui-preview-line" style="background:${theme.accent};opacity:0.7;"></div>
        </div>
      </div>
      <div class="ui-preview-statusbar" style="background:${theme.accent};"></div>
      <div class="ui-theme-label">${theme.name}</div>
    `;
    card.addEventListener('click', () => {
      currentUIThemeId = id;
      customUIColors = null;
      applyUITheme(theme);
      // Update active state
      grid.querySelectorAll('.ui-theme-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      // Update color pickers
      fillUIColorPickers(theme);
      saveToStorage();
    });
    grid.appendChild(card);
  }

  // Fill color pickers with current values
  const active = customUIColors || UI_THEMES[currentUIThemeId];
  fillUIColorPickers(active);

  document.getElementById('ui-theme-modal').classList.add('open');
}

function fillUIColorPickers(theme) {
  document.getElementById('ui-color-bg').value = theme.bg;
  document.getElementById('ui-color-editor-bg').value = theme.editorBg;
  document.getElementById('ui-color-fg').value = theme.fg;
  document.getElementById('ui-color-accent').value = theme.accent;
  document.getElementById('ui-color-toolbar').value = theme.toolbar;
  document.getElementById('ui-color-border').value = theme.border;
}

function applyCustomUITheme() {
  const bg = document.getElementById('ui-color-bg').value;
  const editorBg = document.getElementById('ui-color-editor-bg').value;
  const fg = document.getElementById('ui-color-fg').value;
  const accent = document.getElementById('ui-color-accent').value;
  const toolbar = document.getElementById('ui-color-toolbar').value;
  const border = document.getElementById('ui-color-border').value;

  // Derive other colors
  const buttonBg = border;
  const buttonHover = lightenHex(border, 15);
  const lineNum = blendHex(fg, editorBg, 0.45);
  const scrollThumb = border;
  const selection = hexToRgba(accent, 0.25);
  const accentHover = lightenHex(accent, 15);

  customUIColors = {
    bg, editorBg, fg, accent, toolbar, border,
    buttonBg, buttonHover, lineNum, scrollThumb, selection, accentHover,
  };

  applyUITheme(customUIColors);
  document.getElementById('ui-theme-modal').classList.remove('open');
  showToast('UI theme applied');
  saveToStorage();
}

function lightenHex(hex, amount) {
  let [h, s, l] = hexToHSL(hex);
  l = Math.min(100, l + amount);
  return hslToHex(h, s, l);
}

function blendHex(hex1, hex2, ratio) {
  const r1 = parseInt(hex1.slice(1, 3), 16), g1 = parseInt(hex1.slice(3, 5), 16), b1 = parseInt(hex1.slice(5, 7), 16);
  const r2 = parseInt(hex2.slice(1, 3), 16), g2 = parseInt(hex2.slice(3, 5), 16), b2 = parseInt(hex2.slice(5, 7), 16);
  const r = Math.round(r1 * ratio + r2 * (1 - ratio));
  const g = Math.round(g1 * ratio + g2 * (1 - ratio));
  const b = Math.round(b1 * ratio + b2 * (1 - ratio));
  const toHex = x => x.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// ─────────────────────────────────────────────
// THEME IMPORT / EXPORT
// ─────────────────────────────────────────────

// ── Syntax Theme Export ──
function exportSyntaxTheme() {
  const colors = getActiveColors();
  // Include all categories (built-in + custom)
  const allColors = {};
  for (const cat of categories) {
    allColors[cat.id] = colors[cat.id] ||
      getComputedStyle(document.documentElement).getPropertyValue(`--hl-${cat.id}`).trim();
  }

  const name = THEMES[currentThemeId].name + ' (custom)';
  openExportThemeModal('syntax', name, allColors);
}

// ── UI Theme Export ──
function exportUITheme() {
  const theme = customUIColors || UI_THEMES[currentUIThemeId];
  const name = customUIColors ? 'Custom UI Theme' : UI_THEMES[currentUIThemeId].name;
  openExportThemeModal('ui', name, theme);
}

function openExportThemeModal(type, defaultName, data) {
  document.getElementById('export-theme-title').textContent =
    type === 'syntax' ? 'Export Syntax Theme' : 'Export UI Theme';
  document.getElementById('export-theme-name').value = defaultName;

  const preview = document.getElementById('export-theme-preview');
  preview.innerHTML = '';

  const container = document.createElement('div');
  container.className = 'imported-theme-preview';

  if (type === 'syntax') {
    container.innerHTML = `<h4>Syntax Colors</h4><div class="theme-color-grid"></div>`;
    const grid = container.querySelector('.theme-color-grid');
    for (const [key, val] of Object.entries(data)) {
      grid.innerHTML += `<div class="theme-color-chip"><span class="chip-dot" style="background:${val}"></span>${key}</div>`;
    }
  } else {
    container.innerHTML = `<h4>UI Colors</h4><div class="theme-color-grid"></div>`;
    const grid = container.querySelector('.theme-color-grid');
    const labels = { bg: 'Background', editorBg: 'Editor', fg: 'Text', accent: 'Accent', toolbar: 'Toolbar', border: 'Border' };
    for (const [key, label] of Object.entries(labels)) {
      if (data[key]) {
        grid.innerHTML += `<div class="theme-color-chip"><span class="chip-dot" style="background:${data[key]}"></span>${label}</div>`;
      }
    }
  }

  preview.appendChild(container);

  // Store export context
  document.getElementById('export-theme-modal')._exportType = type;
  document.getElementById('export-theme-modal')._exportData = data;
  document.getElementById('export-theme-modal').classList.add('open');
}

function doExportTheme() {
  const modal = document.getElementById('export-theme-modal');
  const type = modal._exportType;
  const data = modal._exportData;
  const name = document.getElementById('export-theme-name').value.trim() || 'Untitled Theme';

  const exportObj = {
    chromatura_theme: true,
    type, // 'syntax' or 'ui'
    name,
    data,
    exportedAt: new Date().toISOString(),
  };

  const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const safeName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  a.download = `chromatura-${type}-theme-${safeName}.json`;
  a.click();
  URL.revokeObjectURL(url);

  modal.classList.remove('open');
  showToast(`${type === 'syntax' ? 'Syntax' : 'UI'} theme exported!`);
}

// ── Syntax Theme Import ──
function importSyntaxTheme(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);

      // Support both dedicated theme files and raw color objects
      let colors, name;
      if (data.chromatura_theme && data.type === 'syntax') {
        colors = data.data;
        name = data.name;
      } else if (data.colors || data.keyword) {
        // Raw color object or { colors: {...} }
        colors = data.colors || data;
        name = data.name || file.name.replace(/\.json$/, '');
      } else {
        showToast('Not a valid syntax theme file');
        return;
      }

      // Validate: must have at least some color keys
      const validKeys = new Set([...categories.map(c => c.id)]);
      const colorEntries = Object.entries(colors).filter(([k]) => validKeys.has(k) || /^#[0-9a-fA-F]{6}$/.test(colors[k]));
      if (colorEntries.length === 0) {
        showToast('No valid colors found in theme');
        return;
      }

      // Generate a unique theme ID
      const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') + '_' + Date.now();

      // Add to THEMES
      THEMES[id] = {
        name,
        colors: { ...THEMES[currentThemeId].colors, ...colors },
      };

      // Add to theme select
      const opt = document.createElement('option');
      opt.value = id;
      opt.textContent = name;
      themeSelect.appendChild(opt);

      // Switch to it
      currentThemeId = id;
      customColors = null;
      themeSelect.value = id;
      applyTheme(id);
      render();
      saveToStorage();

      showToast(`Imported syntax theme "${name}"`);
    } catch (err) {
      showToast('Invalid theme file');
      console.warn('Theme import error:', err);
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// ── UI Theme Import ──
function importUITheme(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);

      let theme, name;
      if (data.chromatura_theme && data.type === 'ui') {
        theme = data.data;
        name = data.name;
      } else if (data.bg && data.fg && data.accent) {
        // Raw UI theme object
        theme = data;
        name = data.name || file.name.replace(/\.json$/, '');
      } else {
        showToast('Not a valid UI theme file');
        return;
      }

      // Ensure all required fields exist, derive missing ones
      const complete = {
        bg: theme.bg || '#1e1e2e',
        editorBg: theme.editorBg || theme.bg || '#181825',
        fg: theme.fg || '#cdd6f4',
        accent: theme.accent || '#cba6f7',
        toolbar: theme.toolbar || theme.bg || '#313244',
        border: theme.border || '#45475a',
        buttonBg: theme.buttonBg || theme.border || '#45475a',
        buttonHover: theme.buttonHover || lightenHex(theme.border || '#45475a', 15),
        lineNum: theme.lineNum || blendHex(theme.fg || '#cdd6f4', theme.editorBg || '#181825', 0.45),
        scrollThumb: theme.scrollThumb || theme.border || '#45475a',
        selection: theme.selection || hexToRgba(theme.accent || '#cba6f7', 0.25),
        accentHover: theme.accentHover || lightenHex(theme.accent || '#cba6f7', 15),
      };

      // Generate a unique ID
      const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') + '_' + Date.now();

      // Add to UI_THEMES
      UI_THEMES[id] = { name, ...complete };

      // Apply it
      currentUIThemeId = id;
      customUIColors = null;
      applyUITheme(UI_THEMES[id]);
      saveToStorage();

      showToast(`Imported UI theme "${name}"`);
    } catch (err) {
      showToast('Invalid theme file');
      console.warn('UI theme import error:', err);
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// ─────────────────────────────────────────────
// RANDOM THEME GENERATION
// ─────────────────────────────────────────────

function randomInRange(min, max) {
  return min + Math.random() * (max - min);
}

function randomInt(min, max) {
  return Math.floor(randomInRange(min, max + 1));
}

function generateRandomSyntaxTheme() {
  // Pick a base hue and generate a harmonious palette
  const baseHue = randomInt(0, 359);
  const strategy = randomInt(0, 3); // 0=analogous, 1=triadic, 2=complementary, 3=rainbow

  function hueForIndex(i, total) {
    switch (strategy) {
      case 0: // Analogous — clustered hues with some spread
        return (baseHue + (i / total) * 90 - 45 + randomInt(-10, 10)) % 360;
      case 1: // Triadic — three main hue families
        return (baseHue + (i % 3) * 120 + randomInt(-20, 20)) % 360;
      case 2: // Complementary — two hue families
        return (baseHue + (i % 2) * 180 + randomInt(-25, 25)) % 360;
      case 3: // Rainbow — evenly distributed
        return (baseHue + (i / total) * 360 + randomInt(-10, 10)) % 360;
      default:
        return (baseHue + i * 30) % 360;
    }
  }

  const satRange = [55, 85];
  const lightRange = [55, 80];

  const keys = categories.map(c => c.id);
  const colors = {};

  for (let i = 0; i < keys.length; i++) {
    const h = (hueForIndex(i, keys.length) + 360) % 360;
    const s = randomInRange(satRange[0], satRange[1]);
    const l = randomInRange(lightRange[0], lightRange[1]);
    colors[keys[i]] = hslToHex(h, s, l);
  }

  // Ensure comment is desaturated and dimmer
  const commentH = randomInt(0, 359);
  colors['comment'] = hslToHex(commentH, randomInRange(5, 20), randomInRange(35, 50));

  return colors;
}

function applyRandomSyntaxTheme() {
  const colors = generateRandomSyntaxTheme();
  const strategyNames = ['Analogous', 'Triadic', 'Complementary', 'Rainbow'];

  // Find which strategy was used by regenerating — or just pick a name
  const name = `Random ${Date.now().toString(36).slice(-4).toUpperCase()}`;
  const id = 'random_' + Date.now();

  THEMES[id] = { name, colors };

  // Add to select
  const opt = document.createElement('option');
  opt.value = id;
  opt.textContent = '🎲 ' + name;
  themeSelect.appendChild(opt);

  // Apply
  currentThemeId = id;
  customColors = null;
  themeSelect.value = id;
  applyTheme(id);
  render();
  saveToStorage();

  showToast(`Generated syntax theme "${name}"`);
}

function generateRandomUITheme() {
  // Decide light or dark (80% dark, 20% light)
  const isLight = Math.random() < 0.2;

  // Pick a base accent hue
  const accentHue = randomInt(0, 359);
  const accentSat = randomInRange(50, 90);
  const accentLight = isLight ? randomInRange(40, 55) : randomInRange(55, 75);
  const accent = hslToHex(accentHue, accentSat, accentLight);

  // Background hue — either neutral or slightly tinted toward accent
  const bgTint = Math.random() < 0.5;
  const bgHue = bgTint ? accentHue + randomInt(-15, 15) : randomInt(0, 359);
  const bgSat = bgTint ? randomInRange(5, 20) : randomInRange(0, 8);

  let bg, editorBg, fg, toolbar, border;

  if (isLight) {
    const bgLight = randomInRange(92, 97);
    bg = hslToHex(bgHue, bgSat, bgLight);
    editorBg = hslToHex(bgHue, bgSat, bgLight - randomInRange(2, 5));
    fg = hslToHex(bgHue, randomInRange(10, 30), randomInRange(15, 30));
    toolbar = hslToHex(bgHue, bgSat, bgLight - randomInRange(5, 10));
    border = hslToHex(bgHue, bgSat, bgLight - randomInRange(12, 20));
  } else {
    const bgLight = randomInRange(5, 15);
    bg = hslToHex(bgHue, bgSat, bgLight);
    editorBg = hslToHex(bgHue, bgSat, bgLight - randomInRange(1, 4));
    fg = hslToHex(bgHue, randomInRange(5, 20), randomInRange(75, 90));
    toolbar = hslToHex(bgHue, bgSat, bgLight + randomInRange(4, 10));
    border = hslToHex(bgHue, bgSat, bgLight + randomInRange(10, 20));
  }

  const buttonBg = border;
  const buttonHover = lightenHex(border, isLight ? -8 : 12);
  const lineNum = blendHex(fg, editorBg, 0.45);
  const scrollThumb = border;
  const selection = hexToRgba(accent, 0.25);
  const accentHover = lightenHex(accent, isLight ? -10 : 12);

  return {
    bg, editorBg, fg, accent, toolbar, border,
    buttonBg, buttonHover, lineNum, scrollThumb, selection, accentHover,
  };
}

function applyRandomUITheme() {
  const theme = generateRandomUITheme();
  const name = `Random UI ${Date.now().toString(36).slice(-4).toUpperCase()}`;
  const id = 'random_ui_' + Date.now();

  UI_THEMES[id] = { name, ...theme };
  currentUIThemeId = id;
  customUIColors = null;
  applyUITheme(theme);
  saveToStorage();

  showToast(`Generated UI theme "${name}"`);
}

// ─────────────────────────────────────────────
// MANAGE THEMES
// ─────────────────────────────────────────────
const BUILTIN_SYNTAX_IDS = new Set([
  'catppuccin', 'monokai', 'dracula', 'solarized',
  'github_dark', 'nord', 'gruvbox', 'one_dark',
  'candy', 'sunset', 'oceanic', 'neon', 'forest', 'frost',
  'phosphor', 'nebula', 'parchment', 'synthwave', 'ink', 'sakura',
]);

const BUILTIN_UI_IDS = new Set([
  'catppuccin_mocha', 'catppuccin_latte', 'tokyo_night', 'rose_pine',
  'github_dimmed', 'everforest', 'kanagawa', 'solarized_dark',
  'midnight', 'warm_dark', 'nord_ui', 'ayu_dark',
  'rose', 'abyss', 'mint', 'amber', 'paper', 'linen', 'slate', 'cyber',
  'lavender', 'cherry', 'sepia', 'terminal', 'daylight', 'ember', 'arctic', 'blossom',
]);

function openManageThemesModal() {
  const content = document.getElementById('manage-themes-content');
  content.innerHTML = '';

  // ── Syntax themes ──
  const syntaxSection = document.createElement('div');
  syntaxSection.className = 'manage-themes-section';
  syntaxSection.innerHTML = '<h4>Syntax Themes</h4>';

  const syntaxEntries = Object.entries(THEMES);
  let hasCustomSyntax = false;

  for (const [id, theme] of syntaxEntries) {
    const isBuiltin = BUILTIN_SYNTAX_IDS.has(id);
    const isActive = id === currentThemeId;

    const row = document.createElement('div');
    row.className = 'manage-theme-row';

    // Color swatches
    const swatches = document.createElement('div');
    swatches.className = 'theme-swatches';
    const previewKeys = ['keyword', 'string', 'comment', 'function', 'type'];
    for (const key of previewKeys) {
      if (theme.colors[key]) {
        const dot = document.createElement('span');
        dot.className = 'theme-swatch-dot';
        dot.style.background = theme.colors[key];
        swatches.appendChild(dot);
      }
    }

    const name = document.createElement('span');
    name.className = 'theme-name';
    name.textContent = theme.name;

    row.appendChild(swatches);
    row.appendChild(name);

    if (isActive) {
      const badge = document.createElement('span');
      badge.className = 'theme-active-badge';
      badge.textContent = 'active';
      row.appendChild(badge);
    }

    if (isBuiltin) {
      const badge = document.createElement('span');
      badge.className = 'theme-builtin-badge';
      badge.textContent = 'built-in';
      row.appendChild(badge);
    } else {
      hasCustomSyntax = true;
      const del = document.createElement('button');
      del.className = 'theme-delete-btn';
      del.textContent = '✕';
      del.title = 'Delete this theme';
      del.addEventListener('click', () => {
        deleteSyntaxTheme(id);
        openManageThemesModal(); // Refresh the list
      });
      row.appendChild(del);
    }

    syntaxSection.appendChild(row);
  }

  if (!hasCustomSyntax) {
    // Still show built-in ones, they just won't have delete buttons
  }

  content.appendChild(syntaxSection);

  // ── UI themes ──
  const uiSection = document.createElement('div');
  uiSection.className = 'manage-themes-section';
  uiSection.innerHTML = '<h4>UI Themes</h4>';

  const uiEntries = Object.entries(UI_THEMES);
  let hasCustomUI = false;

  for (const [id, theme] of uiEntries) {
    const isBuiltin = BUILTIN_UI_IDS.has(id);
    const isActive = id === currentUIThemeId && !customUIColors;

    const row = document.createElement('div');
    row.className = 'manage-theme-row';

    const swatches = document.createElement('div');
    swatches.className = 'theme-swatches';
    const uiPreviewKeys = ['bg', 'accent', 'toolbar', 'fg'];
    for (const key of uiPreviewKeys) {
      if (theme[key]) {
        const dot = document.createElement('span');
        dot.className = 'theme-swatch-dot';
        dot.style.background = theme[key];
        swatches.appendChild(dot);
      }
    }

    const name = document.createElement('span');
    name.className = 'theme-name';
    name.textContent = theme.name;

    row.appendChild(swatches);
    row.appendChild(name);

    if (isActive) {
      const badge = document.createElement('span');
      badge.className = 'theme-active-badge';
      badge.textContent = 'active';
      row.appendChild(badge);
    }

    if (isBuiltin) {
      const badge = document.createElement('span');
      badge.className = 'theme-builtin-badge';
      badge.textContent = 'built-in';
      row.appendChild(badge);
    } else {
      hasCustomUI = true;
      const del = document.createElement('button');
      del.className = 'theme-delete-btn';
      del.textContent = '✕';
      del.title = 'Delete this theme';
      del.addEventListener('click', () => {
        deleteUITheme(id);
        openManageThemesModal(); // Refresh the list
      });
      row.appendChild(del);
    }

    uiSection.appendChild(row);
  }

  content.appendChild(uiSection);

  document.getElementById('manage-themes-modal').classList.add('open');
}

function deleteSyntaxTheme(id) {
  if (BUILTIN_SYNTAX_IDS.has(id)) return;

  // If this is the active theme, switch to default
  if (currentThemeId === id) {
    currentThemeId = 'catppuccin';
    customColors = null;
    applyTheme(currentThemeId);
    render();
  }

  delete THEMES[id];
  buildThemeSelect();
  saveToStorage();
  showToast('Theme deleted');
}

function deleteUITheme(id) {
  if (BUILTIN_UI_IDS.has(id)) return;

  // If this is the active theme, switch to default
  if (currentUIThemeId === id) {
    currentUIThemeId = 'catppuccin_mocha';
    customUIColors = null;
    applyUITheme(UI_THEMES[currentUIThemeId]);
  }

  delete UI_THEMES[id];
  saveToStorage();
  showToast('UI theme deleted');
}

// ─────────────────────────────────────────────
// FILE EXPLORER
// ─────────────────────────────────────────────

let files = [];
let activeFileId = null;
let fileExplorerOpen = false;

function generateFileId() {
  return 'file_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
}

function createNewFile(name = null) {
  // Save current file first
  saveCurrentFileState();

  const id = generateFileId();
  const fileName = name || generateFileName();

  const file = {
    id,
    name: fileName,
    text: '',
    highlights: [],
    foldedRegions: [],
    createdAt: new Date().toISOString(),
    modifiedAt: new Date().toISOString(),
  };

  files.push(file);
  switchToFile(id);
  showToast(`Created "${fileName}"`);
  return file;
}

function generateFileName() {
  const existing = files.map(f => f.name);
  let num = files.length + 1;
  let name = `Untitled ${num}`;
  while (existing.includes(name)) {
    num++;
    name = `Untitled ${num}`;
  }
  return name;
}

function saveCurrentFileState() {
  if (!activeFileId) return;
  const file = files.find(f => f.id === activeFileId);
  if (!file) return;

  file.text = editorEl.value;
  file.highlights = [...highlights];
  file.foldedRegions = typeof foldedRegions !== 'undefined' ? [...foldedRegions] : [];
  file.modifiedAt = new Date().toISOString();
}

function switchToFile(id) {
  // Save current state before switching
  if (activeFileId && activeFileId !== id) {
    saveCurrentFileState();
  }

  const file = files.find(f => f.id === id);
  if (!file) return;

  activeFileId = id;

  // Load file state into editor
  editorEl.value = file.text;
  previousText = file.text;
  highlights = file.highlights ? [...file.highlights] : [];
  if (typeof foldedRegions !== 'undefined') {
    foldedRegions = file.foldedRegions ? [...file.foldedRegions] : [];
  }

  // Refresh everything
  render();
  updateLineNumbers();
  updateIndentGuides();
  updateScrollPadding();
  updateStatusFileName();
  buildFileList();
  saveAllToStorage();
}

function renameFile(id) {
  const file = files.find(f => f.id === id);
  if (!file) return;

  const item = document.querySelector(`.file-item[data-id="${id}"]`);
  if (!item) return;

  const nameEl = item.querySelector('.file-item-name');
  const originalName = file.name;

  // Replace name with input
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'file-item-name-input';
  input.value = file.name;
  nameEl.replaceWith(input);
  input.focus();
  input.select();

  function commit() {
    const newName = input.value.trim() || originalName;
    file.name = newName;
    file.modifiedAt = new Date().toISOString();
    updateStatusFileName();
    buildFileList();
    saveAllToStorage();
  }

  input.addEventListener('blur', commit);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
    if (e.key === 'Escape') { input.value = originalName; input.blur(); }
  });
}

function deleteFile(id) {
  const file = files.find(f => f.id === id);
  if (!file) return;

  // Don't delete the last file
  if (files.length <= 1) {
    showToast("Can't delete the only file");
    return;
  }

  if (!confirm(`Delete "${file.name}"?`)) return;

  const idx = files.findIndex(f => f.id === id);
  files.splice(idx, 1);

  // If we deleted the active file, switch to another
  if (activeFileId === id) {
    const newIdx = Math.min(idx, files.length - 1);
    switchToFile(files[newIdx].id);
  } else {
    buildFileList();
  }

  saveAllToStorage();
  showToast(`Deleted "${file.name}"`);
}

function duplicateFile(id) {
  const source = files.find(f => f.id === id);
  if (!source) return;

  saveCurrentFileState();

  const newFile = {
    id: generateFileId(),
    name: source.name + ' (copy)',
    text: source.text,
    highlights: source.highlights ? JSON.parse(JSON.stringify(source.highlights)) : [],
    foldedRegions: source.foldedRegions ? [...source.foldedRegions] : [],
    createdAt: new Date().toISOString(),
    modifiedAt: new Date().toISOString(),
  };

  files.push(newFile);
  switchToFile(newFile.id);
  showToast(`Duplicated as "${newFile.name}"`);
}

function buildFileList() {
  const list = document.getElementById('file-list');
  list.innerHTML = '';

  if (files.length === 0) {
    list.innerHTML = '<div class="file-empty-state">No files yet</div>';
    return;
  }

  for (const file of files) {
    const item = document.createElement('div');
    item.className = 'file-item' + (file.id === activeFileId ? ' active' : '');
    item.dataset.id = file.id;

    // Icon
    const icon = document.createElement('span');
    icon.className = 'file-item-icon';
    icon.textContent = '📄';

    // Name
    const name = document.createElement('span');
    name.className = 'file-item-name';
    name.textContent = file.name;

    // Meta info (line count)
    const meta = document.createElement('span');
    meta.className = 'file-item-meta';
    const lineCount = file.text ? file.text.split('\n').length : 0;
    const hlCount = file.highlights ? file.highlights.length : 0;
    meta.textContent = `${lineCount}L`;
    meta.title = `${lineCount} lines, ${hlCount} highlights`;

    // Action buttons (shown on hover)
    const actions = document.createElement('div');
    actions.className = 'file-item-actions';

    const renameBtn = document.createElement('button');
    renameBtn.className = 'file-item-action-btn';
    renameBtn.textContent = '✏️';
    renameBtn.title = 'Rename';
    renameBtn.addEventListener('click', (e) => { e.stopPropagation(); renameFile(file.id); });

    const dupeBtn = document.createElement('button');
    dupeBtn.className = 'file-item-action-btn';
    dupeBtn.textContent = '📋';
    dupeBtn.title = 'Duplicate';
    dupeBtn.addEventListener('click', (e) => { e.stopPropagation(); duplicateFile(file.id); });

    const delBtn = document.createElement('button');
    delBtn.className = 'file-item-action-btn delete';
    delBtn.textContent = '✕';
    delBtn.title = 'Delete';
    delBtn.addEventListener('click', (e) => { e.stopPropagation(); deleteFile(file.id); });

    actions.appendChild(renameBtn);
    actions.appendChild(dupeBtn);
    actions.appendChild(delBtn);

    item.appendChild(icon);
    item.appendChild(name);
    item.appendChild(meta);
    item.appendChild(actions);

    // Click to switch
    item.addEventListener('click', () => switchToFile(file.id));

    // Double-click to rename
    item.addEventListener('dblclick', (e) => { e.preventDefault(); renameFile(file.id); });

    list.appendChild(item);
  }
}

function toggleFileExplorer() {
  const explorer = document.getElementById('file-explorer');
  fileExplorerOpen = !fileExplorerOpen;
  explorer.classList.toggle('open', fileExplorerOpen);
  saveAllToStorage();
}

function updateStatusFileName() {
  const el = document.getElementById('status-file');
  if (!el) return;
  const file = files.find(f => f.id === activeFileId);
  el.textContent = file ? file.name : 'Untitled';
}

// ── Persistence (files are stored separately) ──

function saveFilesToStorage() {
  try {
    saveCurrentFileState();
    localStorage.setItem('chromatura_files', JSON.stringify({
      files,
      activeFileId,
      fileExplorerOpen,
    }));
  } catch (e) {
    console.warn('Failed to save files:', e);
  }
}

function loadFilesFromStorage() {
  try {
    const raw = localStorage.getItem('chromatura_files');
    if (!raw) return false;
    const data = JSON.parse(raw);

    if (data.files && data.files.length > 0) {
      files = data.files;
      activeFileId = data.activeFileId || files[0].id;
      fileExplorerOpen = data.fileExplorerOpen || false;

      // Validate active file exists
      if (!files.find(f => f.id === activeFileId)) {
        activeFileId = files[0].id;
      }

      return true;
    }
  } catch (e) {
    console.warn('Failed to load files:', e);
  }
  return false;
}

function initFileExplorer() {
  const hasFiles = loadFilesFromStorage();

  if (!hasFiles) {
    // Create initial file from current editor content
    const file = {
      id: generateFileId(),
      name: 'Untitled 1',
      text: editorEl.value || '',
      highlights: [...highlights],
      foldedRegions: typeof foldedRegions !== 'undefined' ? [...foldedRegions] : [],
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
    };
    files = [file];
    activeFileId = file.id;
  } else {
    // Load active file into editor
    const file = files.find(f => f.id === activeFileId);
    if (file) {
      editorEl.value = file.text;
      previousText = file.text;
      highlights = file.highlights ? [...file.highlights] : [];
      if (typeof foldedRegions !== 'undefined') {
        foldedRegions = file.foldedRegions ? [...file.foldedRegions] : [];
      }
    }
  }

  // Apply explorer open state
  const explorer = document.getElementById('file-explorer');
  explorer.classList.toggle('open', fileExplorerOpen);

  buildFileList();
  updateStatusFileName();
}

// Hook into the existing save function
const _originalSaveToStorage = typeof saveToStorage === 'function' ? saveToStorage : null;

function saveAllToStorage() {
  if (_originalSaveToStorage) _originalSaveToStorage();
  saveFilesToStorage();
}

// ─────────────────────────────────────────────
// EDIT / DELETE CATEGORIES
// ─────────────────────────────────────────────

function deleteCategory(catId) {
  const cat = categories.find(c => c.id === catId);
  if (!cat) return;
  if (BUILTIN_IDS.has(catId)) return;

  if (!confirm(`Delete category "${cat.label}"?\n\nAll highlights using this category will be removed.`)) return;

  // Remove all highlights using this category
  highlights = highlights.filter(h => h.cat !== catId);

  // Remove from categories
  categories = categories.filter(c => c.id !== catId);

  // Clean up theme colors
  for (const [themeId, theme] of Object.entries(THEMES)) {
    delete theme.colors[catId];
  }

  buildSidebar();
  render();
  updateDynamicStyles();
  saveToStorage();
  showToast(`Deleted category "${cat.label}"`);
}

function openEditCategoryModal(catId) {
  const cat = categories.find(c => c.id === catId);
  if (!cat || BUILTIN_IDS.has(catId)) return;

  // Reuse the new-cat modal with tweaks
  const modal = document.getElementById('new-cat-modal');
  const title = modal.querySelector('h2');
  const nameInput = document.getElementById('new-cat-name');
  const boldCheck = document.getElementById('new-cat-bold');
  const italicCheck = document.getElementById('new-cat-italic');
  const addBtn = document.getElementById('btn-new-cat-add');

  title.textContent = 'Edit Category';
  nameInput.value = cat.label;
  boldCheck.checked = !!cat.bold;
  italicCheck.checked = !!cat.italic;
  addBtn.textContent = 'Save';

  // Store edit context
  modal._editCatId = catId;

  updateNewCatPreview();
  modal.classList.add('open');
}

// Patch addNewCategory to handle editing
const _originalAddNewCategory = typeof addNewCategory === 'function' ? addNewCategory : null;

// ─────────────────────────────────────────────
// GO
// ─────────────────────────────────────────────
init();