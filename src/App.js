
import { Container } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import './App.css'
import Section from './components/Section'
import { useState } from 'react'
import EmptyTemplate from './components/EmptyTemplate';

export default function App() {
  const [currentWeather,setCurrentWeather] = useState({})
  const [isLoading, setLoading] = useState(false)


  return (
    <div className="bg-img">
           
<Container fluid="md">
  <h1 style={{textAlign: "center"}}>see diffrent cities weather</h1>
  <SearchBar setCurrentWeather={setCurrentWeather} setLoading={setLoading}/>
  

  { Object.keys(currentWeather).length ? <Section isLoading={isLoading}  currentWeather={currentWeather} /> : <EmptyTemplate  isLoading={isLoading}/> }

</Container>
    </div>
  );
}
