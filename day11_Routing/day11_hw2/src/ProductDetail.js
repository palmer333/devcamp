import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetail() {
  let param = useParams();
  console.log(param);
  return (
    <>
      <h2>Guitar Detail</h2>
      <p>This is {param.id}</p>
      <Link to="/shopstock">Back</Link>
    </>
  );
}

export default ProductDetail;