FROM public.ecr.aws/docker/library/node:alpine as base

WORKDIR /app

FROM base as app_1

ADD ./app_1 .

RUN npm i

CMD ["index.js"]

FROM base as app_2

ADD ./app_2 .

RUN npm i

CMD ["index.js"]

FROM base as app_3

ADD ./app_3 .

RUN npm i

CMD ["index.js"]

FROM base as app_4

ADD ./app_4 .

RUN npm i

CMD ["index.js"]