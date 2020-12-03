<template lang="pug">
div.tm-sidebar-left
    ul.uk-nav.uk-nav-default
        div(v-for="item in items" :key="index") 
            li.px-4.py-2.uk-nav-header.app-bg-5.text-white {{ item.name }}
                span.uk-icon(v-bind:uk-icon="item.icon")
            li.uk-padding-small.bg-dark(v-for="child in item.child" :key="item.id")
                router-link.text-white(v-bind:to="child.path") {{ child.name }}
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
                icon: "file-text",
                child: [
                    {
                        name:"Buku",
                        path:"/buku",
                    },
                ]
            },
            {
                name: "Utang Piutang",
                icon:"",
                child: [
                    {
                        name:"Utang",
                        path:"/utang",
                    },
                    {
                        name:"Piutang",
                        path:"/piutang",
                    },
                ]
            },
            {
                name: "Laporan Kas",
                icon:"",
                child: [
                    {
                        name:"Harian",
                        path:"/laporan_harian",
                    },
                    {
                        name:"Bulanan",
                        path:"/laporan_bulanan",
                    },
                    {
                        name:"Tahunan",
                        path:"/laporan_tahunan",
                    },
                ]
            },
            {
                name: "Peralatan",
                icon:"",
                child: [
                    {
                        name:"Invoice",
                        path:"/invoice",
                    },
                    {
                        name:"Catatan",
                        path:"/catatan",
                    },
                ]
            },
            {
                name: "Pengaturan",
                icon:"",
                child: [
                    {
                        name:"Kategori",
                        path:"/kategori",
                    },
                    {
                        name:"Buku Kas",
                        path:"/buku_kas",
                    },
                    {
                        name:"Akun Saya",
                        path:"/profile",
                    },
                ]
            },
        ]
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