# 视频导出

点击左侧导出图标，进入导出页。

## 输出设置 {#输出参数}

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/video_export.png')" target="_blank"><img class="interface-shot" src="/images/video_export.png" alt="视频导出的难度、文件名与输出参数" width="2784" height="1824" loading="lazy"></a>
</figure>

在 `输出` 页选择导出难度，设置文件名与输出路径，调整视频参数。

| 参数 | 作用 |
| --- | --- |
| 分辨率 | 设置视频尺寸与画面比例 |
| 帧率 | 设置每秒输出的画面数量 |
| 音频码率 | 设置音频编码码率 |
| 导出质量、文件体积档位 | 设置视频编码质量与文件体积档位 |

设置完成后，点击 `开始导出` 生成谱面视频。

## 区间导出

在输出页输入开始、结束时间，或拖动区间控件的两端，设置视频的导出范围。常规区间下限为 5 秒；歌曲短于 5 秒时使用可用时长。

在编辑器选中文本，右键选择 `导出所选区间`，会将选区对应的时间应用到导出设置。

### 区间播放

设置导出区间后，预览工具栏会显示 `区间播放模式`。开启后按所设区间播放，点击同一按钮返回整曲播放。

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/export_range.png')" target="_blank"><img class="interface-shot" src="/images/export_range.png" alt="导出区间与区间播放" width="2784" height="1824" loading="lazy"></a>
<figcaption>开启区间播放模式后</figcaption>
</figure>

<span id="输出与画面"></span>

## 画面与片头

画面、游戏和皮肤页提供亮度、缩放、流速、物量统计、谱面信息和计数拍等选项，含义见[预览设置](/miacode/settings/preview)。

开启[片头](/miacode/export/intro)后，视频开头会显示歌曲、等级和谱师信息。片头页可设置样式、背景、字体与 PV 片段。

<span id="片头"></span>
<span id="画面选项"></span>

## 批量导出

打开 `批量导出`，添加包含 `maidata.txt` 与素材的谱面文件夹，勾选难度并设置输出文件夹。点击开始导出，队列会按所选谱面和难度生成视频。

