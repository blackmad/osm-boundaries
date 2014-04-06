#!/bin/sh
OSM_CONFIG_FILE=osmconf.ini ogr2ogr -explodecollections shp-$1 $1 multipolygons   -lco ENCODING=UTF-8
