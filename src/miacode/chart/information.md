# 谱面信息

从左侧 `谱面 → 谱面信息`，或 `工具 → 谱面信息` 打开信息页。这里管理歌曲字段、谱师名义和谱面素材。

## 歌曲字段

填写标题、曲师和谱师。`从音频文件读取` 会读取媒体文件中的歌曲信息并填入对应字段。

偏移对应 simai 的 `&first`，单位为秒；计数拍用于播放开始前的计拍。BPM 与偏移的检测、试听操作见 [延迟校准](/miacode/chart/latency-calibration)。

<figure class="doc-figure">
<img class="interface-shot" src="/images/information.png" alt="谱面信息">
<figcaption>谱面信息</figcaption>
</figure>

## 难度与谱师

选择难度后，可以填写该难度的等级与谱师。通过 `谱师名义管理` 分别设置各难度的署名，或选择让各难度使用同一个谱师名义。

这些信息用于难度显示、视频片头和封面卡片。

## 曲绘与 PV

在信息页选择曲绘，导入或移除 PV。PV 字段可指定视频路径，MiaCode 会解析对应的背景视频。

音量设置见[音频设置](/miacode/settings/audio)；素材的前置空白、对齐与压缩见[音视频处理](/miacode/tools/media)。

## 其他字段

其他字段按 `&字段=值` 的形式填写，每行一个字段，作为扩展信息写入谱面文档。

