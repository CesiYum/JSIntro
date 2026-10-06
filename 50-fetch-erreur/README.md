# 50 — Traiter une réponse HTTP invalide

**Notion :** HTTP 503, response.ok, catch  
**Durée indicative :** 10 à 20 minutes  
**Dépendance aux autres exercices :** aucune

## Situation

Vous travaillez sur une petite fonctionnalité isolée. Tout ce qui est nécessaire se trouve dans ce dossier.

## Consignes

Appelez /api/produits?erreur=1 et affichez « Erreur HTTP 503 ». Ne vous fiez pas au seul catch pour un code HTTP.

## Lancer

Lancez `node server.mjs` puis ouvrez `http://localhost:8765`.

## Vérifier

Le message « Erreur HTTP 503 » est visible.
