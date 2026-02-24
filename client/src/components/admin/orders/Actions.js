import { getAllOrder, deleteOrder } from "./FetchApi";

export const fetchData = async (dispatch) => {
  dispatch({ type: "loading", payload: true });
  try {
    let responseData = await getAllOrder();
    if (responseData && responseData.Orders) {
      dispatch({
        type: "fetchOrderAndChangeState",
        payload: responseData.Orders,
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    dispatch({ type: "loading", payload: false });
  }
};

/* This method call the editmodal & dispatch category context */
export const editOrderReq = (oId, type, status, dispatch) => {
  if (type) {
    console.log("click update");
    dispatch({ type: "updateOrderModalOpen", oId: oId, status: status });
  }
};

export const deleteOrderReq = async (oId, dispatch) => {
  let responseData = await deleteOrder(oId);
  console.log(responseData);
  if (responseData && responseData.success) {
    fetchData(dispatch);
  }
};

/* Filter All Order */
export const filterOrder = async (
  type,
  data,
  dispatch,
  dropdown,
  setDropdown
) => {
  let responseData = await getAllOrder();
  if (responseData && responseData.Orders) {
    let newData;
    if (type === "All") {
      dispatch({
        type: "fetchOrderAndChangeState",
        payload: responseData.Orders,
      });
      setDropdown(!dropdown);
    } else if (type === "Not processed") {
      newData = responseData.Orders.filter(
        (item) => item.status === "Not processed"
      );
      dispatch({ type: "fetchOrderAndChangeState", payload: newData });
      setDropdown(!dropdown);
    } else if (type === "Under Scrutiny") {
      newData = responseData.Orders.filter(
        (item) => item.status === "Under Scrutiny"
      );
      dispatch({ type: "fetchOrderAndChangeState", payload: newData });
      setDropdown(!dropdown);
    } else if (type === "Request Accepted") {
      newData = responseData.Orders.filter((item) => item.status === "Request Accepted");
      dispatch({ type: "fetchOrderAndChangeState", payload: newData });
      setDropdown(!dropdown);
    } else if (type === "Expired") {
      newData = responseData.Orders.filter(
        (item) => item.status === "Expired"
      );
      dispatch({ type: "fetchOrderAndChangeState", payload: newData });
      setDropdown(!dropdown);
    } else if (type === "Cancelled") {
      newData = responseData.Orders.filter(
        (item) => item.status === "Cancelled"
      );
      dispatch({ type: "fetchOrderAndChangeState", payload: newData });
      setDropdown(!dropdown);
    }
  }
};
