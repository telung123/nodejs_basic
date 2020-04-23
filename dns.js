"use strict";

// Domain name system
const dns = require("dns");

dns.lookup("google.com", (err, add, family) => {
  console.log(`address: ${add}, ${family}`);

  // IpV4  - family : 4
});

dns.resolve4("test.com", (err, addresses) => {
  if (err) throw err;

  const res = JSON.stringify(addresses);
  console.log(res);

  addresses.forEach((a) =>
    dns.reverse(a, (err, hostnames) => {
      if (err) throw err;
      console.log(`reverse for ${a}; ${JSON.stringify(hostnames)}`);
    })
  );
});
