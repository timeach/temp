<template>
<div class="wrapper">
  <div class="top">
    <div class="top__title">
      <div 
      class="iconfont top__title__icon"
      @click="handleBackClick"
      >&#xe6f2;</div>
     管理收货地址</div>
    <div class="top__create">
        <router-link :to="{path: '/addressCreate/'}">
        新建
        </router-link>
    </div>
  </div>
  <div class="title">我的收货地址</div>
  <div class="address">
    <div class="address__title">
    <span class="address__title__name">小慕</span>
    <span class="address__title__phone">18911023261</span>
    </div>
    <div class="address__detail">
      北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层 
    </div>
    <div class="iconfont address__icon">
        <router-link :to="{path: '/addressEdit/'}">
          &#xe6f2;
        </router-link>
    </div>
  </div>
</div>
</template>

<script>
import { useRouter} from 'vue-router'
export default {
    name: 'Address',
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
    a {
      color: #333333;
      text-decoration: none;
    }
  }
}
.title {
  position: absolute;
  left: .18rem;
  top: .8rem;
  font-size: 14px;
  color: #333333;
}

.address {
  position: absolute;
  left: .18rem;
  right: .18rem;
  top: 1.12rem;
  height: 1.04rem;
  background: #FFFFFF;
  border-radius: 4px;
  &__title {
    display: flex;
    font-size: 14px;
    color: #999999;
    &__name {
      margin: .18rem .66rem 0 .16rem;
    }
    &__phone {
      margin-top: .18rem;
    }
  }
  &__detail {
    margin: .08rem .63rem .18rem .16rem;
    padding-right: .1rem;
    line-height: .2rem;
    font-size: 14px;
    color: #333333;
  }
  &__icon {
    position:absolute;
    top: .44rem;
    right: .16rem;
    color: #C1C0C9;
    transform: rotate(180deg) scale(1.5);
      a {
        color: #C1C0C9;
        text-decoration: none;
    }
  }
}

</style>