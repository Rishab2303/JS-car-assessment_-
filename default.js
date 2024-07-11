// function defaults(obj, defaultProps) {
//     // Fill in undefined properties that match properties on the defaultProps parameter object.
//     // Return obj.
// }
import { testObject } from "./object.js";

function defaults(obj, defaultProps) {
    for (let key in obj) {
        if (obj[key] === undefined && key in defaultProps) {
            obj[key] = defaultProps[key]
        }
    }
    console.log(obj);
}
testObject.age = undefined
defaults(testObject, { age: 25, city: 'New York' })