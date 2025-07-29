"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function CTAButton({
  label,
  icon,
  iconBtn,
  classNames,
  onPress,
}: {
  label?: string;
  icon?: React.ReactNode;
  iconBtn?: boolean;
  classNames?: {
    base?: string;
    text?: string;
    iconContainer?: string;
  };
  onPress?: () => void;
}) {

  if (iconBtn) {
    return (
      <button
        onClick={() => onPress?.()}
        className={cn(
          `bg-black cursor-pointer text-white  p-3 rounded-full`,
          classNames?.iconContainer
        )}
      >
        {icon}
      </button>
    );
  }

  return (
    <button
      onClick={() => onPress?.()}
      className={cn(
        `bg-black cursor-pointer text-white  py-1.5 px-2 flex gap-3 rounded-full text-sm items-center`,
        classNames?.base
      )}
    >
      {label && (
        <span className={cn("truncate", classNames?.text)}>{label}</span>
      )}
      {icon && (
        <span
          className={cn("p-1 bg-white rounded-full", classNames?.iconContainer)}
        >
          {icon}
        </span>
      )}
    </button>
  );
}
