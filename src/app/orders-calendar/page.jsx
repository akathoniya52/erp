// components/OrdersCalendar.js
"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import Details from "../orders/Details";

const OrdersCalendar = () => {
  let orders = useSelector((state) => state.order.orderData);
  const [data, setData] = useState({});
  const [toggle, setToggle] = useState(false);
  // State to store selected date
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Function to filter orders for the selected date
  const getOrdersForSelectedDate = () => {
    const formattedSelectedDate = selectedDate.toISOString().split("T")[0];
    return orders.filter((order) => order.orderDate === formattedSelectedDate);
  };

  return (
    <div className="container mx-auto mt-8">
      {toggle && (
        <div className="absolute z-10 w-full h-[100vh] bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center">
          <Details setToggle={setToggle} data={data} />
        </div>
      )}{" "}
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Orders Calendar View
        </h2>
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/3 mr-4">
            <Calendar onChange={handleDateChange} value={selectedDate} />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Orders for {selectedDate.toDateString()}
            </h3>
            <div className="cursor-pointer">
              {getOrdersForSelectedDate().length === 0 ? (
                <p className="text-gray-600">No orders for this date</p>
              ) : (
                getOrdersForSelectedDate().map((order) => (
                  <div
                    key={order.id}
                    className="bg-white shadow-md rounded-md p-4 mb-4"
                    onClick={() => {
                      setToggle(true);
                      setData(order);
                    }}
                  >
                    <p className="text-lg font-semibold text-gray-800">
                      Order ID: {order.orderId}
                    </p>
                    <p className="text-gray-600">
                      Customer: {order.customerName}
                    </p>
                    <p className="text-gray-600">
                      Order Date: {order.orderDate}
                    </p>
                    <p className="text-gray-600">Status: {order.status}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersCalendar;
