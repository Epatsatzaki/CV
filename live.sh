#!/bin/bash

SELF="${BASH_SOURCE[0]}"
SELF="$(realpath -ms "$SELF")"
cd "$(dirname "$SELF")" || exit
exec dead-server --port=5500 --host=192.168.1.3 . &
