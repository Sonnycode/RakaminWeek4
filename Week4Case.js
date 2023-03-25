// -Buatlah 100 nilai random (1 sampai 50) pada 1 array
const num = [];

for (let i = 1; i <= 100; i++) {
	num.push(Math.round(Math.random() * 100));
}
console.log(`array num = ${num}`);

// -Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan nilai baru pada array

const indexGanjil = [];
const indexGenap = [];

function indexArray(evenOdd) {
	for (let j = 0; j < num.length; j++) {
		if (j % 2 === 0) indexGenap.push(evenOdd[j]);
		else indexGanjil.push(evenOdd[j]);
	}
	console.log(`array index ganjil : ${indexGanjil}`);
	console.log(`array index genap : ${indexGenap}`);
}
indexArray(num);

/* -Gunakan 2 array yang telah dibuat untuk mendapatkan
      -Min
      -Max
      -Total
      -Rata rata
*/

// Min Max index Genap
let maxNum = indexGenap[0],
	minNum = indexGenap[0];
function minMaxEven() {
	for (let i = 0; i < indexGenap.length; i++) {
		if (indexGenap[i] === maxNum) continue;
		else if (indexGenap[i] > maxNum) maxNum = indexGenap[i];

		if (indexGenap[i] === minNum) continue;
		else if (indexGenap[i] < minNum) minNum = indexGenap[i];
	}
	console.log(`max untuk index genap = ${maxNum}`);
	console.log(`min untuk index genap= ${minNum}`);
}

minMaxEven();
// Min Max index ganjil
let maxNum1 = indexGanjil[0],
	minNum1 = indexGanjil[0];
function minMaxOdd() {
	for (let i = 0; i < indexGanjil.length; i++) {
		if (indexGanjil[i] === maxNum1) continue;
		else if (indexGanjil[i] > maxNum1) maxNum1 = indexGanjil[i];

		if (indexGanjil[i] === minNum1) continue;
		else if (indexGanjil[i] < minNum1) minNum1 = indexGanjil[i];
	}

	console.log(`max untuk index ganjil= ${maxNum1}`);
	console.log(`min untuk index ganjil= ${minNum1}`);
}

minMaxOdd();

// Total index Ganjil
let totalGanjil = indexGanjil.reduce((prev, value) => prev + value, 0);
console.log(`total index Ganjil : ${totalGanjil}`);

// Total index Genap
let totalGenap = indexGenap.reduce((prev, value) => prev + value, 0);
console.log(`total index Genap : ${totalGenap}`);

// Rata-rata index genap
let averageGenap = totalGenap / indexGenap.length;
console.log(`Rata index Genap : ${averageGenap}`);

// Rata-rata index ganjil
let averageGanjil = totalGanjil / indexGanjil.length;
console.log(`Rata index Ganjil : ${averageGanjil}`);

// Perbandingan nilai Min dan Max pada array genap dan ganjil
function comparisonIndexMinMax() {
	if (minNum > minNum1) console.log(`Nilai angka Min =  ${minNum1}`);
	else console.log(`Nilai anga Min = ${minNum}`);
	if (maxNum > maxNum1) console.log(`Nilai angka Max =  ${maxNum}`);
	else console.log(`Nilai anga Max = ${maxNum1}`);
}
comparisonIndexMinMax();

// File ini telah dipush ke link github: https://github.com/Sonnycode/RakaminWeek4.git


