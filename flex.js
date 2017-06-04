flextarget = document.getElementById("cajitas");
options = document.getElementById("controles").getElementsByTagName("div");

boxes();
flex();

options[0].getElementsByTagName("input")[0].onchange = boxes;
options[1].getElementsByTagName("select")[0].addEventListener("change", flex);
options[2].getElementsByTagName("select")[0].addEventListener("change", flex);
options[3].getElementsByTagName("select")[0].addEventListener("change", flex);
options[4].getElementsByTagName("select")[0].addEventListener("change", flex);
options[5].getElementsByTagName("select")[0].addEventListener("change", flex);

function boxes(){
	var box;
	var boxqt = document.getElementById("qt").value;
	flextarget.innerHTML = "";
	for(var i=1 ; i <= boxqt ; i++)
	{
		box = document.createElement("div");
		box.className = "cajita";
		flextarget.appendChild(box);
		box.innerHTML = i;
	}
};

function flex()
{
	flextarget.style.alignContent = options[1].getElementsByTagName("select")[0].value;
	flextarget.style.alignItems = options[2].getElementsByTagName("select")[0].value;
	flextarget.style.flexDirection = options[3].getElementsByTagName("select")[0].value;
	flextarget.style.flexWrap = options[4].getElementsByTagName("select")[0].value;
	flextarget.style.justifyContent = options[5].getElementsByTagName("select")[0].value;
}