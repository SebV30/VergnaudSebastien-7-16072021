<template>
      <section class=" text-center">
        <article>
            <h2>Connectez vous.</h2>
            <div class="d-flex justify-content-center">
                <div class="form-group col-11 col-md-8 col-lg-6 col-xl-4">
                    <label for="inputEmail4">Email :</label>
                    <input type="email" class="form-control text-center" id="inputEmail4" placeholder="dupont.martin@servicemail.com" required>
                    <div class="verif-input verif-input-email"></div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="form-group col-11 col-md-8 col-lg-6 col-xl-4">
                    <label for="password">Mot de Passe :</label>
                    <input type="password" class="form-control text-center" id="password" Name="password" required>
                    <div class="verif-input verif-input-last-name"></div>
                </div>
            </div>
            <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-3">Se
                connecter</button>
        </article>
        <article>
            <h2>Veuillez vous inscrire si ce n'est pas déjà fait.</h2>
            <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-3">S'Inscrire</button>
            <!-- <a href="signup.html" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-3">S'Inscrire</a> -->
        </article>
    </section>


</template>

<!--<script>
export default {
  name: 'Login',
  components: {
    Login
  }
}
</script>
-->