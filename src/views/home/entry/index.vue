<!--
 * @Author: DZF
 * @LastEditors: DZF
 * @Description:
 * @Date: 2020-02-21 13:41:09
 * @LastEditTime: 2020-02-21 13:41:09
 -->
<template>
  <div class="entry">
    <div class="searchWrapper" @click="focus">
      <img src="@/assets/image/homeIcon/search.png" class="icon" alt="">
      <input type="text" placeholder="搜索医院、疾病、医院"  class="_input font26">
      <!--      <van-search v-model="searchValue" @focus="focus" placeholder="搜索医院、疾病、医院" background=""></van-search>-->
    </div>
    <!--     banna-->
    <div class="bannerWrapper">
      <!--      <img :src="listBanner[0].imgUrl" class="image" alt="">-->
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=412362369,2838870680&fm=26&gp=0.jpg" class="image" alt="">
    </div>
    <div class="tabWrapper">
      <div class="itemTab flo_l" @click="gotoPage('/service/security')">
        <div class="textBox inline-block">
          <span class="font32 bold color3">找专家</span>
          <p class="color9 font22 itemTitle">按疾病 医生 医院</p>
        </div>
        <img src="@/assets/image/homeIcon/doctorIcon.png" class="image" alt="">
      </div>
      <div class="itemTab flo_r itemTabR" @click="showToast">
        <div class="textBox inline-block">
          <span class="font32 bold color3">去开药</span>
          <p class="color9 font22 itemTitle">按疾病 医生 医院</p>
        </div>
        <img src="@/assets/image/homeIcon/drugIcon.png" class="image" alt="">
      </div>
    </div>
    <div class="titleWrapper" >
      <p class="title bold font30 flo_l">推荐科室</p>
      <p class="font28 colorbe flo_r more" @click="gotoPage('/service/security')">更多</p>
    </div>
    <div class="departmentBox" @click="gotoPage('/service/security')">
      <div v-for="(item,index) in listDepts" :key="index" class="itemBox text-center flo_l">
        <img :src="item.icon" alt="" class="image">
        <p class="font24 color3 title">{{item.deptName}}</p>
      </div>
    </div>
    <div class="titleWrapper">
      <p class="title bold font30 flo_l">推荐医生</p>
      <p class="font28 colorbe flo_r more" @click="gotoPage('/service/security')">更多</p>
    </div>
    <div class="doctorBox">
      <DoctorList :list="listOrgDoctor"></DoctorList>
      <!--      <div class="btnBox font12 text-center">-->
      <!--        <p class="text">更多此科室的医生</p>-->
      <!--      </div>-->
    </div>
    <div class="titleWrapper">
      <p class="title bold font30 flo_l">专科联盟</p>
      <p class="font28 colorbe flo_r more">更多</p>
    </div>
    <div class="unionWrapper" @click="gotoLink('www.baidu.com')">
      <div class="itembBox inline-block text-center" v-for="(item,index) in listOrg" :key="index">
        <img :src="item.icon" alt="" class="image">
        <div class="font28 color3">{{item.orgName}}</div>
        <div class="clickBtn font28">进入</div>
      </div>
    </div>
    <div style="height: 100px;"></div>
  </div>
