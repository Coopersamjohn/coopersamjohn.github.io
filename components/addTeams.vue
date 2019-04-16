<template>
  <div class="container">
    <label> Enter the names of teams sponsored by {{ loc.name }} 
      <input
        v-model="teamName"
        type="Text"
        class="input"
      >
    </label>
    <button @click="addTeam"> add Team </button>
    <!-- <button @click="delLoc(loc.locID)"> delete Sponsor </button> being able to delete loc causes problems I dont understand -->
    <p v-for="team in loc.teams" :key="team.teamID">
      {{ team.name }}
      <button @click="delTeam(team.teamID)"> 
      X
      </button> 
    </p>
  </div>
</template>

<script>

export default {
  name: 'addTeams',
  data () {
    return {
      teamName: ""
    }
  },
  props: {
    loc: {
      type: Object,
      required: true
    }
  },
  methods: {
    addTeam () {
      this.$store.dispatch('addTeams', [this.teamName, this.loc.locID]);
      this.teamName = "";
    },
    delTeam (teamID) {
      this.$store.dispatch('delTeam', [teamID, this.loc.locID]);
    },
    delLoc (locID) {
      this.$store.dispatch('delLoc', locID);
    },
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
