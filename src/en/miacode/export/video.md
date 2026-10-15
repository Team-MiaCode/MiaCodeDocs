# Video export

Open `Export → Video export`, choose a difficulty, set the output path and parameters, and start export to generate a chart video.

<figure class="doc-figure doc-figure--window">
<img class="interface-shot" src="/images/video_export.png" alt="Video output path, parameters, and range">
</figure>

The export page provides these parameters:

| Parameter | Function |
| --- | --- |
| Resolution | Sets video dimensions and aspect ratio |
| Frame rate | Sets the number of output frames per second |
| Audio bitrate | Sets the audio encoding bitrate |
| Quality and file-size preset | Sets video encoding quality and file-size preset |

## Range export

Enter start and end times or drag the range handles to set the export interval. The normal minimum is 5 seconds; songs shorter than 5 seconds use their available duration.

Select text in the editor and choose Export selected range from its context menu to apply the selection's times to the export settings.

### Range playback

Setting an export interval displays Range playback in the preview toolbar. Enable it to play within the interval. The same button returns to full-song playback.

<span id="output-and-appearance"></span>

## Appearance and intro

<figure class="doc-figure">
<img class="interface-shot" src="/images/export_video.png" alt="Export visual settings" loading="lazy">
</figure>

Visual, game, and skin sections provide brightness, scaling, note speeds, statistics, chart information, and count-in options. Their meanings are covered in [Preview settings](/en/miacode/settings/preview).

Enabling an [Intro](/en/miacode/export/intro) displays song, difficulty, and designer information at the start of the video. The intro section controls style, background, fonts, and the PV segment.

<span id="intro"></span>
<span id="visual-options"></span>

## Batch export

Open Batch export, add chart folders containing `maidata.txt` and media, select difficulties, and set an output folder. Starting export generates videos for the selected charts and difficulties.

<figure class="doc-figure">
<img class="interface-shot" src="/images/export_batch.png" alt="Chart folders, difficulty selections, and batch output settings">
</figure>
