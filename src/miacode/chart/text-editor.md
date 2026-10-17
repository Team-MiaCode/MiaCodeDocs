# 文字编辑

## 自动补全

<figure class="doc-figure doc-figure--compact">
<a :href="$withBase('/images/completion.png')" target="_blank"><img class="interface-shot" src="/images/completion.png" alt="自动补全候选" width="420" height="420" loading="lazy"></a>
</figure>

在[首选项 → 编辑器](/miacode/settings/preferences#自动补全)开启 `自动补全`。输入 `[`、`{` 或 `(` 时，编辑器会显示对应候选，输入内容可筛选候选。

| 输入 | 候选内容 |
| --- | --- |
| `[` | Hold、Slide 等物件的时值 |
| `{` | 节拍分音 |
| `(` | 整曲 BPM 与当前难度文本中出现的 BPM，重复数值会合并 |

用上下方向键选择，按 `Enter` 或 `Tab` 接受，按 `Esc` 关闭候选。输入 `{` 后选择 `16`，会得到 `{16}`。

时值与分音候选可在[自定义候选](/miacode/settings/preferences#自动补全)中添加、排序和恢复。BPM 候选由谱面信息与当前文本生成，自定义候选设置适用于时值和分音。

## 选区拍数

在首选项中开启 `显示选区拍数`，编辑器会显示选中文本对应的拍数。选区截断物件或语法要素时，数值会带有近似提示。

## 选区调整

选中谱面文本，从 `调整` 菜单或右键菜单选择操作。物件变换作用于选区中的完整物件，包含编号、路径和时值。文本排版见[谱面整理](/miacode/tools/chart-organization)。

### 镜像与旋转

选择左右镜像、上下镜像、旋转 180°，或顺时针、逆时针旋转 45°，会改变选区内 Tap、Touch 的位置和 Slide 的路径。

选中文本后，可按对应快捷键执行变换：

| 操作 | 快捷键 |
| --- | --- |
| 左右 / 上下镜像 | `Ctrl/⌘+J` / `Ctrl/⌘+K` |
| 旋转 180° | `Ctrl/⌘+L` |
| 逆时针 / 顺时针旋转 45° | `Ctrl/⌘+;` / `Ctrl/⌘+'` |

### 分音调整

分音提升一档将分音乘以 2，逗号间隔随之增加，物件的节拍位置保留。

例如，`{16}1,2,` 提升一档后变为 `{32}1,,2,,`。

提升半档将分音乘以 1.5；降低操作用于反向调整。选中要调整的片段后，按对应组合键：

| 操作 | 快捷键 |
| --- | --- |
| 分音提升一 / 半档 | `Ctrl/⌘+=` / `Ctrl/⌘++` |
| 分音降低一 / 半档 | `Ctrl/⌘+-` / `Ctrl/⌘+Shift+-` |

### 物件变换

| 操作 | 结果 |
| --- | --- |
| 一键清空 | 清除选区中的完整物件，保留逗号等时间结构 |
| 重置摆件 | 将选区中的完整物件改为 1 号 Tap，保留时间结构 |
| `调整 → 更多` | 提供 Break、Ex、Firework 属性变换和一键全随机 |

## Touch 点击输入 {#touch-点击输入}

在[预览设置](/miacode/settings/preview#视频)开启 `启用touch点击输入`。暂停播放，将编辑器光标放到插入位置，按住 `Ctrl/⌘`：左键点击预览中的 Touch 区域可在当前拍输入，右键点击可添加逗号并在下一拍输入。左键点击当前拍已有的普通 Touch 区域可删除该 Touch。

例如，左键点击 A1 会插入 `A1`，连续点击 A2 会得到 `A1/A2`。

<figure class="doc-figure doc-figure--overview doc-figure--window">
<a :href="$withBase('/images/touch_input.png')" target="_blank"><img class="interface-shot" src="/images/touch_input.png" alt="Touch 点击输入区域" width="2784" height="1824" loading="lazy"></a>
</figure>

## 书签

在行内输入 `|| [副歌] 调整此处的节奏`，会生成标题为“副歌”的书签，其余内容作为备注。

点击书签列表中的条目跳转到对应行。行号区域的书签菜单提供添加、重命名与删除，操作会修改该行注释。

书签条目获得焦点后，按 `F2` 重命名，按 `Delete` 删除。

<figure class="doc-figure doc-figure--compact">
<a :href="$withBase('/images/bookmarks.png')" target="_blank"><img class="interface-shot" src="/images/bookmarks.png" alt="段落注释与书签列表" width="620" height="420" loading="lazy"></a>
</figure>

## 查找与替换

使用 `编辑 → 查找` 或 `Ctrl/⌘+F` 打开面板，查找或替换当前匹配项、全部匹配项。可按需选择区分大小写和全词匹配。在查找输入框中，`Enter` 查找下一项，`Shift+Enter` 查找上一项；在替换输入框中，`Enter` 替换当前匹配项。`Esc` 关闭面板。
