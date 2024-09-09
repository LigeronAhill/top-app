"use client";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import StarIcon from "./Star.svg";
import {
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  // forwardRef,
  // ForwardedRef,
} from "react";
import cn from "classnames";

export default function Rating({
  isEditable = false,
  rating,
  setRating,
  tabIndex,
  ...props
}: RatingProps) {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>),
  );
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);
  useEffect(() => {
    constructRating(rating);
  }, [rating]);
  const constructRating = (current: number) => {
    const updatedArray = ratingArray.map((r, i) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < current,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDispay(i + 1)}
          onMouseLeave={() => changeDispay(rating)}
          onClick={() => onClick(i + 1)}
          tabIndex={computeFocus(rating, i)}
          onKeyDown={handleKey}
          // ref={(r) => ratingArrayRef.current?.push(r)}
        >
          <StarIcon />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };
  const changeDispay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };
  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };
  const computeFocus = (r: number, i: number): number => {
    if (!isEditable) {
      return -1;
    }
    if (!rating && i == 0) {
      return tabIndex ?? 0;
    }
    if (r == i + 1) {
      return tabIndex ?? 0;
    }
    return -1;
  };
  const handleKey = (e: KeyboardEvent) => {
    if (!isEditable || !setRating) {
      return;
    }
    if (e.code == "ArrowRight" || e.code == "ArrowUp") {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };
  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
}
