#!/bin/bash

batre=$(acpi | grep -P -o "[0-9]+(?=%)")
aku=$(whoami)
tanggal=$(date)
eval "export $(egrep -z DBUS_SESSION_BUS_ADDRESS /proc/$(pgrep -u $LOGNAME gnome-session)/environ)";
dunstify "selamat datang ${aku} 
${tanggal} B: ${batre}%" -i sun 




