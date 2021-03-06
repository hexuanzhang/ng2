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
				name: 'templateOutlet 指令',
				router: 'ng-template-outlet'
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
			},
			{
				name: 'hidden 指令',
				router: 'ng-hidden'
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
	},
	{
		name: 'provider',
		router: 'provider',
		children: [
			{
				name: 'useClass',
				router: 'useClass'
			},
			{
				name: 'useValue',
				router: 'useValue'
			},
			{
				name: 'useExisting',
				router: 'useExisting'
			},
			{
				name: 'useFactory',
				router: 'useFactory'
			},
			{
				name: 'stringToken',
				router: 'stringToken'
			},
			{
				name: 'opaqueToken',
				router: 'opaqueToken'
			},
			{
				name: 'injectionToken',
				router: 'injectionToken'
			},
			{
				name: 'optional',
				router: 'optional'
			}
		]
	},
	{
		name: 'di',
		router: 'di',
		children: [
			{
				name: 'reflectiveInjector',
				router: 'reflectiveInjector'
			},
			{
				name: 'viewContainerRef',
				router: 'viewContainerRef'
			}
		]
	},
	{
		name: 'animation',
		router: 'animation',
		children: [
			{
				name: 'loading',
				value: 'loading'
			}
		]
	},
	{
		name: 'others',
		router: 'others',
		children: [
			{
				name: 'encrypt',
				value: 'encrypt'
			}
		]
	}
];
