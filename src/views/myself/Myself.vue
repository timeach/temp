<template>
  <div class="top"></div>
  <img class="mypic" src= ../../images/avatar.jpg />
  <div class="myinfo">
    <div class="myinfo__title">热心市民李先生
      <img class="myinfo__title__pic" src= ../../images/star.png />
    </div>
    <div class="myinfo__id">ID: 1069643013</div>
    <div class="myinfo__line"></div>
    <div class="myinfo__detail">
      <div class="myinfo__detail__money">红包</div>
      <div class="myinfo__detail__coupon">优惠卷</div>
      <div class="myinfo__detail__bean">鲜豆</div>
      <div class="myinfo__detail__loan">白条</div>   
    </div>
    <div class="myinfo__numbers">
      <span class="myinfo__numbers__money">218</span>
      <span class="myinfo__numbers__coupon">12张</span>
      <span class="myinfo__numbers__bean">88</span>
      <span class="myinfo__numbers__loan">1000</span>
    </div>
  </div>
  <div class="myaccount">
    <div class="myaccount__wallet">
      <img class="myaccount__wallet__pic1" src= ../../images/money.png />
      <div class="myaccount__wallet__title">我的钱包</div>
      <div class="iconfont myaccount__wallet__icon">&#xe6f2;</div>
    </div>
      <div class="myaccount__address">
      <img class="myaccount__address__pic2" src= ../../images/address.png />
      <span class="myaccount__address__title">我的地址</span>
      <div class="iconfont myaccount__address__icon">
        <router-link :to="{path: `/address/`}">
          &#xe6f2;
        </router-link>
      </div>
    </div>
     <div class="myaccount__help">
      <img class="myaccount__help__pic3" src= ../../images/help.png />
      <span class="myaccount__help__title">客服与帮助</span>
      <div class="iconfont myaccount__help__icon">&#xe6f2;</div>
    </div>
  </div>

  <docker :currentIndex="3"/>
</template>

<script>
import Docker from '../../components/Docker'
export default {
  name: 'Myself',
  components: { Docker },
  
}
</script>

<style lang="scss" scoped>
.top{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2.5rem;
  background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
  border-bottom-left-radius: 90% 40%;
  border-bottom-right-radius: 90% 40%;
}
.mypic {
  position: absolute;
  top: .61rem;
  left: 1.4rem;
  right: 1.4rem;
  height: .94rem;
  width: .94rem;
  border-radius: 50%;
  z-index: 2;
}
.myinfo{
  position: absolute;
  top: 1.08rem;
  left: .18rem;
  right: .18rem;
  height: 2.03rem;
  background: #FFFFFF;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08);
  border-radius: 8px;
  z-index: 1;
  &__title {
    padding: .59rem .84rem 0 .85rem;
    font-size: 24px;
    color: #262628;
    letter-spacing: 0.19px;
    text-align: center;
    line-height: 36px;
    &__pic {
      position: absolute;
      top: .74rem;
      right: .61rem;
      bottom: 1.22rem;
      left: 2.71rem;
      height: .11rem;
      width: .11rem;
    }
  }
  &__id {
    padding: .02rem .88rem 0 .89rem;
    font-size: 14px;
    color: #C1C0C9;
    text-align: center;
  }
  &__line {
    margin-top: .12rem;
    margin-bottom: .12rem;
    width:100%;
    height: .01rem;
    background: #F1F1F1;
  }
  &__detail {
    display: flex;
    font-size: 12px;
    color: #C1C0C9;
    text-align: center;
    margin-bottom: .03rem;
    &__money{ 
      flex-basis: 25%;
    }
    &__coupon {
      flex-basis: 25%;
    }
    &__bean {
      flex-basis: 25%;
    }
    &__loan {
      flex-basis: 25%;
    }
  }
  &__numbers{
    display:flex;
    font-size: 20px;
    color: #262628;
    text-align: center;
    line-height: .28rem;
    &__money{ 
      flex-basis: 25%;
    }
    &__coupon {
      flex-basis: 25%;
    }
    &__bean {
      flex-basis: 25%;
    }
    &__loan {
      flex-basis: 25%;
    }
  }
}
.myaccount {
  position:absolute;
  top: 3.27rem;
  right: .18rem;
  bottom: 1.94rem;
  left: .18rem;
  height: 1.46rem;
  background: #FFFFFF;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08);
  border-radius: 8px;
  &__wallet {
    display: flex;
    &__pic1{
        position:absolute;
        top: .16rem;
        right: 3.01rem;
        bottom: 1.08rem;
        left: .16rem;
        width: .22rem;
        height: .22rem;
        background: #ED4A47;
        border-radius: 8px;
    }
    &__title {
      margin: .17rem 0 .09rem .5rem;
      font-size: 14px;
      line-height: .20rem;
      color: #262626;
    }
    &__icon {
      flex: 1;
      margin-bottom: .12rem;
      margin-right: .16rem;
      text-align: left;
      color: #C1C0C9;
      transform: rotate(180deg);
    }
  }
    &__address {
    display: flex;
    &__pic2{
        position:absolute;
        top: .62rem;
        right: 3.01rem;
        bottom: .62rem;
        left: .16rem;
        width: .22rem;
        height: .22rem;
        background: #32C5FF;;
        border-radius: 8px;
    }
    &__title {
      margin: .17rem 0 .09rem .5rem;
      font-size: 14px;
      line-height: .20rem;
      color: #262626;
    }
    &__icon {
      flex: 1;
      margin-bottom: .12rem;
      margin-right: .16rem;
      text-align: left;
      color: #C1C0C9;
      transform: rotate(180deg);
        a {
        color: #C1C0C9;
        text-decoration: none;
    }
    }
  }
  &__help {
    display: flex;
    &__pic3{
        position:absolute;
        top: 1.08rem;
        right: 3.01rem;
        bottom: .16rem;
        left: .16rem;
        width: .22rem;
        height: .22rem;
        background: #32C5FF;;
        border-radius: 8px;
    }
    &__title {
      margin: .17rem 0 .09rem .5rem;
      font-size: 14px;
      line-height: .20rem;
      color: #262626;
    }
    &__icon {
      flex: 1;
      margin-bottom: .12rem;
      margin-right: .16rem;
      text-align: left;
      color: #C1C0C9;
      transform: rotate(180deg);
    }
  }
}
</style>
