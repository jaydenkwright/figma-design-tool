const express = require('express')
const router = express.Router()
const axios = require('axios')



router.get('/document', async (req, res) => {
  try{
    token = 'Z0lgipgstKyOeIGWG9_A3ylQlPEirPpQrW4h8II2'
    const response = await axios.get('https://api.figma.com/v1/files/CpRDjmjr8YxIVYcbeiinKP', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    console.log(response.data.document)
    res.json(response.data.document)
  }catch(err){
    console.log(err)
  }
})
const api = async () => {
  try{
    token = 'Z0lgipgstKyOeIGWG9_A3ylQlPEirPpQrW4h8II2'
    const res = await axios.get('https://api.figma.com/v1/files/CpRDjmjr8YxIVYcbeiinKP', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    //console.log(res.data.document)
    const file = res.data
    //console.log(file)
    let frames = file.document.children
      .filter(child => child.type === 'CANVAS')
      .map(child => child.children)
        console.log(frames)
  }catch(err){
    console.log(err)
  }
}

api()

//api()

const figmaData = {
    "document": {
      "id": "0:0",
      "name": "Document",
      "type": "DOCUMENT",
      "children": [
        {
          "id": "0:1",
          "name": "Page 1",
          "type": "CANVAS",
          "children": [
            {
              "id": "1:2",
              "name": "iPhone 11 Pro Max - 1",
              "type": "FRAME",
              "blendMode": "PASS_THROUGH",
              "children": [
                {
                  "id": "1:4",
                  "name": "Rectangle 1",
                  "type": "VECTOR",
                  "blendMode": "PASS_THROUGH",
                  "absoluteBoundingBox": {
                    "x": -208,
                    "y": -317,
                    "width": 414,
                    "height": 695
                  },
                  "constraints": {
                    "vertical": "TOP",
                    "horizontal": "LEFT"
                  },
                  "fills": [
                    {
                      "blendMode": "NORMAL",
                      "type": "SOLID",
                      "color": {
                        "r": 1,
                        "g": 0.8039215803146362,
                        "b": 0.6705882549285889,
                        "a": 1
                      }
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 1,
                  "strokeAlign": "INSIDE",
                  "exportSettings": [
                    {
                      "suffix": "",
                      "format": "PNG",
                      "constraint": {
                        "type": "SCALE",
                        "value": 1
                      }
                    }
                  ],
                  "effects": [
                    {
                      "type": "DROP_SHADOW",
                      "visible": true,
                      "color": {
                        "r": 0,
                        "g": 0,
                        "b": 0,
                        "a": 0.25
                      },
                      "blendMode": "NORMAL",
                      "offset": {
                        "x": 0,
                        "y": 4
                      },
                      "radius": 4
                    }
                  ]
                },
                {
                  "id": "1:6",
                  "name": "Rectangle 2",
                  "type": "VECTOR",
                  "blendMode": "PASS_THROUGH",
                  "absoluteBoundingBox": {
                    "x": -208,
                    "y": -248,
                    "width": 414,
                    "height": 695
                  },
                  "constraints": {
                    "vertical": "TOP",
                    "horizontal": "LEFT"
                  },
                  "fills": [
                    {
                      "blendMode": "NORMAL",
                      "type": "SOLID",
                      "color": {
                        "r": 1,
                        "g": 0.6431372761726379,
                        "b": 0.3607843220233917,
                        "a": 1
                      }
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 1,
                  "strokeAlign": "INSIDE",
                  "exportSettings": [
                    {
                      "suffix": "",
                      "format": "PNG",
                      "constraint": {
                        "type": "SCALE",
                        "value": 1
                      }
                    }
                  ],
                  "effects": [
                    {
                      "type": "DROP_SHADOW",
                      "visible": true,
                      "color": {
                        "r": 0,
                        "g": 0,
                        "b": 0,
                        "a": 0.25
                      },
                      "blendMode": "NORMAL",
                      "offset": {
                        "x": 0,
                        "y": 4
                      },
                      "radius": 4
                    }
                  ]
                },
                {
                  "id": "2:1",
                  "name": "Habit Tracker",
                  "type": "TEXT",
                  "blendMode": "PASS_THROUGH",
                  "absoluteBoundingBox": {
                    "x": -208,
                    "y": -303,
                    "width": 414,
                    "height": 99
                  },
                  "constraints": {
                    "vertical": "TOP",
                    "horizontal": "LEFT"
                  },
                  "fills": [
                    {
                      "blendMode": "NORMAL",
                      "type": "SOLID",
                      "color": {
                        "r": 0,
                        "g": 0,
                        "b": 0,
                        "a": 1
                      }
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 1,
                  "strokeAlign": "OUTSIDE",
                  "effects": [],
                  "characters": "Habit Tracker",
                  "style": {
                    "fontFamily": "Montserrat",
                    "fontPostScriptName": "Montserrat-SemiBold",
                    "fontWeight": 600,
                    "fontSize": 36,
                    "textAlignHorizontal": "CENTER",
                    "textAlignVertical": "CENTER",
                    "letterSpacing": 0,
                    "lineHeightPx": 42.1875,
                    "lineHeightPercent": 100,
                    "lineHeightUnit": "INTRINSIC_%"
                  },
                  "characterStyleOverrides": [],
                  "styleOverrideTable": {}
                }
              ],
              "absoluteBoundingBox": {
                "x": -208,
                "y": -449,
                "width": 414,
                "height": 895.9999389648438
              },
              "constraints": {
                "vertical": "TOP",
                "horizontal": "LEFT"
              },
              "clipsContent": true,
              "background": [
                {
                  "blendMode": "NORMAL",
                  "type": "SOLID",
                  "color": {
                    "r": 1,
                    "g": 0.95686274766922,
                    "b": 0.8901960849761963,
                    "a": 1
                  }
                }
              ],
              "fills": [
                {
                  "blendMode": "NORMAL",
                  "type": "SOLID",
                  "color": {
                    "r": 1,
                    "g": 0.95686274766922,
                    "b": 0.8901960849761963,
                    "a": 1
                  }
                }
              ],
              "strokes": [],
              "strokeWeight": 1,
              "strokeAlign": "INSIDE",
              "backgroundColor": {
                "r": 1,
                "g": 0.95686274766922,
                "b": 0.8901960849761963,
                "a": 1
              },
              "layoutGrids": [],
              "effects": []
            }
          ],
          "backgroundColor": {
            "r": 0.8980392217636108,
            "g": 0.8980392217636108,
            "b": 0.8980392217636108,
            "a": 1
          },
          "prototypeStartNodeID": null,
          "prototypeDevice": {
            "type": "PRESET",
            "size": {
              "width": 414,
              "height": 896
            },
            "presetIdentifier": "APPLE_IPHONE_11PROMAX_GOLD",
            "rotation": "NONE"
          }
        }
      ]
    },
    "components": {},
    "schemaVersion": 0,
    "styles": {},
    "name": "Untitled",
    "lastModified": "2020-03-06T05:32:41.969603Z",
    "thumbnailUrl": "https://s3-alpha-sig.figma.com/thumbnails/d4b804a2-237e-4354-bbab-f71ca79e6a23?Expires=1589760000&Signature=C1qHJknIK19EjOTIkGylR-vebwx6nzkDjQZ-Ga9tuBgd2S0IsoAmJM93vzjYUeUstzjBDZZ0F2lqj7jG4bMa2-ZsrjVynV6kvtAYGKBXDnH9WkrcvTiXsEV-9rDakmK4~bdmVJfmgzrh-Le5lFkfohS~gTrtOTVQNxGlqi~6MDR3~ueRyBQo3WpdXBW9wuH5njrP6tme5eLg9geIgYxqQa-Ur~G2i6rN3EUZwdGGQPcZU36COAWm2PBV~1z6vbqixpCxzcwZ812U-AH8PkxlCsCYvU5Efqfsj4AGWXBaOJFUPhtlXDIGqH21luD1E9S9~DWvlaIFkQE-SKqEYZeOZQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "version": "265842978",
    "role": "owner"
  }


// router.get('/colors', (req, res) => {
//   const data = figmaData.document.children
//     .filter(child => child.type === 'CANVAS')[0].children
//     .filter(child => child.type === 'FRAME')
//     .map(frame => frame.children.map(f => f.name))
//     res.json({name: data})
// })

// router.post('/callback', (req, res) => {
//   console.log(req.body)
// })
module.exports = router