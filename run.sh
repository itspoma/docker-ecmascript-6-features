#!/bin/bash -e

docker rm -f es6 >/dev/null 2>&1

docker run -d --name es6 -v $PWD:/shared -it iojs:2

docker exec -ti es6 \
    find ./shared/es6-tests/ -name "*.js" \
      -exec echo ">> {}" \;\
      -exec iojs --harmony --es_staging --harmony_classes --harmony_object_literals --harmony_sloppy --harmony_scoping --harmony_arrow_functions --harmony_shipping --harmony_modules {} \;\
      -exec echo "" \;

docker rm -f es6 >/dev/null 2>&1