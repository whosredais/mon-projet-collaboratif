# Mon projet collaboratif

Lab « Workflow Git Collaboratif : de la branche au Pull Request », réalisé par Mohamed Reda Boujir.

## Exécuter

```sh
node app.js
```

Résultat :

```text
Bonjour, Alice !
Nombre de mots : 3
```

`saluer(nom)` construit une salutation personnalisée. `compterMots(texte)` reprend le compteur simple de l'énoncé : les mots sont séparés par un espace. Les chaînes vides et espaces multiples nécessiteraient une amélioration pour un usage général.

## Pull Requests et revue

- [PR #1 — compteur](https://github.com/whosredais/mon-projet-collaboratif/pull/1) : fonctionnalité développée dans la copie Dev 2 et intégrée par un merge commit.
- [PR #2 — salutation](https://github.com/whosredais/mon-projet-collaboratif/pull/2) : ajout de saluer, conflit résolu avec main, commentaire de revue traité par un commit `docs:` séparé.

Deux copies locales représentent les développeurs. Le scénario utilise un seul compte GitHub : les revues sont explicitement des auto-revues, conformément à l'alternative en solo du lab. Elles ne constituent pas des approbations par un second utilisateur ; GitHub interdit à un auteur d'approuver sa propre PR.

## Synchronisation et conflit réels

1. Initialisation locale, branche main, remote origin et récupération du README GitHub.
2. Ajout de app.js, puis création de feature/salutation et feature/compteur depuis le même état de main.
3. `git fetch origin` dans Dev 1 : la branche distante compteur apparaît, sans changer HEAD ni app.js.
4. Fusion de la PR compteur dans main.
5. `git checkout main` et `git pull origin main`, puis retour sur feature/salutation et `git merge main` : conflit réel dans app.js.
6. Suppression des marqueurs et conservation des deux fonctions, puis commit de résolution à deux parents.
7. Création de la PR salutation, auto-revue avec commentaire en ligne, ajout du commentaire dans le code et validation.
8. Fusion de la PR salutation par merge commit, synchronisation des deux copies et nettoyage des branches fusionnées.

Le compteur est intégré avant la salutation pour compléter un chaînon manquant dans les captures : tant que main n'a pas évolué, `git merge main` ne peut pas provoquer le conflit montré.

## Vérifier

```sh
git status
git branch -a
git log --oneline --graph --all
git log --merges --format="%h %p %s"
node app.js
```

Les validations fonctionnelles contrôlent les salutations Alice/Bob, le comptage de trois mots ou d'un mot, les deux affichages finaux et l'absence de marqueurs de conflit.

## Publication et preuves

Les commandes locales init, branch, clone, fetch, pull, merge, add, commit et nettoyage sont exécutées sur le PC. La publication des commits et les opérations de PR sont réalisées avec le connecteur GitHub ; aucun `git push` vers GitHub n'est prétendu exécuté, car Git ne dispose pas ici d'une authentification locale utilisable.

Après publication par API, les références locales sont alignées sur les commits GitHub après vérification de l'égalité des arbres. Les commits locaux originaux sont conservés dans les sauvegardes par des tags `execution-locale-*`. Les journaux, la version contenant le conflit, les tests et les sauvegardes Git sont livrés dans l'archive du lab.
