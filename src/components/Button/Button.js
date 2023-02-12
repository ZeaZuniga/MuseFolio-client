import "./Button.scss";

export default function Button({ scssClass, buttonText }) {
  return <button className={scssClass}>{buttonText}</button>;
}
