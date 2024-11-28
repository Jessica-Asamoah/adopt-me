import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Sparkle" animal="Dog" breed="African" />
      <Pet name="Jack" animal="Bird" breed="Amazon Parrot" />
      <Pet name="Grumpy" animal="Cat" breed="Persian" /> */}
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
