import PropTypes from 'prop-types';

const Bookmarks = ({Select, totalCredit, remaining, totalPrice}) => {
    return (
        <div className='bg-white p-6 rounded-xl '>    
            <div className='border-b-2 border-gray-200'>
                <h1 className='pb-4 text-blue-500 text-[18px] font-semibold'>Credit Hour Remaining : {remaining} hr</h1>
            </div>
            <div className='py-4 border-b-2 border-gray-200'>
                <h1 className='text-[20px] font-semibold'>Course Name</h1>
                
                <ol className='pl-4 text-gray-500 text-[16px]' style={{ listStyleType: 'decimal' }}>
                    {Select.map((selectedCourse, idx) => (
                        <li className='text-gray-400 text-[16px]' key={idx}>{selectedCourse.title}</li>
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
    Select:PropTypes.object,
    totalCredit: PropTypes.number,
    remaining: PropTypes.number,
    totalPrice: PropTypes.number,
};

export default Bookmarks;