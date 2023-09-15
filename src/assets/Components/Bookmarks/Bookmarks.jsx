import PropTypes from 'prop-types';
import {IoIosRemoveCircle}  from 'react-icons/io'
const Bookmarks = ({Select, totalCredit, remaining, totalPrice, handleRemove,}) => {
    return (
        <div className='bg-white p-4 rounded-xl '>    
            <div className='border-b-2 border-gray-200'>
                <h1 className='pb-4 text-blue-500 text-[18px] font-semibold'>Credit Hour Remaining : {remaining} hr</h1>
            </div>
            <div className='py-4 border-b-2 border-gray-200'>
                <h1 className='text-[20px] font-semibold'>Course Name</h1>
                
                <ol className='text-gray-500 text-[16px]' style={{ listStyleType: 'decimal' }}>
                    {Select.map((selectedCourse, idx) => (
                     <li className='flex flex-col border-2 border-gray-400 rounded-lg px-2 py-1 mb-2 bg-gray-100' key={idx}>
                        <div className='flex justify-between'>
                        <div className="title text-gray-500 font-semibold text-[16px]">
                        {idx+1}. {selectedCourse.title} 
                        </div>
                        <button className='text-red-500 text-[20px]' onClick={() => 
                            handleRemove(selectedCourse)}>
                            <IoIosRemoveCircle />
                        </button>
                        </div>
                        <div className='text-gray-500 text-[14px] pl-5'>
                            <p>Credit: {selectedCourse.credit}hr</p>
                            <p>Price: {selectedCourse.price} USD</p>
                        </div>

                     </li>
                    ))}
                </ol>
            </div>
            <div className='border-b-2 border-gray-200'>
                <h1 className='py-4 text-[16px] text-gray-500 font-semibold'>Total Credit Hour : {totalCredit}</h1>
            </div>
            <div className='border-b-2 border-gray-200'>
                <h1 className='py-4 text-[16px] text-gray-500 font-semibold'>Total Price : {totalPrice} USD</h1>
            </div>

        </div>
    );
};

Bookmarks.propTypes = {
    Select:PropTypes.array,
    totalCredit: PropTypes.number,
    remaining: PropTypes.number,
    totalPrice: PropTypes.number,
    handleRemove:PropTypes.array,
};

export default Bookmarks;