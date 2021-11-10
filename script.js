
async function getData(){
    let main = await fetch('https://restcountries.com/v2/all');
    let data = await main.json()
    // 1.Get all the countries from Asia continent /region using Filter function

//    let a =  data.filter((country)=> country.region=='Asia')
//    .map((country)=>country)
//    console.log(a)



 // 2.Get all the countries with a population of less than 2 lakhs using Filter function
 
    // let b = data.filter((country)=>country.population<2_00_000)
    // .map((country)=>({
    //     name:country.name,
    //     population:country.population
    // }))
    // console.log(b);

   
    //3. Print the following details name, capital, flag using forEach function

//     let c = data.forEach((country)=>{
//       console.log({
//             name:country.name,
//             capital:country.capital,
//             flag:country.flag
//       });
//     }
// )
// console.log(c);


//4. Print the total population of countries using reduce function

// let d = data.reduce((acc,val)=>{
//     return acc + val.population
// },0)
// console.log(d); 



// 5.Print the country which uses US Dollars as currency.

// let e = data.filter(val=>val.currencies[0].code=="USD")
// .map(val=>val.name)
// console.log(e);
}

getData();




