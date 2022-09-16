import { useState, useEffect } from 'react'



export default function Details({ id }) {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
                .then(response => response.json())
                .then(json => setUser(json), setLoading(true))

        }, 500)

    }, [id]);





    return (

        <div className='rightModal'>
            {!loading ? (<progress />) :
                (<ul className='modal'>
                    <li className='listModal'><img src={user.avatar} alt="" /></li>
                    <li className='listModal'>{user.name}</li>



                </ul>)}

        </div>
    )
}
