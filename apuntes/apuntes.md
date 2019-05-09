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

## Clase 4:
rangle.io --> creadores iniciales de augury
augury: extension de chrome que permite ver el arbol de dependencias, atributos, etc
Router:
Cuidado con el orden en el que definimos las rutas ya que el primero que machea es el que pinta

## Clase 5:
Router: Victor Savkin
Compodoc: https://github.com/compodoc/compodoc
Posibles tareas:
 [ ] Pasar a la vista de contacts los contactos
 [ ] Pasar a la vista de chat el board
 [ ] Pasar componentes a modulos y en el router cargar modulos en vez de components

## Clase 6
Progressive web apps:
https://angular.io/guide/service-worker-getting-started 
https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es
Store:
https://github.com/ngrx/platform
https://ngrx.io/guide/store

## Clase 7 
Repaso de ngrx: mantenemos en el store el usuario seleccionado ya que es relevante pra todas las vistas de la aplicación
Router.navigate para que al seleccionar un contacto vaya directo a la vista de chat y que al pulsar cerrar vuelva
Importante!!! Los servicios no tienen OnInit, OnDestroy...
Limpiar codigo y meter material: https://material.angular.io/guide/getting-started
Otra opcion de diseño: https://www.primefaces.org/primeng/#/

##### RESOURCES:
Juegos para aprender a maquetar: 
https://cssgridgarden.com/#es    http://www.flexboxdefense.com/  https://flexboxfroggy.com/#es

## Clase 8
Firebase: https://github.com/angular/angularfire2
¿Cómo podíamos tener una estructura adecuada de la aplicación?
    [ ] Board y message deberían ser componentes "tontos" de presentación.
    [ ] Chat debería gestionar la emisión/recepción a los componentes por inputs y outputs. 
    [ ] Para que los datos se guarden y gestionen en la aplicación, chat debería pedir datos a un servicio y pintar los que ese servicio retorne, sin conocer si el servicio llama a un backend para sacar los datos, si los saca de un storage, si tira de Firebase...
    [ ] El servicio debería conocer al store y a firebase (en este caso)

## Clase 9
Formularios
Para formularios reactivos tenemos https://www.learnrxjs.io/
Importante:  importar ReactiveFormsModule (caso formularios reactivos, ver https://slides.com/jonroji/angular#/10/12 y siguientes)

Tutoriales, posts y demás: https://blog.thoughtram.io/

## Clase 11
Testing: https://angular.io/guide/testing
    ### Other resources:
    Performance
    https://developer.mozilla.org/es/docs/Web/API/Performance/measure
    