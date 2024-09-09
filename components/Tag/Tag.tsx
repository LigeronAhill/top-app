import styles from "./Tag.module.css";
import cn from "classnames";
import { TagProps } from "./Tag.props";

export function Tag({
  size = "m",
  color = "ghost",
  href,
  className,
  children,
  ...props
}: TagProps) {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size == "s",
        [styles.m]: size === "m",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.grey]: color === "grey",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
}
