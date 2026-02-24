import { createOrder } from "./FetchApi";

export const fetchData = async (cartListProduct, dispatch) => {
  dispatch({ type: "loading", payload: true });
  try {
    let responseData = await cartListProduct();
    if (responseData && responseData.Products) {
      setTimeout(function () {
        dispatch({ type: "cartProduct", payload: responseData.Products });
        dispatch({ type: "loading", payload: false });
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const pay = async (
  dispatch,
  state,
  setState,
  totalCost,
  history
) => {
  if (!state.address) {
    setState({ ...state, error: "Please provide your address" });
  } else if (!state.phone) {
    setState({ ...state, error: "Please provide your phone number" });
  } else {
    dispatch({ type: "loading", payload: true });

    let orderData = {
      allProduct: JSON.parse(localStorage.getItem("cart")),
      user: JSON.parse(localStorage.getItem("jwt")).user._id,
      amount: totalCost(),
      transactionId: "TXN-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
      address: state.address,
      phone: state.phone,
    };

    try {
      let resposeData = await createOrder(orderData);
      if (resposeData.success) {
        localStorage.setItem("cart", JSON.stringify([]));
        dispatch({ type: "cartProduct", payload: null });
        dispatch({ type: "cartTotalCost", payload: null });
        dispatch({ type: "orderSuccess", payload: true });
        dispatch({ type: "loading", payload: false });
        return history.push("/");
      } else if (resposeData.error) {
        console.log(resposeData.error);
        dispatch({ type: "loading", payload: false });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "loading", payload: false });
    }
  }
};
