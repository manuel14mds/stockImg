# VisioStock
Es un proyecto que intenta simular un stock de imágenes y que tiene com oobjetibo aplicar todo lo aprendido de Next.js.
El objetivo principal de VisioStock es que sea una plataforma estética con mimo a los detalles, que sea lo más funcional posible para que sirva de base para una potencial de idea de negocio. Que tenga por lo menos dos role/niveles de acceso que son el administrador y el cliente. Si los tiempos me lo permiten puede que también esté el rol vendedor.

## Estilo
El diseño tiene que ser lo más intuitivo posible, que sea sobrio para no robar el protagonismo a las imágenes por lo que la paleta de colores debe ser en escala de grises.

## Desarrollo
Como objetivo de desarrollo es que sea lo más organizado posible. Que tenga muy buena estructura de commits y documentación de funciones de código.

### Nomeclatura de commits
Para que los bambios en el código/proyecto sea interpretado por otros programadores o por mi mismo, debe seguir una estructura descriptiva para ayudar a la comprension.
#### Estructura del commit
por eso debe tener las siguientes caracteristicas:
- Título: Debe ser breve (idealmente no más de 50 caracteres) y expresar el propósito principal del commit de manera clara y concisa. Debe empezar con un verbo en infinitivo, reflejando la acción realizada:Ejemplo: "Añadir validación de formulario"
- Cuerpo (opcional): Proporciona detalles adicionales sobre el commit, explicando el "por qué" detrás del cambio, no solo el "qué". Debe explicar el contexto y la razón de los cambios, especialmente si el título no es suficiente para entender el impacto del commit.Ejemplo: "Se ha añadido validación de formulario para mejorar la captura de datos del usuario y evitar envíos de formularios con campos vacíos."
- Pie de página (opcional): Se utiliza para referenciar IDs de tickets de problemas, id de la tarjeta del backlog o tareas relacionadas. Ejemplo: "Ref: TICKET-1234"
#### Buenas prácticas
- Usa el modo imperativo en el título: Escribe el mensaje como si le dieras una orden o instrucción al código para cambiar su comportamiento. Ejemplo: "Corregir error de carga en la página de inicio" en lugar de "Corregido error..." o "Corrigiendo error...".
- Capitaliza la primera letra del título: No agregues punto al final del título.
- Envuelve el cuerpo a 72 caracteres: Esto mejora la legibilidad en diversas herramientas.
- Usa el cuerpo para explicar el "por qué": Mientras que el título se enfoca en el "qué" se ha cambiado, el cuerpo debe explicar el contexto y las razones detrás del cambio.
- Referencia IDs de issues o tickets cuando sea relevante: Esto ayuda a rastrear la relación entre el trabajo realizado y las tareas o bugs documentados.
#### Ejemplos
1. Crear una Nueva Sección de la Página

> Añadir sección de testimonios al sitio
> Se ha incluido una nueva sección en la página principal para mostrar los testimonios de los usuarios, mejorando así la credibilidad y confianza hacia nuestro servicio.

2. Corregir/Modificar un Aspecto Visual/Diseño

> Actualizar estilos del formulario de contacto
> Se han modificado los estilos del formulario de contacto para seguir las nuevas directrices de diseño de la marca, incluyendo colores y tipografías actualizadas.

3. Rehacer una Sección Completa

> Rehacer la sección de preguntas frecuentes
> La sección de preguntas frecuentes ha sido completamente reestructurada para mejorar la usabilidad y facilitar la búsqueda de información por parte de los usuarios.

4. Arreglar un Bug de Código

> Corregir error en la carga de imágenes
>Se ha solucionado un problema por el cual las imágenes no se cargaban correctamente en la sección de galería debido a un error en el path de los archivos.

5. Añadir Nuevas Características o Funcionalidades

> Implementar búsqueda en el sitio
> Se ha añadido una función de búsqueda que permite a los usuarios encontrar rápidamente contenido relevante en el sitio, utilizando una barra de búsqueda en el encabezado.

6. Agregar Documentos/Imágenes

> Añadir nuevas imágenes al catálogo de productos
> Se han incluido imágenes actualizadas para la colección de otoño en el catálogo de productos, mejorando la presentación de los artículos disponibles.

7. Ejemplo con pie de pagina

> Añadir validación de formulario de contacto
>Se implementa una validación básica en el formulario de contacto para
asegurar que todos los campos requeridos estén presentes antes de enviar.
Esto mejora la experiencia del usuario evitando errores de envío.
>Ref: TICKET-1234


## Futuros cambios
Como el proyecto tiene un aire de escalabilidad, lo que me gustaría es que esta sea una base sólida primero de mis conocimientos y habilidades pero tambien de oprtunidad de negocio por lo que no estaría mal aplicar más roles, personalizacion de usuarios o que contemple interacciones de usuarios como por ejemplo valoraciones, likes, favoritos etc.
Para futuros proyectos hacerlo con typescript.


## Paginas
### auth:
- login user
- register user/client
- register user/seller

### stock:
- category
- detail

### user/client
- cart
- profile
- purchases
- purchase detail

### user/seller
- profile
- Images list
- image detail
- sales
- upload image
- update image

### user/admin
- images/ category - search
- image detail
- set image
- users - search
- user detail
- update user
- create user/admin
- purchases - search
- purchase detail
- set purchase
- upload image
- upload user
- upload purchase



