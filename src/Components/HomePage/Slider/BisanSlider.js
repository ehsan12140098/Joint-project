import { createElement, useState } from 'react';
import classes from './‌‌BisanSlider.module.css';
import { ChevronRight } from 'Assets/Svgs/Icons';
import { ChevronLeft } from 'Assets/Svgs/Icons';

export default function BisanSlider({
  items,
  component,
  componentItemPropName,
}) {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [sliderDirection, setSliderDirection] = useState('forward');

  const handleNextSlide = () => {
    setSelectedSlide(prev => {
      return prev === items.length - 1 ? 0 : prev + 1;
    });
    setSliderDirection('backward');
  };

  const handlePervSlide = () => {
    setSelectedSlide(prev => {
      return prev === 0 ? items.length - 1 : prev - 1;
    });
    setSliderDirection('forward');
  };

  const count = 4;

  return (
    <div className={classes.holder}>
      <div className={[classes.wrapper, classes[sliderDirection]].join(' ')}>
        {items.map((item, i) => {
          const classNames = [classes.item];

          for (let j = 0; j < count; j++) {
            const index =
              selectedSlide - j >= 0
                ? selectedSlide - j
                : items.length + selectedSlide - j;

            if (i === index) {
              classNames.push(classes[`item-${count - j}`]);
            }
            const fadeIndex =
              sliderDirection === 'backward'
                ? selectedSlide < items.length
                  ? selectedSlide + 1
                  : 0
                : selectedSlide + 1 > items.length - 1
                ? selectedSlide + 1 - items.length
                : selectedSlide + 1;
            if (i === fadeIndex) {
              classNames.push(classes[`item-5`]);
            }
          }

          return (
            <div className={classNames.join(' ')} key={item.id}>
              {createDynamicComponent(component, {
                [componentItemPropName]: item,
              })}
            </div>
          );
        })}
      </div>
      <div
        className={[classes.button, classes.next].join(' ')}
        onClick={handleNextSlide}
      >
        <ChevronRight />
      </div>
      <div
        className={[classes.button, classes.perv].join(' ')}
        onClick={handlePervSlide}
      >
        <ChevronLeft />
      </div>
    </div>
  );
}

const createDynamicComponent = (component, props) => {
  return createElement(component, props);
};
