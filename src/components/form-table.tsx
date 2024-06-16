const ComparisonTable = () => {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "8px" }}>
            Feature/Aspect
          </th>
          <th style={{ border: "1px solid black", padding: "8px" }}>
            Controlled Inputs
          </th>
          <th style={{ border: "1px solid black", padding: "8px" }}>
            Uncontrolled Inputs
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Definition
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Input elements whose values are controlled by React state
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Input elements that maintain their own internal state
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            State Management
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Managed via React state (useState, this.setState)
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Managed by the DOM itself
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Initialization
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Value is set through React state and updated via event handlers
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Initial value is set using the defaultValue or defaultChecked props
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Value Access
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Accessed and updated via React state
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Accessed via refs using React.createRef or useRef
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Real-time Validation
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Easily implemented by updating state and re-rendering component
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            More complex, as refs need to be used and DOM needs to be queried
            manually
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Form Handling
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Simplified by React's state management, making form data easy to
            handle
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Often requires additional code to extract values from the DOM
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Performance
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Can lead to more re-renders if not managed properly
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            Do not trigger rerenders on value change - boilerplate - fixed by f.e. react-hook-forms
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ComparisonTable;
