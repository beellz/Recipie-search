import React, { useEffect , useState} from "react" ;
import Recipie from "./recipie";


function App() {
const appid ="4dd8354a"
const appkey = "c44a825f9296d024c2e3d8b9088f45d3"
const[recipies , setRecipies] = useState([]);
const url =`https://api.edamam.com/search?q=chicken&app_id=${appid}&app_key=${appkey}`

const getRecipie = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.hits);
  setRecipies(data.hits)
}
useEffect(() => {getRecipie();} , []);

  return (
    <div className="App">
      <form className="seacrh-form">
        <input className="Search-bar" type="text" />
        <button type="submit">Search</button>
      </form>
      {recipies.map(recipe => (
        <Recipie 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image} />
      ))}

    </div>
  );
}

export default App;
