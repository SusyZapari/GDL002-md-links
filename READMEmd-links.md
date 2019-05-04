##Md-links

####Qué es Markdown

Como explica "John Gruber":http://daringfireball.net/projects/markdown/, uno de sus creadores, Markdown es realmente dos cosas: por un lado, el lenguaje; por otro, una herramienta de software que convierte el lenguaje en HTML válido. 


El objetivo de este proyecto es generar una librería, para esto antes de las historias de usuario y los DoD se necesitaba comprender el flujo por lo que se diseño un diagrama de flujo de explica la ruta a seguir.

En seguida se implementaron los test antes de la funcionalidad del proyecto, como buena práctica y con la finalidad de que el proyecto tenga un orden y del mismo modo que a futuro si existieran bug cualquier persona pueda repararlo de forma sencilla. Por otro lado, la planificación se hizo con el uso de la herramienta que tiene gitHub.

El diagrama de flujo se anexa como archivo independiende en pdf al proyecto.


####Argumentos

-path: Ruta absoluta o relativa al archivo o directorio.
-options: Un objeto con las siguientes propiedades:
-validate: Booleano que determina si se desea validar los links encontrados.

####Valor de retorno

href: URL encontrada.
text: Texto que aparecía dentro del link.
file: Ruta del archivo donde se encontró el link.




