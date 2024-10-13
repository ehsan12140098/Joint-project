import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import GallerySliderContainer from './GallerySlider/GallerySliderContainer';

export default function TourDetailMainContentGallery({ gallery }) {
  return (
    <div id="gallery" style={{ marginTop: '32px' }}>
      <SectionTitle style={{ marginBottom: '20px' }}>گالری تصاویر</SectionTitle>
      <GallerySliderContainer gallery={gallery} />
    </div>
  );
}
