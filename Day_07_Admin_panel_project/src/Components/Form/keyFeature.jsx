import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const KeyFeature = ({ onFeatureChange }) => {
  const [keyFeatures, addNewKeyFeatures] = useState([""]);

  // This function handle the new State and add it to the exiting state.
  const handleChanges = (index, value) => {
    let updateValue = [...keyFeatures]; // used spread operator to spread all the element of "KeyFeatures" state
    updateValue[index] = value; // update the value according to the given index param
    addNewKeyFeatures(updateValue); // update the state with updated array
    onFeatureChange(updateValue); //send back the updated array element to the props which will be later used in form of Form.jsx
  };

  // This function will basically filter out the clicked element from the array and state
  let removeFeature = (index) => {
    let updatedArray = keyFeatures.filter((_, i) => i != index);
    addNewKeyFeatures(updatedArray);
  };

  return (
    <div>
      <h3 className="title flex justify-between items-center">
        Key Features
        {/* on this button click a new input field will be added */}
        <button
          onClick={() => addNewKeyFeatures([...keyFeatures, ""])}
          type="button"
          className="px-4 hover:bg-blue-300/60 text-xl scale-transition rounded-2xl p-2 "
        >
          Add +{" "}
        </button>{" "}
      </h3>
      {/* List of all input fields for key features */}
      <ul className="flex flex-col gap-2 items-center w-full">
        {/* rendering all states as input field */}
        {keyFeatures.map((feature, index) => (
          <li className="w-full flex items-center gap-7" key={index}>
            <input
              className="w-full pl-3"
              value={feature}
              placeholder="KeyFeautre"
              onChange={(event) => handleChanges(index, event.target.value)}
              type="text"
            />
            {/* button to remove the input field */}
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
