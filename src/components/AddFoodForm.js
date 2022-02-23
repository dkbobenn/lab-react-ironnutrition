import { useState } from 'react';
import { Input } from 'antd';

function AddFood(props) {
  //useStates:
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  //Function calls from the onChange in the form:
  const handleNameInput = (e) => setName(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleServingsInput = (e) => setServings(e.target.value);

  // Triggered by submit in the form:
  const handleSubmit = (e) => {
    //preventDefault() is preventing the deffault behavior of the form:
    e.preventDefault();
    const newFood = { name, image, calories, servings };

    console.log('Submitted: ', newFood);
    props.addFood(newFood);
    // Reset the state
    setName('');
    setImage('');
    setCalories(0);
    setServings(true);
  };

  return (
    <div className="AddMovie">
      <h1>Add Food Entry</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <Input style={{ width: 400, height: 30, margin: 5 }}
          className='input'
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        <label>Image</label>
        <Input style={{ width: 400, height: 30, margin: 5 }}
          type="text"
          src={image}
          alt="image"
          onChange={handleImageInput}
        />
        <label>Calories</label>
        <Input style={{ width: 400, height: 30, margin: 5 }}
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />
        <label>Servings</label>
        <Input style={{ width: 400, height: 30, margin: 5 }}
          type="number"
          name="servings"
          checked={servings}
          onChange={handleServingsInput}
        />
        <button type="submit" style={{ width: 100, height: 30, margin: 5 }}>Add Food</button>
      </form>
    </div>
  );
}

export default AddFood;
