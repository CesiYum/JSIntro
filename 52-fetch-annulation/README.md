# 52 — Annuler une requête

**Notion :** AbortController et AbortError  
**Durée indicative :** 10 à 20 minutes  
**Dépendance aux autres exercices :** aucune

## Situation

Vous travaillez sur une petite fonctionnalité isolée. Tout ce qui est nécessaire se trouve dans ce dossier.

## Consignes

Cliquez sur Charger puis Annuler : la requête reçoit un signal et l’annulation est distinguée d’une erreur réelle.

## Lancer

Lancez `node server.mjs` puis ouvrez `http://localhost:8765`.

## Vérifier

Une annulation en moins de 700 ms affiche « Chargement annulé » ; sinon les 2 produits sont déjà chargés.
