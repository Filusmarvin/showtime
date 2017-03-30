// What is the ratio of Male:female in each year?
function genderRatio (object) {
  return object.males / object.females //this is a division problem

}

let ratios = data.map(genderRatio);
console.log(ratios);

// how many teenagers were there in 2010?

let teens =data.filter(object => object.age > 12 && object.age)
