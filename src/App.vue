<template>
  <div id="app">
    <AttendanceTable />
  </div>
</template>

<script setup>
import AttendanceTable from './components/AttendanceTable.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>