<template>
  <div>
    <div class='uk-margin-bottom'>
      <vn-stacked-area :model='traffics' :x-format='formatDate' y-format=',f'></vn-stacked-area>
    </div>
  </div>
</template>

<script>
import faker from 'faker'
import _ from 'lodash'
import d3 from 'd3'

export default {
  data () {
    const gen_item =  (month, day) => {
      return {
        date: new Date (`2016-${month}-${day}`).getTime (),
        visits: faker.random.number (10000),
        views: faker.random.number (20000),
        losses: faker.random.number (3000),
        stay: faker.random.number (50)
      }
    }

    const days = _.range (31)
    const month = faker.random.number (12)

    return {
      trafficData: _.map (days, d => gen_item (month, d + 1))
    }
  },
  computed: {
    traffics () {
      return [
        {
          key: 'visits',
          area: true,
          values: _.map (this.trafficData, t => {
            return {
              x: t.date,
              y: t.visits
            }
          })
        },
        {
          key: 'views',
          area: true,
          values: _.map (this.trafficData, t => {
            return {
              x: t.date,
              y: t.views
            }
          })
        },
        {
          key: 'losses',
          area: true,
          values: _.map (this.trafficData, t => {
            return {
              x: t.date,
              y: t.losses
            }
          })
        }
      ]
    }
  },
  methods: {
    formatDate (d) {
      return d3.time.format ('%x') (new Date (d))
    }
  }
}
</script>
