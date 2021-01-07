<template lang="pug">
    div.uk-container
        //- div.uk-position-top-center.uk-margin-medium-top
        //-     h3 Welcome to GENIO!
        div.uk-position-center
            div.uk-card.uk-card-default.uk-card-body.uk-padding-large.uk-padding-remove-top.uk-padding-remove-bottom
                //- div.uk-card-title.uk-position-top-center.uk-margin-small-top Please Login
                //- br
                div.uk-margin-top.uk-width-medium.alert.alert-danger.uk-text-center(v-if="error") {{error}}
                form(action="#" @submit.prevent="submit")
                    div.uk-card-body
                        label.uk-form-label(for="form-stacked-text" v-if="form.email") Email
                        div.uk-form-controls
                            input.uk-input(id="form-stacked-text" type="email" placeholder="Email" v-model="form.email")
                        br
                        label.uk-form-label(for="form-stacked-text" v-if="form.password") Password
                        div.uk-form-controls
                            input.uk-input(id="form-stacked-text" type="password" placeholder="Password" v-model="form.password")
                        hr.uk-divider-icon 
                        button.uk-button.uk-button-primary.uk-width-1-1.uk-margin-small-bottom(type="submit") Login
                        router-link(to="/register") 
                            button.uk-button.uk-button-danger.uk-width-1-1.uk-margin-small-bottom Register
                        .uk-text-center
                            span Forgot password ? 
                                span 
                                    router-link(to="/buku")  
                                        span Click here
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>