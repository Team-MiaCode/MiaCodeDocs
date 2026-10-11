# 谱面预览

谱面预览用于查看文字编辑对应的物件、背景和 PV。暂停状态下也可以拖动进度条或时间轴，查看某个时间点的配置。

<figure class="doc-figure doc-figure--portrait">
<img class="interface-shot" src="/images/预览区.png" alt="谱面预览区">
<figcaption>谱面预览区</figcaption>
</figure>

## 播放与定位

预览工具栏提供播放、暂停、停止和播放速度选项。需要检查一段配置时，降低播放速度，或拖动进度条定位到对应时间。

`区间播放模式` 使用视频导出页设置的区间，适合检查计划导出的片段。区间设置见 [视频导出](/miacode/export/video#区间导出)。

## 面板与画面

拖动面板边界调整预览区大小。工具栏提供预览窗口的分离与停靠入口，可按工作区布局选择。

背景或 PV 的裁切、亮度和谱面显示范围在 [预览设置](/miacode/settings/preview) 中调整；画布和 PV 的刷新率在 [首选项 → 性能](/miacode/settings/preferences#性能) 中设置。

## touch 点击输入

在预览设置中开启 `启用touch点击输入`。暂停谱面，保持编辑器中的输入位置，按住 `Ctrl`，点击预览区的 Touch 区域。软件会在编辑位置插入对应的 Touch 编号。

连续点击多个区域可以输入多押 Touch，软件会在物件之间加入 `/`。这项操作适合编写内屏配置。
