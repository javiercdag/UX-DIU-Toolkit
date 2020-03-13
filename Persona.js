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
				Family: "Sin pareja, vive con su madre",
				Location: "Granada (Realejo)",
				Character: "Le gusta ser independiente y las personas de mente abierta",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Viajar, conocer gente nueva", "Luchar por los derechos LGTB+"],
				Frustrations: ["Le frusta el que, al mencionar su género a nuevos conocidos, no sepa cómo reaccionarán", "Le gustaría tener más tiempo libre y un trabajo mejor", "Odia cuando se le malinterpreta"],
				Bio: "Erika es una hija única nacida en el Realejo en el seno de una familia muy influenciada por la religión cristiana, lo que provocó que asistiera a un colegio de monjas desde los 3 hasta los 17 años donde sufrió bullying por parte de un grupo de cuatro chicas de su misma clase. En la adolescencia descubrió que no se sentía representada por ninguno de los dos géneros clásicos, aunque sí por el pronombre 'ella'. Su padre no era capaz de entenderla, lo que llevó a una separación del matrimonio, influenciada por el caldeado ambiente en casa, cuando ella tenía 16 años. Erika se quedó a vivir con su madre, quien la culpa, casi siempre subconscientemente, por su separación. Esto influenció el que abandonara los estudios antes de acabar segundo de bachillerato, buscando más autonomía. Erika se refugia en los videojuegos, en concreto en el género de los MMORPGs, para escapar del día a día en casa. Dos años después de dejar los estudios empezó a trabajar como cajera en el Mercadona para poder pagarse sus gastos, aunque se arrepiente de no haberlos terminado. Le gusta escuchar música EDM e ir a conciertos con sus mejores amigos, Ana e Iván, con los que apenas se puede encontrar pues estudian en otra ciudad diferente a la de donde ella trabaja.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Quiere independizarse lo antes posible.",  
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
                
                
				Id: 1,
				Name: "Evaristo García",
				Photo: "evaristo.jpg",
				Quote: "En los 80 se vivía mejor",
				Age: 67,
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
				Goals: ["Volver a formar una familia", "Aprender más sobre la arquitectura", "Ir a ver un partido del Real Madrid"],
				Frustrations: ["No haber estudiado lo que le gusta", "Cortar un matrimonio tras 10 años", "Haber perdido el contacto con su hijo"],
				Bio: "Nació en Armilla, se crió en una familia modesta junto con dos hermanos y fue a la escuela hasta 8º de EGB. Fue una etapa muy dura debido a que era un chico hiperactivo y tenía problemas de atención, lo que le llevó a repetir 2 veces de curso. Tras eso inició la Formación Profesional, en la que descubrió su pasión por la arquitectura. Aun así tuvo que dejarla al año de entrar para empezar a trabajar como peón en una obra, ya que su padre se quedó en paro y necesitaba ayudar a su familia. Allí en la obra conoció a su mujer, llamada Rocío, y tras 5 años de relación decidieron casarse por la Iglesia. En esa época se mudaron a una casa ellos dos, en la que tuvieron 1 hijo, llamado Juan, que actualmente se encuentra en la Universidad. Durante 10 años de casados, fue acumulando poco a poco problemas, que acabaron ocasionando la ruptura con su mujer durante su 11º aniversario, distanciándolo de su hijo, ya que éste le hecha la culpa de la ruptura. Esto hizo que decidiera mudarse a su antiguo piso. Hace dos años se jubiló y ahora tiene mucho más tiempo libre. Le encanta el fútbol y acostumbra a ir al bar de al lado de su casa con sus amigos. Además, suele ir a hacer deporte con la peña de fútbol de Armilla y quedar a escuchar los grandes hits de los 80.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }

				],
                Contextos: "Quiere desconectar de la rutina, olvidarse de su relación pasada y poder compartir experiencias con otras personas de su edad",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}

		];
		$scope.model = $scope.Personas[0];

	}])
