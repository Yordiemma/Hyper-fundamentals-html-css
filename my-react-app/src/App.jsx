import Card from './components/card/Card'
import './App.css'

function App() {
 
const websit = "www.automarket.se"
  return (
    <>
      <h1>Businesss Card App</h1>
      <div className='Wrapper'>
        <h1 className='center'>1. Repliceting components</h1>
        <Card name="Alexander" email="alexander@automarket.se" websit="www.automarket.se"  color="firstColor"/>
        <Card name="Emma" email="Emma@automarket.se" websit= { websit } color="secondColor"/>
        <Card name="Yordanos" email="Emma@automarket.se" websit= { websit } color="thirdColor"/>
        
      </div>
    </>
  )
}

export default App
