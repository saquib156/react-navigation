import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchShopData();
  }, []);

  const fetchShopData = async () => {
    const res = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    ).then((res) => res.json());
    setItems(res.data);
  };

  return items.map((data) => (
    <h1 key={data.itemId}>
      <Link to={`/shop/${data.itemId}`}>{data.item.name}</Link>
    </h1>
  ));
};

export default Shop;