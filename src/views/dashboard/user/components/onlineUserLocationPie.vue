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
        text: '用户登录区域分布',
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
            { value: 422, name: '上海市' },
            { value: 214, name: '北京市' },
            { value: 432, name: '江西省' },
            { value: 421, name: '重庆市' },
            { value: 242, name: '浙江省' },
            { value: 123, name: '四川省' },
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
