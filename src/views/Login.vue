<template lang="pug">
    div.uk-container
        //- div.uk-position-top-center.uk-margin-medium-top
        //-     h3 Welcome to GENIO!
        div.uk-position-center
            div.uk-card.uk-card-default.uk-card-body.uk-padding-large.uk-padding-remove-top.uk-padding-remove-bottom
                //- div.uk-card-title.uk-position-top-center.uk-margin-small-top Please Login
                //- br
                div.uk-card-body
                    label.uk-form-label(for="form-stacked-text" v-if="username") Username
                    div.uk-form-controls
                        input.uk-input(id="form-stacked-text" type="text" placeholder="Username" v-model="username")
                    br
                    label.uk-form-label(for="form-stacked-text" v-if="password") Password
                    div.uk-form-controls
                        input.uk-input(id="form-stacked-text" type="password" placeholder="Password" v-model="password")
                    hr.uk-divider-icon 
                    button.uk-button.uk-button-primary.uk-width-1-1.uk-margin-small-bottom Login
                    router-link(to="/register") 
                        button.uk-button.uk-button-danger.uk-width-1-1.uk-margin-small-bottom Register
</template>

<script>
export default {
    data() {
        return {
            username: null,
            password: null,
        }
    },
}
</script>