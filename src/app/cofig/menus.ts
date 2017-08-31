export const menus = [
	{
		name: '首页',
		router: 'index'
	},
	{
		name: '内置指令',
		router: 'directive',
		children: [
			{
				name: 'class 指令',
				router: 'ng-class'
			},
			{
				name: 'style 指令',
				router: 'ng-style'
			},
			{
				name: 'for 指令',
				router: 'ng-for'
			},
			{
				name: '选择器',
				router: 'pseudo-class',
				children: [
					{
						name: ':host',
						router: 'host'
					},
					{
						name: '::ng-deep',
						router: 'ng-deep'
					},
					{
						name: ':host-context',
						router: 'host-context'
					}
				]
			}
		]
	}
];