import React from 'react'
import NavbarComp from '../../components/NavbarComp'
import FeedbackForm from './FeedbackForm'
import FooterComp from '../../components/FooterComp'
import SearchBar from './SearchBar'
import Feedback from './Feedback'


function Dashboard() {
  return (
    <>
    <NavbarComp />
    <hr className="text-gray-300 " />
    <FeedbackForm />
    <SearchBar />
    <Feedback />
    <hr className="text-gray-300 " />
    <FooterComp />
    </>
  )
}

export default Dashboard
