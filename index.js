
// let ask 

// do {
//  ask = +prompt()
// }   while (ask !== 7777)








let passenger_car = {
    engine: 5.4,
    color: "aubergine",
    brand: "Audi"
}

let truck = {
    engine: 3.0,
    color: "shit color",
    brand: "Lamborgini"
}





let new_car = Object.assign({}, passenger_car, { truck })






let keys = Object.keys(new_car)

let values = Object.values(new_car)

let arr = keys.concat(values)






let types = {
    string: [],
    object: [],
    number: [],
    boolean: [],

}

let all_cars = arr.forEach(i => {
    if (typeof (i) == "string") { types.string.push(i) }
    else if (typeof (i) == "object") { types.object.push(i) }
    else if (typeof (i) == "boolean") { types.boolean.push(i) }
    else if (typeof (i) == "number") { types.number.push(i) }


}
)

console.log(types);













