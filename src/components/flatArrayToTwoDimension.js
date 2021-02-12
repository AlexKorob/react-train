import React, { useEffect, useState } from 'react';

const ArrayToTwoDimension = () => {
  const [numColumns, setNumColumns] = useState(5);
  const [newArray, setNewArray] = useState([]);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  useEffect(() => {
    setNewArray(
      data.reduce((prev, value, index) => {
        if (index % numColumns === 0) prev.push([]);
        if (typeof prev === 'object') {
          prev[Math.floor(index / numColumns)][index % numColumns] = value;
          return prev;
        }
      }, [])
    );
  }, [numColumns]);

  const handleInput = val => {
    if (!Number(val.currentTarget.value)) return;
    setNumColumns(val.currentTarget.value);
  };
  return (
    <>
      <input type='text' onInput={handleInput} defaultValue={5} />
      {newArray.map((arr, arrIndex) => {
        return (
          <div className='row' key={arrIndex}>
            {arr.map((el, index) => (
              <span className='column' key={index}>
                {el}
              </span>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default ArrayToTwoDimension;
