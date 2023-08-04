import React from "react";
function Button({ cls, label, func }) {
  return (
    <div className={cls} onclick={func}>
      {label}
    </div>
  );
}
export default Button;
