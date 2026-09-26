# Portable User-Level Installer for Node.js LTS and npm
# No Administrator / UAC prompt required

$ErrorActionPreference = "Stop"

$version = "v22.14.0"
$nodeZipUrl = "https://nodejs.org/dist/$version/node-$version-win-x64.zip"
$installDir = "$env:LOCALAPPDATA\Programs\nodejs"
$tempZip = "$env:TEMP\node-$version-win-x64.zip"
$tempExtract = "$env:TEMP\node-$version-extract"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  INSTALLING NODE.JS & NPM (USER PROFILE - NO ADMIN NEEDED)" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "Target directory: $installDir" -ForegroundColor Gray
Write-Host "Downloading $nodeZipUrl..." -ForegroundColor Yellow

if (-not (Test-Path $installDir)) {
    New-Item -ItemType Directory -Path $installDir -Force | Out-Null
}

# Download using .NET WebClient for high speed
$webClient = New-Object System.Net.WebClient
$webClient.DownloadFile($nodeZipUrl, $tempZip)

Write-Host "Download complete. Extracting..." -ForegroundColor Yellow

if (Test-Path $tempExtract) {
    Remove-Item -Path $tempExtract -Recurse -Force
}

Expand-Archive -Path $tempZip -DestinationPath $tempExtract -Force

Write-Host "Copying files to $installDir..." -ForegroundColor Yellow
Copy-Item -Path "$tempExtract\node-$version-win-x64\*" -Destination $installDir -Recurse -Force

# Cleanup temp files
Remove-Item -Path $tempZip -Force -ErrorAction SilentlyContinue
Remove-Item -Path $tempExtract -Recurse -Force -ErrorAction SilentlyContinue

# Update User Environment Variable permanently
$userPath = [System.Environment]::GetEnvironmentVariable("Path", "User")
if ($userPath -notlike "*$installDir*") {
    $newUserPath = "$installDir;$userPath"
    [System.Environment]::SetEnvironmentVariable("Path", $newUserPath, "User")
    Write-Host "Added $installDir to User PATH." -ForegroundColor Green
} else {
    Write-Host "$installDir is already in User PATH." -ForegroundColor Gray
}

# Also update the current PowerShell session PATH
$env:Path = "$installDir;$env:Path"

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  VERIFYING INSTALLATION" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan
$nodeVer = & "$installDir\node.exe" -v
$npmVer = & "$installDir\npm.cmd" -v
Write-Host "  Node Version: $nodeVer" -ForegroundColor Green
Write-Host "  npm Version:  $npmVer" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan
