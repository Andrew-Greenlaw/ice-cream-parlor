const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]

const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Choclate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}]

let cart = []

function drawCart() {

  let template = ''
  let total = 0



  cart.forEach(item => {
    total += item.price * item.quantity
    template += `
      <div class="col-4">
      <p>${item.name}</p>
      </div>
      <div class="col-8  d-flex justify-content-evenly">
      <p>${item.quantity}</p>
      <p>$${item.price}</p>
      </div>
      `
  });

  // @ts-ignore
  document.getElementById('total').innerText = total.toFixed(2)
  // @ts-ignore
  document.getElementById('cart').innerHTML = template

}

function addItemToCart(name) {

  let allItems = [...vessels, ...iceCream, ...toppings]
  let found = allItems.find(item => item.name == name)

  console.log(name)
  // @ts-ignore
  if (found.quantity) {
    console.log(found)
    // @ts-ignore
    found.quantity++
    drawCart()
  } else {
    cart.push(found)
    // @ts-ignore
    found.quantity++
    drawCart()
  }
}

function removeItem() {

}

function checkout() {
  cart.length = 0
  drawCart()
  document.getElementById('checkoutButton')

}

/*
function addVessalToCart(name) {

  let vessel = vessels.find(vessel => vessel.name == name)
  console.log(vessel)

  // @ts-ignore
  vessel.quantity++

  drawVesselToCart()

}

function addToppingToCart(name) {

  let topping = toppings.find(topping => topping.name == name)
  console.log(topping)

  // @ts-ignore
  topping.quantity++

  drawToppingToCart()

}

function addIceCreamToCart(name) {

  let cream = iceCream.find(cream => cream.name == name)
  console.log(cream)

  // @ts-ignore
  cream.quantity++

  drawIceCreamToCart()

}

function drawVesselToCart() {

  let cart = document.getElementById('cart')
  let template = ''

  vessels.forEach(vessel => {

    if (vessel.quantity > 0) {

      template += `
      <div class="col-4">
        <p>${vessel.name}</p>
      </div>
      <div class="col-8  d-flex justify-content-evenly">
        <p>${vessel.quantity}</p>
        <p>$${vessel.price}</p>
      </div>
      `
    }

  })

  // @ts-ignore
  cart.innerHTML = template

}

function drawIceCreamToCart() {

  let cart = document.getElementById('creamCart')
  let template = ''

  iceCream.forEach(cream => {

    if (cream.quantity > 0) {

      template += `
      <div class="col-12 mb-2 bg-light">
        <div class="row cart-item">
          <div class="col-4">
            <p>${cream.name}</p>
          </div>
          <div class="col-8  d-flex justify-content-evenly">
            <p>${cream.quantity}</p>
            <p>$${cream.price}</p>
            <p id="creamTotal">$</p>
          </div>
        </div>
      </div>
      `
    }

  })
  // allI
  // @ts-ignore
  cart.innerHTML = template
  drawTotal()
}

function drawToppingToCart() {

  let cart = document.getElementById('toppingCart')
  let template = ''

  toppings.forEach(topping => {

    if (topping.quantity > 0) {

      template += `
      <div class="col-12 mb-2 bg-light">
        <div class="row cart-item">
          <div class="col-4">
            <p>${topping.name}</p>
          </div>
          <div class="col-8  d-flex justify-content-evenly">
            <p>${topping.quantity}</p>
            <p>$${topping.price}</p>
            <p id="toppingTotal"></p>
          </div>
        </div>
      </div>
      `
    }

  })

  // @ts-ignore
  cart.innerHTML = template
  drawTotal()
}

function drawTotal() {
  let total = 0
  vessels.forEach(vessel => {
    total += vessel.price * vessel.quantity
  })
  // @ts-ignore
  document.getElementById('vesselTotal').innerText = '$' + total


}

// drawCart()
*/