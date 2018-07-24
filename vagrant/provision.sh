#!/bin/bash
sudo apt-get update  > /dev/null 2>&1

########################
#  Node
########################
echo "Installing Node"
sudo apt-get install -y nodejs > /dev/null 2>&1
sudo apt-get install -y npm > /dev/null 2>&1

echo "Success"