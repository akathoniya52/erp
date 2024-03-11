// pages/orders.js
"use client";
import { useState } from "react";
// import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { deleteOrder, updateStatus } from "@/redux/orderSlice";
import Details from "./Details";

const Orders = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState({});
  // const router = useRouter();
  const dispatch = useDispatch();
  let orderData = useSelector((state) => state.order.orderData);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      {toggle && (
        <div className="absolute z-10 w-full h-[100vh] bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center">
          <Details setToggle={setToggle} data={data} />
        </div>
      )}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          Orders Management
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Order ID</th>
                <th className="py-3 px-6 text-left">Customer Name</th>
                <th className="py-3 px-6 text-left">Order Date</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {orderData.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {order.orderId}
                  </td>
                  <td className="py-3 px-6 text-left">{order.customerName}</td>
                  <td className="py-3 px-6 text-left">{order.orderDate}</td>
                  <td className="py-3 px-6 text-left">{order.status}</td>
                  <td className="py-3 px-6 text-left">
                    {/* View order details button */}
                    <button
                      className="mr-2 text-blue-600 hover:text-blue-900"
                      onClick={async () => {
                        setData(order);
                        setToggle(true);
                      }}
                    >
                      View Details
                    </button>
                    {/* Update order status button (optional) */}
                    <button
                      className={`mr-2 text-green-600 hover:text-green-900 ${
                        order.status === "Completed" ? `opacity-[0.5]` : ""
                      } `}
                      onClick={() => {
                        if (order.status !== "Completed") {
                            dispatch(updateStatus(order.id));
                        }
                      }}
                    >
                      Update Status
                    </button>
                    {/* Delete order button (optional) */}
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => dispatch(deleteOrder(order.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
