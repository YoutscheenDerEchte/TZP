<template>
  <v-app>
    <v-toolbar :elevation="5" color="primary" density="compact" >
      <template v-slot:prepend><v-icon icon="mdi-test-tube"></v-icon></template>
      <v-toolbar-title  class="font-weight-black">TEILZEITPRÜFUNG 2023/2024</v-toolbar-title>
      <v-toolbar-items>

        <v-btn prepend-icon="mdi-view-dashboard" variant="elevated" color="red-darken-3" :to="{name: 'ÜbersichtView'}">
          Schulweie Übersicht
        </v-btn>
        <v-btn prepend-icon="mdi-check-circle" variant="elevated" color="red-darken-3" :to="{name: 'PrüfungView'}">
          Prüfung
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <router-view />
  </v-app>
</template>

<script setup>

//
</script> 



