import { useState } from "react";
import { Content } from "./content";
import { Footer } from "./footer";
import { NavBar } from "./navBar";

export function MainPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "fancy product",
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$40.00 - $80.00",
      inCart: false,
    },
    {
      id: 2,
      name: "special item",
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$18.00",
      inCart: false,
    },
    {
      id: 3,
      name: "special item",
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$18.00",
      inCart: false,
    },
    {
      id: 4,
      name: "special item",
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$18.00",
      inCart: false,
    },
    {
      id: 5,
      name: "special item",
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$18.00",
      inCart: false,
    },
    {
      id: 6,
      name: "special item",
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$18.00",
      inCart: false,
    },
  ]);
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar count={count} setCount={setCount} items={items} setItems={setItems} />
      <Content items={items} setItems={setItems} setCount={setCount} />
      <Footer />
    </>
  );
}
