const tbl = {
    a: 'toto',
    b: 'mike',
    c: 'olivier',
}

for(let name in tbl) {
    console.log(tbl[name]);
}

console.log(Array.from(tbl).reverse());