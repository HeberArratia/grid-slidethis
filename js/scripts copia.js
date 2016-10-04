$(document).ready(function() {
	var nColums = 5;
	var data = [];
	var columns = document.getElementsByClassName('colum');
	var colors = ['#F79256','#FBD1A2','#7DCFB6','#00B2CA','#1D4E89',
				  '#66717E','#32213A','#D4D6B9','#D4D6B9','#4B8F8C'];
	for (var i = 0; i < columns.length; i++) {
		//columns[i].style.backgroundColor = colors[i];
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
		var render = `	<div class="colum" id="colum-${n}">
							<div class="sub-colum">
								<div class="herramientas">
									<span class="icon-move"></span>
									<span class="icon-minus"></span>
									<span class="icon-plus"></span>
								</div>
								<div class="add-modulos">0</div>
							</div>
						</div>
						`;
		$('#container').append(render);
	    //$('#colum-' + n + '').css('backgroundColor', '' + getRandomColor() );
	    $('#colum-' + n + '').css('width', '20%');			
	}

	function getRandomColor() {
                var letters = 'BCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * letters.length)];
                }
                return color;
    }

	/*$('.colum').click(function() {
		console.log('---------------');
		//Se obtiene elemento actual y siguiente
		var actual = parseInt(this.id.split("-")[1]);
		console.log("Actual: " + actual);
		if (this.nextElementSibling !== null){
			var siguiente = this.nextElementSibling.id.split("-")[1];
			console.log("Siguiente: " + siguiente);
			// Se agranda actual en 20
			var tActual = parseInt(this.style.width.split("%")[0]);
			this.style.width = '' + (tActual + 20) + '%';
			// Se trabaja con el siguiente
			var tSiguiente = parseInt(this.nextElementSibling.style.width.split("%")[0]);
			// Condiciones
			if (tSiguiente == 20){
				$('#colum-' + siguiente + '').remove();
			} else {
				this.nextElementSibling.style.width = '' + (tSiguiente - 20) +  '%';
			}
		}
		console.log('---------------');
	});*/


	/*$('.colum').click(function() {
		console.log("-------");
  		var n = parseInt(this.id.split("-")[1]);
  		console.log("click en: " + n);
  		// Saber si existe contenido
  		var sig = parseInt(data[n].sig);
  		if (typeof data[sig] === "undefined"){
	  		console.log("no hay más espacio");
	  	} else {
	  		if (data[n+1].ocupado == false){
	  			var nTamano = parseInt(data[n].tamano) + 20;
	  			data[n].tamano = nTamano; 
	  			this.style.width = '' + nTamano + '%';
	  			var dtamano = parseInt(data[sig].tamano);
	  			data[n].sig = data[n].sig + 1;
	  			console.log("primer tamano: " + dtamano);
	  			if (dtamano == 20){
	  				console.log(" es 20");
	  				$('.colum')[sig].style.display = 'none';
	  				data[n].sig = data[n].sig + 1;
	  				console.log("siguiente es " + (data[n].sig));
	  			} else {
	  				console.log("no es 20");
	  				var dntamano = (dtamano - 20);
	  				console.log("nuevo tamano: " + dntamano);
	  				data[sig].tamano = dntamano;
	  				$('.colum')[sig].style.width = '' + dntamano + '%';
	  				$('.colum')[sig].style.zIndex = '100';
	  			}	
	  		}
	  	}
	  	console.log("------");
	});
	/*
	$('.colum').click(function() {
		console.log("-------");
  		var n = parseInt(this.id.split("-")[1]);
  		console.log("click en: " + n);
  		// Saber si existe contenido
  		var maxDer = parseInt(data[n].maxder);
  		if (typeof data[maxDer + 1] === "undefined"){
	  		console.log("no hay más espacio");
	  	} else {
	  		if (data[n+1].ocupado == false){
	  			var nTamano = parseInt(data[n].tamano) + 20;
	  			data[n].tamano = nTamano;
	  			data[n].maxder = maxDer + 1; 
	  			this.style.width = '' + nTamano + '%';
	  			var dtamano = parseInt(data[maxDer+1].tamano);
	  			console.log("primer tamano: " + dtamano);
	  			if (dtamano == 20){
	  				console.log(" es 20");
	  				$('.colum')[maxDer+1].style.display = 'none';
	  				data[n].sig = data[n].sig + 1;
	  				console.log("siguiente es " + (data[n].sig));
	  			} else {
	  				console.log("no es 20");
	  				var dntamano = (dtamano - 20);
	  				console.log("nuevo tamano: " + dntamano);
	  				data[maxDer+1].tamano = dntamano;
	  				$('.colum')[maxDer+1].style.width = '' + dntamano + '%';
	  				$('.colum')[maxDer+1].style.zIndex = '100';
	  			}	
	  		}
	  	}
	  	console.log("------");
	});
	*/

	console.log(data);
});