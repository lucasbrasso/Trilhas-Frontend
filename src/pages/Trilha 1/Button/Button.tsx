import "./Button.css";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <button className="custom-button">{text}</button>;
}
