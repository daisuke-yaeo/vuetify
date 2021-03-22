<template>
  <v-layout column justify-center align-center>
    <v-card>
      <v-card-title>
        アカウント一覧
        <v-spacer/>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="検索" sigle-line/>
      </v-card-title>
      <!-- テーブル -->
      <v-data-table :headers="headers" :items="users" :items-per-page="5" v-if="display"
      :search="search" sort-by="id" class="elevation-1">
        <template v-slot:top>
          <!-- 編集ダイアログ -->
          <v-dialog v-model="editDialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">アカウント編集</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field v-model="userInfo.email" label="メールアドレス"/>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="userInfo.name" label="名前"/>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="userInfo.memo" label="メモ"/>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn @click="close">閉じる</v-btn>
                <v-btn class="primary" @click="update">更新</v-btn>
                <v-spacer/>
              </v-card-actions>
            </v-card>
          </v-dialog><!-- /編集ダイアログ -->

          <!-- 削除確認メッセージダイアログ -->
          <v-dialog v-model="questionDialog" max-width="500px">
            <v-card>
              <v-card-text>
                <v-container>
                  <v-row class="text-center">
                    <v-col cols="12">
                      <v-icon large color="light-blue">mdi-help-circle</v-icon>
                    </v-col>
                    <v-col cols="12">
                      {{deleteInfo}}
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn @click="close">いいえ</v-btn>
                <v-btn class="primary" @click="remove">はい</v-btn>
                <v-spacer/>
              </v-card-actions>
            </v-card>
          </v-dialog><!-- /削除確認メッセージダイアログ -->
        </template>

        <!-- 編集アイコン、削除アイコン -->
        <template v-slot:item.actions="{item}">
          <v-icon small @click="dialogDisplay(item, '1')">mdi-pencil</v-icon>
          <v-icon small @click="dialogDisplay(item, '2')">mdi-delete</v-icon>
        </template><!-- /編集アイコン、削除アイコン -->

      </v-data-table><!-- /テーブル -->
    </v-card>
  </v-layout>
</template>

<script>
const DELETE_INFO = 'アカウント情報を削除します。よろしいですか？'

export default {
  data () {
    return {
      search: '',
      editDialog: '',
      questionDialog: '',
      deleteInfo: DELETE_INFO,
      userInfo: '',
      display: true,
      headers: [
        {
          text: 'ID',
          value: 'id'
        },
        {
          text: 'メールアドレス',
          value: 'email'
        },
        {
          text: '名前',
          value: 'name'
        },
        {
          text: 'メモ',
          value: 'memo'
        },
        {
          text: '操作',
          value: 'actions'
        }
      ],
      users: [
        {
          id: 1,
          name: 'sato',
          email: 'sato@sample.com',
          memo: 'セパタクロ,トラックバック,相撲,山手線一周,占い'
        },
        {
          id: 2,
          name: 'suzuki',
          email: 'suzuki@sample.com',
          memo: '華道,競馬,折り紙,鉄道旅行,ランニング'
        },
        {
          id: 3,
          name: 'takahashi',
          email: 'takahashi@sample.com',
          memo: '落語,携帯電話基地局巡り,公営競技,語学,スキップ'
        },
        {
          id: 4,
          name: 'tanaka',
          email: 'tanaka@sample.com',
          memo: 'プラモデル,カメラ,カポエイラ,ジャニーズ追っかけ,切手収集'
        },
        {
          id: 5,
          name: 'watanabe',
          email: 'watanabe@sample.com',
          memo: 'タイル施工,公営競技,BCL,油絵,サックス'
        },
        {
          id: 6,
          name: 'ito',
          email: 'ito@sample.com',
          memo: 'お笑い鑑賞,油絵,骨董品収集,パズル,ロッククライミング'
        },
        {
          id: 7,
          name: 'yamamoto',
          email: 'yamamoto@sample.com',
          memo: 'モデル撮影,書道,ギター,競馬,競輪'
        },
        {
          id: 8,
          name: 'nakamura',
          email: 'nakamura@sample.com',
          memo: 'パスタ作り,韓流ドラマ,野鳥観察,工芸,動物園巡り'
        },
        {
          id: 9,
          name: 'kobayashi',
          email: 'kobayashi@sample.com',
          memo: 'グルメ,ソムリエ,pixiv,音楽鑑賞,太極拳'
        },
        {
          id: 10,
          name: 'kato',
          email: 'kato@sample.com',
          memo: 'プログラミング,ラップ,食べ歩き,将棋,K1'
        }
      ]
    }
  },
  methods: {
    /* ----------------------
    編集ボタン押下時
    ---------------------- */
    dialogDisplay: function (user, mode) {
      // 押下したレコード情報を保持
      this.userInfo = Object.assign({}, user)
      console.log(this.userInfo, '対象アカウント情報')
      if (mode === '1') {
        this.editDialog = true
      }
      if (mode === '2') {
        this.questionDialog = true
      }
    },
    /* ----------------------
    モーダル閉じるボタン押下時
    ----------------------- */
    close: function () {
      this.editDialog = false
      this.questionDialog = false
      this.userInfo = {}
    },
    /* -----------------------
    モーダル更新ボタン押下時
    ----------------------- */
    update: function () {
      // 一旦表を非表示
      this.display = false
      for (const i in this.users) {
        // tableに渡したデータのIDと押下したレコードのIDが同じ場合処理に入る
        if (this.users[i].id === this.userInfo.id) {
          // 押下したレコードと同じIDのデータを上書きする
          this.users[i].name = this.userInfo.name
          this.users[i].email = this.userInfo.email
          this.users[i].memo = this.userInfo.memo
          console.log(this.users[i], '編集後内容')
        }
      }
      // 表を表示
      this.display = true
      // モーダル閉じる
      this.close()
    },
    /* -----------------------
    削除確認メッセージ「はい」押下時
    ------------------------ */
    remove: function () {
      // 一旦表を非表示
      this.display = false
      for (const i in this.users) {
        // tableに渡したデータのidと押下したレコードのidが同じ場合処理に入る
        if (this.users[i].id === this.userInfo.id) {
          // 該当の要素を削除
          this.users.splice(i, 1)
        }
      }
      // 表を表示
      this.display = true
      // モーダル閉じる
      this.close()
    }
  }
}
</script>

<style>

</style>
