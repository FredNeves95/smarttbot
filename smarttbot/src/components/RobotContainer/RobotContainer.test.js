import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RobotContainer from './RobotContainer'
import api from '../../services/api'


describe('Robot container tests', () => {

    test('/robot request', async () => {
        const request = await api.get('/robot')

        expect(request.status).toBe(200)
    })
})