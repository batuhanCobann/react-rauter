// import useAuth from './store/context'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
// const {name, setName} = useAuth();
// console.log(name);

return (
    <>


      <Link to="/home">
        <button>Home</button>
      </Link>



      {/* <input  
      style={{backgroundColor: "red", borderRadius: "5px", padding: "15px"}}
      type="text" 
      value={name} 
      onChange={e => setName(e.target.value)}
       /> */}
    </>
  )
}

export default App


