#!/bin/sh

cd /srv/webdav/data/workspace/blog
sh build.sh >> build.log 2>&1 &
