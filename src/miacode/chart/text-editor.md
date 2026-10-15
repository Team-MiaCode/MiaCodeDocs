# 文字编辑

选择或添加难度后，在编辑器中编写 simai 文本。预览与检测结果随内容更新。

<figure class="doc-figure">
<a :href="$withBase('/images/text_editor.png')" target="_blank"><img class="interface-shot" src="/images/text_editor.png" alt="文字编辑器" loading="lazy"></a>
</figure>

## 自动补全

<figure class="doc-figure">
<img class="interface-shot" src="/images/completion.png" alt="自动补全候选" loading="lazy">
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


<figure class="doc-figure">
<a :href="$withBase('/images/context_menu.png')" target="_blank"><img class="interface-shot" src="/images/context_menu.png" alt="选区调整菜单" loading="lazy"></a>
</figure>

## 选区调整

选中谱面文本，从 `调整` 菜单或右键菜单选择操作。物件变换作用于选区中的完整物件，包含编号、路径和时值。文本排版见[谱面整理](/miacode/tools/chart-organization)。

### 镜像与旋转

选择左右镜像、上下镜像、旋转 180°，或顺时针、逆时针旋转 45°，会改变选区内 Tap、Touch 的位置和 Slide 的路径。

### 分音调整

分音提升一档将分音乘以 2，逗号间隔随之增加，物件的节拍位置保留：

| 操作前 | 提升一档后 |
| --- | --- |
| `{16}1,2,` | `{32}1,,2,,` |

提升半档将分音乘以 1.5；降低操作用于反向调整。

### 物件变换

| 操作 | 结果 |
| --- | --- |
| 一键清空 | 清除选区中的完整物件，保留逗号等时间结构 |
| 重置摆件 | 将选区中的完整物件改为 1 号 Tap，保留时间结构 |
| `调整 → 更多` | 提供 Break、Ex、Firework 属性变换和一键全随机 |

## Touch 点击输入 {#touch-点击输入}

在[预览设置](/miacode/settings/preview#视频)开启 `启用touch点击输入`。暂停播放，将编辑器光标放到插入位置，按住 `Ctrl`，点击预览中的 Touch 区域。

点击 A1 会插入 `A1`，连续点击 A2 会得到 `A1/A2`。多押 Touch 之间由 `/` 分隔。

## 书签

在行内输入 `|| [副歌] 调整此处的节奏`，会生成标题为“副歌”的书签，其余内容作为备注。

点击书签列表中的条目跳转到对应行。行号区域的书签菜单提供添加、重命名与删除，操作会修改该行注释。

## 查找与替换

<figure class="doc-figure">
<img class="interface-shot" src="/images/find_replace.png" alt="查找与替换" loading="lazy">
</figure>

使用 `编辑 → 查找` 或 `Ctrl+F`（macOS 为 `⌘F`）打开面板，查找或替换当前匹配项、全部匹配项。可按需选择区分大小写和全词匹配；`Enter` 查找下一项，`Shift+Enter` 查找上一项，`Esc` 关闭面板。


## 调整快捷键

| 操作 | 默认快捷键 | macOS |
| --- | --- | --- |
| 左右镜像 | `Ctrl+J` | `⌘J` |
| 上下镜像 | `Ctrl+K` | `⌘K` |
| 旋转 180° | `Ctrl+L` | `⌘L` |
| 逆时针旋转 45° | `Ctrl+;` | `⌘;` |
| 顺时针旋转 45° | `Ctrl+'` | `⌘'` |
| 分音提升一档 | `Ctrl+=` | `⌘=` |
| 分音降低一档 | `Ctrl+-` | `⌘-` |
