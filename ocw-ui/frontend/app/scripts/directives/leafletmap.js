/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *    http: *www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

'use strict';

/**
 * @ngdoc directive
 * @name ocwUiApp.directive:leafletMap
 * @description
 * # leafletMap
 */
angular.module('ocwUiApp')
.directive('leafletMap', function($rootScope) {
	return {
		restrict: 'E',
		replace: true,
		template: '<div></div>',
		link: function(scope, element, attrs) {
			$rootScope.map = L.map(attrs.id, {
				center: [40, 0],
				zoom: 2,
				scrollWheelZoom: false,
				attributionControl: false,
				worldCopyJump: true,
			});

			L.tileLayer('http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png', {
					attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
					maxZoom: 19
			}).addTo($rootScope.map);
		}
	};
});
