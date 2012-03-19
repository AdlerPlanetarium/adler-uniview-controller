   window.commands = {
      planets_outer_slow: ["Camera.transitionspeed fast",
                           "Camera.rotate 0 10 0",
                           "Camera.jumpto bookmark outer now ",
                           "Mercury.prop.LabelEnabled false",
                           "Venus.prop.LabelEnabled false",
                           "Earth.prop.LabelEnabled false",
                           "Mars.prop.LabelEnabled false",
                           "System.setsimulatedtimevelocity 1"

                          ],
      planets_inner_slow: ["Camera.transitionspeed fast",
                           "Camera.jumpto bookmark inner now",
                           "Mercury.prop.LabelEnabled true",
                           "Venus.prop.LabelEnabled true",
                           "Earth.prop.LabelEnabled true",
                           "Mars.prop.LabelEnabled true",
                           "System.setsimulatedtimevelocity 1"

                          ],
      planets_inner_fast: ["Camera.transitionspeed fast",
                           "Camera.rotate 0 10 0",
                           "Camera.jumpto bookmark inner now", 
                           "Mercury.prop.LabelEnabled true",
                           "Venus.prop.LabelEnabled true",
                           "Earth.prop.LabelEnabled true",
                           "Mars.prop.LabelEnabled true",
                           "System.setsimulatedtimevelocity 1033200"
                          ],
      planets_outer_fast: ["Camera.transitionspeed fast",
                           "Camera.jumpto bookmark outer now", 
                           "Mercury.prop.LabelEnabled false",
                           "Venus.prop.LabelEnabled false",
                           "Earth.prop.LabelEnabled false",
                           "Mars.prop.LabelEnabled false",
                           "System.setsimulatedtimevelocity 31536000"
                          ]
    }