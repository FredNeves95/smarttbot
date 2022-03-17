import { Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import RobotCard from '../RobotCard/RobotCard'
import { Pagination } from '@mui/material'
import { Container } from './style'

const RobotContainer = () => {
    const [robots, setRobots] = useState()
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(0)

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
    }, [page])

    useEffect(() => {
        api
            .get('/robot')
            .then((res) => {
                setPages(Math.ceil(res.data.data.length / 8));
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
            <Container>
                {
                    robots ?
                        robots.map((item) => {
                            return <RobotCard robot={item} key={item.id} />
                        }) :
                        <Skeleton height={230} sx={{ width: '100%' }} />
                }

            </Container>

            <Pagination shape="rounded" count={pages} page={page} onChange={handleChange} />
        </>
    )
}

export default RobotContainer