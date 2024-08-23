#!/bin/sh -i

curl -X POST -d "token=Colin123.com&msg=开始同步" https://imcolin.fan/notify

rsync -avz --chmod=777 -P post blog:/root/blog/

curl -X POST -d "token=Colin123.com&msg=开始完成" https://imcolin.fan/notify

ssh root@blog "sh /root/blog/run.sh"