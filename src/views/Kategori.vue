<template lang="pug">
.uk-container.app-container-small
    div(class="uk-visible@m" uk-grid)
        .uk-width-1-1.uk-flex
            img.align-self-bottom.uk-margin-small-right(
                src="../assets/flaticon/png/013-file.png",
                style="width: 4rem; height: 4rem"
            )
            .uk-margin-small-left.align-self-bottom
                h3 Kategori Buku Kas
                span Pengaturan

    div(class="uk-hidden@m" uk-grid)
        .uk-width-1-1.uk-flex
            h4 Kategori Buku Kas
    
    .uk-card.uk-card-default.uk-card-hover.uk-card-body.uk-margin-medium-top.uk-border-rounded
        div.uk-text-capitalize(uk-grid)
            div(class="uk-width-1-2@m uk-width-1-1@m")
                h4.uk-margin Pemasukan
                ul.uk-list.uk-list-striped
                    li(v-for="(item, index) in allKategori.pemasukan" :key="index") {{ item }}
                div
                    input.uk-input(class= "uk-width-3-4@m" v-model="pemasukan" type="text" placeholder="Masukkan Kategori" @keyup.enter="saveKategoriPemasukan(pemasukan)")
                    button.uk-button.uk-button-primary(class="uk-width-1-4@m" @click="saveKategoriPemasukan(pemasukan)" uk-tooltip="title: Tambah kategori pemasukan; pos: bottom") Tambah
            div(class="uk-width-1-2@m uk-width-1-1@m")
                h4.uk-margin Pengeluaran
                ul.uk-list.uk-list-striped 
                    li(v-for="(item, index) in allKategori.pengeluaran" :key="index") {{ item }}
                div
                    input.uk-input(class= "uk-width-3-4@m" v-model="pengeluaran" type="text" placeholder="Masukkan Kategori" @keyup.enter="saveKategoriPengeluaran(pengeluaran)")
                    button.uk-button.uk-button-primary(class="uk-width-1-4@m" @click="saveKategoriPengeluaran(pengeluaran)" uk-tooltip="title: Tambah kategori pengeluaran; pos: bottom") Tambah


</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'kategori',
    data() {
        return {
           pemasukan : '',
           pengeluaran : '' 
        }
    },
    computed: {
        ...mapGetters(['allKategori']),
    },
    methods: {
        ...mapActions(['saveKategoriPemasukan', 'saveKategoriPengeluaran']),
    }
}
</script>