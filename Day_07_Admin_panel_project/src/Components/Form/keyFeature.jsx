import React, { useState } from "react";
import Form from "./Form.jsx"
import { RxCross2 } from "react-icons/rx";

const KeyFeature = ({onFeatureChange}) => {
  const [keyFeatures, addNewKeyFeatures] = useState([""]);
  const handleChanges = (index, value) => {
    let updateValue = [...keyFeatures];
    updateValue[index] = value;
    addNewKeyFeatures(updateValue);
    onFeatureChange(updateValue)
  };
  
  let removeFeature = (index) => {
    let updatedArray = keyFeatures.filter((_, i) => i != index);
    addNewKeyFeatures(updatedArray);
  };

  return (
    <div>
      <h3 className="title flex justify-between items-center">
        Key Features
        <button
          onClick={() => addNewKeyFeatures([...keyFeatures, ""])}
          type="button"
          className="px-4 hover:bg-blue-300/60 text-xl scale-transition rounded-2xl p-2 "
        >
          Add +{" "}
        </button>{" "}
      </h3>
      <ul className="flex flex-col gap-2 items-center w-full">
        {keyFeatures.map((feature, index) => (
          <li className="w-full flex items-center gap-7" key={index}>
            <input
              className="w-full pl-3"
              value={feature}
              placeholder="KeyFeautre"
              onChange={(event) => handleChanges(index, event.target.value)}
              type="text"
            />
            <button
              type="button"
              onClick={() => removeFeature(index)}
              className="text-2xl cursor-pointer p-4 font-thin"
            >
              <RxCross2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyFeature;
