@echo off
chcp 65001 >nul
title 七宗罪测试系统 · 本地运行服务
echo ====================================================
echo   七宗罪 · 灵魂暗面深度测验系统 正在启动...
echo ====================================================
echo 1. 正在启动本地 HTTP 网页服务器 (http://localhost:8080)...
echo 2. 正在自动为您打开前台测试页面...
echo 3. 如需进入管理后台，请在浏览器访问: http://localhost:8080/admin.html
echo.
echo 注意：请保持此黑色窗口处于打开状态，关闭窗口即停止服务。
echo ====================================================
start http://localhost:8080
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
