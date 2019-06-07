<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 lg5 mb-3>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="(item,i) in 5" :key="i" >
            <template v-slot:header>
              <div>Item</div>
            </template>
            <v-card>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg5 offset-lg2>
        <v-expansion-panel inset>
          <draggable v-model='cards'>
          <v-expansion-panel-content v-for='card in cards' :key='card.id' ripple>
            <template v-slot:header>
              <div>{{card.Title}}</div>
            </template>
            <v-card>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          </draggable>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'v-tabs',
  components: {
    draggable
  },
  methods: {
  },
  data () {
    return {
      active: 0,
      cards: [
        {
          id: 1,
          Title: '1st Card',
          text: 'This is a 1st card'
        },
        {
          id: 2,
          Title: '2nd Card',
          text: 'This is a 2nd card'
        },
        {
          id: 3,
          Title: '3rd Card',
          text: 'This is a 3rd card'
        }
      ]
    }
  }
}
</script>
