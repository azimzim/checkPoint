import React from 'react';
import { useEffect, useState } from 'react';
import { getHelloMessage } from '../api/hello';

export default function HelloMessage() {
  const [message, setMessage] = useState('');
  let onMounted = false;

  useEffect(() => {
    if (onMounted) return; 
    onMounted = true; 


    getHelloMessage()
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error fetching message'));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
