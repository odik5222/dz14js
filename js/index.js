let hotel = [
    [
      {
        room: 1,
        price: 300,
        brand: "Luxe",
        children: false,
      },
      {
        room: 2,
        price: 4000,
        brand: "Deluxe",
        children: true,
      },
      {
        room: 3,
        price: 1000,
        brand: "Deluxe",
        children: false,
      },
      {
        room: 4,
        price: 900,
        brand: "Luxe",
        children: true,
      },
    ],
    [
      {
        room: 5,
        price: 700,
        brand: "Luxe",
        children: true,
      },
      {
        room: 6,
        price: 79000,
        brand: "President",
        children: true,
      },
      {
        room: 7,
        price: 600,
        brand: "Luxe",
        children: false,
      },
      {
        room: 8,
        price: 950,
        brand: "Luxe",
        children: true,
      },
    ],
    [
      {
        room: 9,
        price: 1900,
        brand: "Deluxe",
        children: false,
      },
      {
        room: 10,
        price: 5000,
        brand: "Deluxe",
        children: true,
      },
      {
        room: 11,
        price: 1000,
        brand: "Deluxe",
        children: false,
      },
      {
        room: 12,
        price: 250,
        brand: "Luxe",
        children: false,
      },
    ],
    [
      {
        room: 13,
        price: 10000,
        brand: "President",
        children: true,
      },
      {
        room: 11,
        price: 8000,
        brand: "President",
        children: false,
      },
    ],
  ];
  
  let rooms = {
    all_roms: [],
    rooms: 0,
  };
  let brands = {
    president: [],
    deluxe: [],
    luxe: [],
  };
  
  let room_level = {
    perviy: 0,
    vtoroy: 0,
    tretiy: 0,
    chetvertiy: 0,
  };
  //1 отфильтровать по категориям
  //2 добавить ключ eting с буленовым значением в каждый номер
  //3 посчитать и красиво раставить все команты переменную rooms
  //4 найти самую дорогую комнату
  //5 посчитать сколько стоит каждый этаж
  //6 посчитать сколько стоят все комнаты вместе взятые
  //7 найти все комнаты в которых живут дети



//7
const setup = () => {
    for (let item of hotel) {
  for( let itemTwo of item ){
        if (itemTwo.children === true) {
          children.push(itemTwo)
        } else {
          unchildren.push(itemTwo)
        }
        }
      }
    }


    //1
    let Rooms = hotel.filter(floor => {
        return floor.some(room => {
          return room.brand === 'Deluxe';
        });
      });

      //2
      let hoteleting = hotel.map(floor => {
        return floor.map(room => {
          room.eting = true;
          return room;
        });
      });

      //3
      let most = hotel.reduce((maxPriceRoom, floor) => {
        let highestPrice = floor.reduce((maxPrice, room) => {
          return room.price > maxPrice ? room.price : maxPrice;
        }, 0);
        return highestPrice > maxPriceRoom.price ? {price: highestPrice} : maxPriceRoom;
      }, {price: 0});
      
      



      //5
      let Cost = hotel.flat().reduce((acc, room) => {
  return acc + room.price;
}, 0);


//6
let Children = hotel.flat().filter(room => room.children === true);




