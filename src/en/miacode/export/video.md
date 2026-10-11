# Video export

Open `Export → Video export`, select a difficulty, configure the output and appearance, then start export.

## Output and appearance

Set the output filename, resolution, frame rate, audio bitrate, quality, and file-size preset according to the destination platform.

Visual, gameplay, and skin sections control the appearance. Options also include note statistics, chart information, and count-in. See [Preview settings](/en/miacode/settings/preview) for their meanings.

<figure class="doc-figure">
<img class="interface-shot" src="/images/导出-视频导出-导出-输出.png" alt="Video output settings">
<figcaption>Video output settings</figcaption>
</figure>

### Visual options

<figure class="doc-figure">
<img class="interface-shot" src="/images/导出-视频导出-导出-视频.png" alt="Video visual settings">
<figcaption>Video visual settings</figcaption>
</figure>

## Intro

Enable an intro to display song and difficulty information. Style, backgrounds, fonts, PV selection, and auditioning are described in [Intro](/en/miacode/export/intro).

## Batch export

Choose Batch export, add chart folders, select difficulties, and set an output folder. Selected difficulties from the listed charts enter the export task.

Chart folders supply `maidata.txt` and media. The output folder receives the generated videos.

<figure class="doc-figure">
<img class="interface-shot" src="/images/导出-视频导出-批量导出.png" alt="Batch video export">
<figcaption>Batch video export</figcaption>
</figure>

## Range export

Enter start and end times or drag the range handles in the output section. The normal minimum is 5 seconds; charts shorter than 5 seconds use their available duration.

Select chart text and use Export selected range from the context menu to apply its times to the export range.

Range playback in the preview toolbar uses this interval. Toggle it to return to full-song playback.

## Export task

Progress appears during export. Cancel export ends the task. Open the output location after completion to view the video.

Video export uses FFmpeg; see [FFmpeg](/en/miacode/tools/media#ffmpeg) for its lookup locations.
