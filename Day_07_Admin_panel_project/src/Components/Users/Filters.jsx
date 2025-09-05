import React from "react";
import { useForm } from "react-hook-form";
import {motion} from "framer-motion"
import clickEvent from "../../Utilities/Animations/onClick";

const Filters = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className=" absolute top-15 z-90 flex flex-col blur-bg w-full">
      <h1 className="text-2xl mx-5 px-3 border-b border-gray-400 font-semibold py-4"> Filters</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className=" overflow-auto w-full p-4 flex  gap-10"
      >
        <div id="status" className="w-full flex flex-col gap-6">
          {/* Statuses */}
          <h2 className="text-xl font-medium">Status</h2>
          <div className=" flex flex-col gap-6">
            <div className="flex gap-3 items-center text-lg">
              {" "}
              <input type="checkbox" {...register("active")} /> Active
            </div>
            <div className="flex gap-3 items-center text-lg">
              {" "}
              <input type="checkbox" {...register("suspended")} /> Suspended
            </div>
            <div className="flex gap-3 items-center text-lg">
              {" "}
              <input type="checkbox" {...register("pending")} /> Pending
            </div>
          </div>

          {/* Dates */}
          <div className="flex flex-col">
            <h2 className="text-xl font-medium">Date</h2>
            <div className="flex gap-5 flex-col">
              <div className=" flex flex-col">
                <label htmlFor="from">From</label>
                <input id="from" className="form-input-sections" {...register("from_date")} type="date" />
              </div>
              <div className=" flex flex-col">
                <label htmlFor="To">To</label>
                <input id="To" className="form-input-sections" {...register("to_date")} type="date" />
              </div>
            </div>
          </div>
        </div>

        {/* Role */}
        <div className="w-full flex flex-col gap-3 justify-between ">
          <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-medium">Role</h2>
            <div className="flex gap-3 items-center text-lg">
              {" "}
              <input type="checkbox" {...register("user")} /> User
            </div>
            <div className="flex gap-3 items-center text-lg">
              {" "}
              <input type="checkbox" {...register("admin")} /> Admin
            </div>
            <div className="flex gap-3 items-center text-lg">
              {" "}
              <input type="checkbox" className="" {...register("moderator")} /> Moderator
            </div>
          </div>
          <input type="text" className="form-input-sections" {...register("city")} placeholder="Search City" />
          <div className="flex flex-col gap-3">
            <motion.button
            variants={clickEvent}
            initial="default"
            whileHover="hover"
            whileTap="click"
            type="reset" className=" bg-rose-800 p-4 rounded-2xl">
              Clear all
            </motion.button>
            <motion.button
            variants={clickEvent}
            initial="default"
            whileHover="hover"
            whileTap="click"
            type="submit" className=" bg-rose-800 p-4 rounded-2xl">
              Submit
            </motion.button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filters;
