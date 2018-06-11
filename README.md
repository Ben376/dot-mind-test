#Durée: 2h 
 
Ne pas terminer entièrement n’est pas pénalisant, il vaut mieux un code propre qui 
correspond à 90% de l’objectif que 100% de code à revoir. 
Il n’y a pas de bonne ou mauvaise réponse, ce test permet d’évaluer tes 
connaissances sur la base de React.
 
#Spécifications 
➔ Créer un ​ repository​ gratuit sur Github / GitLab / Bitbucket 
➔ Utiliser c
reate-react-app​ (​https://github.com/facebook/create-react-app​) 
➔ Ne pas utiliser de librairies externes​ .  
 
#Objectifs 
 
À l’aide du fichier JSON ​suivant​ réaliser une application React composée de deux 
parties: 
➔ Une barre de recherche 
➔ Une liste d’image (sous forme de grille)  
 
Par défaut toutes les images sont visibles (trié par ​ index ​ si il n’y pas de b
ookmark​ ). 
Affichez le nom de l’utilisateur en dessous de l’image. Simulez une attente (comme 
un retour d’api) avant l’affichage de la liste (de préférence avec un message stipulant 
que l’application charge). 
 
À la recherche (par la clé ​ username ​ du JSON), la liste s’actualise automatiquement 
pour afficher seulement les résultats correspondants.  
 
Au ​ clic​ sur une image, elle se sauvegarde en ​ localStorage o
u au contraire se 
supprime si elle était déjà enregistrée. Ajoutez un élément visuel qui montre que ce 
bloc (image + username) est enregistré en local. 
 
À l’actualisation de la page si des images sont sauvegardées, elles doivent 
apparaître en haut de la liste. Le reste étant toujours trié par ​ index​ . 
 
L’utilisation de ​ Redux​ est totalement optionnelle mais pas interdite si vous le 
souhaitez ! 
 
Bon courage ! 