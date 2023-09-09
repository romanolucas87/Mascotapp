import { Badge } from "react-bootstrap";
import { Cart3 } from "react-bootstrap-icons";
import { useCartContext } from "../context/CartContext";

function CartWidget() {
    const {totalProducts} = useCartContext();
    return(
        <div className="text-center mt-4 mb-4">
            <Cart3 size={25}/>
            <Badge pill>({totalProducts() || ''})</Badge>
        </div>       
    )    
}

export default CartWidget;