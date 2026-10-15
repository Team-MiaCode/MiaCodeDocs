# 谱面下载与上传

<figure class="doc-figure doc-figure--window">
<a :href="$withBase('/images/net_download.png')" target="_blank"><img class="interface-shot" src="/images/net_download.png" alt="Net 谱面下载" loading="lazy"></a>
</figure>

## 下载

使用 `工具 → 谱面下载` 打开下载页。填写用户 ID、标签或歌曲名，选择日期与排序，点击 `查询`。点击结果行的复选框选择谱面，点击 `在线预览` 查看配置。

选择目标文件夹与是否下载 PV，点击下载所选谱面。勾选 `成功后额外生成 ZIP` 可同时保存压缩包。点击 `全选` 选择查询结果，或逐项勾选；任务进度与详情可在 `查看日志` 中查看。暂停任务后使用 `继续下载`。

## 上传

<figure class="doc-figure doc-figure--window">
<a :href="$withBase('/images/net_upload.png')" target="_blank"><img class="interface-shot" src="/images/net_upload.png" alt="Net 谱面上传" loading="lazy"></a>
</figure>

使用 `工具 → 谱面上传` 打开上传页，填写账号和密码后登录。支持安全存储时，可勾选记住账号。

### 上传队列

选择谱面根目录，点击 `添加到队列`。列表显示谱面文件夹、文件、路径和状态，选中条目后可上移、下移或移除，也可拖动条目排序。

### 上传结果

点击开始上传，列表会显示进度与日志。任务结束后显示成功、失败和待确认数量。“服务器结果待确认”表示该条目的上传结果需要根据服务端记录确认。
