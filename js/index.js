let input = document.getElementById('textbox');
let add = document.getElementById('add');
let list = document.getElementById('list');

function addItem() 
{
	
	input.value = input.value.trim();
		
	if
        (input.value!="")
    {
			
		let li = document.createElement('li');
		li.innerText = input.value; 
		list.appendChild(li);
		alert
        ("City entered into list, we'll get back to you ASAP");
	}
	else
    {
		alert("Enter city to continue...");
	}
}

add.addEventListener('click', addItem);