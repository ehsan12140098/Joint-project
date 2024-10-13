import { useMemo, useState } from 'react';
import mapasia from 'Assets/images/mapasia.png';
import mapasiayellow from 'Assets/images/mapasiayellow.png';
import mapafrica from 'Assets/images/mapafrica.png';
import mapafricablack from 'Assets/images/mapafricablack.png';
import mapeurope from 'Assets/images/mapeurope.png';
import mapeuropegreen from 'Assets/images/mapeuropegreen.png';
import mapnorthamerica from 'Assets/images/mapnorthamerica.png';
import mapnorthamericared from 'Assets/images/mapnorthamericared.png';
import mapoceania from 'Assets/images/mapoceania.png';
import mapoceaniablue from 'Assets/images/mapoceaniablue.png';
import mapsouthamerica from 'Assets/images/mapsouthamerica.png';
import mapsouthamericabrown from 'Assets/images/mapsouthamericabrown.png';
import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const continentData = [
  {
    name: 'آمریکای جنوبی',
    image: mapsouthamericabrown,
    defaultImage: mapsouthamerica,
  },
  {
    name: 'آمریکای شمالی',
    image: mapnorthamericared,
    defaultImage: mapnorthamerica,
  },
  { name: 'اقیانوسیه', image: mapoceaniablue, defaultImage: mapoceania },
  { name: 'آفریقا', image: mapafricablack, defaultImage: mapafrica },
  { name: 'اروپا', image: mapeuropegreen, defaultImage: mapeurope },
  { name: 'آسیا', image: mapasiayellow, defaultImage: mapasia },
];

export default function VisaMain({ visaList, isLoading }) {
  const isXlOrBigger = useIsDesktopDisplay('xl');
  const [selectedContinent, setSelectedContinent] = useState('آسیا');

  const selectedContinentVisa = useMemo(
    () => visaList.filter(visa => visa.visacategory === selectedContinent),
    [selectedContinent, visaList]
  );

  return (
    <div>
      <BisanCard>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
          }}
        >
          {continentData.map(data => (
            <div
              key={data.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
              }}
              onClick={() => setSelectedContinent(data.name)}
            >
              <img
                src={
                  selectedContinent === data.name
                    ? data.image
                    : data.defaultImage
                }
                alt={data.name}
                style={{ width: isXlOrBigger ? '120px' : '70px' }}
              />
              <div>{data.name}</div>
            </div>
          ))}
        </div>
      </BisanCard>
      {/* <div style={{ marginTop: '30px' }}>
        <Grid container spacing={6}>
          {selectedContinentVisa.map(visa => (
            <Grid key={visa.slug} item xs={4}>
              <Link to="#">
                <CountryCard>
                  <img
                    className="country-image"
                    alt={visa.title}
                    src={visa.image}
                  />
                  <div className="country-title">{visa.title}</div>
                </CountryCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div> */}
      {!isLoading && (
        <VisaList
          visaList={selectedContinentVisa}
          selectedContinent={selectedContinent}
        />
      )}
    </div>
  );
}

const CountryCard = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 24px;
  padding: 24px 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 20px 0px;
  color: #000;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 24px;

  &:hover {
    background-color: #e6e6e6;
  }

  > .country-image {
    width: 56px;
    height: 56px;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
  }

  > .country-title {
    line-height: 28px;
    font-weight: 700;
    font-size: 18px;
  }
`;

function VisaList({ visaList, selectedContinent }) {
  return (
    <motion.div
      key={selectedContinent}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      style={{ marginTop: '30px' }}
    >
      <Grid container spacing={3}>
        {visaList.map(visa => (
          <Grid key={visa.slug} item xs={12} md={6} xl={4}>
            <Link to={visa.slug}>
              <CountryCard>
                <img
                  className="country-image"
                  alt={visa.title}
                  src={visa.image}
                />
                <div className="country-title">{visa.title}</div>
              </CountryCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}
