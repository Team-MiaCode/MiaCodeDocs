# 延迟校准

使用 `谱面 → 延迟校准` 或 `工具 → 延迟校准` 打开页面，设置歌曲 BPM 与谱面偏移，并播放计拍声音。

## BPM 与偏移

填写 BPM 数值，或点击 BPM 旁的 `自动检测`。MiaCode 会分析当前歌曲并显示检测结果，采用的数值会写入谱面。

确定 BPM 后，点击偏移旁的 `自动检测`。偏移以秒为单位，对应谱面信息中的 `&first`。BPM 决定节拍间隔，偏移决定谱面与歌曲的时间对应关系。

## 试听

设置计数拍与细分，点击 `开始试听`，会播放歌曲与计拍声音。音效音量控制计拍声音的大小。

变速歌曲的各段 BPM 在谱面文本中通过 `(BPM)` 设置。

<figure class="doc-figure doc-figure--panel">
<a :href="$withBase('/images/latency.png')" target="_blank"><img class="interface-shot" src="/images/latency.png" alt="延迟校准" width="1456" height="626" loading="lazy"></a>
</figure>

## 文件处理与谱面偏移

偏移改变谱面与歌曲的时间对应关系。[音视频处理 → 前置空白](/miacode/tools/media#前置空白)会修改素材文件，在音频或 PV 开头添加空白。
