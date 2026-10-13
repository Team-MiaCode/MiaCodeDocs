<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'

const { lang } = useData()
const route = useRoute()
const isHome = computed(() => route.path === '/' || route.path === '/en/' || route.path === '/en/index.html')
const isEn = computed(() => lang.value === 'en-US')
</script>

<template>
<footer v-if="isHome" class="mia-footer">
  <div class="mia-footer-inner">
    <div class="mia-footer-group">
      <h2>{{ isEn ? 'Community' : '社区' }}</h2>
      <ul>
        <li>
          <a href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=q6RJClO8ug9Y_Rtak5rxV_ITvV-qcKKx&authKey=TCBX53Kwrz%2BPrbBOidO%2Fb8moMBTeXyFMIpHog%2F0CqB%2FptUG4Bce%2BzN7RGBTyZ6qe&noverify=0&group_code=1095435375">
            {{ isEn ? 'QQ Group: MiaCode User Group' : 'QQ群 MiaCode 用户交流群' }}
            <span aria-hidden="true">↗</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Team-MiaCode/MiaCode/issues">
            {{ isEn ? 'Feedback & issues' : '问题反馈' }}
            <span aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="mia-footer-group">
      <h2>MiaCode</h2>
      <ul>
        <li>
          <a href="https://github.com/Team-MiaCode/MiaCode">
            {{ isEn ? 'MiaCode on GitHub' : 'MiaCode 源码' }}
            <span aria-hidden="true">↗</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Team-MiaCode/MiaCodeDocs">
            {{ isEn ? 'Documentation repository' : '文档仓库' }}
            <span aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
</template>
