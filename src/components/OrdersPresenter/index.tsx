import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Orders } from "../../types/orders/orders";
import OrderDestinations from "../OrderDestinations";
import './ordersPresenter.css';




type OrdersPresenterProps = { 
  order: Orders
}

const OrdersPresenter:React.FC<OrdersPresenterProps> = ({order}) => {
    const [mensaje, setMensaje] = useState('');
    const [tiempoRestante, setTiempoRestante] = useState('');
    const [btnClass, setBtnClass] = useState('');

    const navigate = useNavigate();

    const redirectToSingle = () => {
      const encodedObject = encodeURIComponent(JSON.stringify(order));

      navigate(`/order/${order.order_number}?data=${encodedObject}`);
    }

    useEffect(()=>{
      const intervalo = setInterval(()=>{
        const ahora  = Date.now();
        if (ahora >= order.start_date) {
          clearInterval(intervalo);
          setMensaje("It's time for pickup");
          setBtnClass('pick-btn');
        } else {
          const diferencia = order.start_date - ahora;
          const horas = Math.floor(diferencia / (1000 * 60 * 60));
          const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
          const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
          setTiempoRestante(`${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`);
        }
      },1000)
    },[order.start_date]);

    return ( 
      <>
        
        <p className="order-paragraf">
          <span className="order-title"> Order # </span>
          {order.order_number}
        </p>
        <article className="order-item">
          <div className="order-wrapper">

            <div className="order-detail">
              <header className="order-detail__header">
                <div className="header-left">
                  <figure>

                  </figure>
                  {order.type}
                </div>
                <div className="header-right">
                  <span className={`order-dot ${order.status_class}`}></span>
                  {order.status_string}
                </div>
              </header>
              <div className="order-detail__body">
                {order?.destinations?.map(
                  item => (
                    <OrderDestinations
                      destination={item}
                    />
                  )
                )}
                <footer className="order-detail__footer">
                  <button 
                    className={btnClass !== '' ? btnClass: 'base-btn'}
                    onClick={()=>{
                      console.log('Navigate');
                    }}
                  >
                    {mensaje || tiempoRestante}
                  </button>
                  
                  <button 
                    className="resume-btn"
                    onClick={()=>{
                      redirectToSingle();
                    }}
                  >
                    Resume
                  </button>

                </footer>
              </div>
            </div>
          </div>

        </article>
      </>
      
    );
}
 
export default OrdersPresenter;