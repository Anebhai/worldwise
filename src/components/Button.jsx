import styles from "./Button.module.css";

function Button({ children, type, onCLick }) {
  return (
    // ^Coz type is property of styles object we use [] to dynamically get the property.
    <button className={`${styles.btn} ${styles[type]}`} onClick={onCLick}>
      {children}
    </button>
  );
}

export default Button;
