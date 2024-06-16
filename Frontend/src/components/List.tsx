import React from "react";

import Item from "./Item";

import { ListProps, ProductItem } from "../interfaces";

/**
 *
 * @param isLoading bool Acteing base on this property
 * @param data IteamShape The List of object properties of data
 * @returns List react component
 */
const List: React.FC<ListProps> = ({ data, isLoading }) => {
  return (
    (data.length > 0 && (
      <section>
        <div className="container py-5">
          <div className="row">
            {data.map((item: ProductItem) => {
              return (
                <div
                  className="col-md-12 col-lg-4 mb-4 mb-lg-0"
                  style={{ cursor: "pointer" }}
                  key={item.id}
                >
                  <Item item={item} key={item.id}></Item>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )) ||
    (isLoading ? <div>Is loading...!</div> : <div>Item not found...!</div>)
  );
};

export default List;
