FROM nginx

COPY ./docs/.vuepress/dist ./usr/share/nginx/html

COPY docs/.vuepress/dist/conf/nginx.conf ./etc/nginx/conf.conf
COPY docs/.vuepress/dist/conf/conf.d ./etc/nginx/conf.d

EXPOSE 80

