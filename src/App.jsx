import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Carts from './assets/Components/Carts/Carts'
import Header from './assets/Components/Header/Header'
import Bookmarks from './assets/Components/Bookmarks/Bookmarks'

function App() {
  const [courses, setCourses] = useState([])
  const [Select, setSelect] = useState([])
  const [totalCredit, setTotalCredit] = useState(0) 
  const [remaining, setRemaining] = useState(20) 
  const [totalPrice, setTotalPrice] = useState(0) 
  useEffect(()=>{
    fetch('data.json')
    .then(res=> res.json())
    .then(data => setCourses(data))
  },[])

  const handleSelectButton = course=>
  {
    if (remaining >0){
      const newSelect= [...Select, course];
      setSelect(newSelect);
      // set credit
      const newCredit = totalCredit + course.credit;
      if(newCredit<21){
        setTotalCredit(newCredit)
      }else{
        alert(`Credit limit exceed, can't select more`)
      }
      //set remaining hour
      const newRemaining = remaining - course.credit;
      if(newRemaining>-1){
        setRemaining(newRemaining)
      }else{
        alert(`Credit limit exceed, can't select more`)
      }
      //set total price
      const newPrice = totalPrice+ course.price;
      setTotalPrice(newPrice);
    }else{
      alert(`You have already selected the maximum number of courses (20).`);
    }

  }

  console.log(`course: ${Select.length}, total Credit: ${totalCredit}, Remaining: ${remaining}`);



  return (
    <>
    <div className='bg-gray-200 px-12'>
      <div className='header'>
        <Header></Header>
      </div>
      <div className='flex justify-between'>
        <div className="w-3/4">
        <Carts key={courses.id} handleSelectButton={handleSelectButton} courses={courses}></Carts>
        </div>
        <div className="1/4">
          <Bookmarks Select={Select} totalCredit={totalCredit} remaining={remaining} totalPrice={totalPrice}></Bookmarks>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
