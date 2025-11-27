const islands = [
  // Pulong Gianlo
  {
    name: "Pulong Gianlo",
    image: "assets/images/pulonggianlo.jpg",
    location: "Capalonga, Camarines Norte",
    description: "Pulong Gianlo is a serene island known for its lush greenery and crystal-clear waters. Its peaceful atmosphere makes it a perfect destination for nature lovers and travelers seeking solitude.",
    gallery: ["pulonggianlo1.jpg", "pulonggianlo2.jpg", "pulonggianlo3.jpg", "pulonggianlo4.jpg"]
  },
  // Parola Island
  {
    name: "Parola Island",
    image: "assets/images/parola.jpg",
    location: "Jose Panganiban, Camarines Norte",
    description: "Parola Island, named after its lighthouse, offers a mix of rocky shores and soft white sands. It’s an ideal spot for swimming, snorkeling, and watching sunsets.",
    gallery: ["parola1.jpg", "parola2.jpg", "parola3.jpg", "parola4.jpg"]
  },
  // Calalanay Island
  {
    name: "Calalanay Island",
    image: "assets/images/calalanay.jpg",
    location: "Jose Panganiban, Camarines Norte",
    description: "Calalanay Island is a tropical escape featuring calm turquoise waters and gentle waves. Visitors can enjoy beach picnics, snorkeling, and fishing in its peaceful surroundings.",
    gallery: ["calalanay1.jpg", "calalanay2.jpg", "calalanay3.jpg", "calalanay4.jpg"]
  },
  // Isla Agua ni Cion
  {
    name: "Isla Agua ni Cion",
    image: "assets/images/islaagua.jpg",
    location: "Jose Panganiban, Camarines Norte",
    description: "Isla Agua ni Cion is a small, hidden paradise known for its calm waters and rich marine life. Its name reflects the crystal-clear quality of its coastal waters.",
    gallery: ["islaagua1.jpg", "islaagua2.jpg", "islaagua3.jpg", "islaagua4.jpg"]
  },
  // Apuao Grande
  {
    name: "Apuao Grande",
    image: "assets/images/apuaogrande.jpg",
    location: "Mercedes, Camarines Norte",
    description: "Apuao Grande is a famous camping island with wide beaches, pine trees, and scenic sandbars connecting to Apuao Pequena. It’s ideal for overnight adventures.",
    gallery: ["apuaog1.jpg", "apuaog2.jpg", "apuaog3.jpg", "apuaog4.jpg"]
  },
  // Apuao Pequena
  {
    name: "Apuao Pequena",
    image: "assets/images/apuaopequena.jpg",
    location: "Mercedes, Camarines Norte",
    description: "Apuao Pequena sits beside Apuao Grande and is home to dramatic rock cliffs and clear blue waters. It’s perfect for cliff diving and exploring marine life.",
    gallery: ["apuaop1.jpg", "apuaop2.jpg", "apuaop3.jpg","apuaop4.jpg"]
  },
  // Canimog Island
  {
    name: "Canimog Island",
    image: "assets/images/canimog.jpg",
    location: "Mercedes, Camarines Norte",
    description: "Known as the 'Sleeping Dinosaur of Bicol,' Canimog Island features rugged hills, dense forests, and a lighthouse overlooking the vast Pacific Ocean.",
    gallery: ["canimog1.jpg", "canimog2.jpg","canimog3.jpg","canimog4.jpg",]
  },
  // Canton Island
  {
    name: "Canton Island",
    image: "assets/images/canton3.jpg",
    location: "Mercedes, Camarines Norte",
    description: "Canton Island is a quiet haven with pristine sands and calm waters. It’s often visited for its excellent snorkeling and untouched natural beauty.",
    gallery: ["canton.jpg", "canton1.jpg","canton2.jpg","canton4.jpg",]
  },
  // Caringo Island
  {
    name: "Caringo Island",
    image: "assets/images/caringo.jpg",
    location: "Mercedes, Camarines Norte",
    description: "Caringo Island is a vibrant fishing community surrounded by coral reefs. Tourists can experience both local culture and beautiful underwater scenery.",
    gallery: ["caringo1.jpg","caringo2.jpg", "caringo3.jpg", "caringo4.jpg", ]
  },
  // Malasugui Island
  {
    name: "Malasugui Island",
    image: "assets/images/malasugui.jpg",
    location: "Mercedes, Camarines Norte",
    description: "Malasugui Island is known for its small but captivating shoreline and rich biodiversity, making it a must-visit for divers and adventurers.",
    gallery: ["malasugui1.jpg","malasugui2.jpg","malasugui3.jpg","malasugui4.jpg",]
  },
  // Quinapaguian Island
  {
    name: "Quinapaguian Island",
    image: "assets/images/quinapaguian.jpg",
    location: "Mercedes, Camarines Norte",
    description: "Quinapaguian Island boasts long stretches of white sand and gentle waves. It’s one of the most photographed islands in the Mercedes group.",
    gallery: ["quinapaguian1.jpg","quinapaguian2.jpg","quinapaguian3.jpg","quinapaguian4.jpg",]
  },
  // Maculabo Island
  {
    name: "Maculabo Island",
    image: "assets/images/maculabo1.jpg",
    location: "Paracale, Camarines Norte",
    description: "Maculabo Island is a blend of golden sand and fishing village life. It serves as a gateway to Calaguas and offers peaceful coastal views.",
    gallery: ["maculabo1.jpg","maculabo2.jpg","maculabo3.jpg","maculabo4.jpg",]
  },
  // Calaguas Island
  {
    name: "Calaguas Island",
    image: "assets/images/calaguas.jpg",
    location: "Vinzons, Camarines Norte",
    description: "Calaguas Island is world-famous for its powdery white sand, crystal-clear waters, and camping experiences under the stars. It’s the crown jewel of Camarines Norte tourism.",
    gallery: ["calaguas1.jpg","calaguas2.jpg","calaguas3.jpg","calaguas4.jpg",]
  },
  // Tinaga Island
  {
    name: "Tinaga Island",
    image: "assets/images/tinaga.jpg",
    location: "Vinzons, Camarines Norte",
    description: "Tinaga Island is the largest in the Calaguas group and home to Mahabang Buhangin Beach, known for its long, unspoiled coastline.",
    gallery: ["tinaga1.jpg","tinaga2.jpg","tinaga3.jpg","tinaga4.jpg",]
  },
  // Guintinua Island
  {
    name: "Guintinua Island",
    image: "assets/images/guintinua.jpg",
    location: "Vinzons, Camarines Norte",
    description: "Guintinua Island is a peaceful escape offering scenic hilltop views and shallow lagoons. Ideal for quiet exploration and photography.",
    gallery: ["guintinua1.jpg","guintinua2.jpg","guintinua3.jpg","guintinua4.jpg",]
  },
  // Quinamanuca Island
  {
    name: "Quinamanuca Island",
    image: "assets/images/quinamanuca1.jpg",
    location: "Vinzons, Camarines Norte",
    description: "Quinamanuca Island is a small, picturesque island known for its sandbars and crystal-clear shallows, perfect for kayaking and snorkeling.",
    gallery: ["quinamanuca.jpg","quinamanuca2.jpg","quinamanuca3.jpg","quinamanuca4.jpg",]
  },
];