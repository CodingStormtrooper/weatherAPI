# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Weather web application with a Node.js/Express backend that proxies OpenWeatherMap API requests and a vanilla JS/HTML/CSS frontend.

## Commands

- **Start server:** `npm start` (runs `node server.mjs` on port 3000)
- **Frontend:** Open `weather_index.html` via VS Code Live Server (port 5501)
- **No test suite or linter configured**

## Architecture

ES Module project (`"type": "module"` in package.json).

**Backend** (`server.mjs`) — Express server on port 3000 with a single endpoint:
- `GET /weather?city={city}` — proxies requests to OpenWeatherMap API, keeping the API key server-side via `process.env.OPENWEATHER_API_KEY` (loaded from `.env` with dotenv)

**Frontend** (`weather_index.html`, `weather.js`, `weather.css`) — Vanilla JS. Sends requests to `localhost:3000/weather`, converts temperature from Kelvin to Fahrenheit, and displays weather icon.

## Environment

Requires a `.env` file in the project root with:
```
OPENWEATHER_API_KEY=<your-key>
```
