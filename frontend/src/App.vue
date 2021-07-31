<template>
  <div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>

    </div>
    <router-view/> -->

    <header>
        <h1 class="text-center">Bienvenue sur notre Réseau Social d'Entreprise</h1>
        <nav class="navbar navbar-expand-md navbar-light d-flex justify-content-between">
            <img src="./assets/logo-1.png" alt="Logo GROUPOMANIA" title="Logo GROUPOMANIA" aria-label="Logo GROUPOMANIA" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0 nav-menu">
                    <li class="nav-item active">
                        <a class="nav-link font-weight-bold" href="../HTML/all-posts.html">Accès aux POSTS</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="../HTML/edit-profile.html">Profil</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="../HTML/disconnect.html">Déconnexion</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <Login/>

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
import Login from './views/Login.vue'

export default {
  name: "App",
  components: {
    Login, 
  }
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
