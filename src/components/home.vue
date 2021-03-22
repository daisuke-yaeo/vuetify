<template>
  <v-container>
    <h2>HOME画面</h2>

    <v-row>
      <!-- 1列目のカード -->
      <v-col cols="12">
      <v-card color="#385F73" dark class="mxauto">
        <v-card-title class="headline">
          Unlimited music now
        </v-card-title>
        <v-card-subtitle>
          Listen to your favorite artists and albums whenever and wherever, online and offline.
        </v-card-subtitle>
        <v-card-actions>
          <v-btn text>Listen Now</v-btn>
        </v-card-actions>
      </v-card>
      </v-col><!-- /1列目のカード -->

      <!-- 2列目以降のカード -->
      <v-col v-for="(item, i) in items" :key="i" cols="6">
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>
              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" title>
              <v-img :src="item.src"/>
            </v-avatar>
          </div>
          <v-card-actions>
            <v-btn text>Read</v-btn>
            <!-- スペース開けるやつ -->
            <v-spacer/>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col><!-- /2列目以降のカード -->
    </v-row>

    <v-row class="text-center">
      <router-link to="/loding">
        ローディング中（くるくる表示）
      </router-link>
    </v-row>

    <v-row>
      <v-btn small color="primary" @click="this.datePickerShow">カレンダー</v-btn>
      <v-date-picker v-model="picker" v-if="dateFlag"
      locale="ja-jp" :day-format="date => new Date(date).getDate()">
      </v-date-picker>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data () {
    return {
      picker: '',
      dateFlag: '',
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding'
        }
      ]
    }
  },
  methods: {
    datePickerShow: function () {
      if (this.dateFlag) {
        this.picker = ''
        this.dateFlag = false
      } else {
        this.picker = new Date().toISOString().substr(0, 10)
        this.dateFlag = true
      }
    }
  },
  mounted: function () {
  },
  created () {
  }
}
</script>

<style>

</style>
