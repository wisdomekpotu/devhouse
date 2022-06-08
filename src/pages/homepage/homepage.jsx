import Hero from '../../components/Hero/Hero'
import './homepage.css'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import Navbar from '../../components/Navbar/Navbar'

export default function Homepage() {
  return (
    <div className="noise">
      <Navbar />
      <Hero />
      <br />
      <FeatureCard />
    </div>
  )
}
