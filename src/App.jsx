import './App.css'
import {useState, useEffect} from 'react';
// import { FaAngleDoubleRight } from 'react-icons/fa' ;  <FaAngleDoubleRight/>

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProfiles(data);
    setLoading(false);
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  if(loading){
    return(
      <div className= 'loading'>Loading...</div>
    )
  }

  const {dates, duties, title, company} = profiles[value];
  
  return (
    <main>
      <div className = 'title'>
        <h1>Experience</h1>
        <div className = 'bar'></div>
      </div>
      
      <div className= 'jobs-container'>
        <div className= 'links'>
          {profiles.map((item, index) => {
            return(
            <button 
              key={index} 
              className ='btn' 
              onClick = {()=> {setValue(index)}}  
              className ={index === value && 'active'}
              >
              {item.company} 
            </button>
          )})}
        </div>
        
        <div className='tabs'>
          <h2>{title}</h2>
          <h3>{company}</h3>
          <h4>{dates}</h4>
          <div>
            {duties.map((duty, index) => {
            return(
            <p key={index}><span> >> </span>{duty}</p>
            )})}
          </div>
          <button className= 'info'>MORE INFO</button>
        </div>
      </div>
    </main>
  )
}


export default App;
