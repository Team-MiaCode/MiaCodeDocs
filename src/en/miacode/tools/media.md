# track.mp3 & pv.mp4 tools

The Tools menu provides separate audio and video processing menus. Open a saved chart so the tools can locate its song and PV.

## FFmpeg

Media processing and video export use FFmpeg. FFmpeg search locations include the MiaCode folder, bundled tool locations, and system PATH. `MIACODE_FFMPEG_PATH` can specify its location.

Configure the executable according to the path message if a tool reports that FFmpeg is needed.

## Prepend blank

Audio prepend inserts silence at the start of `track.mp3`. Video prepend inserts black frames at the start of PV.

Duration is calculated as `beats × 60 ÷ BPM`; 4 beats at 120 BPM are 2 seconds. The dialog provides timing detection and backup restoration.

After processing, audition the result in [Latency calibration](/en/miacode/chart/latency-calibration).

## Sample rate conversion

The audio conversion command processes `track.mp3` at 44100 Hz and saves the original as `track_bak.mp3`.

## Align PV to track

The alignment command compares the PV audio with `track.mp3`, estimates their time difference, and adjusts the video.

PV needs an audio track for analysis. Align and audition before compressing the same video, since compression removes its audio.

## Compression

Current-video compression targets a size below 20 MB and removes audio. It saves or replaces a sibling `_bak` backup.

Batch compression scans the selected folder and its immediate subfolders for `bg.mp4` or `pv.mp4`. Review the queue, start the task, and read each result. Videos already within the size limit receive the corresponding status.

## Backups and results

Audio tools use `track_bak.mp3`; video tools use a corresponding `_bak` file. Later processing may replace a backup, so copy an original elsewhere when retaining that version.

Read the completion message. If the processed file was saved separately, use the path shown there.