</template>
<script>
import DoctorList from '@/views/components/doctorList'
import https from '@/config/http.js'
import { Toast } from 'vant'
export default {
  components: {
    DoctorList
  },
  data () {
    return {
      address: '',
      searchValue: '',
      listOrgDoctor: [],
      listDepts: [],
      listBanner: [],
      listOrg: [],
      departments: [
        {
          icon: require('@/assets/image/homeIcon/tabIcon1.png'),
          title: '内科'
        },
        {
          icon: require('@/assets/image/homeIcon/tabIcon2.png'),
          title: '整形外科'
        },
        {
          icon: require('@/assets/image/homeIcon/tabIcon3.png'),
          title: '睡眠呼吸障碍专科'
        },
        {
          icon: require('@/assets/image/homeIcon/tabIcon4.png'),
          title: '心血管内科'
        }
      ],
      unions: [
        {
          photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg',
          title: '中国性学会'
        },
        {
          photo: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1036745067,4011189473&fm=26&gp=0.jpg',
          title: '她健康'
        }
      ],
      list: [
        {
          photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 3
        },
        {
          photo: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1036745067,4011189473&fm=26&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 5
        },
        {
          photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 2
        }
      ]
    }
  },
  methods: {
    showToast () {
      Toast('该功能正在维护中，敬请期待')
    },
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    focus () {
      this.$router.push({path: '/service/list-search'})
    },
    gotoLink (url) {
      window.open(url, '_blank')
    },
    getData () {
      https.fetchGet('index/list').then((data) => {
        console.log(data)
        let {listOrgDoctor, listDepts, listBanner, listOrg} = data
        this.listOrgDoctor = listOrgDoctor
        this.listDepts = listDepts
        this.listBanner = listBanner
        this.listOrg = listOrg
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  body{
    background: white;
  }
  .entry{
    background: white;
    margin: 0;
    padding-top: 30px;
    .searchWrapper{
      margin: 0 30px;
      background: #F6F6F6;
      height: 68px;
      border-radius: 32px;
      line-height: 68px;
      .icon{
        width: 22px;
        height: 22px;
        margin-left: 32px;
        vertical-align: middle;
      }
      ._input{
        background: none;
        border: none;
        margin-left: 8px;
      }
    }
    .bannerWrapper{
      margin: 30px;
      .image{
        width: 100%;
        border-radius: 16px;
      }
    }
    .tabWrapper{
      overflow: hidden;
      margin: 30px;
      .itemTab{
        width: 335px;
        height: 145px;
        background-image: url("../../../assets/image/homeIcon/tabBCB.png");
        background-size: contain;
        background-repeat: no-repeat;
        .textBox{
          margin: 28px 28px 0 32px;
        }
        .image{
          width: 68px;
          /*height: 76px;*/
        }
        .itemTitle{
          margin-top: 14px;
        }
      }
      .itemTabR{
        background-image: url("../../../assets/image/homeIcon/tabBCR.png");
        .image{
          width: 72px;
          /*height: 68px;*/
          margin-left: -4px;
        }
      }
      margin-bottom: 20px;
    }
    .titleWrapper{
      margin: 30px 16px;
      overflow: hidden;
      .title{
        padding-left: 34px;
        position: relative;
        &:before{
          content: '';
          left: 16px;
          top: 6px;
          width: 6px;
          height: 28px;
          position: absolute;
          background: #00BD75;
        }
      }
      .more{
        margin-top: 8px;
        padding-right: 34px;
        position: relative;
        &:before{
          content: '';
          right: 16px;
          top: 14px;
          width: 9px;
          height: 16px;
          position: absolute;
          background-image: url('../../../assets/image/homeIcon/rightIcon.png');
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
    .departmentBox{
      margin-bottom: 26px;
      overflow: hidden;
      .itemBox{
        width: 25%;
        .image{
          width: 80px;
          height: 80px;
        }
      }
      .title{
        width: 120px;
        margin: auto;
      }
    }
    .doctorBox{
      width: 92%;
      min-height: 62px;
      box-shadow: 1px 1px 12px #e2e2e2;
      border-radius: 12px;
      margin: auto;
      overflow: hidden;
      .btnBox{
        width: 72%;
        padding: 6px 0;
        border-radius: 32px;
        background-image: linear-gradient(to right, #6ea8fa 0%, #3a79f2 100%);
        color: white;
        margin: 22px auto;
        .text{
          display: inline-block;
          position: relative;
          &:before{
            content: '';
            right: -18px;
            top: -1px;
            width: 20px;
            height: 20px;
            position: absolute;
            background-image: url("https://images.ufutx.com/202002/24/358000854fe0ad24249b85f64640f9a4.png");
            background-size: contain;
          }
        }
      }
    }
    .unionWrapper{
      /*overflow: hidden;*/
      padding: 0 30px;
      .itembBox{
        width: 240px;
        height: 344px;
        box-shadow: 1px 1px 12px #e2e2e2;
        margin-right: 22px;
        border-radius: 12px;
        .image{
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin-top: 40px;
          margin-bottom: 26px;
        }
        .clickBtn{
          width: 160px;
          height: 58px;
          line-height: 58px;
          border-radius: 32px;
          color: #00BD75;
          margin: auto;
          margin-top: 36px;
          border: 1px solid #00BD75;
        }
      }
    }
  }
</style>
