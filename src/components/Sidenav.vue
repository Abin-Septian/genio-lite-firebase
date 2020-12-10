<template lang="pug">
.tm-sidebar-left
  ul.uk-nav.uk-nav-default
    div(v-for="(item, index) in items", :key="index") 
      li.p2.uk-nav-header.app-bg-5.text-white.media
        span.align-self-center.mr-2(v-bind:class="item.icon")
        span.align-self-center {{ item.name }}
      router-link(v-for="child in item.child", :key="item.id" v-bind:to="child.path")
        li.uk-padding-small.bg-dark
          .ml-4.text-white {{ child.name }}
  //- ul(uk-accordion="collapsible: false")
  //-     li(v-for="item in items" :key="index")
  //-         a.uk-accordion-title(href="#") {{ item.name }}
  //-         div.uk-accordion-content.uk-margin-small
  //-             li(v-for="child in item.child" :key="index")
  //-                 router-link.uk-text-small(v-bind:to="child.path") {{ child.name }}
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Buku Kas",
          icon: "icon-book bg-white",
          child: [
            {
              name: "Buku",
              path: "/buku",
            },
          ],
        },
        {
          name: "Utang Piutang",
          icon: "icon-newspaper bg-white",
          child: [
            {
              name: "Utang",
              path: "/utang",
            },
            {
              name: "Piutang",
              path: "/piutang",
            },
          ],
        },
        {
          name: "Laporan Kas",
          icon: "icon-graph-up bg-white",
          child: [
            {
              name: "Harian",
              path: "/laporan_harian",
            },
            {
              name: "Bulanan",
              path: "/laporan_bulanan",
            },
            {
              name: "Tahunan",
              path: "/laporan_tahunan",
            },
          ],
        },
        {
          name: "Peralatan",
          icon: "icon-tools bg-white",
          child: [
            {
              name: "Invoice",
              path: "/invoice",
            },
            {
              name: "Catatan",
              path: "/catatan",
            },
          ],
        },
        {
          name: "Pengaturan",
          icon: "icon-gear bg-white",
          child: [
            {
              name: "Kategori",
              path: "/kategori",
            },
            {
              name: "Buku Kas",
              path: "/buku_kas",
            },
            {
              name: "Akun Saya",
              path: "/profile",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.tm-sidebar-left {
  position: fixed;
  top: 80px;
  width: 240px;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px #e5e5e5 solid;
  overflow: auto;
}
</style>