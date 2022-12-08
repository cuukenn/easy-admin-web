<template>
  <IFrame :src="src" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { IFrame } from '@/components/IFrame'
const src = ref('/swagger-ui/index.html')
</script>
