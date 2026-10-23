# 片头

在 `导出 → 视频导出 → 片头` 中开启片头。

## 样式与背景

片头样式提供 `经典` 和 `PV 预览`。背景可以使用曲绘或自定义图片，并设置模糊与难度卡阴影。

谱面类型支持自动识别、DX 和 SD。等级可以选择文字渲染方式，标题与正文分别可以设置字体。

## PV 片段与试听

使用 PV 预览样式时，通过区间控件设置片段起点。点击试听会播放所选 PV 片段。

片头页的 `背景/PV 亮度` 滑块调整 PV 预览样式的画面亮度。片段音乐通过 3 秒淡出衔接遮罩转场。

区间控件获得焦点后，按左、右方向键将片段起点前移、后移 0.1 秒；按住 `Shift` 配合方向键，每次移动 1 秒。

片段起点按谱面保存，各难度导出时使用该谱面记录的值。批量导出中，各谱面使用各自的片段起点。

<figure class="doc-figure doc-figure--panel">
<a :href="$withBase('/images/export_intro.png')" target="_blank"><img class="interface-shot" src="/images/export_intro.png" alt="片头设置" width="1456" height="1474" loading="lazy"></a>
<figcaption>片头设置</figcaption>
</figure>

## 信息与音量

片头中的标题、等级和谱师来自 [谱面信息](/miacode/chart/information)。标题字体与正文字体可以从字体库选择或导入。

片头音效的音量在 [音频设置](/miacode/settings/audio) 的“导出片头”通道中调整。
