import type { NextPage } from 'next'
import Header from  '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      {/* HEADER COMPONENT */}
      <Header/>
      <div className='mt-10'/>

      {/* TRENDING COMPONENT */}
      <div className='mt-20'/>

      {/* CMC TABLE */}

    </div>
  )
}

export default Home
