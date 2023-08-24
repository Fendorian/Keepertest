class RoleCardModel {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.type = data.type;
      this.description = data.description;
      this.editable = data.editable;
      this.active = data.active;
      this.users = data.users;
      this.created_on = new Date(data.created_on);
    }
  }
  
  export default RoleCardModel;
  