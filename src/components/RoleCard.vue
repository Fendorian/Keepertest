<template>
    <div class="role-card">
        <div class="content">
            <div class="container">
      <div v-if="!role.active">
        <button disabled class="inactive-button">INACTIVE</button>
      </div>
      <h3>{{ role.name }}</h3>
      <p>{{ role.type }}</p>
      <p>{{ role.description }}</p>
      <div class="user-container">
        <div class="user-info" v-for="user in role.users" :key="user.id">
            <img class="user-picture" :src="user.photo_url" alt="User Image">
            <p class="user-names">{{ user.first_name }} {{ user.last_name }}</p>
        </div>
        </div>
    </div>
      <div class="bottom-container">
      <p>Date Created: {{ formatDate(role.created_on) }}</p>

  
      <div v-if="role.editable">
        <button class="edit-button">Edit</button>
        <button class="delete-button" @click="deleteRole">Delete</button>
      </div>
      <div v-else>
        <img class="lock" src="../assets/lock.svg" alt="Not Editable" />
      </div>
    </div>
  
</div>
    </div>
  </template>
  
  <script>
  import { format } from 'date-fns';
  
  export default {
    props: ['role'], 
    methods: {
    formatDate(dateString) {
      const createdDate = new Date(dateString);
      return createdDate.toLocaleDateString('en-GB');
    },
      deleteRole() {
    this.$emit('delete-role', this.role.id);
  },
  },
    computed: {
      formattedDate() {
        const createdDate = new Date(this.role.created_on);
        return format(createdDate, 'dd/MM/yyyy');
      }
    },
  };
  </script>
  