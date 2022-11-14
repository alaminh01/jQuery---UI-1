// function changeText(){

// 	document.getElementById('p').innerHTML = "Welcome to you";

// }

// -----------------------------------


$(document).ready(function(){
	$('button').click(function(){
		alert("কি অবস্থা মনা?");
	});

	$( "#dragg" ).draggable();
	$( "#accordion" ).accordion({
		collapsible: true
	});

	var availableTags = [
      "Html",
      "Css",
      "C",
      "C++",
      "Java",
      "JavaScript",
      "PHP",
      "Python"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    $( "#sortable" ).sortable();
});