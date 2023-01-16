## Project: Weather App

A weather app created using React.js exploring the usage and implementation of APIs, ASYNC js, and useEffect() and other hooks. The project is inspired by The Odin Project curriculum.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<a href="https://dicristea.github.io/weather-app/">🔗Live Preview</a>

## Features

- Search city location weather forecast
- View weather temperature, visibility, rain chance, and 'feels like' temp. at specified location
  today and one week in the future
- See general weather information for current time up to 1 week in the future

## Todos

- EVERYTHING
- Make UI responsive for phone screens

## Tools

- OpenWeather API
- React & ES7 JS
- ESLint + Airbnb JavaScript Style Guide
- Prettier Code Formatter

## What I learned

- React: useEffect and other hooks
  => https://blog.logrocket.com/modern-api-data-fetching-methods-react/
- ES7 & Async JS (try/catch, Promise/then, async/await)
- working with APIs (API keys, endpoints, error handling)
- css media queries
  --> NEED TO ORGANIZE CSS BETTER!!

## REACT TIPS

- when adding components on click to DOM
  => add via an object from data storage that renders with newly updated state (Education/Experience components)
- if something is rendering twice
  => Strictmode problem? https://stackoverflow.com/questions/66464124/update-inside-react-usestate-setter-being-called-twice
- Instead of "Prop drilling", use global variable called React Context/ useContext()
  => https://stackoverflow.com/questions/69675357/react-what-is-the-proper-way-to-do-global-state

## Technical Tips

- reset error and other data (with setState) when working in .then() and .catch() to "prevent inconsistencies for temporary server failiure"
- type="button" prevents button default of refreshing the page
- Use gh-pages to host page on github
  -> https://github.com/gitname/react-gh-pages
  -> run `npm run deploy`
- localStorage cannot hold any data type except for strings
  → JSON data (use JSON.parse(string to object), JSON.stingify(any type to string) methods)
- `window.location.reload(false)`
  - reloads page to trigger localStorage display update
- For inline styling:
  - React will automatically append a “px” suffix to certain numeric inline style properties. If you want to use units other than “px”, specify the value as a string with the desired unit.
- Can use ternary operator or utils js for repeated parts

## Sources

- Mountain Background:
  Photo by <a href="https://unsplash.com/@stephenleo1982?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Stephen Leonardi</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

- Favicon/logo:
  <a href="https://www.flaticon.com/free-icons/weather-app" title="weather app icons">Weather app icons created by Freepik - Flaticon</a>

- Menu Icons:
  <a href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by Febrian Hidayat - Flaticon</a>
  <a href="https://fonts.google.com/icons">Google Icons</a>

## Future Updates:

- Accessibility: Windows High Contrast mode --will not see the box-shadow or be able to detect the border color change
  --> try to make 'outline: 3px solid transparent;' work(????)

## Learn More: REACT

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
