# Chart organization

Chart organization formats subdivisions, line breaks, and spacing. Open it from `Tools → Chart organization`, `Transform → Chart organization`, or the editor context menu.

## Processing range

The default processing range is the current difficulty's entire text. Selecting text changes the range to that selection. The dialog displays either the whole chart or the selection's start and end lines. Choose the format and apply organization to write the result back to the editor.

Organization reads the BPM and subdivision preceding the selection and formats the selected passage from a new measure boundary. Parsing errors appear in the dialog; their locations and meanings are covered in [Syntax checks](/en/miacode/chart/validation#syntax).

<figure class="doc-figure doc-figure--compact">
<a :href="$withBase('/images/normalize.png')" target="_blank"><img class="interface-shot" src="/images/normalize.png" alt="Chart organization" width="840" height="536" loading="lazy"></a>
</figure>

## Before and after

This example shows the text before and after organization.

```text
{32}5,4,3,2,8,7,6,5,{16}3,3,4,4,5,4,3,2,8,7,6,5,
```

Using Preserve sections with Align to the 1/384 grid enabled produces:

```text
{32}5,4,3,2,8,7,6,5, {16}3,3,4,4, 5,4,3,2, 8,7,6,5,
```

Spaces separate beats, and each measure occupies one line. This passage retains its notes and beat positions.

## Options

| Option | Function |
| --- | --- |
| Align to the 1/384 grid | Aligns timing and durations to this grid when enabled; disabling it preserves precision beyond the grid |
| Blank-line grouping | Adds a blank line every 2 or 4 measures, or uses continuous layout |
| Output format | Preserve sections separates beats with spaces; compact format condenses each measure |

Initial options are alignment to the 1/384 grid, grouping every 4 measures, and Preserve sections. The dialog remembers applied options.
