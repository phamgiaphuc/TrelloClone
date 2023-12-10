import { useEffect, useState } from 'react'
import { checkServerStatus } from '~/apis'
import Footer from '~/components/Footer/Footer'
import Header from '~/components/Header/Header'
import HomeContent from '~/components/HomeContent/HomeContent'
import InternalServerError from '~/pages/Auth/InternalServerError/InternalServerError'
import { toast } from 'react-toastify'

const Home = () => {
  const [serverStatus, setServerStatus] = useState(false)
  useEffect(() => {
    checkServerStatus()
      .then((response) => {
        if (response.status) {
          setServerStatus(response)
          toast.success('Server is on!')
          return
        }
        toast.error('Server is off!')
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