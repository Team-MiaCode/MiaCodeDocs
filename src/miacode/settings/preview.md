# 预览设置

使用 `预览 → 预览设置` 打开窗口，调整游戏、视频与皮肤选项。视频导出页提供对应的输出选项。

## 游戏

Tap 与 Touch 流速分别设置，控制物件接近判定位置的速度。

| 选项 | 效果 |
| --- | --- |
| Slide 层叠顺序：DX 风格 | 时间靠前的 Slide 显示在上层 |
| Slide 层叠顺序：FiNALE 风格 | 时间靠后的 Slide 显示在上层 |
| 中心显示 | 选择连击、达成率、DX 分数等信息 |
| 判定效果、判定文字距离 | 调整判定反馈的表现与位置 |

<figure class="doc-figure">
<img class="interface-shot" src="/images/预览设置-游戏.png" alt="Tap、Touch 流速与游戏显示设置">
<figcaption>游戏设置</figcaption>
</figure>

## 视频

内侧亮度控制判定圈内的背景或 PV，外侧亮度控制圈外区域。谱面显示范围控制舞台占画面的比例。

### 背景与 PV 缩放

下图用同一张 16:9 素材示意四种模式在 4:3 画布中的布局，灰色区域表示留边。编号与表格对应，圈线表示内圈区域。

<figure class="doc-figure">
<img src="/images/background-scale-modes.svg" alt="同一素材在填充、完整显示、居中方框与内圈适应外圈填充四种模式下的布局示意">
<figcaption>背景与 PV 缩放模式</figcaption>
</figure>

| 编号与模式 | 效果 |
| --- | --- |
| 1 · 填充（必要时裁切） | 铺满画布，超出的部分被裁切 |
| 2 · 完整显示 | 保留整个素材，比例差异会产生留边 |
| 3 · 居中方框 | 将整个素材放入画布中央的正方形区域 |
| 4 · 内圈适应配合外圈填充 | 内圈按适应方式显示素材，外圈使用填充布局 |

平滑亮度、时间戳与暂停时显示判定范围提供对应的开关。`启用touch点击输入` 用于在预览中输入 Touch，操作见[文字编辑](/miacode/chart/text-editor#touch-点击输入)。

## 皮肤

选择物件皮肤、谱面效果和判定线样式，通过 `打开目录` 管理素材。HUD 字体按中心显示、时间戳和物量统计等区域设置，可选用已有字体、导入文件或恢复设置。

<figure class="doc-figure">
<img class="interface-shot" src="/images/预览设置-皮肤.png" alt="物件皮肤、判定线样式与分区域 HUD 字体设置">
<figcaption>皮肤与 HUD 字体设置</figcaption>
</figure>

刷新率与视频解码方式见[首选项 → 性能](/miacode/settings/preferences#性能)，音量见[音频设置](/miacode/settings/audio)。
