import React, { useState } from 'react';

export default function MySwitcher() {
  // ------------------- 3 ways of conditional component rendering
  // const ErrorMsg = () => (<div>It is ON</div> )
  // const ErrorMsg = () => (isOn ? <div>It is ON</div> : null);
  const ErrorMsg = ({ isOn }) => (isOn ? <div>It is ON</div> : null);
  //----------------
  const [isOn, setIsOn] = useState(false);
  const onClickHandler = () => {
    setIsOn((o) => !o);
  };

  // ------------------- 3 ways of conditional component rendering
  return (
    <div>
      {/* {isOn && <ErrorMsg/>} */}
      {/* <ErrorMsg /> */}
      <ErrorMsg isOn={isOn} />
      <hr />
      <button onClick={onClickHandler} aria-pressed={isOn}>
        Switch Toggler
      </button>
    </div>
  );
}
