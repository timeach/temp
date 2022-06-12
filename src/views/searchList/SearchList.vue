<template>
  <div class="wrapper">
    <div class="search">
      <div
        class="search__back iconfont"
        @click="handleBackClick"
      >&#xe6f2;</div>
       <div class="search__content">
         <span class="search__content__icon iconfont">&#xe62d;</span>
         <input
          class="search__content__input"
          placeholder="请输入商品名称"
          v-model="keyword"
          @change="handleSearchInputChange"
        />
       </div>
    </div>
    <router-link
      v-for="item in searchList"
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { get } from '../../utils/request';
import ShopInfo from '../../components/ShopInfo.vue';

const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
      router.back()
    }
  return handleBackClick
}

const useSearchListEffect = () => {
  const searchList = ref([]);
  const getSearchList = async (keyword) => {
    const result = await get('/api/shop/search',{ keyword })
    if (result?.errno === 0 && result?.data?.length) {
      searchList.value = result.data
    }
  }
  return { searchList, getSearchList }
}

export default {
  name: 'SearchList',
  components: { ShopInfo },
  setup() {
    const route = useRoute();
    const keyword = ref(route.query.keyword || '')

    const handleSearchInputChange = () => {
      getSearchList(keyword.value)
    }
    const handleBackClick = useBackRouterEffect();
    // 获取搜索列表
    const { searchList, getSearchList } = useSearchListEffect()
    getSearchList(keyword.value)

    return { handleBackClick, keyword, handleSearchInputChange, searchList }
  }

}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 .18rem;
    a {
    text-decoration: none;
  }
}
.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;
  &__back {
    width: .3rem;
    font-size: .24rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: #F5F5F5;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      text-align: center;
      color: #B7B7B7;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      color: #333;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>