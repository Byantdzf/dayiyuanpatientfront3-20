<template>
  <div class="menu">
    <van-tabbar v-model="active" route active-color="#00BD75" inactive-color="#999999">
      <van-tabbar-item replace to="/home/entry">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? homeIcon.active : homeIcon.inactive"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/mine/entry">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? userIcon.active : userIcon.inactive"/>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0,
      homeIcon: {
        active: require('@/assets/image/tabarIcon/homeA.png'),
        inactive: require('@/assets/image/tabarIcon/home.png')
      },
      userIcon: {
        active: require('@/assets/image/tabarIcon/userA.png'),
        inactive: require('@/assets/image/tabarIcon/user.png')
      }
    }
  },
  // 监听,当路由发生变化的时候执行
  watch: {
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
</style>
