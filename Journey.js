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
				Name: "Monica Suarez",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su familia para Verano, tiene sólo 15 dias libres",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere ir a un pais exotico pero que tenga atracciones para niños pequeños",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Ir a una agencia de viajes, y decirle sus preferencias y planes",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, le llamaran porque no hay nada interesante",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Le llaman a los pocos días con un viaje que no le convence",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una oferta en hoteles cerca de playa y con parque atracciones",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información del alojamiento ni de lo que hay alrededor, aunque el precio está bien, va por la calle por lo que está incómoda",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar para vacaciones pero no era lo que tenía en mente",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



