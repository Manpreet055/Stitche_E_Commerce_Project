import React from "react";

const ListComp = ({
  headings = false,
  orderId,
  customer,
  product,
  date,
  amount,
  status,
}) => {
  return (
    <ul
      className={`h-[70px] grid grid-cols-6 place-items-center text-lg border-b border-neutral-600 ${
        headings && "text-xl font-medium"
      }`}
    >
      <li>{orderId}</li>
      <li>{customer}</li>
      <li>{product}</li>
      <li>{date}</li>
      <li>{amount}</li>
      <li>{status}</li>
    </ul>
  );
};

export default ListComp;
