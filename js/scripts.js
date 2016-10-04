$(document).ready(function() {
	var nColums = 5;
	var data = [];
	var columns = document.getElementsByClassName('colum');
	var button = document.getElementsByClassName('icon-square-plus');
	var colors = ['#F79256','#FBD1A2','#7DCFB6','#00B2CA','#1D4E89',
				  '#66717E','#32213A','#D4D6B9','#D4D6B9','#4B8F8C'];
	for (var i = 0; i < columns.length; i++) {
		//columns[i].style.backgroundColor = colors[i];
		button[i].id = "btn-" + i;
		columns[i].id = "colum-" + i;
		columns[i].style.width =  "20%"
		console.log('es: ' + columns[i].style.width);
		data.push({
			"number"  : i,
			"element" : columns[i],
			"ocupado" : false,
			"color"   : colors[i]
		});
	}

	$("#container").on("click", ".icon-plus", function(){
        var raiz = this.parentElement.parentElement.parentElement;
        verOcupado(raiz);
		console.log('---------------');
		//Se obtiene elemento actual y siguiente
		var actual = parseInt(raiz.id.split("-")[1]);
		console.log("Actual: " + actual);
		if (raiz.nextElementSibling !== null){
			var siguiente = raiz.nextElementSibling.id.split("-")[1];
			console.log("Siguiente: " + siguiente);
			// Se agranda actual en 20
			var tActual = parseInt(raiz.style.width.split("%")[0]);
			raiz.style.width = '' + (tActual + 20) + '%';
			// Se trabaja con el siguiente
			var tSiguiente = parseInt(raiz.nextElementSibling.style.width.split("%")[0]);
			// Condiciones
			if (tSiguiente == 20){
				$('#colum-' + siguiente + '').remove();
			} else {
				raiz.nextElementSibling.style.width = '' + (tSiguiente - 20) +  '%';
			}
		}
		console.log('---------------');
    });


	$("#container").on("click", ".icon-minus", function(){
		var raiz = this.parentElement.parentElement.parentElement;
		var tActual = parseInt(raiz.style.width.split("%")[0]);
		if (tActual !== 20){
			raiz.style.width = '' + (tActual - 20) + '%';
			renderColum(++nColums);
		}
		console.log('---------------');
		//Se obtiene elemento actual y siguiente
		
		console.log('---------------');
	});

	function renderColum(n){
		var render = `
						<div class="colum" id="colum-${n}">
							<div class="sub-colum" >
								<div class="herramientas">
									<span class="icon-move"></span>
									<span class="icon-minus"></span>
									<span class="icon-plus"></span>
								</div>
								<!--<h3 class="modulo">Imagen</h3>-->
								<div class="add-modulos">
									<p>
										<span class="btn btn-info btn-lg icon-square-plus"" data-toggle="modal" data-target="#myModal" "></span>
									</p>
								</div>
								<div class="modulos">
									<div class="ejem">Imagen</div>
									<div class="ejem">Texto</div>
									<div class="ejem">Feed de Twitter</div>
								</div>
							</div>
						</div>
						`;
		$('#container').append(render);
	    //$('#colum-' + n + '').css('backgroundColor', '' + getRandomColor() );
	    $('#colum-' + n + '').css('width', '20%');			
	}

	$("#container").on("click", ".icon-square-plus", function(e){
		var elemento = this;
		var id = $(this).attr('id');
		//$(this).class("display", "block");
		$(".icon-image").click(function(){
			var classactual = $('#' + id).attr('id');
			console.log("calse: " + '' + id);
			$('#' + id).removeClass("" + classactual).addClass("icon-image");
			var columicon = elemento.parentElement.parentElement.parentElement;
			$(columicon).addClass("activo");
			$('#myModal').modal('hide');	

		});
		$(".icon-text-height").click(function(){
			var classactual = $('#' + id).attr('id');
			console.log("calse: " + '' + id);
			$('#' + id).removeClass("" + classactual).addClass("icon-text-height");
			var columicon = elemento.parentElement.parentElement.parentElement;
			$(columicon).addClass("activo");
			$('#myModal').modal('hide');
		});
		$(".icon-twitter").click(function(){
			var classactual = $('#' + id).attr('id');
			console.log("calse: " + '' + id);
			$('#' + id).removeClass("" + classactual).addClass("icon-twitter");
			var columicon = elemento.parentElement.parentElement.parentElement;
			$(columicon).addClass("activo");
			$('#myModal').modal('hide');
		});
		$(".icon-youtube").click(function(){
			var classactual = $('#' + id).attr('id');
			console.log("calse: " + '' + id);
			$('#' + id).removeClass("" + classactual).addClass("icon-youtube");
			var columicon = elemento.parentElement.parentElement.parentElement;
			$(columicon).addClass("activo");
			$('#myModal').modal('hide');
		});
		$(".icon-bin").click(function(){
			
		});
		
	});

	

	/*$("#container").on("click", ".ejem", function(){
		//$(this).removeClass("icon-square-plus").addClass("icon-minus");
		//$('.icon-square-plus').toggleClass("icon-minus", "icon-square-plus");
	});*/

	function getRandomColor() {
                var letters = 'BCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * letters.length)];
                }
                return color;
    }

    function verOcupado(elem){
    	elem = $(elem).find('h3').text();
    	if (elem == ''){
    		return false;
    	} else {
    		return true;
    	}
    }

	console.log(data);
});