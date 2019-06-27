#!/bin/bash
until cd /home/alexeyqian/web/src && npm run prod1; do
    echo "WEKU Portal crashed restarting..."
    sleep 1
done &
