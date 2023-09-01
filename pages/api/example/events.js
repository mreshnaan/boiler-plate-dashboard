const data = [
  {
    _id: "6479da9e19634d7deadd266d",
    name: "Test event update",
    imageUrl:
      "@https://technopolis-rebrand.imgix.net/Technopolis-Events/Zalen/Factory-of-the-future-1.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1&ratio=1&w=2560&s=05afc004027c729fd7aa354613d3c1cf",
    eventDate: "July 24th 2023",
    status: ["online"],
    venue: "GalleFace Hotel",
    completed: false,
    canUpdateTickets: true,
    ticketTypes: [
      {
        _id: "6479de3619634d7deadd267c",
        name: "Presale 2",
        price: 5500,
        event: "6479da9e19634d7deadd266d",
        __v: 0,
      },
    ],
    __v: 0,
  },
  {
    _id: "647f04e97f90f026eebd1312",
    name: "Test Event 2",
    imageUrl:
      "@https://technopolis-rebrand.imgix.net/Technopolis-Events/Zalen/Factory-of-the-future-1.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1&ratio=1&w=2560&s=05afc004027c729fd7aa354613d3c1cf",
    eventDate: "July 24th 2023",
    status: ["online"],
    venue: "GalleFace Hotel",
    completed: false,
    canUpdateTickets: true,
    ticketTypes: [],
    __v: 0,
  },
  {
    _id: "647f065a7f90f026eebd1319",
    name: "Test Event 3",
    imageUrl:
      "@https://technopolis-rebrand.imgix.net/Technopolis-Events/Zalen/Factory-of-the-future-1.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1&ratio=1&w=2560&s=05afc004027c729fd7aa354613d3c1cf",
    eventDate: "July 24th 2023",
    status: ["online"],
    venue: "GalleFace Hotel",
    completed: false,
    canUpdateTickets: true,
    ticketTypes: [
      {
        _id: "647f065b7f90f026eebd131b",
        name: "Pass",
        price: 1500,
        event: "647f065a7f90f026eebd1319",
        __v: 0,
      },
      {
        _id: "6480670d3eab4701b4a1e798",
        name: "New Type",
        price: 4000,
        event: "647f065a7f90f026eebd1319",
        __v: 0,
      },
    ],
    __v: 0,
  },
  {
    _id: "647f3d1987d46d19a3c0606d",
    name: "Test AA Event",
    imageUrl:
      "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    eventDate: "2023-06-07T14:05:10.690Z",
    status: ["online"],
    venue: "Galle",
    completed: false,
    canUpdateTickets: true,
    ticketTypes: [
      {
        _id: "647f3d1987d46d19a3c0606f",
        name: "Pass",
        price: 100,
        event: "647f3d1987d46d19a3c0606d",
        __v: 0,
      },
    ],
    __v: 0,
  },
  {
    _id: "647f3e0887d46d19a3c060a2",
    name: "Event Diluk",
    imageUrl:
      "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    eventDate: "June 6th 2023",
    status: ["offline"],
    venue: "Galle",
    completed: false,
    canUpdateTickets: true,
    ticketTypes: [
      {
        _id: "647f3e0887d46d19a3c060a4",
        name: "Pass",
        price: 500,
        event: "647f3e0887d46d19a3c060a2",
        __v: 0,
      },
    ],
    __v: 0,
  },
  {
    _id: "647f3e7787d46d19a3c060b3",
    name: "country",
    imageUrl:
      "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    eventDate: "June 6th 2023",
    status: ["offline"],
    venue: "Galle",
    completed: false,
    canUpdateTickets: true,
    ticketTypes: [
      {
        _id: "647f3e7787d46d19a3c060b5",
        name: "Pass",
        price: 3500,
        event: "647f3e7787d46d19a3c060b3",
        __v: 0,
      },
    ],
    __v: 0,
  },
  {
    _id: "6481c85c45ec1f749d6c0be6",
    name: "Meraki Test",
    imageUrl: "test",
    eventDate: "June 8th 2023",
    venue: "Galle face",
    status: ["offline"],
    completed: false,
    canUpdateTickets: true,
    ticketTypes: [
      {
        _id: "6481c85d45ec1f749d6c0be8",
        name: "Pass",
        price: 0,
        event: "6481c85c45ec1f749d6c0be6",
        __v: 0,
      },
      {
        _id: "6481c8d345ec1f749d6c0c01",
        name: "OG PASS",
        price: 0,
        event: "6481c85c45ec1f749d6c0be6",
        __v: 0,
      },
    ],
    __v: 0,
  },
  {
    _id: "6481cac545ec1f749d6c0c27",
    name: "alsjkdasd",
    imageUrl: "sasd",
    eventDate: "June 8th 2023",
    status: ["online"],
    venue: "asdasd",
    completed: false,
    canUpdateTickets: true,
    ticketTypes: [
      {
        _id: "6481cac545ec1f749d6c0c29",
        name: "Pass",
        price: 0,
        event: "6481cac545ec1f749d6c0c27",
        __v: 0,
      },
    ],
    __v: 0,
  },
  {
    _id: "6481e6cf16038de096554dbe",
    name: "Last of us",
    imageUrl: "test",
    eventDate: "June 8th 2023",
    status: ["online"],
    venue: "Bentota",
    completed: false,
    canUpdateTickets: true,
    ticketTypes: [
      {
        _id: "6481e6cf16038de096554dc0",
        name: "Pass",
        price: 0,
        event: "6481e6cf16038de096554dbe",
        __v: 0,
      },
      {
        _id: "6481e6f016038de096554dd0",
        name: "Family and Friends Pass",
        price: 0,
        event: "6481e6cf16038de096554dbe",
        __v: 0,
      },
      {
        _id: "6481e70316038de096554de1",
        name: "Gold",
        price: 10000,
        event: "6481e6cf16038de096554dbe",
        __v: 0,
      },
    ],
    __v: 0,
  },
];

export default function handler(req, res) {
  try {
    res.status(200).json({
      status: true,
      message: "List of all Events",
      data: data,
    });
  } catch (error) {
    console.log(error.message);
  }
}
