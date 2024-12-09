import { createContext, useState } from "react";
import { Orders } from "../types/orders/orders";

interface OrdersContextType {
  ordersList: Orders[],
  filteredData: Orders[],
  loading: boolean,
  getOrdersList: (url: string) => void;
  filterOrderList: (txt:string) => void;
}

export const OrdersContext = createContext<OrdersContextType | undefined>(undefined)

export const OrdersProvider: React.FC<{children:React.ReactNode}> = ({children}) => {
  const [loading, setLoading] = useState(false);  
  const [ordersList, setOrdersList] = useState<Orders[]>([]);
  const [filteredData, setFilteredData] = useState<Orders[]>([]);

  const getOrdersList = async (url: string) => {
    try{
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error("Error al cargar los datos")
        }
        const data = await response.json();
        setOrdersList(data?.result);
      } catch(error) {
          console.error(`error al cargar la data ${error}`);
      } finally {
         setLoading(false);
      }
  }

  const filterOrderList = (txt:string) => {
    if(txt.length > 0) {
      let filteredOrders = ordersList.filter(order => order.order_number.includes(txt.toUpperCase()));
      setFilteredData(filteredOrders);
    } else {
      setFilteredData([]);
    }
  }

  return (
    <OrdersContext.Provider
      value={{ordersList, getOrdersList, loading, filterOrderList, filteredData }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
 
