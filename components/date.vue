<template>
  <div class="container">
    <h1> {{ date.date }} </h1>
  </div>
</template>

<script>
export default {
  name: 'date',
  props: {
    date: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
