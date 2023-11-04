import "./App.css";
import { NavBarLayout } from "./components/navBar/NavBarLayout";
import { SearchBar } from "./components/search";

function App() {
  return (
    <div>
      <NavBarLayout />
      <SearchBar/>
    </div>
  );
}

export default App;
