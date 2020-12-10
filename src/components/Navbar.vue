<template lang="pug">
.uk-navbar-container.uk-sticky.uk-sticky-below.uk-sticky-fixed(
  uk-sticky="media: 960"
)
  .uk-containeruk-container-expand.bg-light.border-bottom
    nav.uk-navbar
      .uk-navbar-left
        a.uk-navbar-item.uk-logo(href="../", class="uk-visible@m") Genio - Lite
        a.icon-hamburger.ml-4(class="uk-hidden@m")
      .uk-navbar-right
        ul.uk-navbar-nav(class="uk-visible@m")
          li
            a(href="#") Test
          li.uk-active
            a(href="#") Test
          li
            a
              img.rounded-circle.bg-secondary.text-center(
                src="@/assets/logo.png",
                style="height: 50px; width: 50px"
              )
              <div uk-dropdown="mode: click">
                <ul class="uk-nav uk-dropdown-nav">
                  <li class="uk-active"><a href="#">Active</a></li>
                  <li><a href="#">Item</a></li>
                  <li class="uk-nav-header">Header</li>
                  <li><a href="#">Item</a></li>
                  <li><a href="#">Item</a></li>
                  <li class="uk-nav-divider"></li>
                  <li><a href="#">Item</a></li>
                </ul>
                hr
                .d-flex
                    button.btn.btn-danger.btn-block.uk-text-capitalize logout
              </div>

        ul.uk-navbar-nav(class="uk-hidden@m uk-hidden@m")
          li
            a
              img.rounded-circle.bg-secondary.text-center(
                src="@/assets/logo.png",
                style="height: 40px; width: 40px"
              )
              div(uk-drop="mode:click")
                .uk-card.uk-card-body.uk-card-default
                  div test
                  hr
                  div test
                  hr
                  div test
                  hr
                  .d-flex.justify-content-end
                    button.btn.btn-danger.uk-text-capitalize logout
</template>

<script>
export default {};
</script>