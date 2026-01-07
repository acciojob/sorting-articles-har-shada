//your JS code here. If required.
const ul = document.querySelector("#band");
const bands= ['The Plot in You', 'The Devil Wears Prada',
'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything',
'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticle(str){
	let lower = str.tLlowerCase();
	if(lower.startswith("a") return str.slice(2));
	if(lower.startsWith("an")  return str.slice(3));
	if(lower.startsWith("the") return str.slice(4));
	
}

bands.sort((a,b)=>{
	const nameA = removeArticle(a).toLowerCase();
	const nameB= removeArticle(b).toLowerCase();
	if(nameA< nameB) return -1;
	if(nameB< nameA) return 1;
	return 0;
})

bands.forEach(band=>{
	const li  document.createElement("li");
	li.textContent= band;
	ul.appendChild("li");
});




