
const store = Vue.reactive({
  state: {
    cartState: []
  },

  getCart() {
    axios.get('/cart.js')
      .then(response => {
        // goes to the top of the cart
        this.state.cartState.unshift(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
})
