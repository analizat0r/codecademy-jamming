import './App.css';
import PlayList from './PlayList';
import Search from './Search';
import SearchResults from './SearchResults';
import TrackList from './TrackList';

function App() {
  return (
    <>
      <h1>Jamming project</h1>
      <Search />
      <SearchResults />
      <TrackList />
      <PlayList />
    </>
  );
}

export default App;
