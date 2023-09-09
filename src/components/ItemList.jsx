import Item from "./Item";
import { Link } from "react-router-dom";
import { CardGroup } from "react-bootstrap";
const ItemList = ({ productList = [] }) => {
  return (
    <CardGroup>
      {productList.map((product) => {
        return (
          <>
            <Link to={`/item/${product.id}`} className="text-decoration-none">
              <Item key={product.id} info={product} />
            </Link>
          </>
        );
      })}
    </CardGroup>
  );
};

export default ItemList;
