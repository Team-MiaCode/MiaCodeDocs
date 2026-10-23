# Chart download and upload

MiaCode's `Network` features are available from the sidebar and top toolbar. They provide access to chart platforms for downloads, uploads, and online previews, with pages opening as editor tabs. The current default platform is Majdata Net.

## Download

Downloads are enabled by default, and the download page opens from `Network → Chart download`.

Search by user ID, Tag, or song title, with date and sorting options. A single search field is sufficient for a query.

Online preview opens the chart in MiaCode. Download PV controls whether online previews and downloads include PV. To keep a previewed chart, use `File → Save as` to save a local copy.

The output folder starts at the desktop, and the application remembers the last directory you set.

Also create ZIP produces an archive for each chart downloaded successfully.

View log shows task details, and the list displays each chart's state.

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/net_download.png')" target="_blank"><img class="interface-shot" src="/images/net_download.png" alt="Net chart download" width="2784" height="1824" loading="lazy"></a>
</figure>

## Upload

### Enable the upload entry

Uploads are disabled by default. To enable them, open and edit `config.json` at the path listed below. By default, the file contains an empty JSON object, `{}`. Add the `"net_config"` field inside the braces and set it to `true`.

| System | Configuration file location |
| --- | --- |
| Windows | `%LOCALAPPDATA%\MiaCode\config.json` |
| macOS | `~/Library/Preferences/MiaCode/config.json` |

If the `"net_config"` field is already present, set its value to `true`. Example of an enabled configuration:

```json
{
  "net_config": true
}
```

Save the file and restart MiaCode. You can then find and open `Chart upload` in the `Network` menu.

To disable uploads, set `"net_config"` to `false` or remove the field, save the file, and restart MiaCode.

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/net_upload.png')" target="_blank"><img class="interface-shot" src="/images/net_upload.png" alt="Net chart upload" width="2784" height="1824" loading="lazy"></a>
</figure>

### Upload queue

The upload queue scans the chart root directory and its immediate subdirectories. Each chart requires `maidata.txt`, `track.mp3`, and a jacket image (`bg.jpg`, `bg.jpeg`, or `bg.png`). PV is optional and can be `pv.mp4` or `bg.mp4`. The log lists entries with missing or unreadable media and their reasons.

Charts upload in queue order. The queue supports reordering, removing entries, and clearing the list. View log records task details.

For failed uploads, check View log for the cause and use Retry pending uploads to retry. If an entry shows Server outcome unknown, check the upload result on the corresponding platform.
