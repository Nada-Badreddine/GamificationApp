import React ,{useContext}from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserContext from '../context/userContext';
import { useNavigate } from 'react-router-dom';



const Header = () => {


  const navigate = useNavigate();
  const { cart} = useContext(UserContext);

   
  return (
    <div>
  <button
              type="primary"
              danger
              onClick={() => {
                localStorage.clear();
                window.location.replace("/");
              }}
            >
              Deconnexion
            </button>
<div>
  <p>total products: {cart.length} </p>

<ShoppingCartIcon  onClick={()=> navigate('/cart' )}    />
</div>

    </div>
  )
}

export default Header