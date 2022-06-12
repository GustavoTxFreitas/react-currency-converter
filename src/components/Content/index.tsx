import { ConvertSection } from "./ConvertSection";
import { AboutSection } from "./AboutSection";
import { RatesSection } from "./RatesSection";

export function Content() {
    return (
        <main>
            <ConvertSection />
            <AboutSection />
            <RatesSection />
        </main>
    )
}