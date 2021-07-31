<template>
      <section class=" text-center">
        <div>
            <button type="submit" id="sendForm" class="btn btn-del m-auto col-10 col-md-6 col-lg-4 col-xl-3">Créez un nouveau post</button>
            <!-- <a href="../HTML/form-post.html" class="btn btn-del m-auto col-10 col-md-6 col-lg-4 col-xl-3">Créez un
                nouveau
                post</a>
 -->
        </div>
        <article>
            <!-- <a href="${postId}"> -->
            <div class="posts">
                <!-- Titre à récupérer sur BDD -->
                <h2>${Titre du Post1}</h2>
                <div class="post-field">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus tortor porta, gravida libero sit amet, facilisis turpis. Maecenas ac mi facilisis, volutpat tortor non, viverra nibh. Pellentesque sed urna non tellus maximus dapibus.
                        Vivamus nulla ex, tincidunt non posuere ut, luctus vitae libero.
                    </p>
                    <img src="../assets/logo.png" alt="Logo GROUPOMANIA" title="Logo GROUPOMANIA" aria-label="Logo GROUPOMANIA" />
                </div>
                <div class="post-infos">
                    <!-- Pseudo auteur post dans BDD -->
                    <p>De : ${Pseudo Auteur}</p>
                    <!-- Date création post dans BDD -->
                    <p>Le : ${Date création}</p>
                </div>
                <div class="mb-3">
                    <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-3">Commenter / Lire commentaires</button>
                    <!-- <a href="one-post.html" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-3">Commenter / Lire
                        commentaires</a> -->
                </div>
            </div>
            <!-- </a> -->
        </article>
    </section>

</template>

<script>
export default {
  name: 'Posts',
}
</script>

<style>

</style>