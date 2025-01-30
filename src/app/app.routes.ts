import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent)
}, {
  path: 'courses',
  loadComponent: () => import('./courses/courses.component').then(m => m.CoursesComponent)
}, {
  path: 'courses/:id',
  loadComponent: () => import('./course-detail/course-detail.component').then(m => m.CourseDetailComponent)
}, {
  path: 'innovation',
  loadComponent: () => import('./innovation/innovation.component').then(m => m.InnovationComponent)
}, {
  path: 'community',
  loadComponent: () => import('./community/community.component').then(m => m.CommunityComponent)
}, {
  path: 'about',
  loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
}, {
  path: 'login',
  loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
}, {
  path: 'instructors',
  loadComponent: () => import('./instructors/instructors.component').then(m => m.InstructorsComponent)
}, {
  path: 'profile',
  loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
}, {
  path: 'robotics',
  loadComponent: () => import('./robotics/robotics.component').then(m => m.RoboticsComponent)
}, {
  path: 'drones',
  loadComponent: () => import('./drones/drones.component').then(m => m.DronesComponent)
}, {
  path: 'ai',
  loadComponent: () => import('./ai/ai.component').then(m => m.AiComponent)
}, {
  path: 'blockchain',
  loadComponent: () => import('./blockchain/blockchain.component').then(m => m.BlockchainComponent)
}];
