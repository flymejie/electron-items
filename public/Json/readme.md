# Json 文件配置介绍
``````
[
  {
    "type": "语言类型 中英文切换",
    "title": [首页home模块选择 
      {
        "title":"方案选择名称",
        "titleImg": "方案选择图片"
      }
   ],
    "product": [ 产品体系
      {
        "title": "产品体系分类标题",
        "list": [产品体系分类list
          {
            "listTitle":"产品体系分类标题list标题",
            "titleImg": "产品体系标题图片",
            "rightImg": "产品体系右侧图片",
            "rightVideo": ""产品体系右侧点击视频,
            "proList": [ 此分类下产品列表
              {
                "proTitle": "产品名称",
                "isModel": true,是否有模型
                "model": [ 模型详情
                  {
                    "models": "模型路径obj格式",
                    "material": ""模型材质路径,
                    "map": ""模型贴图
                  }
                ],
                "proimgList": [
                   展示图片列表                
                ]
              }
            ],
                 "plan": [解决方案
                   {
                     "title": "解决方案标题",
                     "titleImg": "解决方案图片",
                     "titleVideo": "解决方案视频"
                   }
                 ]
          }
        ]
      }
    ]
  }
]
``````
