const ServiceWorkersTable = () => {
  return (
    <div style={styles.container}>
      <h2>Service Workers: Usage and Benefits</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Aspect</th>
            <th style={styles.th}>Description</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
            >
              <td style={styles.td}>{row.aspect}</td>
              <td style={styles.td}>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableData = [
  {
    aspect: "Lifecycle",
    description:
      "Service Workers have a lifecycle that includes registration, installation, activation, and termination.",
  },
  {
    aspect: "Registration",
    description:
      "A Service Worker is registered in the web application using JavaScript. This typically happens during the loading of the web page",
  },
  {
    aspect: "Installation",
    description:
      "Once registered, the Service Worker starts the installation process. This is where it usually caches the necessary resources.",
  },
  {
    aspect: "Activation",
    description:
      "After the installation, the Service Worker activates. This phase is used to clean up old caches and ensure that the new Service Worker takes control.",
  },
  {
    aspect: "Interception",
    description:
      "After activation, the Service Worker can intercept network requests, allowing it to serve cached content, fetch new data, or manipulate responses.",
  },
  {
    aspect: "Offline Support",
    description:
      "They enable applications to work offline by intercepting network requests and serving cached content.",
  },
  {
    aspect: "Background Sync",
    description:
      "Service Workers support background synchronization, ensuring that user actions (like sending a message) are completed when the network is available.",
  },
  {
    aspect: "Caching",
    description:
      "Service Workers can cache resources, making websites load faster and more reliably, especially under poor network conditions.",
  },
  {
    aspect: "Push Notifications",
    description:
      "They enable push notifications, allowing web applications to receive messages from a server even when the application is not open.",
  },
  {
    aspect: "Event-Driven",
    description:
      "They operate on an event-driven model, listening for events such as fetch, push, and sync to perform tasks.",
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

export default ServiceWorkersTable;
