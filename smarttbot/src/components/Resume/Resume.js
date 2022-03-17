import React from 'react'
import api from '../../services/api'
import { Container, Summary } from './style'
import { useState, useEffect } from 'react'
import { Skeleton } from '@mui/material'

const Resume = () => {

    const [summary, setSummary] = useState()
    const [robots, setRobots] = useState()
    const [profit, setProfit] = useState(0)

    useEffect(() => {
        api
            .get('/robot/paper')
            .then((res) => {
                setRobots(res.data.data)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])


    useEffect(() => {
        api
            .get('/robot/overview')
            .then((res) => {
                setSummary(res.data.data)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])

    useEffect(() => {
        if (robots) {
            const sum = robots.map((item) => item.profit)
                .reduce((prev, curr) => prev + curr, 0)
            setProfit(parseFloat(sum.toFixed(2)))
        }
    }, [robots])

    return (
        <Container>
            <p id='title'>Resumo geral de operações</p>

            <div id='general-data'>
                <div className='general-values'>
                    <p className='subtitle'>Resumo de movimentação</p>
                    {
                        robots ?
                            profit >= 0 ?
                                <p id='profit'>R$ {profit}</p> :
                                <p id='loss'> - R$ {profit} </p>
                            :
                            <Skeleton height={20} width={120} />
                    }
                </div>

                <div className='general-values'>
                    <p className='subtitle' id='text-align-right'>Total de Transações Realizadas</p>
                    <p id='transactions-value'>
                        {
                            summary ?
                                summary.transactions :
                                <Skeleton height={20} width={50} />
                        }
                    </p>
                </div>
            </div>

            <div id='horizontal-line'><hr /></div>

            <p className='subtitle'>Papéis negociados</p>

            <div id='summary-container'>
                {
                    summary ?
                        summary.papers.map((item, index) => {
                            return (
                                <Summary key={index}>
                                    <p id='name'>{item.name}</p>
                                    <hr />
                                    <p id='transactions'>{item.trasactions} <span>transações</span></p>
                                </Summary>
                            )
                        })
                        :
                        (
                            <>
                                <Skeleton height={100} />
                            </>
                        )

                }
            </div>

        </Container >
    )
}

export default Resume