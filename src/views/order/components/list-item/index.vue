<!--<script>-->
<!--export default {-->
  <!--functional: true,-->
  <!--props: {-->
    <!--detail: { type: Object, default: () => ({}) },-->
    <!--descClick: { type: Function, default: () => {} },-->
    <!--needToolBar: { type: Boolean }-->
  <!--},-->
  <!--render (h, { props }) {-->
    <!--const { detail, descClick, needToolBar } = props-->
    <!--return (-->
      <!--<div id="listItem">-->
        <!--<div class="top">-->
          <!--<img src={detail.imgUrl} />-->
          <!--<span class="userName">{detail.userName}</span>-->
          <!--<span class="status">{detail.statusName}</span>-->
        <!--</div>-->
        <!--<div class="desc" onClick={descClick}>-->
          <!--<img src={detail.servericeImgUrl} />-->
          <!--<div class="right">-->
            <!--<h6 class="title van-ellipsis">{detail.servericeName}</h6>-->
            <!--<span>服务时间：{detail.servericeTime}</span>-->
            <!--<span>服务时长：{detail.duration}</span>-->
            <!--<span>下单时间：{detail.createOrderTime}</span>-->
            <!--<span class="money">￥{detail.money}</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="statistics van-hairline&#45;&#45;bottom">-->
          <!--共计 {detail.count} 件服务 合计：-->
          <!--<span class="total">-->
            <!--<i>￥</i>-->
            <!--<span>{(detail.count * detail.money).toFixed(2)}</span>-->
          <!--</span>-->
          <!--<span class="end-text"> 元(含保险)</span>-->
        <!--</div>-->
        <!--{needToolBar && (-->
          <!--<div class="tool-bar">-->
            <!--<van-button type="primary">接单</van-button>-->
          <!--</div>-->
        <!--)}-->
      <!--</div>-->
    <!--)-->
  <!--}-->
<!--}-->
<!--</script>-->
<!--&lt;!&ndash;<style lang="scss">&ndash;&gt;-->
<!--&lt;!&ndash;@import '~@/assets/css/function.scss';&ndash;&gt;-->
<!--&lt;!&ndash;@import '~@/assets/css/variable.scss';&ndash;&gt;-->

<!--&lt;!&ndash;$paddingLeftAndRight: half(27px);&ndash;&gt;-->
<!--&lt;!&ndash;#listItem {&ndash;&gt;-->
<!--&lt;!&ndash;  margin-bottom: half(10px);&ndash;&gt;-->
<!--&lt;!&ndash;  .top {&ndash;&gt;-->
<!--&lt;!&ndash;    display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;    align-items: center;&ndash;&gt;-->
<!--&lt;!&ndash;    font-size: half(24px);&ndash;&gt;-->
<!--&lt;!&ndash;    height: half(82px);&ndash;&gt;-->
<!--&lt;!&ndash;    padding-left: $paddingLeftAndRight;&ndash;&gt;-->
<!--&lt;!&ndash;    padding-right: $paddingLeftAndRight;&ndash;&gt;-->
<!--&lt;!&ndash;    background-color: #fff;&ndash;&gt;-->
<!--&lt;!&ndash;    img {&ndash;&gt;-->
<!--&lt;!&ndash;      width: half(70px);&ndash;&gt;-->
<!--&lt;!&ndash;      height: half(70px);&ndash;&gt;-->
<!--&lt;!&ndash;      border-radius: 50%;&ndash;&gt;-->
<!--&lt;!&ndash;      margin-right: half(8px);&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;    .userName {&ndash;&gt;-->
<!--&lt;!&ndash;      color: #626b77;&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;    .status {&ndash;&gt;-->
<!--&lt;!&ndash;      color: #fc8a04;&ndash;&gt;-->
<!--&lt;!&ndash;      margin-left: auto;&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  .desc {&ndash;&gt;-->
<!--&lt;!&ndash;    display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;    padding: half(23px) $paddingLeftAndRight 0;&ndash;&gt;-->
<!--&lt;!&ndash;    img {&ndash;&gt;-->
<!--&lt;!&ndash;      width: half(170px);&ndash;&gt;-->
<!--&lt;!&ndash;      height: half(170px);&ndash;&gt;-->
<!--&lt;!&ndash;      margin-right: half(16px);&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;    .right {&ndash;&gt;-->
<!--&lt;!&ndash;      display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;      font-size: half(22px);&ndash;&gt;-->
<!--&lt;!&ndash;      color: #bbc0cb;&ndash;&gt;-->
<!--&lt;!&ndash;      flex: 1;&ndash;&gt;-->
<!--&lt;!&ndash;      flex-direction: column;&ndash;&gt;-->
<!--&lt;!&ndash;      .title {&ndash;&gt;-->
<!--&lt;!&ndash;        max-width: half(474px);&ndash;&gt;-->
<!--&lt;!&ndash;        font-size: half(28px);&ndash;&gt;-->
<!--&lt;!&ndash;        color: $font-color-black;&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;      .money {&ndash;&gt;-->
<!--&lt;!&ndash;        align-self: flex-end;&ndash;&gt;-->
<!--&lt;!&ndash;        font-size: half(28px);&ndash;&gt;-->
<!--&lt;!&ndash;        color: $font-color-black;&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  .statistics {&ndash;&gt;-->
<!--&lt;!&ndash;    display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;    height: half(75px);&ndash;&gt;-->
<!--&lt;!&ndash;    background-color: #fff;&ndash;&gt;-->
<!--&lt;!&ndash;    font-size: half(26px);&ndash;&gt;-->
<!--&lt;!&ndash;    align-items: center;&ndash;&gt;-->
<!--&lt;!&ndash;    justify-content: flex-end;&ndash;&gt;-->
<!--&lt;!&ndash;    padding-right: $paddingLeftAndRight;&ndash;&gt;-->
<!--&lt;!&ndash;    .total {&ndash;&gt;-->
<!--&lt;!&ndash;      font-size: half(36px);&ndash;&gt;-->
<!--&lt;!&ndash;      color: #fc8a04;&ndash;&gt;-->
<!--&lt;!&ndash;      i {&ndash;&gt;-->
<!--&lt;!&ndash;        font-style: normal;&ndash;&gt;-->
<!--&lt;!&ndash;        font-size: half(26px);&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;    .end-text {&ndash;&gt;-->
<!--&lt;!&ndash;      font-size: half(24px);&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;  .tool-bar {&ndash;&gt;-->
<!--&lt;!&ndash;    display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;    height: half(80px);&ndash;&gt;-->
<!--&lt;!&ndash;    justify-content: flex-end;&ndash;&gt;-->
<!--&lt;!&ndash;    align-items: center;&ndash;&gt;-->
<!--&lt;!&ndash;    padding-right: $paddingLeftAndRight;&ndash;&gt;-->
<!--&lt;!&ndash;    background-color: #fff;&ndash;&gt;-->
<!--&lt;!&ndash;    .van-button {&ndash;&gt;-->
<!--&lt;!&ndash;      height: half(52px);&ndash;&gt;-->
<!--&lt;!&ndash;      line-height: half(52px);&ndash;&gt;-->
<!--&lt;!&ndash;      width: half(120px);&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->
