# Preview settings

Open `Preview → Preview settings` to change game, video, and skin options. The video export page provides corresponding output options.

## Game

Tap and Touch have separate flow speeds, controlling how quickly notes approach their judgment positions.

| Option | Effect |
| --- | --- |
| DX slide stacking | Earlier Slides appear on top |
| FiNALE slide stacking | Later Slides appear on top |
| Center display | Chooses combo, achievement, DX score, or other information |
| Judgment effects and text distance | Adjusts judgment feedback and its position |

<figure class="doc-figure">
<img class="interface-shot" src="/images/preview_gameplay.png" alt="Tap and Touch speeds and game display settings">
<figcaption>Tap and Touch use separate speeds. Stacking order controls which overlapping Slide appears on top.</figcaption>
</figure>

## Video

<figure class="doc-figure">
<img class="interface-shot" src="/images/preview_video.png" alt="Preview visual settings" loading="lazy">
</figure>

Inner brightness controls the background or PV inside the judgment circle; outer brightness controls the surrounding area. Lower inner brightness to emphasize notes while retaining the outer media. Stage size controls how much of the frame the playfield occupies.

### Background and PV scaling

The diagram uses the same 16:9 sample in four 4:3 frames. Gray areas represent margins. Numbers match the table; the circle marks the inner playfield.

<figure class="doc-figure">
<img src="/images/background-scale-modes.svg" alt="One sample shown with fill, contain, centered square, and inner-circle contain with outer fill">
<figcaption>Compare cropping of the colored edges and how much of the frame the sample occupies.</figcaption>
</figure>

| Number and mode | Effect and use |
| --- | --- |
| 1 · Fill with cropping | Covers the frame and crops excess edges; use when frame coverage matters |
| 2 · Contain | Retains the whole sample with margins when aspect ratios differ |
| 3 · Centered square | Fits the complete sample inside the frame's centered square |
| 4 · Inner-circle contain, outer fill | Uses containment inside the circle and a filled layout outside |

Brightness smoothing, timestamps, and paused judgment areas have individual switches. Touch click input enables authoring from the preview; see [Text editor](/en/miacode/chart/text-editor#touch-input).

## Skin

Choose note skins, chart effects, and judgment-line styles, and manage assets with Open directory. HUD fonts are set per region, including center display, timestamps, and note counts. Choose an existing font, import a file, or reset the region's setting.

<figure class="doc-figure">
<img class="interface-shot" src="/images/preview_skin.png" alt="Note skins, judgment lines, and HUD fonts by region">
<figcaption>Select a HUD region, then choose or import a font for that region.</figcaption>
</figure>

See [Preferences → Performance](/en/miacode/settings/preferences#performance) for frame rates and decoding, and [Audio settings](/en/miacode/settings/audio) for volume.
