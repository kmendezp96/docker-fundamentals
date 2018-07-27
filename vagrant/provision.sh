#!/bin/bash
sudo apt-get update  > /dev/null 2>&1

########################
#  Node
########################
echo "Installing Node"
sudo apt-get install -y nodejs > /dev/null 2>&1
sudo apt-get install -y npm > /dev/null 2>&1
echo "Installing docker-compose"
sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose /dev/null 2>&1
sudo chmod +x /usr/local/bin/docker-compose
echo "Success"
