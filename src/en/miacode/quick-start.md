# Quick Start

This page covers creating, opening, editing, and saving charts in 2.0.0-alpha.

<figure class="doc-figure doc-figure--window">
<a :href="$withBase('/images/main_dark.png')" target="_blank"><img class="interface-shot" src="/images/main_dark.png" alt="MiaCode workspace" loading="lazy"></a>
</figure>

## Download and launch

Get a package from [Download MiaCode](/en/download), extract it, and launch the application.

- **Windows**: open `MiaCode.exe` in the extracted folder.
- **macOS**: open `MiaCode.app`, or move it to Applications. If macOS blocks it through quarantine, run this in Terminal from the extracted folder before launching:

  ```bash
  xattr -dr com.apple.quarantine "MiaCode.app"
  ```

Linux build instructions are in the repository [README](https://github.com/Team-MiaCode/MiaCode/blob/dev/README_EN.md#linux-advanced-users).

## Create or open a chart

Choose New on the welcome page or `File → New` and select audio. Supported formats include `.mp3`, `.wav`, `.flac`, and `.ogg`. MiaCode creates `maidata.txt` beside the song and prepares a `track` audio file for preview.

Dropping audio into the window creates a chart. If the folder contains a chart or song, the dialog offers options to open, replace, or create a folder.

Open an existing chart with `File → Open`, the recent files list, or by dropping `maidata.txt` into the window.

<span id="create-a-chart"></span>
<span id="create-from-a-song"></span>
<span id="create-by-dragging-an-audio-file"></span>

## Select a difficulty and enter information

Add or select a difficulty, then fill in its level, title, artist, designer, and media in [Chart information](/en/miacode/chart/information).

## Align the beat

Open [Latency calibration](/en/miacode/chart/latency-calibration), enter BPM and offset, or use their Auto detect buttons. Start audition plays the song and timing sounds.

<span id="enter-information-and-align-the-beat"></span>

## Edit and preview

Write simai text in the [Text editor](/en/miacode/chart/text-editor). This text places four Taps at quarter-note intervals at 120 BPM:

```text
(120){4}1,2,3,4,
E
```

`(120)` sets BPM, `{4}` sets the subdivision, commas advance time, and `E` marks the end. With [Completion](/en/miacode/chart/text-editor#completion) enabled, the corresponding opening bracket displays BPM, subdivision, or duration candidates.

The preview toolbar controls playback, pause, and seeking. The [Timeline](/en/miacode/chart/timeline) displays the waveform and notes, [Chart organization](/en/miacode/tools/chart-organization) formats text, and [Syntax & pattern warnings](/en/miacode/chart/validation) lists results for the current difficulty.

## Save

`File → Save` saves the current editing section; Save entire document saves changes across difficulties and the document.


<span id="edit-and-save"></span>
