<template lang="pug">
.uk-container.app-container-small
    div(class="uk-visible@m" uk-grid)
        .uk-width-1-1.uk-flex
            img.align-self-bottom.uk-margin-small-right(
                src="../assets/flaticon/png/024-cogwheel.png",
                style="width: 4rem; height: 4rem"
            )
            .uk-margin-small-left.align-self-bottom
                h3 Pengaturan Buku Kas
                span Pengaturan

    div(class="uk-hidden@m" uk-grid)
        .uk-width-1-1.uk-flex
            h4 Pengaturan Buku Kas

</template>

<script>
export default {
    name: 'pengaturan-buku-kas',

}
</script>