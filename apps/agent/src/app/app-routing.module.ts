import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { authConnectionGuard, authGuard, noAuthGuard } from '@dinary/desktop-ui-lib';

const routes: Routes = [
	{
		path: 'setup',
		loadComponent: () => import('@dinary/desktop-ui-lib').then((m) => m.SetupComponent)
	},
	{
		path: 'auth',
		canActivate: [noAuthGuard],
		loadChildren: () => import('@dinary/desktop-ui-lib').then((m) => m.AuthModule)
	},
	{
		path: 'plugins',
		canActivate: [authConnectionGuard],
		loadChildren: () => import('@dinary/desktop-ui-lib').then((m) => m.PluginRoutingModule)
	},
	{
		path: 'settings',
		loadComponent: () => import('@dinary/desktop-ui-lib').then((m) => m.SettingsComponent)
	},
	{
		path: 'updater',
		loadComponent: () => import('@dinary/desktop-ui-lib').then((m) => m.UpdaterComponent)
	},
	{
		path: 'splash-screen',
		loadComponent: () => import('@dinary/desktop-ui-lib').then((m) => m.SplashScreenComponent)
	},
	{
		path: 'server-down',
		loadComponent: () => import('@dinary/desktop-ui-lib').then((m) => m.ServerDownPage)
	},
	{
		path: 'always-on',
		loadComponent: () => import('@dinary/desktop-ui-lib').then((m) => m.AlwaysOnComponent)
	},
	{
		path: 'about',
		loadComponent: () => import('@dinary/desktop-ui-lib').then((m) => m.AboutComponent)
	},
	{
		path: 'server-dashboard',
		canActivate: [authConnectionGuard, authGuard],
		loadComponent: () => import('@dinary/desktop-ui-lib').then((m) => m.AgentDashboardComponent),
		loadChildren: () => import('@dinary/desktop-ui-lib').then((m) => m.agentDashboardRoutes)
	},
	{
		path: 'screen-capture',
		loadComponent: () => import('@dinary/desktop-ui-lib').then((m) => m.ScreenCaptureComponent)
	}
];

/**
 * Configures the router for the application.
 */
const config: ExtraOptions = {
	useHash: true
};

@NgModule({
	imports: [RouterModule.forRoot(routes, config)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
