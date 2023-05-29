import React from "react";
import BurgerMenu from "../components/BurgerMenu";
import AnimeList from "../components/AnimeList";
import HomeSection from "../components/HomeSection";

function Home({
  setPage,
  page,
  search,
  setSearch,
  genres,
  setGenres,
  date,
  setDate,
  setId,
  trending,
  setTrendingPage,
  popularList,
  setPopularPage,
  schedule,

  setSchedulePage,
}) {
  return (
    <>
      {search === "" ? (
        <>
          <HomeSection
            title="Trending"
            trending={trending}
            setTrendingPage={setTrendingPage}
            trendingPage={null}
            setId={setId}
            slice="true"
            navigation="/trending"
          />
          <HomeSection
            title="Popular"
            trending={popularList}
            setTrendingPage={setPopularPage}
            trendingPage={null}
            setId={setId}
            slice="true"
            navigation="/popular"
          />
          <HomeSection
            title="Schedule"
            trending={schedule}
            setTrendingPage={setSchedulePage}
            trendingPage={null}
            setId={setId}
            slice="true"
            navigation="/schedule"
          />
        </>
      ) : (
        <AnimeList
          setPage={setPage}
          page={page}
          search={search}
          setSearch={setSearch}
          genres={genres}
          setGenres={setGenres}
          date={date}
          setDate={setDate}
          setId={setId}
        />
      )}

      <BurgerMenu />
    </>
  );
}

export default Home;
