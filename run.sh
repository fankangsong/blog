#!/bin/sh

cd /srv/webdav/data/code-server/workspace/blog
sh build.sh >> build.log 2>&1 &
