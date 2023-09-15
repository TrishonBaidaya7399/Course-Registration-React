import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';


const Cart = ({ course, handleSelectButton}) => {
    const { cover_img, title, details, price, credit, } = course;
    // const handleUnSelected= handleUnSelected;
    // console.log(handleUnSelected);


    return (
        <div className='cart bg-white rounded-xl p-4'>
            <div className="cover-img">
                <img className='rounded-lg' src={cover_img} alt={`Cover Picture of ${title}`} />
            </div>
            <div className="cart-body">
                <h1 className="cart-title text-[18px] font-semibold pt-4">{title}</h1>
                <p className="cart-details text-[14px] text-gray-500 pt-3">{details}</p>
                <div className='flex justify-between '>
                    <div className='flex items-center gap-2 mt-4'>
                        <div className='text-[24px] text-gray-700'>
                            <FiDollarSign />
                        </div>
                        <p className='text-[16px] text-gray-500'>Price : {price}</p>
                    </div>
                    <div className='flex items-center gap-2 mt-4'>
                        <div className='text-[24px] text-gray-700'>
                            <BsBook />
                        </div>
                        <p className=' text-[16px] text-gray-500'>Credit : {credit}hr</p>
                    </div>
                </div>
                <button
                className='btn-primary w-full py-2 rounded-lg text-white text-xl mt-6 bg-blue-500'
                    onClick={() => { 
                      
                        handleSelectButton(course)
                    }}
                   >Select
                </button>
            </div>
        </div>
    );
};

Cart.propTypes = {
    course: PropTypes.object,
    handleSelectButton: PropTypes.func,
    handleUnSelected: PropTypes.bool,
};

export default Cart;
