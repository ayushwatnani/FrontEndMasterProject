// import { useState } from 'react'
import './App.css'
// import NFTComponent from './components/NFT/NFTComponent'
import ProductPreviewCard from './components/product_preview_card/ProductPreviewCard'
// import FormInput from './components/Form/FormInput'
// import AdviceGenerator from './components/advice_generator_app/AdviceGenerator'
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
  // const [values, setValues] = useState<any>({
  //   username: "",
  //   email: "",
  //   birthday: "",
  //   password: "",
  //   confirmPassword: "",
  // })

  // const inputs = [
  //   {
  //     id: 1,
  //     name: "username",
  //     type: "text",
  //     placeholder: "Username",
  //     errorMessage:
  //       "Username should be 3-16 characters and shouldn't include any special character!",
  //     label: "Username",
  //     pattern: "^[A-Za-z0-9]{3,16}$",
  //     required: true,
  //   },
  //   {
  //     id: 2,
  //     name: "email",
  //     type: "email",
  //     placeholder: "Email",
  //     errorMessage: "It should be a valid email address!",
  //     label: "Email",
  //     required: true,
  //   },
  //   {
  //     id: 3,
  //     name: "birthday",
  //     type: "date",
  //     placeholder: "Birthday",
  //     label: "Birthday",
  //   },
  //   {
  //     id: 4,
  //     name: "password",
  //     type: "password",
  //     placeholder: "Password",
  //     errorMessage:
  //       "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
  //     label: "Password",
  //     pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
  //     required: true,
  //   },
  //   {
  //     id: 5,
  //     name: "confirmPassword",
  //     type: "password",
  //     placeholder: "Confirm Password",
  //     errorMessage: "Passwords don't match!",
  //     label: "Confirm Password",
  //     pattern: values?.password,
  //     required: true,
  //   },
  // ];

  // const onChange = (e: React.ChangeEvent<any>) =>{
  //   setValues({...values, [e.target.name] : e.target.value})
  // }

  // const handleSubmit = (e: React.ChangeEvent<any>) => {
  //   e.preventDefault();
  //   // const data = new FormData(e.target);
  //   // console.log(Object.fromEntries(data.entries()));
  // }
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
      {/* <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {
          inputs.map((input) =>(
            <FormInput 
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              values
            />
          ))
        }
        <button>Submit</button>
      </form>
      </div> */}
      {/* <NFTComponent /> */}
      <ProductPreviewCard />
    </>
  )
}

export default App
