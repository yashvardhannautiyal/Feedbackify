import React from 'react'
import HeroSection from './HeroSection'
import Features from './Features'
import NavbarComp from '../../components/NavbarComp'
import FooterComp from '../../components/FooterComp'

function HomePage() {
  return (
    <div>
      <NavbarComp />
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
