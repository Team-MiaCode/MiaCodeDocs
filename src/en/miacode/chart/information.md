# Chart information

Open the information page from the Chart sidebar or Tools menu. It manages song fields, designer names, and chart media.

<figure class="doc-figure doc-figure--panel">
<a :href="$withBase('/images/information.png')" target="_blank"><img class="interface-shot" src="/images/information.png" alt="Chart information" width="1456" height="1168" loading="lazy"></a>
<figcaption>Chart information</figcaption>
</figure>

## Song fields

Enter the title, artist, and designer. The read-from-audio command reads song information from a media file and fills the corresponding fields.

Offset corresponds to simai `&first` and is measured in seconds. Count-in controls the beat count before playback. BPM and offset detection are described in [Latency calibration](/en/miacode/chart/latency-calibration).

## Difficulties and designers

Select a difficulty to enter its level and designer. Designer management supports separate names for each difficulty or a shared name across difficulties.

These fields appear in difficulty displays, video intros, and cover cards.

## Jacket and PV

Choose a jacket image, or import and remove PV from this page. The video field specifies the video path used by the chart.

See [Audio settings](/en/miacode/settings/audio) for volume, and [Media tools](/en/miacode/tools/media) for silence insertion, alignment, and compression.

## Other fields

Enter additional document fields as `&field=value`, one per line.

