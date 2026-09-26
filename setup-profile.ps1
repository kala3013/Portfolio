$dirs = @(
    "$HOME\OneDrive\Documents\WindowsPowerShell",
    "$HOME\Documents\WindowsPowerShell",
    "$HOME\OneDrive\Documents\PowerShell",
    "$HOME\Documents\PowerShell"
)

$profileContent = @'
$nodeDir = "C:\Users\kalan\AppData\Local\Programs\nodejs"
$gitDir = "C:\Program Files\Git\cmd"
if ($env:Path -notlike "*$nodeDir*") {
    $env:Path = "$nodeDir;$env:Path"
}
if ($env:Path -notlike "*$gitDir*") {
    $env:Path = "$gitDir;$env:Path"
}
'@

foreach ($d in $dirs) {
    if (-not (Test-Path $d)) {
        New-Item -ItemType Directory -Path $d -Force | Out-Null
    }
    Set-Content -Path (Join-Path $d "Microsoft.PowerShell_profile.ps1") -Value $profileContent -Encoding UTF8
    Set-Content -Path (Join-Path $d "profile.ps1") -Value $profileContent -Encoding UTF8
}
