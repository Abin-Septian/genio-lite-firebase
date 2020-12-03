<template lang="pug">
div
  navbar
  sidenav(class="uk-visible@m")
  .uk-margin-medium
    .app-main-container.uk-position-relative
      router-view.uk-container
</template>

<script>
import navbar from "@/components/Navbar";
import sidenav from "@/components/Sidenav";

export default {
  name: "dashboard",
  components: {
    navbar,
    sidenav,
  },
};
</script>