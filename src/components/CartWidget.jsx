import { Badge } from "react-bootstrap";
import { Cart3 } from "react-bootstrap-icons";


function CartWidget({item}) {
    return(
        <div className="text-center mt-4 mb-4">
            <Cart3 size={25}/>
            <Badge pill>({item})</Badge>
        </div>       
    )    
}

export default CartWidget;