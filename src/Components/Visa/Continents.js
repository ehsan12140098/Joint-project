import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import mapasia from "../../Assets/images/mapasia.png";
import mapasiayellow from "../../Assets/images/mapasiayellow.png";
import mapafrica from "../../Assets/images/mapafrica.png";
import mapafricablack from "../../Assets/images/mapafricablack.png";
import mapeurope from "../../Assets/images/mapeurope.png";
import mapeuropegreen from "../../Assets/images/mapeuropegreen.png";
import mapnorthamerica from "../../Assets/images/mapnorthamerica.png";
import mapnorthamericared from "../../Assets/images/mapnorthamericared.png";
import mapoceania from "../../Assets/images/mapoceania.png";
import mapoceaniablue from "../../Assets/images/mapoceaniablue.png";
import mapsouthamerica from "../../Assets/images/mapsouthamerica.png";
import mapsouthamericabrown from "../../Assets/images/mapsouthamericabrown.png";

import Portuguese from "../../Assets/images/Portuguese.png";

import { Link } from "react-router-dom";

const continentData = [
  {
    name: "آمریکای جنوبی",
    image: mapsouthamericabrown,
    defaultImage: mapsouthamerica,
  },
  {
    name: "آمریکای شمالی",
    image: mapnorthamericared,
    defaultImage: mapnorthamerica,
  },
  { name: "اقیانوسیه", image: mapoceaniablue, defaultImage: mapoceania },
  { name: "آفریقا", image: mapafricablack, defaultImage: mapafrica },
  { name: "اروپا", image: mapeuropegreen, defaultImage: mapeurope },
  { name: "آسیا", image: mapasiayellow, defaultImage: mapasia },
];

const API_URL = "/api/visa/";

export const Continents = () => {
  const [selectedContinent, setSelectedContinent] = useState("آسیا");
  const [countries, setCountries] = useState([]);

  // console.log(countries);

  useEffect(() => {
    if (selectedContinent) {
      axios
        .get(API_URL)
        .then((response) => {
          const filteredCountries = response.data.filter(
            (item) => item.visacategory === selectedContinent
          );
          setCountries(filteredCountries);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [selectedContinent]);

  const handleContinentClick = (continent) => {
    setSelectedContinent(continent.name);
  };
  const handleCountryClick = (country) => {
    // console.log(country.title);
  };

  return (
    <ContinentsAndCountriesHolder>
      <ContinentsHolder>
        {continentData.map((continent, index) => (
          <ContinentHolder
            key={index}
            onClick={() => handleContinentClick(continent)}
          >
            <ContinentImage
              src={
                selectedContinent === continent.name
                  ? continent.image
                  : continent.defaultImage
              }
              alt={continent.name}
            />
            <EachContinentName>{continent.name}</EachContinentName>
          </ContinentHolder>
        ))}
      </ContinentsHolder>
      <CountriesHolder>
        {countries.map((country, index) => (
          <Link to={`/VisaPage/${country.slug}`}>
            <CountryHolder key={index}>
              <CountryName>{country.title}</CountryName>
              <CountryImage src={country.image} alt={country.title} />
            </CountryHolder>
          </Link>
        ))}
      </CountriesHolder>
    </ContinentsAndCountriesHolder>
  );
};

const ContinentsAndCountriesHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;
const ContinentsHolder = styled.div`
  width: 100%;
  height: 195px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-radius: 30px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
`;

const ContinentHolder = styled.div`
  width: 14%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const ContinentImage = styled.img`
  width: 76px;
  height: 76px;
`;

const SouthAmericaImage = styled.img`
  width: 76px;
  height: 76px;
`;
const NorthAmericaImage = styled.img`
  width: 76px;
  height: 76px;
`;
const OceaniaImage = styled.img`
  width: 76px;
  height: 76px;
`;
const AfricaImage = styled.img`
  width: 76px;
  height: 76px;
`;
const EuropeImage = styled.img`
  width: 76px;
  height: 76px;
`;
const AsiaImage = styled.img`
  width: 76px;
  height: 76px;
`;
const EachContinentName = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: center;
  font-family: IRANSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const SouthAmericaHolder = styled.div`
  width: 14%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const NorthAmericaHolder = styled.div`
  width: 14%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const OceaniaHolder = styled.div`
  width: 14%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const AfricaHolder = styled.div`
  width: 14%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const EuropeHolder = styled.div`
  width: 14%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const AsiaHolder = styled.div`
  width: 14%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const CountriesHolder = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  direction: rtl;
  /* border: 3px solid red; */
`;

const EachCountryHolder = styled.div`
  /* width: 29%; */
  height: 105px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  border-radius: 30px;
  padding: 24px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  gap: 32px;
`;
const CountryHolder = styled.div`
  /* width: 29%; */
  height: 105px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  border-radius: 30px;
  padding: 24px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  gap: 32px;
`;
const EachCountryFlag = styled.div`
  width: 58px;
  height: 58px;
  background-image: url(${Portuguese});
  background-size: cover;
  background-position: center;
`;
const CountryImage = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 50%;
`;
const EachCountryName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const CountryName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const EachCountryEnglishName = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
