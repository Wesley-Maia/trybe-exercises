db.orders.insertMany(
  [
    { "_id" : 1, "item" : "almonds", "price" : 12, "ordered" : 2 },
    { "_id" : 2, "item" : "pecans", "price" : 20, "ordered" : 1 },
    { "_id" : 3, "item" : "cookies", "price" : 10, "ordered" : 60 }
  ]
);

db.warehouses.insertMany(
  [
    { "_id" : 1, "stock_item" : "almonds", warehouse: "A", "instock" : 120 },
    { "_id" : 2, "stock_item" : "pecans", warehouse: "A", "instock" : 80 },
    { "_id" : 3, "stock_item" : "almonds", warehouse: "B", "instock" : 60 },
    { "_id" : 4, "stock_item" : "cookies", warehouse: "B", "instock" : 40 },
    { "_id" : 5, "stock_item" : "cookies", warehouse: "A", "instock" : 80 }
]);

// ---------------------------------

db.packages.insertMany(
  [
      {
          "_id": 1,
          "package": "California Beach",
          "prices": {
              "package_price": NumberDecimal(10000),
              "package_fee": 200,
              "flight_price": 790
          },
          "dates": {
              "start_date": ISODate("2014-03-15T09:00:00Z"),
              "end_date": ISODate("2014-10-15T09:00:00Z")
          }
      },
      {
          "_id": 2,
          "package": "New York",
          "prices": {
              "package_price": NumberDecimal(13000),
              "package_fee": 150,
              "flight_price": 990
          },
          "dates": {
              "start_date": ISODate("2014-03-15T09:00:00Z"),
              "end_date": ISODate("2014-10-15T09:00:00Z")
          }
      },
      {
          "_id": 3,
          "package": "Bahamas",
          "prices": {
              "package_price": NumberDecimal(22000),
              "package_fee": 350,
              "flight_price": 1300
          },
          "dates": {
              "start_date": ISODate("2014-03-15T09:00:00Z"),
              "end_date": ISODate("2014-10-15T09:00:00Z")
          }
      },
      {
          "_id": 4,
          "package": "Guarapari",
          "prices": {
              "package_price": NumberDecimal(2000),
              "package_fee": 50,
              "flight_price": 300
          },
          "dates": {
              "start_date": ISODate("2014-03-15T09:00:00Z"),
              "end_date": ISODate("2014-10-15T09:00:00Z")
          }
      },
      {
          "_id": 5,
          "package": "Caldas Novas",
          "prices": {
              "package_price": NumberDecimal(1500),
              "package_fee": 70,
              "flight_price": 250
          },
          "dates": {
              "start_date": ISODate("2014-03-15T09:00:00Z"),
              "end_date": ISODate("2014-10-15T09:00:00Z")
          }
      }
  ]
);