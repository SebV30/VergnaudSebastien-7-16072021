<template>
      <section class=" text-center">
            <h2>Connectez vous.</h2>
        <article>
            <div class="d-flex justify-content-center">
                <div class="form-group col-11 col-md-8 col-lg-6 col-xl-4">
                    <label for="inputEmail4">Email :</label>
                    <input type="email" class="form-control text-center" id="inputEmail4" placeholder="dupont.martin@servicemail.com" required v-model="$v.email.$model" :class="{'is-invalid': $v.email.$error, 'is-valid': !$v.email.$invalid}">
                    <div class="verif-input verif-input-first-name valid-feedback" style="color:green">Votre Email est correctement renseigné.</div>
                    <div class="verif-input verif-input-first-name invalid-feedback" style="color:red">
                      <span v-if="!$v.email.required">Un email valable est requis</span>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="form-group col-11 col-md-8 col-lg-6 col-xl-4">
                    <label for="password">Mot de Passe :</label>
                    <input type="password" class="form-control text-center" id="password" Name="password" required v-model="$v.password.$model" :class="{'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid}">
                    <div class="verif-input verif-input-first-name valid-feedback" style="color:green">Votre mot de passe est correctement renseigné.</div>
                    <div class="verif-input verif-input-first-name invalid-feedback" style="color:red">
                      <span v-if="!$v.password.required">Un mot de passe est requis</span>
                      <span v-if="!$v.password.minLength">Il faut au moins {{ $v.password.$params.minLength.min }} caractères (seul caractère spécial utilisable : "-")</span>
                      <span v-if="!$v.password.maxLength">Il faut au maximum {{ $v.password.$params.maxLength.max }} caractères</span>
                    </div>
                </div>
            </div>
            <button type="submit" id="sendForm" class="btn mb-4 mr-auto ml-auto col-10 col-md-6 col-lg-4 col-xl-3" @click="sendLogin">Se
                connecter</button>
        </article>
            <h2>Veuillez vous inscrire si ce n'est pas déjà fait.</h2>
        <article>
            <router-link to="/signup" id="sendForm" class="btn m-auto mb-md-5 col-10 col-md-6 col-lg-4 col-xl-3">S'Inscrire</router-link>
        </article>
    </section>


</template>

<script>
import {required, minLength, maxLength, email , helpers} from 'vuelidate/lib/validators' // , helpers
import axios from 'axios';

const usernameValidator = helpers.regex('regUsername', /^[A-Za-z0-9-]{3,12}$/)

export default {
  name: 'Login',
  data () {
    return {
      monToken: null,
      password: '',
      email: '',
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