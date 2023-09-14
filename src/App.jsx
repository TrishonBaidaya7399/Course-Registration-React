// import { useState } from 'react'
// import { useEffect } from 'react'
// import './App.css'
// import Carts from './assets/Components/Carts/Carts'
// import Header from './assets/Components/Header/Header'
// import Bookmarks from './assets/Components/Bookmarks/Bookmarks'

// function App() {
//   const [courses, setCourses] = useState([])
//   const [Select, setSelect] = useState([])
//   const [totalCredit, setTotalCredit] = useState(0) 
//   const [remaining, setRemaining] = useState(20) 
//   const [totalPrice, setTotalPrice] = useState(0) 
//   useEffect(()=>{
//     fetch('data.json')
//     .then(res=> res.json())
//     .then(data => setCourses(data))
//   },[])

//   const handleSelectButton = course=>
//   {
//     if (remaining >0){
//       const newSelect= [...Select, course];
//       setSelect(newSelect);
//       // set credit
//       const newCredit = totalCredit + course.credit;
//       if(newCredit<21){
//         setTotalCredit(newCredit)
//       }else{
//         alert(`Credit limit exceed, can't select more`)
//       }
//       //set remaining hour
//       const newRemaining = remaining - course.credit;
//       if(newRemaining>-1){
//         setRemaining(newRemaining)
//       }else{
//         alert(`Credit limit exceed, can't select more`)
//       }
//       //set total price
//       const newPrice = totalPrice+ course.price;
//       setTotalPrice(newPrice);
//     }else{
//       alert(`You have already selected the maximum number of courses (20).`);
//     }

//   }

//   console.log(`course: ${Select.length}, total Credit: ${totalCredit}, Remaining: ${remaining}`);



//   return (
//     <>
//     <div className='bg-gray-200 px-4 md:px-6 lg:px-12 py-6 lg:py-12'>
//       <div className='header'>
//         <Header></Header>
//       </div>
//       <div className='flex flex-col-reverse lg:flex-row justify-center lg:justify-between gap-6'>
//         <div className="md:w-full lg:w-3/4">
//           <h1 className="block lg:hidden text-2xl font-bold text-center text-gray-700 mb-5 border-b-2 border-t-2 border-gray-400 py-3">Courses</h1>
//         <Carts key={courses.id} handleSelectButton={handleSelectButton} courses={courses}></Carts>
//         </div>
//         <div className="md:w-3/4 lg:w-1/4 md:mx-[auto] mx-0  ">
//           <Bookmarks Select={Select} totalCredit={totalCredit} remaining={remaining} totalPrice={totalPrice}></Bookmarks>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default App

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
    if (remaining > 0) {
      const newSelect = [...Select, course];
      setSelect(newSelect);
      // set credit
      const newCredit = totalCredit + course.credit;
      if (newCredit < 21) {
        setTotalCredit(newCredit);
      } 
      // else {
      //   toast.error(`Credit limit exceed, can't select more`);
      // }
      // set remaining hour
      const newRemaining = remaining - course.credit;
      if (newRemaining > -1) {
        setRemaining(newRemaining);
      } 
      // else {
      //   toast.error(`Credit limit exceed, can't select more`);
      // }
      // set total price
      const newPrice = totalPrice + course.price;
      setTotalPrice(newPrice);
    } else {
      toast.error(`You can only add 20 hours of courses`);
    }
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
            <Carts key={courses.id} handleSelectButton={handleSelectButton} courses={courses} />
          </div>
          <div className='md:w-3/4 lg:w-1/4 md:mx-[auto] mx-0'>
            <Bookmarks Select={Select} totalCredit={totalCredit} remaining={remaining} totalPrice={totalPrice} />
          </div>
        </div>
      </div>
      {/* Add ToastContainer component to your component tree */}
      <ToastContainer position='top-right' autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}

export default App;
