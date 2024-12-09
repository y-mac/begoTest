import { Destination } from "../../types/orders/orders";
import './orderDestinations.css';

const OrderDestinations: React.FC<Destination | any> = ({destination}) => {
    
    const findCity = (direction: string) => {
        const regex = /\b[A-Z][a-z]+\s[A-Z][a-z]+\b/g; 
        const ciudades = direction.match(regex);
        return ciudades ? ciudades[0] : '';
    }


    function milisecondsToDate(miliseconds: string | number) {
        const date = new Date(miliseconds);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

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
            <span className="destination-card__nickName">
                {destination.nickname}
            </span>
            <div className="destination-card">
                <aside className="destination-card__left">
                    
                    <p className="destination-card__city">
                        {findCity(destination.address)}
                    </p>
                    <p className="destination-card__address">
                        {destination.address}
                    </p>
                </aside>

                <aside className="destination-card__right">
                   <span className="destination-card__date"> 
                    {milisecondsToDate(destination.start_date)}
                   </span>
                   <span className="destination-card__hour">
                     {milisecondsToHours(destination.start_date)}
                   </span>
                </aside>
            </div>
        </>
        
        
    );
}
 
export default OrderDestinations;