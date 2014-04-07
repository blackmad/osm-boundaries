~blackmad/NO_BACKUP/osm/bin/osmosis \
  --read-pbf $1 \
  --way-key "amenity,lesiure,military,natural,sport,tourism,landmark,monument,boundary" \
  --used-node \
  --write-pbf other_bounds.osm.pbf
