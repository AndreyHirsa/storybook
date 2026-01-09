import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const Button = ({
  label,
  primary = false,
  size = "medium",
  ...props
}: ButtonProps) => {
  const mode = primary ? styles.primary : styles.secondary;

  return (
    <button
      type="button"
      className={[styles.button, styles[size], mode].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
