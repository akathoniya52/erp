// pages/products.js
"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, addProduct, editAndUpdate } from "@/redux/dataSlice";

const Products = () => {
  const dispatch = useDispatch();
  // State to store products data
  let data = useSelector((state) => state.data.ProductsData);
  const [products, setProducts] = useState(data);

  // State to manage form inputs for adding/editing products
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stockQuantity: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log(typeof formData.price);
  };

  // Function to handle adding a new product
  const handleAddProduct = () => {
    if (formData.id) {
      dispatch(editAndUpdate(formData));
      setFormData({
        name: "",
        category: "",
        price: "",
        stockQuantity: "",
      });
    } else {
      const newProduct = {
        id: products.length + 1, // Generate unique ID (replace with actual ID generation logic)
        ...formData,
      };
      setFormData({ name: "", category: "", price: "", stockQuantity: "" }); // Clear form inputs
      dispatch(addProduct(newProduct));
    }
  };

  // Function to handle editing a product
  const handleEditProduct = async (id) => {
    const data = products.find((product) => product.id === id);
    await setFormData(data);
    console.log(data);
    // dispatch(deleteProduct(data.id));
    // dispatch(addProduct())
    // handleAddProduct(id)
  };

  // Function to handle deleting a product
  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          Products Management
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Add New Product
              </h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
              />
              <input
                type="number"
                name="stockQuantity"
                placeholder="Stock Quantity"
                value={formData.stockQuantity}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
              />
              <button
                onClick={handleAddProduct}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Add Product
              </button>
            </div>
          </div>
          {data.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-2">
                  Category: {product.category}
                </p>
                <p className="text-gray-600 mb-2">Price: ${product.price}</p>
                <p className="text-gray-600 mb-2">
                  Stock Quantity: {product.stockQuantity}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleEditProduct(product.id, formData)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deleteProduct(product.id));
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
