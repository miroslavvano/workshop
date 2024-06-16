import React from "react";

const TypeVsInterfaceTable = () => {
  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th as React.CSSProperties}>Feature</th>
            <th style={styles.th as React.CSSProperties}>type</th>
            <th style={styles.th as React.CSSProperties}>interface</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
            >
              <td style={styles.td}>{row.feature}</td>
              <td style={styles.td}>{row.type}</td>
              <td style={styles.td}>{row.interface}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableData = [
  {
    feature: "Definition",
    type: "Used to define a type alias",
    interface: "Used to define an interface",
  },
  {
    feature: "Syntax",
    type: "type TypeName = {...}",
    interface: "interface InterfaceName {...}",
  },
  {
    feature: "Extending",
    type: "Can use extends or & to create new types",
    interface: "Can use extends to create new interfaces",
  },
  {
    feature: "Declaration Merging",
    type: "Not supported",
    interface: "Supported",
  },
  {
    feature: "Use with Union Types",
    type: "Supported",
    interface: "Not supported",
  },
  {
    feature: "Use with Intersection Types",
    type: "Supported",
    interface: "Supported",
  },
  { feature: "Tuple Types", type: "Supported", interface: "Not supported" },
  {
    feature: "Adding Properties",
    type: "Cannot add new properties after definition",
    interface: "Can add new properties after definition",
  },
  {
    feature: "Usage with Classes",
    type: "Can be used as type annotations for classes",
    interface: "Can be implemented by classes",
  },
  {
    feature: "Complex Types",
    type: "Better suited for complex types and unions",
    interface: "Better suited for defining shapes of objects",
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

export default TypeVsInterfaceTable;
