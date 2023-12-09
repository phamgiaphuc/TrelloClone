import { useEffect, useState } from 'react'
import { checkServerStatus } from '~/apis'
import Footer from '~/components/Footer/Footer'
import Header from '~/components/Header/Header'
import HomeContent from '~/components/HomeContent/HomeContent'
import InternalServerError from '~/components/ServerError/InternalServerError'

const Home = () => {
  const [serverStatus, setServerStatus] = useState(false)
  useEffect(() => {
    checkServerStatus()
      .then((data) => {
        setServerStatus(data)
      })
  }, [])
  return (
    <>
      <Header />
      {
        serverStatus ?
          (
            <>
              <HomeContent />
            </>
          ) : (
            <>
              <InternalServerError />
            </>
          )
      }
      <Footer />
    </>
  )
}

export default Home