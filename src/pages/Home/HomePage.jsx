import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import {Testimonials} from "./components/Testimonials";
import {FAQ} from "./components/FAQ";
import { useTitle } from "../../hooks/useTitle";

export const HomePage = () => {
  useTitle("Home Page");
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
    </div>
  )
}
