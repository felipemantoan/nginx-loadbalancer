FROM public.ecr.aws/docker/library/node:16.13.1-alpine as base

WORKDIR /app

FROM base as app_1

ADD ./app_1 .

RUN npm i

CMD ["index.js"]

FROM base as app_2

ADD ./app_2 .

RUN npm i

CMD ["index.js"]