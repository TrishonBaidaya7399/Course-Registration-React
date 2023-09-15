import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Carts = ({courses, handleSelectButton}) => {
   
    return (
        <div className='flex'>
           <div className="carts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
            courses.map( (course, idx) => <Cart key={idx} handleSelectButton={handleSelectButton} course={course}></Cart>)
           }
           </div>
        </div>
    );
};

Carts.propTypes = {
    courses: PropTypes.object.isRequired,
    course: PropTypes.object.isRequired,
    handleSelectButton: PropTypes.object,
    isSelected: PropTypes.bool,
 
   

};

export default Carts;