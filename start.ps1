# UOLV2 - one-command setup + dev server (ASCII-only).
# Run from anywhere:
#   powershell -ExecutionPolicy Bypass -File C:\Users\Mj\UOLV2-work\start.ps1
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root
Write-Host "[INFO] working dir: $root" -ForegroundColor Cyan

# .env
if (-not (Test-Path .env)) {
  Copy-Item .env.example .env
  Write-Host "[OK] created .env" -ForegroundColor Green
}

# install
if (-not (Test-Path node_modules)) {
  Write-Host "[INFO] installing packages..." -ForegroundColor Cyan
  npm install
}

# prisma client
Write-Host "[INFO] generating prisma client..." -ForegroundColor Cyan
npx prisma generate

# sqlite db (dev only)
$db = Join-Path $root 'prisma\dev.db'
$needsInit = (-not (Test-Path $db)) -or ((Get-Item $db).Length -eq 0)
if ($needsInit) {
  Write-Host "[INFO] creating sqlite db + tables..." -ForegroundColor Cyan
  npx prisma db push --skip-generate
  Write-Host "[INFO] seeding catalogue (20 products, 4 categories)..." -ForegroundColor Cyan
  npx tsx prisma/seed.ts
}

Write-Host ""
Write-Host "[OK] starting dev server at http://localhost:3000" -ForegroundColor Green
Write-Host "[INFO] press Ctrl+C to stop"
Write-Host ""
npm run dev
