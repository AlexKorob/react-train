import React from 'react';

function Repeatitem(props) {
  let items = [];
  for (let i = 0; i < props.numRepeat; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

export function Repeater(props) {
  return (
    <Repeatitem numRepeat={10}>
      {(index) => <div key={index}>Index of item == {index}</div>}
    </Repeatitem>
  );
}
