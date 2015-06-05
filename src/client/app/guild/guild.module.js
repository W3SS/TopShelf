(function()
{
  'use strict';

  /* @ngdoc object
   * @name app.guild
   * @description
   * Module for the guild portions of the application
   */
  angular
    .module('app.guild', [])
    .config(configure);

  configure.$inject = ['$stateProvider'];

  function configure($stateProvider)
  {
    $stateProvider
      .state('guild',
      {
        abstract: true,
        url: '',
        templateUrl: 'app/core/layout/shell.html>'
      })
      .state('guild.home',
      {
        url: '/',
        title: 'Top Shelf - Sargeras US Mythic Raiding',
        views:
        {
          'main@':
          {
            templateUrl: 'app/guild/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home',
            resolve:
            { /* @ngInject */
              articles: function(articleSvc)
              {
                return articleSvc.all();
              }
            }
          }
        }

      })
      .state('guild.home.article',
      {
        url: 'news/:id',
        views:
        {
          'main@':
          {
            templateUrl: 'app/guild/news/view/news.view.html',
            controller: 'NewsViewCtrl',
            controllerAs: 'vm',
            resolve:
            { /* @ngInject */
              article: function($stateParams, articleSvc)
              {
                return articleSvc.get($stateParams.id);
              }
            }
          }
        }
      })
      .state('guild.info',
      {
        url: '/info',
        title: 'About Us- Top Shelf',
        views:
        {
          'main@':
          {
            templateUrl: 'app/guild/info/info.html',
            controller: 'InfoCtrl as info'
          }
        }
      })
      .state('guild.streams',
      {
        url: '/streams',
        title: 'Top Shelf Live Streams',
        views:
        {
          'main@':
          {
            tempalteUrl: 'app/guild/streams/streams.html',
            controller: 'StreamsCtrl as str'
          }
        }
      })
      .state('guild.roster',
      {
        url: '/roster',
        title: 'Active Raid Roster - Top Shelf',
        views:
        {
          'main@':
          {
            templateUrl: 'app/guild/roster/roster.html',
            controller: 'RosterCtrl as roster',
            resolve: { /*@ngInject*/
              members: function(armorySvc) {
                return armorySvc.getMembers();
              }
            }
          }
        }
      });
  }
}());
