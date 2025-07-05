import Intro from './Intro'
import Navbar from './Navbar'
import PopularServices from './PopularServices'
import TopRatedProviders from './TopRatedProviders'
import Instructions from './Instructions'

const CustomerLanding = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Intro></Intro>
        <PopularServices></PopularServices>
        <TopRatedProviders></TopRatedProviders>
        <Instructions></Instructions>
    </div>
  )
}

export default CustomerLanding;