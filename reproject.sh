#!/bin/sh

ogr2ogr -t_srs EPSG:4326 4326-$1 $1 -lco ENCODING=UTF-8:
