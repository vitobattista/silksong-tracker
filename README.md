# Silksong Tracker

Checklist interattiva di **Hollow Knight: Silksong**: spunta abilità, Silk Skills, Crest, strumenti, potenziamenti, Mask Shard, Spool Fragment, Memory Locket, Craftmetal, boss, wishes, pulci, Bellway/Ventrica, mappe, reliquie, Hunter's Journal e achievement.

- Percentuale di completamento calcolata con le regole del 100% del gioco (varianti come Curveclaw/Curvesickle contano una volta; 4 Mask Shard = 1%, 2 Spool Fragment = 1%).
- 4 slot di salvataggio, filtri per Atto, ricerca globale, "Nascondi fatti", modalità Steel Soul.
- Esporta/Importa i progressi (JSON) per passare da un dispositivo all'altro.
- Interfaccia in stile menu d'inventario del gioco: schede a icone, griglia oggetti (grigi finché non li ottieni), riquadro descrizione, vista Griglia/Lista per categoria. Scorciatoie: Q/E per cambiare scheda.
- Su telefono: intestazione compatta, ricerca fissa in alto, filtri e salvataggi nel pulsante Opzioni, barra in basso per cambiare categoria (tocca il nome per l'elenco completo), dettagli in un pannello dal basso che si chiude trascinando giù.
- Icone, sprite e ornamenti caricati direttamente da hollowknight.wiki (nessuna immagine copiata nel repository). Se un'immagine non si carica compare un rombo al suo posto.
- Nessun build, nessuna dipendenza: HTML + JS statico.

## Mappe e guide

- **Dove si trova**: nel riquadro dettagli ogni voce che ce l'ha mostra la mappina della wiki con il punto cerchiato (oltre 600 voci, `maps.js`).
- **Mappa completa dell'area**: pulsante sotto la mappina, ricavato dall'area citata nella descrizione; in ogni categoria c'è anche **Mappa di Pharloom**.
- Le mappe si aprono a schermo intero: tocca o clicca per ingrandire, poi trascina per spostarti.
- **Guide passo passo** (`guides.js`) per tutti gli obiettivi della storia, i finali, i wish più articolati e alcune abilità: le voci con guida hanno il tag *Guida*.

## Salvataggio su GitHub (sincronizzazione)

Il pulsante **Accedi** (su telefono dentro **Opzioni**) collega l'app a un **Gist privato** del tuo account GitHub, dove vengono salvati tutti e 4 gli slot.

1. Crea un token classico con il solo permesso `gist`: https://github.com/settings/tokens/new?scopes=gist&description=Silksong%20Tracker (Expiration: *No expiration* o una scadenza lunga).
2. Incollalo nella finestra di accesso. Al primo accesso l'app crea il Gist `silksong-tracker.json`; sugli altri dispositivi lo ritrova da sola.
3. Ogni modifica si salva un istante dopo; all'apertura e al ritorno sull'app i progressi si aggiornano. Per ogni slot vince la versione più recente; se al primo accesso ci sono progressi sia online sia sul dispositivo, puoi scegliere quali tenere o unirli.

Il token resta solo nel browser (localStorage) e può accedere soltanto ai tuoi Gist. Per revocarlo: GitHub → Settings → Developer settings → Personal access tokens. Senza rete l'app continua a salvare in locale e sincronizza appena torna la connessione.

## Pubblicare su GitHub Pages

1. Crea un repository (es. `silksong-tracker`) e carica `index.html`, `data.js`, `images.js`, `maps.js`, `guides.js`, `README.md`, `.nojekyll`.
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
