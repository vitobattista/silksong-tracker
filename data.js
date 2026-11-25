/* Hollow Knight: Silksong — database checklist
   Fonte: hollowknight.wiki (dati raccolti a novembre 2026, patch 1.0.3xxxx).
   Formato per riga:  Nome | Dove / come ottenerlo | Atto | flag
   flag: pct = vale 1% del completamento · pct:gruppo = varianti che valgono 1% in tutto
         ss = solo Steel Soul · ex:gruppo = mutuamente esclusivi
   Le righe "## Titolo" aprono un sottogruppo. */

window.SILKSONG = [
{ id:"story", name:"Storia", icon:"story", desc:"Obiettivi principali (menu Compiti).", text:`
## Atto 1 · Pharloom
SEEK: The Great Citadel | Risali Pharloom fino alla Cittadella. Si attiva parlando con la Chapel Maid | 1
SAVE: The Threadspun Town | Sconfiggi Widow per liberare Bellhart dalla maledizione | 1
OPEN: Grand Gate | Suona i 5 Bellshrine (The Marrow, Far Fields, Greymoor, Bellhart, Shellwood), poi torna al Grand Gate | 1
## Atto 2 · Citadel of Song
SEARCH: Silent Halls | Affronta Lace nelle Choral Chambers | 2
ASCEND: Pharloom's Crown | Esplora la Cittadella e apri la via verso The Cradle | 2
LEARN: Conductor's Melody | Melodia dei Conduttori, nelle High Halls | 2
LEARN: Architect's Melody | Melodia degli Architetti, nel Cogwork Core | 2
LEARN: Vaultkeeper's Melody | Melodia dei Vaultkeeper, nei Whispering Vaults | 2
DEFEAT: Pale Monarch | Sconfiggi Grand Mother Silk | 2
DESTROY: Soul Snare | Dopo il wish Silk and Soul: sconfiggi Grand Mother Silk con il Needolin | 2
## Atto 3 · Abyss
SEEK: After the Fall | Fuggi da The Cradle | 3
SEEK: Awaiting the End | Raggiungi la Ruined Chapel nella Moss Grotto | 3
DEFEAT: Beast in the Bells | Scendi nella Bellway, sconfiggi Bell Eater e salva la Bell Beast | 3
SEEK: The Dark Below | Trova la via per l'Abyss dai Deep Docks (Diving Bell) | 3
ASCEND: Return to Pharloom | Fuggi dall'Abyss | 3
SEEK: Spell Seeker | Torna dagli Snail Shamans nella Ruined Chapel | 3
SEEK: The Old Hearts | Raccogli 3 Old Hearts tra Encrusted, Pollen, Hunter's e Conjoined Heart | 3
CLAIM: Heart of Might | Sconfiggi Crust King Khann (Coral Tower) | 3
CLAIM: Heart of the Woods | Sconfiggi Nyleth (Grand Gate) | 3
CLAIM: Heart of the Wild | Sconfiggi Skarrsinger Karmelita (Far Fields) | 3
DESCEND: Last Dive | Torna nell'Abyss e sconfiggi Lost Lace | 3
## Finali
Ending: Weaver Queen | Sconfiggi Grand Mother Silk e lega il suo potere | 2
Ending: Snared Silk | Sconfiggi Grand Mother Silk intrappolandola con la Soul Snare | 2
Ending: Twisted Child | Sconfiggi Grand Mother Silk mentre sei maledetta (Cursed Crest) | 2
Ending: Sister of the Void | Sconfiggi Lost Lace e libera Pharloom | 3
Ending: Passing of the Age | Esaudisci il wish dell'Herald e finisci il gioco | 3
`},

{ id:"abilities", name:"Abilità", icon:"wing", desc:"Ancestral Arts, mantelli, melodie e poteri.", text:`
## Ancestral Arts
Needolin | Bellhart, dopo aver sconfitto Widow | 1 | pct
Swift Step | Deep Docks | 1 | pct
Cling Grip | Shellwood, dopo Sister Splinter | 1 | pct
Clawline | The Cauldron (Underworks) | 2 | pct
Silk Soar | Weavenest Absolom, nell'Abyss | 3 | pct
Sylphsong | Eva (Weavenest Atla): sblocca 32 slot dei Crest con i Memory Locket | 2 | pct
## Altre abilità
Needle Strike | Blasted Steps | 1 | pct
Drifter's Cloak | Ricompensa del wish Flexile Spines (Seamstress, Far Fields) | 1
Faydown Cloak | Vetta di Mount Fay | 2
Beastling Call | Qualsiasi Bellway, dopo aver salvato la Bell Beast | 3
Elegy of the Deep | Ruined Chapel (Snail Shamans) | 3
Farsight | Weavenest Absolom; montalo nella Bellhome per vedere la % | 3
Everbloom | Fine della Red Memory | 3 | pct
## Silk Hearts
Silk Heart 1 | Sconfiggi la Bell Beast (The Marrow) | 1 | pct
Silk Heart 2 | Sconfiggi The Unravelled (Whiteward) | 2 | pct
Silk Heart 3 | Sconfiggi Lace in The Cradle | 2 | pct
## Melodie del Needolin
Conductor's Melody | Conductor Ballador, High Halls | 2
Architect's Melody | Cogwork Core | 2
Vaultkeeper's Melody | Sacred Cylinder, Whispering Vaults (dopo Trobbio) | 2
`},

{ id:"skills", name:"Abilità di Seta", icon:"spool", desc:"Le 6 abilità di seta, 1% ciascuna.", text:`
Silkspear | Bind a Mosshome (Moss Grotto) | 1 | pct
Thread Storm | Bind a Craw Lake (Greymoor) | 1 | pct
Cross Stitch | Sconfiggi Phantom nell'Exhaust Organ (Bilewater) | 1 | pct
Sharpdart | Bind nel Weavenest Karn (Wormways) | 1 | pct
Rune Rage | Sconfiggi First Sinner (The Slab) | 2 | pct
Pale Nails | Bind del braccio di Grand Mother Silk, The Cradle | 3 | pct
`},

{ id:"crests", name:"Emblemi", icon:"crest", desc:"Sei Crest contano per il 100%.", text:`
Hunter Crest | Equipaggiamento iniziale | 1
Reaper Crest | Chapel of the Reaper, Greymoor | 1 | pct
Wanderer Crest | Chapel of the Wanderer, Bone Bottom (gauntlet di pellegrini) | 1 | pct
Beast Crest | Chapel of the Beast, Hunter's March: sconfiggi la Savage Beastfly | 1 | pct
Witch Crest | Wish Infestation Operation (Yarnaby, Greymoor) | 2 | pct
Architect Crest | Chapel of the Architect, Underworks (serve l'Architect's Key) | 2 | pct
Shaman Crest | Ruined Chapel, Moss Grotto | 3 | pct
Cursed Crest | Wish Rite of Rebirth (Greyroot, Shellwood); non conta per la % | 2
## Evoluzioni e Vesticrest (Eva, Weavenest Atla)
Hunter Crest (Evolved) | Incontra Eva | 1
Vesticrest: slot giallo | Sblocca 12 slot con i Memory Locket | 2
Vesticrest: slot blu | Sblocca 20 slot | 2
Hunter Crest (Fully Evolved) | Sblocca 27 slot | 2
`},

{ id:"tools", name:"Strumenti", icon:"pin", desc:"51 strumenti, 1% ciascuno. Le varianti contano una volta.", text:`
## Strumenti rossi
Straight Pin | The Marrow, nella cella di Grindle | 1 | pct
Threefold Pin | Craw Lake (Greymoor), stanzetta in alto a destra nella grotta | 1 | pct
Sting Shard | Forge Daughter (Deep Docks): 140 rosari + 1 Craftmetal | 1 | pct
Tacks | Wish Roach Guts (Sinner's Road) | 1 | pct
Longpin | Shellwood, sopra l'ingresso di Bellhart, dietro un nido di Wood Wasp | 1 | pct
Curveclaw | Atto 1: Mottled Skarr (Hunter's March) a 140. Atti 2–3: dietro una porta chiusa | 1 | pct:curve
Curvesickle | Atto 3: consegna il Curveclaw allo Skarr Scout del poligono di tiro | 3 | pct:curve
Throwing Ring | Wish Trail's End | 2 | pct
Pimpillo | Banco da lavoro nascosto, nord-ovest di Greymoor (1 Craftmetal) | 1 | pct
Conchcutter | Coral Tower, Sands of Karak | 2 | pct
Silkshot (Forge Daughter) | Ripara il Ruined Tool (Weavenest Murglin) da Forge Daughter: 240 + 1 Craftmetal | 2 | pct:silkshot
Silkshot (Twelfth Architect) | Ripara il Ruined Tool dal Twelfth Architect: 130 + 1 Craftmetal | 2 | pct:silkshot
Silkshot (Original) | Ripara il Ruined Tool al banco di Mount Fay (1 Craftmetal) | 2 | pct:silkshot
Delver's Drill | Tavolo da lavoro a sud-ovest delle Underworks | 2 | pct
Cogwork Wheel | Twelfth Architect: 360 + 1 Craftmetal | 2 | pct
Cogfly | Banco nelle High Halls (1 Craftmetal) | 2 | pct
Rosary Cannon | High Halls, dietro una porta chiusa a est del Forum | 2 | pct
Voltvessels | Memorium, muro nascosto a nord-est | 2 | pct
Flintslate | Deep Docks, oltre la porta della Simple Key | 1 | pct
Flea Brew | Flea Caravan, dopo il wish The Lost Fleas | 1 | pct
Plasmium Phial | Wish Alchemist's Assistant (Wormways) | 1 | pct
Snare Setter | Stanza segreta nel Weavenest Atla; serve per Silk and Soul (non conta per la %) | 2
## Strumenti blu
Druid's Eye | Wish Berry Picking (Moss Druid) | 1 | pct:druid
Druid's Eyes | Porta altre 4 Mossberry al Moss Druid dopo Berry Picking | 1 | pct:druid
Magma Bell | Forge Daughter: 110 + 1 Craftmetal | 1 | pct
Warding Bell | Su un cadavere nei Far Fields | 1 | pct
Pollip Pouch | Wish Rite of the Pollip (Shellwood) | 1 | pct
Fractured Mask | Atto 1: Mottled Skarr a 260. Atti 2–3: accanto al suo cadavere | 1 | pct
Multibinder | Frey (Bellhart) a 880, dopo My Missing Courier | 1 | pct
Weavelight | Weavenest Atla, dopo il doppio Moss Mother | 1 | pct
Sawtooth Circlet | Twelfth Architect: 230 + 1 Craftmetal | 2 | pct
Injector Band | Whiteward | 2 | pct
Spool Extender | Jubilana (Songclave) a 720 | 2 | pct
Reserve Bind | Wish Final Audience (Second Sentinel) | 2 | pct
Claw Mirror | Sconfiggi Trobbio (The Stage) | 2 | pct:mirror
Claw Mirrors | Sconfiggi Tormented Trobbio; sostituisce il Claw Mirror | 3 | pct:mirror
Memory Crystal | Stanza nascosta, sud-ovest di Mount Fay | 2 | pct
Snitch Pick | Grindle (Blasted Steps) a 740 | 3 | pct
Volt Filament | Sconfiggi Voltvyrm (Voltnest) | 2 | pct
Quick Sling | Bilewater, dietro un soffitto distruttibile | 2 | pct
Wreath of Purity | Passaggio segreto nei Putrified Ducts | 2 | pct
Longclaw | Wish Broodfeast (Atto 2) o Runtfeast (Atto 3) | 2 | pct
Wispfire Lantern | Sconfiggi Father of the Flame (Wisp Thicket) | 2 | pct
Egg of Flealia | Fleamaster Mooshka, dopo aver trovato tutte le 30 pulci | 2 | pct
Pin Badge | Wish Fatal Resolve (Pinstress) | 3 | pct
## Strumenti gialli
Compass | Shakra a 70 | 1 | pct
Shard Pendant | The Marrow | 1 | pct
Magnetite Brooch | Pebb (Bone Bottom) a 120, o Grindle a 220 nell'Atto 3 | 1 | pct
Weighted Belt | Atti 1–2: Mort (Pilgrim's Rest) a 160. Atto 3: accanto al suo corpo | 1 | pct
Barbed Bracelet | Sinner's Road | 1 | pct
Dead Bug's Purse | Wormways | 1 | pct:purse
Shell Satchel | Wormways, al posto del Dead Bug's Purse | 1 | pct:purse ss
Magnetite Dice | Atto 1: Lumble the Lucky (5 vittorie in più di lui). Poi accanto al suo corpo | 1 | pct
Scuttlebrace | Twelfth Architect: 140 + 1 Craftmetal | 2 | pct
Ascendant's Grip | Jubilana a 350 | 2 | pct
Spider Strings | Jubilana a 320, dopo The Lost Merchant | 2 | pct
Silkspeed Anklets | Weavenest Cindril, Far Fields | 2 | pct
Thief's Mark | Grindle a 350 | 3 | pct
## Strumenti speciali
Needle Phial | Consegnato durante Alchemist's Assistant e Advanced Alchemy (non conta) | 1
`},

{ id:"upgrades", name:"Potenziamenti", icon:"needle", desc:"Ago, Tool Pouch e Crafting Kit.", text:`
## Ago (Needle) · 4%
Sharpened Needle | Gratis dopo aver sconfitto Widow (Pinmaster Plinney) | 1 | pct
Shining Needle | 1 Pale Oil | 2 | pct
Hivesteel Needle | 1 Pale Oil + 450 rosari | 2 | pct
Pale Steel Needle | 1 Pale Oil + 680 rosari | 3 | pct
## Pale Oil
Pale Oil · Choral Chambers | Nord-est delle Choral Chambers, dalla stanza adiacente nei Whispering Vaults (Cling Grip) | 2
Pale Oil · Great Taste of Pharloom | Ricompensa di Loyal Mergwin (wish Great Taste of Pharloom) | 2
Pale Oil · Ecstasy of the End | Flea Caravan, wish Ecstasy of the End (tutte le pulci, Atto 3) | 3
## Tool Pouch · 4%
Tool Pouch · Mort | Atti 1–2: Mort (Pilgrim's Rest) a 220. Atto 3: Grindle a 220 | 1 | pct
Tool Pouch · Loddie | Atti 1–2: Loddie (The Marrow), prima sfida (dopo SAVE: The Threadspun Town). Atto 3: sul suo tavolo | 1 | pct
Tool Pouch · Nuu | Wish Bugs of Pharloom (Halfway Home) | 1 | pct
Tool Pouch · Mooshka | Fleamaster Mooshka a Fleatopia, dopo aver aiutato la carovana (22 pulci) | 2 | pct
## Crafting Kit · 4%
Crafting Kit · Forge Daughter | Forge Daughter (Deep Docks) a 180 | 1 | pct
Crafting Kit · Creige | Wish Crawbug Clearing (Halfway Home) | 1 | pct
Crafting Kit · Twelfth Architect | Twelfth Architect (Underworks) a 450 | 2 | pct
Crafting Kit · Grindle | Grindle (Blasted Steps) a 700 | 3 | pct
`},

{ id:"masks", name:"Frammenti di maschera", icon:"mask", desc:"20 frammenti: ogni 4 = 1 maschera (1%).", text:`
## Atto 1
Mask Shard 1 | Pebb (Bone Bottom) a 300; nell'Atto 3 Grindle (Blasted Steps) a 320 | 1
Mask Shard 2 | Wormways inferiori da Mosshome, muro distruttibile davanti alla porta della Simple Key | 1
Mask Shard 3 | Passaggio tra The Marrow e Deep Docks (consigliato Cling Grip) | 1
Mask Shard 4 | Sopra la casa della Seamstress, Far Fields (Drifter's Cloak) | 1
Mask Shard 5 | Centro di Shellwood, fine di una sfida di platforming dietro un muro distruttibile | 1
Mask Shard 6 | Weavenest Atla est, dietro un muro distruttibile (Needolin) | 1
## Atto 2
Mask Shard 7 | Jubilana (Songclave) a 750, dopo The Wandering Merchant | 2
Mask Shard 8 | Cogwork Core ovest, dopo il gauntlet (dopo i Cogwork Dancers) | 2
Mask Shard 9 | Puzzle delle casse, Whispering Vaults centrali | 2
Mask Shard 10 | Wish Savage Beastfly | 2
Mask Shard 11 | Skull Cave, Far Fields est (Clawline + Drifter's Cloak) | 2
Mask Shard 12 | Mount Fay sud-ovest, a ovest della panchina (Faydown Cloak) | 2
Mask Shard 13 | The Slab nord-est (Key of Apostate + Faydown Cloak; saltabile con Silk Soar) | 2
Mask Shard 14 | Bilewater est, in fondo a un corridoio pieno di Slubberlug | 2
Mask Shard 15 | Wisp Thicket est (Faydown Cloak) | 2
Mask Shard 16 | Blasted Steps ovest (Clawline + Faydown Cloak; saltabile con Silk Soar) | 2
## Atto 3
Mask Shard 17 | Brightvein (Silk Soar) | 3
Mask Shard 18 | Far Fields est: wish Fastest in Pharloom | 3
Mask Shard 19 | Wish Dark Hearts | 3
Mask Shard 20 | Wish The Hidden Hunter | 3
`},

{ id:"spools", name:"Frammenti di spola", icon:"spool", desc:"18 frammenti: ogni 2 = +1 rocchetto (1%).", text:`
## Atto 1
Spool Fragment 1 | Muro distruttibile in una zona muschiosa sopra Bone Bottom | 1
Spool Fragment 2 | Deep Docks centrali: uscita sud-ovest dalla Forge Daughter, giù per la stanza verticale, primo passaggio a est | 1
Spool Fragment 3 | Greymoor, sopra la panchina di Shakra (Cling Grip) | 1
Spool Fragment 4 | Frey (Bellhart) a 270, dopo My Missing Courier | 1
Spool Fragment 5 | Weavenest Atla: sali la parete est dopo il teletrasporto, poi a ovest verso il primo Marrowmaw (Needolin) | 1
Spool Fragment 6 | The Slab: dalla Bellway sali due livelli a nord, parete ovest della grande stanza (Cling Grip) | 1
## Atto 2
Spool Fragment 7 | In cima al Grand Gate: colpisci la bilancia dal basso per inclinarla | 2
Spool Fragment 8 | Underworks centrali: a sud della Ventrica, poi a ovest oltre il gauntlet | 2
Spool Fragment 9 | Fleamaster Mooshka all'arrivo al Grand Gate (12 pulci + Last Judge sconfitto) | 2
Spool Fragment 10 | Whiteward, sotto l'ascensore (White Key) | 2
Spool Fragment 11 | Cogwork Core inferiore sud-est, oltre un Cogwork Clapper | 2
Spool Fragment 12 | Underworks in basso a destra: a est del Cauldron, giù nel pozzo fino alla stanza col pavimento in fiamme | 2
Spool Fragment 13 | Sherma, dopo Balm for the Wounded (White Key) | 2
Spool Fragment 14 | Jubilana a 500, dopo The Lost Merchant | 2
Spool Fragment 15 | Deep Docks sud-est: apri il cancello con la Clawline (Clawline + Cling Grip) | 2
Spool Fragment 16 | High Halls, punto più alto della stanza verticale sinistra (Faydown + Clawline; saltabile con Silk Soar) | 2
Spool Fragment 17 | Memorium ovest, dal quarto piano (Faydown Cloak + Clawline) | 2
Spool Fragment 18 | Grindle a 680 (Faydown Cloak + Cling Grip) | 3
`},

{ id:"lockets", name:"Medaglioni del ricordo", icon:"locket", desc:"20 medaglioni per espandere i Crest.", text:`
Memory Locket 1 | Hunter's March, sotto la Chapel of the Beast | 1
Memory Locket 2 | Mort a 150 (Atti 1–2) oppure Grindle a 250 (Atto 3) | 1
Memory Locket 3 | Greymoor, a ovest della Bellway | 1
Memory Locket 4 | Wish Volatile Flintbeetles; nell'Atto 3 a terra al Survivor's Camp | 1
Memory Locket 5 | The Marrow, nord-est della Bellway (Cling Grip) | 1
Memory Locket 6 | Wormways sud-ovest, accanto a un grosso cadavere (Simple Key + Cling Grip) | 1
Memory Locket 7 | Frey (Bellhart) a 330, dopo SAVE: The Threadspun Town | 1
Memory Locket 8 | Blasted Steps, stanza sopra la prima panchina (Cling Grip) | 1
Memory Locket 9 | Bilewater, stanza nascosta a nord-ovest della Bellway | 2
Memory Locket 10 | Choral Chambers, sopra la Grand Bellway (dalle Underworks est; dopo Phantom o Trobbio) | 2
Memory Locket 11 | Underworks, falso soffitto sopra le panchine del confessionale | 2
Memory Locket 12 | Deep Docks, a ovest della Diving Bell (Clawline; dopo Signis & Gron) | 2
Memory Locket 13 | Whispering Vaults, sotto l'uscita verso l'esterno | 2
Memory Locket 14 | Sands of Karak, prima grande stanza a sinistra (Clawline) | 2
Memory Locket 15 | Halfway Home (Greymoor), sopra la porta sinistra (Faydown Cloak) | 2
Memory Locket 16 | Memorium, stanza centrale a tema Shellwood sulla sinistra (Faydown Cloak) | 2
Memory Locket 17 | The Slab, grotta-scorciatoia tra Bellway e zone alte (Key of Apostate + Faydown) | 2
Memory Locket 18 | Bilewater, bozzolo distruttibile a ovest della panchina nascosta (Faydown Cloak) | 2
Memory Locket 19 | Bellhart, sopra la Bellhome (Silk Soar) | 3
Memory Locket 20 | Far Fields, a est di Skarrsinger Karmelita (Silk Soar; Skarrgard black-threaded) | 3
`},

{ id:"craftmetal", name:"Metallo artigiano", icon:"ore", desc:"8 pezzi per costruire strumenti.", text:`
Craftmetal 1 | Pebb (Bone Bottom) a 60; nell'Atto 3 Grindle a 120 | 1
Craftmetal 2 | The Marrow nord-est: fai esplodere il tunnel di roccia a ovest dell'ingresso di Hunter's March | 1
Craftmetal 3 | Deep Docks, forziere dietro la porta chiusa (angolo sud-ovest della stanza più bassa) | 1
Craftmetal 4 | Blasted Steps, area nascosta prima del Last Judge: cadi nel buco al centro | 1
Craftmetal 5 | Jubilana a 180, dopo The Lost Merchant | 2
Craftmetal 6 | Wisp Thicket, dietro un soffitto distruttibile (Faydown Cloak) | 2
Craftmetal 7 | Underworks est, in fondo a un tunnel subito a sud della Clawline | 2
Craftmetal 8 | Putrified Ducts, estremo est del Pale Lake | 2
`},

{ id:"bosses", name:"Boss", icon:"skull", desc:"43 boss, 47 contando gli scontri ripetuti.", text:`
## Atto 1
Moss Mother · Ruined Chapel | Ruined Chapel, Moss Grotto. Apre Bone Bottom | 1
Bell Beast | The Marrow. Silk Heart + viaggio in Bellway | 1
Lace · Deep Docks | Deep Docks (o Blasted Steps / Sinner's Road). Bellshrine dei Deep Docks | 1
Fourth Chorus | Far Fields | 1
Skull Tyrant | The Marrow / Bone Bottom. Crown Fragment (Beast Shard nell'Atto 3) | 1
Savage Beastfly · Chapel of the Beast | Chapel of the Beast, Hunter's March. Beast Crest | 1
Moorwing | Greymoor. Accesso a Bellhart o Beast Shard, secondo dove lo affronti | 1
Moss Mother ×2 · Weavenest Atla | Weavenest Atla. Weavelight | 1
Sister Splinter | Shellwood. Accesso al Cling Grip | 1
Widow | Bellhart. Needolin, libera Bellhart | 1
Great Conchflies | Blasted Steps. Accesso a Pinstress e Sands of Karak | 1
Last Judge | Blasted Steps. Accesso alla Cittadella | 1
Phantom | Exhaust Organ, Bilewater. Cross Stitch + via alternativa per la Cittadella | 1
## Atto 2
Cogwork Dancers | Cogwork Core | 2
Trobbio | The Stage. Claw Mirror + accesso alla Vaultkeeper's Melody | 2
Garmond and Zaza | Whispering Vaults. Ti aiutano nel gauntlet delle High Halls (non più disponibili nell'Atto 3) | 2
Lace · Choral Chambers | Choral Chambers (SEARCH: Silent Halls) | 2
Forebrothers Signis & Gron | Deep Docks. Accesso alla Diving Bell | 2
The Unravelled | Whiteward. Silk Heart + Psalm Cylinder | 2
Second Sentinel | High Halls. Reserve Bind (wish Final Audience) | 2
Shakra | Greymoor, dopo il wish Trail's End (non più disponibile nell'Atto 3) | 2
Disgraced Chef Lugoli | Sinner's Road. Pickled Muckmaggot | 2
Groal the Great | Bilewater. Panchina + Seeker's Soul | 2
Savage Beastfly · Far Fields | Far Fields (wish Savage Beastfly). Horn Fragment | 2
Raging Conchfly | Sands of Karak. Accesso a Coral Tower e Conchcutter | 2
Voltvyrm | Voltnest. Volt Filament | 2
Father of the Flame | Wisp Thicket. Wispfire Lantern | 2
First Sinner | The Slab. Rune Rage | 2
Broodmother | The Slab (wish The Wailing Mother). Broodmother's Eye | 2
Summoned Saviour | Bonegrave | 2 | ss
Lace · The Cradle | The Cradle. Silk Heart | 2
Grand Mother Silk | The Cradle. Finali Weaver Queen / Snared Silk / Twisted Child | 2
## Atto 3
Moss Mother · Moss Grotto | Versione black-threaded, senza musica né titolo | 3
Bell Eater | Bellways. Viaggio in Bellway + Beastling Call | 3
Gurr the Outcast | Far Fields. Grass Doll | 3
Lost Garmond | Blasted Steps. Hero's Memento | 3
Pinstress | Mount Fay (wish Fatal Resolve). Pin Badge | 3
Tormented Trobbio | The Stage (solo Atto 3). Dark Mirror / Claw Mirrors | 3
Crawfather | Craw Lake. Craw Memento + Crawbell | 3
Watcher at the Edge | Sands of Karak. Grey Memento | 3
Shrine Guardian Seth | Grand Gate. Accesso al santuario di Nyleth | 3
Nyleth | Grand Gate. Pollen Heart | 3
Crust King Khann | Coral Tower. Encrusted Heart | 3
Skarrsinger Karmelita | Far Fields. Hunter's Heart | 3
Palestag | Lost Verdania. Cinque memory orb | 3
Clover Dancers | Lost Verdania. Conjoined Heart | 3
Plasmified Zango | Wormways | 3
Lost Lace | The Abyss. Finale Sister of the Void | 3
`},

{ id:"wishes", name:"Desideri", icon:"scroll", desc:"Missioni secondarie da NPC e Wishwall.", text:`
## Wayfarer
The Lost Fleas | Wishwall di Bone Bottom / Mooshka (The Marrow). Flea Brew | 1
Pinmaster's Oil | Pinmaster Plinney (Bellhart): porta Pale Oil dalla Cittadella. Potenziamento ago | 1
My Missing Courier | Wishwall di Bellhart / Frey: ritrova Tipp. Nuovi oggetti da Frey | 1
My Missing Brother | Wishwall di Bellhart / Tipp: ritrova Pill. Sblocca le Delivery | 2
Balm for the Wounded | Wishwall di Songclave / Sherma. Spool Fragment | 2
The Wandering Merchant | Wishwall di Songclave: ritrova Jubilana nelle Choral Chambers. Apre il suo negozio | 2
The Lost Merchant | Wishwall di Songclave: ritrova Jubilana nel Memorium. Nuovi oggetti | 2
Rite of Rebirth | Greyroot (Shellwood): lega il Twisted Bud. Cursed Crest | 2
Infestation Operation | Yarnaby (Greymoor): Steel Spines da Crull e Benjin. Witch Crest | 2
Trail's End | Wishwall di Bellhart / Shakra: cerca il suo maestro a Bilewater. Throwing Ring | 2
Final Audience | Wishwall di Songclave: segui i segni del Second Sentinel. Reserve Bind | 2
Silk and Soul | Wishwall di Bellhart / Caretaker di Songclave: componenti della trappola. Sblocca DESTROY: Soul Snare | 2
Fatal Resolve | Wishwall di Bellhart / nota nei Blasted Steps: sconfiggi Pinstress su Mount Fay. Pin Badge | 3
Pain, Anguish and Misery | Wishwall di Songclave: torna a The Stage. Dark Mirror | 3
Hero's Call | Wishwall di Bellhart: insetto in pericolo vicino alla Bellway dei Blasted Steps. Hero's Memento | 3
Ecstasy of the End | Wishwall di Bellhart / Mooshka (Fleatopia): record in tutti i Flea Games. Pale Oil | 3
## Gather
Berry Picking | Wishwall di Bone Bottom / Moss Druid: Mossberry. Druid's Eye | 1
Rite of the Pollip | Greyroot (Shellwood): Pollip Heart dai fiori viola. Pollip Pouch | 1
Silver Bells | Wishwall di Bellhart: Silver Bell nelle bellvein. Rosary Necklace | 1
Alchemist's Assistant | Alchemist Zylotol (Wormways): Plasmium. Plasmium Phial | 1
Great Taste of Pharloom | Loyal Mergwin (Choral Chambers): Mossberry Stew, Vintage Nectar, Courier's Rasher, Pickled Muckmaggot. Pale Oil | 2
Advanced Alchemy | Alchemist Zylotol: Plasmified Blood. Plasmium Gland | 3
## Hunt
Garb of the Pilgrims | Wishwall di Bone Bottom: Pilgrim Shawl. Rosary Necklace | 1
Flexile Spines | Seamstress (Far Fields): Spine Core dagli Hoker. Drifter's Cloak | 1
Volatile Flintbeetles | Wishwall di Bone Bottom: Flintgem dai Flintbeetle (The Marrow). Memory Locket | 1
Crawbug Clearing | Wishwall di Bellhart / Creige: Ragpelt dai Craw. Crafting Kit | 1
Roach Guts | Crull e Benjin (Sinner's Road): Roach Guts. Tacks | 1
Fine Pins | Wishwall di Songclave: Fine Pin dai choirbug. Heavy Rosary Necklace | 2
Cloaks of the Choir | Wishwall di Songclave: Choir Cloak. Heavy Rosary Necklace | 2
Broodfeast | Huntress (Putrified Ducts): 15 Seared, 35 Shredded, 10 Skewered Organ. Longclaw | 2 | ex:feast
Runtfeast | Runt (Putrified Ducts), alternativa a Broodfeast. Longclaw | 3 | ex:feast
Dark Hearts | Wishwall di Bellhart: distruggi le Void Mass. Mask Shard | 3
## Grand Hunt
The Terrible Tyrant | Wishwall di Bone Bottom: Skull Tyrant (The Marrow). Heavy Rosary Necklace | 1
Savage Beastfly | Wishwall di Bellhart: Savage Beastfly (Far Fields). Mask Shard | 2
The Wailing Mother | Wishwall di Songclave: Broodmother (The Slab). Heavy Rosary Necklace | 2
The Hidden Hunter | Wishwall di Bellhart / Gilly: ladro vicino al Bellshrine dei Far Fields. Mask Shard | 3
## Donate
Bone Bottom Repairs | Flick (Bone Bottom): shell shard | 1
A Lifesaving Bridge | Flick: shell shard per il ponte verso Moss Grotto | 1
Restoration of Bellhart | Pavo (Bellhart): rosari | 1
An Icon of Hope | Flick: shell shard per la statua. Hornet Statuette | 2
Bellhart's Glory | Pavo: rosari. Sblocca la Bellhome Key | 2
Building Up Songclave | Caretaker di Songclave: rosari | 2
Strengthening Songclave | Caretaker di Songclave: rosari | 2
## Delivery (Tipp & Pill, Bellhart)
Bone Bottom Supplies | Consegna a Flick (Bone Bottom). 150 rosari | 2
Pilgrim's Rest Supplies | Consegna a Mort (Pilgrim's Rest). 180 rosari | 2
Queen's Egg | Consegna a Styx (Sinner's Road): più Silkeater. Non disponibile in Steel Soul | 2
Songclave Supplies | Consegna al Caretaker (Songclave). 360 rosari | 2
Fleatopia Supplies | Consegna a Mooshka (Fleatopia). 410 rosari | 2
Liquid Lacquer | Consegna al Mask Maker (Mount Fay). 560 rosari | 2
Survivor's Camp Supplies | Consegna a Flick al Survivor's Camp. 180 rosari | 3
## Unici
LEARN: Bugs of Pharloom | Nuu (Halfway Home): compila il Hunter's Journal. Tool Pouch | 1
SPRINT: Fastest in Pharloom | Sprintmaster Swift (Far Fields): tre gare. Rosary Necklace, Beast Shard, Mask Shard | 3
WITNESS: Passing of the Age | Riddle Tablet nei Putrified Ducts (The Herald). Finale Passing of the Age | 3
STEEL: A Vassal Lost | Steel Seer Zi (Blasted Steps). Growstone | 2 | ss
`},

{ id:"fleas", name:"Pulci", icon:"flea", desc:"30 pulci per la Flea Caravan.", text:`
Flea 1 · The Marrow | Platforming dall'inizio della stanza (dopo Bell Beast e il Bellshrine) | 1
Flea 2 · Deep Docks | Muro distruttibile a sinistra della Bellway dei Deep Docks | 1
Flea 3 · Deep Docks | A sinistra dello Swift Step: leva nell'angolo in alto a destra | 1
Flea 4 · Deep Docks | Deep Docks inferiori, protetta da un gauntlet (Clawline) | 2
Flea 5 · Hunter's March | Breve platforming (dopo lo Skarrgard all'ingresso) | 1
Flea 6 · Far Fields | Gabbia sorvegliata da uno Skarr Scout | 1
Flea 7 · Far Fields | Area segreta, non da Pilgrim's Rest (Drifter's Cloak + Cling Grip) | 1
Flea 8 · Wormways | Trasportata da un Aknid: sconfiggilo | 1
Flea 9 · Greymoor | Rimbalza sui palloni lungo la parete destra (dopo il gauntlet di Craw Lake) | 1
Flea 10 · Greymoor | In cima alla torre sinistra (Cling Grip) | 1
Flea 11 · Greymoor (Kratt) | Kratt, NPC che poi si unisce alla carovana (Cling Grip) | 1
Flea 12 · Bellhart | Dopo Sister Splinter, tunnel più alto delle bellvein (Cling Grip) | 1
Flea 13 · Shellwood | Sotto una serie di Gahlia, arrivando dall'alto | 1
Flea 14 · Blasted Steps | In alto nella stanza a sinistra della Bellway (Cling Grip) | 1
Flea 15 · Sinner's Road | Un Muckroach attacca quando ti avvicini | 1
Flea 16 · Bilewater | Dietro un muro distruttibile, sconfiggi due Snitchfly | 2
Flea 17 · Bilewater | A sinistra dell'ingresso superiore dell'Exhaust Organ (dopo la nebbia) | 2
Flea 18 · Bilewater | Sopra la stanza della panchina segreta (Cling Grip) | 2
Flea 19 · Underworks | Dal Wisp Thicket, dietro un soffitto distruttibile (Cling Grip + Faydown) | 2
Flea 20 · Underworks | Oltre la stanza dei Cogwork Hauler | 2
Flea 21 · Choral Chambers | Dopo una sezione di platforming | 2
Flea 22 · Choral Chambers | Muro distruttibile; meccanismo sotto (Drifter's Cloak o rimbalzo sull'ago) | 2
Flea 23 · Memorium (Huge Flea) | Liberala e poi sconfiggila (Faydown Cloak) | 2
Flea 24 · The Slab | Porta coperta di nebbia, la senti abbaiare | 2
Flea 25 · The Slab | Sopra la panchina, stanzetta in alto a sinistra (Faydown Cloak) | 2
Flea 26 · Mount Fay | Congelata nel ghiaccio: colpiscila con l'ago (Cling Grip) | 2
Flea 27 · Sands of Karak | In alto nella stanza, dietro il corallo incrostato a destra | 2
Flea 28 · Putrified Ducts (Vog) | Trainata dai Barnak più platforming | 2
Flea 29 · Whispering Vaults | Lungo platforming dopo un passaggio nascosto (Clawline + Cling Grip) | 2
Flea 30 · Whispering Vaults | In cima alla stanza, spingendo una cassa (Cling Grip) | 2
`},

{ id:"travel", name:"Viaggio", icon:"bell", desc:"Bellway, Ventrica, Bellshrine e Silkeater.", text:`
## Bellway (achievement Connected)
Bellway · Bone Bottom | Disponibile dopo la Bell Beast | 1
Bellway · The Marrow | Disponibile dopo la Bell Beast | 1
Bellway · Deep Docks | 40 rosari | 1
Bellway · Far Fields | 40 rosari | 1
Bellway · Greymoor | 60 rosari | 1
Bellway · Bellhart | 60 rosari | 1
Bellway · Shellwood | 40 rosari | 1
Bellway · Blasted Steps | 60 rosari | 1
Bellway · The Slab | 40 rosari | 1
Bellway · Grand Bellway | 80 rosari | 2
Bellway · Bilewater | 80 rosari | 2
Bellway · Putrified Ducts | 80 rosari | 2
## Ventrica (achievement Transported)
Ventrica · Terminus | Gratis | 2
Ventrica · Memorium | 80 rosari | 2
Ventrica · High Halls | 80 rosari | 2
Ventrica · First Shrine | 80 rosari | 2
Ventrica · Choral Chambers | 80 rosari | 2
Ventrica · Grand Bellway | 80 rosari | 2
Ventrica · Underworks | 80 rosari | 2
## Bellshrine (OPEN: Grand Gate)
Bellshrine · The Marrow | Suonala | 1
Bellshrine · Far Fields | Suonala | 1
Bellshrine · Greymoor | Suonala | 1
Bellshrine · Bellhart | Suonala | 1
Bellshrine · Shellwood | Suonala | 1
## Silkeater
Silkeater 1 · Greymoor | In cima alla torre a ovest dell'Halfway Home | 1
Silkeater 2 · Blasted Steps | A est di dove appare Shakra (non in Steel Soul) | 1
Silkeater 3 · Deep Docks | Stanza a sud-est della panchina della sauna | 1
Silkeater 4 · Bilewater | Dentro l'Exhaust Organ | 1
Silkeater 5 · Whiteward | Al centro | 2
Silkeater 6 · Choral Chambers | A ovest della Grand Bellway | 2
Silkeater 7 · Choral Chambers | A est della sala da pranzo del Great Gourmand | 2
Silkeater 8 · Whispering Vaults | Stanza a nord degli alloggi di Vaultkeeper Cardinius | 2
Silkeater 9 · The Cradle | A sud del Terminus | 2
`},

{ id:"maps", name:"Mappe", icon:"map", desc:"Mappe di ogni area (achievement Cartographer).", text:`
## Da Shakra
Quill | Shakra a 50 (o gratis dalla scrivania di Trobbio) | 1
Mosslands Map | Shakra, 40 | 1
The Marrow Map | Shakra, 50 | 1
Deep Docks Map | Shakra, 50 | 1
Far Fields Map | Shakra, 50 | 1
Wormways Map | Shakra, 70 | 1
Hunter's March Map | Shakra, 70 | 1
Greymoor Map | Shakra, 70 | 1
Bellhart Map | Shakra, 40 | 1
Shellwood Map | Shakra, 70 | 1
Blasted Steps Map | Shakra, 70 | 1
Sinner's Road Map | Shakra, 90 | 1
Mount Fay Map | Shakra, 40 | 2
Sands of Karak Map | Shakra, 90 | 2
Bilewater Map | Shakra, 90 | 2
## Macchine e altre fonti
Grand Gate Map | Macchina-mappa, 40 | 2
Choral Chambers Map | Macchina-mappa, 70 | 2
Whispering Vaults Map | Macchina-mappa, 70 | 2
Whiteward Map | Macchina-mappa, 70 | 2
High Halls Map | Macchina-mappa, 70 | 2
Memorium Map | Macchina-mappa, 70 | 2
Cradle Map | Macchina-mappa, 70 (gratis nell'Atto 3) | 2
Underworks Map | Gratis, da una bacheca | 2
Putrified Ducts Map | Gratis, da una scrivania | 2
Cogwork Core Map | Gratis, da un meccanismo | 2
Slab Map | Gratis, dal guscio di un cadavere (Key of Indolent) | 2
Weavenest Atla Map | Gratis, da una tavoletta | 1
Verdania Map | Gratis, da un accampamento abbandonato | 3
Abyss Map | Gratis, da una tavoletta | 3
`},

{ id:"relics", name:"Reliquie e Mementi", icon:"relic", desc:"Reliquie, cilindri, mementi, cuori e chiavi.", text:`
## Bone Scroll
Bone Scroll · Far Fields | A est della casa della Seamstress, su per una corrente d'aria | 1
Bone Scroll · Greymoor | A est dell'Halfway Home | 1
Bone Scroll · Underworks | Underworks ovest | 2
Bone Scroll · Wisp Thicket | Stanza a est della panchina | 2
## Weaver Effigy
Weaver Effigy · Camora | A ovest di Mosshome, sotto l'ingresso delle Wormways | 1
Weaver Effigy · Keelal | A est della Chapel of the Witch (dopo Rite of Rebirth) | 2
Weaver Effigy · Atla | The Slab, sotto la cella del First Sinner (Key of Apostate) | 2
## Choral Commandment
Choral Commandment · Mosshome | Bordo ovest di Mosshome, dietro un muro distruttibile | 1
Choral Commandment · Whiteward ovest | Lato sinistro della stanza (imboscata di un Dreg Husk) | 2
Choral Commandment · Jubilana | Jubilana a 180, dopo The Lost Merchant | 2
Choral Commandment · Whiteward est | Tra i cadaveri (Silk Soar o salto preciso con Faydown) | 3
## Rune Harp
Rune Harp · Weavenest Atla | Sporgenza in alto a sinistra (Needolin + Cling Grip) | 1
Rune Harp · Weavenest Cindril | Livello inferiore (Needolin, Silkspeed Anklets, Flea Brew) | 2
Rune Harp · High Halls | Stanza a sinistra del Forum (solo Atto 3) | 3
## Arcane Egg
Arcane Egg | Parte alta dell'Abyss | 3
## Cilindri
Psalm Cylinder · Whispering Vaults | Nella stanza di Vaultkeeper Cardinius | 2
Psalm Cylinder · Underworks | Sotto la stanza di The Unravelled | 2
Psalm Cylinder · High Halls | Nord-ovest della Ventrica, nel labirinto di tubi | 2
Psalm Cylinder · Grindle | Grindle a 240 | 3
Psalm Cylinder · Whispering Vaults est | Su per il grande pozzo d'aria, poi a ovest | 2
Sacred Cylinder | Whispering Vaults inferiori, dalle Underworks dopo Trobbio | 2
## Mementi
Sprintmaster Memento | Batti Sprintmaster Swift (Far Fields) quattro volte | 3
Guardian's Memento | Batti tutti i record di Seth nei giochi di Fleatopia | 3
Hero's Memento | Sconfiggi Lost Garmond (Blasted Steps) | 3
Hunter's Memento | Nuu, completando l'intero Hunter's Journal | 3
Grey Memento | Sconfiggi Watcher at the Edge (Sands of Karak) | 3
Surface Memento | Needolin su un cadavere all'estremo est della Nameless Town | 3
Craw Memento | Sconfiggi Crawfather (Craw Lake) | 3
## Old Hearts
Encrusted Heart | Crust King Khann, Coral Tower | 3
Pollen Heart | Nyleth, Grand Gate | 3
Hunter's Heart | Skarrsinger Karmelita, Far Fields | 3
Conjoined Heart | Clover Dancers, Lost Verdania | 3
## Bellhome
Bellhome Key | Dopo il wish Bellhart's Glory (achievement Resident) | 2
Materium | Montalo nella Bellhome | 2
Crawbell | Dopo Crawfather | 3
## Chiavi
Simple Key · Wormways/Deep Docks | Chiavi semplici per le porte comuni (più esemplari nel gioco) | 1
Key of Indolent | The Slab | 2
Key of Heretic | The Slab | 2
Key of Apostate | The Slab | 2
White Key | Accesso al Whiteward | 2
Surgeon's Key | Whiteward: apre la chiusa sotto la sala operatoria | 2
Architect's Key | Apre la Chapel of the Architect (Underworks) | 2
Diving Bell Key | Apre la porta della Diving Bell (Deep Docks) | 3
Craw Summons | Convocazione alla corte dei Craw | 3
`},

{ id:"journal", name:"Diario della cacciatrice", icon:"book", desc:"Voci del diario: il numero indica le uccisioni per completarle.", text:`
## Mosslands e The Marrow
Mossgrub | 25 uccisioni
Massive Mossgrub | 3 uccisioni
Mossmir | 20 uccisioni
Moss Mother | 3 uccisioni
Aknid | 15 uccisioni
Skull Scuttler | 35 uccisioni
Skullwing | 15 uccisioni
Skull Brute | 15 uccisioni
Skull Tyrant | 1 uccisione
Kilik | 25 uccisioni
Beastfly | 30 uccisioni
Savage Beastfly | 2 uccisioni
Caranid | 25 uccisioni
Vicious Caranid | 15 uccisioni
Hardbone Hopper | 20 uccisioni
Hardbone Elder | 10 uccisioni
Tarmite | 10 uccisioni
Mawling | 30 uccisioni
Marrowmaw | 8 uccisioni
Hoker | 15 uccisioni
Flintbeetle | 3 uccisioni · non richiesta per True Hunter
Rhinogrund | 2 uccisioni
Gromling | 25 uccisioni
Grom | 10 uccisioni
Bell Beast | 1 uccisione
## Pellegrini
Pilgrim Groveller | 35 uccisioni
Pilgrim Pouncer | 35 uccisioni
Pilgrim Hornfly | 15 uccisioni
Pilgrim Hulk | 10 uccisioni
Pilgrim Bellbearer | 10 uccisioni
Winged Pilgrim | 25 uccisioni
Elder Pilgrim | 5 uccisioni
Winged Pilgrim Bellbearer | 10 uccisioni
Pilgrim Hiker | 10 uccisioni
Pilgrim Guide | 15 uccisioni
Overgrown Pilgrim | 20 uccisioni
Covetous Pilgrim | 2 uccisioni
Snitchfly | 4 uccisioni
## Deep Docks
Lavalug | 12 uccisioni
Lavalarga | 8 uccisioni
Smelt Shoveller | 25 uccisioni
Flintstone Flyer | 25 uccisioni
Flintflame Flyer | 10 uccisioni
Smokerock Sifter | 10 uccisioni
Deep Diver | 5 uccisioni
Forebrothers Signis & Gron | 1 uccisione
## Far Fields e Hunter's March
Cragglite | 3 uccisioni
Craggler | 1 uccisione
Brushflit | 15 uccisioni
Fertid | 25 uccisioni
Flapping Fertid | 20 uccisioni
Fourth Chorus | 1 uccisione
Skarrlid | 25 uccisioni
Skarrwing | 30 uccisioni
Skarr Scout | 20 uccisioni
Skarr Stalker | 15 uccisioni
Spear Skarr | 10 uccisioni
Skarrgard | 2 uccisioni
Gurr the Outcast | 1 uccisione
Last Claw | 6 uccisioni
Skarrsinger Karmelita | 1 uccisione
## Greymoor
Mite | 30 uccisioni
Fluttermite | 25 uccisioni
Mitemother | 10 uccisioni
Dreg Catcher | 20 uccisioni
Silk Snipper | 25 uccisioni
Thread Raker | 15 uccisioni
Moorwing | 1 uccisione
Wisp | 15 uccisioni
Burning Bug | 8 uccisioni
Father of the Flame | 1 uccisione
Craw | 25 uccisioni
Tallcraw | 20 uccisioni
Squatcraw | 15 uccisioni
Craw Juror | 15 uccisioni
Tallcraw Juror | 10 uccisioni
Squatcraw Juror | 8 uccisioni
Crawfather | 1 uccisione
## Sinner's Road e Bilewater
Muckmaggot | 80 uccisioni
Slubberlug | 12 uccisioni
Muckroach | 20 uccisioni
Bloatroach | 12 uccisioni
Roachcatcher | 20 uccisioni
Roachfeeder | 20 uccisioni
Roachkeeper | 10 uccisioni
Roachserver | 10 uccisioni
Disgraced Chef Lugoli | 1 uccisione
Wraith | 10 uccisioni
Mothleaf Lagnia | 25 uccisioni
Miremite | 20 uccisioni
Swamp Squit | 30 uccisioni
Spit Squit | 20 uccisioni
Stilkin | 15 uccisioni
Stilkin Trapper | 12 uccisioni
Groal the Great | 1 uccisione
Barnak | 8 uccisioni
Ductsucker | 6 uccisioni
Pond Skipper | 15 uccisioni
Pondcatcher | 20 uccisioni
## Shellwood e Grand Gate
Shellwood Gnat | 15 uccisioni
Wood Wasp | 12 uccisioni
Splinter | 12 uccisioni
Splinterhorn | 10 uccisioni
Splinterbark | 10 uccisioni
Sister Splinter | 1 uccisione
Phacia | 25 uccisioni
Pollenica | 10 uccisioni
Gahlia | 20 uccisioni
Shrine Guardian Seth | 1 uccisione
Nyleth | 1 uccisione
## Blasted Steps, Mount Fay e Sands of Karak
Furm | 25 uccisioni
Winged Furm | 12 uccisioni
Pharlid | 20 uccisioni
Pharlid Diver | 10 uccisioni
Shardillard | 3 uccisioni
Sandcarver | 40 uccisioni
Squirrm | 4 uccisioni
Judge | 15 uccisioni
Last Judge | 1 uccisione
Coral Furm | 15 uccisioni
Driznit | 25 uccisioni
Driznarga | 14 uccisioni
Pokenabbin | 16 uccisioni
Conchfly | 8 uccisioni
Great Conchfly | 2 uccisioni · serve anche Raging Conchfly
Crustcrawler | 10 uccisioni
Crustcrag | 6 uccisioni
Kai | 10 uccisioni
Spinebeak Kai | 10 uccisioni
Steelspine Kai | 15 uccisioni
Yuma | 16 uccisioni
Yumama | 3 uccisioni
Karaka | 10 uccisioni
Kakri | 10 uccisioni
Yago | 12 uccisioni
Karak Gor | 8 uccisioni
Alita | 6 uccisioni
Corrcrust Karaka | 6 uccisioni
Crust King Khann | 1 uccisione
Watcher at the Edge | 1 uccisione
Voltvyrm | 1 uccisione
## Underworks e Cittadella
Drapefly | 30 uccisioni
Drapelord | 4 uccisioni
Drapemite | 20 uccisioni
Giant Drapemite | 6 uccisioni
Underworker | 15 uccisioni
Underscrub | 20 uccisioni
Undersweep | 10 uccisioni
Underpoke | 25 uccisioni
Underloft | 25 uccisioni
Undercrank | 4 uccisioni
Envoy | 20 uccisioni
Choir Pouncer | 30 uccisioni
Choir Hornhead | 15 uccisioni
Choir Bellbearer | 25 uccisioni
Choir Flyer | 20 uccisioni
Choir Elder | 6 uccisioni
Choristor | 25 uccisioni
Reed | 30 uccisioni
Grand Reed | 12 uccisioni
Choir Clapper | 3 uccisioni
Clawmaiden | 10 uccisioni
Memoria | 2 uccisioni
Minister | 15 uccisioni
Maestro | 6 uccisioni
Second Sentinel | 1 uccisione
Dreg Husk | 8 uccisioni
Dregwheel | 8 uccisioni
Surgeon | 3 uccisioni
Mortician | 10 uccisioni
The Unravelled | 1 uccisione
Cogwork Underfly | 25 uccisioni
Cogwork Hauler | 12 uccisioni
Cogwork Crawler | 15 uccisioni
Cogworker | 15 uccisioni
Cogwork Spine | 10 uccisioni
Cogwork Choirbug | 20 uccisioni
Cogwork Cleanser | 12 uccisioni
Cogwork Defender | 8 uccisioni
Cogwork Clapper | 1 uccisione
Cogwork Dancers | 1 uccisione
Vaultborn | 20 uccisioni
Lampbearer | 20 uccisioni
Scrollreader | 15 uccisioni
Vaultkeeper | 10 uccisioni
Trobbio | 1 uccisione
Tormented Trobbio | 1 uccisione
## The Slab, Memorium e Wormways
Penitent | 8 uccisioni
Puny Penitent | 6 uccisioni
Freshfly | 20 uccisioni
Scabfly | 15 uccisioni
Guardfly | 10 uccisioni
Wardenfly | 8 uccisioni
Broodmother | 1 uccisione
Driftlin | 20 uccisioni
Mnemonid | 10 uccisioni
Mnemonord | 3 uccisioni
Servitor Ignim | 8 uccisioni
Servitor Boran | 5 uccisioni
Winged Lifeseed | 8 uccisioni
Plasmid | 15 uccisioni
Plasmidas | 6 uccisioni
Plasmified Zango | 1 uccisione
## Verdania e Abyss
Leaf Glider | 12 uccisioni
Leaf Roller | 10 uccisioni
Pendra | 10 uccisioni
Pendragor | 10 uccisioni
Nuphar | 6 uccisioni
Cloverstag | 10 uccisioni
Palestag | 1 uccisione · non richiesta per True Hunter
Kindanir | 10 uccisioni
Verdanir | 10 uccisioni
Escalion | 10 uccisioni
Clover Dancers | 1 uccisione
Shadow Creeper | 16 uccisioni
Shadow Charger | 6 uccisioni
Gloomsac | 15 uccisioni
Gargant Gloom | 4 uccisioni
Void Tendrils | Si ottiene leggendo una tavoletta
Void Mass | 8 uccisioni
Summoned Saviour | 1 uccisione · solo Steel Soul | | ss
Wingmould | 10 uccisioni
Garpid | 30 uccisioni
Imoba | 4 uccisioni
Skrill | 10 uccisioni
## Boss e incontri speciali
Bell Eater | 1 uccisione
Huge Flea | 1 uccisione
Shakra | 1 · voce extra, non richiesta per True Hunter
Garmond & Zaza | 1 · voce extra
Lost Garmond | 1 · voce extra
Pinstress | 1 uccisione
Widow | 1 uccisione
First Sinner | 1 uccisione
Phantom | 1 uccisione
Lace | 1–2 scontri
Grand Mother Silk | 1 uccisione
Lost Lace | 1 · voce extra, non richiesta per True Hunter
`},

{ id:"achievements", name:"Achievement", icon:"trophy", desc:"Trofei e obiettivi della piattaforma.", text:`
## Raccolta
Equipped | Ottieni il primo strumento
Arsenal | Ottieni tutti gli strumenti
Bound | Lega la prima Silk Skill
Woven | Lega tutte le Silk Skill
Protected | Ottieni 4 Mask Shard
Masked | Ottieni tutti i Mask Shard
Restored | Ottieni 2 Spool Fragment
Extended | Ottieni tutti gli Spool Fragment
Claimed | Ottieni il primo Crest
Consumed | Ottieni tutti i Crest
Regenerated | Ottieni tutti i Silk Heart
Cartographer | Ottieni la mappa di ogni area
Resident | Ottieni la tua Bellhome
## Boss
Liberated | Sconfiggi la Bell Beast
Pharloom's Welcome | Sconfiggi Lace nei Deep Docks
Servant | Sconfiggi Fourth Chorus
Fanatic | Sconfiggi Widow
Judge | Sconfiggi il Last Judge
Last Dance | Sconfiggi i Cogwork Dancers
Tragedian | Sconfiggi Trobbio
White Knight | Sconfiggi Lace in The Cradle
Grey Ghost | Sconfiggi Phantom
Heretic | Sconfiggi First Sinner
Tyrant | Sconfiggi Crust King Khann
Seed | Sconfiggi Nyleth
Diva | Sconfiggi Skarrsinger Karmelita
Lamenter | Sconfiggi i Clover Dancers
Hero's Call | Sconfiggi Lost Garmond
Fatal Resolve | Sconfiggi Pinstress
## Esplorazione e missioni
Flea Finder | Salva metà delle pulci
Fleafriend | Salva tutte le pulci e ricevi il loro dono finale
Connected | Apri tutte le Bellway
Transported | Apri tutte le stazioni Ventrica
Bonded | Impara la Beastling Call
Granted | Esaudisci il primo wish
Glutton | Sazia il Grand Gourmand
Trail's End | Esaudisci il wish di Shakra
Entwined | Lega Eva
Harmonious | Impara la Threefold Melody della Cittadella
Remembrance | Ottieni l'Everbloom da un ricordo lontano
Keen Hunter | Esaudisci il wish di Nuu
True Hunter | Ricevi l'Hunter's Memento
## Finali e sfide
Weaver Queen | Sconfiggi Grand Mother Silk e lega il suo potere
Snared Silk | Sconfiggi Grand Mother Silk con la Soul Snare
Twisted Child | Sconfiggi Grand Mother Silk da maledetta
Sister of the Void | Sconfiggi Lost Lace e libera Pharloom
Passing of the Age | Esaudisci il wish dell'Herald e finisci il gioco
Completion | 100% e finisci il gioco
Speed Completion | 100% e finisci il gioco in meno di 30 ore
Speedrunner | Finisci il gioco in meno di 5 ore
Steel Soul | Finisci il gioco in modalità Steel Soul
Steel Heart | 100% e finisci il gioco in Steel Soul
Pharloom's Heart | Ottieni tutti gli altri trofei (PlayStation)
`}
];
