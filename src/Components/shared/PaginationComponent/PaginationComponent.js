import usePagination from '@mui/material/usePagination/usePagination';
import { ChevronLeft } from '../../../Assets/Svgs/ChevronLeft';
import { ChevronRight } from '../../../Assets/Svgs/ChevronRight';

export default function PaginationComponent({ count, currentPage, onChange }) {
  const { items } = usePagination({
    count,
    siblingCount: 1,
    boundaryCount: 0,
  });

  const paginationButtonStyles = {
    color: 'rgb(90 98 58)',
    backgroundColor: 'rgb(226 232 240)',
    border: '1px solid #e5e7eb',
    borderRadius: '80px',
    width: '50px',
    height: '35px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  function handlePageChange(page, onClick) {
    onClick();
    onChange(page);
  }

  return (
    <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
      {items.map(({ page, type, onClick }, index) => {
        let children = null;

        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
          children = (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '31px',
              }}
            >
              …
            </div>
          );
        } else if (type === 'page') {
          children = (
            <button
              type="button"
              onClick={() => handlePageChange(page, onClick)}
              style={{
                ...paginationButtonStyles,
                backgroundColor:
                  currentPage === page ? 'rgb(237 224 89)' : 'white',
                width: '35px',
              }}
            >
              {page}
            </button>
          );
        } else if (type === 'next') {
          children = (
            <button
              type="button"
              onClick={() => onChange(currentPage + 1)}
              style={paginationButtonStyles}
              disabled={currentPage === count}
            >
              <ChevronLeft />
            </button>
          );
        } else {
          children = (
            <button
              type="button"
              onClick={() => onChange(currentPage - 1)}
              // onClick={handleNextClick}
              style={paginationButtonStyles}
              disabled={currentPage === 1}
            >
              <ChevronRight />
            </button>
          );
        }
        return <div key={index}>{children}</div>;
      })}
    </div>
  );
}
