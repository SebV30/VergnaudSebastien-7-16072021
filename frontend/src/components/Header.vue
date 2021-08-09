
<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-light d-flex justify-content-between">
            <img class="logo-nav" src="../assets/home-1.png" alt="Logo GROUPOMANIA" title="Logo GROUPOMANIA" aria-label="Logo GROUPOMANIA" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto ml-5 mt-2 mt-lg-0 nav-menu">
                    <li class="nav-item active">
                        <router-link to="/posts" id="sendForm" class="btn navlink m-auto col-10 col-md-6 col-lg-4 col-xl-3">Posts</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link :to="`/profile/${userId}`" id="sendForm" class="btn navlink m-auto col-10 col-md-6 col-lg-4 col-xl-3">Profil</router-link>
                    </li>
                    <li class="nav-item active">
                      <router-link to="/logout" id="sendForm" class="btn navlink m-auto col-10 col-md-6 col-lg-4 col-xl-3">Déconnexion</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'Header',
  data() {
    return {
      userId: VueJwtDecode.decode(localStorage.getItem('token')).userId,
    }
  }
}
</script>

