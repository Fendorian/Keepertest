import { createStore } from 'vuex';
import RoleCardModel from './models/RoleCardModel';

const store = createStore({
  state: {
    roles: [],
    searchText: "",
    filterStatus: "Active and Inactive",
  },
  getters: {
    filteredRoles: (state) => {
        return state.roles.filter(role => {
          const isActive = state.filterStatus === 'Active' ? role.active : state.filterStatus === 'Inactive' ? !role.active : true;
          return role.name.toLowerCase().includes(state.searchText.toLowerCase()) && isActive;
        });
    }
  },
  mutations: {
    setRoles(state, roles) {
      state.roles = roles;
    },
    setSearchText(state, searchText) {
      state.searchText = searchText;
    },
    setFilterStatus(state, filterStatus) {
      state.filterStatus = filterStatus;
    }, 
    ADD_ROLE(state, role) {
        state.roles.push(role);
      },
  },
  actions: {
    addRole({ commit }, role) {
        commit('ADD_ROLE', role);
      },
    async fetchRoles({ commit }) {
      const data = [
        {
            id: 1,
            name: 'Super Admin',
            type: 'admin',
            description: 'Lorem ipsum...',
            editable: false,
            active: true,
            users: [
              { id: 1, first_name: 'Jason', last_name: 'Mossburg', photo_url: 'http://placekitten.com/60/60' },
              { id: 2, first_name: 'Bill', last_name: 'Hayes', photo_url: 'http://placekitten.com/60/60' },
            ],
            created_on: '2019-01-18T18:25:43.511Z',
          },
           {
      "id": 2,
      "name": "Company Admin",
      "type": "admin",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      "editable": false,
      "active": true,
      "users": [
        {
          "id": 5,
          "first_name": "Doug",
          "last_name": "Tutt",
          "photo_url": "http://placekitten.com/60/60"
        }
      ],
      "created_on": "2019-01-18T18:25:43.511Z",
      "modified_on": "2019-01-18T18:25:43.511Z"
    },
    {
      "id": 3,
      "name": "Property Admin",
      "type": "admin",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      "editable": false,
      "active": false,
      "users": [
        {
          "id": 6,
          "first_name": "Sarah",
          "last_name": "Jane",
          "photo_url": "http://placekitten.com/60/60"
        },
        {
          "id": 7,
          "first_name": "Adrian",
          "last_name": "Davis",
          "photo_url": "http://placekitten.com/60/60"
        },
        {
          "id": 8,
          "first_name": "Conrad",
          "last_name": "Nguyen",
          "photo_url": "http://placekitten.com/60/60"
        },
        {
          "id": 9,
          "first_name": "Kevin",
          "last_name": "McSweeney",
          "photo_url": "http://placekitten.com/60/60"
        }
      ],
      "created_on": "2019-01-18T18:25:43.511Z",
      "modified_on": "2019-01-18T18:25:43.511Z"
    },
    {
      "id": 4,
      "name": "Job Recruiter",
      "type": "job_admin",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      "editable": true,
      "active": true,
      "users": [
        {
          "id": 2,
          "first_name": "Bill",
          "last_name": "Hayes",
          "photo_url": "http://placekitten.com/60/60"
        },
        {
          "id": 4,
          "first_name": "Ron",
          "last_name": "Mitchell",
          "photo_url": "http://placekitten.com/60/60"
        },
        {
          "id": 6,
          "first_name": "Sarah",
          "last_name": "Jane",
          "photo_url": "http://placekitten.com/60/60"
        }
      ],
      "created_on": "2019-01-18T18:25:43.511Z",
      "modified_on": "2019-01-18T18:25:43.511Z"
    },
    {
      "id": 5,
      "name": "Content Administrator",
      "type": "admin",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      "editable": true,
      "active": true,
      "users": [
        {
          "id": 1,
          "first_name": "Jason",
          "last_name": "Mossburg",
          "photo_url": "http://placekitten.com/60/60"
        },
        {
          "id": 3,
          "first_name": "Nathan",
          "last_name": "Norman",
          "photo_url": "http://placekitten.com/60/60"
        },
        {
          "id": 5,
          "first_name": "Doug",
          "last_name": "Tutt",
          "photo_url": "http://placekitten.com/60/60"
        }
      ],
      "created_on": "2019-01-18T18:25:43.511Z",
      "modified_on": "2019-01-18T18:25:43.511Z"
    },
    {
      "id": 6,
      "name": "Property Moderator",
      "type": "admin",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      "editable": false,
      "active": true,
      "users": [
        {
          "id": 7,
          "first_name": "Adrian",
          "last_name": "Davis",
          "photo_url": "http://placekitten.com/60/60"
        },
        {
          "id": 8,
          "first_name": "Conrad",
          "last_name": "Nguyen",
          "photo_url": "http://placekitten.com/60/60"
        },
        {
          "id": 9,
          "first_name": "Kevin",
          "last_name": "McSweeney",
          "photo_url": "http://placekitten.com/60/60"
        }
      ],
      "created_on": "2019-01-18T18:25:43.511Z",
      "modified_on": "2019-01-18T18:25:43.511Z"
    }
      ];
      const roles = data.map(role => new RoleCardModel(role));
      commit('setRoles', roles);
    },
    updateSearchText({ commit }, searchText) {
      commit('setSearchText', searchText);
    },
    updateFilterStatus({ commit }, filterStatus) {
      commit('setFilterStatus', filterStatus);
    }
  }
});

export default store;
