

set -x

osmosis \
  --read-pbf $1
  --tf accept-ways wikipedia=* \
  --tf reject-ways boundary=administrative \
  --used-way \
  --used-node \
  --write-pbf wiki_ways.osm.pbf \

osmosis \
  --read-pbf $1
  --tf accept-relations wikipedia=* \
  --tf reject-relations boundary=administrative \
  --used-way \
  --used-node \
  --write-pbf wiki_relations.osm.pbf \

