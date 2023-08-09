import TravelList from "@/components/travels/TravelsList";

const DUMMY_TRAVELS = [
  {
    id: "t1",
    city: "Roma",
    country: "Italy",
    imageUrl:
      "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=",
    placeToVisit: "Coloseum",
    food: "Pasta",
    restaurant: "Restaurant 1"
  },
  {
    id: "t2",
    city: "Casablanca",
    country: "Marocco",
    imageUrl:
      "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ4um2CsRv2nZUB3M6c_D0Q8a6uUpNyPPWrvrdzVRC_7qD4K6qR0VGMlR34zw1tzePH",
    placeToVisit: "Hassana II Mosque",
    food: "Tajine",
    restaurant: "Restaurant 2"
  }
];

function HomePage() {
  return <TravelList travels={DUMMY_TRAVELS} />;
}

export default HomePage;
