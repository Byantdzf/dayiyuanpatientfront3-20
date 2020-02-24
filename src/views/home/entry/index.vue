<!--
 * @Author: DZF
 * @LastEditors: DZF
 * @Description:
 * @Date: 2020-02-21 13:41:09
 * @LastEditTime: 2020-02-21 13:41:09
 -->
<template>
  <div class="entry">
<!--    <div class="searchWrapper">-->
<!--      <div class="selectbox">-->
<!--        <router-link :to="{path: '/address/city-selected'}" tag="div">-->
<!--          <label class="label">深圳</label>-->
<!--          <i class="icon fa fa-angle-down"></i>-->
<!--        </router-link>-->
<!--      </div>-->

<!--    </div>-->
<!--    <TheBanner></TheBanner>-->
<!--    <Subnav></Subnav>-->
<!--    <TheTodayOrder></TheTodayOrder>-->
    <div class="searchWrapper">
      <van-search v-model="searchValue" @focus="focus" placeholder="搜索医院、疾病、医院" background=""></van-search>
    </div>
    <div class="bannerWrapper">
      <img src="https://images.ufutx.com/202002/24/dfb8a4570b8262ad64a7e2743f018716.png" class="image" alt="">
    </div>
    <div class="tabWrapper">
      <div class="itemTab text-center flo_l">
        <img src="https://images.ufutx.com/202002/24/dfb8a4570b8262ad64a7e2743f018716.png" class="image" alt="">
        <p class="font12">找专家</p>
        <p class="colorbe font12 itemTitle">按疾病 医生 医院</p>
      </div>
      <div class="itemTab text-center flo_l">
        <img src="https://images.ufutx.com/202002/24/dfb8a4570b8262ad64a7e2743f018716.png" class="image" alt="">
        <p class="font12">找专家</p>
        <p class="colorbe font12 itemTitle">按疾病 医生 医院</p>
      </div>
    </div>
    <div class="titleWrapper" >
      <p class="title bold font16 flo_l">推荐科室</p>
      <p class="font10 colorbe flo_r more" @click="gotoPage('/service/security')">更多</p>
    </div>
    <div class="departmentBox">
      <div v-for="(item,index) in departments" :key="index" class="itemBox text-center flo_l">
        <img :src="item.icon" alt="" class="image">
        <p class="font12 color6 title">{{item.title}}</p>
      </div>
    </div>
    <div class="titleWrapper">
      <p class="title bold font16 flo_l">推荐医生</p>
      <p class="font10 colorbe flo_r more" @click="gotoPage('/service/security')">更多</p>
    </div>
    <div class="doctorBox">
      <DoctorList :list="list"></DoctorList>
      <div class="btnBox font12 text-center">
        <p class="text">更多此科室的医生</p>
      </div>
    </div>
    <div class="titleWrapper">
      <p class="title bold font16 flo_l">专科联盟</p>
      <p class="font10 colorbe flo_r more">更多</p>
    </div>
    <div class="unionWrapper">
      <div class="itembBox flo_l text-center" v-for="(item,index) in unions" :key="index">
        <img :src="item.photo" alt="" class="image">
        <div class="font10">{{item.title}}</div>
        <div class="clickBtn font10">进入</div>
      </div>
    </div>
  </div>
</template>
<script>
// import TheBanner from './banner'
import DoctorList from '../../../views/components/doctorList'
// import TheTodayOrder from './today-order'
export default {
  components: {
    // TheBanner,
    // Subnav,
    DoctorList
  },
  data () {
    return {
      address: '',
      searchValue: '',
      departments: [
        {
          icon: 'https://images.ufutx.com/202002/24/dfb8a4570b8262ad64a7e2743f018716.png',
          title: '内科'
        },
        {
          icon: 'https://images.ufutx.com/202002/24/dfb8a4570b8262ad64a7e2743f018716.png',
          title: '整形外科'
        },
        {
          icon: 'https://images.ufutx.com/202002/24/dfb8a4570b8262ad64a7e2743f018716.png',
          title: '睡眠呼吸障碍专科'
        },
        {
          icon: 'https://images.ufutx.com/202002/24/dfb8a4570b8262ad64a7e2743f018716.png',
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
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    focus () {
      this.$router.push({path: '/service/list-search'})
    }
  }
}
</script>
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  body{
    background: white;
  }
  .entry{
    .searchWrapper{
      margin: 16px;
      border-radius: 32px;
      overflow: hidden;
      padding-left: 12px;
      background: #f7f8fa;
    }
    .bannerWrapper{
      margin: 16px;
      .image{
        width: 100%;
      }
    }
    .tabWrapper{
      overflow: hidden;
      .itemTab{
        width: 50%;
        .image{
          width: 40px;
          height: 40px;
        }
        .itemTitle{
          transform:scale(.9);
        }
      }
      margin-bottom: 20px;
    }
    .titleWrapper{
      margin: 16px;
      overflow: hidden;
      .title{
        padding-left: 12px;
        position: relative;
        &:before{
          content: '';
          left: 0;
          top: 5px;
          width: 2px;
          height: 14px;
          position: absolute;
          background: #6792d2;
        }
      }
      .more{
        margin-top: 8px;
        padding-right: 14px;
        position: relative;
        &:before{
          content: '';
          right: -4px;
          top: -1px;
          width: 20px;
          height: 20px;
          position: absolute;
          background-image: url("https://images.ufutx.com/202002/24/358000854fe0ad24249b85f64640f9a4.png");
          background-size: contain;
        }
      }
    }
    .departmentBox{
      margin-bottom: 26px;
      overflow: hidden;
      .itemBox{
        width: 25%;
        .image{
          width: 42px;
          height: 42px;
        }
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
      overflow: hidden;
      padding: 16px;
      .itembBox{
        width: 30%;
        box-shadow: 1px 1px 12px #e2e2e2;
        margin-right: 12px;
        border-radius: 12px;
        padding: 12px 0;
        .image{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-bottom: 4px;
        }
        .clickBtn{
          background: #608ef2;
          width: 60px;
          border-radius: 10px;
          color: white;
          margin: 12px auto 4px;
        }
      }
    }
  }
</style>
