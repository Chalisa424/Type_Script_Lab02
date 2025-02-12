import express, { Request, Response } from 'express'

// เพิ่มการประกาศ interface Event
interface Event {
    id: number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: boolean;
    organizer: string;
  }

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
