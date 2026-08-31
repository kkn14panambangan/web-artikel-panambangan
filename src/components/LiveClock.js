"use client";

import { useState, useEffect } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    // Set initial time
    setTime(new Date());
    
    // Update time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  if (!time) return null; // Avoid hydration mismatch

  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const dayName = days[time.getDay()];
  const date = time.getDate();
  const monthName = months[time.getMonth()];
  const year = time.getFullYear();

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      backgroundColor: '#5d7f64', // Muted green from screenshot
      color: '#ffffff',
      padding: '12px 24px',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      zIndex: 100,
      fontFamily: 'sans-serif'
    }}>
      <div style={{ 
        fontSize: '16px', 
        fontWeight: 'bold',
        marginBottom: '4px',
        textShadow: '1px 1px 0 #d97706, -1px -1px 0 #d97706, 1px -1px 0 #d97706, -1px 1px 0 #d97706, 0px 2px 2px rgba(0,0,0,0.5)'
      }}>
        {`${dayName}, ${date} ${monthName} ${year}`}
      </div>
      <div style={{ 
        fontSize: '20px', 
        fontWeight: 'bold',
        textShadow: '1px 1px 0 #d97706, -1px -1px 0 #d97706, 1px -1px 0 #d97706, -1px 1px 0 #d97706, 0px 2px 2px rgba(0,0,0,0.5)'
      }}>
        {`${hours} : ${minutes} : ${seconds}`}
      </div>
    </div>
  );
}
