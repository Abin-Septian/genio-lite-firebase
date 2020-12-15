<template lang="pug">
.uk-margin-top.uk-card.uk-card-default.uk-card-body
    table.uk-table.uk-table-responsive.uk-table-divider.uk-table-striped
        thead
            tr
                th Tanggal
                th Jatuh Tempo
                th Deskripsi
                th Nominal
                //- th Saldo
                th Edit
        tbody
            tr(v-for="(data, index) in datas" :key="index")
                td {{ data.tanggal }}
                td {{ data.jatuhTempo }}
                td {{ data.deskripsi }}
                td.uk-text-right Rp. {{ data.nominal }}
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
