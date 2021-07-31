<template>
    <main class=" text-center">
        <!--Récupération du post sélectionné dans all-posts.html-->
        <section>
            <div class="posts">
                <h2>${Titre du Post}</h2>
                <div class="post-field">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus tortor porta, gravida libero sit amet, facilisis turpis. Maecenas ac mi facilisis, volutpat tortor non, viverra nibh. Pellentesque sed urna non tellus maximus dapibus.
                        Vivamus nulla ex, tincidunt non posuere ut, luctus vitae libero.
                    </p>
                    <img src="../images/logo.png" alt="Logo GROUPOMANIA" title="Logo GROUPOMANIA" aria-label="Logo GROUPOMANIA" />
                </div>
                <div class="post-infos">
                    <p>De : ${Pseudo Auteur}</p>
                    <p>Le : ${Date création}</p>
                </div>
                <!-- CREATION BOUTON DONNANT POSSIBILITÉ DE CRÉER UN COMMENTAIRE -->
                <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-3">Donnez votre
                    avis</button>
                <!-- <a href="../HTML/form-comment.html" class="btn m-auto col-10 col-md-6 col-lg-4 col-xl-3">Donnez votre
                    avis</a> -->
                <!--Création/Insertion commentaires sur ce post-->
                <article>
                    <div class="comments">
                        <!-- Titre à récupérer sur BDD -->
                        <h2>${Titre du Commentaire1}</h2>
                        <div class="post-field">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum condimentum nunc. Aenean malesuada imperdiet porttitor. Vivamus non nec.</p>
                            <img src="../images/logo-1.png" alt="Logo GROUPOMANIA" title="Logo GROUPOMANIA" aria-label="Logo GROUPOMANIA" />
                        </div>
                        <div class="post-infos">
                            <!-- Pseudo auteur post dans BDD -->
                            <p>De : ${Pseudo Commentateur}</p>
                            <!-- Date création post dans BDD -->
                            <p>Le : ${Date création}</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>

    </main>
</template>

<script>
export default {
  name: 'One-post'
}
</script>
