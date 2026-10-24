# Chromatura

A manual syntax highlighter for languages which don't have a LSP yet. Vibe coded as an adventure in seeing what vibe coding is like in 2026.

## Getting Started

Chromatura is a web-based tool. To run it locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/lyxal/Chromatura.git
   cd Chromatura
   ```

2. **Open the application:**
   Simply open `index.html` in your web browser. No build step is required.

   - Double-click `index.html` (or open with your browser of choice).
   - All code is processed client-side—no server needed.

## Usage

### Highlighting Code

- Type or paste your code in the editor area.
- Use the **sidebar** labeled "Highlight As" to select the category (language element/type) to highlight.  
  - Select code in the editor, then click a button in the sidebar (e.g. "keyword", "comment") or use its listed `Alt` shortcut.
- To remove highlights, select text and use **Remove** or `Alt+Backspace`.
- Recoloring or removing a portion of an existing highlight leaves the unselected portions intact.
- **Tab** indents selected lines, **Shift+Tab** outdents them, and **Enter** preserves the current line's indentation.
- **Ctrl/⌘+Z** and **Ctrl/⌘+Shift+Z** undo/redo text edits, manual highlighting, and indentation (history is kept separately per file until reload).
- Line wrapping is disabled in the editor to keep highlighting and line numbers aligned; long lines scroll horizontally.
- Folding temporarily switches to a **read-only collapsed preview**. Click the preview to expand and edit again.

### File Operations

- Use the **Project** menu to open or download complete multi-file projects (including folders and highlights). Image and HTML exports are under **Export as**.
- The **Explorer** toggle in the toolbar opens a searchable file tree. The desktop explorer starts open for a new project; on mobile, it works as a drawer.
- Use **+** to create a file or the folder button to create a folder. New items can be renamed immediately.
- The **⋯** menu on a file contains **Rename**, **Duplicate**, **Move to folder**, and **Delete**. Folder menus include **New file in folder**, **Rename**, and **Delete**. You can also drag files onto folders, or onto the **FILES** heading to move them to the root.
- Files are sorted by name and grouped by folders. Selecting a file on mobile closes the explorer so the editor is visible.

### Themes

- Use the **Theme** menu to search and pick syntax themes, change the UI appearance, or edit syntax colours.
- Less-used import, randomise, and management options are under **Theme tools**.

### Settings & Help

- The ⚙ **Settings** button allows font, indentation, and display customisation.
- The **?** button lists keyboard shortcuts.

## Features

- Manual syntax highlighting for arbitrary code/languages.
- Multi-file project management in-browser.
- Customizable and importable themes (both code and UI).
- Export code with highlights as an image for sharing.
- No installation or backend needed—just open the HTML file.

## Contributing

Want to contribute? File an issue or open a pull request!
