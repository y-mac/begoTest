import { NavLink } from "react-router-dom";
import './header.css';
import { useOrder } from "../../hooks/useOrder";

const Header = () => {
    const {filterOrderList} = useOrder();
    return ( 
      <header className="main-header">
        <ul>
            <li>
                <NavLink 
                  to="/upcomingOrders" 
                  className={({ isActive }) =>
                    isActive ? 'current' : undefined
                  }
                >
                  Upcoming
                </NavLink>
            </li>

            <li>
                <NavLink 
                  to="/completedOrders"
                  className={({ isActive }) =>
                    isActive ? 'current' : undefined
                  }
                >
                  Completed
                </NavLink>
            </li>

            <li>
                <NavLink 
                  to="/pastOrders"
                  className={({ isActive }) =>
                    isActive ? 'current' : undefined
                  }
                >
                  Past
                </NavLink>
            </li>
        </ul>
        <input 
         type="text" 
         className="filter__input" 
         placeholder="search" 
         onChange={(event)=>{
            
                filterOrderList(event.target.value);
            
         }}
        />
      </header>
    );
}
 
export default Header;