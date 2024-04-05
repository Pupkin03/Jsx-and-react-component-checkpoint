
import './App.css'
import Description from './Component.jsx/Description'
// import Image from './Component.jsx/Image'
import Name from './Component.jsx/Name'
import Price from './Component.jsx/Price'

function App() {


  return (
    <>
      
  <div className="card">
    <img className='photo' src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?cs=srgb&dl=automobile-automotive-car-358070.jpg&fm=jpg" alt="Shoes" />

    <div className='cardname'>
    <h2 className="card-title">Hello<Name/></h2>
    <h4><Description/></h4>
    <h7><Price/></h7>
    </div>

  </div>
    
    </>
  )
}

export default App


