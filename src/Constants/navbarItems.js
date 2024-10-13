const navbarItems = [
  // { text: 'تور آسیایی', href: '/tours', backgroundColor: null, submenu: [] },
  {
    text: 'درباره ما',
    href: '/about-us',
  },
  {
    text: 'بلاگ',
    submenu: [
      {
        text: 'مجله گردشگری',

        submenu: [{ text: 'اخبار گردشگری' }, { text: 'دانستنی های سفر' }],
      },

      {
        text: 'اسپانیا',

        submenu: [{ text: 'مادرید' }, { text: 'ایبیزا' }, { text: 'بارسلون ' }],
      },
      {
        text: 'فرانسه',

        submenu: [{ text: 'پاریس' }, { text: 'موناکو' }, { text: 'مارسی ' }],
      },
      {
        text: 'ایتالیا',

        submenu: [{ text: 'میلان' }, { text: 'ونیز' }, { text: 'رم ' }],
      },
      {
        text: 'ترکیه',

        submenu: [
          { text: 'استانبول' },
          { text: 'آنتالیا' },
          { text: 'آنکارا ' },
          { text: 'کوش آداسی ' },
          { text: 'مارماریس ' },
          { text: 'بدروم ' },
        ],
      },
      {
        text: 'امارات',

        submenu: [{ text: 'دبی' }],
      },
      {
        text: 'گرجستان',

        submenu: [{ text: 'تفلیس' }, { text: 'باتومی' }],
      },
      {
        text: 'قطر',

        submenu: [{ text: 'دوحه' }],
      },
      {
        text: 'آذربایجان',
        href: '/blog/آذربایجان',
        submenu: [{ text: 'باکو' }],
      },
      {
        text: 'مالدیو',
        href: '/blog/مالدیو',
        submenu: [{ text: 'مالدیو' }],
      },
      {
        text: 'آلمان',
        href: '/blog/آلمان',
        submenu: [{ text: 'فرانکفورت' }, { text: 'مونیخ' }, { text: 'برلین ' }],
      },
    ],
  },
  {
    text: 'ویزا',
    submenu: [
      {
        text: 'ویزا شنگن',
      },
      {
        text: 'ویزا کانادا',
      },
      {
        text: 'ویزا دبی',
      },
      {
        text: 'ویزا تایلند',
      },
      {
        text: 'ویزا روسیه',
      },
      {
        text: 'ویزا بلغارستان',
      },
      {
        text: 'سایر ویزاها',
      },
    ],
  },
  {
    text: 'تور اقساط',
    backgroundColor: 'rgb(253, 224, 71)',
    href: '/tours/installment_tour',
  },
  {
    text: 'هتل',
    submenu: [
      {
        text: 'ترکیه',
        submenu: [
          { text: 'استانبول' },
          { text: 'آنتالیا' },
          { text: 'آنکارا ' },
          { text: 'کوش آداسی ' },
          { text: 'مارماریس ' },
          { text: 'بدروم ' },
        ],
      },
      {
        text: 'امارات',

        submenu: [{ text: 'دبی' }],
      },
      {
        text: 'گرجستان',

        submenu: [{ text: 'تفلیس' }, { text: 'باتومی' }],
      },

      {
        text: 'تایلند',

        submenu: [{ text: 'بانکوک' }, { text: 'پوکت' }, { text: 'پاتایا ' }],
      },
      {
        text: 'داخلی',

        submenu: [
          { text: 'مشهد' },
          { text: 'قم' },
          { text: 'شیراز ' },
          { text: 'کیش ' },
        ],
      },
      {
        text: 'قطر',

        submenu: [{ text: 'دوحه' }],
      },
      {
        text: 'ارمنستان',

        submenu: [{ text: 'ایروان' }],
      },
      {
        text: 'آذربایجان',

        submenu: [{ text: 'باکو' }],
      },
      {
        text: 'روسیه',

        submenu: [{ text: 'سن پترزبورگ' }, { text: 'مسکو' }],
      },
      {
        text: 'مالزی',

        submenu: [
          { text: 'کوالالامپور' },
          { text: 'سنگاپور' },
          { text: 'لنکاوی ' },
          { text: 'پنانگ ' },
        ],
      },
      {
        text: 'اندونزی',

        submenu: [{ text: 'بالی' }],
      },
      {
        text: 'مالدیو',

        submenu: [{ text: 'مالدیو' }],
      },
      {
        text: 'بلغارستان',

        submenu: [{ text: 'وارنا' }],
      },
      {
        text: 'چین',

        submenu: [{ text: 'پکن' }, { text: 'شانگهای' }, { text: 'گوانجو ' }],
      },
      {
        text: 'هند',

        submenu: [
          { text: 'آگرا' },
          { text: 'دهلی' },
          { text: 'بمبـُی ' },
          { text: 'گوا ' },
          { text: 'جیپور ' },
        ],
      },
    ],
    href: '/hotel/هتلهای-ترکیه',
  },
  {
    text: 'تور اروپا',
    submenu: [
      {
        text: 'تور فرانسه',

        submenu: [
          { text: 'تور پاریس' },
          { text: 'تور موناکو' },
          { text: 'تور مارسی' },
        ],
      },
      {
        text: 'تور اسپانیا',

        submenu: [
          { text: 'تور مادرید' },
          { text: 'تور ایبیزا' },
          { text: 'تور بارسلون ' },
        ],
      },
      {
        text: 'تور ایتالیا',

        submenu: [
          { text: 'تور میلان' },
          { text: 'تور ونیز' },
          { text: 'تور رم ' },
        ],
      },
      {
        text: 'تور آلمان',

        submenu: [
          { text: 'تور فرانکفورت' },
          { text: 'تور مونیخ' },
          { text: 'تور برلین ' },
        ],
      },
      {
        text: 'تور سویس',

        submenu: [
          { text: 'تور برن' },
          { text: 'تور لوزان' },
          { text: 'تور زوریخ ' },
        ],
      },
      {
        text: 'تور مجارستان',

        submenu: [{ text: 'تور بوداپست' }],
      },
      {
        text: 'تور هلند',

        submenu: [{ text: 'تور آمستردام' }],
      },
    ],
  },
  {
    text: 'تور ویژه',
    backgroundColor: 'rgb(255, 0, 0)',
  },
  {
    text: 'تور ترکیه',
    submenu: [
      {
        text: 'تور استانبول',
      },
      {
        text: 'تور آنتالیا',
      },
      {
        text: 'تور آنکارا',
      },
      {
        text: 'تور کوش آداسی',
      },
      {
        text: 'تور مارماریس',
      },
      {
        text: 'ویزا بلغارستان',
      },
      {
        text: 'تور بدروم',
      },
    ],
  },
  {
    text: 'تور آسیایی',
    submenu: [
      {
        text: 'تور ترکیه',

        submenu: [
          { text: 'تور استانبول' },
          { text: 'تور آنتالیا' },
          { text: 'تور آنکارا' },
          { text: 'تور کوش آداسی' },
          { text: 'تور مارماریس' },
          { text: 'تور بدروم' },
        ],
      },
      {
        text: 'تور امارات',

        submenu: [{ text: 'تور دبی' }],
      },
      {
        text: 'تور گرجستان',

        submenu: [{ text: 'تور تفلیس' }, { text: 'تور باتومی' }],
      },
      {
        text: 'تور تایلند',

        submenu: [
          { text: 'تور بانکوک' },
          { text: 'تور پوکت' },
          { text: 'تور پاتایا ' },
        ],
      },
      {
        text: 'تور داخلی',

        submenu: [
          { text: 'تور مشهد' },
          { text: 'تور قم' },
          { text: 'تور شیراز ' },
          { text: 'تور کیش ' },
        ],
      },
      {
        text: 'تور قطر',

        submenu: [{ text: 'تور دوحه' }],
      },
      {
        text: 'تور ارمنستان',

        submenu: [{ text: 'تور ایروان' }],
      },
      {
        text: 'تور آذربایجان',

        submenu: [{ text: 'تور باکو' }],
      },
      {
        text: 'تور روسیه',

        submenu: [{ text: 'تور سن پترزبورگ' }, { text: 'تور مسکو' }],
      },
      {
        text: 'تور مالزی',

        submenu: [
          { text: 'تور کوالالامپور' },
          { text: 'تور سنگاپور' },
          { text: 'تور لنکاوی ' },
          { text: 'تور پنانگ ' },
        ],
      },
      {
        text: 'تور اندونزی',

        submenu: [{ text: 'تور بالی' }],
      },
      {
        text: 'تور مالدیو',

        submenu: [{ text: 'تور مالدیو' }],
      },
      {
        text: 'تور بلغارستان',

        submenu: [{ text: 'تور وارنا' }],
      },
      {
        text: 'تور چین',

        submenu: [
          { text: 'تور پکن' },
          { text: 'تور شانگهای' },
          { text: 'تور گوانجو ' },
        ],
      },
      {
        text: 'تور هند',

        submenu: [
          { text: 'تور آگرا' },
          { text: 'تور دهلی' },
          { text: 'تور بمبـُی ' },
          { text: 'تور گوا ' },
          { text: 'تور جیپور ' },
        ],
      },
    ],
    href: '/tours',
  },
];

export default navbarItems;
