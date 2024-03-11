// pages/dashboard.js
import Link from "next/link";
import { useSelector } from "react-redux";

function totalProducts(products) {
  let totalProduct = 0;
  products.forEach((element) => {
    totalProduct += parseInt(element.stockQuantity);
  });
  return totalProduct;
}

const Dashboard = () => {
  let orderData = useSelector((state) => state.order.orderData);
  let data = useSelector((state) => state.data.ProductsData);

  const totalProduct = totalProducts(data);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Key Metrics
              </h2>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-600">Total Number of Products:</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {totalProduct}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Total Number of Orders:</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {orderData.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow-sm rounded-lg">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Quick Navigation
              </h2>
              <div className="space-y-2">
                <Link
                  href="/products"
                  className="block text-blue-500 hover:text-blue-700"
                >
                  Products Management
                </Link>
                <Link
                  href="/orders"
                  className="block text-blue-500 hover:text-blue-700"
                >
                  Orders Management
                </Link>
                <Link
                  href="/orders-calendar"
                  className="block text-blue-500 hover:text-blue-700"
                >
                  Calendar View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
