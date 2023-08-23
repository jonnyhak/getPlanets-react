import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setPlanets((
          data.bodies.filter((singlePlanet) => 
            singlePlanet.isPlanet !== false
          )
        ))
      }
    )
  }, [])

  return (
    <div className="container">
      {planets.map((body) => {
        return( 
          <div className="planet" style={{ flex: '0 0 33.333333%' }}>
            <h2>
              {/* {body.enlgishName} */}
              {body.englishName}
            </h2>
            <ul>
              <li>{body.density}</li>
              <li>{body.gravity}</li>
              <li>{body.escape}</li>
            </ul>
          </div>
         ) 
        }
      )}
    </div>
  );
}

export default App;

// 1. Create a method named getPlanets, which on mount will make an API call

//    to receive json response from the url of 'https://api.le-systeme-solaire.net/rest/bodies/'

 

//    We have added Axios through a cdn, but you can use any method that you would like to makle the call

 

// 2.

//   Example Repsonse:

//   {

//     "id": "lune",

//     "name": "La Lune",

//     "englishName": "Moon",

//     "isPlanet": false,

//     "moons": null,

//     "semimajorAxis": 384400,

//     "perihelion": 363300,

//     "aphelion": 405500,

//     "eccentricity": 0.0549,

//     "inclination": 5.145,

//     "mass": {

//       "massValue": 7.346,

//       "massExponent": 22

//     },

//     "vol": {

//       "volValue": 2.1968,

//       "volExponent": 10

//     },

//     "density": 3.344,

//     "gravity": 1.62,

//     "escape": 2380,

//     "meanRadius": 33,

//     "equaRadius": 1738.1,

//     "polarRadius": 1736,

//     "flattening": 0.0012,

//     "dimension": "",

//     "sideralOrbit": 27.3217,

//     "sideralRotation": 655.728,

//     "aroundPlanet": {

//       "planet": "terre",

//       "rel": "https://api.le-systeme-solaire.net/rest/bodies/terre"

//     },

//    "discoveredBy": "",

//     "discoveryDate": "",

//     "alternativeName": "",

//     "axialTilt": 6.68,

//     "rel": "https://api.le-systeme-solaire.net/rest/bodies/lune"

//   }

 

//   - We only want the bodies that are considered planets, so after you have recieved a response,

//     filter the result set so that it only contains entries that have a isPlanet value of true

 

//   3. Assign the filtered data of the response to the 'planets' data property of the vue instance

 

//   4. Render the results in the HTML in the following format:

 

//     HTML Format For Each Planet:

//     - div holding the contents of the response

//     - h2 for the englishName

//     - a ul containing density, gravity, and escape as li's:  

//     - the li's should have the name before the value, such as Gravity: {gravity}

 

//   5. Render the results to display 3 plants per row

 

//   6. Render the <h2> for every third plant to have a 'red' color