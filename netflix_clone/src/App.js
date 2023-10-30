import React from 'react';
import './App.css';
import Row from './Components/Row';
import requests from './requests';
import Banner from './Components/Banner';
import NavBar from './Components/NavBar';
import FootBar from './Components/FootBar';

function AppContent() {
  return (
    <div className="app">

      <NavBar />

      <Banner />

      <Row title="CineFlix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <FootBar />
    </div>
  );
}

export default AppContent;
