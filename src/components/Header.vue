<template>
  <header id="head_top">
    <div class="logo_box">
      <img class="logo" src="../image/wemining.png" alt="vue">
      <div class="slogan_box">
        <span class="slogan_name">wemining 平台</span>
        <span class="slogan_details">挖矿在云端，小微却大同</span>
      </div>
    </div>
    <div class="user_box">
      <Dropdown>
        <a href="javascript:void(0)">
          <div class="user_head">
            <img :src="img" alt="user" class="user_img">
            <Icon type="ios-arrow-down" size="16" />
          </div>
        </a>
        <DropdownMenu slot="list" class="user_information">
          <DropdownItem class="user_item">
            <Icon type="ios-contact" size="16" class="user_icon" />
            {{userInfo && userInfo.user}}
          </DropdownItem>
          <DropdownItem class="user_item">
            <Icon type="md-lock" size="16" class="user_icon" />
            密码修改
          </DropdownItem>
          <DropdownItem class="user_item">
            <Icon type="md-log-out" size="16" class="user_icon" />
            安全退出
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </header>
</template>

<script>
import {mapState} from 'vuex'
import {Dropdown, DropdownMenu, Icon} from 'iview'
import image from '../image/image'

export default {
  components: {
    Dropdown,
    DropdownMenu,
    Icon
  },
  data () {
    return {
      img: image.user,
      theme1: 'light'
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>

<style scoped>
  #head_top {
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000;
    background: #FFF;
    width: 100%;
  }
  .logo_box {
    width: 240px;
    height: 80px;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .logo {
    width: 40px;
    height: 40px;
  }
  .slogan_box {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .slogan_name {
    font-size: 16px;
    color: #827ca1;
  }
  .slogan_details {
    font-size: 12px;
    color: #00a8ff;
  }
  .user_box {
    margin-right: 20px;
    display: flex;
    align-items: center;
  }
  .user_head {
    display: flex;
    align-items: center;
  }
  .user_img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .user_item {
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  .user_icon {
    padding: 6px 8px 6px 0;
  }
</style>
