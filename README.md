# ComResto Alexis Lefoul

![This is an image](Client\src\assets\logo.png)

1.  Récupérer le projet sur Github : git clone https://github.com/AlexisLefoul/ComResto.git

2.  Ajouter les dépendances  du Front-End :
```
        - Ouvrez un terminal PowerShell
        - Allez dans le dossier ComResto puis Client : cd ComResto\Client
        - Ajoutez les dépendances  :
            yarn add    axios
                        bcryptjs
                        latinize"
                        react
                        react-dom
                        react-router-dom
                        react-select
                        react-token-auth
```       

3.  Ajouter les dépendances  du Back-End :
```   
        - Ouvrez un terminal PowerShell
        - Allez dans le dossier ComResto puis Server : cd ComResto\Server
        - Ajoutez les dépendances  :
            yarn add    bcrypt
                        express
                        mongoose
                        swagger-jsdoc
                        swagger-ui-express
                        typescript
        - Puis Ajoutez "supervisor" en global :
            yarn global add supervisor
```   
4.  Récupérer la base de données :
```   
        - Installez MongoDBCompass si vous ne l'avez pas déjà
        - Créez nouvelle Database, du nom : Gestion_stock
        - Insérez les collections situées dans le dossier Bdd du projet
```   
5.  Lancer le Server :
```   
        - Ouvrez un nouveau terminal GitBash
        - Allez dans le dossier ComResto puis Server : cd ComResto\Server
        - Lancez la compilation : sh compile.sh

        - Allez dans le dossier ComResto puis Server : cd ComResto\Server
        - Ouvrez un nouveau terminal GitBash
        - Lancez le process node : Supervisor app
```   
6.  Lancer l'app Web :
```   
        - Dans un terminal PowerShell
        - Allez dans le dossier ComResto puis Client : cd ComResto\Client
        - Lancez l'application : yarn dev
        - Cliquez sur le lien qui se trouve dans le terminal
```   
7. Connexion sur l'application
```   
        - Veuillez contacter l'adresse suivante pour les identifiants : comresto@support.com
        - Après avoir renseigné les informations, faire un double click sur le bouton "Connexion"
```   

