# 封面导出

使用 `导出 → 封面导出` 制作投稿封面。封面编辑器提供画布、图层与谱面帧选项，可组合歌曲信息、图片、文字和配置画面。

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/cover_editor.png')" target="_blank"><img class="interface-shot" src="/images/cover_editor.png" alt="封面编辑器" width="2784" height="1824" loading="lazy"></a>
</figure>

## 画布与背景

选择输出大小，支持 1:1、4:3 和 16:9 比例的预设。背景可使用曲绘、自定义图片或透明背景，并调整亮度与模糊效果。

在封面编辑窗口中，按 `Ctrl/⌘++` 放大画布显示，按 `Ctrl/⌘+-` 缩小，按 `Ctrl/⌘+0` 恢复 100%。显示缩放范围为 50%–200%，输出图片大小由导出参数决定。

## 图层

通过 `添加图层` 添加谱面帧、图片或文字。图层列表可调整上下顺序、复制、删除、显示和锁定状态。

选择图层后修改位置、大小和透明度。文字图层可填写文字并设置颜色、粗体与字体；图片图层可选择图片文件。

点击图层列表中的条目后，可用以下按键操作当前图层：

| 操作 | 快捷键 |
| --- | --- |
| 选择上一层、下一层 | 上、下方向键 |
| 切换显示 / 锁定状态 | `V` / `L` |
| 删除图层 | `Delete` 或 `Backspace` |

## 谱面帧

添加谱面帧图层后，选择难度。播放或拖动时间控件，设置该图层显示的谱面时间。

选中可显示的谱面帧图层，让时间控件获得焦点后，可用以下按键选择画面：

| 操作 | 快捷键 |
| --- | --- |
| 向前、向后定位，按住可连续移动 | 左、右方向键 |
| 播放或暂停当前图层的谱面帧 | `Space` |
| 定位到谱面开头 / 末尾 | `Home` / `End` |

在图层面板中选择谱面帧背景，并设置亮度或透明度。

<figure class="doc-figure doc-figure--overview">
<a :href="$withBase('/images/cover_frame_settings.png')" target="_blank"><img class="interface-shot" src="/images/cover_frame_settings.png" alt="谱面帧与图层设置" width="2560" height="1520" loading="lazy"></a>
</figure>

## 布局与预设

`保存布局` 将封面布局写入文件，`打开布局` 加载文件中的布局。`保存预设` 将布局存为样式，应用预设会将样式用于当前封面。

## 导出图片

选择输出路径与大小，点击 `导出`。图片格式支持 PNG、JPG、JPEG 和 BMP，PNG 支持透明背景。
