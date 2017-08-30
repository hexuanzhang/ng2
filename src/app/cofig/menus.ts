export const menus = [
	{
		name: 'index'
	},
	{
		name: 'directive',
		children: [
			{
				name: 'ng-class'
			},
			{
				name: 'ng-style'
			},
			{
				name: '伪类选择器',
				children: [
					{
						name: ':host'
					},
					{
						name: '::ng-deep'
					},
					{
						name: ':host-context'
					}
				]
			}
		]
	}
];