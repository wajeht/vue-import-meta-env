<script setup lang="ts">
const env = import.meta;
</script>

<template>
  <pre>{{ env }}</pre>
</template>

<style>
pre {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
}
</style>
