 shapefile(argv[0]).
      type(POLYGON).
      column('id', STRING, 12).
      column('level', INTEGER, 10).
      column('name', STRING, 100).
      column('name:af', STRING, 100).
      column('name:sq', STRING, 100).
      column('name:am', STRING, 100).
      column('name:ar', STRING, 100).
      column('name:hy', STRING, 100).
      column('name:az', STRING, 100).
      column('name:eu', STRING, 100).
      column('name:be', STRING, 100).
      column('name:bn', STRING, 100).
      column('name:bh', STRING, 100).
      column('name:bg', STRING, 100).
      column('name:my', STRING, 100).
      column('name:ca', STRING, 100).
      column('name:chr', STRING, 100).
      column('name:zh', STRING, 100).
      column('name:zh-CN', STRING, 100).
      column('name:zh-TW', STRING, 100).
      column('name:hr', STRING, 100).
      column('name:cs', STRING, 100).
      column('name:da', STRING, 100).
      column('name:dv', STRING, 100).
      column('name:nl', STRING, 100).
      column('name:en', STRING, 100).
      column('name:eo', STRING, 100).
      column('name:et', STRING, 100).
      column('name:tl', STRING, 100).
      column('name:fi', STRING, 100).
      column('name:fr', STRING, 100).
      column('name:gl', STRING, 100).
      column('name:ka', STRING, 100).
      column('name:de', STRING, 100).
      column('name:el', STRING, 100).
      column('name:gn', STRING, 100).
      column('name:gu', STRING, 100).
      column('name:iw', STRING, 100).
      column('name:hi', STRING, 100).
      column('name:hu', STRING, 100).
      column('name:is', STRING, 100).
      column('name:id', STRING, 100).
      column('name:iu', STRING, 100).
      column('name:ga', STRING, 100).
      column('name:it', STRING, 100).
      column('name:ja', STRING, 100).
      column('name:kn', STRING, 100).
      column('name:kk', STRING, 100).
      column('name:km', STRING, 100).
      column('name:ko', STRING, 100).
      column('name:ku', STRING, 100).
      column('name:ky', STRING, 100).
      column('name:lo', STRING, 100).
      column('name:lv', STRING, 100).
      column('name:lt', STRING, 100).
      column('name:mk', STRING, 100).
      column('name:ms', STRING, 100).
      column('name:ml', STRING, 100).
      column('name:mt', STRING, 100).
      column('name:mr', STRING, 100).
      column('name:mn', STRING, 100).
      column('name:ne', STRING, 100).
      column('name:no', STRING, 100).
      column('name:or', STRING, 100).
      column('name:ps', STRING, 100).
      column('name:fa', STRING, 100).
      column('name:pl', STRING, 100).
      column('name:pt-PT', STRING, 100).
      column('name:pa', STRING, 100).
      column('name:ro', STRING, 100).
      column('name:ru', STRING, 100).
      column('name:sa', STRING, 100).
      column('name:sr', STRING, 100).
      column('name:sd', STRING, 100).
      column('name:si', STRING, 100).
      column('name:sk', STRING, 100).
      column('name:sl', STRING, 100).
      column('name:es', STRING, 100).
      column('name:sw', STRING, 100).
      column('name:sv', STRING, 100).
      column('name:tg', STRING, 100).
      column('name:ta', STRING, 100).
      column('name:tl', STRING, 100).
      column('name:te', STRING, 100).
      column('name:th', STRING, 100).
      column('name:bo', STRING, 100).
      column('name:tr', STRING, 100).
      column('name:uk', STRING, 100).
      column('name:ur', STRING, 100).
      column('name:uz', STRING, 100).
      column('name:ug', STRING, 100).
      column('name:vi', STRING, 100).
      column('name:cy', STRING, 100).
      column('name:cy', STRING, 100).
      column('name:hak', STRING, 100).
      column('name:haw', STRING, 100).
      column('name:yi', STRING, 100);

area().
    output(argv[0]).
    attr('level', 'admin_level').
    attr('name').
    attr('name:af').
    attr('name:sq').
    attr('name:am').
    attr('name:ar').
    attr('name:hy').
    attr('name:az').
    attr('name:eu').
    attr('name:be').
    attr('name:bn').
    attr('name:bh').
    attr('name:bg').
    attr('name:my').
    attr('name:ca').
    attr('name:chr').
    attr('name:zh').
    attr('name:zh-CN').
    attr('name:zh-TW').
    attr('name:hr').
    attr('name:cs').
    attr('name:da').
    attr('name:dv').
    attr('name:nl').
    attr('name:en').
    attr('name:eo').
    attr('name:et').
    attr('name:tl').
    attr('name:fi').
    attr('name:fr').
    attr('name:gl').
    attr('name:ka').
    attr('name:de').
    attr('name:el').
    attr('name:gn').
    attr('name:gu').
    attr('name:iw').
    attr('name:hi').
    attr('name:hu').
    attr('name:is').
    attr('name:id').
    attr('name:iu').
    attr('name:ga').
    attr('name:it').
    attr('name:ja').
    attr('name:kn').
    attr('name:kk').
    attr('name:km').
    attr('name:ko').
    attr('name:ku').
    attr('name:ky').
    attr('name:lo').
    attr('name:lv').
    attr('name:lt').
    attr('name:mk').
    attr('name:ms').
    attr('name:ml').
    attr('name:mt').
    attr('name:mr').
    attr('name:mn').
    attr('name:ne').
    attr('name:no').
    attr('name:or').
    attr('name:ps').
    attr('name:fa').
    attr('name:pl').
    attr('name:pt-PT').
    attr('name:pa').
    attr('name:ro').
    attr('name:ru').
    attr('name:sa').
    attr('name:sr').
    attr('name:sd').
    attr('name:si').
    attr('name:sk').
    attr('name:sl').
    attr('name:es').
    attr('name:sw').
    attr('name:sv').
    attr('name:tg').
    attr('name:ta').
    attr('name:tl').
    attr('name:te').
    attr('name:th').
    attr('name:bo').
    attr('name:tr').
    attr('name:uk').
    attr('name:ur').
    attr('name:uz').
    attr('name:ug').
    attr('name:vi').
    attr('name:cy').
    attr('name:yi');
