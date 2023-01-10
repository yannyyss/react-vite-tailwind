import { useState, useEffect } from 'react'
import { getUsers } from '../services/fetchUsers.js'

const useUsers = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        (async () => {
            try {
                const result = await getUsers()
                const data = await result.json()
                setUsers(data.data)
            } catch(e) {
                console.log(e)
                setError(e.message)
            } finally {
                setIsLoading(false)
            }
        })()
    },[])

    return [users, isLoading, error]
}

export default useUsers