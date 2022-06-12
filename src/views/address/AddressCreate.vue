<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__title">
      <div 
      class="iconfont top__title__icon"
      @click="handleBackClick"
      >&#xe6f2;</div>
     新建收货地址</div>
      <div class="top__create">保存</div>
    </div>

    <div class="ads">
      <div class="ads__title">所在城市：
        <input type="text" placeholder="如北京市" class="ads__title__detail">
      </div>
      <div class="ads__line"></div>
      <div class="ads__title">小区/大厦/学校：
        <input type="text" placeholder="如理工大学国防科技园" class="ads__title__detail">
      </div>
      <div class="ads__line"></div>
      <div class="ads__title">楼号-门牌号：
         <input type="text" placeholder="A号楼B层" class="ads__title__detail">
      </div>
      <div class="ads__line"></div>
      <div class="ads__title">收货人：
        <input type="text" placeholder="请填写收货人的姓名" class="ads__title__detail">
      </div>
      <div class="ads__line"></div>
      <div class="ads__title">联系电话：
        <input type="text" placeholder="请填写收货手机号" class="ads__title__detail">
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter} from 'vue-router'
export default {
    name: 'AddressCreate',
    setup() {
        const router = useRouter()
        const handleBackClick = () => { router.back() }
        return { handleBackClick }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top:0;
  background-color: #eee;
  z-index: 1;
}

.top {
  position: relative;
  height: .64rem;
  background: #fff;
  &__title {
    position: relative;
    padding-top: .31rem;
    line-height: .22rem;
    color: #333;
    text-align: center;
    font-size: .16rem;
      &__icon {
      position:absolute;
      left: .18rem;
      font-size: .22rem;
      color: #B6B6B6;
        a {
          color: #C1C0C9;
          text-decoration: none;
        }
      } 
  }
    &__create {
    position:absolute;
    right: .18rem;
    top: .32rem;
    line-height: .20rem;
    font-size: 14px;
    color: #333333;
    text-align: right;
  }
}
.ads {
  position: absolute;
  top: .76rem;
  left: 0;
  right: 0;
  height: 2.24rem;
  background: #FFFFFF;
  &__title {
    margin-top: .12rem;
    margin-left: .18rem;
    font-size: 14px;
    color: #666666;
    line-height: 20px;
    &__detail{
      color: #333333;
      border: none;
    }
  }
  &__line {
    margin: .12rem .18rem 0 .18rem;
    height: .01rem;
    background: #F1F1F1;
  }
}

</style>