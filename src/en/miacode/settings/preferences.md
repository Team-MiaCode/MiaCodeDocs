# Preferences

Open Preferences from the main toolbar's settings entry. Changes apply and are saved as you edit them.

## Editor

Set font size, line spacing, wrapping, completion, and editing aids to suit chart text entry and reading.

<figure class="doc-figure doc-figure--overview">
<a :href="$withBase('/images/preferences_editor.png')" target="_blank"><img class="interface-shot" src="/images/preferences_editor.png" alt="Editor" width="1472" height="1206" loading="lazy"></a>
</figure>

## Completion

Enabling completion automatically expands Custom candidates, where you can manage durations and subdivisions separately. Enter candidate content such as `4:1` for a duration or `16` for a subdivision; completion adds the brackets. BPM candidates come from the song BPM and current difficulty's text.

Enter a candidate at the end of the list and press `Enter` or leave the field to save it. Drag to reorder or delete a candidate. Restore defaults resets that group's candidates after confirmation.

Durations use valid duration syntax, including `#` for BPM changes; subdivisions use positive integers. Full-width symbols are converted to half-width, and candidates are saved after validation.

## Overview ruler

The ruler sits beside the editor's vertical scrollbar: yellow marks warnings, blue marks bookmarks, and red marks errors or pattern warnings. A horizontal mark shows the caret or follow position. Use the Overview ruler switch to control its display.

## Shortcuts

Select a command row and enter a combination; `Esc` cancels entry. The row's reset restores that command, while Restore all defaults resets the group. Playback speed and timeline zoom commands are also available here. Menu shortcuts reflect your settings.

### Default shortcuts

The table lists the default combinations for commands in Preferences. Commands and shortcuts in each row correspond in order. `⌘` means Command and `⌥` means Option. The final `+` in `Ctrl/⌘++` means the plus key.

| Command | Shortcut |
| --- | --- |
| Mirror horizontally / vertically | `Ctrl/⌘+J` / `Ctrl/⌘+K` |
| Rotate 180° | `Ctrl/⌘+L` |
| Rotate 45° counterclockwise / clockwise | `Ctrl/⌘+;` / `Ctrl/⌘+'` |
| Raise subdivision one / half a step | `Ctrl/⌘+=` / `Ctrl/⌘++` |
| Lower subdivision one / half a step | `Ctrl/⌘+-` / `Ctrl/⌘+Shift+-` |
| Toggle Break / EX / Firework / apply random rotation | `Ctrl/⌘+B` / `Ctrl/⌘+N` / `Ctrl/⌘+M` / `Ctrl/⌘+,` |
| Stop or play preview (stopping returns to this playback's starting position) | `Ctrl/⌘+Shift+C` |
| Play / pause preview | `Ctrl/⌘+Shift+X` |
| Decrease / increase playback speed | `Ctrl/⌘+O` / `Ctrl/⌘+P` |
| Flip judgment areas / PV while paused (hold) | `Alt/⌥` |
| Timeline zoom in / out | `Ctrl/⌘` + wheel up / down |
| Decrease / increase editor font size | `Ctrl/⌘+Alt/⌥+-` / `Ctrl/⌘+Alt/⌥+=` |
| Overwrite mode (typing replaces characters after the caret) | `Insert` |

### File and editing keys

The file menu and editor use these combinations.

| Command | Shortcut |
| --- | --- |
| New chart | `Ctrl/⌘+Shift+N` |
| Open chart | `Ctrl/⌘+Shift+O` |
| Save current editing section | `Ctrl/⌘+S` |
| Save as | `Ctrl/⌘+Shift+S` |
| Close active editor page or separate window | `Ctrl/⌘+W` |
| Undo | `Ctrl/⌘+Z` |
| Redo | `Ctrl+Y` / `⌘+Shift+Z` |
| Cut / copy / paste | `Ctrl/⌘+X` / `Ctrl/⌘+C` / `Ctrl/⌘+V` |
| Select all | `Ctrl/⌘+A` |
| Find and replace | `Ctrl/⌘+F` |
| Open editor context menu | `Shift+F10` or Menu key |
| Choose a completion candidate | Up / Down |
| Accept a completion candidate | `Enter/Return` or `Tab` |
| Close completion or find panel | `Esc` |
| Find next / previous | `Enter/Return` / `Shift` + `Enter/Return` in the search field |
| Replace current match | `Enter/Return` in the replacement field |
| Rename / delete bookmark | `F2` / `Delete` or `fn+Delete` on a bookmark row |

## Interface and layout

Choose a language, light or dark theme, and palette. The sidebar supports standard and efficient modes. Choose Editor | Preview or Preview | Editor to arrange the panels. Blur materials controls interface effects.

## Performance

Choose hardware or software video decoding. Canvas, PV, and timeline have separate frame-rate controls. Set output frame rate in [Video export](/en/miacode/export/video#output-parameters).

## Background

Enable the application background, choose an image, and adjust opacity, mask, and blur. Cover, contain, stretch, center, and repeat control layout; position controls alignment.

This background belongs to the application interface. Configure chart backgrounds and PV appearance in [Preview settings](/en/miacode/settings/preview#video).

## Updates

Choose a stable or prerelease channel, enable startup checks, or use Check now to view results for the selected channel.

<span id="interface"></span>

[Interface modes and panel layout](/en/miacode/ui-modes)
