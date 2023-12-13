import { Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Home from "./pages/Home";
import Page from './pages/Page'
import CardInfo from './components/CardInfo';
import ExplorePage from './pages/ExplorePage';
import LearnMorePage from './pages/LearnMorePage';
import Footer from './components/Footer';
import SearchMovies from './pages/SearchMovies';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/*" element={<ExplorePage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="/search-movies" element={<SearchMovies />} />
        <Route path="/popular" element={<Page category={'popular'} pageTitle={"Popular"} isGenre={false} />} />
        <Route path="/top-rated" element={<Page category={'top_rated'} pageTitle={"Top rated"} isGenre={false} />} />
        <Route path="/upcoming" element={<Page category={'upcoming'} pageTitle={"Upcoming"} />} isGenre={false} />
        <Route path="/now-playing" element={<Page category={'now_playing'} pageTitle={"Now playing"} isGenre={false} />} />
        <Route exact path="/title/:id" element={<CardInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
