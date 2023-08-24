<template>
    <div class="search-container">
      <div class="search-inner-container">
      <input class="search-input" type="text" v-model="localSearchText" placeholder="Search" />
      <button @click="triggerSearch"><img class="glass" src="../assets/glass.svg" alt="Search" /></button>
      <div class="active-search">
        <p class="role-status">Role Status</p>
      <select v-model="localFilterStatus" @change="onSelectChange">
        <option value="Active and Inactive">Active and Inactive</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      </div>
    </div>
      <button class="new-role-button" @click="showModal = true">Create New Role</button>
    </div>

    <div v-if="showModal" class="modal-overlay modal">
      
      <form class="form-input" @submit.prevent="addNewRole">
        <h2>Insert role</h2>
      <input type="text" v-model="newRole.name" placeholder="Name" required />
      <input type="text" v-model="newRole.type" placeholder="Type" required />
      <textarea v-model="newRole.description" placeholder="Description"></textarea>
      <input type="checkbox" v-model="newRole.editable" /> Editable
      <input type="checkbox" v-model="newRole.active" /> Active
        <p>Insert user</p>
      <div v-for="(user, index) in newRole.users" :key="index">
        <input type="text" v-model="user.first_name" placeholder="First Name" />
        <input type="text" v-model="user.last_name" placeholder="Last Name" />
        <input type="text" v-model="user.photo_url" placeholder="Photo URL" />
      </div>
      
      <button type="submit" @click="addUserField">Add user</button>
    </form>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import { v4 as uuidv4 } from 'uuid';
  
  export default {
    computed: {
      ...mapState(['searchText', 'filterStatus']),
      ...mapGetters(['filteredRoles']),
    },
    data() {
      return {
        localSearchText: '',
        localFilterStatus: 'Active and Inactive', 
        showModal: false,
        newRole: {
        id: uuidv4(),
        name: '',
        type: '',
        description: '',
        editable: false,
        active: false,
        users: [
          {
            id: uuidv4(),
            first_name: '',
            last_name: '',
            photo_url: '',
          },
        ],
      },
    };
    },
    methods: {
      addNewRole() {
      this.addRole(this.newRole);
      this.showModal = false;
      this.newRole = {
        name: '',
        description: ''
      };
    },
      ...mapActions(['addRole','updateSearchText', 'updateFilterStatus']),
      triggerSearch() {
        this.updateSearchText(this.localSearchText);
      },
      onSelectChange() {
        this.updateFilterStatus(this.localFilterStatus);
      },
    },
    watch: {
      searchText: {
        handler(newVal) {
          this.localSearchText = newVal;
        },
        immediate: true,
      },
      filterStatus: {
        handler(newVal) {
          this.localFilterStatus = newVal;
        },
        immediate: true,
      },
    },
  };
  </script>
  