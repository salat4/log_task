import { useEffect, useState, useRef } from 'react';
import styles from './LogViewer.module.css';

const LogViewer: React.FC = () => {
  const [logData, setLogData] = useState<string[]>([]);
  const [autoScroll, setAutoScroll] = useState(true);
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchLogData = async () => {
      try {
        const response = await fetch('https://test-log-viewer-backend.stg.onepunch.agency/view-log');

        if (response.body) {
          const reader = response.body.getReader();
          const decoder = new TextDecoder('utf-8');
          let result;

          while (!(result = await reader.read()).done) {
            const chunk = decoder.decode(result.value, { stream: true });
            setLogData((prevLogs) => {
              const updatedLogs = [...prevLogs, chunk];
              // Зберігаємо лише останні 1000 рядків
              if (updatedLogs.length > 1000) {
                return updatedLogs.slice(updatedLogs.length - 1000);
              }
              return updatedLogs;
            });
          }
        } else {
          console.error('Response body is empty');
        }
      } catch (error) {
        console.error('Error fetching log data:', error);
      }
    };

    fetchLogData();
  }, []);

  useEffect(() => {
    if (autoScroll && logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logData, autoScroll]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Log Data</h1>
      <button onClick={() => setAutoScroll(!autoScroll)} className={styles.button}>
        {autoScroll ? 'Disable Auto Scroll' : 'Enable Auto Scroll'}
      </button>
      <div ref={logContainerRef} className={styles.logContainer}>
        {logData.map((line, index) => (
          <pre key={index} className={styles.logLine}>
            {line}
          </pre>
        ))}
      </div>
    </div>
  );
};

export default LogViewer;
