window.commands = {
      planets_outer_slow: ["eventfade.execute Camera.jumpto bookmark inner now ",
                           "Mercury.prop.LabelEnabled true",
                           "Venus.prop.LabelEnabled true",
                           "Earth.prop.LabelEnabled true",
                           "Mars.prop.LabelEnabled true"
                          ],
      planets_inner_slow: ["eventfade.execute Camera.jumpto bookmark inner fast", 
                           "Mercury.prop.LabelEnabled true",
                           "Venus.prop.LabelEnabled true",
                           "Earth.prop.LabelEnabled true",
                           "Mars.prop.LabelEnabled true"
                          ],
      planets_inner_fast: ["eventfade.execute Camera.jumpto bookmark outer now", 
                           "Mercury.prop.LabelEnabled false",
                           "Venus.prop.LabelEnabled false",
                           "Earth.prop.LabelEnabled false",
                           "Mars.prop.LabelEnabled false"
                          ],
      planets_outer_fast: ["eventfade.execute Camera.jumpto bookmark outer fast", 
                           "Mercury.prop.LabelEnabled false",
                           "Venus.prop.LabelEnabled false",
                           "Earth.prop.LabelEnabled false",
                           "Mars.prop.LabelEnabled false"
                          ]
    }