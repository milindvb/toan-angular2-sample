#!/bin/bash
echo "hello"
echo "nameserver 8.8.8.8" > /etc/resolv.conf
pm2 serve /home/site/wwwroot/dist/angular-test --no-daemon
