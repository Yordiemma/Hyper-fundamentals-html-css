import Card from './components/card/Card'
import './App.css'

function App() {
 

  return (
    <>
      <h1>Businesss Card App</h1>
      <div className='Wrapper'>
        <h1 className='center'>1. Repliceting components</h1>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
