import Vue from 'vue'
import Router from 'vue-router'

import UsersComponent from '@/components/UsersComponent'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home'
import Contacto from '@/components/Contacto'

import Mostrar from '@/components/curso/Mostrar'
import Crear from '@/components/curso/Crear'
import Editar from '@/components/curso/Editar'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UsersComponent',
     component: UsersComponent
    },
    {
        path: '/hh',
        name: 'HelloWorld',
       component: HelloWorld
    },
    {
        name: 'home',
        path: '/',
        component:Home
    },
    {
        name: 'contacto',
        path: '/contacto',
        component:Contacto
    },
    {
        name: 'mostrarCursos',
        path: '/cursos',
        component:Mostrar
    },
    {
        name: 'crearCurso',
        path: '/crear',
        component:Crear
    },
    {
        name: 'editarCurso',
        path: '/editar/:id',
        component:Editar
    },
  ]
})
