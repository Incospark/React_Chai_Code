import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom"


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/incospark')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <center>
                <img src={data.avatar_url} alt="Git Profile Image" width={300} />
            </center>
            Github Followers: {data.followers}
        </div>
    )
}

export default Github

export const gitHubinfoLoader = async () => {
    const response= await fetch('https://api.github.com/users/incospark')
    const data = await response.json()
    return data
}