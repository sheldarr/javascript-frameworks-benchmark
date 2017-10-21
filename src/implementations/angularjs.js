import angular from 'angular';

import PerformanceTest from './angularjs/performance-test.component';
import VirtualMachinesTable from './angularjs/virtual-machines-table.component';

const application = angular.module('application', []);

application.component('performanceTest', PerformanceTest);
application.component('virtualMachinesTable', VirtualMachinesTable);