FROM node

WORKDIR /src

COPY . .

EXPOSE 9998

CMD node index.js