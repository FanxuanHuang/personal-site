import React, { useState } from "react";

interface Props {
  bgColor: string;
  symbol: string;
  symbolWidth: number;
}

export default function WorkDisplay(props: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="max-w-[560px] min-w-[33.3%] min-h-[325px] rounded-[20px] relative flex items-center justify-center"
      style={{ backgroundColor: props.bgColor }}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={props.symbol}
        width={props.symbolWidth}
      />
      {isHovered ? (
        <div className="w-full h-full bg-[rgba(0,0,0,.9)] rounded-[20px] absolute top-0 left-0">
        </div>
      ) : null}
    </div>
  );
}
