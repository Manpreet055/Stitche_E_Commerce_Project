import { useForm } from "react-hook-form";
import Images from "./Images";
import KeyFeature from "./keyFeature";
import { useState } from "react";

const Form = () => {
  // These States store all the keyfeatures,images and thumnails in the form of Array
  const [feature, setNewFeatures] = useState([]);
  const [images, setimages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

  // Using react-hook-form library to handle the form these are the dependencies for handling form
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  //Reset form function
  const resetFrom = () => {
    if (!isSubmitting) {
      return;
    }
    setNewFeatures([]);
    setimages([]);
    setThumbnails([]);
  };
  //  This function handle all uploads of thumnails,images and features and updated the states
  function handleFormArrayChange(setter, fieldName, value) {
    setter(value); // This parameter set the value according the  given setter
    setValue(fieldName, value); // this will update the form information with the new information
  }

  const discount = watch("discount"); // The watch function watch the updates of discoubt

  // This is The function where we gonna create our logic for sending data to the backend or anything else we want to do with the form data
  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full ml-80 flex-1 overflow-x-hidden">
      <h2 className="flex w-full py-8 justify-center text-3xl font-semibold">
        Add New Product
      </h2>
      <form
        action=""
        method="POST"
        onSubmit={handleSubmit(onsubmit)}
        className=" rounded-3xl flex gap-y-6 justify-evenly h-full flex-wrap w-full p-6 bg-[#f8f8f8]"
      >
        {/* This is the first container which includes fields like title,description,price,Inventory etc. */}
        <div className="flex-col gap-6 flex max-w-3xl">
          {/* This is the Genral Infomation Section which contains title and description,keyfeatures of the prodict .. */}
          <div className="input-section">
            <h3 className="title">General Information</h3>
            <label htmlFor="title">Product Name</label>
            <input
              type="text"
              {...register("title", {
                required: "Title is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              className={`${
                errors.title
                  ? "border border-red-500 focus:outline-red-500"
                  : "border border-gray-300 focus:outline-gray-500"
              }`}
              id="title"
              placeholder="Enter Product Name"
            />
            {errors.title && (
              <p className="text-red-500">*{errors.title.message}</p>
            )}
            <label htmlFor="description">Description</label>
            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Minimum length should be 10",
                },
              })}
              placeholder="Description"
              name="description"
              id="description"
              className={`scrollbar-hidden h-[150px] resize-y ${
                errors.description
                  ? "border border-red-500 focus:outline-red-500"
                  : "border border-gray-300 focus:outline-gray-500"
              }`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500">*{errors.description.message}</p>
            )}

            {/* Using the Keyfeature component and acessing its props.value */}
            <KeyFeature
              onFeatureChange={(data) =>
                handleFormArrayChange(setNewFeatures, "keyfeatures", data)
              }
            />
          </div>

          {/* This is Pricing Section where Price and Discount input-Field is Located */}
          <div className="input-section">
            <h3 className="title">Pricing</h3>
            <label htmlFor="base-price">Base Price</label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: "Minimum price should be 1",
                },
                max: {
                  value: 9999,
                  message: "Maximum price will be 9999",
                },
              })}
              className={`w-full ${
                errors.price
                  ? "border border-red-500 focus:outline-red-500"
                  : "border border-gray-300 focus:outline-gray-500"
              }`}
              placeholder="Price"
            />
            {errors.price && (
              <p className="text-red-500">*{errors.price.message}</p>
            )}

            <div className=" flex justify-evenly gap-6">
              <div className="w-full">
                <label htmlFor="discount">
                  Discount <i>(Optional)</i>
                </label>
                <input
                  type="number"
                  {...register("discount", {
                    valueAsNumber: "Please enter an number ",
                  })}
                  id="discount"
                  className={`mt-2 ${
                    errors.discount
                      ? "border border-red-500 focus:outline-red-500"
                      : "border border-gray-300 focus:outline-gray-500"
                  }`}
                />
              </div>

              {/* Discount-type input-field */}
              <div className="w-full flex flex-col justify-center">
                <label htmlFor="discount-type" className="mb-2">
                  Discount Type
                </label>
                <select
                  className="text-gray-500"
                  id="discount-type"
                  {...register("discount-type", {
                    required: true,
                  })}
                >
                  <option value="no-offers">No Discount</option>
                  <option value="percentage">Percentage</option>
                  <option value="amount">Amount</option>
                  <option value="bundle-discount">Bundle Discount</option>
                  <option value={`Buy One Get ${discount ? discount : 1}`}>
                    Buy One Get {discount ? discount : 1}
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* This is the inventory section which has input fields like Barcode,Quantity */}
          <div className="input-section ">
            <h3 className="title">Inventory</h3>

            {/*Input fields  */}
            <div className="flex justify-evenly gap-4">
              <div className="flex flex-col">
                <label htmlFor="barcode" className="mb-2">
                  Barcode
                </label>
                <input
                  {...register("barcode", {
                    required: "Barcode is required",
                    valueAsNumber: "Please enter a number",
                    pattern: {
                      value: /^\d{6}$/,
                      message: "Barcode must be atleast 6 digits",
                    },
                  })}
                  className={`${
                    errors.barcode
                      ? "border border-red-500 focus:outline-red-500"
                      : "border border-gray-300 focus:outline-gray-500"
                  }`}
                  type="number"
                  id="barcode"
                  placeholder="Type product Barcode"
                />
                {errors.barcode && (
                  <p className="text-red-500">*{errors.barcode.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="quantity" className="mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  {...register("quantity", {
                    valueAsNumber: true,
                  })}
                  defaultValue="0"
                  className={`${
                    errors.quantity
                      ? "border border-red-500 focus:outline-red-500"
                      : "border border-gray-300 focus:outline-gray-500"
                  }`}
                  placeholder="Type Produtc Quantity"
                />
                {errors.quantity && (
                  <p className="text-red-500">*{errors.quantity.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* This is a second Container which contains Input Fields Like Image Uploadings */}
        <div className=" w-full gap-6 max-w-xl flex flex-col">
          <Images
            imgs={(data) => handleFormArrayChange(setimages, "images", data)}
            thumbnails={(data) =>
              handleFormArrayChange(setThumbnails, "thumbnails", data)
            }
          />

          {/* Category Selection section */}
          <div className="input-section">
            <h3 className="title">Category</h3>
            <label htmlFor="category">Product Category</label>
            <select
              name="category"
              className="text-gray-500"
              {...register("category", {
                required: true,
              })}
              id="category"
            >
              <option value="printer">Printer</option>
              <option value="tapes">Tapes</option>
              <option value="acrylic">Acrylic</option>
              <option value="boards">Boards</option>
              <option value="accessories">Accessories</option>
              <option value="display">Displays</option>
              <option value="banners">Banners</option>
              <option value="inks">Inks</option>
            </select>{" "}
          </div>

          {/* Clear and submit button */}
          <div className="flex gap-2 justify-end px-4">
            <button
              className="button-style scale-transition"
              onClick={resetFrom}
              type="reset"
            >
              Clear All
            </button>
            <input
              disabled={isSubmitting}
              onClick={resetFrom}
              className={`button-style scale-transition ${
                isSubmitting && "opacity-50"
              }`}
              type="submit"
              value={isSubmitting ? "Adding product " : "Add Product"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
