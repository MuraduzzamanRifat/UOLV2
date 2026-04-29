# GreenKart — one-command setup + dev server.
# Run from anywhere:    powershell -ExecutionPolicy Bypass -File C:\Users\Mj\organic-store-demo\web\start.ps1
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root
Write-Host "› working dir: $root" -ForegroundColor Cyan

# .env
if (-not (Test-Path .env)) {
  Copy-Item .env.example .env
  Write-Host "› created .env" -ForegroundColor Green
}

# install
if (-not (Test-Path node_modules)) {
  Write-Host "› installing packages (this takes ~60s)..." -ForegroundColor Cyan
  npm install
}

# prisma client + db
Write-Host "› generating prisma client..." -ForegroundColor Cyan
npx prisma generate

if (-not (Test-Path prisma\dev.db)) {
  Write-Host "› creating sqlite db..." -ForegroundColor Cyan
  npx prisma db push --skip-generate
  Write-Host "› seeding catalogue..." -ForegroundColor Cyan
  npx tsx prisma/seed.ts
}

Write-Host ""
Write-Host "› starting dev server at http://localhost:3000" -ForegroundColor Green
Write-Host "› press Ctrl+C to stop"
Write-Host ""
npm run dev
