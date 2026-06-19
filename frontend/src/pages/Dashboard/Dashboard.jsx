import React from 'react'
import NavbarComp from '../../components/NavbarComp'
import FeedbackForm from '../../components/FeedbackForm'
import FooterComp from '../../components/FooterComp'
import SearchBar from '../../components/SearchBar'
import FeedbackItem from '../../components/FeedbackItem'


function Dashboard() {
  return (
    <>
    <NavbarComp />
    <hr className="text-gray-300 " />
    <FeedbackForm />
    <SearchBar />
    <FeedbackItem />
    <hr className="text-gray-300 " />
    <FooterComp />
    </>
  )
}

export default Dashboard
