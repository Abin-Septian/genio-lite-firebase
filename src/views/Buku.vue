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
            .uk-width-1-2.uk-flex-right
                .uk-text-right.uk-text-bold Saldo
                blockquote.uk-text-right.uk-text-lead.uk-text-primary Rp. 1.000.000,-
        .uk-width-1-4.uk-flex
            span.icon-arrow-left.align-self-center(uk-tooltip="title:bulan sebelumnya;")
            span.px-4.align-self-center.uk-text-capitalize januari 2020
            span.icon-arrow-right.align-self-center(uk-tooltip="title:bulan selanjutnya; pos: top")
        .uk-width-3-4.uk-flex.uk-flex-right
            button.uk-button-primary.uk-text-capitalize.uk-flex.uk-margin-small-right(uk-toggle="target: #modal-pemasukan" type="button" uk-tooltip="title: Tambah transaksi pemasukan; pos: bottom")
                span.align-self-center.icon-pemasukan
                span.align-self-center Input Pemasukan
            button.uk-button-default.uk-text-capitalize.uk-flex(uk-toggle="target: #modal-pengeluaran" type="button" uk-tooltip="title: Tambah transaksi pengeluaran; pos: bottom")
                span.align-self-center.icon-pengeluaran
                span.align-self-center Input Pengeluaran

    .uk-container.uk-container-small(class="uk-hidden@m", uk-grid, uk-flex)
        .uk-width-1-1.uk-flex
            img.align-self-bottom.uk-margin-small-right(
                src="../assets/flaticon/png/005-tick.png",
                style="width: 4rem; height: 4rem"
            )
            .align-self-bottom.uk-margin-small-left
                h3 Buku
                span Buku Kas
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

    table-content(:datas="bukuKas")

    #modal-pemasukan(uk-modal)
        .uk-modal-dialog
            button.uk-modal-close-default(type="button" uk-close @click="reset()")
            .uk-modal-header
                h2.uk-modal-title Form Pemasukan
            .uk-modal-body
                form
                    fieldset.uk-fieldset
                        .uk-margin
                            label Tanggal
                            date-picker.uk-width-1-1(v-model="formPemasukan.tanggal" value-type="format" format="YYYY-MM-DD")
                        .uk-margin
                            label Kategori
                            select.uk-select(v-model="formPemasukan.kategori")
                                option(v-for="(kategori, index) in kategori.pemasukan" :key="kategori.index") {{ kategori }}
                        .uk-margin
                            label Deskripsi
                            textarea.uk-textarea(rows="3" v-model="formPemasukan.deskripsi")
                        .uk-margin
                            label Nominal
                            input.uk-input(type="text" v-model="formPemasukan.nominal")
            .uk-modal-footer.uk-flex.uk-flex-right
                button.uk-button.uk-button-default.uk-modal-close.uk-margin-small-right(type="button" @click="reset()") Batal
                button.uk-button.uk-button-primary.uk-modal-close(type="button" @click="submit( formPemasukan )") Simpan

    #modal-pengeluaran(uk-modal)
        .uk-modal-dialog
            button.uk-modal-close-default(type="button" uk-close @click="reset()")
            .uk-modal-header
                h2.uk-modal-title Form Pengeluaran
            .uk-modal-body
                form
                    fieldset.uk-fieldset
                        .uk-margin
                            label Tanggal
                            date-picker.uk-width-1-1(v-model="formPengeluaran.tanggal" value-type="format" format="YYYY-MM-DD")
                        .uk-margin
                            label Kategori
                            select.uk-select(v-model="formPengeluaran.kategori")
                                option(v-for="(kategori, index) in kategori.pengeluaran" :key="kategori.index") {{ kategori }}
                        .uk-margin
                            label Deskripsi
                            textarea.uk-textarea(rows="3" v-model="formPengeluaran.deskripsi")
                        .uk-margin
                            label Nominal
                            input.uk-input(type="text" v-model="formPengeluaran.nominal")
            .uk-modal-footer.uk-flex.uk-flex-right
                button.uk-button.uk-button-default.uk-modal-close.uk-margin-small-right(type="button" @click="reset()") Batal
                button.uk-button.uk-button-primary.uk-modal-close(type="button" @click="submit( formPengeluaran )") Simpan
      
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TableContent from "@/components/TableContent";
import DatePicker from "vue2-datepicker";

export default {
	name: "buku-kas",
	components: {
		TableContent,
		DatePicker
	},
	data() {
		return {
            formPemasukan: {
                tipe : 'pemasukan',
                tanggal: "",
                kategori: "",
                deskripsi: "",
                nominal: ""
            },
            formPengeluaran: {
                tipe : 'pengeluaran',
                tanggal: "",
                kategori: "",
                deskripsi: "",
                nominal: ""
            },
            pilihPeriode: '',
        }
	},
	computed: {
		...mapGetters({
            bukuKas : "allBukuKas",
            kategori: "allKategori" 
        }),
	},
	methods: {
        ...mapActions(['saveTransaksi']),
        submit( payload ) {
            this.saveTransaksi( payload );

            this.reset();
        },
        reset() {
            Object.assign(this.$data, this.$options.data())
        }
    }
};
</script>
