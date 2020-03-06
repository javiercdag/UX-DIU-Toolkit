/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Erika Rodríguez",
				Photo: "erikaRNGphoto.jpg",
				Quote: "En la realidad no todo es tan fácil como lo hacen parecer",
				Age: 23,
				Occupation: "Cajera en Mercadona",
				Family: "Sin pareja",
				Location: "Granada (Realejo)",
				Character: "Le gusta ser independiente y las personas de mente abierta",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Viajar, conocer gente nueva", "Luchar por los derechos LGTB+"],
				Frustrations: ["Le frusta el que, al mencionar su género a nuevos conocidos, no sepa cómo reaccionarán", "Le gustaría tener más tiempo libre y un trabajo mejor"],
				Bio: "Nació en el Realejo en el seno de una familia muy influenciada por la religión cristiana. En la adolescencia descubrió que no se sentía representada por ninguno de los dos géneros clásicos, aunque sí por el pronombre 'ella'. Su padre no era capaz de entenderla, lo que llevó primero a una separación del matrimonio y, eventualmente, a ella querer abandonar su casa y buscar un nuevo piso en la actualidad. Busca compañeros sociables que puedan convertirse en amigos y con los que pueda hablar de cualquier cosa, más que meros compañeros de piso.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Quiere abandonar su casa lo antes posible y encontrar un piso barato y estable durante meses.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Evaristo",
				Photo: "evaristo.jpg",
				Quote: "En los 80 se vivía mejor",
				Age: 52,
				Occupation: "Albañil",
				Family: "Casado durante 20 años y actualmente divorciado",
				Location: "Granada (Armilla)",
				Character: "Le gusta pasar el rato en el bar y ver partidos de fútbol",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				],
				Goals: ["Poder evadirse más del trabajo", "Cambiar a un trabajo más remunerado", "Compartir sus experiencias vividas con otros"],
				Frustrations: ["No le gusta la tecnología, suele necesitar ayuda", "No se le da bien conocer gente"],
				Bio: "Nació en Armilla, se crió en una familia modesta y fue a la escuela hasta 8º de EGB. Tras eso inició la Formación Profesional, pero la dejó para empezar a trabajar como peón en una obra. Nunca ha tenido grandes oportunidades de trabajo, ya que no continuó en su día con los estudios. Estuvo casado durante 20 años, pero por problemas de comunicación se divorció. Como albañil ha hecho algunos amigos y, a veces, se reúnen en bares para pasar el rato",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }

				],
                Contextos: "Quiere desconectar del trabajo, olvidarse de su relación pasada y poder compartir experiencias con otras personas de su edad",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},

		];
		$scope.model = $scope.Personas[0];
	}])
