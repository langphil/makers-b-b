# Maker BnB

## Setup

```
$ npm install
$ psql
$ create database makers_bnb_development
$ create database makers_bnb_test
$ ./node_modules/.bin/sequelize db:migrate

# User stories

- User 1 - Hosts
- User 2 - Guest

- As a User(General)
- So that I can post a property
- I'd like to be able to sign up for an account

- As a User(1)
- So that I can rent out my property
- I'd like to be able to list them on the website

- As a User(1)
- So I can distinguish my property from others
- I'd like to list specific information about it

- As a User(1)
- So that I can show availability of my property
- I'd like to specify when it can be rented

- As a User(2)
- So that I can book a property for one night
- I'd like to be able to request a booking

- As a User(2)
- So that I can ensure I don't get a crazy axe wielding visitor
- I'd like to be able to approve a users request

- As a User(1)
- So that I don't double book my property
- I'd like it to be unavailable after a booking has been approved

- As a User(2)
- So that I don't book an unavailable property
- I'd like to be prevented from booking a property that'd already been booked

- As a User(1)
- Until the booking is confirmed
- I'd like to continue to receive bookings for the same night

- As a users
- I'd like to receive a ton of emails
