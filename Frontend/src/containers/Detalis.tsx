import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../components";
import { ItemProps } from "../interfaces/Item.props";
import apiServer from "../server/api.srver";

/**
 *
 * @returns Detail react component
 */
const Detail: React.FC = () => {
  const [data, setData] = useState<ItemProps | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    apiServer
      .get(`/products/${id}`)
      .then((res) => {
        const itemProps: ItemProps = { item: res.data };
        setData(itemProps);
      })
      .catch((error) => {
        console.error(error);
        setData(undefined);
      });
  }, []);

  return (
    <>{data ? data.item && <Item item={data.item} /> : <div>Not found!</div>}</>
  );
};

export default Detail;
