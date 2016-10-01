#!/bin/bash
touch results.txt
touch /etc/mytest

echo "<VirtualHost $1:80>" > /etc/httpd/vhost.d/$1.conf
  #statements
#         ServerName akanerd.com
#         ServerAlias akanerd
#         DocumentRoot /var/www/html/akanerd
#         ErrorLog /var/www/html/akanerd/error.log
#         CustomLog /var/www/html/akanerd/custom.log combined
# </VirtualHost>

echo "********************finalizado*******************"
