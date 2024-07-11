// function values(obj) {
//     // Return all of the values of the object's own properties.
//     // Ignore functions

// }

import { testObject } from "./object.js";

export function values(obj) {
    let obj_values = Object.values(obj)
    console.log(obj_values)
}

values(testObject)