<template>
<div>
  <Header />
    <main class=" text-center">
      <!--Récupération du post sélectionné dans all-posts.html-->
      <section>
          <div class="posts">
            <article>
              <h2>{{ postTitle }}</h2>
              <div class="post-field">
                  <p>{{ postContent }}</p>
                  <img :src="postImage" :alt="postImage" v-if="postImage !=0" />
              </div>
              <div class="post-infos">
                  <p>De : <span>{{ postUsername }}</span></p>
                  <p>Le : {{ postCreatedAt | formatDate }}</p>
              </div>
              <button v-if="UserId == postUserId || isAdmin == 1" class="btn btn-del mb-5 mt-3 mr-4" type="submit" @click="showForm">Modifier</button>
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
                  <input id="image" type="file" class="mt-4 mb-3 mr-3 col-12 col-md-6 justify-content-center" v-on:change="selectedFile" ref="file">
                  <!-- <button class="btn m-auto">Ajouter une image</button><br> -->
              <button class="btn btn-del mb-3" type="submit" @click="updatePost()">ENVOYER</button>
              </div>

              <button v-if="UserId == postUserId || isAdmin == 1" class="btn btn-del mb-5 mt-3 ml-4" type="submit" @click="deletePost()">Supprimer</button><br>
              <!-- CREATION INPUT & BOUTON DONNANT POSSIBILITÉ DE CRÉER UN COMMENTAIRE -->
              <button type="submit" id="sendForm" class="btn m-auto mb-5 col-9 col-md-6 col-lg-4 col-xl-3" @click="showFormComment">Donnez votre avis</button>
              <div class="form-group col-11 m-auto font-weight-bold" v-if="loadFormComment">
              <label for="message"></label>
              <textarea class="form-control" id="message" rows="4" Name="message" v-model="contentComment"></textarea>
              <button class="btn btn-del mb-3 mt-3" type="submit" @click="sendComment()">ENVOYER</button>
              </div>
</article>
              <!--CRÉATION/INSERTION COMMENTAIRES SUR CE POST-->
              <article >
                  <div >
                  <h2>COMMENTAIRES</h2>
                  <div class="comments commentId" v-for="(comment,receiveDb) in Comments" :key="receiveDb" :id="comment.id">
                      <div class="post-field">
                          <p>{{ comment.content }}</p>
                      </div>
                      <div class="post-infos">
                          <p>De : <span>{{ comment.User.username }}</span></p>
                          <p>Le : {{ comment.createdAt | formatDate }}</p>
                      </div>
                  <button v-if="UserId == comment.UserId || isAdmin == 1" class="btn btn-del mb-3 mt-3" type="submit" @click="deleteComment()">Supprimer</button>
                  </div>
                  </div>
              </article>
            </div>
        </section>

    </main>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'One-post',
  components: {
    Header,
  },
  data () {
    return {
      loadForm: false,
      loadFormComment: false,
      postTitle: '',
      postContent: '',
      postImage: '',
      postUsername: '',
      postUserId:'',
      postCreatedAt: '',
      Comments: [],
      contentComment: '',
      title: '',
      content: '',
      file: '',
      UserId: VueJwtDecode.decode(localStorage.getItem('token')).userId,
      isAdmin: VueJwtDecode.decode(localStorage.getItem('token')).isAdmin,
    }
  },
  mounted() {
    this.getOnePost();
    this.getAllComments();
  },
  methods: {
    showForm () {
      this.loadForm = true
    },
    showFormComment () {
      this.loadFormComment = true
    },

    getOnePost() {
      const token = localStorage.getItem('token');
      const postId = this.$route.params.id;

      axios
      .get('http://localhost:3000/api/post/' + postId, {
        headers: {
          "Content-Type":"application/json",
          Authorization: "bearer " + token,
        },
      })
      .then(response => {
        this.postTitle = response.data.title;
        this.postContent = response.data.content;
        this.postImage = response.data.image;
        this.postUsername = response.data.User.username;
        this.postUserId = response.data.UserId;
        this.postCreatedAt = response.data.createdAt;
      })
      .catch((error) => {console.log(error);});
    },

    selectedFile() {
      this.file = this.$refs.file.files[0];
    },

    updatePost(){
      const token = localStorage.getItem('token');
      const UserId = VueJwtDecode.decode(localStorage.getItem('token')).userId;
      const postId = this.$route.params.id;
      const title = document.getElementById('titre').value;
      const content = document.getElementById('message').value;
      const formData = new FormData();
      formData.append('image', this.file);
      formData.append('title', title);
      formData.append('content', content);
      formData.append('UserId', UserId);

      axios
        .put('http://localhost:3000/api/post/' + postId, formData, {
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

    deletePost() {
      const token = localStorage.getItem('token');
      const postId = this.$route.params.id;

      axios
      .delete('http://localhost:3000/api/post/' + postId, {
        headers: {
            Authorization: "Bearer " + token,
        }
      })
      .then(response => { 
        if(response) {
        this.$router.push("/posts");
        }
      })
      .catch((error) => {console.log(error);})
    },

    sendComment() {
      //Récupération du token stocké dans le LS
      const token = localStorage.getItem('token');
      const postId = this.$route.params.id;
      const content = document.getElementById('message').value;
      const UserId = VueJwtDecode.decode(localStorage.getItem('token')).userId;
      const backInfos = {
        content, UserId
      }

      axios
      .post('http://localhost:3000/api/post/' + postId + '/comment',backInfos, {
        headers: {
            "Content-Type" : "application/json",
            Authorization: "Bearer " + token,
        }
      })

      .then(response => {
        if(response) {
          window.location.reload()
        }
      })
      .catch((error) => {console.log(error);})
    },

    deleteComment() {
      const token = localStorage.getItem('token');
      const infoCommentId = document.querySelector('.commentId');
      const commentId = infoCommentId.getAttribute('id');

      // const UserId = VueJwtDecode.decode(localStorage.getItem('token')).userId;
      // const isAdmin = VueJwtDecode.decode(localStorage.getItem('token')).isAdmin;

      // if(userId == UserId || isAdmin === 1) {
      axios
      .delete('http://localhost:3000/api/comment/' + commentId ,{
        headers: {
            Authorization: "Bearer " + token,
        }
      })
      .then(response => { 
        if(response) {
        window.location.reload()
        }
      })
      .catch((error) => {console.log(error);})
      // }
    },

    getAllComments() {
      const token = localStorage.getItem('token');
      const postId = this.$route.params.id;
      axios
      .get('http://localhost:3000/api/post/' + postId + '/comment', {
        headers: {
          Authorization: "bearer " + token,
        },
      })
      .then(response => {
        this.Comments = response.data;
        console.log(response);
      })
      .catch((error) => {console.log(error);});
    }
  }
};

</script>

