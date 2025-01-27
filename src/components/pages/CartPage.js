/* eslint-disable */
import { Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem';
import Layout from '../layout/Layout';

import {useDispatch, useSelector} from "react-redux"
import { emptyCart } from '../../state-management/cartSlice';
function CartPage() {
  
  const dispatch = useDispatch()
  const shoppingCart = useSelector((state)=>state.shoppingCarts.shoppingCart)
  console.log(shoppingCart)
  
  return (
    <Layout>
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={6}
      />
      {shoppingCart.map((cartItem) => (
        <Box mb={3}>
          <CartItem cartItem={cartItem}  />
        </Box>
      ))}
      <Box mt={5}>
        <Box mb={3}>
          <Button fullWidth variant="contained">Checkout</Button>
        </Box>
        <Box mb={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={()=> dispatch(emptyCart())}
          >
            Empty Cart
          </Button>
        </Box>
        <Box mb={3}>
          <Link to="/">
            <Button
              fullWidth
              variant="contained"
              startIcon={<HomeIcon />}
            >
              Home
            </Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
}

export default CartPage;
