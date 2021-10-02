// use portfolio-tracker

// "trades.action" = 0 => sell
// "trades.action" = 1 => buy

db.trades.insertMany(
    [
        {
            _id: "TCS",
            noOfShares : 2,
            trades: [
                {
                    timeStamp : new Date(),
                    _id : ObjectId(),
                    action : 1,
                    quantity : 5,
                    price : "1833.45"
                },

                {
                    timeStamp : new Date(),
                    _id : ObjectId(),
                    action : 0,
                    quantity : 1,
                }
            ]
        },

        {
            _id: "WIPRO",
            noOfShares : 5,
            trades: [
                {
                    timeStamp : new Date(),
                    _id : ObjectId(),
                    action : 1,
                    quantity : 10,
                    price : "319.25"
                },

                {
                    timeStamp : new Date(),
                    _id : ObjectId(),
                    action : 1,
                    quantity : 3,
                    price : "230.65"
                },

                {
                    timeStamp : new Date(),
                    _id : ObjectId(),
                    action : 0,
                    quantity : 3,
                }
            ]
        },

        {
            _id: "GODREJIND",
            noOfShares : 4,
            trades: [
                {
                    timeStamp : new Date(),
                    _id : ObjectId(),
                    action : 1,
                    quantity : 8,
                    price : "535.00"
                },

                {
                    timeStamp : new Date(),
                    _id : ObjectId(),
                    action : 0,
                    quantity : 4,
                }
            ]
        }
    ]
);