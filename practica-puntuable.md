# Pràctica: Selecció d'equips per a una multinacional amb noves instal·lacions a Granollers

## Context empresarial

Benvingut/da a **Multinacionals Global**, una de les empreses més importants del món en expansió. Ens complau anunciar l'obertura d'unes noves instal·lacions a **Granollers**, on allotjarem un equip de 500 treballadors. Aquesta empresa treballa en sectors punters de la tecnologia i la creativitat.

El CEO ha encarregat a l'equip tècnic la selecció dels **ordinadors de sobretaula** més adequats per als treballadors, segons el tipus d'activitat de l'empresa. L'objectiu és proporcionar a cadascun dels treballadors un ordinador que s'ajusti perfectament a les necessitats de la feina, mantenint un **pressupost coherent** i raonable.

### Tipus d'empreses

Els alumnes poden escollir una de les següents empreses:

1. **Empresa de gestió telefònica (Call Center)**.
2. **Desenvolupament de videojocs**.
3. **Ciberseguretat**.
4. **Productora de vídeos**.

### Objectiu de la pràctica

La tasca consisteix a preparar un **informe tècnic** on es descrigui la configuració d'un **ordinador de sobretaula** per a **tots els treballadors** de l'empresa que has escollit. Cal que **justifiquis cada elecció** de component en funció de les necessitats de la feina, basant-te en dades, **estudis**, i **referències tècniques**.

A més, **l'informe final s'ha de pujar al GitHub personal de l'alumne** en la següent ruta: `ASIX01-fonaments-maquinari/UF01/practica/informe`.

---

## Instruccions per a la realització de la pràctica

### 1. Selecció del tipus d'empresa

Has d'escollir una de les quatre opcions següents:

1. **Gestió telefònica (Call Center)**: Ordinadors amb una configuració bàsica però eficient, optimitzats per al maneig de grans bases de dades i aplicacions de telefonia IP.

2. **Desenvolupament de videojocs**: Ordinadors d'alt rendiment amb grans capacitats gràfiques, per permetre la creació de videojocs en entorns 3D avançats.

3. **Ciberseguretat**: Ordinadors orientats a l'anàlisi de seguretat, treballant amb eines d'escaneig de xarxes, simulació d'atacs i defensa, i anàlisi de grans volums de dades.

4. **Productora de vídeos**: Ordinadors altament potents amb capacitats per a l'edició de vídeo i renderització de material audiovisual d'alta definició.

---

### 2. Components de l'ordinador

Per a cadascun dels components següents, hauràs d'explicar **quina marca/model** has seleccionat i per què és la millor opció. A més, hauràs de proporcionar **justificacions** basades en estudis i comparacions de rendiment, sempre que sigui possible.

#### 2.1. CPU (Processador)

- Explica quina **CPU** escolliràs per als 500 ordinadors i **justifica la seva elecció**.
- Proporciona dades sobre la **velocitat del rellotge**, el nombre de **nuclis** i **fils**, la **cache**, i com aquests factors influencien la feina segons el tipus d'empresa.
  
**Exemple d'empresa de desenvolupament de videojocs:**

```markdown
Escollim la **Intel Core i9-11900K** perquè, amb els seus 8 nuclis i 16 fils, permet gestionar aplicacions 3D intensives i múltiples tasques simultànies com la creació de gràfics. Segons un estudi de *TechSpot*, aquest processador ofereix el millor rendiment en aplicacions com *Blender* i *Unity* comparat amb altres opcions. [Font: TechSpot](https://www.techspot.com/review/2214-core-i9-11900k-vs-ryzen-5900x/).
```

#### 2.2. Memòria RAM

- Quanta **RAM** necessitaran aquests ordinadors per a les tasques que realitzaran?
- Has de detallar quina capacitat (per exemple, 16 GB o 32 GB) i quina velocitat (per exemple, DDR4 a 3200 MHz) és la més adequada.

**Exemple d'empresa de ciberseguretat:**

```markdown
Optem per **32 GB de RAM DDR4 a 3200 MHz** perquè l'anàlisi de grans volums de dades requereix molta memòria, especialment quan es treballa amb simulacions de xarxes o escanejos complets. La memòria addicional evita colls d'ampolla i assegura que el processament sigui fluid en aplicacions com *Wireshark* o *Splunk*.
```

