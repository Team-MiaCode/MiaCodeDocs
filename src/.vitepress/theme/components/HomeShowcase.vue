<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'

const { lang } = useData()
const isEn = computed(() => lang.value.startsWith('en'))
</script>

<template>
  <section class="home-showcase">
    <a
      class="doc-figure doc-figure--overview doc-figure--window"
      :href="withBase('/images/main_dark.png')"
      target="_blank"
      rel="noopener"
    >
      <img
        :src="withBase('/images/main_dark.png')"
        :alt="isEn ? 'MiaCode dark theme' : 'MiaCode 深色主题'"
        width="2864"
        height="1864"
        loading="lazy"
      >
    </a>
    <a
      class="doc-figure doc-figure--overview doc-figure--window"
      :href="withBase('/images/main_light.png')"
      target="_blank"
      rel="noopener"
    >
      <img
        :src="withBase('/images/main_light.png')"
        :alt="isEn ? 'MiaCode light theme with detached preview' : 'MiaCode 浅色主题与分离预览'"
        width="2864"
        height="1864"
        loading="lazy"
      >
    </a>
  </section>
</template>
