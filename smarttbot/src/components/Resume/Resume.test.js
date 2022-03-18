import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Resume from './Resume'
import api from '../../services/api'


describe('Resume tests', () => {

    test('/robot/paper request', async () => {
        const request = await api.get('/robot/paper')

        expect(request.status).toBe(200)
    })

    test('/robot/overview request', async () => {
        const request = await api.get('/robot/overview')

        expect(request.status).toBe(200)
    })

})