import React from 'react';


const Train = () => {
  let info: [string, number] = ["1", 2];  // tuple
  info[1] = 12;  // В кортеже можно переназначить значение, но добавить новый элемент в кортеж нельзя!

  enum Season { Winter, Spring, Summer, Autumn };
  let currentSeason: Season = Season.Autumn;

  const checkTypeOf = typeof currentSeason;

  type myType = {number: number}
  const ll: myType = {number: 1}

  let someAnyValue: any = "Hello World!!!";
  let strLength: number = (someAnyValue as string).length;

  let add = (a: number, b: number): number => a + b;

  return (
    <ul>
      <li>{currentSeason}</li>
      <li>{checkTypeOf}</li>
      <li>{strLength}</li>
      <li>{add(5, 6)}</li>
    </ul>
  );
}

export default Train;