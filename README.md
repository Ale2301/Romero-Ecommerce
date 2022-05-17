## El E-Commerce genérico
Proyecto realizado para simular un e-commerce genérico para el curso de ReactJS. Simula navegación y un sistema de compra hasta el punto donde se realiza la órden de compra, requiriendo de un usuario y su contraseña.


**Alejo Romero**

## Métodos de ejecución:
Para acceder al proyecto mediante descarga y ejecutarlo, deberás:

1. Dirigirte a code => Download Zip
2. Descomprimir el archivo descargado (Recomiendo una carpeta vacía)
3. Abrir la terminal (Donde se encuentre el archivo package.json) y ejecutar los comandos "npm install" y "npm start"

# Tecnologías usadas:
 
- **React JS (Native del proyecto)**
- **JavaScript Vanilla**
- **HTML5 (Maquetado del proyecto)**
- **CSS3 (Estilos para que se vea bonito :) )**

# Utilidades o dependencias:

- **React-Firebase:** Base de datos para conseguir guardar los users, products, categorys y ordenes de compra
- **React-Router-Dom:** Conseguir hacer el rooteo y de ésta manera mantener la página sin necesidad de hacer un reload independientemente de la URL

# CartContext.js: 

CartContext cumple la función de otorgar los siguientes datos/funciones para mantener la comunicación entre los componentes:

- **Cart** : El estado actual del carrito (Es decir, sus objetos)
- **setearLogin**: Función que marca el correcto ingreso del usuario y guarda sus datos, permitiendo la compra.
- **chequearLogin**: Función para chequear si la "traba" del login aún está puesta
- **chequearDatos**: Función para obtener todos los datos del usuario que se encuentra logueado
- **addItem**: Función que agrega un Item al carrito en el caso de que el mismo no se encuentre ahí
- **sumarItem**: Función que agrega Items del mismo tipo al carrito para evitar generar duplicados
- **removeItem**: Función que elimina el ítem seleccionado del carrito (Busca todos los ítems que NO coincidan con la id seleccionada, y los pone en el carrito)
- **getQuantity**: Función que obtiene la cantidad de productos a comprar (No el precio)
- **checkStock**: Función que obtiene el stock y le resta la cantidad en el carrito para evitar compras sobre el stock
- **isInCart** : Función para detectar si un ítem se encuentra o no en el carrito
- **clearCart**: Función para eliminar todos los objetos del carrito
- **precioFinal**: Función para obtener el precio final (Multiplica precio por cantidad y lo repite por cada ítem del carrito)

#  Firebase y sus collections:

## Collections creadas:

Las colecciones que utiliza este proyecto son:

1. **categories**: 
  - *descripcion : string*

2. **products**: 
  - *category : string,*
  - *description : string,*
  - *img : string,*
  - *name : string,*
  - *stockDisp : number*

## Collections no creadas:
 
Este proyecto usa dos collections que inician sin existir, y el mismo proyecto envía esa información para crear esos documentos:

1. **orders** : Son las órdenes que el usuario genera al finalizar su compra.
  - *comprador : {*
    - *email : string,*
    -  *phone : string,*
    -  *username : string*
  - *},*
  - *date : date,*
  - *items : {*
    - *id : string,*
    - *img : string,*
    - *name : string,*
    - *price : number,*
    - *quantity : number*
  - *},*
  - *total : number*
2. **users** : Los usuarios registrados en el sitio.
  - *mail : string,*
  - *password : string,*
  - *phone : number,*
  - *username : string,*


# ¿Cómo funciona?

El proyecto comienza en la ruta "/" donde primeramente se encontrará el contenido de *"ItemListContainer"*, el cual son todos los productos que pueden ser comprados sin ninguna clase de filtro (Los mismos a nivel interno son enviados a *"ItemList"* para posteriormente crear un *"Item"* por cada uno, desplegando la información a la vista del consumidor). Al oprimir en cualquier "ver detalle" la ruta cambia inmediatamente a "/detail/{id del producto}", y el contenido mostrado pasa a ser *"ItemDetailContainer"*. El mismo deja ver el artículo y sus especificaciones (Se pueden ver gracias a que el maquetado se realiza en *"ItemDetail"*) y muestra, además, el contenido del componente *"Counter"*, el cual permite aumentar o reducir la cantidad de productos que irán al carrito (Siempre evitando superar el stock). Al escoger nuestra cantidad y clickear en "agregar al carrito", se dejara ver un link que nos enviara a la siguiente parte del proyecto: El cart

Pero aún no vayamos allá. Si vemos arriba se puede observar el *"NavBar"*, el cual en el caso de clickear uno de sus botones, nos llevará a la ruta "/category/{category elegida}", lo que provocará un filtro en los productos mostrados de *"ItemListContainer"* gracias a que el mismo busca y discrimina dependiendo de la categoria que los productos posean (En "firestoreDb/"products"). 

Del lado izquierdo de los botones se encuentra el *"CartWidget"* en el caso de que se encuentre un producto seleccionado. El mismo puede usarse para ir al carrito y marca la cantidad de productos en el mismo.

Del lado derecho de los botones se encuentra el *"LoginInfo"*, en el cual se podrán ingresar valores en el caso de existir en la nube: Nombre de usuario y contraseña. En el caso de que se ingresen esos valores y sean incorrectos, se mostrará un error y se pondrá rojo lo que ocasionó el mismo. En el caso de que sean correctos, el componente cambiará al nombre del usuario logueado. En el caso de que no se posea un usuario y contraseña, se encuentra un butón que lleva a la ruta "/register", donde se muestra el componente *"Register"*. El mismo posee muchos inputs donde escribir los diferentes tipos de información. Luego de clickear el input de "submit" se hace un "check" de si el usuario ya existe en la nube. En el caso de existir, se muestra un error, en el caso de no existir, el componente cambia a mostrar un "registro exitoso", otorgando un link para volver a la ruta "/"

Existen dos maneras de ir a la ruta "/cart": Una es clickeando en el componente *"CartWidget"* y otra es clickeando el botón a continuación de "agregar al carrito". 
Este contiene el elemento *"Cart"*, el cual posee una lista con todos los elementos ya en el carrito, sus cantidades, especificaciones, el precio final a pagar y sus botones para eliminar el ítem elegido, eliminar todo el contenido del carrito y, porsupuesto, generar la órden de compra(Para todo esto debe haber al menos un ítem en el carrito). Al generar la órden de compra, primero se revisa que el usuario se encuentre logueado. En el caso de que no, la órden se cancela. En el caso de que si, comienza el proceso: Primero crea la órden (FirestoreDb,"orders") con el carrito,la información del comprador, el precio total,fecha y hora. Luego hace una revisada rápida de que la órden pedida no supere el stock disponible (Para evitar posibles errores) y guarda esa información. A continuación se actualiza el stockDisp al nuevo valor (FirestoreDb,"products") para restar los de la órden (En el caso de que la órden no supere el stock. Si lo hace, la petición se deniega). Si todo está ok, la orden se pasa al Firestore y se setea un mensaje de que la compra fue exitosa. Si ocurre un error, se setea un mensaje de error.

# Así se ve el proyecto!

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/91702853/168901664-5dbef8e0-2fd4-40e4-96ae-a7ad0536be89.gif)

