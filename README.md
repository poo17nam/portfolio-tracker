# Portfolio tracker

A Portfolio tracker to create,read,update and delete trades and maintain portfolio information in to the database using NodeJS and MongoDB.

## Getting Started

Clone the repository in your local system using the following :
```
$ git clone git@github.com:poo17nam/portfolio-tracker.git
```

### Prerequisites

You need the following installed prior to using the application : 

* [NodeJS](https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjYsr7N9JLYAhXKPo8KHSK_BlwQFggoMAA&url=https%3A%2F%2Fnodejs.org%2Fen%2Fdownload%2F&usg=AOvVaw3mpn_kqKBfLUVM2X6RrMKX) - Express framework of NodeJS is used to create the APIs.
* [MongoDB](https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwj7iZW19JLYAhUXTY8KHXddAMgQFggsMAA&url=https%3A%2F%2Fwww.mongodb.com%2Fdownload-center&usg=AOvVaw0fxqUPlRThXhXMOzZH_8h_) - Database for storing the records.
* [Postman](https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwiTmbeB9JLYAhVJQI8KHQfvAVQQFggvMAE&url=https%3A%2F%2Fwww.getpostman.com%2F&usg=AOvVaw1vWzpwzQOHi5ErKZnywLDR) - Tool for checking the working of APIs.


### Steps to run
Run mongo shell
```
$ mongo
```
Use the database portfolio-tracker
```
$ use portfolio-tracker
```

Copy the snippet in seeder.js and run in it mongo shell to create trades and portfolio

Exit mongo shell and navigate to project path
```
$ cd backend/
```
Install all the node packages using:
```
$ npm install
```

Run the following command to start the server :
```
$ node server.js
```

The server is now running on localhost:8000 . Go to Postman and check for the endpoints and their response.


