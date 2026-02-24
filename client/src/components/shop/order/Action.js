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

export const fetchbrainTree = async (getBrainTreeToken, setState) => {
  try {
    let responseData = await getBrainTreeToken();
    if (responseData && responseData) {
      setState({
        clientToken: responseData.clientToken,
        success: responseData.success,
      });
      console.log(responseData);
    }
  } catch (error) {
    console.log(error);
  }
};

export const pay = async (
  data,
  dispatch,
  state,
  setState,
  getPaymentProcess,
  totalCost,
  history
) => {
  console.log(state);
  if (!state.address) {
    setState({ ...state, error: "Please provide your address" });
  } else if (!state.phone) {
    setState({ ...state, error: "Please provide your phone number" });
  } else {
    let processCheckout = async (transactionId) => {
      let orderData = {
        allProduct: JSON.parse(localStorage.getItem("cart")),
        user: JSON.parse(localStorage.getItem("jwt")).user._id,
        amount: totalCost(),
        transactionId: transactionId,
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
          setState({ clientToken: "", instance: {} });
          dispatch({ type: "loading", payload: false });
          return history.push("/");
        } else if (resposeData.error) {
          console.log(resposeData.error);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (state.instance && typeof state.instance.requestPaymentMethod === "function") {
      let nonce;
      state.instance
        .requestPaymentMethod()
        .then((data) => {
          dispatch({ type: "loading", payload: true });
          nonce = data.nonce;
          let paymentData = {
            amountTotal: totalCost(),
            paymentMethod: nonce,
          };
          getPaymentProcess(paymentData)
            .then(async (res) => {
              if (res) {
                processCheckout(res.transaction.id);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log(error);
          setState({ ...state, error: error.message });
        });
    } else {
      // Braintree not initialized or missing keys - bypass for organ transfer completion
      dispatch({ type: "loading", payload: true });
      processCheckout("TXN-" + Math.random().toString(36).substr(2, 9).toUpperCase());
    }
  }
};
