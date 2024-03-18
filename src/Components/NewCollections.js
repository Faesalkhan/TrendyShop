import React from "react";
import newCollections from "./Assets/new_collections";
import Item from "./Item";
const NewCollections = () => {
  return (
    <div className="container new-collection-container">
      <h2 className="text-decoration-underline text-center text-nowrap my-2 my-sm-3 my-lg-5">
        NEW COLLECTIONS
      </h2>
      <div className="row">
        {newCollections.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default NewCollections;
