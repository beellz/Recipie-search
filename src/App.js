import React, { useEffect , useState} from "react" ;
import Recipie from "./recipie";
import "./App.css";


function App() {
const appid ="4dd8354a"
const appkey = "c44a825f9296d024c2e3d8b9088f45d3"
const[recipies , setRecipies] = useState([]);
const [search , setSearch] = useState("");
const [query , setQuery] = useState("chicken")

const url =`https://api.edamam.com/search?q=${query}&app_id=${appid}&app_key=${appkey}`

const getRecipie = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.hits);
  setRecipies(data.hits)
}
useEffect(() => {getRecipie();} , [query]);

const updateSearch = e => {
  setSearch(e.target.value);
  console.log(e.target.value);
}
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}

  return (
    <div className="App">
      <form onSubmit={getSearch} className="seacrh-form">
        <input className="Search-bar" type="text" value={search} onChange={updateSearch}/>
        <button type="submit">Search</button>
      </form>
      {recipies.map(recipe => (
        <Recipie 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients} />
      ))}

    </div>
  );
}

export default App;
