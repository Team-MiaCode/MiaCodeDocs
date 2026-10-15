# 打包 ZIP

使用 `导出 → 打包 ZIP` 将谱面文档和素材打包。

选择输出位置后生成压缩包。谱面文档使用当前工作区中的内容，包含各难度的修改。

## 包含的文件

<figure class="doc-figure doc-figure--window">
<a :href="$withBase('/images/package_zip.png')" target="_blank"><img class="interface-shot" src="/images/package_zip.png" alt="ZIP 输出位置" loading="lazy"></a>
</figure>

压缩包包含谱面文本，以及当前谱面解析到的同目录歌曲音频、曲绘和 PV。常见文件为 `maidata.txt`、`track.mp3`、`bg.jpg` 和 `pv.mp4`；素材文件按实际文件名打包。

PV 使用谱面目录中的视频，引用路径在[谱面信息](/miacode/chart/information)中设置。

自动保存快照和媒体处理生成的 `_bak` 备份属于本地恢复资料，相关说明见[备份与恢复](/miacode/backup-recovery)。
