#!/bin/sh -i

PATH=/sbin:/bin:/usr/sbin:/usr/bin:/usr/syno/sbin:/usr/syno/bin:/usr/local/sbin:/usr/local/bin:/var/services/homes/fankangsong/.local/bin

cd /var/services/homes/fankangsong/code/workspace/blog || exit 1

git pull || exit 1

npm run build || exit 1

rsync -avz --chmod=777 -P public blog:/root/html/imcolin.fan || exit 1

curl -X POST -d "token=Colin123.com&msg=博客发布完成" https://imcolin.fan/notify || exit 1
