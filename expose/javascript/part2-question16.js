let statistics = {
    redCars: 21,
    blueCars: 45,
    rareCars: 2
    
}


for (let prop in statistics) {
    if (prop.startsWith('r') || statistics[prop] % 2 !== 0) {
      console.log(statistics[prop]);
    }
  }