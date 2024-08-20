import Home from "./pages/home/home";
import reflections from "./assets/music/reflections.mp3";

export default function App() {
  return (
    <main>
      <audio src={reflections} autoPlay loop></audio>
      <Home />
    </main>
  );
}
