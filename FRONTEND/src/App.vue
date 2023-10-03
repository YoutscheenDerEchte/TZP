<template>
  <v-app>
    <v-toolbar color="primary" density="compact" class="d-flex justify-start">
      <v-app-bar-title>TEILZEITPRÜFUNG</v-app-bar-title>
      <v-toolbar-items>
        <router-link :to={ name: ÜbersichtView }><v-btn> Schulweise Übersicht</v-btn></router-link>
        <router-link :to="{ name: PrüfungView}"><v-btn> Prüfung</v-btn></router-link>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      
    </v-toolbar>
    <router-view />
  </v-app>
</template>

<script setup>
import PrüfungView from './views/PrüfungView.vue';

//
</script>
