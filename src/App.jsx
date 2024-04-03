import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProducttionHouse from "./components/ProducttionHouse";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <div className="">
        <Header></Header>
        <Slider />
        <ProducttionHouse />
        <GenreMovieList/>
      </div>
    </>
  );
}

export default App;
