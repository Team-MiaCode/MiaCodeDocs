# Quick Start

Create a chart from a song, enter its information, align the beat, and save your work.

## Download and launch

Release packages are available on [GitHub Releases](https://github.com/Team-MiaCode/MiaCode/releases). Development builds are listed under [GitHub Actions](https://github.com/Team-MiaCode/MiaCode/actions/workflows/package.yml); select a run for the `dev` branch.

On Windows, extract the package for your architecture and launch `MiaCode.exe`. On an Apple silicon Mac, extract and launch `MiaCode.app`. Linux build instructions are in the repository [README](https://github.com/Team-MiaCode/MiaCode/blob/dev/README_EN.md).

## Create a chart

### Create from a song

Place the song in the folder intended for the chart. Choose New on the welcome page or use `File → New`, then select an audio file. Supported formats include `.mp3`, `.wav`, `.flac`, and `.ogg`.

MiaCode creates `maidata.txt` beside the song and prepares a `track` audio file for preview.

### Create by dragging an audio file

Drop an audio file into the window to create a chart. If the folder already contains a chart or another track, the dialog offers options such as opening, replacing, or creating a folder. Choose according to the displayed destination.

Open an existing chart with `File → Open`, the recent files list, or by dropping `maidata.txt` into the window.

## Enter information and align the beat

Fill in the title, artist, designer, media, and difficulty level in [Chart information](/en/miacode/chart/information).

Open [Latency calibration](/en/miacode/chart/latency-calibration) to enter or detect BPM and offset, then audition the beat against the song. In simai text, BPM is written as `(value)` and subdivision as `{value}`.

## Edit and save

Write simai text in the [Text editor](/en/miacode/chart/text-editor), and inspect it with the [Preview](/en/miacode/chart/preview) and [Timeline](/en/miacode/chart/timeline). Analysis entries help locate syntax and pattern issues.

`File → Save` saves the current editing section. Use `Save entire document` to save changes across difficulties.

When the chart is ready, [export a video](/en/miacode/export/video), [create a cover](/en/miacode/export/cover), or [package a ZIP](/en/miacode/export/zip).
