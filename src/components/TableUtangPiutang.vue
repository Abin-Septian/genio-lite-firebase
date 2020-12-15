<template lang="pug">
.uk-margin-top.uk-card.uk-card-default.uk-card-body
    table.uk-table.uk-table-responsive.uk-table-divider.uk-table-striped
        thead
            tr
                th.uk-text-center Tanggal
                th.uk-text-center Jatuh Tempo
                th.uk-text-center Deskripsi
                th.uk-text-center Nominal
                //- th.uk-text-center Saldo
                th.uk-text-center Edit
        tbody
            tr(v-for="(data, index) in datas" :key="index")
                td.uk-text-center {{ data.tanggal }}
                td.uk-text-center {{ data.jatuhTempo }}
                td {{ data.deskripsi }}
                td.uk-flex
                    .uk-width-1-6 Rp. 
                    .uk-width-5-6.uk-text-right {{ data.nominal }}
                //- td 
                td 

    hr

    ul.uk-pagination.uk-flex-center(uk-margin)
        li
            a(href="#")
                span(uk-pagination-previous)
        li
            a(href="#") 1
        li.uk-disabled
            span ...
        li
            a(href="#") 4
        li.uk-active
            span 5
        li
            a(href="#") 6
        li.uk-disabled
            span ...
        li
            a(href="#") 10
        li
            a(href="#") 
                span(uk-pagination-next) 

</template>

<script>
export default {
	name: "table",
	props: {
		datas: null
	}
};
</script>
