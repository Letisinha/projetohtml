FROM httpd

RUN apt update && apt-get install nodejs -y && apt-get install npm -y
WORKDIR /usr/local/apache2/htdocs
COPY ./arquivoshtml/ /usr/local/apache2/htdocs/