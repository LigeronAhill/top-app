import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";

export function Paragraph({
  size = "medium",
  children,
  className,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.large]: size === "large",
        [styles.medium]: size === "medium",
        [styles.small]: size === "small",
      })}
      {...props}
    >
      {children}
    </p>
  );
}
