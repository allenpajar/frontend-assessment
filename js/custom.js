$(document).ready(function(){
	$.get("data.json", 
		function(data, status){
			var accordions = data;
			for (var i = 0; i < accordions.length; i++){
				var accordion = accordions[i];
				if (i == 0){
					var first_object = "show"
					console.log(first_object);
				}
				else{
					var first_object = ""
				}
				$("#accordionExample").append('<div class="card"> <div class="card-header" id="heading' +[i]+ '"> <h2 class="mb-0"> <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse' +[i]+ '" aria-expanded="true" aria-controls="collapse' +[i]+ '"> '+accordion.title+' </button> </h2> </div> <div id="collapse' +[i]+ '" class="collapse ' +first_object+ '" aria-labelledby="heading' +[i]+ '" data-parent="#accordionExample"> <div class="card-body"> '+accordion.content+' </div> </div> </div>');
			}
		},"json"
	);
});