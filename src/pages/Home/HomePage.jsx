import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import {Testimonials} from "./components/Testimonials";
import {FAQ} from "./components/FAQ";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
    </div>
  )
}
