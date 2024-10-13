import React from "react";
import { SuperSubMenu } from "./SuperSubMenu";
import styled from "styled-components";

import { ChevronleftSmall } from "../../Assets/Svgs/ChevronleftSmall";

export const SubMenu = ({ items }) => {
  // console.log(items[0]);

  return (
    <ul className="submenu">
      {items.map((subItem, subIndex) => (
        <li key={subIndex} className="submenu-item">
          <a
            className={
              subItem.hasSuperSubMenu ? "with-submenu" : "without-submenu"
            }
          >
            {subItem.superSubMenu && <ChevronleftSmall />}
            {subItem.label}
          </a>
          {subItem.hasSuperSubMenu && (
            <SuperSubMenu items={subItem.superSubMenu} />
          )}
        </li>
      ))}
    </ul>
  );
};
