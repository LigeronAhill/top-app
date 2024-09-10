"use client";
import {
  FirstLevelMenuItem,
  MenuItem,
  PageItem,
} from "@/interfaces/menu.interface";
import styles from "./menu.module.css";
import { useEffect, useState } from "react";
import HatIcon from "./icons/hat.svg";
import CloudIcon from "./icons/cloud.svg";
import BookIcon from "./icons/book.svg";
import BoxIcon from "./icons/box.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";
import cn from "classnames";
import Link from "next/link";

let firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <HatIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <CloudIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BookIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Товары",
    icon: <BoxIcon />,
    id: TopLevelCategory.Products,
  },
];

export default function Menu() {
  let firstCategory = 0;
  let [menu, setMenu] = useState<MenuItem[]>();
  useEffect(() => {
    async function fetchMenu() {
      let url = process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find";
      let res: MenuItem[] = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ firstCategory }),
        headers: new Headers({ "content-type": "application/json" }),
      }).then((res) => res.json());
      setMenu(res);
    }
    fetchMenu();
  }, []);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((currentMenu) => (
          <div key={currentMenu.route}>
            <Link href={`/${currentMenu.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: currentMenu.id === firstCategory,
                })}
              >
                {currentMenu.icon}
                <span>{currentMenu.name}</span>
              </div>
            </Link>
            {currentMenu.id === firstCategory && buildSecondLevel(currentMenu)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    if (!menu) {
      return <></>;
    }
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            ></div>
            {buildThirdLevel(m.pages, menuItem.route)}
          </div>
        ))}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <Link
        key={page.alias}
        href={`/${route}/${page.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: false,
        })}
      >
        {page.category}
      </Link>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
}
