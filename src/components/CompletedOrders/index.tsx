import { useEffect } from "react";
import { useOrder } from "../../hooks/useOrder";
import { API_CONSTANTS } from "../../utils/apiConstants";
import OrdersPresenter from "../OrdersPresenter";
import Header from "../Header";

const CompletedOrders:React.FC = () => {
    const {ordersList, getOrdersList, filteredData} = useOrder();

    useEffect(()=>{
      getOrdersList(API_CONSTANTS.completed);
    },[]);

    return ( 
      <>
        <Header />
        <div className="orders-holder"> 
        { 
          filteredData.length > 0 ? (
            filteredData.map(order => (
              <OrdersPresenter
                order={order}
              />
            ))
          ) : (
            ordersList.map(order => (
              <OrdersPresenter
                order={order}
              />
            ))
          )
          
        }
      </div>
      </>
      
        
    )
}
 
export default CompletedOrders;