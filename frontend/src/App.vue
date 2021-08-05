<template>
  <div>
    <div class="text-center mt-3 mb-5 m-auto">
        <h1 class="text-center">Bienvenue sur notre Réseau Social d'Entreprise</h1>
        <img src="./assets/logo-1.png" alt="Logo GROUPOMANIA" title="Logo GROUPOMANIA" aria-label="Logo GROUPOMANIA" />
    </div>

    <router-view/>

    <footer>
        <div class="container mt-4">
            <div class="row info-social">
                <div class="info text-center m-auto">
                    <div class="col-sm">
                        <a href="#">Conditions Générales d'Utilisation</a>
                    </div>
                    <div class="col-sm">
                        <a href="mailto:contact@groupomania.fr">Nous contacter</a>
                    </div>
                </div>
                <div class="social text-center m-auto">
                    <div class="col-sm">
                        <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook"><i
                                class="fab fa-facebook-f icon-foot"></i>
                            Facebook</a>
                    </div>
                    <div class="col-sm ">
                        <a href="https://twitter.com/" target="_blank" aria-label="Twitter"><i
                                class="fab fa-twitter icon-foot"></i>
                            Twitter</a>
                    </div>
                </div>
            </div>
            <p id="copyright" class="text-center mt-4">© GROUPOMANIA 2021</p>
        </div>
    </footer>


  </div>
</template>

<script>

export default {
  name: "App",
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>






                        
