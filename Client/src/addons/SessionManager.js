import React, { useRef } from 'react';
import IdleTimer from 'react-idle-timer';

const SessionManager = () => {
  const idleTimer = useRef(null);
  const logOut = () => {
    localStorage.clear();
    window.location.href = '/';
    alert('Session expired');
  };
  return (
    <div>
      <IdleTimer
        ref={idleTimer}
        timeout={20000 * 1000}
        onIdle={logOut}
      ></IdleTimer>
    </div>
  );
};

export default SessionManager;
