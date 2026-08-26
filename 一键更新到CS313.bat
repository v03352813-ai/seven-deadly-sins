@echo off
chcp 65001 >nul
cls
echo =======================================================
echo   正在自动同步【42款千人千面七宗罪】到 cs313.cn...
echo =======================================================
echo.
git config http.proxy http://127.0.0.1:15236
git config https.proxy http://127.0.0.1:15236
git push quiz-online main
if %ERRORLEVEL% equ 0 (
    echo.
    echo =======================================================
    echo  [成功] 代码已全量同步完成！
    echo  立即在手机上访问体验: https://cs313.cn/sin
    echo =======================================================
) else (
    echo.
    echo 尝试直连模式推送...
    git config --unset http.proxy
    git config --unset https.proxy
    git push quiz-online main
)
echo.
pause