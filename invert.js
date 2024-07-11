// function invert(obj) {
//     // Returns a copy of the object where the keys have become the values and the values the keys.
//     // Assume that all of the object's values will be unique and string serializable.
// }
import { testObject } from "./object.js";

function invert(obj) {
    let inverted_array = {}
    for (let key in obj) {
        let new_key = obj[key]
        inverted_array[new_key] = key
    }
    console.log(inverted_array)
}

invert(testObject)