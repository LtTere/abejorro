var $abeja = $(".abeja") ;

var velocidad = 300 ;


$("body").keydown( moverAbeja ) ;
$("body").keyup( posarAbeja ) ;




function moverAbeja(evento) {
	
	var posX = parseInt( $abeja.css("left") ) ;
	var posY = parseInt( $abeja.css("top") ) ;
	
	var codTecla = evento.which ;
	
	switch(codTecla) {
	
		case 37:  // ← 
			$abeja.addClass("volando") ;
			resetRotacionAbeja() ;
			$abeja.addClass("toLeft") ;
			var nuevaPosX = posX - velocidad ;
			var nuevaPosY = posY ;
			break ; 
			
			
		case 38:  // ↑ 
			$abeja.addClass("volando") ;
			resetRotacionAbeja() ;
			$abeja.addClass("toTop") ;
			var nuevaPosX = posX ;
			var nuevaPosY = posY - velocidad ;
			break ; 


		case 39:  // → 
			$abeja.addClass("volando") ;
			resetRotacionAbeja() ;
			$abeja.addClass("toRight") ;
			var nuevaPosX = posX + velocidad ;
			var nuevaPosY = posY ;
			break ;

			
		case 40:  // ↓ 
			$abeja.addClass("volando") ;
			resetRotacionAbeja() ;
			$abeja.addClass("toBottom") ;
			var nuevaPosX = posX ;
			var nuevaPosY = posY + velocidad ;
			break ;
			
			
		default:
			var nuevaPosX = posX ;
			var nuevaPosY = posY ;
	}
	
	
	$abeja.css("left" , nuevaPosX + "px" ) ;
	$abeja.css("top" , nuevaPosY + "px" ) ;
}



function posarAbeja() {
	$abeja.removeClass("volando") ;	
}





function resetRotacionAbeja() {
	$abeja.removeClass("toLeft toTop toRight toBottom") ;	
}





















