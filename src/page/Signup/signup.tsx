import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { api } from '../../config/service/api'

export const SignUp = () => {
  const { userId } = useParams()

  useEffect(() => {
    document.title = 'SignUp | Amigo Cartinha'

    /* const checkUser = api('/signup/') */
  }, [])
  console.log(userId)

  return <div>teste</div>
}
