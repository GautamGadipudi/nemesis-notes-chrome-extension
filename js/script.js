function submitToDo() {
	
	var desc = document.getElementById("new-todo-text").value
	if (!desc){
		alert('Empty note cannot be saved!');
		return;
	}
	

	var to_do = {
		"id": randomId(),
		"description": desc
	};

	chrome.storage.sync.set({'value': JSON.stringify(to_do)}, function(){
		console.log('Note saved!');
		$('#new-todo-text').val('');
	});

	// localStorage.setItem('testObject', JSON.stringify(to_do), function(){
	// 	console.log('Note saved!');
	// });

	chrome.storage.sync.get('value', function(item){
		debugger;
		var p = JSON.parse(item.value);
		var div = document.createElement('DIV');
		div.innerHTML = p.description;
		div.id = p.id;
		div.className = "note";

		document.getElementById('all-notes').appendChild(div);
		return;
	})
	
}

function randomId () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
}

//document.getElementById("submit_button").addEventListener("click", submitToDo);

document.addEventListener("DOMContentLoaded", function(event) {

    var b = document.getElementById('submit_button');
    b.addEventListener('click', submitToDo, false);

});






