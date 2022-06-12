<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__title">我的全部购物车</div>
    </div>
    <div 
    class="products"
    v-for="(i, key) in cartList"
    :key=key
    @click="() => handleCartClick(key)"
    >
        <div class="products__title">{{i.shopName}}</div>
        <div class="products__list">
            <div 
            class="products__item"
            v-for="item in i.productList"
            :key="item._id"
            v-show="item.count > 0 "
            >
                <img class="products__item__img" :src="item.imgUrl" />
                <div class="products__item__detail">
                  <h4 class="products__item__title">{{item.name}}</h4>
                  <p class="products__item__price">
                          <span class="products__item__yen">&yen;</span>
                           {{item.price}} x {{item.count}}  
                       <span class="products__item__total">
                          <span class="products__item__yen">&yen;</span>
                           {{(item.price * item.count).toFixed(2)}}  
                      </span>
                  </p>
                </div>
            </div>
            <div class="products__count">
              <span class="products__count__num">共计 件</span>
            </div>
        </div>
        <div class="empty"
        v-if="Object.keys(cartList).length === 0">暂无购物数据</div>
    </div>
    <Docker :currentIndex="1"/>
 </div>
</template>

<script>
// import { computed } from '@vue/runtime-core'
import Docker from '../../components/Docker'
import { useRouter } from 'vue-router'
// import { useCommonCartEffect } from '../../effects/cartEffects'


export default {
  name: 'CartList',
  components: {  Docker },
  setup() {

    const cartList = JSON.parse(localStorage.cartList || '[]')
  // const productList = cartList[shopId]?.productList
    for(let i in cartList) {
      const cart = cartList[i];
      const productList = cart.productList;
      let total = 0;
      for(let j in productList) {
          const product = productList[j]
          total += product['count']
      }
      cart.total = total
    }
  // const { cartList } = useCommonCartEffect()
    console.log(cartList)

    const router = useRouter();
    const handleCartClick = (key) => {
      router.push(`/orderConfirmation/${key}`)
    }
    return { cartList, handleCartClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top:0;
    background-color: rgb(248,248,248);
    overflow-y: scroll;
}
.top {
    position: relative;
    height: .64 rem;
    background-color: #FFF;
    &__title {
      position: relative;
      padding-top: .2rem;
      padding-bottom: .1rem;
      line-height: .24rem;
      color: #333;
      text-align: center;
      font-size: .16rem;
  }
}
.products {
    margin: .16rem .18rem;
    background: #FFF;
    padding: 0 0 .01rem 0;
    &__title {
    padding: .16rem .16rem .04rem .16rem;
    font-size: 16px;
    color: #333333;
    }
  &__list {
    background: #FFF;
  }
  &__count {
      margin: 0 0 .16rem .16rem;
      height: .28rem;
      width: 3.07rem;
      background: #F5F5F5;
      text-align: center;
      &__num {
      font-size: 14px;
      line-height: .2rem;
      color: #999999;
      }
  }
    &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
        &__detail {
        flex:1;
        }
        &__img {
        width: .46rem;
        height: .46rem;
        margin-right: .16rem;
        }
        &__title {
        margin: 0;
        line-height: .2rem;
        font-size: .14rem;
        color: $content-fontcolor;
        @include ellipsis;
        }
        &__price {
        display:flex;
        margin: .06rem 0 0 0;
        line-height: .2rem;
        font-size: .14rem;
        color: $hightlight-fontColor;
        }
        &__total {
        flex: 1;
        text-align: right;
        color: #000000;
        }
        &__yen {
        font-size: .12rem;
        }
    }
  .empty {
    font-size: .16rem;
    line-height: .5rem;
    text-align: center;
    color: $light-fontColor;
  }
}
</style>
