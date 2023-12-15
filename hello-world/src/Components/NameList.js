import React from 'react'
import Person from './Person'

//list and keys
// function NameList() {
    // const persons = [
    // {
    //     id: 1,
    //     name: 'Bruce',
    //     skill: 'react'
    // },
    // {
    //     id: 2,
    //     name: 'Clark',
    //     skill: 'HTML'
    // },
    // {
    //     id: 3,
    //     name: 'Diana',
    //     skill: 'Angular'
    // }]
//     const personList = persons.map(person => <Person key={person.id} person={person} /> )
//     return <div>{personList}</div> 
// }




// index as key 
function NameList() {
    const names = ['Bruce', 'Clark', ' Diana', 'Bruce']
    const persons = []
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList

