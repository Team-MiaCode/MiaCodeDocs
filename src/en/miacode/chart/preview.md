# Chart preview

The preview displays notes, backgrounds, and PV for the current difficulty.

## Updates while editing

While playback is paused, editing the current difficulty updates the preview.

## Playback and seeking

Use the preview toolbar to play, pause, or stop. Drag the progress bar or click the time ruler above the timeline to seek to that time.

<figure class="doc-figure doc-figure--portrait">
<img class="interface-shot" src="/images/preview.png" alt="Chart preview with playback controls below">
<figcaption>Chart preview and playback toolbar</figcaption>
</figure>

## Preview modes

<figure class="doc-figure">
<a :href="$withBase('/images/preview_modes.png')" target="_blank"><img class="interface-shot" src="/images/preview_modes.png" alt="Preview rendering modes" loading="lazy"></a>
</figure>

<figure class="doc-figure">
<a :href="$withBase('/images/preview_canvas.png')" target="_blank"><img class="interface-shot" src="/images/preview_canvas.png" alt="Canvas aspect and PV menu" loading="lazy"></a>
</figure>

Choose Normal rendering or Muri analysis from the rendering-mode menu at the top right of the preview.

Free Aspect controls the canvas aspect ratio, and Hide PV controls background video visibility. Brightness, note speeds, and skins are covered in [Preview settings](/en/miacode/settings/preview).

<span id="panel-and-appearance"></span>
<span id="touch-input"></span>

See [Text editor → Touch input](/en/miacode/chart/text-editor#touch-input) for authoring steps.

## Detach and dock

Click the detach button at the right of the preview toolbar. The chart canvas, transport controls, and note counts move into a separate window. Move it to another display or resize it to inspect patterns.

Edits and seeking stay synchronized. Click the dock button in the detached window, or close it, to return the preview to the editor.

<figure class="doc-figure doc-figure--window">
<a :href="$withBase('/images/main_light.png')" target="_blank"><img class="interface-shot" src="/images/main_light.png" alt="Efficient sidebar and detached preview" loading="lazy"></a>
</figure>

See [Interface modes](/en/miacode/ui-modes) for sidebar modes and panel order.

## Playback shortcuts

| Action | Default | macOS |
| --- | --- | --- |
| Play or pause | `Ctrl+Shift+X` | `⌘⇧X` |
| Stop or play | `Ctrl+Shift+C` | `⌘⇧C` |
| Decrease speed | `Ctrl+O` | `⌘O` |
| Increase speed | `Ctrl+P` | `⌘P` |

Customize these under [Preferences](/en/miacode/settings/preferences#shortcuts).
