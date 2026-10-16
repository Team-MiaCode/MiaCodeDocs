---
layout: home

title: MiaCode
titleTemplate: simai chart creation tool

hero:
  name: MiaCode
  text: A maimai chart editor
  tagline: Text editing, live preview, chart analysis, organization, and export.
  actions:
    - theme: brand
      text: Download MiaCode
      link: /en/download
    - theme: alt
      text: Quick Start
      link: /en/miacode/quick-start
  image:
    src: /images/miacode.png
    alt: MiaCode icon

features:
  - icon:
      src: /icons/editor.svg
    title: Edit and preview
    details: The editor supports completion and selection tools. Preview updates with chart text.
    link: /en/miacode/chart/text-editor
    linkText: Text editor
  - icon:
      src: /icons/check.svg
    title: Timeline and organization
    details: The timeline displays waveforms and notes. Organization formats subdivisions, lines, and spacing.
    link: /en/miacode/chart/timeline
    linkText: Timeline guide
  - icon:
      src: /icons/cloud.svg
    title: Syntax and pattern checks
    details: Lists syntax and pattern results. Selecting an entry navigates to its text location and preview time.
    link: /en/miacode/chart/validation
    linkText: Checks guide
  - icon:
      src: /icons/export.svg
    title: Video and cover export
    details: Export a full song or passage and compose covers with chart frames, images, and text.
    link: /en/miacode/export/video
    linkText: Export guide
---

<section class="home-showcase">
  <a class="showcase-dark doc-figure doc-figure--overview doc-figure--window" :href="$withBase('/images/main_dark.png')" target="_blank"><img src="/images/main_dark.png" alt="MiaCode dark theme" width="2864" height="1864" loading="lazy"></a>
  <a class="showcase-light doc-figure doc-figure--overview doc-figure--window" :href="$withBase('/images/main_light.png')" target="_blank"><img src="/images/main_light.png" alt="MiaCode light theme with detached preview" width="2864" height="1864" loading="lazy"></a>
</section>
