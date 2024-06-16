const WebWorkerComparisonTable = () => {
  return (
    <div style={styles.container}>
      <h2>Web Workers Comparison</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Feature</th>
            <th style={styles.th}>Main Thread</th>
            <th style={styles.th}>Web Worker</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
            >
              <td style={styles.td}>{row.feature}</td>
              <td style={styles.td}>{row.mainThread}</td>
              <td style={styles.td}>{row.webWorker}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableData = [
  {
    feature: "Execution Context",
    mainThread: "Runs in the main browser thread",
    webWorker: "Runs in a separate background thread",
  },
  {
    feature: "Performance Impact",
    mainThread: "Can cause UI to become unresponsive during intensive tasks",
    webWorker:
      "Can perform intensive tasks without affecting UI responsiveness",
  },
  {
    feature: "Concurrency",
    mainThread: "Single-threaded (JavaScript is event-driven)",
    webWorker: "Multi-threaded (can run parallel tasks)",
  },
  {
    feature: "Data Communication",
    mainThread: "Direct manipulation of DOM and global objects",
    webWorker:
      "Communicates with main thread via messages (postMessage and onmessage)",
  },
  {
    feature: "Access to DOM",
    mainThread: "Full access to the DOM and window object",
    webWorker: "No direct access to the DOM",
  },
  {
    feature: "Use Case",
    mainThread: "Suitable for tasks that require DOM manipulation",
    webWorker:
      "Suitable for CPU-intensive tasks such as data processing, large calculations",
  },
  {
    feature: "Creation and Lifecycle",
    mainThread: "Code runs as part of the main script execution",
    webWorker:
      "Explicitly created using the Worker() constructor, lifecycle managed separately",
  },
  {
    feature: "Error Handling",
    mainThread: "Errors are caught using try-catch blocks",
    webWorker: "Errors are reported to the main thread via error events",
  },
];

const styles = {
  container: {
    margin: "20px",
    fontFamily: "Arial, sans-serif",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
  },
  td: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
  },
};

export default WebWorkerComparisonTable;
