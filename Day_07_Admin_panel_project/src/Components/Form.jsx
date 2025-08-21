import React, { useState } from "react";

const Form = () => {
  let [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discount: "",
    stock: "",
    brand: "",
    images: "",
    category: "",
    thumbnail: "",
  });
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  let handleChanges = (event) => {
    let { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="flex mt-10 justify-center w-full">
      <form
        onSubmit={handleSubmit}
        action=""
        method="POST"
        className="flex border flex-wrap rounded-xl items-center justify-center border-gray-300 px-12 py-4 w-full max-w-2xl gap-8"
      >
        <h2 className="text-3xl  text-center font-semibold w-full">Add New Product</h2>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          className=""
          onChange={handleChanges}
          value={formData.title}
        />
        <input
          type="text"
          placeholder="Enter description"
          name="description"
          className=""
          onChange={handleChanges}
          value={formData.description}
        />
        <input
          type="text"
          name="discount"
          placeholder="Enter discount"
          className=""
          onChange={handleChanges}
          value={formData.discount}
        />
        <input
          type="text"
          name="stock"
          placeholder="Enter stock"
          className=""
          onChange={handleChanges}
          value={formData.stock}
        />
        <input
          type="number"
          name="price"
          placeholder="Enter price"
          className=""
          onChange={handleChanges}
          value={formData.price}
        />
        <input
          type="text"
          name="brand"
          className=""
          placeholder="Enter brand"
          onChange={handleChanges}
          value={formData.brand}
        />
        <input
          type="text"
          name="category"
          className=""
          placeholder="Enter category"
          onChange={handleChanges}
          value={formData.category}
        />
        <input
          type="text"
          name="images"
          className=""
          placeholder="Enter images"
          onChange={handleChanges}
          value={formData.images}
        />

        <input
          type="text"
          name="thumbnail"
          placeholder="Enter thumbnail"
          className=""
          onChange={handleChanges}
          value={formData.thumbnail}
        />
        <br />
        <button type="submit" className="bg-rose-800 p-4 px-6 rounded-2xl text-white w-fit ">SendData</button>
      </form>
    </div>
  );
};

export default Form;
