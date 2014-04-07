

set -x

osmosis \
  --read-pbf $1 \
  --tf accept-ways wikipedia=* \
  --tf reject-ways boundary=administrative \
  --tf reject-ways boundary=census \
  --tf reject-ways natural=glacier \
  --tf reject-ways natural=massif \
  --tf reject-ways place=locality \
  --tf reject-relations \
  --used-node \
  --write-pbf wiki_ways.osm.pbf

osmosis \
  --read-pbf $1 \
  --tf accept-relations wikipedia=* \
  --tf reject-relations boundary=administrative \
  --tf reject-relations natural=glacier \ 
  --used-way \
  --used-node \
  --write-pbf wiki_relations.osm.pbf

