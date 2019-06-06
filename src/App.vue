<template>
  <v-app>
    <!-- <Toolbars/> -->
    <v-content>
      <router-view/>
    </v-content>
    <BottomNvigation/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Toolbars from '@/components/Toolbars.vue'
// import PieChart from '@/components/PieChart.vue'
import BottomNvigation from '@/components/BottomNvigation.vue'

export default {
  name: 'App',
  components: {
    BottomNvigation
  },
  data () {
    return {
      //
    }
  }
}
</script>
