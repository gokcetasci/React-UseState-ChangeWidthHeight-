import React, { useState } from 'react'

function StateSample() {

  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [inputWidth, setInputWidth] = useState('');
  const [inputHeight, setInputHeight] = useState('');

  const changeWidth = (e) => {
    setInputWidth(e.target.value);
  };

  const changeHeight = (e) => {
    setInputHeight(e.target.value);
  };

  const changeSize = () => {

    const newWidth = parseInt(inputWidth) || 200;
    const newHeight = parseInt(inputHeight) || 200;


    setWidth(newWidth);
    setHeight(newHeight);
  };

  return (<>

    <input
      type="number"
      placeholder="Width:"
      value={inputWidth}
      onChange={changeWidth}
    />

    <input
      type="number"
      placeholder="Height:"
      value={inputHeight}
      onChange={changeHeight}
    />

    <button onClick={changeSize}>Change</button>

    <div
      style={{
        width: width,
        height: height,
        border: '1px solid black',
      }}
    ></div>
  </>
  )
}

export default StateSample