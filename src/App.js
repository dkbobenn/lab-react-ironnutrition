import './App.css';

import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodsList, setFoods] = useState(foods);
  //console.log(foodsList);
  const [foodData, setFoodData] = useState(foods);  

  const addNewFood = food => {
    const updateFoodsData = [...foodData, foodsList];
    const updatedFood = [...foodsList, food];
 
    setFoodData(updateFoodsData);
    setFoods(updatedFood);
  };
 

  return (
    <div className="App">
    <AddFoodForm addFood={addNewFood} />
    <Search searchFood={addNewFood} />
      {foodsList.map((eachFood, index) => {
        //console.log(`This is eachFood = ${eachFood}`);
        return <FoodBox key={index} food={eachFood} />;
      })}
      
    </div>
  );
}

export default App;
