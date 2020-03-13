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
                
                goal4: "Tiene ganas de mudarse, pero no sabe como reaccionará la otra persona",
                touch4: "móvil",
                feel4: "3",
                con4: "Elige un piso a compartir, realiza los trámites y le dan fecha para visitar el piso y conocer a su compañero",
                ima4: "cartoon-why.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Al visitar el piso y conocer a su futuro compañero y hablar de su género con con él se muestra incómodo y antinatural",
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
				Name: "Evaristo García",
                Photo: "evaristo.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere publicar su habitación en la página Badi",
                touch1: "ordenador",
                feel1: "3",
                con1: "no se le permite ponerla sin registrarse",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "tras registrarse, quiere indicar el tipo de persona que busca para el piso",
                touch2: "ordenador",
                feel2: "2",
                con2: "hay muchas opciones, se vuelve algo difícil",
                ima2: "cartoon-looking.png",
                
                /*** PASO #3: ESPERA ***/ 
                
                goal3: "publica el piso y queda a la espera de solicitudes",
                touch3: "ordenador",
                feel3: "4",
                con3: "no recibe ninguna solicitud para el piso ofertado",
                ima3: "cartoon-PCtyping.png",
                
                /*** PASO #4: ACTUA ***/ 
                
                goal4: "quiere promocionar su piso para que lo vea más gente",
                touch4: "ordenador",
                feel4: "2",
                con4: "No se permite el promocionar el piso por edad",
                ima4: "cartoon-PChard.png",
                
                 /*** PASO #5: INTERACTUA ***/ 
                
                goal5: "Recibe la solicitud de Ana, una mujer de 48 años, y quiere responderle",
                touch5: "ordenador",
                feel5: "2",
                con5: "La persona no está dentro del rango de edad de lo que busca",
                ima5: "cartoon-PCcrying.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Aun sin cumplir la edad buscada, acepta la solicitud",
                touch6: "ordenador",
                feel6: "4",
                con6: "Tarda varios días en responderle hasta aceptar de vuelta",
                ima6: "cartoon-phoning.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



