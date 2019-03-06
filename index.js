function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  });
}

function logDriversByHometown(drivers, home) {
  drivers.forEach(function(driver) {
    if (driver.hometown === home) {
      console.log(driver.name)
    }
  });
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverA, driverB) {
    return driverA.revenue - driverB.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverA, driverB) {
    return driverA.name.localeCompare(driverB.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, driver) {
    return driver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  let totalRevenue = 0;
  drivers.forEach(function(driver) {
    totalRevenue = totalRevenue + driver.revenue
  });
  return totalRevenue/drivers.length
};
