#!/bin/bash

for x in {1..10}; do curl 127.0.0.1/ab/healthcheck?token=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1); echo ""; done