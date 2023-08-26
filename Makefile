NAME=inception
CMD=docker compose -f
VOLUMES=$(filter-out local,$(shell docker volume ls | grep $(NAME)))
DATA=./data/

all:
	$(CMD) srcs/docker-compose.yml up --build -d

build:
	$(CMD) srcs/docker-compose.yml build

re: down up

up:
	$(CMD) srcs/docker-compose.yml up -d

down:
	$(CMD) srcs/docker-compose.yml down 

rmvol:	down
	 docker volume rm $(VOLUMES)
