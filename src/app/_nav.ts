import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Karnel Poupouya',
    icon: 'icon-user',
  },
  {
    title: true,
    name: 'INFORMATIONS GENERALES'
  },
  {
    name: 'Cartographie',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Pluviometrie',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    title: true,
    name: 'STATISTIQUES AGRICOLES'
  },
  {
    name: 'Cultures de rentes',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cacao',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Café',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Anacadre',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Coton',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Hevéa',
        url: '/base/navbars',
        icon: 'icon-puzzle'

      },
      {
        name: 'Palmier a huile',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Cultures Vivrieres',
    url: '/buttons',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Riz',
        url: '/buttons/buttons',
        icon: 'icon-puzzle'
      },
      {
        name: 'Mais',
        url: '/buttons/dropdowns',
        icon: 'icon-puzzle'
      },

      {
        name: 'Sorgho',
        url: '/buttons/brand-buttons',
        icon: 'icon-puzzle'
      },
      {
        name: 'Mil',
        url: '/buttons/mais',
        icon: 'icon-puzzle'
      },

      {
        name: 'Manioc',
        url: '/buttons/brand-buttons',
        icon: 'icon-puzzle'
      },
      {
        name: 'Igname',
        url: '/buttons/brand-buttons',
        icon: 'icon-puzzle'
      },
      {
        name: 'Banane plantain',
        url: '/buttons/brand-buttons',
        icon: 'icon-puzzle'
      },
      {
        name: 'Taro',
        url: '/buttons/brand-buttons',
        icon: 'icon-puzzle'
      },
      {
        name: 'Arachide',
        url: '/buttons/brand-buttons',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Cultures Marechaires',
    url: '/icons',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Légumes',
        url: '/icons/flags',
        icon: 'icon-puzzle'
      },
      {
        name: 'Fruits',
        url: '/icons/simple-line-icons',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    title: true,
    name: 'COMMERCES AGRICOLES',
  },
  {
    name: 'Commerce exterieur',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Exportations',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Importations',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Commerce interieur',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Prix Moyen Annuel des variétés',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Se deconnecter',
    url: '',
    icon: 'icon-logout',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Page Administrateur',
    url: 'http://coreui.io/angular/',
    icon: 'icon-login',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
];
