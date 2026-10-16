# Cover export

Open `Export → Cover export` to compose a publishing cover from song information, images, text, and chart frames.

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/cover_editor.png')" target="_blank"><img class="interface-shot" src="/images/cover_editor.png" alt="Cover editor" width="2784" height="1824" loading="lazy"></a>
</figure>

## Canvas and background

Choose a canvas preset with a 1:1, 4:3, or 16:9 aspect ratio. Use the jacket, a custom image, or transparency for the background, and adjust brightness or blur.

In the cover editor window, press `Ctrl/⌘++` to zoom in, `Ctrl/⌘+-` to zoom out, or `Ctrl/⌘+0` to restore 100%. Display zoom ranges from 50% to 200%; export settings determine the output image size.

## Layers

Add chart-frame, image, or text layers. The layer list supports reordering, duplication, deletion, visibility, and locking.

Select a layer to change its position, size, and opacity. Text layers support content, color, bold, and fonts. Image layers use a selected image file.

After clicking a row in the layer list, use these keys on the selected layer:

| Command | Shortcut |
| --- | --- |
| Select the previous / next layer | Up / Down |
| Toggle visibility / locking | `V` / `L` |
| Delete the layer | `Delete` or `Backspace` |

## Chart frames

Add a chart-frame layer and choose a difficulty. Playback and the time control set the chart time displayed by the layer.

Select a visible chart-frame layer and focus its time controls to use these keys:

| Command | Shortcut |
| --- | --- |
| Seek backward / forward; hold for continuous movement | Left / Right |
| Play or pause the selected layer's chart frame | `Space` |
| Seek to the chart's beginning / end | `Home` / `End` |

Set the chart-frame background, brightness, and transparency in the Layer panel.

<figure class="doc-figure doc-figure--overview">
<a :href="$withBase('/images/cover_frame_settings.png')" target="_blank"><img class="interface-shot" src="/images/cover_frame_settings.png" alt="Chart frame and layer settings" width="2560" height="1520" loading="lazy"></a>
</figure>

## Layouts and presets

Save layout writes the composition to a file; Open layout loads it. Save preset stores the layout as a style, and applying a preset uses that style for the current cover.

## Export

Choose the output path and size, then export. Supported formats include PNG, JPG, JPEG, and BMP. PNG supports transparency.
