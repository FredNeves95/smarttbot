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