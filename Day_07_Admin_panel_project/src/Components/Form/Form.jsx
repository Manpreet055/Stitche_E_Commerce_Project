import { useForm } from "react-hook-form";
import Images from "./Images";
import KeyFeature from "./keyFeature";
import { useState } from "react";

const Form = () => {
  // These States store all the keyfeatures,images and thumnails in the form of Array
  let [feature, setNewFeatures] = useState([]);
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

  //  This function handle all uploads of thumnails,images and features and updated the states
  function handleFormArrayChange(setter, fieldName, value) {
    setter(value); // This parameter set the value according the  given setter
    setValue(fieldName, value); // this will update the form information with the new information
  }

  let discount = watch("discount"); // The watch function watch the updates of discoubt

  // This is The function where we gonna create our logic for sending data to the backend or anything else we want to do with the form data
  let onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
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
                required: "title is required",
                minLength: { value: 4, message: "Minimum length shold be 4" },
              })}
              id="title"
              placeholder="Enter Product Name"
            />

            <label htmlFor="description">Description</label>
            <textarea
              {...register("description", {
                required: "Description id required",
                minLength: {
                  value: 10,
                  message: "Minimum length should be 10",
                },
              })}
              placeholder="Description"
              name="description"
              id="description"
              className="scrollbar-hidden h-[150px] resize-y"
            ></textarea>

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
            <div className="flex items-center gap-4 w-full">
              <span className=" text-lg text-gray-500">Dhs.</span>
              <input
                type="number"
                {...register("price", {
                  required: true,
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
                className="w-full"
                placeholder="Price"
              />
            </div>

            <div className=" flex justify-evenly gap-6">
              <div className="w-full">
                <label htmlFor="discount">Discount</label>
                <input
                  type="number"
                  {...register("discount", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  id="discount"
                  className="mt-2"
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
                    required: true,
                    valueAsNumber: true,
                    minLength: {
                      value: 1,
                      message: "Minimum length should be 6",
                    },
                    maxLength: {
                      value: 6,
                      message: "Barcode Should not be exceed from length 6",
                    },
                  })}
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
                  {...register("quantity", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  placeholder="Type Produtc Quantity"
                />
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
            <button className="button-style scale-transition" type="reset">
              Clear All
            </button>
            <input
              disabled={isSubmitting}
              className="button-style scale-transition"
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
