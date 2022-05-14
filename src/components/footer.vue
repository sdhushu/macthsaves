<script setup lang="ts">

</script>

<template>
  <el-row class="footer" :gutter="20">
    <el-col :span="8" style="padding-left: 60px">
      <div style="color: #4A7193">Matchsaves 是一个平台，可以让人们找到他们的室友、舒适的房子等。</div>
    </el-col>
    <el-col :span="4">
      <el-link class="title">我的家园</el-link>
    </el-col>
    <el-col :span="4">
      <el-space direction="vertical" size="large">
      <div class="title">关于我们</div>
      <el-link class="desc">公寓</el-link>
      <el-link class="desc">房屋共享</el-link>
      </el-space>
    </el-col>
    <el-col :span="4">
      <el-space direction="vertical" size="large">
      <div class="title">消息</div>
      <el-link class="desc">我的简历</el-link>
      <el-link class="desc">我的账户</el-link>
      <el-link class="desc">我的财产</el-link>
      <el-link class="desc">收藏夹</el-link>
      </el-space>
    </el-col>
    <el-col :span="4">
      <el-space direction="vertical" size="large">
      <div class="title">帮助</div>
      <el-link class="desc">条件</el-link>
      <el-link class="desc">隐私</el-link>
      <el-link class="desc">博客</el-link>
      <el-link class="desc">常见问题</el-link>
      </el-space>
    </el-col>

    <div class="bottom">
      <div style="margin-left: 50px;padding: 10px;color: gray">© 2022 火柴保存。由Matchsaves 设计</div>
    </div>
  </el-row>
</template>

<style lang="less" scoped>
.footer {
  padding-top: 60px;
  height: 340px;
  background-color: #252C41;
  .title {
    color: white;
    font-size: 20px;
  }
  .desc {
    color: #4A7193;
    font-size: 16px;
  }

  .bottom {
    width: 100%;
    height: 45px;
    background-color: #000;
    position: absolute;
    bottom: 0;
  }
}
</style>