import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OrderDestinations from "../OrderDestinations";
import { Orders } from "../../types/orders/orders";
import './single.css';
import Header from "../Header";

type OrdersPresenterProps = { 
    order: Orders
  }

const Single: React.FC <OrdersPresenterProps | any> = () => {
    const [isVisibleInfo, setIsVisibleInfo] = useState(false);

    const navigate = useNavigate();

    const returnToPreviousPage = () => {
      navigate(-1);
    } 

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const encodedData = searchParams.get('data');
    const decodedData = encodedData ? JSON.parse(encodedData) : null; 

    function milisecondsToHours(miliseconds: number) {
        const fecha = new Date(miliseconds);
        const horas = fecha.getHours();
        const minutos = fecha.getMinutes();
        const horasFormateadas = horas.toString().padStart(2, '0');
        const minutosFormateados = minutos.toString().padStart(2, '0');
        return `${horasFormateadas}:${minutosFormateados}`;
    }

    return ( 
        <>  
           <Header />
            <div className="orders-holder">

                <header className="single-header">
                  <button 
                   className="prev-btn"
                   onClick={()=>{
                    returnToPreviousPage();
                   }}
                  >
                    &lt;
                  </button>
                  
                  <span className="return-title"> Cargo Details  </span>

                </header>

                <article className="order-item">
                    <div className="order-wrapper">
                        <div className="order-detail">
                            <p className="order-paragraf">
                                <span className="order-title"> Order # </span>
                                {decodedData.order_number}
                            </p>
                            <div className="order-detail__body">
                                {decodedData?.destinations?.map((item: Orders) => (
                                    <OrderDestinations
                                        destination={item}
                                    />
                                )
                                )}
                            </div>
                        </div>
                    </div>

                </article>

                
                <article className="order-item" style={{marginTop:'40px'}}>
                    <div className="order-wrapper">
                        <div className="order-detail">
                            <div className="photo-header">
                                <figure className="photo-figure">
                                    <img src={decodedData.driver_thumbnail ? decodedData.driver_thumbail : '/assets/images/thumbnail.png'} alt="driver" />
                                </figure>
                            </div>
                            <p className="time-paragraph"> 
                               {milisecondsToHours(decodedData.start_date)} 
                            </p>
                            <ul className="StepProgress">
                                <li className="StepProgress-item is-done">
                                    <strong>Created Order</strong>
                                </li>
                                <li className="StepProgress-item is-done">
                                    Accepted Order
                                </li>
                                <li className="StepProgress-item">
                                    Pickup set up by William
                                </li>
                                <li className="StepProgress-item">
                                   Pickup Completed
                                </li>
                            </ul>
                        </div>
                        <footer className="track-footer">
                            Track Order
                        </footer>
                    </div>
                </article>

                <button 
                 className="track-btn"
                 onClick={()=>{
                    setIsVisibleInfo(!isVisibleInfo);
                 }}
                >
                   Pickup Data 
                   <span className={isVisibleInfo ? "track-btn__arrow" : "track-btn__arrowUp" }>
                    <img src="/assets/images/arrow.png" alt="" />
                   </span>
                </button>

                {isVisibleInfo && (
                    <div className="pickup-data__holder">
                        {decodedData?.destinations[0].address}

                        <p>
                            525567890346
                        </p>

                        <p>
                            johndoe@gmail.com
                        </p>
                    </div>
                )}

                
            </div>
            
        </>
     );
}
 
export default Single;