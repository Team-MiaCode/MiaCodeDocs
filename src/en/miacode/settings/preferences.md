# Preferences

Open Preferences from the main toolbar's settings entry. Changes apply and are saved as you edit them.

## Editor

<figure class="doc-figure">
<a :href="$withBase('/images/preferences_editor.png')" target="_blank"><img class="interface-shot" src="/images/preferences_editor.png" alt="Editor" loading="lazy"></a>
</figure>

| Option | Purpose |
| --- | --- |
| Completion | Enables BPM, duration, and subdivision candidates; see [Text editor](/en/miacode/chart/text-editor#completion) |
| Selection beat display | Shows passage length; see [Selection beats](/en/miacode/chart/text-editor#selection-beats) |
| Input handling | Corrects full-width characters, blocks input methods with correction, or preserves input |
| Font size, line spacing, and wrapping | Adjusts text density and long-line display |
| Scroll past end | Provides editing space below the final line |

### Completion

<figure class="doc-figure">
<a :href="$withBase('/images/completion_settings.png')" target="_blank"><img class="interface-shot" src="/images/completion_settings.png" alt="Custom completion candidates" loading="lazy"></a>
</figure>

Enable completion and expand Custom candidates to manage durations and subdivisions separately. Enter candidate content such as `4:1` for a duration or `16` for a subdivision; completion adds the brackets. BPM candidates come from the song BPM and current difficulty's text.

Enter a candidate at the end of the list and press `Enter` or leave the field to save it. Drag to reorder or delete a candidate. Restore defaults resets that group's candidates after confirmation.

Durations use valid duration syntax, including `#` for BPM changes; subdivisions use positive integers. Full-width symbols are converted to half-width, and candidates are saved after validation.

### Overview ruler

The ruler sits beside the editor's vertical scrollbar: yellow marks warnings, blue marks bookmarks, and red marks errors or pattern warnings. A horizontal mark shows the caret or follow position. Use the Overview ruler switch to control its display.

## Shortcuts

<figure class="doc-figure">
<a :href="$withBase('/images/preferences_shortcuts.png')" target="_blank"><img class="interface-shot" src="/images/preferences_shortcuts.png" alt="Shortcuts" loading="lazy"></a>
</figure>

Select a command row and enter a combination; `Esc` cancels entry. The row's reset restores that command, while Restore all defaults resets the group. Playback speed and timeline zoom commands are also available here. Menu shortcuts reflect your settings.

## Interface and layout

<figure class="doc-figure">
<a :href="$withBase('/images/preferences_interface.png')" target="_blank"><img class="interface-shot" src="/images/preferences_interface.png" alt="Interface" loading="lazy"></a>
</figure>

Choose a language, light or dark theme, and palette. The sidebar supports standard and efficient modes. Choose Editor | Preview or Preview | Editor to arrange the panels. Blur materials controls interface effects.

## Performance

<figure class="doc-figure">
<a :href="$withBase('/images/preferences_performance.png')" target="_blank"><img class="interface-shot" src="/images/preferences_performance.png" alt="Performance" loading="lazy"></a>
</figure>

Choose hardware or software video decoding. Canvas, PV, and timeline have separate frame-rate controls. Set output frame rate in [Video export](/en/miacode/export/video#output-parameters).

## Background

<figure class="doc-figure">
<a :href="$withBase('/images/preferences_background.png')" target="_blank"><img class="interface-shot" src="/images/preferences_background.png" alt="Background" loading="lazy"></a>
</figure>

Enable the application background, choose an image, and adjust opacity, mask, and blur. Cover, contain, stretch, center, and repeat control layout; position controls alignment.

This background belongs to the application interface. Configure chart backgrounds and PV appearance in [Preview settings](/en/miacode/settings/preview#video).

## Updates

<figure class="doc-figure">
<a :href="$withBase('/images/update_settings.png')" target="_blank"><img class="interface-shot" src="/images/update_settings.png" alt="Update settings" loading="lazy"></a>
</figure>

Choose a stable or prerelease channel, enable startup checks, or use Check now to view results for the selected channel.

<span id="interface"></span>

[Interface modes and panel layout](/en/miacode/ui-modes)