#### 2.3. Emmagatzematge (SSD o HDD)

- Justifica si optaràs per un **SSD** o un **HDD**, o fins i tot una combinació dels dos.
- Explica la **capacitat** i el tipus de **tecnologia** que farà que l'emmagatzematge sigui el més òptim.

**Exemple d'empresa productora de vídeos:**

```markdown
S'utilitzaran **2 TB de SSD NVMe** per assegurar una velocitat de lectura/escriptura ultra ràpida, especialment durant la renderització de vídeos d'alta definició. Els SSD NVMe són fins a 10 vegades més ràpids que els HDD tradicionals i permeten treballar amb grans fitxers sense perdre rendiment. Segons un estudi de *Tom's Hardware*, el **Samsung 970 EVO Plus** és una de les opcions més rendibles i ràpides del mercat. [Font: Tom's Hardware](https://www.tomshardware.com/reviews/samsung-970-evo-plus-nvme-ssd-review).
```

#### 2.4. Targeta gràfica (GPU)

- Aquest punt és fonamental per a empreses com les de desenvolupament de videojocs o productores de vídeos. Explica la **GPU** escollida i per què és rellevant segons el tipus de feina.

**Exemple d'empresa de desenvolupament de videojocs:**

```markdown
Per aquest projecte, escollim la **NVIDIA RTX 3080** perquè ofereix un rendiment excepcional en entorns de desenvolupament de videojocs 3D. Amb 10 GB de memòria GDDR6X, permet treballar amb textures d'alta resolució i gràfics en temps real. Un estudi de *PC Gamer* demostra que la RTX 3080 proporciona un rendiment fins a 50% superior en *Unreal Engine* comparat amb la generació anterior. [Font: PC Gamer](https://www.pcgamer.com/nvidia-geforce-rtx-3080-review/).
```

#### 2.5. Font d'alimentació (PSU)

- Cal tenir en compte el consum energètic de la configuració que has escollit. Justifica la **potència** de la font d'alimentació.

**Exemple:**

```markdown
Optem per una font d'alimentació de **750 W** per assegurar que l'equip rebi suficient energia, especialment amb components d'alt rendiment com la RTX 3080. Segons un estudi de *Corsair*, aquesta potència és suficient per gestionar pics de consum i mantenir l'estabilitat del sistema. [Font: Corsair Power Supply Guide](https://www.corsair.com/us/en/psu).
```

#### 2.6. Placa base

- La **placa base** ha de ser compatible amb la CPU i els altres components. Justifica per què has escollit aquesta placa base, destacant factors com la compatibilitat amb **PCIe 4.0**, nombre de ranures RAM, etc.

---

### 3. Pressupost estimat

Després d'explicar tots els components, has de calcular un pressupost per a l'ordinador seleccionat i després multiplicar-ho per 500 treballadors. Mantingues el pressupost dins d'uns límits raonables per a l'empresa, assegurant que cada component escollit és justificat pel seu cost.

**Exemple de pressupost per a una empresa de productora de vídeos:**

```markdown
- CPU: Intel Core i9-11900K - 500€
- GPU: NVIDIA RTX 3080 - 1000€
- RAM: 32 GB DDR4 3200 MHz - 150€
- SSD: Samsung 970 EVO Plus 2TB - 300€
- Placa base: ASUS ROG Strix Z590-E - 350€
- PSU: 750W Corsair RM750 - 120€
- Xassís: NZXT H510 - 100€
Total per ordinador: 2520€

Total per a 500 treballadors: 1.260.000€
```

---

### 4. Conclusió

L'últim apartat de l'informe ha de justificar per què la configuració d'ordinador escollida és òptima per a l'empresa seleccionada. La conclusió ha de posar èmfasi en la relació qualitat-preu, el rendiment que s'aconseguirà, i la durabilitat dels components.

---

### 5. GitHub: Pujada de l'informe

Quan acabis l'informe, l'hauràs de pujar al teu GitHub personal seguint aquest format de directori:

```markdown
ASIX01-fonaments-maquinari/UF01/practica/informe
```

---

### 6. Referències

Inclou totes les referències que hagis utilitzat per justificar les teves decisions. Això pot incloure estudis de rendiment, articles tècnics, comparacions de preus, i guies de maquinari.

---
