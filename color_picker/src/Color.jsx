import styles from "./Color.module.css";
import React, { useState } from "react";

function Color() {
  const [color, setColor] = useState("#FFFFFF");
  const handler = (e) => {
    setColor(event.target.value);
  };

  return (
    <>
      <div className={styles.container1}>
        <h1 className={styles.h}>Color Picker</h1>
        <div className={styles.container2} style={{ backgroundColor: color }}>
          <p className={styles.p1}>selected color: {color}</p>
        </div>
        <label>Choose : </label>
        <input type="color" onChange={(e) => handler(e)}></input>
      </div>
    </>
  );
}
export default Color;
