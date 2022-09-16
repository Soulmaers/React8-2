import { useState, useEffect } from 'react'


export default function List({ onChange }) {

    const [data, setData] = useState([]);


    useEffect(() => {

        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`)
            .then(response => response.json())
            .then(json => setData(json))

    }, [])




    return (

        <ul className='ulList'>
            {data.map(el => (
                <li
                    className='listItem'
                    onClick={() => onChange(el)}
                    key={el.id}>
                    {el.name}
                </li>
            ))}

        </ul>

        //<pre>{JSON.stringify(data, null, 2)}</pre>

    )
}