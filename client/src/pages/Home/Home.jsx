import { useEffect, useState } from 'react'
import { checkServerStatus } from '~/apis'
import HomeContent from '~/components/HomeContent/HomeContent'
import ServerErrorComponent from '~/components/Error/ServerErrorComponent'
import { toast } from 'react-toastify'
import Structure from '~/components/Structure/Structure'

const Home = () => {
  const [serverStatus, setServerStatus] = useState(false)
  const [serverStatusChecked, setServerStatusChecked] = useState(false)
  const fetchServerStatus = async () => {
    try {
      const response = await checkServerStatus()
      if (response.status) {
        setServerStatus(true)
        return
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Server status check failed:', error)
      toast.error('Error checking server status')
    } finally {
      setServerStatusChecked(true)
    }
  }
  useEffect(() => {
    fetchServerStatus()
  }, [])
  return (
    <>
      <Structure>
        {serverStatusChecked && (
          <>
            {serverStatus ? <HomeContent /> : <ServerErrorComponent />}
          </>
        )}
      </Structure>
    </>
  )
}

export default Home