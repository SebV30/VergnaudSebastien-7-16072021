<template>
      <section class=" text-center">
        <article>
            <h2>Connectez vous.</h2>
            <div class="d-flex justify-content-center">
                <div class="form-group col-11 col-md-8 col-lg-6 col-xl-4">
                    <label for="inputEmail4">Email :</label>
                    <input type="email" class="form-control text-center" id="inputEmail4" placeholder="dupont.martin@servicemail.com" required v-model="email">
                    <!-- <div class="verif-input verif-input-email">ATTENTION : E-mail non valide</div> -->
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="form-group col-11 col-md-8 col-lg-6 col-xl-4">
                    <label for="password">Mot de Passe :</label>
                    <input type="password" class="form-control text-center" id="password" Name="password" required v-model="password">
                    <!-- <div class="verif-input verif-input-last-name">ATTENTION : Mot de passe incorrect.</div> -->
                </div>
            </div>
            <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-3" @click="sendLogin">Se
                connecter</button>
        </article>
        <article>
            <h2>Veuillez vous inscrire si ce n'est pas déjà fait.</h2>
            <router-link to="/signup" id="sendForm" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-3">S'Inscrire</router-link>
        </article>
    </section>


</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data () {
    return {
      monToken: null,
      password: '',
      email: '',
    }
  },
  methods: {
    sendLogin () {
    axios
      .post('http://localhost:3000/api/user/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        this.monToken = response.data.token
        localStorage.setItem('token', this.monToken);
        this.$router.push("Posts");
      })
      .catch((error) => {console.error(error);});
    }
  }
}
</script>

<style lang="sass">

</style>