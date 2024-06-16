const mockData = [
    /*
    {
            "brand": "adidas",
            "colorway": "Core Black/Cloud White/Chalk White",
            "estimatedMarketValue": 74,
            "gender": "men",
            "id": "cc25575e-b235-46bc-b12e-6a66633c3ddf",
            "image": {
                "360": [],
                "original": "https://image.goat.com/attachments/product_template_pictures/images/098/451/956/original/1280492_00.png.png",
                "small": "https://image.goat.com/750/attachments/product_template_pictures/images/098/451/956/original/1280492_00.png.png",
                "thumbnail": "https://image.goat.com/375/attachments/product_template_pictures/images/098/451/956/original/1280492_00.png.png"
            },
            "links": {
                "flightClub": "https://flightclub.com/crazy-iiinfinity-white-black-ig6303",
                "goat": "https://goat.com/sneakers/crazy-iiinfinity-white-black-ig6303",
                "stadiumGoods": "",
                "stockX": "https://stockx.com/adidas-crazy-iiinfinity-stormtrooper"
            },
            "name": "adidas Crazy IIInfinity Stormtrooper",
            "releaseDate": "2024-12-30",
            "releaseYear": "2024",
            "retailPrice": 160,
            "silhouette": "Crazy IIInfinity",
            "sku": "IG6303",
            "story": "The adidas Crazy IIInfinity ‘Stormtrooper’ presents a retro-inspired lifestyle silhouette that takes design cues from the Crazy 1, formerly known as The Kobe. The upper features a zippered shroud in black textile, contrasted by white molded foam paneling with debossed three-stripes at the midfoot. A reinforced rubber toe cap gives a nod to The Kobe 2, along with adidas’ shell-toe heritage. Underfoot, the herringbone-traction rubber outsole reveals an exposed TPU shank for midfoot stability."
        },
    */
    {
        "id": "8838d55a-6579-4f6c-83d1-48716495d597",
        "image": 'https://image.goat.com/375/attachments/product_template_pictures/images/079/484/521/original/508079_00.png.png',
        "name": 'Jordan 1 Retro High',
        "story": 'Description for Card 1',
        "retailPrice": 185,
        "links": {
            "flightClub": "https://flightclub.com/crazy-iiinfinity-white-black-ig6303",
            "goat": "https://goat.com/sneakers/crazy-iiinfinity-white-black-ig6303",
            "stadiumGoods": "",
            "stockX": "https://stockx.com/adidas-crazy-iiinfinity-stormtrooper"
        },
    }
    /*
    {
        id: 2,
        image: 'https://image.goat.com/attachments/product_template_pictures/images/079/487/442/original/560709_00.png.png',
        title: 'Yeezy Slides Resin',
        story: 'Description for Card 1',
        estimatedMarketValue: 99,
        links: [
            "https://stockx.com/air-jordan-1-retro-high-bloodline",
            "https://goat.com/sneakers/air-jordan-1-high-retro-og-bred-2019-555088-062",  //no affiliate 
            "https://flightclub.com/air-jordan-1-retro-high-og-black-gym-red-white-140229", //no affiliate
            "https://sale.stadiumgoods.com/air-jordan-1-high-og-bloodline-meant-to-fly-555088-062"
        ]
    },
    {
        id: 3,
        image: 'https://image.goat.com/375/attachments/product_template_pictures/images/081/096/394/original/616017_00.png.png',
        title: 'Nike SB Dunk Low Ben & Jerry\'s Chunky Dunky',
        description: 'Description for Card 2',
        estimatedMarketValue: 1185,
        links: [
            "https://stockx.com/nike-sb-dunk-low-ben-jerrys-chunky-dunky",
            "",  //no affiliate 
            "", //no affiliate
            "https://sale.stadiumgoods.com/nike-sb-dunk-low-ben-jerry-s-chunky-dunky-cu3244-100"
        ]
    },
    {
        id: 4,
        image: "https://image.goat.com/375/attachments/product_template_pictures/images/033/250/439/original/BZ0028.png.png",
        title: 'Adidas Gazelle Blue',
        description: 'Description for Card 3',
        estimatedMarketValue: 80,
        //link: "https://stockx.com/adidas-gazelle-blue"
        links: [
            "https://stockx.com/air-jordan-1-retro-high-bloodline",
            "https://goat.com/sneakers/air-jordan-1-high-retro-og-bred-2019-555088-062",  //no affiliate 
            "https://flightclub.com/air-jordan-1-retro-high-og-black-gym-red-white-140229", //no affiliate
            "https://sale.stadiumgoods.com/air-jordan-1-high-og-bloodline-meant-to-fly-555088-062"
        ]
    }   
    */           
];

export default mockData;



/*
const mockData = [
    {
        "brand": "adidas",
        "colorway": "Core Black/Cloud White/Chalk White",
        "gender": "men",
        "id": "af7a25fb-0a8c-42c7-ae78-6356573af951",
        "media": {
            "imageUrl": "https://images.stockx.com/images/adidas-Crazy-IIInfinity-Stormtrooper.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1704212941",
            "smallImageUrl": "https://images.stockx.com/images/adidas-Crazy-IIInfinity-Stormtrooper.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1704212941",
            "thumbUrl": "https://images.stockx.com/images/adidas-Crazy-IIInfinity-Stormtrooper.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1704212941",
        },
        "name": "Stormtrooper",
        "releaseDate": "2024-12-30",
        "retailPrice": 160,
        "shoe": "adidas Crazy IIInfinity",
        "styleId": "IG6303",
        "title": "adidas Crazy IIInfinity Stormtrooper",
        "year": 2024,
    },
    {
        "brand": "adidas",
        "colorway": "Off-White/Black/Metallic Gold",
        "gender": "men",
        "id": "8838d55a-6579-4f6c-83d1-48716495d597",
        "media": {
            "imageUrl": "https://images.stockx.com/images/adidas-Harden-Vol-7-Year-of-the-Dragon-2024.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1704212971",
            "smallImageUrl": "https://images.stockx.com/images/adidas-Harden-Vol-7-Year-of-the-Dragon-2024.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1704212971",
            "thumbUrl": "https://images.stockx.com/images/adidas-Harden-Vol-7-Year-of-the-Dragon-2024.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1704212971",
        },
        "name": "Year of the Dragon (2024)",
        "releaseDate": "2024-12-29",
        "retailPrice": 160,
        "shoe": "adidas Harden Vol. 7",
        "styleId": "IH7516",
        "title": "adidas Harden Vol. 7 Year of the Dragon (2024)",
        "year": 2024,
    }
];
*/