import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrashAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export function NavBar({ count, setCount, items, setItems }) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  return (
    <header className="nav-bar">
      <div className="container">
        <div className="screen-show menu flex">
          <h3>Start Bootstrap</h3>
          <div onClick={() => ref3.current.classList.toggle("show")}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div ref={ref3} className="menu-dropdown">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>
              <div>
                <div
                  className="cart flex"
                  onClick={() => {
                    ref2.current.classList.toggle("show");
                  }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <p>cart</p>
                  <p className="counter">{count}</p>
                </div>
                <div className="cart-content" ref={ref2}>
                  <h3>Cart</h3>
                  <ul>
                    {items.map((item, i) => {
                      if (item.inCart) {
                        return (
                          <li>
                            <span>
                              <em>Name</em>: {item.name} <em>Price</em>: {item.price}
                            </span>
                            <FontAwesomeIcon
                              className="icon"
                              icon={faTrashAlt}
                              onClick={() => {
                                setItems([...items.slice(0, i), { ...items[i], inCart: false }, ...items.slice(i + 1)]);
                                setCount((count) => count - 1);
                              }}
                            />
                          </li>
                        );
                      } else {
                        return <></>;
                      }
                    })}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="screen-hide menu flex">
          <ul className="flex">
            <li>
              <h3>Start Bootstrap</h3>
            </li>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
          </ul>
          <div>
            <div
              className="cart flex"
              onClick={() => {
                ref1.current.classList.toggle("show");
              }}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <p>cart</p>
              <p className="counter">{count}</p>
            </div>
            <div className="cart-content" ref={ref1}>
              <h3>Cart</h3>
              <ul>
                {items.map((item, i) => {
                  if (item.inCart) {
                    return (
                      <li>
                        <span>
                          <em>Name</em>: {item.name} <em>Price</em>: {item.price}
                        </span>
                        <FontAwesomeIcon
                          className="icon"
                          icon={faTrashAlt}
                          onClick={() => {
                            setItems([...items.slice(0, i), { ...items[i], inCart: false }, ...items.slice(i + 1)]);
                            setCount((count) => count - 1);
                          }}
                        />
                      </li>
                    );
                  } else {
                    return <></>;
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="heading">
        <h1>Shop in style</h1>
        <h5>with this shop homepage template</h5>
      </div>
    </header>
  );
}
