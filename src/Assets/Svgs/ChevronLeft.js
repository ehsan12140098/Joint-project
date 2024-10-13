export const ChevronLeft = ({ size }) => {
  const calculatedSize = size || '24';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={calculatedSize}
      height={calculatedSize}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.9141 3.16406L14.8359 2.08594L5.46094 11.4609L4.94531 12L5.46094 12.5391L14.8359 21.9141L15.9141 20.8359L7.07812 12L15.9141 3.16406Z"
        fill="#5A623A"
      />
    </svg>
  );
};
