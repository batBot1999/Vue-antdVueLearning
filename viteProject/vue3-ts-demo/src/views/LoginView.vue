<template>
  <div class="login-box">
     <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="账号:" prop="username">
      <el-input v-model="ruleForm.username" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码:" prop="password">
      <el-input
        v-model="ruleForm.password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup () {
    const data = reactive({
      ruleForm: {
        username: "",
        password: ""
      }
    })

    return {}
  }
})
</script>

<style lang="scss" scoped>
  .login-box {
    width: 100%;
    height: 100%;
    background: url("../assets/bgImage.png");
    background-repeat:no-repeat;
    background-size:100%;
  }
</style>