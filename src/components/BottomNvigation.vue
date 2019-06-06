<template>
  <!-- <v-bottom-nav :active.sync="bottomNav" :color="color" :value="true" absolute dark shift > -->
  <v-bottom-nav :value="true" absolute dark shift >
    <v-btn to="/" dark>
      <span>保有資産１</span>
      <v-icon>attach_money</v-icon>
    </v-btn>
    <v-btn to="/about" dark>
      <span>保有資産２</span>
      <v-icon>monetization_on</v-icon>
    </v-btn>
    <v-btn to="/about2" dark>
      <span>インスタント購入</span>
      <v-icon>payment</v-icon>
    </v-btn>
    <v-btn to="/about3" dark>
      <span>設定</span>
      <v-icon>build</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>
