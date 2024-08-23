#!/bin/sh -i

PATH=/sbin:/bin:/usr/sbin:/usr/bin:/usr/syno/sbin:/usr/syno/bin:/usr/local/sbin:/usr/local/bin:/var/services/homes/fankangsong/.local/bin

cd /var/services/homes/fankangsong/code/workspace/blog

git pull
npm run build
# scp -r public blog:/root/html/imcolin.fan/

rsync -avz --chmod=777 -P public blog:/root/html/imcolin.fan/
sh /var/services/homes/fankangsong/code/notify.sh "blog已部署完成✅"
