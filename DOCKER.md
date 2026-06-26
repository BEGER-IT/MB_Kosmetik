# Docker-Anleitung für BEGER-IT Website

Diese Anleitung zeigt dir, wie du das Projekt mit Docker ausführst.

## Voraussetzungen

- Docker installiert ([docker.com](https://www.docker.com))
- Docker Compose installiert

## Schnelleinstieg

### 1. Umgebungsvariablen konfigurieren

Kopiere die `.env.example` Datei:

```bash
cp .env.example .env
```

Bearbeite die `.env` Datei und füge deine Konfigurationswerte ein:

```env
RESEND_API_KEY=re_dein_api_key
RESEND_FROM_EMAIL=info@beger-it.de
# ... weitere Variablen
```

### 2. Container starten

```bash
docker-compose up -d
```

Die Website läuft dann unter: **http://localhost:3000**

### 3. Logs anschauen

```bash
docker-compose logs -f beger-it-web
```

### 4. Container stoppen

```bash
docker-compose down
```

## Docker-Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `docker-compose up -d` | Container im Hintergrund starten |
| `docker-compose down` | Container stoppen und entfernen |
| `docker-compose logs -f` | Live-Logs anschauen |
| `docker-compose restart` | Container neu starten |
| `docker-compose build` | Image neu bauen |
| `docker-compose ps` | Status anschauen |

## Entwicklungsmodus mit Docker

Falls du im Entwicklungsmodus mit Hot-Reload arbeiten möchtest:

```bash
docker-compose -f docker-compose.dev.yml up
```

Erstelle dafür eine `docker-compose.dev.yml`:

```yaml
version: '3.8'

services:
  beger-it-web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    # ... weitere Umgebungsvariablen
```

## Troubleshooting

### Port 3000 ist bereits in Benutzung

Ändere den Port in `docker-compose.yml`:

```yaml
ports:
  - "3001:3000"  # Port 3001 -> Container Port 3000
```

### Container startet nicht

Logs prüfen:
```bash
docker-compose logs beger-it-web
```

### Abhängigkeiten aktualisieren

```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Production Deployment

Für Production solltest du zusätzliche Sicherheitsmaßnahmen treffen:

1. **Reverse Proxy**: Nutze Nginx oder Traefik als Reverse Proxy
2. **HTTPS**: Konfiguriere SSL/TLS Zertifikate
3. **Environment**: Nutze eine sichere `.env` Datei (nicht in Git committen)
4. **Monitoring**: Konfiguriere Logging und Monitoring

Beispiel mit Nginx als Reverse Proxy:

```yaml
version: '3.8'

services:
  beger-it-web:
    build: .
    ports:
      - "3000"
    restart: unless-stopped
    environment:
      # ... env vars

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - beger-it-web
```

## Support

Bei Fragen oder Problemen öffne ein Issue im Repository.
