/* Hollow Knight — guide passo passo (riassunte in italiano dalle pagine di hollowknight.wiki).
   Chiave = ID della voce. pre = requisiti, steps = passaggi, tip = nota.
   I nomi propri sono in inglese e vengono tradotti dal glossario in it.js. */
window.HK_GUIDE = {

/* ---------- STORIA ---------- */
"story-city-of-tears": {
  pre: "Serve il City Crest, lasciato dal False Knight.",
  steps: [
    "Dalle Forgotten Crossroads scendi verso le Fungal Wastes (passaggio a sud-ovest, oltre l'acido serve Mothwing Cloak o il percorso di Greenpath).",
    "Attraversa le Fungal Wastes verso est fino al grande cancello con lo stemma.",
    "Usa il City Crest sul cancello: si apre l'ascensore per la City of Tears.",
    "Appena entrato, la Stag Station dei City Storerooms è a nord-ovest: aprila per viaggiare più comodamente."
  ],
  tip: "La pioggia della City of Tears nasconde molti passaggi segreti: colpisci le pareti sospette."
},
"story-dream-nail": {
  pre: "Si sblocca raggiungendo le Resting Grounds (dal Blue Lake o dalla Stag Station).",
  steps: [
    "Nelle Resting Grounds avvicinati alla zona del Seer, a ovest della Stag Station.",
    "Entri automaticamente in un sogno: segui il percorso verso destra e sali.",
    "Sconfiggi il guerriero che sbarra la strada e raccogli il Dream Nail.",
    "Torna dal Seer: d'ora in poi consegna Essence con il Dream Nail per ottenere ricompense (Hallownest Seal, Pale Ore, Vessel Fragment, Mask Shard, Arcane Egg)."
  ],
  tip: "Con il Dream Nail puoi leggere i pensieri dei nemici e aprire i sogni dei Sognatori."
},
"story-monomon-the-teacher": {
  pre: "Servono il Dream Nail e l'Isma's Tear o un percorso dalla Fog Canyon con le Monarch Wings consigliate.",
  steps: [
    "Raggiungi il Teacher's Archives, nella parte est della Fog Canyon.",
    "Attraversa il laboratorio fino alla sala di Uumuu.",
    "Sconfiggi Uumuu: Quirrel lo immobilizza per te se lo hai incontrato spesso, altrimenti colpiscilo quando il nucleo è scoperto (Spell e Nail).",
    "Entra nel vaso di Monomon e colpiscila con il Dream Nail: affronta il sogno e distruggi il sigillo."
  ],
  tip: "Ogni Sognatore vale l'1% e ti dà Essence."
},
"story-lurien-the-watcher": {
  pre: "Serve il Dream Nail.",
  steps: [
    "Sali al Watcher's Spire, nella parte est della City of Tears (accesso dal grande ascensore).",
    "Supera la sala dei Watcher Knights: sono sei, ma ne affronti due alla volta; usa le Spell.",
    "Prosegui fino in cima, dove Lurien dorme guardando la città con il telescopio.",
    "Colpiscilo con il Dream Nail e completa il sogno."
  ],
  tip: "Nella stessa torre trovi anche un Hallownest Seal."
},
"story-herrah-the-beast": {
  pre: "Serve il Dream Nail. Consigliati Monarch Wings e Crystal Heart.",
  steps: [
    "Entra in Deepnest e cerca il Beast's Den, al centro-est della zona.",
    "Nella tana di Herrah, la porta d'ingresso diventa una trappola: sali verso l'alto evitando le Stalking Devout e i Little Weaver.",
    "Raggiungi il letto di Herrah e colpiscila con il Dream Nail."
  ],
  tip: "In Deepnest la Lumafly Lantern è indispensabile: alcune zone sono completamente buie."
},
"story-black-egg-temple": {
  pre: "Servono tutti e tre i Sognatori (Monomon, Lurien, Herrah).",
  steps: [
    "Dopo l'ultimo Sognatore il gioco ti riporta nel Black Egg Temple con una cutscene.",
    "Il sigillo si spezza: entra quando sei pronto (non si torna indietro dopo la battaglia).",
    "Prima di entrare valuta di ottenere il Void Heart e le Awoken Dream Nail per i finali alternativi."
  ]
},
"story-ending-the-hollow-knight": {
  steps: [
    "Entra nel Black Egg Temple dopo aver distrutto i Sognatori.",
    "Sconfiggi The Hollow Knight senza il Void Heart equipaggiato.",
    "Il Cavaliere prende il suo posto nel sigillo: è il finale base."
  ],
  tip: "Dopo i titoli di coda il file di salvataggio resta giocabile, con un nuovo Hollow Knight dentro il Tempio."
},
"story-ending-sealed-siblings": {
  pre: "Serve il Void Heart (Kingsoul completo + Birthplace).",
  steps: [
    "Completa il Kingsoul: metà dalla White Lady nei Queen's Gardens, metà in fondo al White Palace.",
    "Con il Kingsoul equipaggiato scendi nell'Abyss e attraversa il Birthplace: il Kingsoul diventa Void Heart.",
    "Sconfiggi The Hollow Knight con il Void Heart equipaggiato.",
    "Se Hornet è con te la sigillatura avviene insieme: finale Sealed Siblings."
  ],
  tip: "Hornet compare durante la battaglia solo se l'hai incontrata nel Cast-Off Shell (Kingdom's Edge) con il King's Brand."
},
"story-ending-dream-no-more": {
  pre: "Servono il Void Heart e l'Awoken Dream Nail (1800 Essence al Seer).",
  steps: [
    "Affronta The Hollow Knight con il Void Heart equipaggiato.",
    "Durante la battaglia Hornet interviene e lo immobilizza.",
    "In quel momento colpisci The Hollow Knight con il Dream Nail: entri nel sogno.",
    "Sconfiggi The Radiance."
  ],
  tip: "È il finale 'vero' del gioco base e sblocca la Steel Soul Mode."
},
"story-ending-embrace-the-void": {
  pre: "Contenuto Godmaster. Servono i quattro Pantheon e il Pantheon of Hallownest.",
  steps: [
    "Ottieni il Godtuner dal Godseeker (Junk Pit, Royal Waterways) usando una Simple Key.",
    "Completa i Pantheon of the Master, Artist, Sage e Knight a Godhome.",
    "Rompi le quattro porte con i sigilli per sbloccare il Pantheon of Hallownest (oppure completa tutti i 43 boss nella Hall of Gods).",
    "Completa il Pantheon of Hallownest e sconfiggi Absolute Radiance."
  ],
  tip: "Il pantheon finale è lungo: usa amuleti che curano (Quick Focus, Deep Focus, Shape of Unn) o di danno (Quick Slash, Unbreakable Strength)."
},
"story-ending-delicate-flower": {
  pre: "Contenuto Godmaster. Serve il Delicate Flower consegnato al Godseeker.",
  steps: [
    "Ottieni il Delicate Flower dalla Grey Mourner (Resting Grounds).",
    "Portalo al Godseeker senza subire danni: il fiore si rompe al primo colpo (vedi la guida del Delicate Flower).",
    "Completa il Pantheon of Hallownest e sconfiggi Absolute Radiance.",
    "Il finale cambia leggermente: è la variante 'Delicate Flower' di Embrace the Void."
  ]
},
"story-ending-passing-of-the-age": {
  pre: "Lifeblood/Hidden Dreams: un'opzione per qualunque finale.",
  steps: [
    "Trova Mister Mushroom in tutte le sette apparizioni, nell'ordine: Fungal Wastes, Kingdom's Edge, Deepnest, Mantis Village, Ancient Basin, Fog Canyon (Overgrown Mound), Howling Cliffs.",
    "Ogni volta parlagli: scompare e riappare nel luogo successivo.",
    "Dopo l'ultimo incontro, la scena post-credits di qualunque finale cambia."
  ],
  tip: "Per raggiungere alcune apparizioni servono Monarch Wings e Crystal Heart."
},

/* ---------- EQUIPAGGIAMENTO ---------- */
"equipment-awoken-dream-nail": {
  steps: [
    "Raccogli Essence colpendo i Whispering Root, sconfiggendo i Dream Warrior e i boss nei sogni, e con il Dream Nail sui nemici sognanti.",
    "Torna dal Seer nelle Resting Grounds: a 1800 Essence il Dream Nail si risveglia."
  ],
  tip: "L'Awoken Dream Nail consente di entrare nei sogni di molti NPC e serve per il finale Dream No More e per il White Palace."
},
"equipment-king-s-brand": {
  pre: "Consigliati Monarch Wings e Crystal Heart.",
  steps: [
    "Raggiungi la parte più a est di Kingdom's Edge: il Cast-Off Shell.",
    "Affronta Hornet Sentinel: è più aggressiva di Hornet Protector e usa trappole di filo.",
    "Dopo la vittoria scendi nella buca: ottieni il King's Brand."
  ],
  tip: "Il King's Brand ti protegge dalla tempesta di Kingdom's Edge e apre il cancello dell'Abyss per lo Shade Cloak."
},
"equipment-shade-cloak": {
  pre: "Serve il King's Brand.",
  steps: [
    "Scendi nell'Abyss dall'Ancient Basin: il grande cancello si apre grazie al King's Brand.",
    "Raggiungi il punto più profondo e segui le Void Tendrils verso est.",
    "In fondo al percorso raccogli lo Shade Cloak: lo scatto ora attraversa nemici e barriere nere."
  ]
},

/* ---------- AMULETI ---------- */
"charms-kingsoul": {
  steps: [
    "Prima metà: nei Queen's Gardens raggiungi la White Lady (in fondo all'area, attraverso la Tower of Love) e parlale.",
    "Seconda metà: serve l'Awoken Dream Nail. Nelle Palace Grounds (Ancient Basin) colpisci il cadavere al centro con il Dream Nail per entrare nel White Palace.",
    "Attraversa il White Palace (piattaforme, lame rotanti) fino alla sala del trono e raccogli l'altra metà."
  ],
  tip: "Il Kingsoul genera Soul nel tempo; equipaggiato nel Birthplace diventa Void Heart."
},
"charms-void-heart": {
  pre: "Serve il Kingsoul completo, equipaggiato.",
  steps: [
    "Scendi nel punto più basso dell'Abyss (Ancient Basin), oltre il cancello del King's Brand.",
    "Con il Kingsoul equipaggiato entra nel Birthplace, a sinistra dello Shade Cloak.",
    "Assisti al ricordo: il Kingsoul si trasforma nel Void Heart."
  ],
  tip: "Il Void Heart non costa tacche e rende i nemici del Vuoto amichevoli."
},
"charms-grimmchild": {
  pre: "Contenuto Grimm Troupe. Serve il Dream Nail.",
  steps: [
    "Accendi la Nightmare Lantern nella Howling Cliffs: colpisci la lanterna con il Dream Nail. Arriva la Grimm Troupe a Dirtmouth.",
    "Entra nella tenda e parla con Grimm: ricevi il Grimmchild.",
    "Con il Grimmchild equipaggiato raccogli tre fiamme Grimmkin Novice, poi torna da Grimm per il livello 2.",
    "Ripeti con i Grimmkin Master (livello 3, sconfiggi Troupe Master Grimm) e i Grimmkin Nightmare (livello 4)."
  ],
  tip: "Le fiamme compaiono solo con il Grimmchild equipaggiato; la Mappa le segna quando hai la Quill."
},
"charms-carefree-melody": {
  pre: "Alternativa al Grimmchild: si ottiene solo esiliando la Grimm Troupe.",
  steps: [
    "Completa il Rituale fino al livello 3 del Grimmchild (dopo Troupe Master Grimm).",
    "Vai da Brumm nel Distant Village (Deepnest) con il Grimmchild equipaggiato e accetta di esiliare la Troupe.",
    "Brumm ti accompagna a Dirtmouth e la tenda scompare. Visita Nymm a Dirtmouth: ti dà la Carefree Melody."
  ],
  tip: "Scelta definitiva: perdi il Grimmchild e Nightmare King Grimm."
},
"charms-fragile-heart": {
  steps: [
    "Compra Fragile Heart, Fragile Greed e Fragile Strength da Leg Eater (Fungal Wastes).",
    "Gli amuleti fragili si rompono quando muori: Leg Eater li ripara a pagamento.",
    "Con la Grimm Troupe, Divine si accampa a Dirtmouth: portale l'amuleto fragile e paga per renderlo Unbreakable."
  ],
  tip: "Prezzi di Divine: Heart 12000, Greed 9000, Strength 15000 Geo."
},
"charms-grubberfly-s-elegy": {
  steps: [
    "Salva le Grub sparse per Hallownest: le trovi in barattoli, spesso dietro muri segreti.",
    "Torna dal Grubfather (Forgotten Crossroads) per riscuotere le ricompense a 5, 10, 16, 23, 31, 38, 46 Grub.",
    "L'ultima ricompensa (46) è Grubberfly's Elegy."
  ],
  tip: "Grubsong (10 Grub) e la Collector's Map aiutano molto: la mappa mostra le Grub ancora da salvare."
},
"charms-lifeblood-core": {
  pre: "Servono 15 maschere di Lifeblood al momento di aprire la porta.",
  steps: [
    "Raggiungi la porta Lifeblood nell'Abyss (parete ovest, sopra l'Arcane Egg).",
    "Equipaggia Lifeblood Heart, Joni's Blessing e Hiveblood/Lifeblood dei bozzoli per raggiungere 15 maschere blu.",
    "Avvicinati alla porta: si apre e trovi il Lifeblood Core."
  ],
  tip: "Prendi prima l'Arcane Egg nella stanza sotto: è la fonte di Geo più ricca."
},

/* ---------- OGGETTI E MISSIONI ---------- */
"relics-delicate-flower": {
  pre: "Basta raggiungere la Grey Mourner nelle Resting Grounds.",
  steps: [
    "Vai dalla Grey Mourner nella sua casa nelle Resting Grounds (in alto a est) e accetta la missione.",
    "Porta il Delicate Flower fino all'albero nei Queen's Gardens, oltre la Tower of Love: il fiore si rompe se subisci danni, ma puoi viaggiare con le Stag Station.",
    "Percorso consigliato: Stag Station delle Resting Grounds → Stag Station dei Queen's Gardens, poi a piedi verso ovest fino all'albero.",
    "Consegnato il fiore, torna dalla Grey Mourner: ricevi un Mask Shard."
  ],
  tip: "Se il fiore si rompe, tornare dalla Grey Mourner ne fornisce un altro. Con Godmaster puoi consegnarne uno anche al Godseeker e a Elderbug."
},
"relics-arcane-egg-1": {
  steps: [
    "Nell'Abyss, prima di aprire la porta del Lifeblood Core, scendi nella stanza sottostante: lì trovi l'Arcane Egg.",
    "Vendi gli Arcane Egg a Relic Seeker Lemm (City of Tears) per 1200 Geo ciascuno."
  ],
  tip: "Conservalo se vuoi farlo valere più tardi: Lemm compra tutte le reliquie."
},
"relics-rancid-egg": {
  steps: [
    "Raccogli i Rancid Egg sparsi (Sly ne vende uno, altri in Greenpath, Royal Waterways, Deepnest, Queen's Gardens, Crystal Peak).",
    "Portali a Confessor Jiji (casa a est di Dirtmouth, serve una Simple Key).",
    "Jiji li usa per richiamare la tua Shade: recuperi Geo e Soul senza tornare dove sei morto."
  ]
},
"relics-collector-s-map": {
  steps: [
    "Raggiungi la Tower of Love nella City of Tears: serve la Love Key (Queen's Gardens).",
    "Sconfiggi The Collector in cima alla torre.",
    "Raccogli la Collector's Map: le Grub mancanti compaiono sulla mappa."
  ]
},

/* ---------- BOSS E SFIDE ---------- */
"bosses-nightmare-king-grimm": {
  pre: "Contenuto Grimm Troupe: serve il Grimmchild al livello 3.",
  steps: [
    "Raccogli tutte le fiamme Grimmkin Nightmare (Kingdom's Edge, Hive, Deepnest).",
    "Torna nella tenda e fai dormire Grimm: con il Dream Nail entri nel suo incubo.",
    "Sconfiggi Nightmare King Grimm: il Grimmchild arriva al livello 4."
  ],
  tip: "Alternativa esclusiva: esiliare la Troupe con Brumm (Banishment). Conta come la stessa voce del completamento."
},
"trials-banishment": {
  steps: [
    "Con il Grimmchild livello 3 vai da Brumm nel Distant Village (Deepnest).",
    "Accetta di distruggere la Troupe: Brumm ti segue fino alla Nightmare Lantern di Howling Cliffs.",
    "La Troupe scompare: ottieni la Carefree Melody da Nymm a Dirtmouth."
  ]
},
"bosses-grey-prince-zote": {
  pre: "Serve aver salvato Zote due volte (Greenpath e Deepnest) e la Colosseum.",
  steps: [
    "Salva Zote dal Vengefly King in Greenpath e da Deepnest (ragnatele del Distant Village).",
    "Trovalo poi nella Colosseum of Fools, dove combatte. Bretta, salvata nelle Fungal Wastes, inizia a sognarlo.",
    "Nella casa di Bretta a Dirtmouth usa il Dream Nail sulla statua: affronti Grey Prince Zote."
  ],
  tip: "Ogni vittoria aumenta il livello di Zote nel Bretta's dream; sono 10 in tutto."
},
"trials-trial-of-the-warrior": {
  steps: [
    "Raggiungi la Colosseum of Fools a Kingdom's Edge.",
    "Parla con Little Fool e compra il biglietto (o paga il prezzo indicato).",
    "Supera le ondate di nemici: Trial of the Warrior (ricompensa tacca), Conqueror (Pale Ore), Fool (Geo)."
  ],
  tip: "Il Trial of the Fool è tra le sfide più difficili del gioco base: Quick Focus e Shape of Unn aiutano."
},
"trials-godtuner": {
  pre: "Contenuto Godmaster. Serve una Simple Key.",
  steps: [
    "Scendi nel Junk Pit (Royal Waterways, sotto l'Isma's Grove) e usa la Simple Key sul bozzolo del Godseeker.",
    "Il Godseeker ti dà il Godtuner e apre Godhome.",
    "Nella Hall of Gods sconfiggi i boss in Attuned, Ascended e Radiant per le ricompense."
  ]
},
"trials-pantheon-of-hallownest": {
  pre: "Completa i Pantheon of the Master, Artist, Sage e Knight.",
  steps: [
    "Con i quattro Pantheon completati, apri le porte sigillate in fondo a Godhome.",
    "Il Pantheon of Hallownest contiene quasi tutti i boss, senza panchine intermedie.",
    "Al termine affronti Absolute Radiance: è il finale Embrace the Void."
  ],
  tip: "I Binding (aculeo, guscio, amuleti, Soul) danno ricompense estetiche ma rendono la prova molto più difficile."
},
"upgrades-pure-nail": {
  pre: "Servono 4000 Geo e 3 Pale Ore.",
  steps: [
    "Trova il Nailsmith nella City of Tears (parte ovest).",
    "Porta il tuo aculeo per gli upgrade: Sharpened, Channelled, Coiled, Pure.",
    "Dopo il Pure Nail il Nailsmith ti chiede di essere colpito: la tua scelta cambia il suo destino (Sheo o morte)."
  ],
  tip: "Pale Ore: Ancient Basin, Seer, Hallownest's Crown, Nosk, Grubfather e Trial of the Conqueror."
}
};
