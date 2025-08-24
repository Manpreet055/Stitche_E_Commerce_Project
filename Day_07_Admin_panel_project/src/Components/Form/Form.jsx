import { useForm } from "react-hook-form";
import Images from "./Images";
import KeyFeature from "./keyFeature";
import { useState } from "react";

const Form = () => {
  let [feature, setNewFeatures] = useState([]);
  const [images, setimages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  let handlefeatureChange = (feat) => {
    setNewFeatures(feat);
    setValue("KeyFeatures", feat);
  };
  let handleimages = (image) => {
    setimages(image);
    setValue("images", image);
  };
  let handleThumbnails = (thumbnail) => {
    setThumbnails(thumbnail);
    setValue("thumbnails", thumbnail);
  };

  let discount = watch("discount");

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
          {/* This is the Genral Infomation Section which contains product title and description */}
          <div className="input-section">
            <h3 className="title">General Information</h3>
            <label htmlFor="title">Product Name</label>
            <input
              type="text"
              {...register("title", { required: true })}
              id="title"
              placeholder="Enter Product Name"
            />
            {errors.title && <p role="alert">{errors.title.message}</p>}

            <label htmlFor="description">Description</label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Description"
              name="description"
              id="description"
              className="scrollbar-hidden h-[150px] resize-y"
            ></textarea>
            <KeyFeature onFeatureChange={handlefeatureChange} />
          </div>

          {/* This is Pricing Section where Price and Discount input-Field is Located */}
          <div className="input-section">
            <h3 className="title">Pricing</h3>
            <label htmlFor="base-price">Base Price</label>
            <div className="flex items-center gap-4 w-full">
              <span className=" text-lg text-gray-500">Dhs.</span>
              <input
                type="text"
                {...register("price", { required: true })}
                className="w-full"
                placeholder="Price"
              />
            </div>
            <div className=" flex justify-evenly gap-6">
              <div className="w-full">
                <label htmlFor="discount">Discount</label>
                <input
                  type="text"
                  {...register("discount", { required: true })}
                  id="discount"
                  className="mt-2"
                />
              </div>
              <div className="w-full flex flex-col justify-center">
                <label htmlFor="discount-type" className="mb-2">
                  Discount Type
                </label>
                <select
                  className="text-gray-500"
                  id="discount-type"
                  {...register("discount-type", { required: true })}
                >
                  <option value="percentage">Percentage</option>
                  <option value="amount">Amount</option>
                  <option value="bundle-discount">Bundle Discount</option>
                  <option value={`Buy One Get ${discount}`}>
                    Buy One Get {discount}
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* This is the inventory section which has input fields like SKU,Barcode,Quantity */}
          <div className="input-section ">
            <h3 className="title">Inventory</h3>

            {/*Input fields  */}
            <div className="flex justify-evenly gap-4">
              <div className="flex flex-col">
                <label htmlFor="barcode" className="mb-2">
                  Barcode
                </label>
                <input
                  {...register("barcode", { required: true })}
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
                  {...register("quantity", { required: true })}
                  placeholder="Type Produtc Quantity"
                />
              </div>
            </div>
          </div>
        </div>

        {/* This is a second Container which contains Input Fields Like Image Uploadings */}
        <div className=" w-full gap-6 max-w-xl flex flex-col">
          <Images imgs={handleimages} thumbnails={handleThumbnails} />

          {/* Category Selection section */}
          <div className="input-section">
            <h3 className="title">Category</h3>
            <label htmlFor="category">Product Category</label>
            <select
              name="category"
              className="text-gray-500"
              {...register("category", { required: true })}
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
