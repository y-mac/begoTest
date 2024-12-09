import { useContext } from "react"
import { OrdersContext } from "../contexts/ordersContext";


export const useOrder = () => {
    const context = useContext(OrdersContext);
    if (context === undefined) {
        throw new Error ("useOrders debe ser usado dentro de un Notification Provider");
    }
    return context
}