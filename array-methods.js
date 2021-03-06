const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

// Master display list to fulfill the first requirement below, and to display subsequent requirements

const displayList = (list, sectionID) => {
    list.forEach(planet => {
        document.querySelector("#" + sectionID).innerHTML += `<p>${planet}</p>`
    })
}

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

displayList(planets, "planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const capitalPlanets = planets.map(planet => {
    return planet.charAt(0).toUpperCase() + planet.slice(1)
})


displayList(capitalPlanets, "capitalized")

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const ePlanets = planets.filter(planet => {
    return planet.includes("e")
})

displayList(ePlanets, "letterE")