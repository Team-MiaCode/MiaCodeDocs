# Chart download and upload

## Download

Open `Tools → Chart download`. Enter a user ID, tag, or song title, choose a date range and sort order, and search. Select charts using the row checkboxes, and click Online Preview to inspect a chart.

Choose an output folder and whether to download PV, then start the download. Select Create ZIP after success to save an archive alongside the chart folder. Use Select All for the query results and View Log for task details. The list shows progress and logs; resume a paused task with Continue download.

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/net_download.png')" target="_blank"><img class="interface-shot" src="/images/net_download.png" alt="Net chart download" width="2784" height="1824" loading="lazy"></a>
</figure>

## Upload

Open `Tools → Chart upload`, enter the username and password, and sign in. Remember account is available when secure storage is supported.

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/net_upload.png')" target="_blank"><img class="interface-shot" src="/images/net_upload.png" alt="Net chart upload" width="2784" height="1824" loading="lazy"></a>
</figure>

### Upload queue

Choose the chart root and select Add to queue. The list displays folders, files, paths, and states. Entries can be reordered or removed.

### Results

Start upload to display progress and logs. The completed task reports successful, failed, and pending confirmation counts. “Server result needs confirmation” means the entry's upload result requires confirmation from server records.
