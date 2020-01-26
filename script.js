function s(num, val) {
const amount = num * 1; // amount is the num or NaN
const sum = (!num ? 0 : num) * val;  // the sum for that bill or coin

if (isNaN(amount)) { // check if the entry is not a number

alert(
"' " + num + " ' is not a valid entry and that field will "
+ "not be included in the total money calculation."
);

return 0;
}
else
return sum; // if it is OK, send sum back
}


function money(form) {
const hun = s(form.hun.value, 100); // Each amount is the returned value
const fif = s(form.fif.value, 50);  // for the amount in the s() function
const twe = s(form.twe.value, 20);
const ten = s(form.ten.value, 10);
const fiv = s(form.fiv.value, 5);
const one = s(form.one.value, 1);
const hlf = s(form.hlf.value, .5);
const qtr = s(form.qtr.value, .25);
const dme = s(form.dme.value, .1);
const nck = s(form.nck.value, .05);
const pny = s(form.pny.value, .01);

// add up all the amounts
var ttl = hun + fif + twe + ten + fiv + one
+ hlf + qtr + dme + nck + pny;

// rounds total to two decimal places

ttl = "" + ((Math.round(ttl * 100)) / 100);

const dec1 = ttl.substring(ttl.length-3, ttl.length-2);
const dec2 = ttl.substring(ttl.length-2, ttl.length-1);

if (dec1 != '.') { // adds trailing zeroes if necessary
if (dec2 == '.') ttl += "0";
else ttl += ".00";
};
form.total.value = "$ " + ttl; // display total amount
};