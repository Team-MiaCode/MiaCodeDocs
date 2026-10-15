# 首选项

点击主工具栏的设置入口打开 `首选项`，选项修改后生效并保存。

## 编辑器

<figure class="doc-figure">
<a :href="$withBase('/images/preferences_editor.png')" target="_blank"><img class="interface-shot" src="/images/preferences_editor.png" alt="编辑器" loading="lazy"></a>
</figure>

| 选项 | 用途 |
| --- | --- |
| 自动补全 | 开启 BPM、时值与节拍分音候选；操作见[文字编辑](/miacode/chart/text-editor#自动补全) |
| 显示选区拍数 | 显示选中文本对应的拍数，操作见[选区拍数](/miacode/chart/text-editor#选区拍数) |
| 输入法与字符处理 | 选择全角字符更正、关闭输入法并更正字符，或保留原始输入 |
| 字号、行距、自动换行 | 调整文本密度与长行显示 |
| 允许滚动到末行顶部 | 为末尾段落提供编辑空间 |

### 自动补全

开启 `自动补全` 后展开 `自定义候选`，分别管理时值和节拍分音。填写时值 `4:1`、分音 `16` 等候选内容，括号由补全操作添加。BPM 候选由整曲 BPM 与当前难度文本生成。

在列表末尾输入候选，按 `Enter` 或离开输入框保存；拖动候选调整顺序，也可删除候选。`恢复默认` 会恢复该组的默认候选，按确认窗口选择。

时值使用合法时值格式，支持变 BPM 符号 `#`；节拍细分填写正整数。全角符号会转换为半角符号，格式校验通过后保存。

### 概览标尺

概览标尺位于编辑器右侧滚动条旁：黄色标记警告，蓝色标记书签，红色标记错误或无理检测结果，横向标记表示光标或跟随位置。通过 `概览标尺` 开关控制显示。

## 快捷键

<figure class="doc-figure">
<a :href="$withBase('/images/preferences_shortcuts.png')" target="_blank"><img class="interface-shot" src="/images/preferences_shortcuts.png" alt="快捷键" loading="lazy"></a>
</figure>

选择命令所在行，输入组合键；`Esc` 取消录入。行内重置恢复该命令的默认值，`恢复全部默认` 恢复整组快捷键。播放速度与时间轴缩放也可在这里调整，菜单中的快捷键随设置变化。

## 界面与布局

<figure class="doc-figure">
<a :href="$withBase('/images/preferences_interface.png')" target="_blank"><img class="interface-shot" src="/images/preferences_interface.png" alt="界面" loading="lazy"></a>
</figure>

选择语言、浅色或深色主题及配色。侧栏支持标准与高效模式；布局选择 `编辑器｜预览` 或 `预览｜编辑器`，控制两个面板的左右位置。模糊材质控制界面材质效果。

## 性能

<figure class="doc-figure">
<a :href="$withBase('/images/preferences_performance.png')" target="_blank"><img class="interface-shot" src="/images/preferences_performance.png" alt="性能" loading="lazy"></a>
</figure>

视频解码可选择硬件或软件方式，画布、PV 与时间轴分别设置刷新率。视频输出帧率见[视频导出](/miacode/export/video#输出参数)。

## 背景

<figure class="doc-figure">
<a :href="$withBase('/images/preferences_background.png')" target="_blank"><img class="interface-shot" src="/images/preferences_background.png" alt="背景" loading="lazy"></a>
</figure>

开启 MiaCode 背景后选择图片，调整图片透明度、遮罩与模糊。覆盖、完整显示、拉伸、居中和平铺控制图片布局，位置选项控制对齐。

应用背景用于软件界面；谱面背景与 PV 的画面效果见[预览设置](/miacode/settings/preview#视频)。

## 更新

选择正式版或预发布版通道，设置启动时检查更新，或使用 `立即检查` 查看所选通道的结果。

<span id="界面"></span>

[界面模式与面板布局](/miacode/ui-modes)
