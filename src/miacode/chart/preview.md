# 谱面预览

谱面预览显示当前难度的物件、背景和 PV。

## 编辑时的效果更新

暂停播放后，编辑当前难度的谱面文本，预览画面会随内容更新。

## 播放与定位

预览工具栏提供播放、暂停和停止。拖动进度条，或点击时间轴上方的时间刻度，预览会跳转到对应时间。

<figure class="doc-figure doc-figure--portrait">
<img class="interface-shot" src="/images/preview.png" alt="谱面预览及底部播放工具栏">
<figcaption>谱面预览与播放工具栏</figcaption>
</figure>

## 预览模式

<figure class="doc-figure">
<a :href="$withBase('/images/preview_modes.png')" target="_blank"><img class="interface-shot" src="/images/preview_modes.png" alt="预览渲染模式" loading="lazy"></a>
</figure>

<figure class="doc-figure">
<a :href="$withBase('/images/preview_canvas.png')" target="_blank"><img class="interface-shot" src="/images/preview_canvas.png" alt="画布比例与 PV 菜单" loading="lazy"></a>
</figure>

在预览右上角的渲染模式菜单中选择 `常规渲染` 或 `无理检测`。

画布菜单中的 `自由比例` 控制画布比例，`隐藏PV` 控制背景视频显示。背景亮度、流速与皮肤见[预览设置](/miacode/settings/preview)。

## 分离与停靠

点击预览底部工具栏右侧的 `分离预览窗口` 按钮，预览画面、播放控件与物量统计会移入独立窗口。拖动窗口可放到另一块显示器，调整窗口大小可扩大配置画面。

编辑器中的修改和时间定位会同步到独立预览。点击独立窗口右下角的停靠按钮，或关闭该窗口，预览会回到编辑窗口。

<figure class="doc-figure doc-figure--window">
<a :href="$withBase('/images/main_light.png')" target="_blank"><img class="interface-shot" src="/images/main_light.png" alt="高效侧栏与独立预览窗口" loading="lazy"></a>
</figure>

拖动面板边界调整编辑器、预览和底部面板的占比。左右排列与侧栏模式见[界面模式](/miacode/ui-modes)。

## 播放快捷键

| 操作 | 默认快捷键 | macOS |
| --- | --- | --- |
| 播放或暂停 | `Ctrl+Shift+X` | `⌘⇧X` |
| 停止或播放 | `Ctrl+Shift+C` | `⌘⇧C` |
| 降低播放速度 | `Ctrl+O` | `⌘O` |
| 提高播放速度 | `Ctrl+P` | `⌘P` |

快捷键可在[首选项](/miacode/settings/preferences#快捷键)修改。

<span id="实时更新与预览"></span>
<span id="面板与画面"></span>
<span id="touch-点击输入"></span>

Touch 编写操作见[文字编辑 → Touch 点击输入](/miacode/chart/text-editor#touch-点击输入)。

