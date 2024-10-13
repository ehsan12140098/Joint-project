import { PhoneIcon } from "../../Assets/Svgs/PhoneIcon";
import { ExpandArrow } from "../../Assets/Svgs/ExpandArrow";
import { ChevronleftSmall } from "../../Assets/Svgs/ChevronleftSmall";
import { AirplaneTakeOff } from "../../Assets/Svgs/AirplaneTakeOff";
import { AirplaneLanding } from "../../Assets/Svgs/AirplaneLanding";
import { Calendar } from "../../Assets/Svgs/Calendar";
import { Contacts } from "../../Assets/Svgs/Contacts";
import { Plus } from "../../Assets/Svgs/Plus";
import { Subtract } from "../../Assets/Svgs/Subtract";
import { SearchIcon } from "../../Assets/Svgs/SearchIcon";
// import HeroBg from "../Assets/images/Airplane.png";
import "./Navbar1.css";
import React from "react";
import bisangif from "../../Assets/gifs/bisangif.gif";

const Navbar1 = () => {
  return (
    <div className="navigation-holder-nav1">
      <div className="phone information">
        <PhoneIcon />
        <div className="phone number">021 - 345648</div>
      </div>
      <nav>
        <ul class="mainMenu">
          <li>
            <a href="#">درباره ما</a>
          </li>
          <li>
            <ExpandArrow />
            <a href="#">بلاگ</a>
            <ul class="subMenu">
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">مجله گردشگری</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> اخبار گردشگری</a>
                  </li>
                  <li>
                    <a href="#">دانستنی های سفر</a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">اسپانیا</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> مادرید </a>
                  </li>
                  <li>
                    <a href="#"> ایبیزا </a>
                  </li>
                  <li>
                    <a href="#"> بارسلون </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">فرانسه</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> پاریس </a>
                  </li>
                  <li>
                    <a href="#"> موناکو </a>
                  </li>
                  <li>
                    <a href="#"> مارسی </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">ایتالیا</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> میلان </a>
                  </li>
                  <li>
                    <a href="#"> ونیز </a>
                  </li>
                  <li>
                    <a href="#"> رم </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">ترکیه</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> استانبول </a>
                  </li>
                  <li>
                    <a href="#"> آنتالیا</a>
                  </li>
                  <li>
                    <a href="#"> آنکارا</a>
                  </li>
                  <li>
                    <a href="#"> کوش آداسی</a>
                  </li>
                  <li>
                    <a href="#"> مارماریس</a>
                  </li>
                  <li>
                    <a href="#"> بدروم</a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">امارات</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> دبی </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">گرجستان</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> تفلیس </a>
                  </li>
                  <li>
                    <a href="#"> باتومی </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">قطر</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> دوحه </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">آذربایجان</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> باکو </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">مالدیو</a>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">آلمان</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> فرانکفورت </a>
                  </li>
                  <li>
                    <a href="#"> مونیخ </a>
                  </li>
                  <li>
                    <a href="#"> برلین </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <ExpandArrow />
            <a href="#">ویزا </a>
            <ul class="secondsubMenu">
              <li>
                <a href="#"> ویزا شنگن</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> هتل رام</a>
                  </li>
                  <li>
                    <a href="#">هتل رام</a>
                  </li>
                  <li>
                    <a href="#">هتل رام</a>
                  </li>
                  <li>
                    <a href="#">هتل رام</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">ویزا کانادا</a>
              </li>
              <li>
                <a href="#">ویزا دبی</a>
              </li>
              <li>
                <a href="#">ویزا تایلند</a>
              </li>
              <li>
                <a href="#">ویزا روسیه</a>
              </li>
              <li>
                <a href="#">ویزا بلغارستان</a>
              </li>
              <li>
                <a href="#">سایر ویزاها</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">تور اقساط </a>
          </li>
          <li>
            <ExpandArrow />
            <a href="#">هتل </a>
            <ul class="subMenu">
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">ترکیه</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> استانبول </a>
                  </li>
                  <li>
                    <a href="#"> آنتالیا</a>
                  </li>
                  <li>
                    <a href="#"> آنکارا</a>
                  </li>
                  <li>
                    <a href="#"> کوش آداسی</a>
                  </li>
                  <li>
                    <a href="#"> مارماریس</a>
                  </li>
                  <li>
                    <a href="#"> بدروم</a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">امارات</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> دبی </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">گرجستان</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> تفلیس </a>
                  </li>
                  <li>
                    <a href="#"> باتومی </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تایلند</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> بانکوک </a>
                  </li>
                  <li>
                    <a href="#"> پوکت </a>
                  </li>
                  <li>
                    <a href="#"> پاتایا </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">داخلی</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> مشهد </a>
                  </li>
                  <li>
                    <a href="#"> قم </a>
                  </li>
                  <li>
                    <a href="#"> شیراز </a>
                  </li>
                  <li>
                    <a href="#"> کیش </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">قطر</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> دوحه </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">ارمنستان</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> ایروان </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">آذربایجان</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> باکو </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">روسیه</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> سن پترزبورگ </a>
                  </li>
                  <li>
                    <a href="#"> مسکو </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">مالزی</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> کوالالامپور </a>
                  </li>
                  <li>
                    <a href="#"> سنگاپور </a>
                  </li>
                  <li>
                    <a href="#"> لنکاوی </a>
                  </li>
                  <li>
                    <a href="#"> پنانگ </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">اندونزی</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> بالی </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">مالدیو</a>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">بلغارستان</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> وارنا </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">چین</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> پکن </a>
                  </li>
                  <li>
                    <a href="#"> شانگهای </a>
                  </li>
                  <li>
                    <a href="#"> گوانجو </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">هند</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> آگرا </a>
                  </li>
                  <li>
                    <a href="#"> دهلی </a>
                  </li>
                  <li>
                    <a href="#"> بمبـُی </a>
                  </li>
                  <li>
                    <a href="#"> گوا </a>
                  </li>
                  <li>
                    <a href="#"> جیپور </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <ExpandArrow />
            <a href="#">تور اروپا </a>
            <ul class="subMenu">
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور فرانسه</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور پاریس </a>
                  </li>
                  <li>
                    <a href="#">تور موناکو </a>
                  </li>
                  <li>
                    <a href="#">تور مارسی </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#"> تور اسپانیا</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور مادرید </a>
                  </li>
                  <li>
                    <a href="#">تور ایبیزا </a>
                  </li>
                  <li>
                    <a href="#">تور بارسلون </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور ایتالیا</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور میلان </a>
                  </li>
                  <li>
                    <a href="#">تور ونیز </a>
                  </li>
                  <li>
                    <a href="#">تور رم </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور آلمان</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور فرانکفورت </a>
                  </li>
                  <li>
                    <a href="#">تور مونیخ </a>
                  </li>
                  <li>
                    <a href="#">تور برلین </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور سویس</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور برن </a>
                  </li>
                  <li>
                    <a href="#">تور لوزان </a>
                  </li>
                  <li>
                    <a href="#">تور زوریخ </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور مجارستان</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور بوداپست </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور هلند</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور آمستردام </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">تور ویژه </a>
          </li>
          <li>
            <a href="#">تور ترکیه </a>
            <ul class="secondsubMenu">
              <li>
                <a href="#">تور استانبول</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#"> هتل رام</a>
                  </li>
                  <li>
                    <a href="#">هتل رام</a>
                  </li>
                  <li>
                    <a href="#">هتل رام</a>
                  </li>
                  <li>
                    <a href="#">هتل رام</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#"> تور آنتالیا</a>
              </li>
              <li>
                <a href="#">تور آنکارا</a>
              </li>
              <li>
                <a href="#">تور کوش آداسی</a>
              </li>
              <li>
                <a href="#">تور مارماریس</a>
              </li>
              <li>
                <a href="#">تور بدروم</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">تور آسیایی </a>
            <ul class="subMenu">
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور ترکیه</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور استانبول </a>
                  </li>
                  <li>
                    <a href="#">تور آنتالیا</a>
                  </li>
                  <li>
                    <a href="#">تور آنکارا</a>
                  </li>
                  <li>
                    <a href="#">تور کوش آداسی</a>
                  </li>
                  <li>
                    <a href="#">تور مارماریس</a>
                  </li>
                  <li>
                    <a href="#">تور بدروم</a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#"> تور امارات</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور دبی </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور گرجستان</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور تفلیس </a>
                  </li>
                  <li>
                    <a href="#">تور باتومی </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور تایلند </a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور بانکوک </a>
                  </li>
                  <li>
                    <a href="#">تور پوکت </a>
                  </li>
                  <li>
                    <a href="#">تور پاتایا </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور داخلی</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور مشهد </a>
                  </li>
                  <li>
                    <a href="#">تور قم </a>
                  </li>
                  <li>
                    <a href="#">تور شیراز </a>
                  </li>
                  <li>
                    <a href="#">تور کیش </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور قطر</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور دوحه </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور ارمنستان</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور ایروان </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور آذربایجان</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور باکو </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور روسیه</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور سن پترزبورگ </a>
                  </li>
                  <li>
                    <a href="#">تور مسکو </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور مالزی</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور کوالالامپور </a>
                  </li>
                  <li>
                    <a href="#">تور سنگاپور </a>
                  </li>
                  <li>
                    <a href="#">تور لنکاوی </a>
                  </li>
                  <li>
                    <a href="#">تور پنانگ </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور اندونزی</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور بالی </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور مالدیو</a>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور بلغارستان</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور وارنا </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور چین</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور پکن </a>
                  </li>
                  <li>
                    <a href="#">تور شانگهای </a>
                  </li>
                  <li>
                    <a href="#">تور گوانجو </a>
                  </li>
                </ul>
              </li>
              <li>
                <ChevronleftSmall></ChevronleftSmall>
                <a href="#">تور هند</a>
                <ul class="superSubMenu">
                  <li>
                    <a href="#">تور آگرا </a>
                  </li>
                  <li>
                    <a href="#">تور دهلی </a>
                  </li>
                  <li>
                    <a href="#">تور بمبـُی </a>
                  </li>
                  <li>
                    <a href="#">تور گوا </a>
                  </li>
                  <li>
                    <a href="#">تور جیپور </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* <div className="logo holder"></div> */}
      <img className="gif" src={bisangif} alt="Motion Graphic" />
    </div>
  );
};

