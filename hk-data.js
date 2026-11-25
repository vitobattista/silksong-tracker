/* Hollow Knight — database checklist (fonte: hollowknight.wiki, novembre 2026).
   Stesso formato di data.js:  Nome | Dove / come | Atto | flag
   Flag: pct = 1% · pct2 = 2% · pct:gruppo = varianti che valgono 1% in tutto · ss = solo Steel Soul.
   Hollow Knight non ha Atti: la colonna è usata per il contenuto (B = gioco base, G = Grimm Troupe, D = Godmaster, L = Lifeblood). */

window.HOLLOWKNIGHT = [
{ id:"story", name:"Storia", desc:"Progressione principale, Sognatori e finali.", text:`
## Progressione
Dirtmouth | Scendi dal King's Pass fino a Dirtmouth: incontra Elderbug e Iselda | B
False Knight | Forgotten Crossroads: sconfiggilo per ottenere il City Crest | B
Mothwing Cloak | Greenpath: sconfiggi Hornet Protector | B
City of Tears | Usa il City Crest sul cancello in fondo alle Forgotten Crossroads (Fungal Wastes) | B
Dream Nail | Resting Grounds: raggiungi il Seer e supera il sogno | B
Black Egg Temple | Forgotten Crossroads: il tempio si apre dopo aver distrutto i tre Sognatori | B
## Sognatori · 1% ciascuno
Monomon the Teacher | Teacher's Archives (Fog Canyon), dopo aver sconfitto Uumuu: colpisci il sigillo con il Dream Nail | B | pct
Lurien the Watcher | Watcher's Spire (City of Tears), dopo i Watcher Knight: colpiscilo con il Dream Nail | B | pct
Herrah the Beast | Beast's Den (Deepnest): colpiscila con il Dream Nail | B | pct
## Finali
Ending: The Hollow Knight | Sconfiggi The Hollow Knight nel Black Egg Temple | B
Ending: Sealed Siblings | Sconfiggi The Hollow Knight con il Void Heart equipaggiato, dopo aver ottenuto il King's Brand | B
Ending: Dream No More | Con il Void Heart e il Dream Nail risvegliato, usa il Dream Nail su The Hollow Knight durante lo scontro e sconfiggi The Radiance | B
Ending: Embrace the Void | Completa il Pantheon of Hallownest e sconfiggi Absolute Radiance | D
Ending: Delicate Flower | Consegna il Delicate Flower al Godseeker e completa il Pantheon of Hallownest | D
Ending: Passing of the Age | Segui Mister Mushroom in tutte le sue apparizioni prima di un finale | D
`},

{ id:"equipment", name:"Equipaggiamento", desc:"Abilità di movimento (2% ciascuna) e strumenti chiave.", text:`
## Equipaggiamento · 2% ciascuno
Mothwing Cloak | Greenpath, dopo aver sconfitto Hornet Protector | B | pct2
Mantis Claw | Mantis Village (Fungal Wastes) | B | pct2
Crystal Heart | Crystal Peak, nella parte est | B | pct2
Monarch Wings | Ancient Basin, dopo aver sconfitto Broken Vessel | B | pct2
Isma's Tear | Isma's Grove (Royal Waterways), dopo il Dung Defender | B | pct2
Shade Cloak | The Abyss, oltre il cancello che si apre con il King's Brand | B | pct2
King's Brand | Kingdom's Edge, nel Cast-Off Shell, dopo Hornet Sentinel | B | pct2
## Dream Nail ed Essence · 1% ciascuno
Dream Nail | Resting Grounds, dal Seer | B | pct
Awoken Dream Nail | Il Seer, a 1800 Essence | B | pct
Seer: ultime parole | Il Seer, a 2400 Essence | B | pct
Dreamgate | Il Seer, a 900 Essence | B
## Strumenti
Lumafly Lantern | Sly (Dirtmouth) a 1800 Geo: illumina le zone buie | B
World Sense | Black Egg Temple: mostra la percentuale di completamento | B
Wayward Compass | Iselda (Dirtmouth) a 220 Geo | B
Quill | Iselda (Dirtmouth) | B
`},

{ id:"spells", name:"Magie e Arti", desc:"Incantesimi e arti dell'aculeo, 1% ciascuno.", text:`
## Magie
Vengeful Spirit | Ancestral Mound, dallo Snail Shaman | B | pct
Shade Soul | Soul Sanctum, nella stanza dell'Elegant Key | B | pct
Desolate Dive | Soul Sanctum: sconfiggi il Soul Master | B | pct
Descending Dark | Crystallised Mound (Crystal Peak) | B | pct
Howling Wraiths | Overgrown Mound (Fog Canyon), dallo Snail Shaman | B | pct
Abyss Shriek | The Abyss, dopo Howling Wraiths | B | pct
## Arti dell'aculeo
Cyclone Slash | Nailmaster Mato, Howling Cliffs | B | pct
Dash Slash | Nailmaster Oro, Kingdom's Edge, per 800 Geo | B | pct
Great Slash | Nailmaster Sheo, Greenpath | B | pct
`},

{ id:"charms", name:"Amuleti", desc:"Amuleti e tacche. Le versioni fragile/indistruttibile contano una volta.", text:`
## Amuleti
Wayward Compass | Iselda a 220 Geo, dopo aver incontrato Cornifer | B | pct
Gathering Swarm | Sly a 300 Geo | B | pct
Stalwart Shell | Sly a 200 Geo | B | pct
Soul Catcher | Ancestral Mound, a ovest dell'Elder Baldur | B | pct
Shaman Stone | Salubra a 220 Geo | B | pct
Soul Eater | Resting Grounds (serve Desolate Dive) | B | pct
Dashmaster | Fungal Wastes, a sud del Mantis Village | B | pct
Thorns of Agony | Greenpath, al centro dell'area (serve Mothwing Cloak) | B | pct
Fury of the Fallen | King's Pass, a est della stanza iniziale | B | pct
Fragile Heart | Leg Eater a 350 Geo (280 con il Defender's Crest) | B | pct:heart
Unbreakable Heart | Divine a 12000 Geo (serve Fragile Heart) | G | pct:heart
Fragile Greed | Leg Eater a 250 Geo | B | pct:greed
Unbreakable Greed | Divine a 9000 Geo (serve Fragile Greed) | G | pct:greed
Fragile Strength | Leg Eater a 600 Geo | B | pct:strength
Unbreakable Strength | Divine a 15000 Geo (serve Fragile Strength) | G | pct:strength
Spell Twister | Soul Sanctum, nella stanza prima del Soul Master | B | pct
Steady Body | Salubra a 120 Geo | B | pct
Heavy Blow | Sly a 350 Geo (serve lo Shopkeeper's Key) | B | pct
Quick Slash | Kingdom's Edge, a sud della capanna di Oro | B | pct
Longnail | Salubra a 300 Geo | B | pct
Mark of Pride | Mantis Village, dopo i Mantis Lords | B | pct
Baldur Shell | Howling Cliffs, in un forziere a sud | B | pct
Flukenest | Royal Waterways: sconfiggi Flukemarm | B | pct
Defender's Crest | Royal Waterways: sconfiggi il Dung Defender | B | pct
Glowing Womb | Forgotten Crossroads, a est del False Knight (serve Crystal Heart) | B | pct
Quick Focus | Salubra a 800 Geo | B | pct
Deep Focus | Crystal Peak, a sud di Cornifer (serve Crystal Heart) | B | pct
Lifeblood Heart | Salubra a 250 Geo | B | pct
Lifeblood Core | The Abyss, parete ovest: servono 15 maschere di Lifeblood | B | pct
Joni's Blessing | Joni's Repose (Howling Cliffs) | B | pct
Grubsong | Grubfather, per 10 Grub salvate | B | pct
Grubberfly's Elegy | Grubfather, per tutte le 46 Grub | B | pct
Hiveblood | The Hive, dopo Hive Knight | L | pct
Spore Shroom | Fungal Wastes, estremo ovest, vicino all'ingresso dei Queen's Gardens | B | pct
Sharp Shadow | Deepnest, a sud-est della Hot Spring (serve Shade Cloak) | B | pct
Shape of Unn | Lake of Unn, Greenpath (serve Isma's Tear) | B | pct
Nailmaster's Glory | Sly, dopo aver imparato tutte e 3 le arti dell'aculeo | B | pct
Dream Wielder | Il Seer, a 500 Essence | B | pct
Kingsoul | Una metà dalla White Lady (Queen's Gardens), l'altra in fondo al White Palace | B | pct:kingsoul
Void Heart | Birthplace (The Abyss), con il Kingsoul equipaggiato | B | pct:kingsoul
Weaversong | Weavers' Den (Deepnest) | G | pct
Sprintmaster | Sly a 400 Geo (serve lo Shopkeeper's Key) | G | pct
Dreamshield | Resting Grounds, a sud del Seer | G | pct
Grimmchild | Troupe Master Grimm, all'inizio del Rituale | G | pct:grimm
Carefree Melody | Nymm (Dirtmouth), se esili la Grimm Troupe | G | pct:grimm
## Tacche
Charm Notch 1 | Salubra a 120 Geo, con 5 amuleti | B
Charm Notch 2 | Salubra a 500 Geo, con 10 amuleti | B
Charm Notch 3 | Salubra a 900 Geo, con 18 amuleti | B
Charm Notch 4 | Salubra a 1400 Geo, con 25 amuleti | B
Charm Notch 5 | Fog Canyon, a nord-est di Cornifer, in un'area nascosta (Isma's Tear o Monarch Wings) | B
Charm Notch 6 | Fungal Wastes: sconfiggi 2 Shrumal Ogre | B
Charm Notch 7 | Colosseum of Fools: Trial of the Warrior | B
Charm Notch 8 | Dirtmouth, nella tenda della Grimm Troupe: sconfiggi Grimm | G
Salubra's Blessing | Salubra a 800 Geo, con tutte le tacche | B
`},

{ id:"upgrades", name:"Potenziamenti", desc:"Aculeo e Pale Ore.", text:`
## Aculeo · 4%
Sharpened Nail | Nailsmith (City of Tears) per 250 Geo | B | pct
Channelled Nail | Nailsmith per 800 Geo + 1 Pale Ore | B | pct
Coiled Nail | Nailsmith per 2000 Geo + 2 Pale Ore | B | pct
Pure Nail | Nailsmith per 4000 Geo + 3 Pale Ore | B | pct
## Pale Ore
Pale Ore 1 | Ancient Basin, a ovest della stazione del tram: sconfiggi i due Lesser Mawlek | B
Pale Ore 2 | Il Seer, a 300 Essence | B
Pale Ore 3 | Hallownest's Crown, in cima a Crystal Peak (Mantis Claw; consigliati Monarch Wings e Crystal Heart) | B
Pale Ore 4 | Deepnest, nella tana di Nosk: sconfiggilo | B
Pale Ore 5 | Grubfather, per 31 Grub salvate | B
Pale Ore 6 | Colosseum of Fools: Trial of the Conqueror | B
`},

{ id:"masks", name:"Frammenti di maschera", desc:"16 frammenti: ogni 4 = 1 maschera (1%).", text:`
Mask Shard 1 | Sly (Dirtmouth) a 150 Geo | B
Mask Shard 2 | Sly a 500 Geo | B
Mask Shard 3 | Sly a 800 Geo (serve lo Shopkeeper's Key) | B
Mask Shard 4 | Sly a 1500 Geo | B
Mask Shard 5 | Forgotten Crossroads, estremo ovest: sconfiggi Brooding Mawlek | B
Mask Shard 6 | Grubfather, per 5 Grub salvate | B
Mask Shard 7 | Forgotten Crossroads, a sud del False Knight dove ci sono i Goam (consigliato Mantis Claw) | B
Mask Shard 8 | Queen's Station, lato est (Mantis Claw) | B
Mask Shard 9 | Casa di Bretta a Dirtmouth, dopo averla salvata nei Fungal Wastes | B
Mask Shard 10 | Stone Sanctuary (Greenpath), stanza a nord-est di No Eyes (consigliata Lumafly Lantern) | B
Mask Shard 11 | Royal Waterways nord-ovest: nuota verso ovest sotto il percorso principale | B
Mask Shard 12 | Deepnest, entrando dal Fungal Core, vicino ai Mantis Lords (Monarch Wings) | B
Mask Shard 13 | Crystal Peak: ricompensa dell'Enraged Guardian (Monarch Wings) | B
Mask Shard 14 | The Hive, dietro un muro: fallo sfondare da una Hive Guardian | B
Mask Shard 15 | Il Seer, a 1500 Essence | B
Mask Shard 16 | Grey Mourner (Resting Grounds): completa la missione del Delicate Flower | B
`},

{ id:"vessels", name:"Frammenti di vaso", desc:"9 frammenti: ogni 3 = 1 vaso d'anima (1%).", text:`
Vessel Fragment 1 | Sly (Dirtmouth) a 550 Geo | B
Vessel Fragment 2 | Sly a 900 Geo (serve lo Shopkeeper's Key) | B
Vessel Fragment 3 | Greenpath, vicino all'ingresso inaccessibile dei Queen's Gardens | B
Vessel Fragment 4 | Forgotten Crossroads, a sinistra dell'ascensore (sbloccalo dalla City of Tears) | B
Vessel Fragment 5 | Sopra la King's Station, vicino a un ascensore (City of Tears) | B
Vessel Fragment 6 | Deepnest, sopra il tram funzionante | B
Vessel Fragment 7 | All'inizio dello Stag Nest (apri tutte le stazioni) | B
Vessel Fragment 8 | Il Seer, a 700 Essence | B
Vessel Fragment 9 | Fontana dell'Ancient Basin: lascia cadere 3000 Geo | B
`},

{ id:"bosses", name:"Boss", desc:"Boss e Guerrieri dei sogni. Quelli con 1% contano per il 112%.", text:`
## Gioco base
Gruz Mother | Forgotten Crossroads | B | pct
False Knight | Forgotten Crossroads. City Crest | B | pct:fk
Brooding Mawlek | Forgotten Crossroads, estremo ovest. Mask Shard | B | pct
Hornet Protector | Greenpath. Mothwing Cloak | B | pct
Massive Moss Charger | Greenpath | B
Vengefly King | Greenpath | B
Mantis Lords | Mantis Village (Fungal Wastes). Mark of Pride | B | pct
Soul Warrior | Soul Sanctum (City of Tears) | B
Soul Master | Soul Sanctum. Desolate Dive | B | pct
Crystal Guardian | Crystal Peak | B
Dung Defender | Royal Waterways. Defender's Crest | B | pct
Flukemarm | Royal Waterways. Flukenest | B
Broken Vessel | Ancient Basin. Monarch Wings | B | pct
Watcher Knight | Watcher's Spire (City of Tears) | B | pct
Uumuu | Teacher's Archives (Fog Canyon) | B | pct
Nosk | Deepnest. Pale Ore | B | pct
The Collector | Tower of Love (City of Tears). Collector's Map e 3 Grub | B | pct
Traitor Lord | Queen's Gardens | B | pct
Hornet Sentinel | Kingdom's Edge. King's Brand | B | pct
Enraged Guardian | Crystal Peak, versione potenziata del Crystal Guardian. Mask Shard | B
The Hollow Knight | Black Egg Temple | B
The Radiance | Black Egg Temple, finale Dream No More | B
## Guerrieri dei sogni · 1% ciascuno
Gorb | Howling Cliffs | B | pct
Elder Hu | Fungal Wastes | B | pct
Marmu | Queen's Gardens | B | pct
No Eyes | Stone Sanctuary (Greenpath) | B | pct
Xero | Resting Grounds | B | pct
Galien | Deepnest | B | pct
Markoth | Kingdom's Edge | B | pct
## Boss dei sogni
Failed Champion | Forgotten Crossroads: Dream Nail sul corpo del False Knight | B
Soul Tyrant | Soul Sanctum: Dream Nail sul corpo del Soul Master | B
Lost Kin | Ancient Basin: Dream Nail sul corpo del Broken Vessel | B
White Defender | Royal Waterways: Dream Nail sul Dung Defender addormentato | B
Grey Prince Zote | Dirtmouth: Dream Nail sulla statua di Zote, dopo averlo salvato | B
## Grimm Troupe e Lifeblood
Troupe Master Grimm | Dirtmouth, nella tenda | G | pct
Nightmare King Grimm | Dirtmouth: completa il Rituale | G | pct:nkg
Hive Knight | The Hive. Hiveblood | L | pct
## Godmaster
Brothers Oro & Mato | Pantheon of the Master | D
Paintmaster Sheo | Pantheon of the Artist | D
Great Nailsage Sly | Pantheon of the Sage | D
Pure Vessel | Pantheon of the Knight | D
Sisters of Battle | Pantheon of Hallownest | D
Winged Nosk | Pantheon of Hallownest | D
Absolute Radiance | Pantheon of Hallownest, finale Embrace the Void | D
`},

{ id:"trials", name:"Colosseo e Pantheon", desc:"Prove del Colosseum of Fools, Grimm Troupe e Godmaster.", text:`
## Colosseum of Fools · 1% ciascuno
Trial of the Warrior | Kingdom's Edge: compra il biglietto (Little Fool). Ricompensa: tacca e Geo | B | pct
Trial of the Conqueror | Serve il Trial of the Warrior. Ricompensa: Pale Ore | B | pct
Trial of the Fool | Serve il Trial of the Conqueror. Ricompensa: Geo | B | pct
## Grimm Troupe
Grimmkin Novice 1 | Fiamma: Howling Cliffs, dietro la Grimm Troupe (Grimmchild livello 2) | G
Grimmkin Novice 2 | Fiamma: Crystal Peak | G
Grimmkin Novice 3 | Fiamma: Greenpath | G
Grimmkin Master 1 | Fiamma: City of Tears (Grimmchild livello 3) | G
Grimmkin Master 2 | Fiamma: Fungal Wastes | G
Grimmkin Master 3 | Fiamma: Resting Grounds / Ancestral Mound | G
Grimmkin Nightmare 1 | Fiamma: Kingdom's Edge (Grimmchild livello 4) | G
Grimmkin Nightmare 2 | Fiamma: Hive | G
Grimmkin Nightmare 3 | Fiamma: Deepnest | G
Banishment | In alternativa a Nightmare King Grimm: esilia la Grimm Troupe con Brumm (Distant Village) | G | pct:nkg
## Godmaster · 1% ciascuno
Godtuner | Godseeker (Junk Pit, Royal Waterways), con una Simple Key | D | pct
Pantheon of the Master | Godhome | D | pct
Pantheon of the Artist | Godhome | D | pct
Pantheon of the Sage | Godhome | D | pct
Pantheon of the Knight | Godhome | D | pct
Pantheon of Hallownest | Godhome: serve aver completato gli altri quattro | D
`},

{ id:"grubs", name:"Larve", desc:"46 Grub da liberare: Grubfather ti ricompensa.", text:`
## Forgotten Crossroads
Grub 1 | Sorvegliata da una Husk Guard (non serve sconfiggerla) | B
Grub 2 | Oltre un lago d'acido, verso la Fog Canyon | B
Grub 3 | Dietro un muro distruttibile, con due Aspid Hunter davanti | B
Grub 4 | Su una piattaforma raggiungibile rimbalzando con l'aculeo | B
Grub 5 | Oltre un salto troppo lungo per un salto solo (Mothwing Cloak) | B
## Greenpath
Grub 6 | Sopra Cornifer: fai cadere un blocco di muschio | B
Grub 7 | Oltre un lago d'acido: fai cadere un blocco di muschio | B
Grub 8 | Sopra la stazione dei cervi, sorvegliata da un Moss Knight | B
Grub 9 | Sopra un lago d'acido (rimbalza sui Durandoo senza Isma's Tear) | B
## Fungal Wastes
Grub 10 | In fondo a un tunnel pieno di Fungling | B
Grub 11 | Sopra un angolo raggiungibile rimbalzando sui funghi (Mantis Claw) | B
## City of Tears
Grub 12 | Sotto l'ingresso del Soul Sanctum, vicino a un Winged Sentry | B
Grub 13 | In una casa a ovest della King's Station, sorvegliata da un Great Husk Sentry | B
Grub 14 | Sotto un pavimento distruttibile vicino al Soul Totem inferiore (Desolate Dive) | B
Grub 15 | Nel tunnel tra King's Station e Kingdom's Edge, tra i Belfly | B
Grub 16 | Watcher's Spire, sezione est (Mantis Claw, Monarch Wings) | B
Grub 17 | Tower of Love: nei vasi del Collector | B
Grub 18 | Tower of Love: nei vasi del Collector | B
Grub 19 | Tower of Love: nei vasi del Collector | B
## Crystal Peak
Grub 20 | Vicino al collegamento con Dirtmouth: la prima è un Grub Mimic (Mantis Claw, Crystal Heart) | B
Grub 21 | Oltre la sezione con le presse meccaniche (Mothwing Cloak, Mantis Claw) | B
Grub 22 | Nella stanza prima del Crystal Heart (Mantis Claw, Crystal Heart) | B
Grub 23 | Sul percorso verso Hallownest's Crown (Mothwing Cloak, Monarch Wings) | B
Grub 24 | Oltre una sezione di spine e nastri trasportatori (Mothwing Cloak, Mantis Claw) | B
Grub 25 | Raggiungibile solo dal collegamento superiore della stanza (Mothwing Cloak, Mantis Claw) | B
Grub 26 | Crystallised Mound, a est di Descending Dark (Desolate Dive, Crystal Heart) | B
## Resting Grounds, Royal Waterways, Howling Cliffs
Grub 27 | Resting Grounds, vicino a un Entombed Husk e un Belfly (Desolate Dive) | B
Grub 28 | Royal Waterways, dietro un muro distruttibile | B
Grub 29 | Royal Waterways, dal collegamento con Kingdom's Edge | B
Grub 30 | Royal Waterways, passaggio nell'acido sotto Isma (Isma's Tear) | B
Grub 31 | Howling Cliffs, vicino al collegamento con Greenpath (Mantis Claw) | B
## Kingdom's Edge, Fog Canyon, Queen's Gardens
Grub 32 | Kingdom's Edge, sotto i tunnel della capanna di Oro (Desolate Dive) | B
Grub 33 | Kingdom's Edge, dietro un muro vicino alle spine, con un Primal Aspid (Mantis Claw) | B
Grub 34 | Fog Canyon, oltre il Teacher's Archives con il Crystal Heart | B
Grub 35 | Queen's Gardens, nascosta tra le foglie sotto la stazione dei cervi | B
Grub 36 | Queen's Gardens, sopra il collegamento con Greenpath (Mantis Claw, Crystal Heart) | B
Grub 37 | Queen's Gardens, da un passaggio nascosto (Mantis Claw) | B
## Deepnest, Ancient Basin, The Hive
Grub 38 | Deepnest, dietro un muro: 4 larve, la terza è quella vera (Mantis Claw) | B
Grub 39 | Deepnest, sopra una stanza piena di spine (Mantis Claw, Crystal Heart) | B
Grub 40 | Deepnest, dietro un muro a ovest della Hot Spring (Monarch Wings, Crystal Heart) | B
Grub 41 | Deepnest, lungo un passaggio sorvegliato da uno Stalking Devout (Mothwing Cloak, Mantis Claw) | B
Grub 42 | Beast's Den, dietro diversi pavimenti distruttibili (Mothwing Cloak, Mantis Claw) | B
Grub 43 | Ancient Basin, prima del Broken Vessel (Mothwing Cloak, Monarch Wings) | B
Grub 44 | Ancient Basin, sulla via del Pale Ore a ovest del tram (Desolate Dive) | B
Grub 45 | The Hive, dal collegamento con Kingdom's Edge (Desolate Dive, Isma's Tear) | B
Grub 46 | The Hive, passaggio nascosto prima dell'arena di Hive Knight (Crystal Heart, Monarch Wings) | B
`},

{ id:"travel", name:"Viaggio", desc:"Stazioni dei cervi, radici sussurranti e bozzoli.", text:`
## Stazioni dei cervi
Stag Station · Dirtmouth | Gratis | B
Stag Station · Forgotten Crossroads | 50 Geo | B
Stag Station · Greenpath | 140 Geo | B
Stag Station · Queen's Station | 120 Geo (Fungal Wastes) | B
Stag Station · Queen's Gardens | 200 Geo | B
Stag Station · City Storerooms | 200 Geo (City of Tears) | B
Stag Station · King's Station | 300 Geo (City of Tears) | B
Stag Station · Resting Grounds | Gratis | B
Stag Station · Distant Village | 250 Geo (Deepnest) | B
Stag Station · Hidden Station | 300 Geo (Palace Grounds) | B
Stag Station · Stag Nest | Howling Cliffs: si apre dall'interno, dopo tutte le altre | B
## Whispering Root
Whispering Root · Ancestral Mound | 42 Essence | B
Whispering Root · City of Tears | 28 Essence | B
Whispering Root · Crystal Peak | 21 Essence | B
Whispering Root · Deepnest | 45 Essence | B
Whispering Root · Forgotten Crossroads | 29 Essence | B
Whispering Root · Fungal Wastes (Fog Canyon) | 20 Essence, vicino alla Fog Canyon | B
Whispering Root · Fungal Wastes (Mantis Village) | 18 Essence, sopra il Mantis Village | B
Whispering Root · Greenpath | 44 Essence | B
Whispering Root · The Hive | 20 Essence | B
Whispering Root · Howling Cliffs | 46 Essence | B
Whispering Root · Kingdom's Edge | 51 Essence | B
Whispering Root · Queen's Gardens | 29 Essence | B
Whispering Root · Resting Grounds | 20 Essence | B
Whispering Root · Royal Waterways | 35 Essence, vicino all'ascensore rotto | B
Whispering Root · Spirits' Glade | 34 Essence | B
## Lifeblood Cocoon
Lifeblood Cocoon · King's Pass | A nord-ovest del cartello del Focus | B
Lifeblood Cocoon · Ancestral Mound | A nord-ovest dell'Elder Baldur | B
Lifeblood Cocoon · Greenpath | Dietro un muro sopra il primo Moss Knight | B
Lifeblood Cocoon · Fog Canyon | Sopra un corridoio di Charged Lumafly | B
Lifeblood Cocoon · Fungal Wastes | Nell'arena dei Mantis Lords, in alto a sinistra dietro un muro | B
Lifeblood Cocoon · Failed Tramway | Stanza segreta in cima alla sotto-area | B
Lifeblood Cocoon · Deepnest | Sopra l'arena di Galien | B
Lifeblood Cocoon · Kingdom's Edge | Passaggio segreto sotto Bardoon | B
`},

{ id:"maps", name:"Mappe", desc:"Mappe di Cornifer (achievement Cartographer).", text:`
Forgotten Crossroads Map | Cornifer nell'area, o Iselda a Dirtmouth | B
Greenpath Map | Cornifer nell'area, o Iselda | B
Fog Canyon Map | Cornifer nell'area, o Iselda | B
Fungal Wastes Map | Cornifer nell'area, o Iselda | B
City of Tears Map | Cornifer nell'area, o Iselda | B
Crystal Peak Map | Cornifer nell'area, o Iselda | B
Royal Waterways Map | Cornifer nell'area, o Iselda | B
Howling Cliffs Map | Cornifer nell'area, o Iselda | B
Resting Grounds Map | Cornifer nell'area, o Iselda | B
Deepnest Map | Cornifer nell'area, o Iselda | B
Ancient Basin Map | Cornifer nell'area, o Iselda | B
Kingdom's Edge Map | Cornifer nell'area, o Iselda | B
Queen's Gardens Map | Cornifer nell'area, o Iselda | B
`},

{ id:"relics", name:"Reliquie e chiavi", desc:"Reliquie da vendere a Lemm, chiavi e oggetti speciali.", text:`
## Wanderer's Journal
Wanderer's Journal 1 | Greenpath, fuori dalla stazione dei cervi, dietro un muro | B
Wanderer's Journal 2 | Greenpath, nella stanza verso la Fog Canyon | B
Wanderer's Journal 3 | Fungal Wastes, a sud-ovest dei due Shrumal Ogre | B
Wanderer's Journal 4 | Fungal Wastes, vicino alla Whispering Root sopra il Mantis Village | B
Wanderer's Journal 5 | City of Tears, a ovest della stazione City Storerooms | B
Wanderer's Journal 6 | City of Tears, a nord della King's Station | B
Wanderer's Journal 7 | City of Tears, Pleasure House, passaggio nascosto | B
Wanderer's Journal 8 | Howling Cliffs | B
Wanderer's Journal 9 | Crystal Peak, stanza con 7 Crystal Crawler | B
Wanderer's Journal 10 | Resting Grounds, vicino al Soul Eater | B
Wanderer's Journal 11 | Royal Waterways, stanza verso l'Ancient Basin | B
Wanderer's Journal 12 | Kingdom's Edge, a ovest vicino all'ingresso della King's Station | B
Wanderer's Journal 13 | Kingdom's Edge, panchina sulla via del Cast-Off Shell | B
Wanderer's Journal 14 | Kingdom's Edge, a nord-ovest di Markoth | B
## Hallownest Seal
Hallownest Seal 1 | Grubfather, per 23 Grub | B
Hallownest Seal 2 | Forgotten Crossroads, stanza segreta a sinistra del pozzo (Mantis Claw) | B
Hallownest Seal 3 | Greenpath, a sud-ovest di Thorns of Agony | B
Hallownest Seal 4 | Fungal Wastes, in alto nella stanza a est della Queen's Station | B
Hallownest Seal 5 | Mantis Village, forziere dopo i Mantis Lords | B
Hallownest Seal 6 | Queen's Station, nel soffitto dove Willoh mangia i funghi | B
Hallownest Seal 7 | Fog Canyon, a nord-est dell'Overgrown Mound | B
Hallownest Seal 8 | Fog Canyon, stanza verso le Forgotten Crossroads, nella parete sinistra | B
Hallownest Seal 9 | Resting Grounds, catacombe a est dell'ascensore | B
Hallownest Seal 10 | Il Seer, a 100 Essence | B
Hallownest Seal 11 | City of Tears, a nord-ovest di Relic Seeker Lemm | B
Hallownest Seal 12 | City of Tears, sopra la stazione King's Station | B
Hallownest Seal 13 | Soul Sanctum, stanza più a ovest dopo il Soul Master | B
Hallownest Seal 14 | Watcher's Spire, a nord-ovest dei Watcher Knight | B
Hallownest Seal 15 | Deepnest, parte sud del Beast's Den | B
Hallownest Seal 16 | Deepnest, a nord-ovest dei Mantis Lords | B
Hallownest Seal 17 | Queen's Gardens, a nord-ovest della stazione dei cervi | B
## King's Idol
King's Idol 1 | Grubfather, per 38 Grub | B
King's Idol 2 | Crystal Peak, sopra il punto dove Cornifer vende la mappa | B
King's Idol 3 | Spirits' Glade (Resting Grounds), dietro una cascata | B
King's Idol 4 | Royal Waterways, stanza segreta del White Defender (Desolate Dive) | B
King's Idol 5 | Howling Cliffs, sud-ovest | B
King's Idol 6 | Kingdom's Edge, sotto il Colosseum of Fools dietro un muro | B
King's Idol 7 | Kingdom's Edge, stanza segreta dietro il Colosseum of Fools | B
King's Idol 8 | Deepnest, a ovest di Zote intrappolato nella ragnatela | B
## Arcane Egg
Arcane Egg 1 | The Abyss, sotto la stanza del Lifeblood Core (prendilo prima del Core!) | B
Arcane Egg 2 | The Abyss, a ovest dello Shade Cloak | B
Arcane Egg 3 | Birthplace, parte sud (serve il Kingsoul) | B
Arcane Egg 4 | Il Seer, a 1200 Essence | B
## Simple Key
Simple Key 1 | Sly a 950 Geo | B
Simple Key 2 | City of Tears nord-ovest, a sud dei City Storerooms | B
Simple Key 3 | Ancient Basin sud-ovest, su un Royal Retainer dentro un Mawlurk | B
Simple Key 4 | Pale Lurker, stanza nascosta dietro il Colosseum of Fools | B
## Chiavi e oggetti
City Crest | Dal False Knight: apre la City of Tears | B
Shopkeeper's Key | Crystal Peak: sblocca nuovi oggetti da Sly | B
Elegant Key | Sly a 800 Geo: apre la stanza di Shade Soul | B
Love Key | Queen's Gardens: apre la Tower of Love | B
Tram Pass | Failed Tramway (Deepnest) | B
Collector's Map | Dal Collector: segna le Grub sulla mappa | B
Rancid Egg | Uova sparse per Hallownest: servono a Jiji | B
Delicate Flower | Grey Mourner (Resting Grounds): missione del Delicate Flower | B
`},

{ id:"journal", name:"Diario del Cacciatore", desc:"Voci del Hunter's Journal con le uccisioni necessarie.", text:`
## Crossroads e Greenpath
Crawlid | Già completa all'ottenimento del diario
Vengefly | 45 uccisioni
Vengefly King | 2 uccisioni
Gruzzer | 25 uccisioni
Gruz Mother | 3 uccisioni
Tiktik | 30 uccisioni
Aspid Hunter | 20 uccisioni
Aspid Mother | 15 uccisioni
Aspid Hatchling | 30 uccisioni
Goam | Si ottiene nelle Forgotten Crossroads
Wandering Husk | 35 uccisioni
Husk Hornhead | 35 uccisioni
Leaping Husk | 35 uccisioni
Husk Bully | 35 uccisioni
Husk Warrior | 10 uccisioni
Husk Guard | 6 uccisioni
Entombed Husk | 10 uccisioni
False Knight | 1 uccisione
Maggot | 2 uccisioni
Menderbug | 1 · voce extra
Lifeseed | 10 uccisioni
Baldur | 20 uccisioni
Elder Baldur | 1 uccisione
Mosscreep | 30 uccisioni
Mossfly | 25 uccisioni
Mosskin | 25 uccisioni
Volatile Mosskin | 25 uccisioni
Fool Eater | 15 uccisioni
Squit | 25 uccisioni
Obble | 20 uccisioni
Gulka | 15 uccisioni
Maskfly | 15 uccisioni
Moss Charger | 15 uccisioni
Massive Moss Charger | 1 uccisione
Moss Knight | 8 uccisioni
Mossy Vagabond | 10 uccisioni
Durandoo | 8 uccisioni
Duranda | 8 uccisioni
Aluba | 1 uccisione
## Fog Canyon e Fungal Wastes
Charged Lumafly | Si ottiene nel Teacher's Archives
Uoma | 20 uccisioni
Ooma | 12 uccisioni
Uumuu | 1 uccisione
Ambloom | 15 uccisioni
Fungling | 30 uccisioni
Fungoon | 20 uccisioni
Sporg | 20 uccisioni
Fungified Husk | 10 uccisioni
Shrumeling | 20 uccisioni
Shrumal Warrior | 20 uccisioni
Shrumal Ogre | 8 uccisioni
Mantis Youth | 25 uccisioni
Mantis Warrior | 25 uccisioni
Mantis Lords | 1 uccisione
## City of Tears e Royal Waterways
Husk Sentry | 25 uccisioni
Heavy Sentry | 20 uccisioni
Winged Sentry | 30 uccisioni
Lance Sentry | 25 uccisioni
Mistake | 25 uccisioni
Folly | 15 uccisioni
Soul Twister | 20 uccisioni
Soul Warrior | 2 uccisioni
Soul Master | 1 uccisione
Husk Dandy | 25 uccisioni
Cowardly Husk | 25 uccisioni
Gluttonous Husk | 25 uccisioni
Gorgeous Husk | 1 uccisione
Great Husk Sentry | 10 uccisioni
Watcher Knight | 1 · dopo tutti i Watcher Knight
The Collector | 1 uccisione
Belfly | 15 uccisioni
Pilflip | 20 uccisioni
Hwurmp | 20 uccisioni
Bluggsac | 5 uccisioni
Dung Defender | 1 uccisione
White Defender | 1 · voce extra
Flukefey | 15 uccisioni
Flukemon | 20 uccisioni
Flukemunga | 8 uccisioni
Flukemarm | 1 uccisione
## Crystal Peak e Resting Grounds
Shardmite | 15 uccisioni
Glimback | 15 uccisioni
Crystal Hunter | 20 uccisioni
Crystal Crawler | 15 uccisioni
Husk Miner | 20 uccisioni
Crystallised Husk | 15 uccisioni
Crystal Guardian | 2 · serve anche l'Enraged Guardian
## Infetti e Deepnest
Furious Vengefly | 15 uccisioni
Volatile Gruzzer | 15 uccisioni
Violent Husk | 15 uccisioni
Slobbering Husk | 15 uccisioni
Dirtcarver | 35 uccisioni
Carver Hatcher | 15 uccisioni
Garpede | Si ottiene leggendo una tavoletta
Corpse Creeper | 15 uccisioni
Deepling | 25 uccisioni
Deephunter | 20 uccisioni
Little Weaver | 20 uccisioni
Stalking Devout | 15 uccisioni
Nosk | 1 uccisione
Shadow Creeper | 20 uccisioni
## Ancient Basin, Kingdom's Edge e Hive
Lesser Mawlek | 10 uccisioni
Mawlurk | 10 uccisioni
Brooding Mawlek | 1 uccisione
Lightseed | 20 uccisioni
Infected Balloon | 10 uccisioni
Broken Vessel | 1 uccisione
Boofly | 20 uccisioni
Primal Aspid | 25 uccisioni
Hopper | 25 uccisioni
Great Hopper | 10 uccisioni
Grub Mimic | 5 uccisioni
Hiveling | 30 uccisioni
Hive Soldier | 15 uccisioni
Hive Guardian | 12 uccisioni
Husk Hive | 10 uccisioni
Hive Knight | 1 uccisione
## Queen's Gardens e Colosseo
Spiny Husk | 20 uccisioni
Loodle | 15 uccisioni
Mantis Petra | 16 uccisioni
Mantis Traitor | 15 uccisioni
Traitor Lord | 1 uccisione
Sharp Baldur | 20 uccisioni
Armoured Squit | 15 uccisioni
Battle Obble | 15 uccisioni
Oblobbles | 1 uccisione
Shielded Fool | 25 uccisioni
Sturdy Fool | 25 uccisioni
Winged Fool | 25 uccisioni
Heavy Fool | 20 uccisioni
Death Loodle | 15 uccisioni
Volt Twister | 6 uccisioni
God Tamer | 1 uccisione
Pale Lurker | 1 uccisione
## Sogni, Grimm e Godmaster
Zote | 1 · voce extra
Grey Prince Zote | 1 · voce extra
Winged Zoteling | 1 · voce extra
Hopping Zoteling | 1 · voce extra
Volatile Zoteling | 1 · voce extra
Xero | 1 uccisione
Gorb | 1 uccisione
Elder Hu | 1 uccisione
Marmu | 1 uccisione
No Eyes | 1 uccisione
Galien | 1 uccisione
Markoth | 1 uccisione
Grimmkin Novice | 1 · voce extra
Grimmkin Master | 1 · voce extra
Grimmkin Nightmare | 1 · voce extra
Grimm | 1 · voce extra
Nightmare King | 1 · dopo il Rituale
Nailmasters Oro & Mato | 1 · voce extra
Paintmaster Sheo | 1 · voce extra
Great Nailsage Sly | 1 · voce extra
## White Palace e Abyss
Wingmould | 10 uccisioni
Royal Retainer | 10 uccisioni
Kingsmould | 2 uccisioni
Sibling | 25 uccisioni
Void Tendrils | Si ottiene leggendo una tavoletta
Hornet | 2 uccisioni
Hollow Knight | 1 · voce extra
Pure Vessel | 1 · voce extra
Radiance | 1 uccisione
Shade | Già completa all'ottenimento del diario
Hunter's Mark | Completa tutte le voci del diario
Seal of Binding | Completa i quattro Pantheon
Void Idol | Sconfiggi i boss della Hall of Gods
Weathered Mask | Completa tutti i Pantheon
`},

{ id:"achievements", name:"Achievement", desc:"Trofei della piattaforma.", text:`
## Raccolta
Charmed | Ottieni il primo amuleto
Enchanted | Ottieni metà degli amuleti
Blessed | Tutti gli amuleti e la benedizione di Salubra
Protected | Ottieni 4 Mask Shard
Masked | Ottieni tutti i Mask Shard
Soulful | Ottieni 3 Vessel Fragment
Worldsoul | Ottieni tutti i Vessel Fragment
Grubfriend | Libera metà delle Grub
Metamorphosis | Libera tutte le Grub
Connection | Apri metà delle stazioni dei cervi
Hope | Apri tutte le stazioni e scopri lo Stag Nest
Cartographer | Ottieni la mappa di ogni area
Attunement | Raccogli 600 Essence
Awakening | Raccogli 1800 Essence e risveglia il Dream Nail
Ascension | Raccogli 2400 Essence e ascolta le ultime parole del Seer
Keen Hunter | Registra tutte le creature nel Hunter's Journal
True Hunter | Ricevi il Hunter's Mark
## Boss
Falsehood | Sconfiggi il False Knight
Strength | Sconfiggi il Failed Champion
Test of Resolve | Sconfiggi Hornet a Greenpath
Proof of Resolve | Sconfiggi Hornet a Kingdom's Edge
Illumination | Sconfiggi il Soul Master
Mortality | Sconfiggi il Soul Tyrant
Release | Sconfiggi il Broken Vessel
Peace | Sconfiggi il Lost Kin
Honour | Sconfiggi il Dung Defender
Respect | Sconfiggi i Mantis Lords
Obsession | Sconfiggi il Collector
Execution | Sconfiggi il Traitor Lord
Rivalry | Sconfiggi Zote nel Colosseum of Fools
Memory | Sconfiggi il White Defender
Dark Romance | Sconfiggi Grey Prince Zote
Teacher | Distruggi Monomon the Teacher
Watcher | Distruggi Lurien the Watcher
Beast | Distruggi Herrah the Beast
## Storie e scelte
Neglect | Lascia morire Zote
Witness | Passa un ultimo momento con Quirrel
Purity | Uccidi il Nailsmith con il Pure Nail
Happy Couple | Aiuta il Nailsmith a trovare una nuova vocazione
Solace | Dai pace al Grey Mourner
Void | Ricorda il passato e unisci l'Abyss
Warrior | Completa il Trial of the Warrior
Conqueror | Completa il Trial of the Conqueror
Fool | Completa il Trial of the Fool
Grand Performance | Sconfiggi Troupe Master Grimm
Ritual | Sconfiggi il Nightmare King e completa il Rituale
Banishment | Esilia la Grimm Troupe da Hallownest
Brotherhood | Completa il Pantheon of the Master
Inspiration | Completa il Pantheon of the Artist
Focus | Completa il Pantheon of the Sage
Soul & Shade | Completa il Pantheon of the Knight
## Finali e sfide
The Hollow Knight | Sconfiggi The Hollow Knight e diventa il Vaso
Sealed Siblings | Sconfiggi The Hollow Knight con Hornet al tuo fianco
Dream No More | Sconfiggi The Radiance
Embrace the Void | Completa il Pantheon of Hallownest
Passing of the Age | Aiuta l'Araldo a proseguire
Completion | 100% e finisci il gioco
Speed Completion | 100% in meno di 20 ore
Speedrun 1 | Finisci il gioco in meno di 10 ore
Speedrun 2 | Finisci il gioco in meno di 5 ore
Steel Soul | Finisci il gioco in modalità Steel Soul
Steel Heart | 100% in modalità Steel Soul
Pure Completion | 112% e finisci il gioco
`}
];
