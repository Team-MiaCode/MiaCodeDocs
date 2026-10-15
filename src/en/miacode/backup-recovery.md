# Backup and recovery

MiaCode saves backups while editing so you can recover earlier text or changes from an abnormal exit.

## Automatic backups

The latest snapshot updates about 2 seconds after input stops. A history version is saved about every 2 minutes when content changed, with up to 30 versions. Backups for `maidata.txt` are stored in `.miacode/.autosave/maidata.txt/`; the latest snapshot is `maidata.txt.bak` and history is in the `history` subdirectory.

## Restore a version

Open `File → Restore backup` to view records by time. Choose a version and confirm to load it into the current document. Recovery covers the whole document; `Save entire document` writes the restored content to the chart file.

## Abnormal exit

<figure class="doc-figure">
<a :href="$withBase('/images/backup_restore.png')" target="_blank"><img class="interface-shot" src="/images/backup_restore.png" alt="Restore from backup prompt" loading="lazy"></a>
</figure>

Open the chart from the abnormal session. A recoverable snapshot displays a recovery prompt. Choosing recovery loads the snapshot into the current document; saving writes it to the chart file.

The `.miacode` directory stores local backups and MiaCode settings. Media tools' `_bak` files restore processed media.
