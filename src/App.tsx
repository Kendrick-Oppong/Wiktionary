import { Toaster } from "react-hot-toast";
import { NavBarLayout } from "./components/navBar/NavBarLayout";
import { Word } from "./components/results";
import { SearchBar } from "./components/search";
import "./App.css";
import { ScrollToTop } from "./components/scrollToTop";
import { useFontFamily } from "./context/FontContext";

function App() {
  const { fontFamily } = useFontFamily();

  return (
    <div style={{ fontFamily: fontFamily }}>
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
              color: "white",
            },
          },
        }}
      />
      <ScrollToTop />
    </div>
  );
}

export default App;
