

<img  align="left" width="150" style="float: left;" src="https://www.upm.es/sfs/Rectorado/Gabinete%20del%20Rector/Logos/UPM/CEI/LOGOTIPO%20leyenda%20color%20JPG%20p.png">
<img  align="right" width="150" style="float: right;" src="https://miriadax.net/miriadax-theme/images/custom/logo_miriadax_new.svg">
<br/><br/><br/>

# Módulo 3: Modelos de datos de datos con relaciones entre tablas, relaciones 1:1, 1:N y N:N, migraciones - Entrega P2P: Bases de datos

Versión: 24 de junio de 2020

## Objetivos
 * Afianzar los conocimientos obtenidos sobre el desarrollo de programas interactivos con Node.js
 * Afianzar los conocimientos obtenidos sobre el diseño de bases de datos relacionales y su implementación utilizando SQLite y Sequelize.

## Descripción de la práctica

Esta práctica consiste en la ampliación del proyecto de gestión de usuarios y quizzes desarrollado en clase. Se añadirá la posibilidad de jugar a responder las preguntas almacenadas en el servicio de manera aleatoria y consecutiva hasta fallar alguna de ellas. Se implementará también una nueva funcionalidad para almacenar las puntuaciones conseguidas por cada usuario (número de aciertos) y para poder consultarlas en cualquier momento. 


## Descargar el código del proyecto

Es necesario utilizar la **versión 12 de Node.js** para el desarrollo de esta práctica. El proyecto debe clonarse en el ordenador desde el que se está trabajando: 

```
$ git clone https://github.com/ging-moocs/MOOC_node_mod3-bbdd_entrega
```
A continuación se debe acceder al directorio de trabajo, instalar las dependencias y configurar la base de datos (migraciones y seeders). Entonces puede arrancarse el programa.

```
$ cd MOOC_node_mod3-bbdd_entrega
$
$ npm install
$
$ npm run migrate   ## En Windows: npm run migrate_win
$
$ npm run seed      ## En Windows: npm run seed_win
$
$ npm start     ##  or 'node main'
....
## Mensajes 

Todos los mensajes que se envían o reciben en la aplicación de chat se listan en la siguiente tabla:

$ git clone -b migration https://github.com/CORE-UPM/user_quiz
$ cd user_quiz
$
$ npm install
$
$ npm run migrate
$
$ npm run seed
$
$ npm start     ##  or 'node main'
....
> h
  Commands (params are requested after):
    > h              ## show help
    >
    > lu | ul | u    ## users: list all
    > cu | uc        ## user: create
    > ru | ur | r    ## user: read (show age)
    > uu             ## user: update
    > du | ud        ## user: delete
    >
    > lq | ql | q    ## quizzes: list all
    > cq | qc        ## quiz: create
    > tq | qt | t    ## quiz: test (play)
    > uq | qu        ## quiz: update
    > dq | qd        ## quiz: delete
    > p              ## quiz: play
    > ls             ## Scores Users
    >
    > lf | fl | f    ## favourites: list all
    > cf | fc        ## favourite: create
    > df | fd        ## favourite: delete
    >
    > e              ## exit & return to shell
    > 
```

