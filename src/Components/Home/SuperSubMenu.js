import React from "react";
import styled from "styled-components";

export const SuperSubMenu = ({ items }) => {
  return (
    <ul className="supersubmenu">
      {items.map((superSubItem, superSubIndex) => (
        <li key={superSubIndex} className="supersubmenu-item">
          <a>{superSubItem.label}</a>
        </li>
      ))}
    </ul>
  );
};
