import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import TourDetailMainContentGallery from './TourDetailMainContentGallery/TourDetailMainContentGallery';
import ToursDetailMainContentHotelsTable from './TourDetailMainContentHotelsTable/ToursDetailMainContentHotelsTable';
import TourDetailMainContentInformation from './TourDetailMainContentInformation/TourDetailMainContentInformation';
import TourDetailMainContentSuggestions from './TourDetailMainContentSuggestions/TourDetailMainContentSuggestions';
import ToursDetailMainContentHotelsTableMobile from './TourDetailMainContentHotelsTable/ToursDetailMainContentHotelsTableMobile';

export default function ToursDetailMainContent({ tourDetail }) {
  const isMdOrBigger = useIsDesktopDisplay('md');
  return (
    <div>
      {isMdOrBigger ? (
        <ToursDetailMainContentHotelsTable hotels={tourDetail.hotels} />
      ) : (
        <ToursDetailMainContentHotelsTableMobile hotels={tourDetail.hotels} />
      )}
      <TourDetailMainContentInformation
        tourInformation={tourDetail.tourInformation}
      />
      <TourDetailMainContentGallery gallery={tourDetail.gallery} />
      <TourDetailMainContentSuggestions tours={tourDetail.suggestedTours} />
    </div>
  );
}
