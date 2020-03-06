/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Erika Rodríguez",
                Photo: "erikaRNGphoto.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere buscar piso en el centro de Granada",
                touch1: "ordenador (Google)",
                feel1: "4",
                con1: "Decidir qué app utilizar entre las muchas anunciadas en Internet",
                ima1: "cartoon-looking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Se decide por Badi, echa un vistazo rápido y parece muy competente. La descarga.",
                touch2: "móvil (Apple Store)",
                feel2: "4",
                con2: "ha gastado mucho tiempo en encontrarla, pero al menos hay muchos pisos que le gustan listados en la app",
                ima2: "cartoon-phone-sitting.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide registrarse en la web para poder empezar los trámites",
                touch3: "móvil (app de Badi)",
                feel3: "2",
                con3: "Solo puedes elegir entre dos géneros a la hora de registrarse, se siente atacada pero decide continuar",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Elige un piso a compartir, realiza los trámites y le dan fecha para visitar el piso y conocer a su compañero",
                touch4: "móvil",
                feel4: "3",
                con4: "Tiene ganas de mudarse, pero no sabe como reaccionará la otra persona",
                ima4: "cartoon-why.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Tras mencionar su género a su futuro compañero este se muestra incómodo y antinatural",
                touch5: "Interacción entre personas",
                feel5: "1",
                con5: "Erika se da cuenta y se siente incómoda, los minutos se convierten en horas y se siente muy imponente",
                ima5: "cartoon-sad.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Su futuro compañero le deja un mensaje en la app diciendo que no puede darle hueco en el piso",
                touch6: "móvil",
                feel6: "1",
                con6: "Ha perdido mucho tiempo, el problema puede volver a suceder y aún no tiene ningún piso donde mudarse",
                ima6: "cartoon-KO.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Evaristo",
                Photo: "evaristo.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere compartir piso con alguien para no sentirse solo",
                touch1: "ordenador",
                feel1: "3",
                con1: "es difícil buscar gente con su edad que quiera compartir piso",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet ofertas para compartir piso",
                touch2: "ordenador",
                feel2: "2",
                con2: "hay muchas páginas para compartir piso, y no sabe cual será buena",
                ima2: "cartoon-looking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide entrar en Badi ya que le sale como uno de los primeros resultados",
                touch3: "ordenador",
                feel3: "4",
                con3: "Tiene que registrarse en la página, no se le permite hacerlo sin ese paso",
                ima3: "cartoon-PCtyping.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Quiere buscar un piso en el centro de Granada para compartir",
                touch4: "ordenador",
                feel4: "2",
                con4: "No hay ningún tipo de tutorial y no sabe cómo buscar los mejores pisos",
                ima4: "cartoon-PChard.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra 2 pisos a compartir que le interesan",
                touch5: "ordenador",
                feel5: "2",
                con5: "Uno de los dos pisos buscan gente joven, por lo que rechazan su petición sólo por su edad",
                ima5: "cartoon-PCcrying.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar en el otro piso",
                touch6: "ordenador",
                feel6: "4",
                con6: "Le molestó el trato recibido por las otras personas, pero está contento por haber encontrado piso",
                ima6: "cartoon-phoning.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



