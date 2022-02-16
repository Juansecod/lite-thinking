
#  Instalacion
## Clonacion del repositorio
Clona el repositorio en tu maquina, para esto abrimos git bash y pegamos el siguiente comando(Tambien es valido descargar el archivo .zip y extraerlo)
    ```sh
    git clone https://github.com/Juansecod/lite-thinking.git
    cd lite-thinking
    ```
## Python & Django
Se require instalar las dependencias usadas como lo es Django entre otros, para ello ingresamos el siguiente comando en la terminal.
```sh
    pip install -r requirements.txt
```
## Node & React
Para poder ejecutar nuestro cliente requeriremos de instalar las dependencias al igual que hicimos con python, pero en este caso se usa el gestor de paquetes de javascript npm.
```sh 
    cd project/client
    npm install
```

# Inicializacion
Para poder ejecutar nuestro servidor por primera vez requeriremos de ejecutar los siguientes comandos para generar ciertos archivos necesarios.
```sh
    cd project
    manage.py makemigrations
    manage.py migrate

    cd client
    node_modules/.bin/webpack --config webpack.local.config.js

    cd..
    manage.py collectstatics
```

# Ejecucion de la aplicacion
Para poder ejecutar nuestra aplicacion procederemos a montar el servidor de desarrollo de webpack en una terminal.
```sh
    cd project/client
    npm run start
```
Luego de tener en ejecucion este servidor, ejecutamos nuestro servidor Django en otra terminal, de suma importancia que sea diferente a la de webpack, esto para no finalizar el proceso.
```sh
    cd project
    manage.py runserver
```
Hecho esto, ya podras ingresar a la aplicacion en la url: `localhost:8000/main` en tu navegador.

# Modelos
Aqui encontraras los modelos de las tablas de la base de datos
## Empresas
| Nombre campo  | Tipo   | Requerido  | AutoIncrementable | Unico   | Ejemplo           |
|---------------|--------|------------|-------------------|---------| ----------------- |
| id(pk)        | int    | True       | True              | True    | 1                 |
| nombre        | varchar| True       | False             | False   | Lite Thinking     |
| NIT           | varchar| True       | False             | True    | 123.456.789-1     |
| direccion     | varchar| False      | False             | False   | Carrera 18 #10-40 |
| telefono      | int    | False      | False             | False   | 1234567890        |
