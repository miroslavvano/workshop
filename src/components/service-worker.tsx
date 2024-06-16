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
    aspect: "Definition",
    description:
      "Service Workers are scripts that run in the background, separate from the web page, providing features that don’t need a web page or user interaction.",
  },
  {
    aspect: "Offline Support",
    description:
      "They enable applications to work offline by intercepting network requests and serving cached content.",
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
    aspect: "Background Sync",
    description:
      "Service Workers support background synchronization, ensuring that user actions (like sending a message) are completed when the network is available.",
  },
  {
    aspect: "Event-Driven",
    description:
      "They operate on an event-driven model, listening for events such as fetch, push, and sync to perform tasks.",
  },
  {
    aspect: "Progressive Web Apps",
    description:
      "Service Workers are a key technology behind Progressive Web Apps (PWAs), enabling features like offline functionality, push notifications, and background sync.",
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
