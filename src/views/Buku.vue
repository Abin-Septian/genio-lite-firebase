<template lang="pug">
div
  .uk-container.app-container-small.uk-padding-remove
    div(class="uk-visible@m", uk-grid)
      .uk-widht-1-4.media
        span.icon-arrow-left.align-self-center
        span.px-4.align-self-center.uk-text-capitalize januari 2020
        span.icon-arrow-right.align-self-center
      .uk-width-3-4.d-flex.justify-content-end.p-0
        button.uk-button-default.app-bg-success.uk-text-capitalize.app-text-light.media.mr-3
          span.align-self-center.icon-pemasukan
          span.align-self-center Catat Pemasukan
        button.uk-button-default.app-bg-danger.uk-text-capitalize.app-text-light.media
          span.align-self-center.icon-pengeluaran
          span.align-self-center Catat Pengeluaran

    .uk-container.uk-container-small(class="uk-hidden@m", uk-grid, uk-flex)
      .uk-width-1-2
        button.uk-button.uk-button-default.app-bg-success.uk-text-capitalize.app-text-light.media.mr-3
          span.align-self-center.icon-pemasukan
          span.align-self-center Pemasukan
      .uk-width-1-2
        button.uk-button.uk-button-default.app-bg-danger.uk-text-capitalize.app-text-light.media
          span.align-self-center.icon-pengeluaran
          span.align-self-center Pengeluaran
      .uk-width-1-1.media.uk-flex-around
        span.icon-arrow-left.align-self-center
        span.px-4.align-self-center.uk-text-capitalize januari 2020
        span.icon-arrow-right.align-self-center

    .uk-margin-top.uk-card.uk-card-default.uk-card-body
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
  name: "buku",
};
</script>