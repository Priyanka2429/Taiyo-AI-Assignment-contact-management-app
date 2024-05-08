import React, { useState } from "react";
import axios from "axios";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useQuery } from "react-query";
import LineGraph from "../components/LineGraph";
import Header from "../components/Header";

interface ICountryInfo {
  lat: number;
  long: number;
}

interface ICountry {
  country: string;
  countryInfo: ICountryInfo;
  active: number;
  recovered: number;
  deaths: number;
}

const fetchCasesByCountry = () => {
  return axios.get(`https://disease.sh/v3/covid-19/countries`);
};

const ChartAndMapsPage: React.FC = () => {
  const [mapZoom, setMapZoom] = useState(3);

  const { isLoading, data, isError, error, isFetching } = useQuery(
    "covid-cases-by-country",
    fetchCasesByCountry,
    {
      cacheTime: 1000 * 60 * 10.5,
      staleTime: 1000 * 60 * 10.5,
      refetchOnWindowFocus: false,
      refetchInterval: 1000 * 60 * 10.5,
      refetchIntervalInBackground: true,
    }
  );

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Header text="Charts and Maps Page" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center my-6 font-bold text-lg">
          Charts & Maps Page
        </h1>
        <div className="w-full lg:w-[1000px]">
          <LineGraph />
        </div>
        <div className="w-[80%] h-[500px] bg-white p-1 my-8">
          <MapContainer
            style={{ height: "100%", borderRadius: "10px" }}
            center={[
              data?.data[0]?.countryInfo?.lat,
              data?.data[0]?.countryInfo?.long,
            ]}
            zoom={mapZoom}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {data?.data?.map((country: ICountry) => (
              <Marker
                key={country?.country}
                position={[
                  country?.countryInfo?.lat,
                  country?.countryInfo?.long,
                ]}
              >
                <Popup>
                  <strong>
                    Country Name: {country?.country}
                    <br />
                    Total Active Cases: {country?.active}
                    <br />
                    Total Recovered Cases: {country?.recovered}
                    <br />
                    Total Deaths: {country?.deaths}
                  </strong>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default ChartAndMapsPage;
