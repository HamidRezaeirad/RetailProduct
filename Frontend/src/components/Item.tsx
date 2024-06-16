import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "./Image";

import { ItemProps } from "../interfaces";

/**
 *
 * @param data ItemProps An object properties of data
 * @returns ListItems react component
 */
const Item: React.FC<ItemProps> = ({ item }) => {
  const { name, imageUrl, description, price, category, id } = item;
  const navigate = useNavigate();

  const onclickHandler = () => {
    navigate(`/${id}`);
  };

  return (
    <section onClick={onclickHandler}>
      <div className="container py-2">
        <div className="row justify-content-center">
          <div className="card text-black">
            <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
            <Image
              src={imageUrl}
              style={{ alignSelf: "center", width: "200px" }}
              className="card-img-top"
              alt="Apple Computer"
            />
            <div className="card-body text-left" style={{ textAlign: "left" }}>
              <div className="text-left">
                <h5 className="card-title">
                  <strong>{name}</strong>
                </h5>
                <p className="text-muted">{description}</p>
                <p className="text-muted">
                  <strong>{category && category.toUpperCase()}</strong>
                </p>
                <span>
                  <strong>SEK {price}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
