// 1

import  {ecoParks} from "./home work/data.js"

// 2

const two = ecoParks.filter((el) => el.country === "Lithuania")

// 3

const threa = two.map((el) => ({

    ...el,

    favorit: Math.random()> 0.5

}))

// 4

const s = JSON.stringify(threa)

localStorage.setItem("lithuaniaParks" , s)

// 5

const five = localStorage.getItem('lithuaniaParks')

console.log(JSON.parse(five))

// 6

const six = JSON.parse(five).filter((el) => el.favorit)

const table = six.map((el) => ({

    id : el.id,

    pavadinimas : el.name ,

    regionas : el.region.continent,

    dydisHektarais : el.sizeHectares,

    reitingas : el.ratings.average,

    stovyklavietes : el.facilities.camping? "Yra " : 'Nera',

    ezeru : el.lakes? el.lakes.length  : 'Nera',

}))

console. Table(table)
 