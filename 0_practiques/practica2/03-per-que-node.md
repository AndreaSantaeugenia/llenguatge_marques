### Per què necessites **Node.js** i **npm** per Webpack?

**Webpack** és una eina de bundling moderna que ajuda a empaquetar i gestionar els recursos del projecte (com ara CSS, JavaScript, SASS, imatges, etc.). Però per funcionar, depèn de l'ecosistema **Node.js** i **npm**. A continuació, t'explico per què:

---

### 1. **Node.js** com a Entorn d'Execució

**Node.js** és un entorn d'execució JavaScript del costat del servidor. És essencial per a Webpack perquè:

- **Webpack està escrit en JavaScript** i necessita un entorn per executar-se.
- Node.js proporciona accés a **mòduls del sistema de fitxers** i altres API necessàries per empaquetar els recursos, llegir i escriure fitxers, i executar scripts.

---

### 2. **npm** com a Gestor de Paquets

**npm** (Node Package Manager) és una eina que ve integrada amb Node.js i que s’utilitza per gestionar les dependències del projecte. Webpack necessita diverses dependències per funcionar correctament:

- **Webpack en si mateix** és un paquet disponible a npm.
- **Plugins i loaders de Webpack** com `sass-loader`, `css-loader` o `babel-loader` són també paquets npm.

Amb **npm** pots:

- Instal·lar **Webpack** i totes les seves dependències amb una comanda senzilla.
- Gestionar actualitzacions de versions i dependències.
- Compartir una configuració predeterminada a través del fitxer `package.json`.

---

### 3. Com Webpack Utilitza Node.js i npm

Quan executes Webpack, el procés és el següent:

1. **Node.js** executa Webpack (que està escrit en JavaScript).
2. Webpack llegeix la seva configuració (`webpack.config.js`) per saber:
   - Quins fitxers ha de compilar.
   - Quins loaders i plugins utilitzar.
3. **npm** gestiona tots els plugins i loaders que Webpack necessita, assegurant-se que es troben instal·lats correctament.

---

### 4. Beneficis d'Aquesta Integració

- **Modularitat:** Amb npm pots afegir només els plugins i loaders necessaris per al teu projecte.
- **Portabilitat:** Qualsevol persona que cloni el projecte pot instal·lar totes les dependències simplement executant `npm install`.
- **Actualització fàcil:** Pots actualitzar Webpack i altres eines sense haver d’editar manualment els fitxers d’instal·lació.
- **Comunitat:** Hi ha milers de plugins i eines disponibles a l’ecosistema npm per ampliar les funcionalitats de Webpack.

---

### Exemple

Quan executis la comanda:

```bash
npm install --save-dev webpack webpack-cli sass-loader css-loader
```

**npm**:
- Baixa Webpack i els loaders des del registre públic de npm.
- Instala aquests paquets a la carpeta `node_modules`.
- Actualitza automàticament el fitxer `package.json` per mantenir un registre de les dependències.

A partir d’aquí, **Node.js** pot executar Webpack utilitzant aquestes dependències.

