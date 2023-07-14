# Surreal Estate :house:

## Description

A Real Estate App built using React, React Router and Firebase authentication. Users can create an account, sign in, add properties, view properties, save and remove properties to/from favourites, search for properties and filter results.

## Purpose

To improve my knowledge of React, integerating React Router and using Firebase Authentication.

## Tech that was used

- React
- React Router
- Firebase
- Axios
- qs

## Why this tech?

I used React because it is scalable and renders quickly and Axios because it automatically transforms responses to JSON data. I used Firebase because of the multitude of options that it offers and qs because it presented a simple solution to enable the search function.

## Dependencies

Jest, React, React Testing Library, React Router, Firebase, qs and Axios

# Dev dependencies

Eslint, Prettier

## How to install and run Surreal Estate

- Fork and clone this repository
- Open the cloned directory and run `npm install`

## How to use it

Use the script `npm start` to run the app in development mode. The browser will display a warning as the server will use a self-signed certificate, so you will need to proceed despite the warning. Click on any of the links in the Navbar to render the corresponding components. Without signing in you can still view and add properties, after creating an account and signing in you can also save properties to Favourites, view and remove properties from your Favourites. Use the search bar in the Sidebar to search by property title, use the options below the search bar to filter results by city or sort them by price.

## What's missing?

Given some more time I would write more tests. I also need to ammend the code to make the search function insensitive to case, add mobile friendly styling and resolve a bug which is causing positive Alerts to show as red in every component except for Add Property.

## Credits

I used the create-react-app npx script to set up the basic scaffolding of the project; the Command Shift track and all of the tutors helped me along the way, as well as some of the other students in my cohort.

Bed and bathroom icons are from "Font Awesome by Dave Gandy - http://fontawesome.io"

<a href="https://www.flaticon.com/free-icons/magnifying-glass" title="magnifying glass icons">Magnifying glass icon created by Good Ware - Flaticon</a>

Surreal Estate logo and favicon.co courtesy of Command Shift
