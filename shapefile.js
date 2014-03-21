 shapefile(argv[0]).
      type(POLYGON).
      column('id', STRING, 12).
      column('level', INTEGER, 10).
      column('name', STRING, 100);

area('boundary', 'administrative').
    output(argv[0]).
    attr('level', 'admin_level').
    attr('name');

