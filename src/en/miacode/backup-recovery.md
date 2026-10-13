# Backup & recovery

MiaCode saves automatic backups during editing to recover previous text or changes from an abnormal exit.

## Automatic backups

While the document has changes, the latest snapshot updates after about 2 seconds of idle input. Changed historical snapshots are saved about every 2 minutes, with up to 30 versions retained.

For `maidata.txt`, backups are stored under `.miacode/.autosave/maidata.txt/` in the chart folder. The latest snapshot is `maidata.txt.bak`, and historical versions are in `history`.

## Restore a version

Use `File → Restore backup` to view timestamped records. Select a version and confirm to load it into the current document.

Restoration covers the entire chart document, including its difficulties. Review the content and use `File → Save entire document` to write it to the chart file.

## Abnormal exit

Opening the chart from an abnormal exit may offer a recoverable snapshot. Confirm the prompt, review the restored text, and save.

## Preserve MiaCode data

Copy the `.miacode` directory with the chart folder to preserve backups and MiaCode settings. Media `_bak` files restore song and video assets; see [Media backups](/en/miacode/tools/media#backups-and-results).
