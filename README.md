# CSGO Skin Finder

## Overview

1. Skin Search and Selection:
   Provide a search bar where users can enter the name or details of the CS:GO skin they are interested in.
2. Price Aggregation:
   Integrate with multiple CS:GO skin trading sites through APIs to fetch real-time price data.
3. Price Comparison:
   Display a list of the lowest prices for the selected CS:GO skin from various trading sites in a clear and organized manner.
4. Historical Price Data:
   Provide a historical(weekly) price chart for the selected skin, allowing users to track price trends over time.

### Problem

Users usually have to look on multiple sites to compare prices, I'm taking that out of the equation and giving them one stop to find the best price.

### User Profile

Any CSGO player who likes to buy and sell skins would benefit from the app.

### Features

Multiple API calls,
Multiple states and changes,
Rendering JSON to the virtual DOM,
Functions to convert currencies,
Multiple routes for each API being used, along with different endpoints,

### Tech Stack

React,
Node,
Express,
Axios,
LocalStorage,
Controllers,
Middleware,
Routes,
CORS,

### APIs

https://steamapis.com/docs,
https://api.dmarket.com,
https://api.skinport.com,
https://api.bitskins.com,

### Sitemap

Will be a single page application to begin with, later on multiple pages will be added to have users sign in, view stats and/or best selling skins.

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.
No login or user profile functionality will be added until Sprint 3.

## Roadmap

Sprint 1 - Completing all styling and layout
Sprint 2 - Implementing all API calls
Sprint 3 - Implementing Nice-to-haves

## Nice-to-haves

User login and authentication,
CSGO profile stats page,
Best selling skins page,
Auto Complete feature in search bar
