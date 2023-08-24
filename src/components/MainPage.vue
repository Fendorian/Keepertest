<template>
    <div>
      <h1>User Roles Management</h1>
      <RoleSearchBar />
      <div class="card-container">
        <RoleCard v-for="role in filteredRoles" :key="role.id" :role="role" />
      </div>
    </div>
  </template>
  
  <script>
  import RoleCard from './RoleCard.vue';
  import RoleSearchBar from './RoleSearchBar.vue';
  import { mapState, mapActions, mapGetters } from 'vuex';
  
  export default {
    components: {
      RoleCard,
      RoleSearchBar,
    },
    data() {
      return {
        showModal: false
      };
    },
    computed: {
      ...mapState(['roles']),
      ...mapGetters(['filteredRoles'])
    },
    methods: {
      ...mapActions(['fetchRoles']),
      addNewRole(newRole) {
        this.roles.push(newRole);
      }
    },
    async created() {
      await this.fetchRoles();
    }
  };
  </script>
  