<template>
  <div class="left_menu">
    <Menu theme="light">
      <MenuItem name="1" class="single_menu" to="home">
        <Icon type="md-home" />
        首页
      </MenuItem>
      <MenuItem name="2" class="single_menu" to="order">
        <Icon type="md-reorder" />
        订单
      </MenuItem>
      <MenuItem name="3" class="single_menu" to="settlement">
        <Icon type="ios-card" />
        结算
      </MenuItem>
      <MenuItem name="4" class="single_menu" to="payment">
        <Icon type="md-card" />
        支付
      </MenuItem>
      <MenuItem name="5" class="single_menu" to="user">
        <Icon type="ios-contact" />
        用户
      </MenuItem>
      <Submenu name="6">
        <template slot="title">
          <Icon type="ios-flame" />
          代理点
        </template>
        <Submenu name="30">
          <template slot="title">
            <Icon type="ios-flame" />
            代理点1
          </template>
          <MenuItem name="30-1">
            商品
          </MenuItem>
          <MenuItem name="30-2">
            订单
          </MenuItem>
          <MenuItem name="30-3">
            用户
          </MenuItem>
        </Submenu>
      </Submenu>
      <MenuItem name="7" class="single_menu">
        <Icon type="logo-bitcoin" />
        代理点收益
      </MenuItem>
      <MenuItem name="8" class="single_menu" to="mine">
        <Icon type="ios-beaker" />
        矿场
      </MenuItem>
      <MenuItem name="9" class="single_menu" to="notice">
        <Icon type="ios-alert" />
        公告
      </MenuItem>
      <MenuItem name="10" class="single_menu" to="platform">
        <Icon type="ios-planet" />
        平台
      </MenuItem>
      <MenuItem name="11" class="single_menu" to="miner">
        <Icon type="ios-leaf" />
        矿机
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
import {Menu, Submenu, MenuGroup, MenuItem, Icon} from 'iview'

export default {
  name: 'LeftMenu',
  components: {
    Menu,
    Submenu,
    MenuGroup,
    MenuItem,
    Icon
  }
}
</script>

<style scoped>
.left_menu {
  width: 240px;
  min-height: calc(100vh - 80px);
  -webkit-box-shadow: 8px 0 8px -4px  rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 8px 0 8px -4px  rgba(0, 0, 0, 0.1);
  box-shadow: 8px 0 8px -4px  rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  height: 100%;
  overflow-y: auto;
  z-index: 100;
}
.left_menu::-webkit-scrollbar {
  display: none;
}
.single_menu {
  font-size: 16px;
}
</style>
