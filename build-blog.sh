#!/bin/sh -i

PATH=/root/.nvm/versions/node/v16.20.2/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin

cd /root/blog

git pull
npm run build
scp public blog:/root/html/imcolin.fan/
sh /root/sh/notify.sh blog已部署完成✅
