<template lang="pug">
.uk-container.app-container-small
    div(class="uk-visible@m", uk-grid)
        .uk-width-1-2.uk-flex
            img.align-self-bottom.uk-margin-small-right(
                src="../assets/flaticon/png/005-tick.png",
                style="width: 4rem; height: 4rem"
            )
            .align-self-bottom.uk-margin-small-left
                h3 Laporan Harian
                span Laporan

    .uk-container.uk-container-small(class="uk-hidden@m", uk-grid, uk-flex)
        .uk-width-1-1.uk-flex
            img.align-self-bottom.uk-margin-small-right(
                src="../assets/flaticon/png/005-tick.png",
                style="width: 4rem; height: 4rem"
            )
            .align-self-bottom.uk-margin-small-left
                h3 Laporan Harian
                span Laporan

</template>

<script>
export default {
    name: 'laporan-harian',

}
</script>