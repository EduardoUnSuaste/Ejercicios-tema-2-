// Realiza una función que permita cargar calcular la unión, intersección y diferencia de dos conjuntos dados. 


let engineering = new Set(['chivas', 'toluca', 'atlante', 'america', 'necaxa']);
let freelancers = new Set(['monterey','toronto', 'toluca', 'cruz azul', 'atlas']);
let union = new Set([...engineering, ...freelancers]);
let intersection = new Set([...engineering].filter(x => freelancers.has(x)))
let symmetricDifference = new Set([...union].filter(x => !intersection.has(x)));

console.log(symmetricDifference,intersection,union);