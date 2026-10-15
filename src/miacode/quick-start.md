# 快速开始

本页介绍 2.0.0-alpha 中创建、打开、编辑和保存谱面的操作。

<figure class="doc-figure doc-figure--window">
<a :href="$withBase('/images/main_dark.png')" target="_blank"><img class="interface-shot" src="/images/main_dark.png" alt="MiaCode 工作区" loading="lazy"></a>
</figure>

## 下载与启动

各平台安装包见[下载 MiaCode](/download)，解压后启动。

- **Windows**：打开解压目录中的 `MiaCode.exe`。
- **macOS**：打开 `MiaCode.app`，也可放入“应用程序”文件夹。遇到系统隔离提示时，在解压目录的终端执行以下命令后启动：

  ```bash
  xattr -dr com.apple.quarantine "MiaCode.app"
  ```

Linux 构建步骤见仓库 [README](https://github.com/Team-MiaCode/MiaCode/blob/dev/README.md#linux适用于高级用户)。

## 创建或打开谱面

在欢迎页选择新建，或使用 `文件 → 新建`，选择音频文件。支持 `.mp3`、`.wav`、`.flac` 和 `.ogg`。MiaCode 在歌曲所在目录创建 `maidata.txt`，并准备预览使用的 `track` 音频。

拖入音频可创建谱面。目录已有谱面或歌曲时，对话框会提供打开、覆盖或创建文件夹的选项。

已有谱面通过 `文件 → 打开`、最近打开列表，或拖入 `maidata.txt` 打开。

<span id="新建谱面"></span>
<span id="从歌曲创建"></span>
<span id="拖拽音频文件创建"></span>
<span id="打开已有谱面"></span>

## 选择难度与填写信息

添加或选择要编写的难度，在[谱面信息](/miacode/chart/information)填写等级、标题、曲师、谱师和素材。

## 校准节拍

打开[延迟校准](/miacode/chart/latency-calibration)，填写 BPM 与偏移，或点击对应的 `自动检测`。`开始试听` 会播放歌曲与计拍声音。

<span id="填写信息与校准"></span>

## 编辑与预览

在[文字编辑](/miacode/chart/text-editor)中输入 simai 文本。以下文本表示 120 BPM、四分音的四个 Tap：

```text
(120){4}1,2,3,4,
E
```

`(120)` 设置 BPM，`{4}` 设置分音，逗号推进时间，`E` 标记结束。开启[自动补全](/miacode/chart/text-editor#自动补全)后，输入对应括号会显示 BPM、分音或时值候选。

预览工具栏控制播放、暂停和定位。[时间轴](/miacode/chart/timeline)显示波形与物件，[谱面整理](/miacode/tools/chart-organization)调整文本排版，[语法与无理检测](/miacode/chart/validation)列出当前难度的检测结果。

## 保存

`文件 → 保存` 保存当前编辑部分；`保存整个文档` 保存各难度与文档中的修改。
