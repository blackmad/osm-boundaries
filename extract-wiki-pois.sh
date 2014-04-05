

set -x

osmosis \
  --read-pbf $1
  --tf accept-ways wikipedia=* \
  --tf accept-relations wikipedia=* \
  --tf reject-relations boundary=administrative \
  --tf reject-ways boundary=administrative \
  --used-way \
  --used-node \
  --write-pbf wiki_pois.osm.pbf \

