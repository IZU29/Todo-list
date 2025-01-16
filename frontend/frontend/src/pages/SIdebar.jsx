import { useState , useEffect}  from 'react'
import axios from 'axios'

const Sidebar = () => {
  const [todo , setTodo] = useState([])
//   const fetchData = async () => {
//   const response = await axios.get('http://localhost:5000/api')
//   return response.data

// }
const todoList = [{name : "Wash The Plates" , checked : true},{name : "Bag Some Hoes" , checked : false}]
useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/api')
    setTodo(response.data)
    console.log(response.data)
  }
  fetchData()
}
,[])
  return (
      <div className="border border-black w-1/4">

      <div className="p-2 border border-blue-500 h-[10%]">
      <input type="text" name="" id="" className='border w-5/6 ' onChange={(e) => setTodo(e.target.value)}/>
      <button className="border w-1/6" onClick={() => console.log(todo)}> click </button>
      </div>
      <ul className="border border-red-500 p-2 h-[90%]">
        {
          todo.map((item , index) => (
            <li className='border flex h-10 m-2 justify-between items-center p-2' key = {index}>
            <div className="">{item.task}</div>
          <input type="checkbox" name="" id="" className='' checked ={item.completed}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar