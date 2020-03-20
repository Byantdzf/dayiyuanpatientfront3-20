<template>
  <div class="menu">
    <ul class="list">
      <li class="list-item home">
        <router-link :to="{path:'/home/entry'}" tag="div">
          <img src="../../../../src/assets/image/tabarIcon/homeA.png" alt="" class="icon" v-if="homeActive">
          <img src="../../../../src/assets/image/tabarIcon/home.png" alt="" class="icon" v-else>
          <p class="label">首页</p>
        </router-link>
      </li>
      <li class="list-item mine">
        <router-link :to="{path:'/mine/entry'}" tag="div">
          <img src="../../../../src/assets/image/tabarIcon/userA.png" alt="" class="icon" v-if="userActive">
          <img src="../../../../src/assets/image/tabarIcon/user.png" alt="" class="icon" v-else>
          <p class="label">我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: '1',
      homeActive: true,
      userActive: false
    }
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route (to, from) {
      let {path} = to
      console.log(path)
      switch (path) {
        case '/home/entry':
          this.homeActive = true
          this.userActive = false
          break
        case '/mine/entry':
          this.userActive = true
          this.homeActive = false
          break
      }
    }
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
<!--<style lang="scss" scoped src="./style.scss"></style>-->

<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  .menu {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    border-top: 1px solid #ddd;
    .list {
      display: flex;
      padding: 16px 0;
      &-item {
        text-align: center;
        flex: 1;
        .icon {
          width:42px;
          height: 42px;
          font-size: 42px;
          display: block;
          margin: auto;
          color: #999faa;
        }
        .label {
          margin-top: 10px;
          color: #999999;
          font-size: 20px;
        }
        .router-link-exact-active,
        .router-link-active {
          .icon {
            color: #45adff;
          }
          .label {
            color: #00BD75;
          }
        }
      }
    }
  }

</style>
