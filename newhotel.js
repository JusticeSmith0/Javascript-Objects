let hotel = { 
    hotelName: "JavaScript Hotel",
    myFirstName: "Justice",
    myLastName: "Smith", // you don't need a comma after your last object
    roomTypes: ["Single", "Double", "Queen"],
    availableRoomNumbers: [[101, 102, 103], [201, 202, 203], [301, 302, 303]],
    roomPrices: [100, 150, 250],
    lengthOfStay: 4,
    guestName: "Bubba",
    listRooms:function(){
     for(let i = 0; i < this.roomTypes.length; i++){
        console.log(this.roomTypes[i],'Rooms');
            for(let j = 0; j< this.availableRoomNumbers[i].length; j++){
                console.log(this.availableRoomNumbers[i][j]);
            }
        }
    }

}
hotel.listRooms()
 