<template>
      <section class="text-center">
        <div class="d-flex justify-content-center">
            <div class="form-group col-11 col-md-8 col-lg-6 col-xl-4">
                <label for="first-name">Pseudo :</label>
                <input type="text" class="form-control text-center mb-3" id="pseudo" placeholder="Martin" required>
                <!-- <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-8 col-lg-6 col-xl-4">Modifier votre Pseudo</button> -->
                <a href="$(Enregistrer-Données-dans-BDD)" class="btn m-auto col-11 col-md-8 col-lg-6 col-xl-8">Modifier
                    votre
                    Pseudo</a>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div class=" form-group col-11 col-md-8 col-lg-6 col-xl-4">
                <label for="password">Mot de Passe :</label>
                <input type="password" class="form-control text-center mb-3" id="password" Name="password" required>
                <div class="verif-input verif-input-last-name"></div>
                <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-8 col-lg-6 col-xl-4">Modifier cotre Mot de Passe</button>
                <!-- <a href="$(Enregistrer-Données-dans-BDD)" class="btn m-auto col-11 col-md-8 col-lg-6 col-xl-8">Modifier
                    votre
                    Mot de Passe</a> -->
            </div>
        </div>
        <button type="submit" id="sendForm" class="btn m-auto col-10 col-md-8 col-lg-6 col-xl-4">Supprimer votre compte</button>
        <!-- <a href="$(Enregistrer-Données-dans-BDD)" class="btn btn-del col-11 col-md-8 col-lg-6 col-xl-4">Supprimer
            votre
            compte</a> -->
    </section>

</template>

<script>
export default {
  name: 'Profile'
}
</script>