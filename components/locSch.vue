<template>
  <div class="container">
    <h3> {{ loc.name }} </h3>
    <p v-for='week in loc.weeks' :key='week.wkID' class='bone'>
      {{ week.team1 + ' vs ' + week.team2 }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'locSch',
  props: {
    loc: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.container {
  border: solid black 1rem;
  display: inline-block;
}

.bone {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
