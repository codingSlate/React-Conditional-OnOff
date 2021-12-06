import React, { useState } from 'react';

export default function MySwitcher() {
  const OnMsg = () => <div>It is ON</div>;
  const OffMsg = () => <div>It is OFF</div>;

  const [isOn, setIsOn] = useState(false);
  const onClickHandler = () => {
    setIsOn((o) => !o);
  };

  // ------------------------ 4 ways to use

  const OnOff = ({ isOn }) => {
    if (isOn) {
      return <OnMsg />;
    } else {
      return <OffMsg />;
    }
  };

  // OR
  let message;
  if (isOn) {
    message = <OnMsg />;
  } else {
    message = <OffMsg />;
  }
  // OR
  const msg = () => {
    if (isOn) {
      return <OnMsg />;
    } else {
      return <OffMsg />;
    }
  };

  // ------------------------
  return (
    // ------------------------ 4 ways to use
    <div>
      <OnOff isOn={isOn} />
      {/* {message} */}
      {/* {msg()} */}
      {/* <msg /> */}
      {/* {msg}  */}
      <hr />
      <button onClick={onClickHandler} aria-pressed={isOn}>
        Switch On/Off
      </button>
    </div>
  );
}
