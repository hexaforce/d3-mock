<template>
  <v-toolbar dark color="primary" app>
    <v-toolbar-side-icon/>
    <v-toolbar-title class="white--text">Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
      <v-spacer/>
      <v-btn flat href="https://fintech.dmm.com/" target="_blank" >
        <span class="mr-2">DMM FinTech</span>
      </v-btn>
  </v-toolbar>
<!-- 
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer/>
      <v-btn flat href="https://fintech.dmm.com/" target="_blank" >
        <span class="mr-2">DMM FinTech</span>
      </v-btn>
    </v-toolbar>
-->
</template>