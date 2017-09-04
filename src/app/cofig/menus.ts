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
				name: 'if 指令',
				router: 'ng-if'
			},
			{
				name: '选择器',
				router: 'pseudo-class',
				children: [
					{
						name: ':host',
						router: 'ng-host'
					},
					{
						name: ':host-context',
						router: 'ng-host-context'
					}
				]
			}
		]
	},
	{
		name: '装饰器',
		router: 'decorator',
		children: [
			{
				name: 'hostListener',
				router: 'hostListener'
			},
			{
				name: 'hostBinding',
				router: 'hostBinding'
			}
		]
	},
	{
		name: 'core',
		router: 'core',
		children: [
			{
				name: 'viewChild',
				router: 'viewChild'
			}
		]
	}
];