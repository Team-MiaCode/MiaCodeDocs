# 谱面下载与上传

MiaCode 提供 `网络` 功能，可在侧栏和顶部工具栏中使用。该功能用于访问谱面平台，进行下载、上传与在线预览，相关页面以标签页形式打开。当前默认使用 Majdata Net。

## 下载

下载入口默认开放，使用 `网络 → 谱面下载` 即可打开下载页。

可选择填写用户 ID、Tag 或歌曲名，选择日期与排序，点击 `查询`。MiaCode 在仅填写单一项信息时也能进行查询。

点击结果行的 `在线预览` 可以在 MiaCode 中打开谱面。`下载 PV` 选项控制在线预览与下载时是否获取 PV；需要留存预览谱面时，使用 `文件 → 另存为` 保存到本地。

输出目录初始为桌面，应用会记住上次设置的目录。

勾选 `成功后额外生成 ZIP` 可为下载成功的谱面生成压缩包。

`查看日志` 显示任务详情，列表显示各谱面的状态。

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/net_download.png')" target="_blank"><img class="interface-shot" src="/images/net_download.png" alt="Net 谱面下载" width="2784" height="1824" loading="lazy"></a>
</figure>

## 上传

### 启用上传入口

上传入口默认关闭。启用上传功能需要打开并编辑下表路径中的 `config.json`。默认情况下，文件内容为空对象 `{}`，需要在 `{}` 内新增 `"net_config"` 字段，并将值设为 `true`。

| 系统 | 配置文件位置 |
| --- | --- |
| Windows | `%LOCALAPPDATA%\MiaCode\config.json` |
| macOS | `~/Library/Preferences/MiaCode/config.json` |

若文件中已有 `"net_config"` 字段，将其值设为 `true`。启用后的配置示例：

```json
{
  "net_config": true
}
```

保存文件并重启 MiaCode 后，就可以在 `网络` 中找到并打开 `谱面上传` 了。

若需要关闭上传功能，将 `"net_config"` 的值设为 `false`，或删除 `"net_config"` 字段，保存文件并重启 MiaCode。

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/net_upload.png')" target="_blank"><img class="interface-shot" src="/images/net_upload.png" alt="Net 谱面上传" width="2784" height="1824" loading="lazy"></a>
</figure>

### 上传队列

上传队列扫描谱面根目录及其一级子目录。每份谱面需要 `maidata.txt`、`track.mp3` 和曲绘（`bg.jpg`、`bg.jpeg` 或 `bg.png`）。PV 为可选素材，支持 `pv.mp4` 或 `bg.mp4`。素材缺失或读取失败的条目会在日志中列出原因。

队列按排列顺序上传，支持调整顺序、移除条目与清空队列。`查看日志` 记录任务详情。

上传失败时，可在 `查看日志` 中确认原因，并使用 `重试待上传项目` 重试。显示 `服务器结果待确认` 时，需要到对应平台核对上传结果。
