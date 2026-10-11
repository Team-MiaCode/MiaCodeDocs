# Text editor

Select a difficulty in the sidebar to edit its simai text. Preview and analysis update as the text changes.

## Find and replace

Use `Edit → Find` or `Ctrl+F` (`⌘F` on macOS) to open the find and replace panel. Enter a query, browse matches with the previous and next controls, then replace the current match or all matches.

With the find field focused, press `Enter` to find the next match, `Shift+Enter` to find the previous match, or `Esc` to close the panel.

Match case and whole-word options help target particular text.

## Completion and input settings

The editor offers completion candidates for chart text, including durations. Choose a candidate to complete the entry. Enable completion in [Preferences → Editor](/en/miacode/settings/preferences#editor).

The same page controls input methods, full-width character correction, font size, line spacing, and wrapping. Selection beat display shows the length of the selected passage.

## Overview ruler

The overview ruler sits beside the editor's vertical scrollbar and compresses chart diagnostics into colored marks: yellow for warnings, blue for bookmarks, and red for errors or pattern warnings. A horizontal mark shows the current caret or follow position. Use it with the scrollbar to locate those parts of the chart, or turn it off in Preferences → Editor to hide the column.

## Bookmarks

Type `||` on the line you want to mark, followed by a passage name or a note. Text from `||` to the end of the line is treated as a comment, which the editor uses to create a bookmark.

For example, `|| [Chorus] Revise the rhythm here` creates a bookmark titled “Chorus” with an editing note. Text in square brackets sets the bookmark title; the remaining text provides additional detail.

Click an entry in the bookmark list to jump to its line. The bookmark menu in the line-number margin lets you add, rename, or delete bookmarks; these operations edit the comment on that line.

## Selection tools

Select chart text and choose a command from the Transform menu or context menu. Mirrors, rotations, subdivisions, and note-property commands act on the selection.

<div class="doc-figure-grid">
<figure class="doc-figure doc-figure--compact">
<img class="interface-shot" src="/images/调整菜单.png" alt="Chart transform menu">
<figcaption>Chart transform menu</figcaption>
</figure>
<figure class="doc-figure doc-figure--compact">
<img class="interface-shot" src="/images/右键菜单.png" alt="Editor context menu">
<figcaption>Editor context menu</figcaption>
</figure>
</div>

### Mirrors and rotations

Commands include horizontal and vertical mirrors, 180° rotation, and clockwise or counterclockwise 45° rotation.

### Note subdivision adjustment

Subdivision commands adjust subdivision and comma spacing together. Raising by one step multiplies the subdivision by 2; raising by half a step multiplies it by 1.5.

For example, raising `{16}1,2,` by one step produces `{32}1,,2,,`. Updating both the subdivision and spacing keeps notes at their corresponding beats.

### Clear all

Clear complete selected notes while retaining timing separators. Use this to keep a rhythm framework while writing a new pattern.

### Reset objects

Reset complete selected notes to Tap 1 while retaining the timing structure.

### Note properties and random rotation

The additional transform commands toggle Break, Ex, and Firework attributes or randomize directions.

See [Chart organization](/en/miacode/tools/chart-organization) for formatting options and [Chart preview](/en/miacode/chart/preview#touch-input) for Touch authoring.
