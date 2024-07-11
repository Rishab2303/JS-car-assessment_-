// function keys(obj) {
//     // Retrieve all the names of the object's properties.
//     // Return the keys as strings in an array.

// }

import { testObject } from "./object.js";

export function keys(obj) {
    let object_names = Object.keys(obj)
    console.log(object_names)
}

keys(testObject)