import React from "react";
import "./ProgressCircle.scss";

const Circle = ({ color, percentage, size, strokeWidth, className }) => {
  const radius = size / 2 - 10;
  const circ = 2 * Math.PI * radius - 20;
  const strokePct = ((100 - Math.round(percentage)) * circ) / 100;

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={strokeWidth}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

function ProgressCircle(props) {
  return (
    <div className={"c-progress-circle " + (props.className ? props.className : "")}>
      <svg width={props.size} height={props.size}>
        <g>
          <Circle strokeWidth={"0.4rem"} color="#dbdada" size={props.size} />
          <Circle
            strokeWidth={"0.6rem"}
            color={props.color}
            percentage={props.percentage}
            size={props.size}
          />
        </g>
        <defs>
          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={props.size / 2 - 30} fill="#FFFFFF" />
          </clipPath>
          <clipPath id="myInnerCircle">
            <circle cx="50%" cy="50%" r={props.size / 2 - 100} fill="#FFFFFF" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default ProgressCircle