var aligncontent = document.getElementById("aligncontent");
var alignitems = document.getElementById("alignitems");
var flexdirection = document.getElementById("flexdirection");
var flexwrap = document.getElementById("flexwrap");
var justifycontent = document.getElementById("justifycontent");

aligncontent.addEventListener("change", function (evt)
{
	document.getElementById("cajitas").style.alignContent = evt.target.value;
});

alignitems.addEventListener("change", function (evt)
{
	document.getElementById("cajitas").style.alignItems = evt.target.value;
});

flexdirection.addEventListener("change", function (evt)
{
	document.getElementById("cajitas").style.flexDirection = evt.target.value;
});

flexwrap.addEventListener("change", function (evt)
{
	document.getElementById("cajitas").style.flexWrap = evt.target.value;
});

justifycontent.addEventListener("change", function (evt)
{
	document.getElementById("cajitas").style.justifyContent = evt.target.value;
});

function handleChange(checkbox)
{
	if(checkbox.checked == true)
	{
		document.getElementById("cajitas").style.display = 'flex';
	}
	else
	{
		document.getElementById("cajitas").style.display = 'block';
  }
}