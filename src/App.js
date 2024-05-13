import ChangeTheme from "./components/ChangeTheme";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeContext.Provider value={"light"}>
        <ChangeTheme />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
