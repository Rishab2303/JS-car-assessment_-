// function mapObject(obj, cb) {
//     // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.

// }

import { testObject } from "./object.js";
export function mapObject(obj, cb) {
    let mapped_array = {}
    for (let key in obj) {
        let transform = cb(obj[key])
        mapped_array[key] = transform
    }
    console.log(mapped_array)
}

function transformation(i) {
    return "5 +" + " " + i
}

mapObject(testObject, transformation)