<script>
let tomb = [];
for (i = 0; i < 10; i++ ){
	tomb.push(Math.round(Math.random()*100));
}

document.write(tomb + "<hr>");

let min = tomb[0];
for (i = 0; i < tomb.length; i++ ){
	if ( tomb[i] < min){
	min = tomb[i];
}
}
document.write(min + "<br>");
let j = 0;
	while(tomb[j] != min && j < tomb.length){
	j++;
}

document.write(` A legkisebb szám a(z) ` + (j + 1) +`. helyen áll.` + "<hr>");

let max = tomb[0];
for (i = 0; i < tomb.length; i++ ){
	if ( tomb[i] > max){
	max = tomb[i];
}
}

document.write(max + "<br>");

let k = 0;
	while(tomb[k] != max && k < tomb.length){
	k++;
}
document.write(` A legnagyobb szám a(z) ` + (k + 1) +`. helyen áll.` + "<hr>");
</script>