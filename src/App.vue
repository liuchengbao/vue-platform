<template>
  <div id="app">
    <div v-if="!userInfo" id="index">
      <headTop />
      <div id="content">
        <leftMenu />
        <div class="content-box">
          <router-view />
        </div>
      </div>
    </div>
    <login v-else />
  </div>
</template>

<script>
import login from './page/login/login'
import headTop from './components/Header'
import leftMenu from './components/LeftMenu'
import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    login,
    headTop,
    leftMenu
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#index {
  padding-top: 80px;
}
#content {
  padding-left: 240px;
  flex: 1;
  display: flex;
}
.content-box {
  flex: 1;
}
</style>
