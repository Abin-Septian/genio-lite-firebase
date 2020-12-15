<template lang="pug">
.uk-container.app-container-small
    div(class="uk-visible@m", uk-grid)
        .uk-width-1-2.uk-flex
            img(
                src="../assets/flaticon/png/005-tick.png",
                style="width: 4rem; height: 4rem"
            )
            .align-self-bottom.uk-margin-small-left
                h3 Buku Utang
                span Catat Utang Anda
        .uk-width-1-2.uk-flex
            .uk-width-1-2.uk-flex.uk-flex-right
            .uk-width-1-2.uk-flex-right
                .uk-text-right.uk-text-bold Saldo
                blockquote.uk-text-right.uk-text-lead.uk-text-primary Rp. 1.000.000,-
        .uk-width-1-2.uk-flex
            span.icon-arrow-left.align-self-center(uk-tooltip="title:bulan sebelumnya;")
            span.px-4.align-self-center.uk-text-capitalize januari 2020
            span.icon-arrow-right.align-self-center(uk-tooltip="title:bulan selanjutnya; pos: top")
        .uk-width-1-2.d-flex.justify-content-end
            button.uk-button-primary.uk-text-capitalize.uk-flex.uk-flex-around.uk-width-2-5(uk-toggle="target: #modal-utang" type="button"  uk-tooltip="title: catat utang baru; pos: bottom")
                span.align-self-center.icon-pemasukan
                span.align-self-center Input Utang

    .uk-container.uk-container-small(class="uk-hidden@m", uk-grid, uk-flex)
        .uk-width-1-2.uk-flex.uk-flex-around
            span.icon-arrow-left.align-self-center
            span.uk-margin-small.align-self-center.uk-text-capitalize Desember 2020
            span.icon-arrow-right.align-self-center
        .uk-width-1-2.uk-flex
            button.uk-button.uk-button-primary.uk-text-capitalize.uk-flex.uk-width-1-1(uk-toggle="target: #modal-utang" type="button")
                span.align-self-center.uk-width-1-1 Input Utang

    table-utang(:datas="daftarUtang")

    #modal-utang(uk-modal)
        .uk-modal-dialog
            button.uk-modal-close-default(type="button" uk-close @click="reset()")
            .uk-modal-header
                h2.uk-modal-title Form Utang
            .uk-modal-body
                form()
                    fieldset.uk-fieldset
                        .uk-margin
                            label Tanggal
                            date-picker.uk-width-1-1(v-model="formUtang.tanggal" value-type="format" format="YYYY-MM-DD")
                        .uk-margin
                            label
                                input.uk-checkbox(type="checkbox" v-model="toggle" true-value="yes" false-value="no")
                                span.uk-margin-small-left Tanggal Jatuh Tempo
                            date-picker.uk-width-1-1(v-if="toggle === 'yes'" v-model="formUtang.jatuhTempo" value-type="format" format="YYYY-MM-DD")
                        .uk-margin
                            label Deskripsi
                            textarea.uk-textarea(rows="3" v-model="formUtang.deskripsi")
                        .uk-margin
                            label Nominal
                            input.uk-input(type="text" v-model="formUtang.nominal")
            .uk-modal-footer.uk-flex.uk-flex-right
                button.uk-button.uk-button-default.uk-modal-close.uk-margin-small-right(type="button" @click="reset()") Batal
                button.uk-button.uk-button-primary.uk-modal-close(type="button" @click="submit(formUtang)") Simpan
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TableUtang from "@/components/TableUtangPiutang";
import DatePicker from "vue2-datepicker";

export default {
	name: "buku-utang",
	data() {
		return {
            toggle: 'no',
            formUtang : {
                    tanggal :  '',
                    jatuhTempo:  '',
                    deskripsi :  '',
                    nominal : '',
                },
        };
	},
	components: {
        TableUtang,
        DatePicker,
	},
	computed: {
		...mapGetters({
                daftarUtang: 'allUtang'
            })
    },
    methods: {
        ...mapActions(['saveUtang']),
        submit(payload) {
            this.saveUtang(payload);

            Object.assign(this.$data, this.$options.data());
        },
        reset() {
            Object.assign(this.$data, this.$options.data());
        }
    }
};
</script>
