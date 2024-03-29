import adiBG from '../../assets/images/wave.svg'
import logo from '../../assets/brandLogo/gucci.png'
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Slider from '../../Pages/Slider/Slider';
import { useEffect, useState } from 'react';


const Gucci = () => {
    const [gucciProducts, setGucciProducts] = useState([])

  useEffect(()=>{
    fetch('https://menzwo-option-fashion.vercel.app/product/Gucci')
    .then(res => res.json())
    .then(data => {
      setGucciProducts(data)
    })
  }, [])
    return (
        <div>
            <div className='mt-4 ml-10 flex justify-start items-center gap-4'>
                <FaArrowLeft></FaArrowLeft>
                <Link to="/">
                        <h2 className='text-lg underline text-blue-700'>Home / Brand</h2>
                </Link>
            </div>
            <Slider></Slider>
            <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
            {
                gucciProducts.map(gucciItem =>
                    <div key={gucciItem._id} className="card md:w-96 bg-base-100 shadow-xl p-5">
                    <figure><img className='h-60 w-full' src={gucciItem.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title ">{gucciItem.name}</h2>
                        <div className='flex justify-between items-center'>
                            <p className='text-lg font-semibold'>Brand: {gucciItem.brand}</p>
                            <p className='text-lg font-semibold'>Type: {gucciItem.type}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='text-lg font-semibold'>Price: {gucciItem.price}</p>
                            <p className='text-lg '>Rating: {gucciItem.rating}</p>
                        </div>
                        <div className="card-actions justify-center items-center">
                            <Link to={`/details/${gucciItem._id}`}>
                                <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Details</button>
                            </Link>
                            <Link to={`/updateproduct/${gucciItem._id}`}>
                                <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Update</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                    )
            }
        </div>
        </div>
        </div>
    );
};

export default Gucci;