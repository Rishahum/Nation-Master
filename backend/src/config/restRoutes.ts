
import { Express } from 'express'
import * as country from '../controllers/country'

export function restRoutes(app: Express) {
    app.get('/countries', country.getAll)
    app.post('/country/add', country.add)
    app.delete('/delete/:id', country.remove)
    app.get('/country/get/:id', country.getOne)
    app.put('/country/edit/:id', country.update)
}
  