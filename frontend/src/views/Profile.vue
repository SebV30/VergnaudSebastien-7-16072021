<template>
  <div>
    <Header />
      <section class="text-center">
        <div class="d-flex justify-content-center">
            <div class="form-group col-11 col-md-8 col-lg-6 col-xl-4" >
                    <label for="first-name">Pseudo :</label>
                    <input type="text" class="form-control text-center" id="first-name" placeholder="Martin" required v-model.trim="$v.username.$model" :class="{'is-invalid': $v.username.$error, 'is-valid': !$v.username.$invalid}">
                    <div class="verif-input verif-input-first-name valid-feedback" style="color:green">Votre nom d'utilisateur est correctement renseigné.</div>
                    <div class="verif-input verif-input-first-name invalid-feedback" style="color:red">
                      <span v-if="!$v.username.required">Un nom d'utilisateur est requis</span>
                      <span v-if="!$v.username.minLength">Le nom d'utilisateur doit être composé, au moins, {{ $v.username.$params.minLength.min }} caractères (seuls caractère spécial utilisable : "-")</span>
                      <span v-if="!$v.username.maxLength">Le nom d'utilisateur peut être composé, au maximum, {{ $v.username.$params.maxLength.max }} caractères</span>
                    </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div class=" form-group col-11 col-md-8 col-lg-6 col-xl-4" >
                    <label for="password">Mot de Passe :</label>
                    <input type="password" class="form-control text-center" id="password" Name="password" required v-model="$v.password.$model" :class="{'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid}">
                    <div class="verif-input verif-input-first-name valid-feedback" style="color:green">Votre mot de passe est correctement renseigné.</div>
                    <div class="verif-input verif-input-first-name invalid-feedback" style="color:red">
                      <span v-if="!$v.password.required">Un mot de passe est requis</span>
                      <span v-if="!$v.password.minLength">Il faut au moins {{ $v.password.$params.minLength.min }} caractères (seul caractère spécial utilisable : "-")</span>
                      <span v-if="!$v.password.maxLength">Il faut au maximum {{ $v.password.$params.maxLength.max }} caractères</span>
                    </div>
                <button type="submit" id="sendForm" class="btn mt-4 mb-2 col-10 col-md-8 col-lg-6 col-xl-6" @click="resetUserEntries">Modifier vos données</button>
            </div>
        </div>
        <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-2" @click="deleteAccount">Supprimer votre compte</button>
    </section>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';
import {required, minLength, maxLength, email , helpers} from 'vuelidate/lib/validators'

const usernameValidator = helpers.regex('regUsername', /^[A-Za-z0-9-]{3,12}$/)

export default {
  name: 'Profile',
  components: {
    Header,
  },
  data() {
    return {
      username: '',
      password: '',
      UserId: VueJwtDecode.decode(localStorage.getItem('token')).userId,
    }
  },
  validations: {
    email: {
      required,
      email,
    },
    username: {
      required,
      usernameValidator,
      minLength: minLength(3),
      maxLength: maxLength(12)
    },
    password: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(25)
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
      //Récupération du token stocké dans le LS  pour récupération Id User
      const UserId = VueJwtDecode.decode(localStorage.getItem('token')).userId;

      axios
      .delete('http://localhost:3000/api/user/' + UserId, {
          headers: {
              "Content-Type" : "application/json",
              Authorization: "Bearer " + token,
          },
      })
      .then(() => {
        localStorage.clear();
        this.$router.push("../Login")
      })
      .catch((error) => {console.log(error);});
      
    }
  }
}
</script>