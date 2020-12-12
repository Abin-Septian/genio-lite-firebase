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
                    li satu
                    li dua
                    li tiga
                div
                    input.uk-input(class= "uk-width-3-4@m" type="text" placeholder="Masukkan Kategori")
                    button.uk-button.uk-button-primary(class="uk-width-1-4@m") Tambah
            div(class="uk-width-1-2@m uk-width-1-1@m")
                h4.uk-margin Pengeluaran
                ul.uk-list.uk-list-striped 
                    li satu
                    li dua
                    li tiga
                    li satu
                    li dua
                    li tiga
                    li satu
                    li dua
                    li tiga
                    li satu
                    li dua
                    li tiga
                    li satu
                    li dua
                    li tiga
                div
                    input.uk-input(class= "uk-width-3-4@m" type="text" placeholder="Masukkan Kategori")
                    button.uk-button.uk-button-primary(class="uk-width-1-4@m") Tambah


</template>

<script>
export default {
    name: 'kategori',

}
</script>