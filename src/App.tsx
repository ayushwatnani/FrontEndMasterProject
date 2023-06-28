// import { useState } from 'react'
import './App.css'
import FormInput from './components/Form/FormInput'
import AdviceGenerator from './components/advice_generator_app/AdviceGenerator'
// import FourCardFeature from './components/four_card_feature/FourCardFeature'
// import QRCode from './components/qr_code/QRCode'
// import HuddleLandingPage from './components/huddle_landing_page/HuddleLandingPage'
// import SimplePriceGrid from './components/simple_price_grid/SimplePriceGrid'
// import ColumnPreview from './components/3_column_preview/ColumnPreview'
// import ProfileCard from './components/profile_card_component/ProfileCard'
// import OrderSummary from './components/Order summary component/Order Summary/OrderSummary'
// import Rating from './components/interactive_rating/Rating/Rating'
// import StatsPreview from './components/stats_preview_card_component/StatsPreview'

function App() {
  const handleSubmit = (e: React.ChangeEvent<any>) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    
  }
  return (
    <>
      {/* <Rating /> */}
      {/* <OrderSummary /> */}
      {/* <StatsPreview /> */}
      {/* <ColumnPreview /> */}
      {/* <ProfileCard /> */}
      {/* <SimplePriceGrid /> */}
      {/* <HuddleLandingPage /> */}
      {/* <FourCardFeature /> */}
      {/* <QRCode /> */}
      {/* <AdviceGenerator /> */}
      <form onSubmit={handleSubmit}>
        <FormInput name='usernme' placeholder='Username' />
        <FormInput name='email' placeholder='Email' />
        <FormInput name='fullname' placeholder='Full name' />
        <FormInput name='sth' placeholder='sth else' />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
