<template lang="pug">
.uk-container.app-container-small
    div(class="uk-visible@m", uk-grid)
        .uk-width-1-2.uk-flex
            img.align-self-bottom.uk-margin-small-right(
                src="../assets/flaticon/png/005-tick.png",
                style="width: 4rem; height: 4rem"
            )
            .align-self-bottom.uk-margin-small-left
                h3 Buku
                span Buku Kas
        .uk-width-1-2.uk-flex
            .uk-width-1-2.uk-flex.uk-flex-right
            .uk-width-1-2.uk-flex.uk-flex-right
                    div test
        .uk-width-1-4.uk-flex
            span.icon-arrow-left.align-self-center
            span.px-4.align-self-center.uk-text-capitalize januari 2020
            span.icon-arrow-right.align-self-center
        .uk-width-3-4.uk-flex.uk-flex-right
            button.uk-button-primary.uk-text-capitalize.uk-flex.uk-margin-small-right(uk-toggle="target: #modal-pemasukan" type="button")
                span.align-self-center.icon-pemasukan
                span.align-self-center Input Pemasukan
            button.uk-button-default.uk-text-capitalize.uk-flex(uk-toggle="target: #modal-pengeluaran" type="button")
                span.align-self-center.icon-pengeluaran
                span.align-self-center Input Pengeluaran

    .uk-container.uk-container-small(class="uk-hidden@m", uk-grid, uk-flex)
        .uk-width-1-1.uk-flex.uk-flex-around
            button.uk-button.uk-button-primary.uk-text-capitalize.uk-flex(uk-toggle="target: #modal-pemasukan" type="button")
                span.align-self-center.icon-pemasukan
                span.align-self-center Pemasukan
            button.uk-button.uk-button-default.uk-text-capitalize.uk-flex(uk-toggle="target: #modal-pengeluaran" type="button")
                span.align-self-center.icon-pengeluaran
                span.align-self-center Pengeluaran
        .uk-width-1-1.uk-flex.uk-flex-around
            span.icon-arrow-left.align-self-center
            span.px-4.align-self-center.uk-text-capitalize januari 2020
            span.icon-arrow-right.align-self-center

    table-content(:datas="allPemasukan")

    #modal-pemasukan(uk-modal)
        .uk-modal-dialog
            button.uk-modal-close-default(type="button" uk-close)
            .uk-modal-header
                h2.uk-modal-title Form Pemasukan
            .uk-modal-body
                form
                    fieldset.uk-fieldset
                        .uk-margin
                            label Tanggal
                            date-picker.uk-width-1-1
                        .uk-margin
                            label Kategori
                            select.uk-select
                                option option 1
                        .uk-margin
                            label Deskripsi
                            textarea.uk-textarea(rows="3")
                        .uk-margin
                            label Nominal
                            input.uk-input(type="text")
            .uk-modal-footer.uk-flex.uk-flex-right
                button.uk-button.uk-button-default.uk-modal-close.uk-margin-small-right(type="button") Batal
                a.uk-button.uk-button-primary(href="#modal-group-2" uk-toggle) Simpan

    #modal-pengeluaran(uk-modal)
        .uk-modal-dialog
            button.uk-modal-close-default(type="button" uk-close)
            .uk-modal-header
                h2.uk-modal-title Form Pengeluaran
            .uk-modal-body
                form
                    fieldset.uk-fieldset
                        .uk-margin
                            label Tanggal
                            date-picker.uk-width-1-1
                        .uk-margin
                            label Kategori
                            select.uk-select
                                option option 1
                        .uk-margin
                            label Deskripsi
                            textarea.uk-textarea(rows="3")
                        .uk-margin
                            label Nominal
                            input.uk-input(type="text")
            .uk-modal-footer.uk-flex.uk-flex-right
                button.uk-button.uk-button-default.uk-modal-close.uk-margin-small-right(type="button") Batal
                a.uk-button.uk-button-primary(href="#modal-group-2" uk-toggle) Simpan
      
</template>

<script>
import { mapGetters } from "vuex";
import TableContent from "@/components/TableContent";
import DatePicker from "vue2-datepicker";

export default {
	name: "buku-kas",
	components: {
        TableContent,
		DatePicker
	},
	computed: {
		...mapGetters(["allPemasukan"])
	}
};
</script>
