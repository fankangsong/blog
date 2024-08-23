#!/bin/sh -i

PATH=/sbin:/bin:/usr/sbin:/usr/bin:/usr/syno/sbin:/usr/syno/bin:/usr/local/sbin:/usr/local/bin:/var/services/homes/fankangsong/.local/bin

cd /root/blog

git pull
npm run build

cp -r public /root/html/imcolin.fan/

curl -X POST -d "token=Colin123.com&msg=博客编译完成" https://imcolin.fan/notify
