const today  = new Date();

const year = today.getUTCFullYear()+'年';
const month = today.getUTCMonth()+1+'月';
const date = today.getUTCDate()+'日';

console.log(year+month+date);