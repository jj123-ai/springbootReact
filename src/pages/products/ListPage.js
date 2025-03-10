import React from "react";
import ListComponent from "../../components/products/ListComponent";

const ListPage = () => {
  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">제품 목록 페이지</div>
      <ListComponent />
    </div>
  );
};

export default ListPage;
