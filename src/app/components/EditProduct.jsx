export default function AddProducts({ formData, setFormData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitEdit = () => {
    console.log(formData);
  };

  return (
    <div className="">
      <div className="text-[black]">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          Edit Product
        </h2>
        <input
          className="border border-gray-300 rounded-md p-2 mb-2 w-full"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          className="border border-gray-300 rounded-md p-2 mb-2 w-full"
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleInputChange}
        />
        <input
          className="border border-gray-300 rounded-md p-2 mb-2 w-full"
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <input
          className="border border-gray-300 rounded-md p-2 mb-2 w-full"
          type="number"
          name="stockQuantity"
          placeholder="Stock Quantity"
          value={formData.stockQuantity}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleSubmitEdit}
        >
          Edit Product
        </button>
      </div>
    </div>
  );
}
