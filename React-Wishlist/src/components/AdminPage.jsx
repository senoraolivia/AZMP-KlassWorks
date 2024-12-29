import React, { useState } from 'react';
import productsData from '../data/productsData';

const AdminPage = () => {
  const [products, setProducts] = useState(productsData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: '',
  });

  const handleAddProduct = () => {
    const productToAdd = {
      ...newProduct,
      id: products.length + 1,
      price: parseFloat(newProduct.price),
      rating: { rate: 0, count: 0 },
    };
    setProducts([...products, productToAdd]);
    setIsAddModalOpen(false);
    setNewProduct({ title: '', description: '', price: '', category: '', image: '' });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleEditProduct = () => {
    setProducts(products.map(product => 
      product.id === currentProduct.id ? { ...product, ...currentProduct } : product
    ));
    setIsEditModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <button onClick={() => setIsAddModalOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Add Product</button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2">{product.title}</td>
              <td className="border border-gray-300 px-4 py-2">${product.price}</td>
              <td className="border border-gray-300 px-4 py-2">{product.category}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button onClick={() => {
                  setCurrentProduct(product);
                  setIsEditModalOpen(true);
                }} className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded">Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold mb-4">Add New Product</h3>
            <input
              type="text"
              placeholder="Title"
              value={newProduct.title}
              onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <div className="flex justify-end mt-4">
              <button onClick={handleAddProduct} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Add</button>
              <button onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && currentProduct && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold mb-4">Edit Product</h3>
            <input
              type="text"
              placeholder="Title"
              value={currentProduct.title}
              onChange={(e) => setCurrentProduct({ ...currentProduct, title: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Description"
              value={currentProduct.description}
              onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={currentProduct.price}
              onChange={(e) => setCurrentProduct({ ...currentProduct, price: parseFloat(e.target.value) })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Category"
              value={currentProduct.category}
              onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <div className="flex justify-end mt-4">
              <button onClick={handleEditProduct} className="px-4 py-2 bg-yellow-500 text-white rounded mr-2">Save</button>
              <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;

