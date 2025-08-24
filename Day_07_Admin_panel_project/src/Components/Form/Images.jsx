import React, { useState } from "react";

const Images = ({ imgs, thumbnails }) => {
  // Handle Images Upload
  let [imageArr, setImageArr] = useState([]);
  let [images, setimages] = useState([]);
  let getImages = (event) => {
    let newFile = event.target.files[0];
    if (newFile) {
      setimages([...images, URL.createObjectURL(newFile)]);
      const updatedArr = [...imageArr, newFile];
      setImageArr(updatedArr);
      imgs(updatedArr);
    }
  };
  //   Handle thumbnail Upload
  let [thumbnailArr, setthumbnailArr] = useState([]);
  let [thumbnail, setThumbnails] = useState([]);
  let getThumbnails = (event) => {
    let newFile = event.target.files[0];
    if (newFile) {
      setThumbnails([...thumbnail, URL.createObjectURL(newFile)]);
      const updatedArr = [...thumbnailArr, newFile];
      setthumbnailArr(updatedArr);
      thumbnails(updatedArr);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="input-section  items-center">
        <h3 className="title">Product Media</h3>

        {/* Uploaded Images Preview */}
        <div className="w-full gap-4 flex flex-wrap  p-4">
          {images.map((file, index) => (
            <div
              className="border border-gray-300 w-fit max-w-[150px] rounded"
              key={index}
            >
              <img src={file} className="w-full h-full" alt="" />
            </div>
          ))}
        </div>
        <label
          htmlFor="images"
          className=" bg-blue-400/30 rounded-2xl hover:border-blue-700 border border-blue-400 transition-all duration-300 ease-in-out px-7 py-5 block text-blue-500 cursor-pointer"
        >
          Add images{" "}
        </label>
        <input
          onChange={getImages}
          id="images"
          type="file"
          accept="image/*"
          className="hidden"
        />
      </div>
      <div className="input-section  items-center">
        <h3 className="title">Thumbnail</h3>

        {/* Uploaded Images Preview */}
        <div className="w-full gap-4 flex flex-wrap  p-4">
          {thumbnail.map((file, index) => (
            <div
              className="border border-gray-300 w-fit max-w-[150px] rounded"
              key={index}
            >
              <img src={file} className="w-full h-full" alt="" />
            </div>
          ))}
        </div>
        <label
          htmlFor="thumbnails"
          className=" bg-blue-400/30 rounded-2xl hover:border-blue-700 border border-blue-400 transition-all duration-300 ease-in-out px-7 py-5 block text-blue-500 cursor-pointer"
        >
          Add Thumbnail{" "}
        </label>
        <input
          onChange={getThumbnails}
          id="thumbnails"
          type="file"
          accept="image/png"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default Images;
