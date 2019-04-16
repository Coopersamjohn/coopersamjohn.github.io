import Vue from 'vue';
import Vuex from 'vuex';
import Combi from 'js-combinatorics';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        // function counters
        wkID: 1,
        locID: 1,
        teamID: 1,
        matchID: 1,
        // core data
        startDate: null, // entered but not even really needed in laying out the schedule, only in displaying the actual date game is taking place
        gamesPerWeekPerLoc: 1, // could also be called matchesPerMeet or matchesPerEvent        
        numTeams: null, // calculated from adding the teams each location is sponsoring, for loc in locations, numTeams += numTeamsLoc
        numMatches: null, // calculated based upon numTeams
        numWeeks: null, // calculated ( numGames / gamesPerWeekPerLoc=1 ) / numLocs
        
        pat1: ['away','home'],
        pat2: ['away','home','away'],
        pat3: ['home','away'],
        pat4: ['home','away','home'],
        dates: [
        ],
        locations: [
        ],
        teams: [
        ],
        matches: [
        ],
    },
    // SYNC!! mutate or change the values in the state
    mutations: {
        addLoc(state, locName) {
            state.locations.push(
                {
                    locID: state.locID++,
                    name: locName,
                    numTeamsLoc: null,
                    teams: [],
                    home: null,
                    away: null,
                    totGames: null,
                    weeks: []
                }
            );
        },
        addTeam(state, teamName) {
            console.log(teamName[0]);
            var loc = state.locations[teamName[1]-1];
            loc.teams.push(
                {
                    teamID: state.teamID++,
                    name: teamName[0],
                    affinity: loc.name
                }
            );
        },
        delTeam(state, teamID) {
            var loc = state.locations[teamID[1]-1];
            loc.teams = loc.teams.filter(team => {
                // I don't understand why singular "team" works in the callback for arrow function
                return team.teamID !== teamID[0];
            });
        },
        delLoc(state, locID) {
            state.locations = state.locations.filter(loc => {
                return loc.locID !== locID;
            });
        },
        pairTeams(state) {
            for (let loc of state.locations) {
                loc.weeks.push(
                    {
                        wkID: wk++,
                        date: "",
                        team1: "",
                        team2: ""
                    }
                );
            }
            return loc.weeks;
        },
        makeHomeAwayPattern() {
            return state.getters.numLocs;
        },
        makeDates() {
            const minutes = 1000 * 60;
            const hours = minutes * 60;
            const days = hours * 24;
            const years = days * 365;
            let startDateMilliSeconds = Date.parse(this.startDate.replace("-","/"));
            let newDateMilliSeconds = 0;
            let wkDate = 0;
            let numwks = this.weeks();
            for (var w = 0; w < numwks; w++) {
                newDateMilliSeconds = startDateMilliSeconds + (w * (7 * days));
                wkDate = new Date(newDateMilliSeconds).toLocaleDateString();
                this.dates.push(
                {
                    id: wk++,
                    date: wkDate
                }
                );
                wkDate = "";
            }
        },
        slotDates(state) {
            return state.locations;
        },
        slotMatches(state) {
            return state.locations.length;
        },
        pairedArray() {
            cmb = Combi.bigCombination([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], 2);
            while(a = cmb.next()) {
                this.games.push(a);
            }
        }
    },
    // ASYNC!! receives dispatches from children and commits mutations. commit makes a change log
    actions: {
        addLocs (context, locName) {
            context.commit('addLoc', locName);
        },
        addTeams (context, teamName) {
            context.commit('addTeam', teamName);
        },
        delTeam(context, teamID) {
            context.commit('delTeam', teamID);
        },
        delLoc(context, locID) {
            context.commit('delLoc', locID);
        },
        generateSchedule(context) {
            context.commit('pairTeams');
            context.commit('makeDates');
            context.commit('slotDates');
            context.commit('slotMatches');
        },
    },
    // computed properties for the store. USE to compute derived state based on store state
    getters: {
        numLocs: state => {
            return state.locations.length;
        }
    }
  });