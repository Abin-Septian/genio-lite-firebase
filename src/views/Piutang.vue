<template lang="pug">
.uk-container.app-container-small
    div(class="uk-visible@m" uk-grid)
        .uk-width-1-2.uk-flex
            img(src="../assets/flaticon/png/005-tick.png" style="width: 4rem; height: 4rem;")
            .align-self-bottom.uk-margin-small-left
                h3 Buku Piutang
                span Catat Piutang Anda
        .uk-width-1-2.uk-flex
            .uk-width-1-2.uk-flex.uk-flex-right
            .uk-width-1-2.uk-flex-right
                .uk-text-right.uk-text-bold Saldo
                blockquote.uk-text-right.uk-text-lead.uk-text-primary Rp. 1.000.000,-
        .uk-width-1-2.uk-flex
            span.icon-arrow-left.align-self-center(uk-tooltip="title:bulan sebelumnya;")
            span.px-4.align-self-center.uk-text-capitalize januari 2020
            span.icon-arrow-right.align-self-center(uk-tooltip="title:bulan selanjutnya; pos: top")
        .uk-width-1-2.uk-flex.uk-flex-right
            button.uk-button-primary.uk-text-capitalize.uk-flex.uk-flex-around.uk-width-2-5(uk-toggle="target: #modal-piutang" type="button")
                span.align-self-center.icon-pemasukan
                span.align-self-center Input Piutang

    .uk-container.uk-container-small(class="uk-hidden@m", uk-grid, uk-flex)
        .uk-width-1-2.uk-flex.uk-flex-around
            span.icon-arrow-left.align-self-center
            span.px-4.align-self-center.uk-text-capitalize januari 2020
            span.icon-arrow-right.align-self-center
        .uk-width-1-2
            button.uk-button.uk-button-primary.uk-text-capitalize.uk-flex.uk-width-1-1(uk-toggle="target: #modal-piutang" type="button")
                span.align-self-center.uk-width-1-1 Input Piutang
  
    table-content(:datas="allPemasukan")

    #modal-piutang(uk-modal)
        .uk-modal-dialog
            button.uk-modal-close-default(type="button" uk-close)
            .uk-modal-header
                h2.uk-modal-title Form Piutang
            .uk-modal-body
                form
                    fieldset.uk-fieldset
                        .uk-margin
                            label Tanggal Piutang
                            date-picker.uk-width-1-1
                        .uk-margin
                            label
                                input.uk-checkbox(type="checkbox" v-model="toggle" true-value="yes" false-value="no")
                                span.uk-margin-small-left Tanggal Jatuh Tempo
                            date-picker.uk-width-1-1(v-if="toggle === 'yes'")
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
	name: "buku-piutang",
	data() {
		return {
            toggle: 'no',
        };
	},
	components: {
		TableContent,
		DatePicker,
	},
	computed: {
		...mapGetters(["allPemasukan"])
	}
};
</script>
