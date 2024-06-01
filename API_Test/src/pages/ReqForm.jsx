import { useState } from "react";
import { Form } from "react-router-dom";

const ReqForm = () => {
  const [values, setValues] = useState([]);
  const [input, setInput] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(values);
    // console.log(input);

    if (!input) {
      alert("Please enter a valid API URL");
      return;
    }

    try {
      const response = await fetch(input);
      const data = await response.json();
    //   console.log(data);
      setValues(data);

      // Check if the fetched data is an array
      if (Array.isArray(data)) {
        setValues(data);
      } else if (data && typeof data === "object") {
        // If data is an object, wrap it in an array
        setValues([data]);
      } else {
        alert("Invalid data format received from API.");
        setValues([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data. Please check the API URL and try again.");
    }
  };

  return (
    <section>
      <Form onSubmit={submitHandler}>
        <label htmlFor="key" style={{ fontSize: "26px", color: "red" }}>
          Enter API - {""}
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "400px", marginRight: "10px" }}
        />
        <button type="submit">Enter</button>
      </Form>
      {values.length > 0 ? (
        values.map((value, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <ul>
              {Object.entries(value).map(([key, val]) => (
                <li key={key} style={{marginBottom: "18px"}}>
                  <strong>{key}:</strong>{" "}
                  {typeof val === "object" ? JSON.stringify(val) : val}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <h3>Please enter API...</h3>
      )}
    </section>
  );
};

export default ReqForm;
