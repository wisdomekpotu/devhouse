import Hero from '../components/Hero/Hero';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import Navbar from '../components/Navbar/Navbar';

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <br />
      <FeatureCard />
    </>
  )
}
