function logDriverNames(array) {
  array.forEach(function(value) {
    console.log(value.name);
  });
}

function logDriversByHometown(array, hometown) {
  array.forEach(function(value) {
    if (value.hometown === hometown) {
      console.log(value.name);
    }
  })
}

function driversByRevenue(array) {
  return array.slice().sort(function(x, y) {
    return x.revenue - y.revenue;
  });
}

function driversByName(array) {
  return array.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(array) {
  return array.reduce(function(total, driver) {
    return total + driver.revenue;
  }, 0);
}

function averageRevenue(array) {
  return totalRevenue(array) / array.length;
}

// const drivers = [
//     { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//     { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//     { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//     { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//     { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
//   ];

// driversByRevenue(drivers);