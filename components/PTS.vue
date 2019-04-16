<template>
  <div id="pts">  
    <div>

      <addLocs />

      <addTeams v-for='loc in locations' :key='loc.locID' :loc='loc' />

      <button v-on:click="generateSchedule" class="btn"> Generate Schedule </button>

      <h1> {{ locations }} </h1>

      <locSch v-for='(loc, a) in locations' :key='`${a}-${loc.locid}`' :loc='loc' />

    </div>
    <date v-for="date in dates" :key="date.id" :date="date" class="date" />
  </div>
</template>

<script>
import startDate from './startDate.vue';
import date from './date.vue';
import locSch from './locSch.vue';
import addLocs from './addLocs.vue';
import addTeams from './addTeams.vue';

import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'PTS',
  data: function () {
    return {
      show0: true
    };
  },
  components: {
    startDate,
    date,
    locSch,
    addLocs,
    addTeams
  },
  computed: {
    ...mapState([
      'locations',
      'dates'
    ]),
    ...mapGetters ([
      'numLocs'
    ])
  },
  methods: {
    generateSchedule() {
      return this.$store.dispatch('generateSchedule');
    }
  }
};
</script>

<style>
#pts {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
  width: auto;  
  display: block;
}

.date {
  display: inline-flex;
  margin: 5px;
}

.btn {
  margin: 1em;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
