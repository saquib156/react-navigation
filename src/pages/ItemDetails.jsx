import React, { useState, useEffect } from "react";

const style = {
  "background-color": "grey",
};

const ItemDetails = ({ match }) => {
  const [item, setItem] = useState({
    name: "",
    description: "",
    images: {},
  });

  useEffect(() => {
    fetchShopData();
  }, []);

  const fetchShopData = async () => {
    const res = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    ).then((res) => res.json());
    setItem(res.data.item);
  };
  return (
    <>
      <h1>{item.name}</h1>
      <h3>{item.description}</h3>
      <img style={style} src={item.images.information} alt={item.name} />
    </>
  );
};

export default ItemDetails;