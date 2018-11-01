start "" taskkill /IM node.exe /F /popup
start "" pm2 start bin\server -s /popup
start "" http://127.0.0.1:8558 /popup
start "" taskkill /IM cmd.exe /F
exit