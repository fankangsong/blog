#!/bin/sh -i

cd /root/blog

git pull
npm run build
scp public blog:/root/html/imcolin.fan/
sh /root/sh/notify.sh blog已部署完成✅
