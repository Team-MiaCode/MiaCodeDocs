# 快速开始

从一首歌曲开始，完成新建、校准，就可以开始编写谱面了。

## 下载与启动

各平台安装包见 [下载 MiaCode](/download)，下载后解压即可使用。

- **Windows**：双击解压目录中的 `MiaCode.exe` 启动。
- **macOS**：双击 `MiaCode.app` 启动，也可将其拖入"应用程序"文件夹。若系统提示无法打开，在解压目录打开终端执行以下命令后再启动：

  ```bash
  xattr -dr com.apple.quarantine "MiaCode.app"
  ```

Linux 的源码构建步骤见仓库的 [README](https://github.com/Team-MiaCode/MiaCode/blob/dev/README.md#linux适用于高级用户)。

## 新建谱面

### 从歌曲创建

将歌曲放入用于存放谱面的文件夹。在欢迎页选择新建，或使用 `文件 → 新建`，选择音频文件。支持的音频格式包括 `.mp3`、`.wav`、`.flac` 和 `.ogg`。

MiaCode 在歌曲所在文件夹创建 `maidata.txt`，并准备预览使用的 `track` 音频文件。

<figure class="doc-figure doc-figure--compact">
<img class="interface-shot" src="/images/文件菜单.png" alt="文件菜单">
<figcaption>文件菜单</figcaption>
</figure>

### 拖拽音频文件创建

将音频文件拖入窗口也可以新建谱面。目录中已有谱面或歌曲文件时，MiaCode 会提供打开、覆盖或创建文件夹等选项；按对话框中显示的目标路径选择。

## 打开已有谱面

已有谱面可通过 `文件 → 打开`、最近打开列表，或拖入 `maidata.txt` 打开。

## 填写信息与校准

在 [谱面信息](/miacode/chart/information) 中填写标题、曲师、谱师和素材，选择要编辑的难度并填写等级。

打开 [延迟校准](/miacode/chart/latency-calibration)，设置或检测 BPM 与偏移，通过试听确认节拍与歌曲的对应关系。
