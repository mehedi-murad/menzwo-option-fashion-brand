
import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import CartElement from "./CartElement";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const {user} = useContext(AuthContext)
    const [cartProduct, setCartProduct] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        fetch(`https://menzwo-option-fashion.vercel.app/bookings?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setCartProduct(data))
    },[])

    const handleDelete = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
            fetch(`https://menzwo-option-fashion.vercel.app/bookings/${id}`, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Cart Item has been deleted.',
                        'success'
                      )
                      const remaining = cartProduct.filter(product =>product._id !== id)
                      setCartProduct(remaining)
                      navigate('/')
                }
            })
            }
          })
    }
    return (
        <div>
            <Navbar></Navbar>
      
            <h2 className="text-4xl font-bold text-center mt-10">Shopping Cart:{cartProduct.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                <thead>
                    <tr>
                    <th>
                        <label>
                        <input type="checkbox" className="checkbox" />
                        </label>
                    </th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Brand</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                

                    {
                        cartProduct.map(itemCart => <CartElement
                        key={cartProduct._id}
                        itemCart={itemCart}
                        handleDelete={handleDelete}

                        ></CartElement>)
                    }
                    
                
                </tbody>
                
                </table>
            </div>
            <Footer></Footer>
    </div>
    );
};

export default Cart;