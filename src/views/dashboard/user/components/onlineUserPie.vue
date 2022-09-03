<template>
  <div ref="chartRef" :style="{ width: '100%', height: '300px' }"></div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
const chartRef = ref<HTMLElement>()
const chart = ref<any>()
onMounted(() => {
  let cValue
  if ((cValue = chartRef.value) != null) {
    chart.value = echarts.init(cValue)
    chart.value.setOption({
      title: {
        text: '用户在线数',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'user',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '在线' },
            { value: 735, name: '离线' },
          ],
          label: {
            show: true,
            formatter: function (params: any) {
              return `${params.name}：${params.value}\n占比：${params.percent}%`
            },
          },
        },
      ],
    })
  }
})
</script>
<style scoped></style>
