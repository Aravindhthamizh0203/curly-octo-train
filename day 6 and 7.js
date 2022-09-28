class Person {

  name;

  constructor(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

    console.log(person.name);
  

}
// day 7
var result=res.filter((ele)=>ele.region=="Asia").map((ele)=>ele.name);
   console.log(result);
var popu=res.filter((ele)=>ele.population<200000);
    console.log(popu);
var res1=arr.reduce((acc,cv)=>acc+cv.population,0);
console.log(res1);
var result=res.filter((ele)=>ele.currency=="US Dollars").map((ele)=>ele.name);
   console.log(result);
