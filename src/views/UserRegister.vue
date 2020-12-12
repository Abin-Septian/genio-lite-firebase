<template lang="pug">
    div.uk-container
        //- div.uk-position-top-center.uk-margin-medium-top
        //-     h3 Welcome to GENIO!
        div.uk-position-center
            div.uk-card.uk-card-default.uk-card-body.uk-padding-large.uk-padding-remove-top.uk-padding-remove-bottom
                //- div.uk-card-title.uk-position-top-center.uk-margin-small-top Please Login
                //- br
                div.uk-card-body
                    label.uk-form-label(for="form-stacked-text") First Name
                    div.uk-form-controls
                        input.uk-input(id="form-stacked-text" type="text")
                    label.uk-form-label(for="form-stacked-text") Last Name
                    div.uk-form-controls
                        input.uk-input(id="form-stacked-text" type="text")
                    label.uk-form-label(for="form-stacked-text") Email
                    div.uk-form-controls
                        input.uk-input(id="form-stacked-text" type="text")
                    br
                    label.uk-form-label(for="form-stacked-text") Password
                    div.uk-form-controls
                        input.uk-input(id="form-stacked-text" type="password")
                    br
                    label.uk-form-label(for="form-stacked-text") Re-Enter Password
                    div.uk-form-controls
                        input.uk-input(id="form-stacked-text" type="password")
                    hr.uk-divider-icon
                    router-link(to="/buku")
                        button.uk-button.uk-button-primary.uk-width-1-1.uk-margin-small-bottom Register
                    .uk-text-center
                        span have an acount ? 
                            span 
                                router-link(to="/login")  
                                    span Login

</template>

<script>
export default {
    name:"",

}
</script>