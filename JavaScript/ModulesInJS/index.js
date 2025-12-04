import login from './user.js'
import {
  getAllProducts as getAllP,
  getFilteredProducts as getFilteredP,
  getProductDetails as getPDetails
} from './product.js'
import cartAbc from './cart.js'
import orderAbc from './order.js'

import test from './feature/abc.js' // Import from child folder file

login()
getAllP()
getFilteredP()
getPDetails()

cartAbc()
orderAbc()

test()