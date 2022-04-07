import React, { Fragment } from 'react'
import Hero from '../components/Hero/Hero';
import FeatureCard from '../components/FeatureCard/FeatureCard';



export default function Homepage() {
  return (
    <Fragment>
      <Hero />
      <br/>
     <FeatureCard/>
     <div style={{backgroundColor:"#44328D"}}>drfbg</div>
    </Fragment>
  )
}
