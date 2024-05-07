import { useEffect, useState } from 'react';
import { ReadableStreamDefaultReadResult } from 'stream/web';

const SerialData: React.FC = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/data');
        const reader = response.body?.getReader();
        if (!reader) return;

        const decoder = new TextDecoder('utf-8');

        const onData = async (chunk: ReadableStreamDefaultReadResult<Uint8Array>) => {
          if (chunk.done) {
            console.log('Stream closed');
            return;
          }
          const receivedData = decoder.decode(chunk.value, { stream: true });
          const parsedData = JSON.parse(receivedData);
          setData(prevData => prevData + parsedData.data); // Append new data
          const nextChunk = await reader.read();
          if (nextChunk.done) {
            console.log('Stream closed');
            return;
          }
          await onData(nextChunk);
        };

        const firstChunk = await reader.read();
        if (!firstChunk.done) {
          await onData(firstChunk);
        } else {
          console.log('Stream closed');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function to handle component unmounting
      // Close any resources or stop ongoing processes
    };
  }, []);

  return (
    <div>
      <h1>Serial Data:</h1>
      <pre>{data}</pre>
    </div>
  );
};

export default SerialData;