export default Navbar1;

{
  /* <li>
<ExpandArrow />
<a href="#">تور اروپا </a>
<ul class="subMenu">
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور فرانسه</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور پاریس </a>
      </li>
      <li>
        <a href="#">تور موناکو </a>
      </li>
      <li>
        <a href="#">تور مارسی </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#"> تور اسپانیا</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور مادرید </a>
      </li>
      <li>
        <a href="#">تور ایبیزا </a>
      </li>
      <li>
        <a href="#">تور بارسلون </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور ایتالیا</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور میلان </a>
      </li>
      <li>
        <a href="#">تور ونیز </a>
      </li>
      <li>
        <a href="#">تور رم </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور آلمان</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور فرانکفورت </a>
      </li>
      <li>
        <a href="#">تور مونیخ </a>
      </li>
      <li>
        <a href="#">تور برلین </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور سویس</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور برن </a>
      </li>
      <li>
        <a href="#">تور لوزان </a>
      </li>
      <li>
        <a href="#">تور زوریخ </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور مجارستان</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور بوداپست </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور هلند</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور آمستردام </a>
      </li>
    </ul>
  </li>
</ul>
</li>
<li>
<a href="#">تور ویژه </a>
</li>
<li>
<a href="#">تور ترکیه </a>
<ul class="secondsubMenu">
  <li>
    <a href="#">تور استانبول</a>
    <ul class="superSubMenu">
      <li>
        <a href="#"> هتل رام</a>
      </li>
      <li>
        <a href="#">هتل رام</a>
      </li>
      <li>
        <a href="#">هتل رام</a>
      </li>
      <li>
        <a href="#">هتل رام</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#"> تور آنتالیا</a>
  </li>
  <li>
    <a href="#">تور آنکارا</a>
  </li>
  <li>
    <a href="#">تور کوش آداسی</a>
  </li>
  <li>
    <a href="#">تور مارماریس</a>
  </li>
  <li>
    <a href="#">تور بدروم</a>
  </li>
</ul>
</li>
<li>
<a href="#">تور آسیایی </a>
<ul class="subMenu">
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور ترکیه</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور استانبول </a>
      </li>
      <li>
        <a href="#">تور آنتالیا</a>
      </li>
      <li>
        <a href="#">تور آنکارا</a>
      </li>
      <li>
        <a href="#">تور کوش آداسی</a>
      </li>
      <li>
        <a href="#">تور مارماریس</a>
      </li>
      <li>
        <a href="#">تور بدروم</a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#"> تور امارات</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور دبی </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور گرجستان</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور تفلیس </a>
      </li>
      <li>
        <a href="#">تور باتومی </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور تایلند </a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور بانکوک </a>
      </li>
      <li>
        <a href="#">تور پوکت </a>
      </li>
      <li>
        <a href="#">تور پاتایا </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور داخلی</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور مشهد </a>
      </li>
      <li>
        <a href="#">تور قم </a>
      </li>
      <li>
        <a href="#">تور شیراز </a>
      </li>
      <li>
        <a href="#">تور کیش </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور قطر</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور دوحه </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور ارمنستان</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور ایروان </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور آذربایجان</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور باکو </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور روسیه</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور سن پترزبورگ </a>
      </li>
      <li>
        <a href="#">تور مسکو </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور مالزی</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور کوالالامپور </a>
      </li>
      <li>
        <a href="#">تور سنگاپور </a>
      </li>
      <li>
        <a href="#">تور لنکاوی </a>
      </li>
      <li>
        <a href="#">تور پنانگ </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور اندونزی</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور بالی </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور مالدیو</a>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور بلغارستان</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور وارنا </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور چین</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور پکن </a>
      </li>
      <li>
        <a href="#">تور شانگهای </a>
      </li>
      <li>
        <a href="#">تور گوانجو </a>
      </li>
    </ul>
  </li>
  <li>
    <ChevronleftSmall></ChevronleftSmall>
    <a href="#">تور هند</a>
    <ul class="superSubMenu">
      <li>
        <a href="#">تور آگرا </a>
      </li>
      <li>
        <a href="#">تور دهلی </a>
      </li>
      <li>
        <a href="#">تور بمبـُی </a>
      </li>
      <li>
        <a href="#">تور گوا </a>
      </li>
      <li>
        <a href="#">تور جیپور </a>
      </li>
    </ul>
  </li>
</ul>
</li> */
}
