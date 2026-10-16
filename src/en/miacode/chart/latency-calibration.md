# Latency calibration

Open this page from the Chart sidebar or Tools menu to set BPM and chart offset and play timing sounds.

## BPM and offset

Enter a known BPM, or choose Auto detect beside BPM. The tool analyzes the current song and displays the detected value; adopted values are applied to the chart.

After setting BPM, choose Auto detect beside offset. Offset is measured in seconds and corresponds to `&first`. BPM controls beat spacing, while offset controls the alignment between chart time and the song.

## Audition

Set count-in and subdivision, then start auditioning to play the song and timing sounds. Sound volume controls the timing sounds' level.

Section BPM values for songs with tempo changes are set with `(BPM)` directives in chart text.

<figure class="doc-figure doc-figure--panel">
<a :href="$withBase('/images/latency.png')" target="_blank"><img class="interface-shot" src="/images/latency.png" alt="Latency calibration" width="1456" height="626" loading="lazy"></a>
</figure>

## Media timing

Offset changes the timing relationship between the chart and song. [Prepend blank](/en/miacode/tools/media#prepend-blank) modifies media files by adding silence or black frames at the start.
