var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "Fachada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.27327763756661483,
        "pitch": -0.24384858179799807,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -0.3695908372010237,
          "pitch": 0.13655591860266192,
          "rotation": 0,
          "target": "1-recepcin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0148064372342667,
          "pitch": -0.05085716834683751,
          "title": "Renta de Departamentos",
          "text": "Bernard Shaw #22, Col. Polanco<div>Excelente ubicación</div>"
        }
      ]
    },
    {
      "id": "1-recepcin",
      "name": "Recepción",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.3668716977528774,
        "pitch": 0.10345091349005742,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 0.006451667215277013,
          "pitch": 0.04449114174722624,
          "rotation": 0,
          "target": "2-acceso301"
        },
        {
          "yaw": -2.9849119338401806,
          "pitch": 0.3515424452132887,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.615315343822326,
          "pitch": -0.24174408258852687,
          "title": "Amplio Recibidor",
          "text": "2 Elevadores,<div>Escaleras,</div><div>Vigilancia 24 hrs.&nbsp;</div>"
        }
      ]
    },
    {
      "id": "2-acceso301",
      "name": "Acceso301",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.3508467986151942,
        "pitch": 0.2758691026401685,
        "fov": 1.3579432189149747
      },
      "linkHotspots": [
        {
          "yaw": 0.4469618323911284,
          "pitch": 0.6470364396511314,
          "rotation": 0.7853981633974483,
          "target": "3-salacomedor"
        },
        {
          "yaw": -0.5311869037532002,
          "pitch": 0.6531514297416443,
          "rotation": 5.497787143782138,
          "target": "1-recepcin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7934655617588753,
          "pitch": -0.1918352297878858,
          "title": "Departamento 301",
          "text": "Amplios espacios,<div>Dos departamentos por piso</div>"
        }
      ]
    },
    {
      "id": "3-salacomedor",
      "name": "SalaComedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.22261852704008867,
        "pitch": 0.2881846875794558,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 3.0253986194022975,
          "pitch": 0.3668988074618049,
          "rotation": 0,
          "target": "2-acceso301"
        },
        {
          "yaw": -2.9031807933293017,
          "pitch": 0.26653360012597993,
          "rotation": 0,
          "target": "4-cocina"
        },
        {
          "yaw": -2.5703612980135233,
          "pitch": 0.3709475221945624,
          "rotation": 0.7853981633974483,
          "target": "7-pasillodistribucin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.068565690920007,
          "pitch": -0.03422025608450241,
          "title": "Departamento 142 m2",
          "text": "Sala Comedor,<div>2 Recámaras</div><div>2 Baños completos</div><div>Amplia Cocina,</div><div>Cuarto y Patio de Servicio</div><div>Un lugar de Estacionamiento</div>"
        }
      ]
    },
    {
      "id": "4-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16926919402722795,
          "pitch": 0.39367486070576163,
          "rotation": 0,
          "target": "5-patioservicio"
        },
        {
          "yaw": -2.8837691323784043,
          "pitch": 0.299688293293217,
          "rotation": 0,
          "target": "3-salacomedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-patioservicio",
      "name": "PatioServicio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.730145775756025,
        "pitch": 0.6706942411292331,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -0.9477916085961926,
          "pitch": 0.7172991050698023,
          "rotation": 0,
          "target": "4-cocina"
        },
        {
          "yaw": -0.08238128845817627,
          "pitch": 0.47000379137240067,
          "rotation": 0,
          "target": "6-cuartoservicio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cuartoservicio",
      "name": "CuartoServicio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.9372500947808415,
        "pitch": 0.46422536891304134,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -0.07724235717366845,
          "pitch": 0.6365213033191566,
          "rotation": 1.5707963267948966,
          "target": "4-cocina"
        },
        {
          "yaw": -0.17279614301975244,
          "pitch": 0.44609797913432914,
          "rotation": 0,
          "target": "5-patioservicio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pasillodistribucin",
      "name": "PasilloDistribución",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.610411825792772,
        "pitch": 0.48102043610057876,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -1.839699589708495,
          "pitch": 0.3700956698588769,
          "rotation": 5.497787143782138,
          "target": "3-salacomedor"
        },
        {
          "yaw": -1.3319301955970388,
          "pitch": 0.44348186234655174,
          "rotation": 1.5707963267948966,
          "target": "4-cocina"
        },
        {
          "yaw": -1.418598128627277,
          "pitch": 0.24943229061651095,
          "rotation": 0.7853981633974483,
          "target": "2-acceso301"
        },
        {
          "yaw": 3.0995287036473016,
          "pitch": 0.6972391825363111,
          "rotation": 0,
          "target": "8-pasillo"
        },
        {
          "yaw": 2.6343270539000887,
          "pitch": 0.8753211673911458,
          "rotation": 5.497787143782138,
          "target": "10-bao"
        },
        {
          "yaw": 0.05643142606699669,
          "pitch": 0.27926310276712485,
          "rotation": 0,
          "target": "11-recmara2"
        },
        {
          "yaw": 3.089354757861469,
          "pitch": 0.3301054865551123,
          "rotation": 0,
          "target": "9-recmara1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-pasillo",
      "name": "Pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.6019611231102289,
        "pitch": 0.4285823558873929,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -0.2323168708351382,
          "pitch": 0.5161287111882444,
          "rotation": 0,
          "target": "9-recmara1"
        },
        {
          "yaw": -3.0877910504931023,
          "pitch": 0.5995842305919794,
          "rotation": 0,
          "target": "7-pasillodistribucin"
        },
        {
          "yaw": -2.721188411150653,
          "pitch": 0.9218495573629042,
          "rotation": 0.7853981633974483,
          "target": "10-bao"
        },
        {
          "yaw": -3.093436869817925,
          "pitch": 0.27830479248578754,
          "rotation": 0,
          "target": "11-recmara2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-recmara1",
      "name": "Recámara1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 2.7533895973976312,
        "pitch": 0.25376142617519726,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 2.7598565564387094,
          "pitch": 0.4767954146519031,
          "rotation": 12.566370614359176,
          "target": "8-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 2.732315453921669,
        "pitch": 0.7143039264789905,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -1.271545202523173,
          "pitch": 1.2009093484055064,
          "rotation": 0,
          "target": "8-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-recmara2",
      "name": "Recámara2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.874837476477012,
        "pitch": 0.20689191109943472,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -2.6817038424254935,
          "pitch": 0.4828842657118866,
          "rotation": 0,
          "target": "7-pasillodistribucin"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BernardShaw22-301",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
