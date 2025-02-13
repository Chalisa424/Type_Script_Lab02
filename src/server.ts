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
// สร้างตัวแปร events เพื่อเก็บข้อมูล list ของ event
  const events: Event[] = [
    {
      id: 1,
      category: "Music",
      title: "Concert",
      description: "A live concert",
      location: "London",
      date: "2021-07-01",
      time: "19:00",
      petsAllowed: false,
      organizer: "Live Nation",
    },
    {
      id: 2,
      category: "Art",
      title: "Art Exhibition",
      description: "An exhibition of modern art",
      location: "Paris",
      date: "2021-08-15",
      time: "10:00",
      petsAllowed: true,
      organizer: "Art World",
    },
    {
      id: 3,
      category: "Technology",
      title: "Tech Conference",
      description: "A conference about the latest in tech",
      location: "San Francisco",
      date: "2021-09-10",
      time: "09:00",
      petsAllowed: false,
      organizer: "Tech Innovators",
    },
    {
      id: 4,
      category: "Food",
      title: "Food Festival",
      description: "A festival with food from around the world",
      location: "New York",
      date: "2021-10-05",
      time: "12:00",
      petsAllowed: true,
      organizer: "Food Lovers",
    },
    {
      id: 5,
      category: "Sports",
      title: "Marathon",
      description: "A city marathon",
      location: "Berlin",
      date: "2021-11-20",
      time: "08:00",
      petsAllowed: false,
      organizer: "Sports Club",
    },
    {
      id: 6,
      category: "Theater",
      title: "Play",
      description: "A live theater play",
      location: "Tokyo",
      date: "2021-12-01",
      time: "18:00",
      petsAllowed: false,
      organizer: "Theater Group",
    }
    ];

const app = express()
const port = 3001

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// เพิ่มการเรียกใช้ mapping URL /test
app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
  })

// เพิ่ม endpoint /events เพื่อคืนค่า event ทั้งหมด
app.get('/events', (req: Request, res: Response) => {
  res.json(events);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})//http://localhost:3001/events
