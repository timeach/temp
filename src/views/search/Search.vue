<template>
  <div class="wrapper">
    <div class="search">
      <span class="iconfont">&#xe62d;</span>
      <input class="search__area" @change="handleSearchChange"
      placeholder="山姆会员商店优惠商品"
      />
      <div class="search__cancel" @click="handleCancel">取消</div>
    </div>
    <div class="area">
      <h4 class="area__title">
        搜索历史
      <span class="area__title__clear" @click="clearSearchHistory">清除搜索历史</span>
      </h4>
      <ul class="area__list" v-if="history.length">
        <li class="area__list__item" 
        v-for="item in history" :key="item" 
        @click="() => goToSearchList(item)"
        >{{item}}
        </li>
      </ul>
    </div>
    <div class="area">
      <h4 class="area__title">
        热门搜索
      </h4>
      <ul class="area__list" v-if="hotWordList.length">
        <li class="area__list__item" 
        v-for="item in hotWordList" :key="item" 
        @click="() => goToSearchList(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { get } from '../../utils/request'
// 热词相关逻辑
const useHotwordListEffect = () => {
  const hotWordList = ref([]);
  const getHotWordList = async () => {
    const result = await get('/api/shop/search/hot-words')
    if (result?.errno === 0 && result?.data?.length) {
      hotWordList.value = result.data
    }
  }
  return { hotWordList, getHotWordList }
}

export default {
  name: 'Search',
  setup() {
    const router = useRouter();
    const history = ref(JSON.parse(localStorage.history || "[]"));

    // 当用户执行搜索时，先判断是否有输入内容，无内容直接返回；
    // 有内容时再查找是否已存在历史记录中, 将内容存在变量hasValue中；
    // 判断没在记录中，则添加searchValue到历史记录history.value中，转JSON字符串赋值
    const handleSearchChange = (e) => {
      const searchValue = e.target.value;
      if(!searchValue) return;
      const hasValue = history.value.find(item => item === searchValue)
      if(!hasValue){
        history.value.push(searchValue);
        localStorage.history = JSON.stringify(history.value)
      }
      router.push(`/searchList?keyword=${searchValue}`)
    }
    // 清理历史记录
    const clearSearchHistory = () => {
      history.value = [];
      // localStorage.history = JSON.stringify([])
    }
    // 取消搜索
    const handleCancel = () => {
      router.back()
    }
    // 热词搜索
    const { hotWordList, getHotWordList } = useHotwordListEffect();
    getHotWordList();

    const goToSearchList = (item) => {
      router.push(`/searchList?keyword=${item}`)
    }

    return { handleSearchChange, history, clearSearchHistory, handleCancel, hotWordList,
            goToSearchList }
  }

}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 .18rem;
   .search {
     position: relative;
     display: flex;
     line-height: .32rem;
     margin-top: .16rem;
     color: #333;
     .iconfont {
       position: absolute;
       left: .16rem;
       color: #b7b7b7
     }
     &__area {
        flex: 1; 
        background: #F5F5F5;
        border-radius: .16rem;
        border: none;
        outline: none;
        padding: 0 .12rem 0 .44rem;
        font-size: .14rem;
     }
     &__cancel {
       margin-left: .12rem;
       font-size: .16rem;
     }
   }
   .area {
     margin-top: .24rem;
     &__title {
       line-height: .22rem;
       margin: 0;
       font-size: .16rem;
       font-weight: normal;
       color: #333;
       &__clear {
         float: right;
         font-size: .14rem;
       }
     }
     &__list {
       margin: 0 0 0 -.1rem;
       padding: 0;
       list-style-type: none;
       &__item {
         display: inline-block;
         line-height: .32rem;
         font-size: .14rem;
         background: #f5f5f5;
         border-radius: .02rem;
         color: #666;
         padding: 0 0.1rem;
         margin-left: .1rem;
         margin-top: .12rem;
       }
     }
   }
}
</style>