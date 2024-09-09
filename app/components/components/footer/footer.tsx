import { FooterProps } from "./footer.props";
import styles from "./footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export default function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <p>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</p>
      <a href="#">
        <p>Пользовательское соглашение</p>
      </a>
      <a href="#" target="_blank">
        <p>Политика конфиденциальности</p>
      </a>
    </footer>
  );
}
