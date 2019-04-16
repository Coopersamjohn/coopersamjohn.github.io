<template>
  <div class="container">
    <label> Add sponsors to this tournament 
      <input
      v-model="locName"
      type="Text"
      class="input"
    >
    </label>
    <p> {{ locName }} </p>
    <button @click="addLocs"> add Sponsor </button>
  </div>
</template>

<script>
export default {
  name: 'namesIn',
  data () {
    return {
      locName: ""
    }
  },
  props: ["label","value"],
  methods: {
    addLocs () {  
      this.$store.dispatch('addLocs', this.locName);
      this.locName = "";
    }
  }
}
</script>

<style scoped>
.container {
  border: solid black .1rem;
  margin: .5rem;
  padding: 1rem;
}
</style>
