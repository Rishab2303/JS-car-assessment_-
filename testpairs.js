// function pairs(obj) {
//     // Convert an object into a list of [key, value] pairs.
// }

import { testObject } from "./object.js";

function pairs(obj) {
    let list = []
    for (let key in obj) {
        list.push(key)
        list.push(obj[key])
    }
    console.log(list)

}

pairs(testObject)