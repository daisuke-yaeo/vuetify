<template>
  <v-app>
    <!-- ナビゲーションメニュー -->
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <!-- ナビタイトル -->
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="naviTitle blue--text">
              NAVIGATION
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- 横線 -->
        <v-divider/>

        <!-- ナビ内容一覧 -->
        <v-list dense nav>
          <!-- ネスト化しない場合 -->
          <!-- <v-list-item v-for="list in navList" :key="list"> -->
            <!-- アイコン -->
            <!-- <v-list-item-icon>
              <v-icon>{{list.icon}}</v-icon>
            </v-list-item-icon> -->
            <!-- ナビ名 -->
            <!-- <v-list-item-content>
              <v-list-item-title>{{list.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->

          <!-- ネスト化されたナビメニュー -->
          <v-list-group v-for="nvList in navList" :key="nvList" :prepend-icon="nvList.icon"
          no-action :append-icon="nvList.infoList ? undefind : ''">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{nvList.name}}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="info in nvList.infoList" :key="info" :to="info.infoLink">
              <v-list-item-content>
                <v-list-item-title>{{info.infoName}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>

      </v-container>
    </v-navigation-drawer><!-- /ナビゲーションメニュー -->

    <!-- 共通のヘッダー -->
    <v-app-bar app dark v-if="$route.name !== 'login'" clipped-left
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <!-- <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      /> -->
      <!-- ハンバーガーアイコン -->
      <v-btn @click="drawer=!drawer">
        <i class="fa fa-bars"></i>
      </v-btn>
      <!-- スペース開けるやつ -->
      <v-spacer/>

      <v-tooltip bottom color="light-blue">
        <template v-slot:activator="{on}">
          <!-- ホームアイコン -->
          <router-link to="/home" class="mr-5">
            <i class="fa fa-home fa-2x" v-on="on" style="color: #ffffff;"></i>
          </router-link>
        </template>
        <span>HOMEへ</span>
      </v-tooltip>

      <v-tooltip bottom color="#ff0000">
        <template v-slot:activator="{on}">
          <!-- ログアウトアイコン -->
          <router-link to="/">
            <i class="fa fa-upload fa-2x" v-on="on" style="color: #ffffff;"></i>
          </router-link>
        </template>
        <span>ログアウト</span>
      </v-tooltip>

    </v-app-bar><!-- /共通のヘッダー -->

    <v-content>
      <!-- ここでいろんなページ切り替えて表示する -->
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },
  data: () => ({
    drawer: '',
    navList: [
      {
        name: 'ナビリスト1',
        icon: 'mdi-account-circle',
        infoList: [
          {
            infoName: 'アカウント一覧',
            infoLink: '/accountInfo'
          }
        ]
      },
      {
        name: 'ナビリスト2',
        icon: 'mdi-badge-account-horizontal',
        infoList: [
          {
            infoName: 'アカウント新規作成',
            infoLink: '/accountRegist'
          }
        ]
      },
      {
        name: 'ナビリスト3',
        icon: 'mdi-run-fast',
        infoList: [
          {
            infoName: '詳細リスト1',
            infoLink: '/page2'
          }
        ]
      },
      {
        name: 'ナビリスト4',
        icon: 'mdi-camera-wireless',
        infoList: [
          {
            infoName: '詳細リスト1',
            infoLink: '/page5'
          }
        ]
      },
      {
        name: 'ナビリスト5',
        icon: 'mdi-cog',
        infoList: [
          {
            infoName: '詳細リスト1',
            infoLink: '/page6'
          }
        ]
      }
    ]
  }),
  methods: {
  },
  mounted: function () {
  },
  watch: {
  }
}
</script>
