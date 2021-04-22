<template>
  <v-form ref="form" v-model="validForm">
    <v-card>
      <v-card-title> Login </v-card-title>
      <v-card-text>
        <v-layout>
          <v-col>
            <v-row v-show="error !== ''" align-content="center">
              <v-alert dense outlined type="error" data-cy="error">
                {{ error }}
              </v-alert>
            </v-row>
            <v-row>
              <v-text-field
                v-model="formData.username"
                label="Username"
                :rules="[notEmpty]"
              />
            </v-row>
            <v-row>
              <v-text-field
                v-model="formData.password"
                label="Password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                :rules="[notEmpty]"
                @click:append="showPassword = !showPassword"
              />
            </v-row>
          </v-col>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn type="submit" color="primary" data-cy="button">Log in</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="js">
export default {
  name: 'LoginForm',

  data: () => ({
    error: '',
    validForm: true,
    showPassword: false,
    notEmpty: (value) =>
      !!value || 'This field is required',
    formData: {
      username: '',
      password: '',
    },
  }),
}
</script>
