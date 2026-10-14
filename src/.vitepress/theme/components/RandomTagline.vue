<script setup lang="ts">
import { onMounted, ref } from 'vue'
import taglineData from '../taglines.json'

const taglines = (Array.isArray(taglineData) ? taglineData : [])
  .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
  .map(item => item.trim())

const text = ref('')

onMounted(() => {
  if (taglines.length > 0) {
    text.value = taglines[Math.floor(Math.random() * taglines.length)]
  }
})
</script>

<template>
  <p class="random-tagline">{{ text || '\u00a0' }}</p>
</template>

<style scoped>
.random-tagline {
  margin: 0 auto;
  padding-top: 8px;
  max-width: 392px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  overflow-wrap: anywhere;
  text-wrap: balance;
}

@media (min-width: 640px) {
  .random-tagline {
    padding-top: 12px;
    max-width: 576px;
    line-height: 32px;
    font-size: 20px;
  }
}

@media (min-width: 960px) {
  .random-tagline {
    margin: 0;
    line-height: 36px;
    font-size: 24px;
  }
}
</style>
