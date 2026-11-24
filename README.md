# Silksong Tracker

Checklist interattiva di **Hollow Knight: Silksong**: spunta abilità, Silk Skills, Crest, strumenti, potenziamenti, Mask Shard, Spool Fragment, Memory Locket, Craftmetal, boss, wishes, pulci, Bellway/Ventrica, mappe, reliquie, Hunter's Journal e achievement.

- Percentuale di completamento calcolata con le regole del 100% del gioco (varianti come Curveclaw/Curvesickle contano una volta; 4 Mask Shard = 1%, 2 Spool Fragment = 1%).
- 4 slot di salvataggio, filtri per Atto, ricerca globale, "Nascondi fatti", modalità Steel Soul.
- Esporta/Importa i progressi (JSON) per passare da un dispositivo all'altro.
- Interfaccia in stile menu d'inventario del gioco: schede a icone, griglia oggetti (grigi finché non li ottieni), riquadro descrizione, vista Griglia/Lista per categoria. Scorciatoie: Q/E per cambiare scheda.
- Su telefono: intestazione compatta, ricerca fissa in alto, filtri e salvataggi nel pulsante Opzioni, barra in basso per cambiare categoria (tocca il nome per l'elenco completo), dettagli in un pannello dal basso che si chiude trascinando giù.
- Icone, sprite e ornamenti caricati direttamente da hollowknight.wiki (nessuna immagine copiata nel repository). Se un'immagine non si carica compare un rombo al suo posto.
- Nessun build, nessuna dipendenza: HTML + JS statico.

## Pubblicare su GitHub Pages

1. Crea un repository (es. `silksong-tracker`) e carica `index.html`, `data.js`, `images.js`, `README.md`, `.nojekyll`.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, cartella `/ (root)`.
3. Dopo un minuto il sito è su `https://<utente>.github.io/silksong-tracker/`.

## Modificare i contenuti

Tutti i dati sono in `data.js`, una riga per voce:

```
Nome | Dove / come ottenerlo | Atto | flag
```

Flag: `pct` (vale 1%), `pct:gruppo` (varianti che valgono 1% in tutto), `ss` (solo Steel Soul), `ex:gruppo` (alternative esclusive). Le righe `## Titolo` aprono un sottogruppo.
L'ID di salvataggio deriva dal nome: rinominare una voce ne azzera la spunta (e ne perde l'icona in `images.js`, che usa lo stesso ID).

Fonte dati: [hollowknight.wiki](https://hollowknight.wiki/w/Hollow_Knight:_Silksong). Progetto non ufficiale, non affiliato a Team Cherry.
