import React, { useState } from "react";
import { SubMenu } from "../Home/SubMenu";
import { NavbarData } from "../Home/NavbarData";
import "./Navbar3.css";
import styled from "styled-components";
import { PhoneIcon } from "../../Assets/Svgs/PhoneIcon";
import bisanheader from "../../Assets/gifs/bisanheader.gif";
import { PersianNumberComponent } from "../Common/PersianNumberComponent";

import { ExpandArrow } from "../../Assets/Svgs/ExpandArrow";

export const Navbar3 = () => {
  const phonenumber = "021-43000030";
  return (
    <div className="nav3-first-component">
      <div className="navigation holder">
        <div className="phone information">
          <PhoneIcon />
          {/* <div className="phone number">021 - 345648</div> */}
          <PhoneNumberHolder>
            <PersianNumberComponent number={phonenumber} />
          </PhoneNumberHolder>
        </div>
        <nav className="navbarr">
          <ul className="mainMenu">
            {NavbarData.map((item, index) => (
              <li key={index} className="nav-item">
                <a>
                  {item.hasSubMenu && <ExpandArrow />}
                  {item.label}
                </a>
                {item.hasSubMenu && <SubMenu items={item.subMenu} />}
              </li>
            ))}
          </ul>
        </nav>
        <img className="gif" src={bisanheader} alt="bisan gif" />
      </div>
    </div>
  );
};

const PhoneNumberHolder = styled.div`
  color: var(--Secondary-Dark-Color, #697a80);
  font-family: IRANSans(FaNum);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
