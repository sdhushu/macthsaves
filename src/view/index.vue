<script setup lang="ts">
import {ref} from 'vue'
import logo from '@/static/logo.png'
import land from '@/static/landing-bg.png'
import { Search } from '@element-plus/icons-vue'
import Footer from '@/components/footer.vue'


const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const value = ref('')
const input = ref()

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]


</script>

<template>
    <div>
        <div class="header">
          <div style="color: white;font-size: 13px;">
            <span style="margin-right: 20px"><el-icon><Phone /></el-icon>(425) 979 1955</span>
            <span><el-icon><ChatRound /></el-icon>jq36@uw.edu</span>
          </div>

          <div style="color: white">
            <el-icon style="margin-right: 10px"><Phone /></el-icon>
            <el-icon style="margin-right: 10px"><Phone /></el-icon>
            <el-icon style="margin-right: 10px"><Phone /></el-icon>
            <el-icon style="margin-right: 10px"><Phone /></el-icon>
          </div>
        </div>

<!-- 固钉-->
      <el-affix>
              <el-menu
                  :default-active="activeIndex"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect"
              >
                <el-image :src="logo" style="width: 146px;height: 56px"/>
                <el-menu-item index="1">主要的</el-menu-item>
                <el-menu-item index="2">出租</el-menu-item>
                <el-menu-item index="3" >匹配</el-menu-item>
                <div style="position: absolute;right: 250px;top: 50%;transform: translateY(-50%)">
                  <el-button>登录</el-button>
                  <el-button>报名</el-button>
                </div>
              </el-menu>
      </el-affix>

<!--   选择  -->
      <div class="select" :style="{background:`#334aca url(${land}) no-repeat`}">
        <el-row>
          <el-col :span="24" class="center">
            <div  style="font-size: 50px;color: white;font-weight: 700">出租房屋</div>
            <div style="color: white">查找位于您当地城市的新的特色物业</div>
          </el-col>
<!--          卡片-->
          <el-col :span="24" >
            <div style="width: 90%;height: 325px;background-color: white;margin: 0 auto;border-radius: 5px">

              <el-row style="padding: 10px">
                <el-col :span="6">
                  <div style="margin-bottom: 5px">物业类型</div>
                  <el-select v-model="value" class="m-2" placeholder="Select" size="large">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    /></el-select>
                </el-col>
                <el-col :span="6">
                  <div style="margin-bottom: 5px">与[num]分享gfuggsgdg</div>
                  <input style="border:none;height: 60%;outline: none" v-model="input" placeholder="Please input" />
                </el-col>
                <el-col :span="6">
                  <div style="margin-bottom: 5px">价格34424343</div>
                  <input style="border:none;height: 60%;outline: none" v-model="input" placeholder="Please input" />
                </el-col>
                <el-col :span="6">
                  <div style="margin-bottom: 5px">地点434242</div>
                  <input style="border:none;height: 60%;outline: none" v-model="input" placeholder="Please input" />
                </el-col>
              </el-row>


              <el-row style="padding: 10px">
                <el-col :span="8">
                  <el-checkbox v-model="checked1" label="空调" size="large" />
                  <br>
                  <el-checkbox v-model="checked2" label="互联网" size="large" />
                  <br>
                  <el-checkbox v-model="checked2" label="阳台" size="large" />
                  <br>
                  <el-checkbox v-model="checked2" label="无线上网" size="large" />
                </el-col>
                <el-col :span="8">
                  <el-checkbox v-model="checked2" label="寝具" size="large" />
                  <br>
                  <el-checkbox v-model="checked2" label="微波" size="large" />
                  <br>
                  <el-checkbox v-model="checked2" label="阳台" size="large" />
                  <br>
                  <el-checkbox v-model="checked2" label="海滩" size="large" />
                </el-col>
                <el-col :span="8">
                  <el-checkbox v-model="checked2" label="加热" size="large" />
                  <br>
                  <el-checkbox v-model="checked2" label="允许吸烟" size="large" />
                  <br>
                  <el-checkbox v-model="checked2" label="图标" size="large" />
                  <br>
                  <el-checkbox v-model="checked2" label="停车场" size="large" />
                </el-col>
              </el-row>

              <el-button style="margin-left: 10px;background-color: #F95D02;color: white;width: 130px;height: 50px">搜索</el-button>

            </div>
          </el-col>
        </el-row>
      </div>
      <!--       物业 -->
      <div style="height: 250px;padding:80px 40px">
        <div class="center" style="font-size: 40px;font-weight: 600;margin-bottom: 10px;">特色物业</div>
        <div class="center" style="color: gray">等待编辑</div>
        <div style="display: flex;justify-content: center">
          <el-button style="height: 57px;width: 187px">浏览所有物业</el-button>
        </div>

      </div>

      <div style="height: 250px;padding:80px 40px;background-color: #F1F6FC">
        <div class="center" style="font-size: 40px;font-weight: 600;margin-bottom: 10px;">注册您真正的家，这就是您真正的房主</div>
        <div class="center" style="color: gray">订阅我们的时事通讯并获取最新消息和更新！</div>
        <div style="display: flex;justify-content: center">
          <el-input
              v-model="input1"
              style="width: 530px;height: 70px"
              size="large"
              placeholder="Please Input"
              :suffix-icon="Search"
          />
        </div>

      </div>
      <Footer></Footer>
    </div>
</template>


<style lang="less" scoped>
  .header {
    height: 50px;
    background-color: #140C40;
    display: flex;
    padding: 0 40px;
    justify-content: space-between;
    align-items: center;
  }
  .center {
    text-align: center;
    margin-bottom: 40px;
  }
  .el-menu-demo {
    padding: 10px 20px;
  }


  .select {
    height: 450px;
    background: #334aca no-repeat;
    padding: 50px;
  }


</style>