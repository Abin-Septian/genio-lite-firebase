<template lang="pug">
  div.uk-navbar-container.uk-sticky.uk-sticky-below.uk-sticky-fixed(uk-sticky="media: 960")
    div.uk-containeruk-container-expand.bg-light.border-bottom
      nav.uk-navbar
        div.uk-navbar-left
          a.uk-navbar-item.uk-logo(href="../" class="uk-visible@m") Genio - Lite 
          a
            button.uk-button.uk-button-primary(class="uk-hidden@m") Hamburger
        div.uk-navbar-right
          ul.uk-navbar-nav(class="uk-visible@m")
            li
                a(href="../proPro") Test
            li.uk-active
                a(href="./Documentation") Test
            li
                a
                  img.rounded-circle.bg-secondary.text-center(src="@/assets/logo.png" style="height:40px; width:40px;")
                  div(uk-drop="animation: uk-animation-slide-top-small; duration: 100")
                    div.uk-card.uk-card-body.uk-card-default(uk-grid-small)
                      button.uk-button.uk-button-primary Test
                      button.uk-button.uk-button-primary Test
                      button.uk-button.uk-button-primary Test
                      button.uk-button.uk-button-primary Test

          ul.uk-navbar-nav(class="uk-hidden@m uk-hidden@m")
            li
                a
                  img.rounded-circle.bg-secondary.text-center(src="@/assets/logo.png" style="height:40px; width:40px;")
                  div(uk-drop="mode:click")
                    div.uk-card.uk-card-body.uk-card-default

</template>

<script>
export default {
    
};
</script>