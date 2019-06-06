<template>
  <v-card-title primary-title>
    <div>
      <h3 class="headline mb-0">円換算保有資産総量</h3>
      <pie-chart :data='chartData'/>
    </div>
  </v-card-title>
</template>

<script>
import PieChart from './PieChart.js'
export default {
  name: 'App',
  components: {
    PieChart
  },
  data () {
    return {
      chartData: {
        labels: ['JPY', 'BTC', 'トークンA'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: [1, 10, 5]
          }
        ]
      }
    }
  }
}
</script>
