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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: '1.2',
      marginLeft: '12px',
      paddingLeft: '16px',
      borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
      marginRight: '8px',
      height: '100%'
    }}>
      <div style={{ fontSize: '10px', fontWeight: '500', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
        {`${date} ${monthName} ${year}`}
      </div>
      <div style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '1px', color: 'rgba(255, 255, 255, 0.9)' }}>
        {`${hours}:${minutes}:${seconds}`}
      </div>
    </div>
  );
}
