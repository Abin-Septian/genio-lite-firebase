<template lang="pug">
    div
        div.uk-container.app-container-small.uk-padding-remove
            div.col.row.p-0
                div.col-md-4.col-sm-12
                    a.uk-icon(href="" uk-icon="heart")
                div.col-md-8.col-sm-12.d-flex.justify-content-end.p-0
                    button.uk-button.uk-button-default.app-bg-success.mr-2.uk-text-capitalize Catat Pemasukan
                    button.uk-button.uk-button-default.app-bg-danger.uk-text-capitalize Catat Pengeluaran
            div.uk-margin-top.uk-card.uk-card-default.uk-card-body
                table.uk-table.uk-table-responsive.uk-table-divider.uk-table-striped.uk-padding-remove
                    thead
                        tr
                            th Table Heading 
                            th Table Heading
                            th Table Heading
                            th Table Heading
                            th Table Heading
                            th Table Heading
                            th Table Heading
                    tbody
                        tr
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                        tr
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                        tr
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                        tr
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                        tr
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                        tr
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                        tr
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                        tr
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                        tr
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                        tr
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data
                            td Table data

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
    name:'buku',

}
</script>