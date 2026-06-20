import React from 'react'
import HeroSection from '../../components/HeroSection'
import Features from '../../components/Features'
import HomepageNav from '../../components/HomepageNav'
import FooterComp from '../../components/FooterComp'

function HomePage() {
  return (
    <div>
      <HomepageNav />
      {/* dark:text-yellow-600 */}
      <hr className="text-gray-300 " />
      <HeroSection />
      <hr className="text-gray-300 " />
      <Features />
      <hr className="text-gray-300 " />
      <FooterComp />
      
    </div>
  )
}

export default HomePage
