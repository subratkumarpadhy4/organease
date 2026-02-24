import React, { Fragment, useEffect, useContext } from "react";
import moment from "moment";
import { fetchOrderByUser } from "./Action";
import Layout, { DashboardUserContext } from "./Layout";

const apiURL =
  process.env.REACT_APP_API_URL || "";

const TableHeader = () => {
  return (
    <Fragment>
      <thead>
        <tr>
          <th className="px-4 py-2 border">Organ ID</th>
          <th className="px-4 py-2 border">Status</th>
          <th className="px-4 py-2 border">PIN Code</th>
          <th className="px-4 py-2 border">Phone</th>
          <th className="px-4 py-2 border">Address</th>
          {/* <th className="px-4 py-2 border">Organ ID</th> */}
          <th className="px-4 py-2 border">Created At</th>
          <th className="px-4 py-2 border">Updated At</th>
        </tr>
      </thead>
    </Fragment>
  );
};

const TableBody = ({ order }) => {
  return (
    <Fragment>
      <tr className="border-b">
        <td className="w-48 hover:bg-gray-200 p-2 flex flex-col space-y-1">
          {order.allProduct.map((product, i) => {
            return (
              <span className="block flex items-center space-x-2" key={i}>
                <img
                  className="w-8 h-8 object-cover object-center"
                  src={product.id.pImages[0] && product.id.pImages[0].startsWith("data:") ? product.id.pImages[0] : `${apiURL}/uploads/products/${product.id.pImages[0]}`}
                  alt="productImage"
                />
                {/* <span>{product.id.pPrice}</span> */}
                {/* <span>{product.quantitiy}x</span> */}
                <td className="hover:bg-gray-200 p-2 text-center">
                  {order.transactionId}
                </td>
              </span>
            );
          })}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center cursor-default">
          {order.status === "Not processed" && (
            <span className="block text-red-600 rounded-full text-center text-xs px-2 font-semibold">
              {order.status}
            </span>
          )}
          {order.status === "Under Scrutiny" && (
            <span className="block text-yellow-600 rounded-full text-center text-xs px-2 font-semibold">
              {order.status}
            </span>
          )}
          {order.status === "Request Accepted" && (
            <span className="block text-blue-600 rounded-full text-center text-xs px-2 font-semibold">
              {order.status}
            </span>
          )}
          {order.status === "Expired" && (
            <span className="block text-green-600 rounded-full text-center text-xs px-2 font-semibold">
              {order.status}
            </span>
          )}
          {order.status === "Cancelled" && (
            <span className="block text-red-600 rounded-full text-center text-xs px-2 font-semibold">
              {order.status}
            </span>
          )}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center">
          {order.amount}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center">{order.phone}</td>
        <td className="hover:bg-gray-200 p-2 text-center">{order.address}</td>

        <td className="hover:bg-gray-200 p-2 text-center">
          {moment(order.createdAt).format("lll")}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center">
          {moment(order.updatedAt).format("lll")}
        </td>
      </tr>
    </Fragment>
  );
};

const OrdersComponent = () => {
  const { data, dispatch } = useContext(DashboardUserContext);
  const { OrderByUser: orders } = data;

  useEffect(() => {
    fetchOrderByUser(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data.loading) {
    return (
      <div className="w-full md:w-9/12 flex items-center justify-center py-24">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </div>
    );
  }
  return (
    <Fragment>
      <div className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
        <div className="border">
          <div className="py-4 px-4 text-lg font-semibold border-t-2 border-yellow-700">
            My Requests
          </div>
          <hr />
          <div className="overflow-auto bg-white shadow-lg p-4">
            <table className="table-auto border w-full my-2">
              <TableHeader />
              <tbody>
                {orders && orders.length > 0 ? (
                  orders.map((item, i) => {
                    return <TableBody key={i} order={item} />;
                  })
                ) : (
                  <tr>
                    <td colSpan="8" className="py-16">
                      <div className="flex flex-col items-center justify-center space-y-6">
                        {/* 3D Floating Medical Shield Animation */}
                        <div
                          className="relative w-32 h-32 flex items-center justify-center animate-bounce"
                          style={{ animationDuration: '3s' }}
                        >
                          {/* Glowing Ambient Aura */}
                          <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-30"></div>
                          {/* 3D Drop-Shadowed SVG */}
                          <svg
                            className="w-24 h-24 text-blue-600 filter drop-shadow-2xl z-10"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <defs>
                              <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#1e3a8a" />
                              </linearGradient>
                            </defs>
                            <path fill="url(#shieldGrad)" d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm0 2.18l7.5 2.5v5.32c0 4.67-3.23 8.94-7.5 10.16-4.27-1.22-7.5-5.49-7.5-10.16V6.68l7.5-2.5zm-1 3.82v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
                          </svg>
                        </div>

                        <div className="flex flex-col items-center">
                          <span className="text-2xl font-bold text-gray-800 tracking-wider">No Pending Requests</span>
                          <span className="text-gray-500 mt-2 mb-6">Your hospital's OrganIQ request timeline is currently empty.</span>

                          <a href="/" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 shadow-lg mt-4">
                            + Initiate New Request
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="text-sm text-gray-600 mt-2">
              Total {orders && orders.length} order found
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const UserOrders = (props) => {
  return (
    <Fragment>
      <Layout children={<OrdersComponent />} />
    </Fragment>
  );
};

export default UserOrders;
