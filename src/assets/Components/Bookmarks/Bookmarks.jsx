import PropTypes from 'prop-types';

const Bookmarks = ({Select, totalCredit, remaining}) => {
    return (
        <div className='bg-white p-4 rounded-xl '>    
            <div className='border-b-2 border-gray-200'>
                <h1 className='pb-4 text-blue-500 text-[18px] font-semibold'>Credit Hour Remaining : {remaining} hr</h1>
            </div>
            <div className='pt-4 pb-4 border-b-2 border-gray-200'>
                <h1 className='text-[20px] font-semibold pb-5'>Course Name</h1>
                <ol className='pl-4 text-gray-500 text-[16px]' style={{ listStyleType: 'decimal' }}>
                    {Select.map((selectedCourse, idx) => (
                        <li key={idx}>{selectedCourse.title}</li>
                    ))}
                </ol>
            </div>
            <div className='border-b-2 border-gray-200'>
                <h1 className='py-4 text-[20px] font-semibold'>Total credit hour : {totalCredit} hr</h1>
            </div>

        </div>
    );
};

Bookmarks.propTypes = {
    Select:PropTypes.object,
    totalCredit: PropTypes.number,
    remaining: PropTypes.number,
};

export default Bookmarks;