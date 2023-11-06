import { Toaster } from "react-hot-toast";
import { NavBarLayout } from "./components/navBar/NavBarLayout";
import { Word } from "./components/results";
import { SearchBar } from "./components/search";
import "./App.css";

function App() {
  return (
    <div>
      <NavBarLayout />
      <SearchBar />
      <Word />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          style: { padding: "16px", borderRadius: "8px" },
          success: {
            style: {
              background: "green",
            },
          },
          error: {
            style: {
              background: "#ff0000ab",
              color: "white"
            },
          },
        }}
      />
    </div>
  );
}

export default App;
