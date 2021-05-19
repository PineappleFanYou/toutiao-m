<template>
  <div class="Login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="登录/注册"
      left-arrow
      @click-left="$router.back()"
    />

    <van-form
      @submit="onSubmit"
      @failed="onFailed"
      :show-error="false"
      :show-error-message="false"
      validate-first
      ref="login-form"
    >
      <van-field
        v-model="user.mobile"
        icon-prefix="iconfont"
        left-icon="shouji"
        placeholder="请输入手机号"
        :rules="formRules.mobile"
        name="mobile"
      />
      <van-field
        v-model="user.code"
        icon-prefix="iconfont"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
        :rules="formRules.code"
        name="code"
      >

        <template #button>
          <van-count-down
            v-if="countDown"
            :time="1000 * 60"
            format="ss s"
            @finish="onFinish"
          />
          <van-button
            v-else
            class="send-btn"
            size="mini"
            round
            @click.prevent="onSendSms"
            :disabled="isSendSms"
          >发送验证码</van-button>

        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button
          class="login-btn"
          type="info"
          block
        >登录</van-button>
      </div>
    </van-form>

  </div>
</template>
<script>
import { login, sendSms } from '@/api/user'
export default {
  name: 'Login',
  data() {
    return {
      user: {
        mobile: '13702623307',
        code: ''
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: "手机号格式错误" }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: "验证码格式错误" }
        ]
      },
      countDown: false,
      isSendSms: false
    }
  },
  methods: {
    async onSubmit() {
      this.$toast.loading({
        message: '登录中...', // 提示文本
        forbidClick: true, // 禁止背景点击
        duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
      })
      try {
        const res = await login(this.user);
        this.$toast.success('登录成功')
        this.$store.commit('setUserToken', res.data.data)
      } catch (error) {
        this.$toast.fail('登录失败，手机号或验证码错误')
      }
    },
    onFailed(error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
      }
    },
    async onSendSms() {
      try {
        // 校验手机号码
        await this.$refs['login-form'].validate('mobile')
        const res = await sendSms(this.user.mobile);
        console.log(res)
        this.countDown = true
      } catch (error) {
        this.isSendSms = false
        // 不同的代码错误需要不同的提示
        let message = ''
        if (err && err.response && err.response.status === 429) {
          // 发送短信失败的错误提示
          message = '发送太频繁了，请稍后重试'
        } else if (err.name === 'mobile') {
          // 表单验证失败的错误提示
          message = err.message
        } else {
          message = '发送失败'
        }
        this.$toast({
          message,
          position: "top"
        })
      }
    },
    onFinish() {
      this.countDown = false
    }
  }
}
</script>
<style lang="less" scoped>
.Login-container {
  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text {
      font-size: 11px;
      color: #666;
    }
  }
  .login-btn-wrap {
    padding: 26px 16px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
    .van-button__text {
      font-size: 15px;
    }
  }
}
</style>