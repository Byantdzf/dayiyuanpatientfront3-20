<template>
  <div class="_mianComment">
    <div class="_mainBox">
      <div class="_grade inline-block text-center">
        <p class="num colorff">100%</p>
        <p class="font28 colorff">综合好评率</p>
      </div>
      <div class="_text inline-block">
        <p class="font26" style="color: #AAE9D1;">大家对医生的印象是：</p>
        <p class="colorff font28" style="margin-top: 4px">解答透彻/耐心细致/给了用药指导</p>
      </div>
    </div>
    <div class="_mainLaber">
      <p class="itemLaber font24 colorTheme inline-block">全部(89)</p>
      <p class="itemLaber font24 color6 inline-block">耐心细致(7)</p>
      <p class="itemLaber font24 color6 inline-block">给了用药指导(7)</p>
      <p class="itemLaber font24 color6 inline-block">过敏性鼻炎(7)</p>
      <p class="itemLaber font24 color6 inline-block">慢性型气管炎(7)</p>
      <div class="text-center" style="padding-bottom: 6px;">
        <img src="@/assets/image/serviceIcon/downIcon.png" width="15" height="7" alt="">
      </div>
    </div>
    <div class="listsWrapper"  v-for="(item,index) in list" :key="index">
      <ul class="lists" >
        <li class="lists-item">
          <div class="label">
            <div class="name color3 font28 flo_l">{{item.anoName}}</div>
            <van-rate v-model="item.score" :size="14" icon="https://images.ufutx.com/202004/06/48867762c1ac535d64dfc7fd13001976.png" class="flo_l" style="margin-top: 3px;margin-left: 4px;"/>
            <p class="clearfloat"></p>
            <p class="font26 color9">{{item.lables}}</p>
          </div>
          <div class="desc font30 color3">{{item.content}}</div>
          <div style="padding-right: 8px;">
            <span class="colorb font26">[{{item.source}}]</span>
            <span class="colorb font26 flo_r">{{item.recTime}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      text: '',
      rateValue: 2,
      list: [],
      id: 0,
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true }
      //  /comment/queryCommPage?doctorId=1&pageNo=1&pageSize=10
      ]
    }
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder (name) {
      this.$router.push({ name: name })
    },
    getData () {
      let data = {
        doctorId: 1,
        pageNo: 1,
        pageSize: 10
      }
      this.$https.fetchGet('comment/queryCommPage', data).then((data) => {
        this.list = data.result
        console.log(this.list)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.getData()
  }
}
</script>

<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
    ._mianComment{
      ._mainBox{
        width:750px;
        height:200px;
        background:rgba(0,189,117,1);
        ._grade{
          width: 36%;
          margin-top: 42px;
          .num{
            font-size: 58px;
          }
        }
        .text {
          width: 40%;
        }
      }
      ._mainLaber{
        padding: 30px;
        .itemLaber{
          background:rgba(240,251,247,1);
          border-radius:28px;
          padding: 4px 28px;
          margin-right: 10px;
          margin-bottom: 16px;
        }
      }
      .listsWrapper{
        margin-left: 30px;
        padding: 22px 0;
        padding-right: 30px;
        border-bottom: 1px solid #E7E7E7;
        .name{
          margin-bottom: 8px;
        }
        .desc{
          margin-top: 12px;
          margin-bottom: 22px;
        }
      }
    }
</style>
