"use client";

import { useTheme } from "next-themes";
import * as React from "react";

export function DarkModeToggle() {
  const { setTheme } = useTheme();
  return (
    <>
      <button
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.currentTarget.style.cursor = "pointer")}
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.currentTarget.style.cursor = "pointer")}
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
    </>
  );
}
