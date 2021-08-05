<template>
      <section class="text-center">
        <div class="d-flex justify-content-center">
            <div class="form-group col-11 col-md-8 col-lg-6 col-xl-4" > <!--:id="user.username"-->
                <label for="first-name">Pseudo :</label>
                <input type="text" class="form-control text-center mb-3" id="username" placeholder="Martin" required v-model="username"> <!--v-model="username"-->
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div class=" form-group col-11 col-md-8 col-lg-6 col-xl-4" > <!--:id="user.password"-->
                <label for="password">Mot de Passe :</label>
                <input type="password" class="form-control text-center mb-3" id="password" Name="password" required v-model="password"> <!--v-model="password"-->
                <div class="verif-input verif-input-last-name"></div>
                <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-8 col-lg-6 col-xl-4" @click="resetUserEntries">Modifier vos données</button> <!--@click="resetUserEntries"-->
            </div>
        </div>
        <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-8 col-lg-6 col-xl-4" @click="deleteAccount">Supprimer votre compte</button> <!--@click="deleteAccount"-->
    </section>

</template>

<script>
import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';


export default {
  name: 'Profile',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    resetUserEntries() {
      //Récupération du token stocké dans le LS
      const token = localStorage.getItem('token');
      //Récupération du token stocké dans le LS  pour récupération Id User
      const UserId = VueJwtDecode.decode(localStorage.getItem('token')).userId;
      const userEntries = {
        username: this.username,
        password: this.password,
      };

      axios
      .post('http://localhost:3000/api/user/' + UserId, userEntries, {
            headers: {
                "Content-Type" : "application/json",
                Authorization: "Bearer " + token,
            },
      })
      .then(response => {
        this.username = response.data.username;
        this.password = response.data.password})
      // ,this.$router.push("Login")
      .catch((error) => {console.log(error);});
    },

    deleteAccount() {
      //Récupération du token stocké dans le LS
      const token = localStorage.getItem('token');
      console.log(token);
      //Récupération du token stocké dans le LS  pour récupération Id User
      const UserId = VueJwtDecode.decode(localStorage.getItem('token')).userId;
      console.log(UserId);

      axios
      .delete('http://localhost:3000/api/user/' + UserId, {
          headers: {
              "Content-Type" : "application/json",
              Authorization: "Bearer " + token,
          },
      })
      .then(() => {
        localStorage.clear();
        this.$router.push('Login')

      })
      .catch((error) => {console.log(error);});
      
    }
  }
}
</script>