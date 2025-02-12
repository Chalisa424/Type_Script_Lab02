import express, { Request, Response } from 'express'
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// เพิ่มการเรียกใช้ mapping URL /test
app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
  })

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
//ส่ง request ไปที่ http://localhost:3000/test?id=123 จะได้ผลลัพธ์เป็น id: 123