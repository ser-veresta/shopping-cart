export function Content({ items, setItems, setCount }) {
  function handleClick(e, i) {
    if (!items[i].inCart) {
      setItems([...items.slice(0, i), { ...items[i], inCart: true }, ...items.slice(i + 1)]);
      setCount((count) => count + 1);
    }
  }
  return (
    <section className="content container">
      {items.map((item, i) => (
        <div className="card" key={item.id}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button className="btn" onClick={(e) => handleClick(e, i)} disabled={item.inCart}>
            {!item.inCart ? "Add to cart" : "Added to cart"}
          </button>
        </div>
      ))}
    </section>
  );
}
