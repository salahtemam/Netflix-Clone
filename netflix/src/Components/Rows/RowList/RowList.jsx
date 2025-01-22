import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

const RowList = () => {
  return (
    <>
        <Row 
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
        <Row title="TOP RATED" fetchUrl={requests.fetchTopRatedMovies}/>
        <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
    </>
  )
}

export default RowList
