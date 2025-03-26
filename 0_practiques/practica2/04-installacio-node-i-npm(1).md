### Instal·lació de **Node.js** i **npm** a Fedora

Per instal·lar **Node.js** i **npm** a Fedora, segueix aquests passos:

---

### 1. Verificar si ja tens Node.js i npm instal·lats

Primer, comprova si ja tens instal·lats **Node.js** i **npm** al teu sistema:

```bash
node -v
npm -v
```

Si aquests comandaments retornen una versió, ja tens instal·lats **Node.js** i **npm**. Si no, continua amb els passos següents.

---

### 2. Utilitzar el repositori oficial de NodeSource

La manera més senzilla d'obtenir una versió actualitzada de **Node.js** a Fedora és utilitzar el repositori NodeSource.

1. **Instal·la el repositori de NodeSource**:

   Per a la versió LTS (recomanada):

   ```bash
   curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
   ```

   Per a la darrera versió estable:

   ```bash
   curl -fsSL https://rpm.nodesource.com/setup_current.x | sudo bash -
   ```

2. **Instal·la Node.js i npm**:

   Després d'afegir el repositori, instal·la Node.js (npm s'instal·la automàticament):

   ```bash
   sudo dnf install nodejs
   ```

---

### 3. Comprovar la Instal·lació

Comprova que **Node.js** i **npm** s'han instal·lat correctament:

```bash
node -v
npm -v
```

Aquestes comandes haurien de retornar les versions instal·lades de **Node.js** i **npm**.

---

### 4. Instal·lació Opcional: **n** per Gestionar Versions de Node.js

Si vols gestionar fàcilment diferents versions de Node.js, pots instal·lar el gestor de versions `n`.

1. **Instal·la `n` globalment**:

   ```bash
   sudo npm install -g n
   ```

2. **Instal·la una versió específica de Node.js**:

   Per exemple, per instal·lar la darrera versió LTS:

   ```bash
   sudo n lts
   ```

3. Per canviar entre versions instal·lades:

   ```bash
   sudo n <versió>
   ```

---

### 5. Actualitzar npm (Opcional)

Per assegurar-te que tens l'última versió de **npm**:

```bash
sudo npm install -g npm
```

---

### 6. Desinstal·lar Node.js (si cal reinstal·lar-lo)

Si necessites desinstal·lar **Node.js** per qualsevol raó:

```bash
sudo dnf remove nodejs
```

