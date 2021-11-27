import { Header } from "./components/Header";
import { ConvertSection } from "./components/ConvertSection";
import { AboutSection } from "./components/AboutSection";
import { RatesSection } from "./components/RatesSection";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <main className="App">
      <Header />
      <ConvertSection />
      <AboutSection />
      <RatesSection />
      <Footer />
    </main>
  )
}
