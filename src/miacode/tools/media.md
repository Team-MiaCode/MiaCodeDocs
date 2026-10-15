# 音视频处理

`工具` 菜单分别提供音频处理和视频处理。打开一个已保存的谱面后，工具使用该谱面目录中的歌曲与 PV。

## FFmpeg

媒体处理与视频导出使用 FFmpeg。FFmpeg 的查找范围包括 MiaCode 所在目录、随包提供的工具位置与系统 PATH；也可通过环境变量 `MIACODE_FFMPEG_PATH` 指定 FFmpeg 路径。

出现 FFmpeg 路径提示时，按提示配置可执行文件后使用相关工具。


<figure class="doc-figure">
<a :href="$withBase('/images/prepend_audio.png')" target="_blank"><img class="interface-shot" src="/images/prepend_audio.png" alt="音频前置空白" loading="lazy"></a>
</figure>

## 前置空白

`音频处理 track.mp3 → 前置空白` 在音频开头添加静音；`视频处理 pv.mp4 → 添加片头黑幕` 在视频开头添加黑幕。

设置拍数与 BPM，空白时长按 `拍数 × 60 ÷ BPM` 计算。例如 120 BPM 的 4 拍对应 2 秒。对话框提供检测入口和备份还原按钮。

## 采样率转换

`音频处理 track.mp3 → 采样率转换` 将 `track.mp3` 处理为 44100 Hz，并保存原文件为 `track_bak.mp3`。

## 自动对齐曲目音频

`视频处理 pv.mp4 → 自动对齐曲目音频` 对比 PV 音轨与 `track.mp3`，估算时间差并调整视频。

该功能使用 PV 中的音轨进行分析。视频压缩会移除音轨。

## 视频压缩

<figure class="doc-figure">
<img class="interface-shot" src="/images/media_tools.png" alt="批量视频压缩" loading="lazy">
</figure>

`压缩当前视频` 将当前背景视频压缩到 20 MB 以下，并移除音轨。处理时会保存或覆盖同目录的 `_bak` 视频备份。

`批量压缩视频` 扫描所选文件夹及其子一级文件夹中的 `bg.mp4` 或 `pv.mp4`。点击开始压缩，列表会显示各项结果，体积已满足要求的视频会显示对应状态。

## 备份与结果

音频处理使用 `track_bak.mp3`，视频处理使用对应的 `_bak` 文件备份原素材。连续处理同一个文件时，备份可能被覆盖。

结果提示会显示处理状态与生成文件的路径。
