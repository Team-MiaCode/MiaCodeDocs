<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import taglineData from '../taglines.json'
import englishTaglines from '../taglines.en.json'

const taglines = (Array.isArray(taglineData) ? taglineData : [])
  .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
  .map(item => item.trim())

const { lang } = useData()
const selectedTagline = ref('')
const translations: Record<string, unknown> = englishTaglines
const text = computed(() => {
  const original = selectedTagline.value
  if (!lang.value.startsWith('en')) return original
  const translation = translations[original]
  return typeof translation === 'string' && translation.trim() ? translation.trim() : original
})

onMounted(() => {
  if (taglines.length > 0) {
    selectedTagline.value = taglines[Math.floor(Math.random() * taglines.length)]
  }
})
</script>

<template>
  <p class="random-tagline">{{ text ? `“${text}”` : '\u00a0' }}</p>
</template>

<style scoped>
.random-tagline {
  margin: 0 auto;
  padding-top: 8px;
  max-width: 392px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
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

</style>
