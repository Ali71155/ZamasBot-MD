## Zamas - Bot - MD ✨️

- #### `🚩 Clonar El Repositorio`
 Clonar CuriosityBot [Aqui](https://github.com/elias1524/ZamasBot-MD/fork)

- #### 🚩 Instalacion Manual Por Termux
> Escribe Estos Comandos Uno Por Uno

```bash
termux-setup-storage
```

```bash
apt-get update -y && apt-get upgrade -y
```

```bash
pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn
```

```bash
git clone https://github.com/elias1524/ZamasBot-MD && cd ZamasBot-MD && yarn install && npm install
```

```bash
ls
```
```bash
npm update
```

```bash
npm start
```

- #### 🚩 Activar En Caso De Detenerse En Termux
> Escribe Estos Comandos Uno Por Uno
```bash
> cd
> cd ZamasBot-MD
> npm start
```

- #### 🚩 Obtener Otro Codigo Qr
> 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙴𝚂𝚃𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚄𝙽𝙾 𝙿𝙾𝚁 𝚄𝙽𝙾:
```bash
> cd ZamasBot-MD
> rm -rf sessions
> npm start
```

- ### 🚩 Actualizar ZamasBot 
> Note Comandos para actualizar ZamasBot-MD de forma automática
```bash
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/elias1524/ZamasBot-MD/master/update.sh | bash
```
Para que no pierda su progreso en ZamasBot, estos comandos realizarán un respaldo de su `database.json` y se agregará a la versión más reciente.

> Warning Estos comandos solo funcionan para TERMUX, REPLIT, LINUX

- #### 🎌 Para Activar 24/7 (Termux)
> Este Comando Debe Ir En La Carpeta ZamasBot-MD
```bash
> npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```
----
- ### 🎌 Instalacion Por Code Dpace

[`CREAR SERVIDOR`](https://github.com/codespaces/new?skip_quickstart=true&machine=basicLinux32gb&repo=674862525&ref=main&geo=UsEast)


### EDITOR Y PROPIETARIO DEL BOT
<a href="https://github.com/elias1524"><img src="https://github.com/elias1524.png" width="250" height="250" alt="Ivan15"/></a>