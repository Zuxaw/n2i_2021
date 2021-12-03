# STKS - Pull Stack Developers
## Présente: la Base de Données
## pour les Sauvetages en Mer

<br>

### Lien de l'application Web
> https://nginx-stks-4wwu2rgz4q-ew.a.run.app/
### Documentation
> Consulter les différents fichiers de documentation réalisés par l'équipe.

<br>
<br>

## Contexte
Ce site est une interface visuelle entre l'humain et une base de données répertoriant des informations
sur l'ensemble des sauvetages en mer, les sauveteurs, les personnes sauvées, les bateaux sauveteurs ou
secourus. La communauté est capable de soumettre des demandes d'insertion / de modification des données,
à faire valider par les administrateurs de la base de données.

<br>

## Comprendre le projet
Notre documentation est segmentée en trois parties pour exposer les rôles de chacun dans l'équipe, les
idées de conception autour du sujet de la Nuit et les fonctionnalités du site (pages présentes, détails
des fonctionnalités, les défis sélectionnés...).

<br>

## Utiliser notre base de données
Notre base de données est réalisée sous le modèle NoSQL à l'aide d'un fichier JSON. Ceci nous permet de
garantir le comportement souhaité de compléter les données au fil du temps. Chaque objet est unique et
peut ne pas disposer de toutes les informations que l'on peut normalement renseigner.
> Étant donné qu'elle est mise en ligne sur le service d'hébergement Firebase, le projet utilise une base de données distante et ne peut être simulée localement sans modifier un nombre assez conséquent de lignes de code.

<br>

### Requêtes
Pour faire les requêtes, vous pouvez effectuer des requêtes HTTP GET/POST/DELETE à l'URL suivante:
> https://n2i-2021-a888e-default-rtdb.europe-west1.firebasedatabase.app/\<table\>

<br>
(remplacer <\table\> par le nom d'une table. Se réferer au schéma ci-dessous)

(Pour plus d'informations, consulter la documentation sur les bases de données Firebase)

<br>

![Schéma de la base de données](https://github.com/Zuxaw/n2i_2021/docs/stks-database-models.png)
