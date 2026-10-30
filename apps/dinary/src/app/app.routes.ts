import { Routes } from '@angular/router';
import { AuthGuard } from '@dinary/ui-core/core';
import { AppModuleGuard } from './app.module.guard';

/**
 * Routes for the application.
 */
export const appRoutes: Routes = [
	{
		path: 'auth',
		loadChildren: () => import('@dinary/ui-auth').then((m) => m.NgxAuthModule),
		canActivate: []
	},
	{
		path: 'sign-in',
		loadChildren: () => import('@dinary/ui-auth').then((m) => m.SignInSuccessModule)
	},
	{
		path: 'onboarding',
		loadChildren: () => import('@dinary/plugin-onboarding-ui').then((m) => m.OnboardingModule),
		canActivate: [AuthGuard, AppModuleGuard]
	},
	{
		path: 'pages',
		loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
		canActivate: [AuthGuard, AppModuleGuard]
	},
	{
		// Detached AI chat window (opened with window.open by
		// ChatSidebarService.detach()). It lives here rather than under
		// 'pages' on purpose: 'pages' renders the PagesComponent shell
		// (nav menu sidebar + header + footer) and this window must show
		// only the chat, so it can sit on a second monitor.
		path: 'ai-chat',
		loadChildren: () => import('@dinary/plugin-ai-chat-react-ui').then((m) => m.AI_CHAT_WINDOW_ROUTES),
		canActivate: [AuthGuard, AppModuleGuard]
	},
	{
		path: 'share',
		loadChildren: () => import('@dinary/plugin-public-layout-ui').then((m) => m.PublicLayoutModule),
		canActivate: []
	},
	{
		path: 'legal',
		loadChildren: () => import('@dinary/plugin-legal-ui').then((m) => m.LegalModule)
	},
	{
		path: 'server-down',
		loadChildren: () => import('@dinary/plugin-maintenance-ui').then((m) => m.MaintenanceModeModule)
	},
	{
		path: '',
		redirectTo: 'pages',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: 'pages',
		pathMatch: 'full'
	}
];
