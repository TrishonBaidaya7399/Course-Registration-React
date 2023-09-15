import { useState, useEffect } from 'react';
import Carts from './assets/Components/Carts/Carts';
import Header from './assets/Components/Header/Header';
import Bookmarks from './assets/Components/Bookmarks/Bookmarks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [Select, setSelect] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectButton = (course) => {

    // Check if the course is already selected
    if (!isCourseSelected(course)) {
      if (remaining >= course.credit && totalCredit + course.credit <= 20) {
        const newSelect = [...Select, course];
        setSelect(newSelect);
        // set credit
        const newCredit = totalCredit + course.credit;
        setTotalCredit(newCredit);
        // set remaining hour
        const newRemaining = remaining - course.credit;
        setRemaining(newRemaining);
        // set total price
        const newPrice = totalPrice + course.price;
        setTotalPrice(newPrice);
      } else {
        toast.error(`Cannot select the course. Credit limit exceeded or remaining hours are insufficient.`);
      }
    } else {
      toast.error(`The course is already selected!`);
    }
  };

  // Function to check if a course is already selected
  const isCourseSelected = (course) => {
    return Select.some((selectedCourse) => selectedCourse.id === course.id);
  };

  // remove items from bookmark
  const handleRemove = (selectedCourse) => {
    const updatedSelect = Select.filter((course) => course.id !== selectedCourse.id);

    // Update the state with the modified Select array
    setSelect(updatedSelect);

    // Update totalCredit, remaining, and totalPrice
    setTotalCredit((prevTotalCredit) => prevTotalCredit - selectedCourse.credit);
    setRemaining((prevRemaining) => prevRemaining + selectedCourse.credit);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - selectedCourse.price);
  };

  return (
    <>
      <div className='bg-gray-200 px-4 md:px-6 lg:px-12 py-6 lg:py-12'>
        <div className='header'>
          <Header />
        </div>
        <div className='flex flex-col-reverse lg:flex-row justify-center lg:justify-between gap-6'>
          <div className='md:w-full lg:w-3/4'>
            <h1 className='block lg:hidden text-2xl font-bold text-center text-gray-700 mb-5 border-b-2 border-t-2 border-gray-400 py-3'>
              Courses
            </h1>
            <Carts key={courses.id}  handleSelectButton={handleSelectButton} courses={courses} />
          </div>
          <div className='md:w-3/4 lg:w-1/4 md:mx-[auto] mx-0'>
            <Bookmarks handleRemove={handleRemove} Select={Select} totalCredit={totalCredit} remaining={remaining} totalPrice={totalPrice} />
          </div>
        </div>
      </div>
      {/* Add ToastContainer component to your component tree */}
      <ToastContainer position='top-right' autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}

export default App;
