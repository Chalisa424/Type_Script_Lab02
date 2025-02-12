import express, { Request, Response } from 'express'
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// เพิ่มการเรียกใช้ mapping URL /test
app.get('/test', (req: Request, res: Response) => {
    let returnObj = {
      name: 'test',
      age: 20,
      address: 'Thai'
    }
    res.json(returnObj)
  })

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
//{
//     "name": "test",
//     "age": 20,
//     "address": "Thai"
// }