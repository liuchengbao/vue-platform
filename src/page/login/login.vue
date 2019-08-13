<template>
  <div id="login" class="login">
    <div class="form_box">
      <h2 class="login_title">{{title}}</h2>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')" long>{{title}}</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button } from 'iview'
import { mapActions, mapMutations } from 'vuex'

export default {
  components: {
    Button,
    Form,
    FormItem,
    Input
  },
  data: function () {
    return {
      title: '登陆',
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入正确的名称', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码错误', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码大于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.loading({
            content: '登陆中...',
            duration: 0
          })
          setTimeout(() => {
            this.$Message.destroy()
            const {formInline} = this.$data
            // 登陆成功之后更新store用户信息
            this.SET_USETINFO({user: formInline.user, password: formInline.password})
            this.$Message.success('已登陆')
          }, 1500)
        }
      })
    },
    ...mapMutations([
      'SET_USETINFO'
    ]),
    ...mapActions([
      'setUserInfo'
    ])
  }
}
</script>

<style scoped>
  .login {
    height: 100vh;
    min-height: 400px;
    overflow: hidden;
    background: rgba(0, 133, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form_box {
    width: 80%;
    max-width: 400px;
    background: #FFF;
    border-radius: 8px;
    padding: 20px;
  }
  .login_title {
    margin-bottom: 20px;
    text-align: center;
  }
</style>
