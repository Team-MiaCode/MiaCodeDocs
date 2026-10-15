# Text editor

Select or add a difficulty to write simai text. Preview and analysis update as you edit.

<figure class="doc-figure">
<a :href="$withBase('/images/text_editor.png')" target="_blank"><img class="interface-shot" src="/images/text_editor.png" alt="Text editor" loading="lazy"></a>
</figure>

## Completion

<figure class="doc-figure">
<img class="interface-shot" src="/images/completion.png" alt="Completion candidates" loading="lazy">
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

<figure class="doc-figure doc-figure--window">
<a :href="$withBase('/images/selection_beats.png')" target="_blank"><img class="interface-shot" src="/images/selection_beats.png" alt="Selection and beat count in the status bar" loading="lazy"></a>
</figure>

Enable selection beat display in Preferences to show the selected text's beat count. A selection that cuts through a note or syntax element is marked as approximate.

## Selection tools

Select chart text and choose a command from `Transform` or the context menu. Note transforms affect complete selected notes, including their positions, paths, and durations. Text formatting is covered in [Chart organization](/en/miacode/tools/chart-organization).

### Mirrors and rotations

Horizontal and vertical mirrors, 180° rotation, and clockwise or counterclockwise 45° rotation change the selected Tap and Touch positions and Slide paths.

### Note subdivision adjustment

Raising by one step doubles the subdivision and adds comma spacing to retain the original beat positions:

| Before | After raising one step |
| --- | --- |
| `{16}1,2,` | `{32}1,,2,,` |

Raising half a step multiplies the subdivision by 1.5; lowering applies the reverse adjustment.

### Note transforms

| Command | Result |
| --- | --- |
| Clear all | Removes complete selected notes while retaining commas and other timing structure |
| Reset objects | Replaces complete selected notes with Tap 1 while retaining timing structure |
| `Transform → More` | Provides Break, Ex, Firework, and random-direction commands |

## Touch input

<figure class="doc-figure doc-figure--window">
<a :href="$withBase('/images/touch_input.png')" target="_blank"><img class="interface-shot" src="/images/touch_input.png" alt="Touch input regions" loading="lazy"></a>
</figure>

Enable Touch click input in [Preview settings](/en/miacode/settings/preview#video). Pause playback, place the editor caret at the insertion point, hold `Ctrl` (`⌘` on macOS), and click a Touch region in the preview.

Clicking A1 inserts `A1`. Clicking A2 next produces `A1/A2`. Simultaneous Touch notes are separated by `/`.

## Bookmarks

<figure class="doc-figure">
<a :href="$withBase('/images/bookmarks.png')" target="_blank"><img class="interface-shot" src="/images/bookmarks.png" alt="Section comments and bookmarks" loading="lazy"></a>
</figure>

<figure class="doc-figure">
<a :href="$withBase('/images/bookmark_edit.png')" target="_blank"><img class="interface-shot" src="/images/bookmark_edit.png" alt="Rename bookmark" loading="lazy"></a>
</figure>

Entering `|| [Chorus] Revise the rhythm here` creates a bookmark titled “Chorus”, with the remaining text as a note.

Click a bookmark to jump to its line. Add, rename, and delete commands in the line-number margin edit that line's comment.

## Find and replace

<figure class="doc-figure">
<img class="interface-shot" src="/images/find_replace.png" alt="Find and replace" loading="lazy">
</figure>

Open `Edit → Find` or press `Ctrl+F` (`⌘F` on macOS) to find or replace the current match or all matches. Match case and whole-word options refine the query. `Enter` finds the next match, `Shift+Enter` finds the previous match, and `Esc` closes the panel.

## Transform shortcuts

| Action | Default | macOS |
| --- | --- | --- |
| Mirror left and right | `Ctrl+J` | `⌘J` |
| Mirror up and down | `Ctrl+K` | `⌘K` |
| Rotate 180° | `Ctrl+L` | `⌘L` |
| Rotate counterclockwise 45° | `Ctrl+;` | `⌘;` |
| Rotate clockwise 45° | `Ctrl+'` | `⌘'` |
| Double subdivision | `Ctrl+=` | `⌘=` |
| Halve subdivision | `Ctrl+-` | `⌘-` |
