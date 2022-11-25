# ComResto 🍱

### Initialisation du projet 

1.  Récupérer le projet sur Github : git clone https://github.com/AlexisLefoul/ComResto.git

2.  Ajouter les dépendances  du Front-End :
```
        - Ouvrez un terminal PowerShell
        - Allez dans le dossier ComResto puis Client : cd ComResto\Client
        - Ajoutez les dépendances via : yarn ou npm i
```       

3.  Ajouter les dépendances  du Back-End :
```   
        - Ouvrez un terminal PowerShell
        - Allez dans le dossier ComResto puis Server : cd ComResto\Server
        - Ajoutez les dépendances via : yarn ou npm i
        
        - Puis Ajoutez "supervisor" en global :
            yarn global add supervisor
```   
4.  Récupérer la base de données :
```   
        - Installez MongoDBCompass ou un lecteur de base de données MongoDB
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
6.  Lancer l'app Web (Info pratique: en admin le logo peu être cliquer) :
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


### Documentation de l'api

1. Lancer le server du projet (étape 5)
2. Dans un navigateur mettez cette url : ``` localhost:3000/docs ```


###### Alexis Lefoul
