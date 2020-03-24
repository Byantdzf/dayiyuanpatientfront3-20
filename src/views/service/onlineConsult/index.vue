<template>
  <div class="mianBox">
    <div class="hint font26">根据国家互联网诊疗活动等相关法则，医生可为部分常见病
      慢性恢复诊患者开具线上处方，不能为初诊患者开具处方。</div>
    <div class="infoWrapper">
      <div class="flo_l">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" class="photo" alt="">
      </div>
      <div class="flo_l content text-left ">
        <div class="font30 color3">
          <span class="font30 color3">黄晓敏</span>
          <span class="font30 color3 _class">主治医师</span>
          <img src="@/assets/image/homeIcon/scoreIcon.png" class="icon" alt="">
          <span class="score font26">5.0</span>
        </div>
        <p class="font26 title ">北京大学第三医师</p>
        <p class="font22 color9 merit flo_l">擅长：脑血管栓、头疼、头晕、睡眠障碍、高…</p>
      </div>
      <div class="clearfloat"></div>
    </div>

    <div class="mainlist">
      <div class="mainInfo">
        <p class="font36 bold color3 title">填写问诊资料</p>
        <p style="color: #DD9C44;" class ="font26 title">填写以下信息，完善资料信息</p>
        <p class="color9 font28 title">咨询人</p>
        <p class="name font28 colorTheme inline-block">欧阳锋</p>
        <div class="inline-block addStyle font28 colorTheme ">添加咨询人</div>
      </div>
      <div class="listItem">
        <p class="font28 color3 inline-block flo_l">请选择本次患病时间</p>
        <div class="flo_r" style="width: 42%;">
          <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
          <input type="text" placeholder="请选择" readonly class="input font28 flo_r">
        </div>
        <p class="clearfloat"></p>
      </div>
      <div class="listItem">
        <p class="font28 color3 inline-block">是否有过敏史</p>
        <div class="flo_r" style="width: 42%;">
          <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
          <input type="text" placeholder="请选择" readonly class="input font28 flo_r">
        </div>
      </div>
      <div class="listItem">
        <p class="font28 color3 inline-block">当前是否正在服用药物</p>
        <div class="flo_r" style="width: 42%;">
          <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
          <input type="text" placeholder="请选择" readonly class="input font28 flo_r">
        </div>
      </div>
      <div class="listItem">
        <p class="font28 color3 inline-block">是否有过手术、放疗等重大疾病治疗经历及慢性病史</p>
        <div class="flo_r" style="width: 42%;margin-top: 6px">
          <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
          <input type="text" placeholder="请选择" readonly class="input font28 flo_r">
        </div>
      </div>
      <div class="listItem">
        <p class="font28 color3 inline-block">您想获得哪方面的帮助</p>
        <div class="flo_r" style="width: 42%;">
          <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
          <input type="text" placeholder="请选择" class="input font28 flo_r">
        </div>
      </div>
      <p class="describe"></p>
      <div class="mainDescribe">
        <p class="font28 color9 title">病情描述</p>
        <div class="noBorder">
          <textarea class="textareaStyle font26 color6" v-model="text" maxlength="10" placeholder="#为了更好获得医生帮助，请详细描述您的疾病、症状、 就诊经历和用药情况，我们会保证您的隐私安全#"></textarea>
          <p class="color9 font24">{{text.length}}/100</p>
        </div>
        <van-uploader class="uploader" v-model="fileList" multiple />
        <p class="font26 color6 title">添加图片 病历、症状部位、检查报告等相关资料</p>
        <p class="font24 color9 title">图片仅本人和医生可见(选填项)</p>
      </div>
      <p class="describe"></p>
      <div class="mainDescribe">
        <p class="font30 color9 title">问诊须知</p>
        <p class="font28 color9 ">1.医生的回似作为健康询类议,不作为诊依据,急重症患者 请即前往当地医院就诊。</p>
        <p class="font28 color9 ">2.一次图文询的有效期最长为48小时,具体时长以医生意 愿为准，在有效明内不限提次数。</p>
        <p class="font28 color9 ">3.医生利用空时间来服务众多思者,可能无法及时接诊,我 们让医生尽快联系您。</p>
        <p class="font28 color9 "> 4.若医生长时司不接诊、您可以选取消订单。我们将为 你退款。</p>
        <p class="font28 color9 ">5.如有其他疑问,可致电400-8986080联系平台客服处理。</p>
        <p class="font24 color9 ">图片仅本人和医生可见(选填项)</p>
        <van-checkbox v-model="checked" checked-color="#FAA43A" icon-size="18px" style="margin-top: 12px">
          <span class="font28 color9">阅读并同意</span>
          <span  class="font28 color9" style="color: #FCA533">《互联网医院服务协议》</span>
        </van-checkbox>
      </div>
      <div class="height160"></div>
      <div class="btnBoxFn ff">
        <div class="font32 color3 flo_l"><span class="price">免费</span></div>
        <div class="_btn colorff flo_r text-center" @click="gotoPage('/order/paySuccess')">立即提交</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      text: '',
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true }
      ]
    }
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder (name) {
      this.$router.push({ name: name })
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  .mianBox{
    min-height: 100vh;
    background: #F2F2F2;
    .hint{
      background: #FFEFD9;
      color: #DD9C44;
      padding: 14px 36px;
    }
  }
  .infoWrapper{
    padding: 30px;
    background: white;
    border-bottom: 1px solid #E7E7E7;
    .photo{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 2px solid #ffffff;
    }
    .score{
      color: #FF8A30;
      margin-right: 20px;
    }
    .content{
      width: 76%;
      padding: 6px 22px;
      ._class{
        margin-left: 22px;
      }
      .title{
        color: #666666;
        margin: 4px 0;
      }
      .icon{
        width: 22px;
        height: 22px;
      }
      .merit{
        margin-top: 20px;
      }
    }
    .commentsBox{
      width:670px;
      height:120px;
      background:rgba(137,137,137,.2);
      border-radius:60px;
      color: white;
      margin-top: 18px;
      .itemStyle{
        width: 30%;
        display: inline-block;
        margin-top: 26px;
      }
    }
  }
  .mainlist{
    background: white;
    .describe{
      border-top: 20px solid #F4F4F4;
    }
    .mainDescribe{
      padding: 30px;
      .title{
        margin-bottom: 12px;
      }
      .textareaStyle{
        width: 92%;
        min-height: 200px;
        border: none;
        resize:none;
      }
      input::-webkit-input-placeholder,textarea::-webkit-input-placeholder {
        color: #b2b2b2;
      }
      .uploader{
        margin-top: 22px;
      }
    }
    .mainInfo{
      padding: 24px 30px 24px 0;
      margin-left: 30px;
      border-bottom: 1px solid #E7E7E7;
      .title{
        margin-bottom: 12px;
      }
      .addStyle{
        margin-left: 100px;
        position: relative;
        &:before{
          content: '';
          position: absolute;
          left: -46px;
          bottom: 0px;
          width: 38px;
          height: 38px;
          background-image: url("../../../assets/image/serviceIcon/addIcon.png");
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
      .name{
        border:2px solid rgba(0,189,117,1);
        padding: 0px 32px;
        position: relative;
        &:before{
          content: '';
          position: absolute;
          right: 0;
          bottom: -18px;
          width: 60px;
          height: 60px;
          background-image: url("../../../assets/image/serviceIcon/badgeIcon.png");
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
    .listItem{
      margin-left: 30px;
      padding: 23px 0;
      padding-right: 30px;
      border-bottom: 1px solid #f2f2f2;
      p{width: 400px}
      .img{
        width: 16px;
        height: 26px;
        margin-left: 8px;
        margin-top: 16px;
      }
      .input{
        width: 68%;
        border: none;
        text-align: right;
        margin-top: 8px;
      }
      input::-webkit-input-placeholder {
        color: #b2b2b2;
      }
    }
  }
  .btnBoxFn{
     width: 100%;
     height: 100px;
     line-height: 100px;
     position: fixed;
     bottom: 0;
     left: 0;
     box-shadow:0px -1px 2px 0px rgba(199,199,199,0.5);

    .price {
      padding-left: 60px;
      color: #D33636;
      font-size: 40px;
    }
     ._btn{
       width:302px;
       height:100px;
       background:rgba(0,189,117,1);
     }
   }
</style>
