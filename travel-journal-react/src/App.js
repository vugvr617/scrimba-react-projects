import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Cards from './Components/Cards/Cards';
import datas from './data.js';
import data from './data.js';

function App() {
  const dataArray = datas.map((data) => {
    return <Cards
      title = {data.title}
      img = {data.img}
      country = {data.location.country}
      entry = {data.date.entry}
      leave = {data.date.leave}
      description = {data.description}
    ></Cards>
  })
  return (
    <div>
      <NavBar></NavBar>
      {dataArray};
    </div>
  );
}

export default App;
