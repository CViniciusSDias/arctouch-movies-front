# Front-end for ArcTouch Movies WebApp

In this repository you'll find the front-end of the ArcTouch movies WebApp.

There are 3 routes in it:

- /
    - The root route shows the upcoming movies fetched from the back-end
- /details/:id
    - This route shows the details of a specific movie identified by the :id parameter. e.g. /details/1234
- /search/:query
    - This route shows the movies matching a specific query. e.g. /search/Thor: Ragnarok
    
## Architecture

The code is divided in two main folders inside the `src`.

The `service` directory has the service responsible for accessing the back-end and handle any errors with it.

The `components` directory has all the ReactJS files. Each page specific components is inside the page specific directory.
All the shared components are in the `components` root.

Due to the simplicity of the domain *Redux* wasn't used since it was going to add more complexity than necessary.

## Libraries used

- ReactJS
    - Used to separate the view of the application in small and maintainable components.
- react-router-dom
    - Used to define the existing routes in the front-end application and map them to components. The `index.js` file has the routes definition since there are only 3.
- MaterialUI
    - Used to style the visual components with the material design 
