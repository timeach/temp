import Vuex from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList = () => {
  try{
  return JSON.parse(localStorage.cartList)
  } catch(e) {
    return {}
  }
}

export default Vuex.createStore({
  state: {
        // { shopId:{ shopName:'', productList:{ productId: {} } }}
    cartList:  getLocalCartList() 
        // shopId: {
        //  shopName:'沃尔玛',
        // productList: {
        //    productId:{
        //     _id: '1',
        //     name: 'tomato250g',
        //     imgUrl:'',
        //     sales: 10,
        //     price: 23.4,
        //     oldPrice: 44.1,
        //     count: 2
        //   },
        // },  
    },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo } = payload;
      let shopInfo = state.cartList[shopId]
      if(!shopInfo) { shopInfo = {shopName:'', productList:{}} }
      let product = shopInfo.productList[productId]
      if(!product) {
        product = productInfo
        product.count = 0
      }
      product.count = product.count + payload.num
      if(payload.num > 0) { product.check = true}
      if(product.count < 0) { product.count = 0}
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName =  shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    cleanCartProducts(state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    setCartItemsChecked(state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if(products) {
        for (let key in products) {
          products[key].check = true
        }
      }
      setLocalCartList(state)
    },
    clearCartData(state, shopId) {
      delete state.cartList[shopId]
    }
  },
  actions: {
  },
  modules: {
  }
})
