<template lang="pug">
.uk-container.app-container-small
    div(class="uk-visible@m", uk-grid)
        .uk-width-1-2.uk-flex
            img(
                src="../assets/flaticon/png/005-tick.png",
                style="width: 4rem; height: 4rem"
            )
            h3.uk-padding-small Buku Utang
        .uk-width-1-2.uk-flex
            .uk-width-1-2.uk-flex.uk-flex-right
            .uk-width-1-2.uk-flex.uk-flex-right
                div test
        .uk-width-1-2.uk-flex
            span.icon-arrow-left.align-self-center
            span.px-4.align-self-center.uk-text-capitalize januari 2020
            span.icon-arrow-right.align-self-center
        .uk-width-1-2.d-flex.justify-content-end
            button.uk-button-primary.uk-text-capitalize.uk-flex.uk-flex-around.uk-width-2-5
                span.align-self-center.icon-pemasukan
                span.align-self-center Input Utang

    .uk-container.uk-container-small(class="uk-hidden@m", uk-grid, uk-flex)
        .uk-width-1-2.uk-flex.uk-flex-around
            span.icon-arrow-left.align-self-center
            span.uk-margin-small.align-self-center.uk-text-capitalize Desember 2020
            span.icon-arrow-right.align-self-center
        .uk-width-1-2.uk-flex
            button.uk-button.uk-button-primary.uk-text-capitalize.uk-flex.uk-width-1-1
                span.align-self-center.uk-width-1-1 Input Utang

    table-content(:datas="allPemasukan")
</template>

<script>
import { mapGetters } from "vuex";
import TableContent from "@/components/TableContent";

export default {
	name: "buku-utang",
	components: {
		TableContent
	},
	computed: {
		...mapGetters(["allPemasukan"])
	}
};
</script>
