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
        div(uk-grid)
            div(class="uk-width-1-2@m uk-width-1-1@m")
                h4 Pemasukan
                ul 
                    li satu
                    li dua
                    li tiga
                hr
                div
                    input.uk-input.uk-width-3-4(type="text" placeholder="Masukkan Kategori")
                    button.uk-button.uk-button-primary.uk-width-1-4 Tambah
            div(class="uk-width-1-2@m uk-width-1-1@m")
                h4 Pengeluaran
                ul 
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
                hr
                div
                    input.uk-input.uk-width-3-4(type="text" placeholder="Masukkan Kategori")
                    button.uk-button.uk-button-primary.uk-width-1-4 Tambah


</template>

<script>
export default {
    name: 'kategori',

}
</script>