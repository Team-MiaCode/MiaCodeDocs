# 时间轴

底部面板的时间轴显示歌曲波形、节拍线与当前难度的物件。

## 定位与拖动

点击上方的时间刻度，预览会定位到该时间，编辑器跳到对应文本。在物件区域按住 `Ctrl/⌘` 点击，也可按点击位置定位。

拖动波形区域或滚动滚轮可横向浏览。

点击时间轴使其获得焦点后，按住左、右方向键可向前、向后浏览，松开按键结束移动。按 `Space` 播放或暂停预览。

<figure class="doc-figure doc-figure--panel">
<a :href="$withBase('/images/timeline.png')" target="_blank"><img class="interface-shot" src="/images/timeline.png" alt="包含波形、物件、时间刻度与缩放入口的时间轴" width="1040" height="368" loading="lazy"></a>
<figcaption>时间轴</figcaption>
</figure>

## 缩放

点击时间轴左上角的百分比选择缩放档位。百分比右侧的向上箭头放大一档，向下箭头缩小一档。

在缩放控件上滚动滚轮，或让控件获得焦点后按上、下方向键，可按档位放大、缩小。

在时间轴区域按住 `Ctrl/⌘` 向上滚轮放大，向下滚轮缩小；组合键可在[首选项 → 快捷键](/miacode/settings/preferences#快捷键)调整。

<figure class="doc-figure doc-figure--compact">
<a :href="$withBase('/images/timeline_zoom.png')" target="_blank"><img class="interface-shot" src="/images/timeline_zoom.png" alt="时间轴缩放菜单" width="540" height="754" loading="lazy"></a>
</figure>

## 代码跟随

在时间轴设置中开启 `代码跟随`，播放或定位时编辑器会标示对应的谱面位置。

## 显示参数

时间轴设置提供波形亮度和小节线亮度。时间轴刷新率在[首选项 → 性能](/miacode/settings/preferences#性能)中设置。

<figure class="doc-figure doc-figure--compact">
<a :href="$withBase('/images/timeline_settings.png')" target="_blank"><img class="interface-shot" src="/images/timeline_settings.png" alt="时间轴亮度与代码跟随" width="540" height="754" loading="lazy"></a>
</figure>

