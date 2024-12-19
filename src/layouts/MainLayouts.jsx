import React, { Children } from "react";
import Headers from "../components/Headers";

export default function MainLayouts({ children }) {
  return (
    <div className="bg-black flex flex-col max-w-[1208px] max-h-screen rounded-lg">
      <Headers />
      <div>{children}</div>
    </div>
  );
}
