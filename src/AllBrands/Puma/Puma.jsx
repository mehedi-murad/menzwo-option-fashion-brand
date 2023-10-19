import adiBG from '../../assets/images/wave.svg'
import logo from '../../assets/brandLogo/puma.png'
import { useLoaderData } from 'react-router-dom';

const Puma = () => {
    const brandPuma = useLoaderData();
    return (
        <div className='max-w-7xl mx-auto'>
        <div className='flex justify-end h-[40vh] bg-cover' style={{backgroundImage: `url(${adiBG})`}}>
            <img className='w-96' src={logo} alt="" />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
            {
                brandPuma.map(pumaItem =>
                    <div className="card w-96 bg-base-100 shadow-xl p-5">
                    <figure><img className='h-60 w-full' src={pumaItem.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title ">{pumaItem.name}</h2>
                        <p className='text-lg font-semibold'>Price: {pumaItem.price}</p>
                        <div className="card-actions justify-end">
                        <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Buy Now</button>
                        </div>
                    </div>
                    </div>
                    )
            }
        </div>
    </div>
    );
};

export default Puma;