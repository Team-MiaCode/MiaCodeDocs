# Text editor

## Completion

<figure class="doc-figure doc-figure--compact">
<a :href="$withBase('/images/completion.png')" target="_blank"><img class="interface-shot" src="/images/completion.png" alt="Completion candidates" width="420" height="420" loading="lazy"></a>
</figure>

Enable completion in [Preferences → Editor](/en/miacode/settings/preferences#completion). Typing `[`, `{`, or `(` opens the corresponding candidates. Typed text filters the list.

| Input | Candidates |
| --- | --- |
| `[` | Durations for Hold, Slide, and other sustained notes |
| `{` | Beat subdivisions |
| `(` | The song BPM and BPM values used in the current difficulty's text, with duplicates merged |

Use the arrow keys to choose a candidate, `Enter` or `Tab` to accept it, and `Esc` to dismiss the list. Typing `{` and choosing `16` inserts `{16}`.

Add, reorder, and restore duration and subdivision candidates in [Custom candidates](/en/miacode/settings/preferences#completion). BPM candidates come from the chart information and current text; custom candidate settings apply to durations and subdivisions.

## Selection beats

Enable selection beat display in Preferences to show the selected text's beat count. A selection that cuts through a note or syntax element is marked as approximate.

## Selection tools

Select chart text and choose a command from `Transform` or the context menu. Note transforms affect complete selected notes, including their positions, paths, and durations. Text formatting is covered in [Chart organization](/en/miacode/tools/chart-organization).

### Mirrors and rotations

Horizontal and vertical mirrors, 180° rotation, and clockwise or counterclockwise 45° rotation change the selected Tap and Touch positions and Slide paths.

With text selected, you can use the corresponding shortcut:

| Command | Shortcut |
| --- | --- |
| Mirror horizontally / vertically | `Ctrl/⌘+J` / `Ctrl/⌘+K` |
| Rotate 180° | `Ctrl/⌘+L` |
| Rotate 45° counterclockwise / clockwise | `Ctrl/⌘+;` / `Ctrl/⌘+'` |

### Note subdivision adjustment

Raising by one step doubles the subdivision and adds comma spacing to retain the original beat positions.

For example, `{16}1,2,` becomes `{32}1,,2,,` after raising one step.

Raising half a step multiplies the subdivision by 1.5; lowering applies the reverse adjustment. Select a passage and use the corresponding combination:

| Command | Shortcut |
| --- | --- |
| Raise one / half a step | `Ctrl/⌘+=` / `Ctrl/⌘++` |
| Lower one / half a step | `Ctrl/⌘+-` / `Ctrl/⌘+Shift+-` |

### Note transforms

| Command | Result |
| --- | --- |
| Clear all | Removes complete selected notes while retaining commas and other timing structure |
| Reset objects | Replaces complete selected notes with Tap 1 while retaining timing structure |
| `Transform → More` | Provides Break, Ex, Firework, and random-direction commands |

## Touch input

Enable Touch click input in [Preview settings](/en/miacode/settings/preview#video). Pause playback, place the editor caret at the insertion point, and hold `Ctrl/⌘`. Left-click a Touch region in the preview to enter it in the current beat, or right-click to add a comma and enter it in the next beat. Left-clicking an ordinary Touch region already present in the current beat removes that Touch.

For example, left-clicking A1 inserts `A1`, and clicking A2 next produces `A1/A2`.

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/touch_input.png')" target="_blank"><img class="interface-shot" src="/images/touch_input.png" alt="Touch input regions" width="2784" height="1824" loading="lazy"></a>
</figure>

## Bookmarks

Entering `|| [Chorus] Revise the rhythm here` creates a bookmark titled “Chorus”, with the remaining text as a note.

Click a bookmark to jump to its line. Add, rename, and delete commands in the line-number margin edit that line's comment.

With a bookmark row focused, press `F2` to rename it or `Delete` to remove it.

<figure class="doc-figure doc-figure--compact">
<a :href="$withBase('/images/bookmarks.png')" target="_blank"><img class="interface-shot" src="/images/bookmarks.png" alt="Section comments and bookmarks" width="620" height="420" loading="lazy"></a>
</figure>

## Find and replace

Open `Edit → Find` or press `Ctrl/⌘+F` to find or replace the current match or all matches. Match case and whole-word options refine the query. In the search field, `Enter` finds the next match and `Shift+Enter` finds the previous match. In the replacement field, `Enter` replaces the current match. `Esc` closes the panel.
