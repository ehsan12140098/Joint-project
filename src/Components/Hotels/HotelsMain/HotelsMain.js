import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import HotelsCountryFlag from '../HotelsCountryFlag';
import HotelsMainNavbar from './HotelsMainNavbar/HotelsMainNavbar';
import HotelsMainTable from './HotelsMainTable/HotelsMainTable';

export default function HotelsMain({
  hotels,
  itemsPerPage,
  itemsCount,
  currentPage,
  handlePageChange,
}) {
  const isLgOrBigger = useIsDesktopDisplay();
  return (
    <div>
      {!isLgOrBigger && <HotelsCountryFlag />}
      <HotelsMainNavbar />
      <HotelsMainTable
        hotels={hotels}
        itemsPerPage={itemsPerPage}
        itemsCount={itemsCount}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
