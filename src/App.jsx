import data from './data.json'
import Card from './components/Card'

function App() {

  return (
    <>
    <div className='flex items-center justify-center'>
    <div className='grid grid-cols-3'>
    {data.map((curr) => <Card name = {curr.name} role = {curr.role} imgUrl = {curr.imgUrl}/>)}
    </div>
    </div>
    </>
  )
}

export default App
