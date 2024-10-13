export const ChevronEllipse = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_71_20956)">
        <circle cx="32" cy="22" r="22" fill="white" />
      </g>
      <path
        d="M23.1641 18.0859L22.0859 19.1641L31.4609 28.5391L32 29.0547L32.5391 28.5391L41.9141 19.1641L40.8359 18.0859L32 26.9219L23.1641 18.0859Z"
        fill="#697A80"
      />
      <defs>
        <filter
          id="filter0_d_71_20956"
          x="0"
          y="0"
          width="64"
          height="64"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_71_20956"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_71_20956"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
