import React from 'react'
import HomeNav from './HomeNav'
import HeroSection from './HeroSection'
import Features from './Features'
import HomeFooter from './HomeFooter'

function HomePage() {
  return (
    <div>
      <HomeNav />
      {/* dark:text-yellow-600 */}
      <hr className="text-gray-300 " />
      <HeroSection />
      <hr className="text-gray-300 " />
      <Features />
      <hr className="text-gray-300 " />
      <HomeFooter />
      
    </div>
  )
}

export default HomePage
