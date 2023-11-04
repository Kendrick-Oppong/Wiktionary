import "./App.css";
import { NavBarLayout } from "./components/navBar/NavBarLayout";
import { Word } from "./components/results";
import { SearchBar } from "./components/search";

function App() {
  return (
    <div>
      <NavBarLayout />
      <SearchBar />
      <Word />
    </div>
  );
}

export default App;
