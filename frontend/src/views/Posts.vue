<template>
      <section class=" text-center">
        <div class="createPost">
            <button type="submit" class="btn btn-del m-auto col-10 col-md-6 col-lg-4 col-xl-3" @click="showForm">Créez un nouveau post</button>
                <div class="text-center" v-if="loadForm">
                  <div class="form-group col-11 m-auto font-weight-bold">
                      <label for="titre">Titre du POST :</label>
                      <input type="text" class="form-control" id="titre" Name="titre" v-model="title">
                  </div>
                  <div class="form-group col-11 m-auto font-weight-bold">
                    <label for="message">Message :</label>
                    <textarea class="form-control" id="message" rows="4" Name="message" v-model="content"></textarea>
                  </div>
                  <br class="form-group m-auto">
                  <input class="mt-4 mb-3 mr-3 col-12 col-md-6 justify-content-center" type="file" v-on:change="selectedFile" ref="image">
                  <!-- <button class="btn m-auto">Ajouter une image</button><br> -->
                <button class="btn btn-del mb-3" @click="sendPost">ENVOYER</button>
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
                    <p>De : {{ post.username }}</p>
                    <!-- Date création post dans BDD -->
                    <p>Le : {{ post.createdAt }}</p>
                </div>
                <div class="mb-3">
                    <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-3">Commenter / Lire commentaires</button>
                    <!-- <a href="one-post.html" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-3">Commenter / Lire
                        commentaires</a> -->
                </div>
            </div>
        </article>
      </section>

</template>

<script>
import axios from 'axios';
export default {
  name: 'Posts',
  data () {
    return {
      loadForm: false,
      title: '',
      content: '',
      image: '',
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
    sendPost () {
      //Récupération du token stocké dans le LS
      const token = localStorage.getItem('token');
      console.log(token);

      //Méthode AXIOS pour récupérer tous les posts présents dans la table de la BDD
      axios
      .post('http://localhost:3000/api/post/', {
        headers: {
        Authorization: "bearer " + token,
        },
        title: this.title,
        content: this.content,
        image: this.image
      })
      .then(response => {
        console.log(response);
        this.title = response.data.title,
        this.content = response.data.content,
        this.image = response.data.image
      })
      .catch((error) => {console.log(error);});
    },

    // getAllPosts() {
    //   //Récupération du token stocké dans le LS
    //   const token = localStorage.getItem('token');
    //   console.log(token);

    //   //Méthode AXIOS pour récupérer tous les posts présents dans la table de la BDD
    //   axios
    //     .get('http://localhost:3000/api/post/', {
    //       headers: {
    //         Authorization: "bearer " + token,
    //       },
    //     })
    //   .then(response => {this.Posts = response.data;
    //   console.log(response);})
    //   .catch((error) => {console.log(error);});
    // }
  }
}
</script>

<style>

</style>