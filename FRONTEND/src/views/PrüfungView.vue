<template>
    <div class="containerH">
        <v-sheet :style="{ height: `calc(100vh - ${toolbarHeight}px)` }" :width="300" color="grey-darken-3">
            <v-combobox autofocus="true" label="Schulauswahl" :items="schulen" v-model="gewählteSchule"></v-combobox>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Suche" single-line hide-details></v-text-field>
        </v-sheet>
            <v-data-table density="compact" v-model:items-per-page="itemsPerPage" :headers="headers" :items="desserts"
                item-value="name" class="elevation-1" :search="search">
                <template v-slot:item.prüfstatus></template>
                <template v-slot:item.action>
                    <v-btn outline color="primary" dark>OK</v-btn>
                    <v-btn outline color="primary" dark>LAS</v-btn>
                    <v-btn outline color="primary" dark>Bemerkung</v-btn>
                </template>
            </v-data-table>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const toolbarHeight = 48
const schulen = ref(['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'])
const search = ref('')
const gewählteSchule = ref('')
const itemsPerPage = ref(20)
const headers = ref([
    {
        title: 'Schule',
        align: 'start',
        sortable: true,
        key: 'name',
    },
    { title: 'Calories', align: 'end', key: 'calories' },
    { title: 'Fat (g)', align: 'end', key: 'fat' },
    { title: 'Carbs (g)', align: 'end', key: 'carbs' },
    { title: 'Protein (g)', align: 'end', key: 'protein' },
    { title: 'Iron (%)', align: 'end', key: 'iron' },
    { title: 'Prüfstatus', align: 'end', key: 'prüfstatus' },
    { title: 'Aktion', align: 'center', key: 'action' },
])
const desserts = ref([
    {
        name: 'California',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1',
        prüfstatus: ''
    },
    {
        name: 'California',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0',
        prüfstatus: ''
    },
    {
        name: 'California',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6',
        prüfstatus: ''
    },
    {
        name: 'California',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7',
        prüfstatus: ''
    },
    {
        name: 'California',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16',
        prüfstatus: ''
    },
    {
        name: 'Colorado',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1',
        prüfstatus: ''
    },
    {
        name: 'Colorado',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2',
        prüfstatus: ''
    },
    {
        name: 'Colorado',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8',
        prüfstatus: ''
    },
    {
        name: 'Georgia',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45',
        prüfstatus: ''
    },
    {
        name: 'Georgia',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22',
        prüfstatus: ''
    }])

</script>

<style  scoped>
.containerH {
    display: inline-flex;
}


</style>