// src/components/SessionTimeout.js
import React, { useState, useEffect } from 'react';

const SessionTimeout = () => {
  const [timeLeft, setTimeLeft] = useState(20*60);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowPopup(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return { minutes, secs };
  };

  const { minutes, secs } = formatTime(timeLeft);

  return (
    <div className="flex flex-col items-center justify-center p-4 border-slate-950 shadow-lg bg-white">
      <strong className="text-gray-700">Session Timeout in</strong>
      <div className="flex mt-3 items-center">
        <div className="flex flex-col items-center">
          <div className="bg-blue-600 text-white font-bold text-3xl p-4 ">
            {minutes}
          </div>
          <div className="text-sm font-normal mt-2">min</div>
        </div>
        <div className="text-4xl mb-8 m-2">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-600 text-white font-bold text-3xl p-4 ">
            {secs < 10 ? '0' : ''}
            {secs}
          </div>
          <div className="text-sm font-normal mt-2">sec</div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Session Timed Out</h2>
            <p>Your session has expired. Please log in again.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionTimeout;
