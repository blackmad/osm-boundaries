#!/usr/bin/env python

# -*- coding: utf-8 -*-

import argparse
import os.path
import psycopg2
import subprocess


## Arguments & help

ap = argparse.ArgumentParser(description='Process OSM administrative ' +
                             'boundaries as individual ways.')
ap.add_argument('-f', dest='min_admin_level', type=int, default=2,
                help='Minimum admin_level to retrieve.')
ap.add_argument('-t', dest='max_admin_level', type=int, default=10,
                help='Maximum admin_level to retrieve.')
ap.add_argument(dest='osm_input', metavar='planet.osm.pbf',
                help='An OpenStreetMap PBF file to process.')
args = ap.parse_args()


## PostgreSQL setup

# Set up the db connection
## Process & import the boundaries with osmjs

for level in xrange(args.min_admin_level, args.max_admin_level + 1):
  outfile = 'osm_admin_{0}.osm.pbf'.format(level)

  if os.path.exists(outfile):
      print('Found existing file {0}; skipping filtering.'.format(outfile))
  else:
      cmd = '''~blackmad/NO_BACKUP/osm/bin/osmosis \
          --read-pbf {0} \
          --tf accept-relations admin_level={1} \
          --tf accept-relations boundary=administrative \
          --tf reject-relations id=3218753 \
          --used-way \
          --used-node \
          --write-pbf {2}'''.format(
              args.osm_input,
              level,
              outfile)
      print cmd
      subprocess.call([cmd], shell=True)
  cmd = 'osmjs -i osm2shape -d -m -2 -l array -j shapefile.js {0} shp-{1}'.format(outfile, outfile)
  print cmd
  subprocess.call([cmd], shell=True)
  cmd = "mmv '*.pbf*' '#1#2'"
  print cmd
  subprocess.call([cmd], shell=True)
  cmd2 = 'ogr2ogr -t_srs EPSG:4326 4326-%s %s -lco ENCODING=UTF-8' % (outfile.replace('pbf', 'shp'), outfile.replace('pbf', 'shp'))
  print cmd2
  subprocess.call([cmd2], shell=True)

