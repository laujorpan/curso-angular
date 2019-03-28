## Clase 2:
Generamos el avatar de lo que será nuestro futuro chat. 
Iniciamos el proyecto con un 
    ng new chat
y comprobamos que funciona con un ng serve.
Creamos el avatar:
    ng g c avatar
Además de jugar con obtener la imagen de una url, definir estilos, etc hemos visto:
1.Variables de estilo en css. Sin necesidad de scss ya se pueden definir variables, ejemplo en img dentro de avatar.component.scss en la definicion de color del borde
2.Inputs y outputs. Los outputs trabajan con evet emmiter que es importante que lo cojamos de angular core, ya que hay otra librería que tiene una clase igual
    2.1 Para inputs es facil, todo lo que sea un input es un atributo del tag app-nombreDeMiComponente
    2.2 Para outputs las claves son: 
        2.2.1 Usar el emit del event emmiter definido como output para pasar el valor. 
        2.2.2 El nombre del objeto emmiter es el evento que yo recojo en el tag app-nombreDeMiComponente
        2.2.3 El $event es lo quee yo he emitido al hacer "emit" en mi componente.
##### TIPS: mgchev // seeds angular// ...
##### RESOURCES: https://github.com/jroji/angular-chat

## Clase 3:
Inyectables y servicios. 
Solo inyectar servicios en "componentes listos" dado que si no hacemos a los componentes de presentación muy dependientes de los datos que se les pasan por servicios y por tanto los hacemos poco reutilizables. En definitiva, los input/output nos deberían servir para comunicar hermanos haciendo el componente padre de pasarela y ese componente padre ha podido obtener la info que pasa por input o guardar la que recibe con output usando servicios.
Inicio con observables.
Importante: implementar onDestroy y desuscribir SI CREAMOS OBSERVABLES PROPIOS. Los de angular (ejemplo los del HttpClient angular sí los desuscribe)
##### RESOURCES: https://www.learnrxjs.io
