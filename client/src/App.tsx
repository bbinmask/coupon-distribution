import "./App.css";
import ClaimButton from "./components/ClaimButton";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl">Reward Token</h1>
      <ClaimButton></ClaimButton>
    </div>
  );
}

export default App;
