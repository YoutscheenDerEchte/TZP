<template>
    <v-sheet :style="{ height: `calc(100vh - ${toolbarHeight}px)` }" :width="300" color="grey-darken-3">
        <v-combobox autofocus="true" label="Schulauswahl"
            :items="schulen"></v-combobox>
    </v-sheet>
</template>

<script setup>
import { ref } from 'vue';

const toolbarHeight = 48
const schulen = ref(['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'])
</script>

<style lang="scss" scoped></style>