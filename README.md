
# Homelee | Property Listings Website

A multi-page React app for users to find properties for sale and view details.



## Demo

Click [here](https://lauratoddcode.github.io/property-app) to view the site.


  
## Screenshots

![List View Screenshot](https://i.imgur.com/aoYb7bU.png)
List view Screenshot


![Map View Screenshot](https://i.imgur.com/kiVMKVn.png)
Map view Screenshot


![Mortgage Calculator Screenshot](https://i.imgur.com/CmtsLFq.png)
Mortgage Calculator Screenshot




## Features

- Sort and filter the listings based on price and number of bedrooms.
- View listings in a list or on a map
- Save the properties you're interested in
- Use a mortgage calculator to find out what your repayments would be

  

## How It's Made

### Tech Stack
- React
- Google Maps JavaScript API
- Redux
- Material-UI
- npm
  

The Homelee app is built using React and employs react-router-dom to link between the pages. 

Redux was used to store and provide state between sibling components to allow for the below functions -
- The filter values needed to remain the same when switching between the map and list view
- When the user clicks the 'find out more' button on a property, the id of that property needed to be identified and the use taken to the corresponding profile.
- The saved properties needed to be stored in state when navigating around the site. 

The Google Maps JavaScript API is used along with react-google-maps to display each of the properties on the map and show and info window when the markers are clicked.

The mortgage calculator begins with default values in the input fields, two of which are filled dynamically. The property price is filled with the cost of the property currently being viewed and the deposit field is given a value of 10% of the property price. If any of the values of the input fields or radio buttons are changed, the monthly repayment value is adjusted. Chart.js is used to display the line graph of repayments.



## Optimisation

All images have been compressed and lazy loading employed to optimise performance.