function findPair(nucleobase){
	let dnaCombinations = {
		'T': 'TA',
		'A': 'AT',
		'G': 'GC',
		'C': 'CG'
	};
	//Find matching nucleobases 
	let pairingBase = Object.keys(dnaCombinations)
					.filter(prop => nucleobase === prop);
	return dnaCombinations[pairingBase];
}


function pairElement(nucleobase,...pairs){
	//Base Condition
	if (nucleobase === ''){
		return [];
	}
	//Core Logic
	let pairing = findPair(nucleobase[0]);
	return pairs
		.concat([pairing.split('')])
		.concat(pairElement(nucleobase.replace(nucleobase[0],'')));
};
console.log(pairElement('ATCGA'));
