#!/bin/bash -e

# clean up the es6 container if it present
docker rm -f es6 >/dev/null 2>&1

# run the container based on io.js v2,
# and mount current directory to /shared
docker run -d --name es6 -v $PWD:/shared -it iojs:2

# run the tests inside of container,
# with enabled ES6 features (Harmony)
docker exec -ti es6 \
    find ./shared/es6-tests/ -name "*.js" \
      -exec echo ">> {}" \;\
      -exec iojs \
        --es_staging \
        --harmony \
        --harmony_shipping \
        --harmony_modules \
        --harmony_arrays \
        --harmony_array_includes \
        --harmony_regexps \
        --harmony_arrow_functions \
        --harmony_proxies \
        --harmony_sloppy \
        --harmony_unicode \
        --harmony_unicode_regexps \
        --harmony_computed_property_names \
        --harmony_rest_parameters \
        --harmony_tostring \
        --harmony_numeric_literals \
        --harmony_strings \
        --harmony_scoping \
        --harmony_templates \
        --harmony_classes \
        --harmony_object_literals \
        {} \;\
      -exec echo "" \;

# stop and remove the container
docker rm -f es6 >/dev/null 2>&1