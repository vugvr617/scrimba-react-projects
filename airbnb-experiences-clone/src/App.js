import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import HeroPart from "./Components/HeroPart/HeroPart"
import Card from "./Components/Card/Card";
import datas from "./data.js"

const dataArray = datas.map((data) => {
  return <Card
    coverImg={data.coverImg}
    rating={data.stats.rating}
    review={data.stats.reviewCount}
    country={data.location}
    title={data.title}
    price={data.price}
    openSpots = {data.openSpots}
  ></Card>
})

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroPart></HeroPart>
      <div className="card-div">
        {dataArray}
      </div>
    </div>
  );
}

export default App;
