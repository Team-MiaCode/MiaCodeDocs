# Quick Start

从一首歌曲开始，完成新建、校准和保存，就可以编写谱面了。

## 下载与启动

发行包见 [GitHub Releases](https://github.com/Team-MiaCode/MiaCode/releases)。开发版构建见 [GitHub Actions](https://github.com/Team-MiaCode/MiaCode/actions/workflows/package.yml)，选择 `dev` 分支的构建记录。

Windows 用户下载对应架构的压缩包，解压后启动 `MiaCode.exe`。Apple 芯片的 macOS 用户解压后启动 `MiaCode.app`。Linux 的源码构建步骤见仓库的 [README](https://github.com/Team-MiaCode/MiaCode#构建)。

## 新建谱面

### 从歌曲创建

将歌曲放入用于存放谱面的文件夹。在欢迎页选择新建，或使用 `文件 → 新建`，选择音频文件。支持的音频格式包括 `.mp3`、`.wav`、`.flac` 和 `.ogg`。

MiaCode 在歌曲所在文件夹创建 `maidata.txt`，并准备预览使用的 `track` 音频文件。

<figure class="doc-figure doc-figure--compact">
<img class="interface-shot" src="/images/文件菜单.png" alt="文件菜单">
<figcaption>文件菜单</figcaption>
</figure>

### 拖拽音频文件创建

将音频文件拖入窗口也可以新建谱面。目录中已有谱面或歌曲文件时，软件会提供打开、覆盖或创建文件夹等选项；按对话框中显示的目标路径选择。

已有谱面可通过 `文件 → 打开`、最近打开列表，或拖入 `maidata.txt` 打开。

## 填写信息与校准

在 [谱面信息](/miacode/chart/information) 中填写标题、曲师、谱师和素材，选择要编辑的难度并填写等级。

打开 [延迟校准](/miacode/chart/latency-calibration)，设置或检测 BPM 与偏移，通过试听确认节拍与歌曲的对应关系。
