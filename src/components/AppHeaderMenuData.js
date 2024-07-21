export const titleLong = 'lucid - 前端 Web 通用模板';
export const titleShort = 'lucid';

export const isSaraEnabled = true;

export const menuItems = [
  {
    name: '通用模板',
    type: 'dropdown',
    status: 'template',
    children: [
      {
        name: 'lucid',
        description: '前端 Web 通用模板',
        icon: 'GlobeAltIcon',
        onClick: () => window.open('https://github.com/web-tech-tw/lucid')
      },
      {
        name: 'template.recv',
        description: '後端 API 通用模板',
        icon: 'ServerStackIcon',
        onClick: () => window.open('https://github.com/web-tech-tw/template.recv')
      }
    ]
  },
  {
    name: 'GitHub',
    type: 'function',
    icon: 'CodeBracketIcon',
    onClick: () => window.open('https://github.com/web-tech-tw')
  }
]
