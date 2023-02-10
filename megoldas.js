function keszito(){
    document.write("Szathury Zsolt");
    document.write("<br>Junior Frontend");
    document.write("<br>#Team12");
}

keszito();

function hatvanyozo(szam, hatvany){
	return szam ** hatvany;
}
document.write("<hr>" + hatvanyozo(2, 3));
document.write("<br>" + hatvanyozo(3, 5));

function parosLetrehoz(alsoHatar, felsoHatar){
	let generaltRandomSzam = Math.round(Math.random()* (felsoHatar - alsoHatar)) + alsoHatar;
    
    if (generaltRandomSzam % 2 == 0){
		return generaltRandomSzam;
	}
    else{
		return generaltRandomSzam + 1;
	}
}
document.write("<hr>" + parosLetrehoz(1, 100));

function testTomegIndex(suly, magassag){
	let TTI = suly / (magassag ** 2);

	if(TTI < 16){
	return "sulyosSovanysag";
	}
	else if(TTI < 17){
	return "mersekeltSovanysag";
	}
	else if(TTI < 18.5){
	return "enyheSovanysag";
	}
	else if(TTI < 25){
	return "normalisTestsuly";
	}
	else if(TTI < 30){
	return "tulsulyos";
	}
	else if(TTI < 35){
	return "IfokuElhizas";
	}
	else if(TTI < 40){
	return "IIfokuElhizas";
	}
	else {
	return "IIIfokuSulyosElhizas";
	}
}
document.write("<hr>" + testTomegIndex(200, 2));
document.write("<br>" + testTomegIndex(45, 1.5));
document.write("<br>" + testTomegIndex(25, 1.2));

function egeszOsztoE(szam, oszto){
	if (szam % oszto == 0){
		return true;
	}
    else{
	return false;
	}
}
document.write("<hr>" + egeszOsztoE(25,5));
document.write("<br>" + egeszOsztoE(1050,7));
document.write("<br>" + egeszOsztoE(2048,3));

