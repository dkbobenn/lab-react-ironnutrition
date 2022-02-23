import { useState } from 'react';
import { Input } from 'antd';

const SearchFood = (props) => {
  const { query, setQuery } = useState('');

  //const handleSearchInput = (e) => setQuery(e.target.value);

  const handleSearchInput = (e) => {
    setQuery(e.target.value);

    console.log('selected', query);
    props.SearchFood(e.target.value);
  };

  return (
    <div className="AddMovie">
      <form>
        <label>Search</label>
        <Input
          style={{ width: 400, height: 30, margin: 5 }}
          className="input"
          type="text"
          name="search"
          onChange={handleSearchInput}
        />
      </form>
    </div>
  );
};

export default SearchFood;
