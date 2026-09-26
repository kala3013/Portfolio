@echo off
title Kalanidhi Portfolio Server
echo ========================================================
echo Starting Kalanidhi Portfolio Server...
echo ========================================================
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
