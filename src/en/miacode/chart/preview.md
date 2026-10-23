# Chart preview

The preview displays the chart, background, and PV for the current difficulty.

## Updates while editing

While playback is paused, editing the current difficulty updates the preview.

## Playback and seeking

Use the preview toolbar to play, pause, or stop. Drag the progress bar or click the time ruler above the timeline to seek to that time.

When the preview is placed to the left of the editor under `Preferences → Interface → Layout`, the bottom toolbar changes order so that Play and Stop sit on the edge next to the editor.

With the preview or timeline focused, press `Space` to play or pause, or use these shortcuts:

| Command | Shortcut |
| --- | --- |
| Play / pause | `Ctrl/⌘+Shift+X` |
| Stop / play | `Ctrl/⌘+Shift+C` |
| Slow down / speed up | `Ctrl/⌘+O` / `Ctrl/⌘+P` |

Stopping returns to this playback's starting position; speed changes select the adjacent step. Customize shortcuts in [Preferences → Shortcuts](/en/miacode/settings/preferences#shortcuts).

While paused, hold `Alt/⌥` to switch between judgment areas and the background / PV; releasing it restores the display. Customize this hold gesture in Preferences.

<figure class="doc-figure doc-figure--panel">
<a :href="$withBase('/images/preview.png')" target="_blank"><img class="interface-shot" src="/images/preview.png" alt="Chart preview with playback controls below" width="1040" height="1474" loading="lazy"></a>
<figcaption>Chart preview and playback toolbar</figcaption>
</figure>

## Preview modes

Choose Normal rendering or Muri analysis from `Preview → Rendering Mode` or the rendering-mode menu at the top right of the preview. Muri analysis gives preview notes interactions with other notes and simulated judgment effects.

Free Aspect controls the canvas aspect ratio, and Hide PV controls background video visibility. Brightness, note speeds, and skins are covered in [Preview settings](/en/miacode/settings/preview).

The image below uses the same chart frame to show the difference between Normal rendering and Muri analysis.

## Detach and dock

Click the detach button in the preview toolbar. The chart canvas, transport controls, and note counts move into a separate window. Move it to another display or resize it to inspect patterns.

The pin button in the detached window's title bar controls whether it stays on top. Its tooltip reads Keep Preview on Top or Restore Normal Window Order. Edits and seeking stay synchronized. Click the dock button in the detached window's toolbar, or close it, to return the preview to the editor.

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/main_light.png')" target="_blank"><img class="interface-shot" src="/images/main_light.png" alt="Classic sidebar and detached preview" width="2864" height="1864" loading="lazy"></a>
</figure>

Drag panel boundaries to adjust the editor, preview, and bottom panel proportions. See [Interface modes](/en/miacode/ui-modes) for sidebar modes and panel order.

When the detached preview is full screen, press `Esc` to restore its window. Press `Ctrl/⌘+W` to close the detached window.

<span id="panel-and-appearance"></span>
<span id="touch-input"></span>
