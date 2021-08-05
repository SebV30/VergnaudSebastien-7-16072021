<template>
    <section class=" text-center">
        <article>
            <h2>En route pour votre inscription.</h2>
            <div class="d-flex justify-content-center">
                <div class="form-group col-11 col-md-8 col-lg-6 col-xl-4">
                    <label for="inputEmail4">Email :</label>
                    <input type="email" class="form-control text-center" id="inputEmail4" placeholder="dupont.martin@servicemail.com" required v-model="email">
                    <div class="verif-input verif-input-email"></div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="form-group col-11 col-md-8 col-lg-6 col-xl-4">
                    <label for="first-name">Pseudo :</label>
                    <input type="text" class="form-control text-center" id="first-name" placeholder="Martin" required v-model="username">
                    <div class="verif-input verif-input-first-name"></div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="form-group col-11 col-md-8 col-lg-6 col-xl-4">
                    <label for="password">Mot de Passe :</label>
                    <input type="password" class="form-control text-center" id="password" Name="password" required v-model="password">
                    <div class="verif-input verif-input-last-name"></div>
                </div>
            </div>
            <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-8 col-lg-6 col-xl-4" @click='registerSignup'>S'Inscrire</button>
            <!-- <a href="../HTML/index.html" class="btn m-auto col-11 col-md-8 col-lg-6 col-xl-4">S'Inscrire</a> -->
        </article>
    </section>

</template>

<script>
import axios from 'axios'
export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      username: '',
      password: ''
      }
  },
  methods: {
    registerSignup (){
      axios
        .post('http://localhost:3000/api/user/signup', {
          email: this.email,
          username: this.username,
          password: this.password
        })
        .then(response => console.log(response)),this.$router.push("Login")
        .catch((error) => {console.log(error);});
    }
  }
}
</script>
