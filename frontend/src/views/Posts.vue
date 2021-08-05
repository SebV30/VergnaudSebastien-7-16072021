<template>
<div>
  <Header />
        <section class=" text-center">
        <div class="createPost d-flex-column justify-content-around">
            <button type="submit" class="btn btn-del m-auto col-10 col-md-4 col-lg-4 col-xl-3" @click="showForm">Créez un nouveau post</button>
                <div class="text-center" v-if="loadForm">
                  <div class="form-group col-11 m-auto font-weight-bold">
                      <label for="titre">Titre du POST :</label>
                      <input type="text" class="form-control" id="titre" Name="titre" v-model="title">
                  </div>
                  <div class="form-group col-11 m-auto font-weight-bold">
                    <label for="message">Message :</label>
                    <textarea class="form-control" id="message" rows="4" Name="message" v-model="content"></textarea>
                  </div>
                  <input id="image" type="file" class="mt-4 mb-3 mr-3 col-12 col-md-6 justify-content-center" v-on:change="selectedFile" ref="file">
                <button class="btn btn-del mb-3" type="submit" @click="sendPost">ENVOYER</button>
                </div>
        </div>

        <article>
            <div class="posts" v-for="(post,catchDb) in Posts" :key="catchDb" :id="post.id">
                <!-- Titre à récupérer sur BDD -->
                <h2>{{ post.title }}</h2>
                <div class="post-field">
                    <p>{{ post.content }}</p>
                    <img :src="post.image" :alt="post.id" v-if="post.image !=0" />
                </div>
                <div class="post-infos">
                    <!-- Pseudo auteur post dans BDD -->
                    <p>De : {{ post.User.username }}</p>
                    <!-- Date création post dans BDD -->
                    <p>Le : {{ post.createdAt | formatDate }}</p>
                </div>
                <div class="mb-3">
                    <router-link :to="`/posts/${post.id}`" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-3">Commenter / Lire commentaires</router-link>
                </div>
            </div>
        </article>
      </section>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'Posts',
  components: {
    Header,
  },
  data () {
    return {
      loadForm: false,
      title: '',
      content: '',
      file: '',
      Posts: []
    }
  },
  mounted() {
  this.getAllPosts();
  },
  methods: {
    showForm () {
      this.loadForm = true
    },
    selectedFile() {
      this.file = this.$refs.file.files[0];
    },
    sendPost () {
      //Récupération du token stocké dans le LS
      const token = localStorage.getItem('token');
      const UserId = VueJwtDecode.decode(localStorage.getItem('token')).userId;
      const title = document.getElementById('titre').value;
      const content = document.getElementById('message').value;
      const formData = new FormData();
      formData.append('image', this.file);
      formData.append('title', title);
      formData.append('content', content);
      formData.append('UserId', UserId);

      axios
        .post('http://localhost:3000/api/post/', formData, {
          headers: {
            Authorization: "bearer " + token,
          },
        })
        .then(res => {
          if(res){
            window.location.reload();
          }
        })
        .catch((error) => {console.log(error);})
    },

    getAllPosts() {
      //Récupération du token stocké dans le LS
      const token = localStorage.getItem('token');

      //Méthode AXIOS pour récupérer tous les posts présents dans la table de la BDD
      axios
        .get('http://localhost:3000/api/post/', {
          headers: {
            Authorization: "bearer " + token,
          },
        })
      .then(response => {this.Posts = response.data})
      .catch((error) => {console.log(error);});
    }
  }
}
</script>
