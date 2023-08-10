import TravelDetails from "@/components/travels/TravelDetails";

function TravelDetailsPage() {
  return (
    <TravelDetails
      city="Cracow"
      country="Poland"
      imageUrl="https://media.istockphoto.com/id/1184176065/photo/st-marys-basilica-on-the-krakow-main-square-at-dusk-krakow-poland.jpg?s=612x612&w=0&k=20&c=cOBew6E1iu2ODBgb3Mo-as2xEHh_w984DholiG7jHFM="
      placeToVisit="museum"
      food="croissant"
      restaurant="Nota, Bursztynowa 2"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          travelId: "t1"
        }
      },
      {
        params: {
          travelId: "t2"
        }
      }
    ]
  };
}

export async function getStaticProps(context) {
  const travelId = context.params.travelId;
  return {
    props: {
      travelData: {
        id: travelId,
        city: "Cracow",
        country: "Poland",
        imageUrl:
          "https://media.istockphoto.com/id/1184176065/photo/st-marys-basilica-on-the-krakow-main-square-at-dusk-krakow-poland.jpg?s=612x612&w=0&k=20&c=cOBew6E1iu2ODBgb3Mo-as2xEHh_w984DholiG7jHFM=",
        placeToVisit: "museum",
        food: "croissant",
        restaurant: "Nota, Bursztynowa 2"
      }
    }
  };
}

export default TravelDetailsPage;
