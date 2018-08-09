# docker-compose 多容器app

- ghost
- nginx
- mysql

## Directory

``` tree  
.
├── README.md
├── data
│
├── docker-compose.yml
├── ghost
│   ├── Dockerfile
│   └── config.js
└── nginx
    ├── Dockerfile
    ├── nginx.conf
    └── static-web-server.conf
```

## Run

``` cmd
git clone https://github.com/Jackliu007888/docker-compose-demo

docker-compose build

docker-compose up -d

```
