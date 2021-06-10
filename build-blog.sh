#!/bin/sh

cd blog

git pull

npm run build

cp -rf public ../html/imcolin.fan/

curl https://service-97nccwao-1251499259.ap-hongkong.apigateway.myqcloud.com/release/telebot?msg=blog-is-published
