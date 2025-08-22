import React, { useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";

const Form = () => {
  let [formData, setFromdata] = useState({
    title: "",
    description: "",
    price: "",
    discount: "",
    discountType: "",
    inventory: "",
    barcode: "",
    images: [],
    thumbnail: "",
    category: "",
  });
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form
        action=""
        method="POST"
        onSubmit={handleSubmit}
        className="m-4 rounded-3xl flex justify-evenly flex-wrap h-full w-[calc(100%-30px)] p-6 bg-[#f8f8f8]"
      >
        {/* This is the first container which includes fields like title,description,price,Inventory etc. */}
        <div className="flex-col gap-6 flex max-w-4xl">
          {/* This is the Genral Infomation Section which contains product title and description */}
          <div className="input-section">
            <h3 className="title">General Information</h3>
            <label htmlFor="title">Product Name</label>
            <input type="text" id="title" placeholder="Enter Product Name" />
            <label htmlFor="description">Description</label>
            <textarea
              placeholder="Description"
              name="description"
              id="description"
              className="scrollbar-hidden h-[150px] resize-y"
            ></textarea>
          </div>

          {/* This is Pricing Section where Price and Discount input-Field is Located */}
          <div className="input-section">
            <h3 className="title">Pricing</h3>
            <label htmlFor="base-price">Base Price</label>
            <div className="flex items-center gap-4 w-full">
              <span className=" text-lg text-gray-500">Dhs.</span>
              <input type="text" className="w-full" placeholder="Amount" />
            </div>
            <div className=" flex justify-evenly gap-6">
              <div className="w-full">
                <label htmlFor="discount">Discount</label>
                <input type="text" id="discount" className="mt-2" />
              </div>
              <div className="w-full flex flex-col justify-center">
                <label htmlFor="discount-type" className="mb-2">Discount Type</label>
                <Dropdown id="discount-type" label="Select Discount Type">
                  <DropdownItem> Percentage</DropdownItem>
                  <DropdownItem> Amount</DropdownItem>
                  <DropdownItem> Bundle Discount</DropdownItem>
                </Dropdown>
              </div>
            </div>
          </div>

          {/* This is the inventory section which has input fields like SKU,Barcode,Quantity */}
          <div className="input-section ">
            <h3 className="title">Inventory</h3>

            {/*Input fields  */}
            <div className="flex flex-wrap justify-evenly gap-4">
              <div className="flex flex-col">
                <label htmlFor="barcode" className="mb-2">
                  Barcode
                </label>
                <input
                  type="number"
                  id="barcode"
                  placeholder="Type product Barcode"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="quantity" className="mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  placeholder="Type Produtc Quantity"
                />
              </div>
            </div>
          </div>
        </div>

        {/* This is a second Container which contains Input Fields Like Image Uploadings */}
        <div className=" w-full gap-6 max-w-xl flex flex-col">
          <div className="input-section  items-center">
            <h3 className="title">Product Media</h3>

            {/* Uploaded Images Preview */}
            <div className="w-full gap-3 flex justify-evenly flex-wrap  p-4">
              <div className="border border-gray-300 w-fit p-16 rounded"></div>
              <div className="border border-gray-300 w-fit p-16 rounded"></div>
              <div className="border border-gray-300 w-fit p-16 rounded"></div>
            </div>
            <label
              for="file-upload"
              class=" bg-blue-400/30 rounded-2xl hover:border-blue-700 border border-blue-400 transition-all duration-300 ease-in-out px-7 py-5 block text-blue-500 cursor-pointer"
            >
              Add images{" "}
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/png"
              class="hidden"
            />
          </div>
          {/* Category Selection section */}
          <div className="input-section">
            <h3 className="title">Category</h3>
            <label htmlFor="category">Product Category</label>
            <select name="category" className="text-gray-500" id="category">
              <option value="" selected disabled hidden>Select Product Category </option>
              <option value="Printer">Printer</option>
              <option value="Printer">Tapes</option>
              <option value="Printer">Acrylic</option>
              <option value="Printer">Boards</option>
              <option value="Printer">Accessories</option>
              <option value="Printer">Displays</option>
              <option value="Printer">Banners</option>
              <option value="Printer">Inks</option>
              </select>{" "}
          </div>
          <div className="flex gap-2 justify-end px-4">
            <button className="button-style" type="reset">Clear All</button>
            <button
              className="button-style"
              type="submit"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
