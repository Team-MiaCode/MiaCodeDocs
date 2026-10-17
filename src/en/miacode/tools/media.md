# Audio and video processing

The Tools menu provides separate audio and video processing menus. The tools use the song and PV in the opened, saved chart's folder.

<figure class="doc-figure doc-figure--overview">
<a :href="$withBase('/images/media_tools.png')" target="_blank"><img class="interface-shot" src="/images/media_tools.png" alt="Audio and video processing menus" width="1520" height="480" loading="lazy"></a>
</figure>

## FFmpeg

Media processing and video export use FFmpeg. FFmpeg search locations include the MiaCode folder, bundled tool locations, and system PATH. `MIACODE_FFMPEG_PATH` can specify its location.

## Prepend blank

Audio prepend inserts silence at the start of `track.mp3`. Video prepend inserts black frames at the start of PV.

Duration is calculated as `beats × 60 ÷ BPM`; 4 beats at 120 BPM are 2 seconds. The dialog provides timing detection and backup restoration.

## Sample rate conversion

The audio conversion command processes `track.mp3` at 44100 Hz and saves the original as `track_bak.mp3`.

## Align PV to track

The alignment command compares the PV audio with `track.mp3`, estimates their time difference, and adjusts the video.

Alignment uses the PV audio track for analysis. Video compression removes the audio track.

## Compression

Current-video compression targets a size below 20 MB and removes audio. It saves or replaces a sibling `_bak` backup.

Batch compression scans the selected folder and its immediate subfolders for `bg.mp4` or `pv.mp4`. Starting the task displays results for each entry. Videos within the size limit receive the corresponding status.

## Backups and results

Audio tools use `track_bak.mp3`; video tools use a corresponding `_bak` file. Later processing may replace a backup.

The result message displays the processing status and generated file path.
