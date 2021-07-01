#!/bin/bash

cat > "cloud-config.yaml" <<EOF
#cloud-config

ssh_authorized_keys:
  - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCsArtgtY/LZTHA5bONg4jdIg0bNQMSdy7JNlJ+5yzl1VZ8wJNBO5QY7E4+A1e6REjiMhmfImpM6auLXI8SRzqQ4QVseEIoAJPSVD+1bWvlf2WIC1GLVnSaxK7KxbgITqn2quKvwMhqO3rmdASZIgoKAgTgqB765FzJUbiYga55/wELkTHbR0rUYZALX1hnmDeLqSRy+rxDkut5qx3d7LmuyHLgz2cN8/Vk8Dv+z6Izwlnml70AYRaSWoubcS0uXe8reTrnJ3tG+iix0IQTtXI46SXtl043cibaPAfHEwZYrrTJJhKZpQrPIBWX5Wl1fMzGB3wlLbF6Uwa4GP1apg4L jaez@JaezMac.local
EOF

sudo coreos-install -d /dev/vda -c cloud-config.yaml
sudo reboot
