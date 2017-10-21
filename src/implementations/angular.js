import 'es6-shim';
import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PerformanceTestModule } from './angular/performance-test.module';

platformBrowserDynamic().bootstrapModule(PerformanceTestModule);