import Vue from 'vue';
import Router from 'vue-router';
import mine from '@/components/mine';
import login from '@/components/login';
import detail from '@/components/detail';
import forms from '@/components/forms';
import find from '@/components/find';
import recordIn from '@/components/recordIn';
import recordOut from '@/components/recordOut';

Vue.use(Router)

export default new Router({
  routes: [
	  {
	  	path:'/',
	  	name:'detail',
	  	component:detail
	  },
      {
        path:'/recordIn',
        name:'recordIn',
        component:recordIn
      },
       {
        path:'/recordOut',
        name:'recordOut',
        component:recordOut
      },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
    	path:'/forms',
    	name:'forms',
    	component:forms
    },
    {
    	path:'/find',
    	name:'find',
    	component:find
    },
    {
    	path:'/mine',
    	name:'mine',
    	component:mine
    },
    {
    	path:'/login',
    	name:'login',
    	component:login
    }
  ]
})
