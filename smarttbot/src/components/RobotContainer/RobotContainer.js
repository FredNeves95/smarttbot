import { Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import RobotCard from '../RobotCard/RobotCard'
import { Pagination } from '@mui/material'

const RobotContainer = () => {
    const [robots, setRobots] = useState()
    const [page, setPage] = useState(1)

    useEffect(() => {
        api
            .get('/robot', {
                headers: {
                    limit: 8,
                    page: page
                }
            })
            .then((res) => {
                setRobots(res.data.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [robots])

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            {
                robots ?
                    robots.map((item) => {
                        return <RobotCard robot={item} key={item.id} />
                    }) :
                    <Skeleton />
            }
            <Pagination count={27} page={page} onChange={handleChange} />
        </>
    )
}

export default RobotContainer