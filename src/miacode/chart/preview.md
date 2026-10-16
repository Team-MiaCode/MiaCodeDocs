# 谱面预览

谱面预览显示当前难度的谱面、背景和 PV。

## 编辑时的效果更新

暂停播放后，编辑当前难度的谱面文本，预览画面会随内容更新。

## 播放与定位

预览工具栏提供播放、暂停和停止。拖动进度条，或点击时间轴上方的时间刻度，预览会跳转到对应时间。

预览或时间轴获得焦点后，按 `Space` 播放或暂停，也可使用以下快捷键：

| 操作 | 快捷键 |
| --- | --- |
| 播放 / 暂停 | `Ctrl/⌘+Shift+X` |
| 停止 / 播放 | `Ctrl/⌘+Shift+C` |
| 减速 / 加速 | `Ctrl/⌘+O` / `Ctrl/⌘+P` |

停止后返回本次播放的起点；减速或加速会切换到相邻档位。快捷键可在[首选项 → 快捷键](/miacode/settings/preferences#快捷键)调整。

暂停时按住 `Alt/⌥`，临时切换判定区与背景 / PV 显示，松开后恢复。该按住操作可在首选项中调整。

<figure class="doc-figure doc-figure--panel">
<a :href="$withBase('/images/preview.png')" target="_blank"><img class="interface-shot" src="/images/preview.png" alt="谱面预览及底部播放工具栏" width="1040" height="1474" loading="lazy"></a>
<figcaption>谱面预览与播放工具栏</figcaption>
</figure>

## 预览模式

在预览右上角的渲染模式菜单中选择 `常规渲染` 或 `无理检测`。无理检测模式会使得预览中的物件获得和其他物件的交互与被判定效果。

画布菜单中的 `自由比例` 控制画布比例，`隐藏PV` 控制背景视频显示。背景亮度、流速与皮肤见[预览设置](/miacode/settings/preview)。

下图使用同一帧谱面展示常规渲染和无理检测两种渲染模式的区别。

## 分离与停靠

点击预览底部工具栏右侧的 `分离预览窗口` 按钮，预览画面、播放控件与物量统计会移入独立窗口。拖动窗口可放到另一块显示器，调整窗口大小可扩大配置画面。

编辑器中的修改和时间定位会同步到独立预览。点击独立窗口右下角的停靠按钮，或关闭该窗口，预览会回到编辑窗口。

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/main_light.png')" target="_blank"><img class="interface-shot" src="/images/main_light.png" alt="高效侧栏与独立预览窗口" width="2864" height="1864" loading="lazy"></a>
</figure>

拖动面板边界调整编辑器、预览和底部面板的占比。左右排列与侧栏模式见[界面模式](/miacode/ui-modes)。

分离后的预览窗口进入全屏时，按 `Esc` 返回窗口显示；按 `Ctrl/⌘+W` 关闭分离窗口。

<span id="实时更新与预览"></span>
<span id="面板与画面"></span>
<span id="touch-点击输入"></span>
