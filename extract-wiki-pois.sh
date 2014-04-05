

set -x

osmosis \
  --write-pbf wiki_pois.osm.pbf \
  --tf accept-ways wikipedia=* \
  --tf accept-relations wikipedia=* \
  --tf reject-relations boundary=administrative \
  --tf reject-ways boundary=administrative \
  --used-way \
  --used-node \
  --read-pbf $1

