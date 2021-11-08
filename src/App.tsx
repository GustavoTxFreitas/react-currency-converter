import { Header } from "./components/Header";
import { ConvertSection } from "./components/ConvertSection";
import { AboutMe } from "./components/AboutMe";
import { RatesSection } from "./components/RatesSection";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <main className="App">
      <Header />
      <ConvertSection />
      <AboutMe />
      <RatesSection />
      <Footer />
    </main>
  )
}
