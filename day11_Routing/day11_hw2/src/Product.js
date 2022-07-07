import { Link } from "react-router-dom";

function Product() {
  const productList = [
    { id: "01", name: "Fender" },
    { id: "02", name: "Gibson" },
    { id: "03", name: "PRS" },
    { id: "04", name: "James Tyler" },
    { id: "05", name: "Ibanez" },
  ];
  return (
    <div style={{ margin: "50px" }}>
      <h2>Guitar Brands</h2>
      <ul>
        {productList.map((x) => (
          <li>
            <Link to={`${x.id}`}>{x.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;