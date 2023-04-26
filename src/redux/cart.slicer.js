import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalCount: 0,
  totalPrice: 0,
  user: {},
};

const cartSlicer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      let copyArray = [...state.cart];
      let itemIndex = null;

      copyArray.find((el, index) => {
        if (el._id === action.payload._id) {
          itemIndex = index;
          return;
        }
      });

      if (itemIndex === null) {
        copyArray.push({
          ...action.payload,
          count: action.payload.count || 1,
          cartTotal:
            action.payload.price * action.payload.count || action.payload.price,
        });

        state.totalPrice +=
          action.payload.price * action.payload.count || action.payload.price;
        state.totalCount++;
      } else {
        copyArray[itemIndex].count += action.payload.count || 1;
        state.totalPrice +=
          action.payload.price * action.payload.count || action.payload.price;
      }
      state.cart = copyArray;
      // cartSlicer.caseReducers.updateLocalStorage({ ...state });
    },
    restoreCart: (state, action) => {
      state.cart = initialState.cart;
      state.totalPrice = initialState.totalPrice;
      state.totalCount = initialState.totalCount;
    },
    deleteFromCart: (state, action) => {
      let { id, index } = action.payload;
      let copyCart = [...state.cart];

      state.totalCount--;
      state.cart = copyCart.filter((el) => {
        return el._id !== id;
      });

      const deletedCart = copyCart.find((el) => {
        return el._id === id;
      });

      state.totalPrice =
        state.totalPrice - deletedCart.price * deletedCart.count;
    },

    setCustomer: (state, action) => {
      state.user = action.payload;
    },

    setPrice: (state, action) => {
      const { increment, index } = action.payload;

      let copyArray = [...state.cart];

      copyArray[index].cartTotal += copyArray[index].price * increment;

      state.totalPrice = subTotal(copyArray);

      if (copyArray[index].count === 1 && increment === -1) {
        copyArray.splice(index, 1);
        state.totalPrice = subTotal(copyArray);
        state.totalCount--;
      } else {
        copyArray[index].count += increment;
      }

      state.cart = copyArray;
    },
  },
});

function subTotal(cart) {
  return cart.reduce((acc, current) => {
    return acc + current.cartTotal;
  }, 0);
}

export const { addToCart, deleteFromCart, setPrice, setCustomer, restoreCart } =
  cartSlicer.actions;

export default cartSlicer.reducer;
