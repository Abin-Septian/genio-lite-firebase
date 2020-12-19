<template lang="pug">
.uk-container.app-container-small
    div(class="uk-visible@m" uk-grid)
        .uk-width-1-1.uk-flex
            img.align-self-bottom.uk-margin-small-right(
                src="../assets/flaticon/png/033-network.png",
                style="width: 4rem; height: 4rem"
            )
            .uk-margin-small-left.align-self-bottom
                h3 Profil pengguna
                span Pengaturan data pengguna

    div(class="uk-hidden@m" uk-grid)
        .uk-width-1-1.uk-flex
            h4 Profil pengguna

    .uk-card.uk-card-default.uk-card-hover.uk-card-body.uk-margin-medium-top.uk-border-rounded
        div(class="uk-width-1-2@m uk-width-1-1@s")
                

</template>

<script>
export default {
    name: 'user-profile',

}
</script>