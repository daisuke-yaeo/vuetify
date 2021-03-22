<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="150"
        />
      </v-col>

      <v-col class="mb-5">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to びゅーてぃふぃー
        </h1>
      </v-col>

      <v-col cols="12">
        <div class="mb-3">
          <input type="text" maxlength="5" placeholder="ID" class="input_config">
        </div>
        <div>
          <input type="text" maxlength="12" placeholder="パスワード" class="input_config">
        </div>
      </v-col>

      <v-col>
        <router-link to="/home">
          <v-btn small color="primary" @click="this.login">ログイン</v-btn>
        </router-link>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      tes: ''
    }
  },
  methods: {
    login: function () {
    }
  },
  mounted: function () {
  }
}
</script>
<style scoped>
.input_config{
  border: 2px solid #87cefa;
  border-radius: 0.67em;   /* 角丸 */
  padding: 0.5em;
  background-color: snow;
  width: 15em;
  height: 30px;
}
</style>
