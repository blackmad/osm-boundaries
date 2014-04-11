#!/usr/bin/python
import sys
import mapnik
from osgeo import ogr

m = mapnik.Map(1800,600)
m.background = mapnik.Color('steelblue')
s = mapnik.Style()
r = mapnik.Rule()
polygon_symbolizer = mapnik.PolygonSymbolizer(mapnik.Color('#f2eff9'))
r.symbols.append(polygon_symbolizer)
line_symbolizer = mapnik.LineSymbolizer(mapnik.Color('rgb(50%,50%,50%)'),0.1)
r.symbols.append(line_symbolizer)
s.rules.append(r)
m.append_style('My Style',s)

ds = mapnik.Shapefile(file=sys.argv[1])
layer = mapnik.Layer('world')
layer.datasource = ds
layer.styles.append('My Style')
m.layers.append(layer)
m.zoom_all()

output = sys.argv[1] + '.png'
mapnik.render_to_file(m,output, 'png')
print "rendered image to '%s'" % output
