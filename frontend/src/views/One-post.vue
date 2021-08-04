<template>
    <main class=" text-center">
        <!--Récupération du post sélectionné dans all-posts.html-->
        <section>
          <!-- <div v-for="(post,catchDb) in Posts" :key="catchDb" :id="post.id"> -->
            <div class="posts">
                <h2>{{ postTitle }}</h2>
                <div class="post-field">
                    <p>{{ postContent }}</p>
                    <img :src="postImage" :alt="postImage" v-if="postImage !=0" />
                </div>
                <div class="post-infos">
                    <p>De : {{ postUsername }}</p>
                    <p>Le : {{ postCreatedAt | formatDate }}</p>
                </div>
                <!-- CREATION INPUT & BOUTON DONNANT POSSIBILITÉ DE CRÉER UN COMMENTAIRE -->
                <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-3" @click="showForm">Donnez votre avis</button>
                <div class="form-group col-11 m-auto font-weight-bold" v-if="loadForm">
                <label for="message"></label>
                <textarea class="form-control" id="message" rows="8" Name="message" v-model="content"></textarea>
                <button class="btn btn-del mb-3 mt-3" type="submit" @click="sendComment()">ENVOYER</button>

                </div>
                <!--CRÉATION/INSERTION COMMENTAIRES SUR CE POST-->
                <article>
                    <div class="comments" v-for="(comment,receiveDb) in Comments" :key="receiveDb" :id="comment.id">
                        
                        <h2>commentaire</h2>
                        <div class="post-field">
                            <p>{{ comment.content }}</p>
                        </div>
                        <div class="post-infos">
                            <p>De : {{ comment.username }}</p>
                            <p>Le : {{ comment.createdAt | formatDate }}</p>
                        </div>
                    </div>
                </article>
            </div>
            <!-- </div> -->
        </section>

    </main>
</template>

<script>
import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'One-post',
  data () {
    return {
      loadForm: false,
      postTitle: '',
      postContent: '',
      postImage: '',
      postUsername: '',
      postCreatedAt: '',
      Comments: [],
      content: '',
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
        // this.postUsername = response.data.users.username;
        this.postCreatedAt = response.data.createdAt;
        // console.log(this.postUsername);
      })
      .catch((error) => {console.log(error);});
    },

    sendComment() {
      //Récupération du token stocké dans le LS
      const token = localStorage.getItem('token');
      const postId = this.$route.params.id;
      const content = document.getElementById('message').value;
      const userId = VueJwtDecode.decode(localStorage.getItem('token')).userId;
      const test = {
        content, userId
      }

      axios
      .post('http://localhost:3000/api/post/' + postId + '/comment',test, {
        headers: {
            "Content-Type" : "application/json",
            Authorization: "Bearer " + token,
        }
      })

      .then(response => {
        this.Comments = response.data;
        window.location.reload()
      })
      .catch((error) => {console.log(error);})
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


      // const isAdmin = VueJwtDecode.decode(localStorage.getItem('token')).isAdmin;
      // console.log(isAdmin);

</script>
