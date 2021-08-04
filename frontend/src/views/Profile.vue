<template>
      <section class="text-center">
        <div class="d-flex justify-content-center">
            <div class="form-group col-11 col-md-8 col-lg-6 col-xl-4" :id="user.username">
                <label for="first-name">Pseudo :</label>
                <input type="text" class="form-control text-center mb-3" id="username" placeholder="Martin" required v-model="username">
                <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-8 col-lg-6 col-xl-4" @click="resetUsername">Modifier votre Pseudo</button>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div class=" form-group col-11 col-md-8 col-lg-6 col-xl-4" :id="user.password">
                <label for="password">Mot de Passe :</label>
                <input type="password" class="form-control text-center mb-3" id="password" Name="password" required v-model="password">
                <div class="verif-input verif-input-last-name"></div>
                <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-8 col-lg-6 col-xl-4" @click="resetPassword">Modifier cotre Mot de Passe</button>
            </div>
        </div>
        <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-8 col-lg-6 col-xl-4" @click="deleteAccount">Supprimer votre compte</button>
    </section>

</template>

<script>
// import axios from 'axios';


export default {
  name: 'Profile',
  data() {
    return {
      Users: [],
      username: '',
      password: ''
    }
},
methods: {
  resetUsername() {
    //Récupération du token stocké dans le LS
    const token = localStorage.getItem('token');
    console.log(token);
    const username = localStorage.getItem('token').username;
    console.log(username);

  },
  // resetPassword() {
  //   //Récupération du token stocké dans le LS
  //   const token = localStorage.getItem('token');
  //   console.log(token);


  // },
  // deleteAccount() {
  //   //Récupération du token stocké dans le LS
  //   const token = localStorage.getItem('token');
  //   console.log(token);

    
  // }
  }
}
</script>