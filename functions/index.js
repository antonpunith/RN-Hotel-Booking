const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({ origin: true });

const app = express();
app.use(cors);

app.get("/", (req, res) => {
    res.send("Hello from Firebase!");
});

app.get("/cities", (req, res) => {
  res.json([
    'Melbourne',
    'Sydney',
    'Perth'
  ]);
});

app.get("/hotels", (req, res) => {
  res.json([
    {
      name: "Crowne Plaza Melbourne",
      city: "Melbourne",
      description:
        "You’re eligible for a Genius discount at Crowne Plaza Melbourne, an IHG Hotel! To save at this property, all you have to do is Crowne Plaza Melbourne is located on the banks of the Yarra River opposite Melbourne Convention and Exhibition Centre and Crown Casino, just 5 minutes’ drive from the central business district. It features a fitness centre, a bar and a restaurant. This 4.5-star hotel offers a range of guest rooms and suites, many with breathtaking views of the Yarra River , City Skyline and the Bay. Each room at Crowne Plaza Melbourne features large windows, a work desk with free WiFi access, complimentary Vittoria coffee machines, bathrobes and 42-inch LCD TV.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/278629182.webp?k=0493a24710d6cc489933dfcaf82d6d246a365abc29b4f76f86b37f9086058cec&o=&s=1",
    },
    {
      name: "Oaks Melbourne Southbank Suites",
      city: "Melbourne",
      description:
        "You’re eligible for a Genius discount at Oaks Melbourne Southbank Suites! To save at this property, all you have to do is Guests at Oaks Melbourne Southbank Suites are within walking distance of Melbourne’s vibrant dining and shopping districts. These stylish modern apartments are air-conditioned and offer kitchen facilities.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square200/239898700.webp?k=8611dda46095b1ffd0749bca918eb6e1e153e62badfdbc9b8d13d32f06d599e3&o=&s=1",
    },
    {
      name: "Manly’s Hidden Gem",
      city: "Melbourne",
      description:
        "You’re eligible for a Genius discount at Manly’s Hidden Gem! To save at this property, all you have to do is Manly’s Hidden Gem offers accommodation in a heritage surrounding and is located nearby the attractions of Manly. The boutique hotel includes studios, 1 and 2-bedroom apartments all with an ensuite, kitchen and air-conditioning, or private guest rooms with a kitchenette and shared bathroom.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/267803149.webp?k=1763d277fab1092d72b03bdae1f85117f795107dab10c83684b9ab71d52c0933&o=&s=1",
    },
    {
      name: "Oaks Sydney Hyde Park Suites",
      city: "Sydney",
      description:
        "You’re eligible for a Genius discount at Oaks Sydney Hyde Park Suites! To save at this property, all you have to do is Overlooking the famous Hyde Park, Oaks Sydney Hyde Park Suites offers self-contained accommodation with TVs and DVD players. The hotel features a sauna and rooftop deck with stunning views across Hyde Park. Oaks Sydney Hyde Park Suites is located in Sydney CBD (Central Business District) on the corner of Oxford Street. Sydney Opera House and Darling Harbour are each a 15-minute drive away.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square200/54148114.webp?k=f0c66cc49f8a9def418f94f068a9085d38f8e2e3c569def9b1680afa0fd1c2eb&o=&s=1",
    },
    {
      name: "Megaboom City Hotel",
      city: "Sydney",
      description:
        "Just a 1-minute walk from the Queen Victoria Building (QVB), Megaboom City Hotel is located in the heart of Sydney CBD. The property offers numerous modern, air-conditioned rooms with free, unlimited, high-speed WiFi. It is only 2 minutes’ walk to the Town Hall train and bus station and 5 minutes’ walk from Wynyard Station. Each room offers a flat-panel TV with cable services, a minibar, a work desk, wardrobe, a table and their own coffee/tea making facilities. There is an in room security box. The room also has a private bathroom along with free toiletries.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square200/57535702.webp?k=e73e98f27864965eca33a46fb650ff9d887e3ecddb400799eac74084dab313a1&o=&s=1",
    },
    {
      name: "Holiday Inn Darling Harbour, an IHG Hotel",
      city: "Sydney",
      description:
        "You’re eligible for a Genius discount at Holiday Inn Darling Harbour, an IHG Hotel! To save at this property, all you have to do is Situated in the heart of the popular Darling Harbour entertainment district, Holiday Inn is ideally located for sightseeing, nightlife and shopping. A former 1890s wool store, this property boasts a free WiFi, a restaurant, a bar, a fitness centre, a spa pool and a sauna. Each of the air-conditioned rooms offers a desk and flat-screen TV.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square200/234558343.webp?k=01e935ccf136cc28d2775f6a9daf33dffa19466033807a594a51349a408a13fd&o=&s=1",
    },
    {
      name: "Pan Pacific Perth",
      city: "Perth",
      description:
        "You’re eligible for a Genius discount at Pan Pacific Perth! To save at this property, all you have to do is Pan Pacific Perth is located in the Perth CBD, near the Swan River. Offering a large selection of guest rooms and suites, the hotel features an outdoor swimming pool and a 24-hour fitness centre. Parking is available for guests in the hotel carpark, at an additional charge.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square200/153696876.webp?k=5cab6642528531a3b00ff7e5bd2d199a97e3182f19bdec0a132c660fa2a157d9&o=&s=1",
    },
    {
      name: "Quest Kings Park",
      city: "Perth",
      description:
        " You’re eligible for a Genius discount at Quest Kings Park! To save at this property, all you have to do is Located across the road from beautiful Kings Park, Quest Kings Park offers modern studio apartments. Free WiFi is available throughout the property. Quest Kings Park is a 5-minute drive from Perth Convention & Exhibition Centre. It is a 5-minute drive from the heart of Perth CBD, where you can enjoy shopping at Hay Street Mall, or dine at a number of cafes and restaurants. Perth Airport is a 20-minute drive away.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square200/63141958.webp?k=4aaa6229fbbe17370e2e7afecb7610d60887f5328ee815414dae671b08eaa8f3&o=&s=1",
    },
    {
      name: "Quest Mounts Bay Road",
      city: "Perth",
      description:
        " You’re eligible for a Genius discount at Quest Mounts Bay Road! To save at this property, all you have to do is Quest Mounts Bay Road is conveniently located near the Perth Convention & Exhibition Centre and only a 16-minute walk to Perth’s CBD. Guests staying in a self-contained apartment at Quest Mounts Bay Road can stroll along the Swan River, which is 10 minutes’ walk away. The property is just a 12-minute walk from the beautiful Kings Park.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square200/77513936.webp?k=c7e5276cb06face82eafc0f1e52f84c10f62cd81ae944ce38596b142e0a065eb&o=&s=1",
    },
  ]);
});

exports.app = functions.https.onRequest(app);
