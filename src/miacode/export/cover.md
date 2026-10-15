# 封面导出

使用 `导出 → 封面导出` 制作投稿封面。封面编辑器提供画布、图层与谱面帧选项，可组合歌曲信息、图片、文字和配置画面。

<figure class="doc-figure doc-figure--window">
<a :href="$withBase('/images/cover_editor.png')" target="_blank"><img class="interface-shot" src="/images/cover_editor.png" alt="封面编辑器" loading="lazy"></a>
</figure>

## 画布与背景

选择输出大小，支持 1:1、4:3 和 16:9 比例的预设。背景可使用曲绘、自定义图片或透明背景，并调整亮度与模糊效果。

## 图层

<figure class="doc-figure">
<a :href="$withBase('/images/cover_add_layer.png')" target="_blank"><img class="interface-shot" src="/images/cover_add_layer.png" alt="添加图层菜单" loading="lazy"></a>
</figure>

通过 `添加图层` 添加谱面帧、图片或文字。图层列表可调整上下顺序、复制、删除、显示和锁定状态。

选择图层后修改位置、大小和透明度。文字图层可填写文字并设置颜色、粗体与字体；图片图层可选择图片文件。

## 谱面帧

<figure class="doc-figure">
<a :href="$withBase('/images/cover_frame_settings.png')" target="_blank"><img class="interface-shot" src="/images/cover_frame_settings.png" alt="谱面帧与图层设置" loading="lazy"></a>
</figure>

添加谱面帧图层后，选择难度。播放或拖动时间控件，设置该图层显示的谱面时间。

在图层面板中选择谱面帧背景，并设置亮度或透明度。

## 布局与预设

<figure class="doc-figure">
<a :href="$withBase('/images/cover_layout.png')" target="_blank"><img class="interface-shot" src="/images/cover_layout.png" alt="布局菜单" loading="lazy"></a>
</figure>

`保存布局` 将封面布局写入文件，`打开布局` 加载文件中的布局。`保存预设` 将布局存为样式，应用预设会将样式用于当前封面。

## 导出图片

<figure class="doc-figure doc-figure--window">
<a :href="$withBase('/images/cover_output.png')" target="_blank"><img class="interface-shot" src="/images/cover_output.png" alt="封面输出文件" loading="lazy"></a>
</figure>

选择输出路径与大小，点击 `导出`。图片格式支持 PNG、JPG、JPEG 和 BMP，PNG 支持透明背景。
