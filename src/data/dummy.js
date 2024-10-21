import React from 'react'
import {
  AiOutlineMessage,
  AiOutlineShoppingCart,
  AiOutlineSetting,
  AiOutlineCar,
  AiFillProfile,
  AiOutlineProfile,
} from 'react-icons/ai'
import { FiShoppingBag } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { RiContactsLine, RiProductHuntLine, RiAdminLine } from 'react-icons/ri'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { SiGoogleanalytics } from 'react-icons/si'
import { SlPeople } from 'react-icons/sl'
import earning from './earning.svg'

export const DataHomeOne = [
  {
    bg: earning,
    icon: <BsCurrencyDollar />,

    title: 'Earning',
    earning: '$200.2',
    time: '    Last 24 hourse',
  },
  {
    icon: <SiGoogleanalytics />,
    title: 'Total Salse',
    earning: '$22.2',
    time: '    Last 24 hourse',
  },
  {
    icon: <SlPeople />,
    title: 'Total Customers',
    earning: '$29.2',
    time: 'Last 24 hourse',
  },
  {
    icon: <MdOutlineProductionQuantityLimits />,
    title: 'Total Products',
    earning: '$220.2',
    time: '       Last 24 hourse',
  },
]

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Home',
        icon: <FiShoppingBag />,
      },
      {
        name: 'Orders',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'Admins',
        icon: <RiAdminLine />,
      },
      {
        name: 'Users',
        icon: <RiContactsLine />,
      },
      {
        name: 'Brands',
        icon: <AiOutlineCar />,
      },
      {
        name: 'Categories',
        icon: <AiOutlineCar />,
      },
      {
        name: 'Products',
        icon: <RiProductHuntLine />,
      },
      {
        name: 'Messages',
        icon: <AiOutlineMessage />,
      },
      {
        name: 'Settings',
        icon: <AiOutlineSetting />,
      },
      {
        name: 'Profile',
        icon: <AiOutlineProfile />,
      },
    ],
  },
]

export const ordersHeader = [
  {
    text: 'id',
    size: 'w-[50px]',
  },
  {
    text: 'img',
    size: 'min-w-[110px]',
  },
  {
    text: 'product',
    size: ' min-w-[120px]',
  },
  {
    text: 'car',
    size: ' min-w-[120px]',
  },
  {
    text: 'model',
    size: ' min-w-[80px]',
  },
  {
    text: 'qty',
    size: ' min-w-[80px]',
  },
  {
    text: 'total price',
    size: ' min-w-[120px]',
  },
  {
    text: 'username',
    size: ' min-w-[200px]',
  },
  {
    text: 'fullname',
    size: ' min-w-[180px]',
  },
  {
    text: 'address',
    size: ' min-w-[150px]',
  },
  {
    text: 'code',
    size: ' min-w-[160px]',
  },
  {
    text: 'city',
    size: ' min-w-[100px]',
  },
  {
    text: 'country',
    size: ' min-w-[100px]',
  },
  {
    text: 'status',
    size: ' min-w-[100px]',
  },
  {
    text: 'created at',
    size: ' min-w-[100px]',
  },
  {
    text: 'updated at',
    size: ' min-w-[100px]',
  },
  {
    text: 'action',
    size: ' min-w-[70px]',
  },
]

export const adminHeader = [
  {
    text: 'id',
    size: ' min-w-[50px]',
  },
  {
    text: 'avatar',
    size: ' min-w-[100px]',
  },
  {
    text: 'name',
    size: ' flex-1 ssm:min-w-[200px]',
  },
  {
    text: 'username',
    size: ' flex-1 ssm:min-w-[200px]',
  },
  {
    text: 'created at',
    size: ' min-w-[100px]',
  },
  {
    text: 'updated at',
    size: ' min-w-[100px]',
  },
  {
    text: 'action',
    size: ' min-w-[70px]',
  },
]

export const usersHeader = [
  {
    text: 'id',
    size: ' min-w-[50px]',
  },
  {
    text: 'avatar',
    size: ' min-w-[100px]',
  },
  {
    text: 'name',
    size: ' flex-1 ssm:min-w-[200px]',
  },
  {
    text: 'username',
    size: ' flex-1 ssm:min-w-[200px]',
  },
  {
    text: 'created at',
    size: ' min-w-[100px]',
  },
  {
    text: 'updated at',
    size: ' min-w-[100px]',
  },
  {
    text: 'action',
    size: ' min-w-[70px]',
  },
]

export const brandsHeader = [
  {
    text: 'id',
    size: ' min-w-[50px]',
  },
  {
    text: 'img',
    size: '   min-w-[200px]',
  },
  {
    text: 'name',
    size: 'flex-1  ssm:min-w-[200px]',
  },

  {
    text: 'created at',
    size: ' min-w-[100px]',
  },
  {
    text: 'updated at',
    size: ' min-w-[100px]',
  },
  {
    text: 'action',
    size: ' min-w-[70px]',
  },
]
export const categoriesHeader = [
  {
    text: 'id',
    size: ' min-w-[50px]',
  },
  {
    text: 'name',
    size: 'flex-1 ssm:min-w-[200px]',
  },
  {
    text: 'Brand',
    size: 'flex-1 ssm:min-w-[200px]',
  },

  {
    text: 'created at',
    size: ' min-w-[100px]',
  },
  {
    text: 'updated at',
    size: ' min-w-[100px]',
  },
  {
    text: 'action',
    size: ' min-w-[70px]',
  },
]

export const messagesHeader = [
  {
    text: 'id',
    size: ' min-w-[50px]',
  },
  {
    text: 'name',
    size: ' min-w-[200px]',
  },
  {
    text: 'username',
    size: 'min-w-[200px]',
  },
  {
    text: 'subject',
    size: ' flex-1 ssm:min-w-[250px]',
  },

  {
    text: 'created at',
    size: ' min-w-[100px]',
  },

  {
    text: 'action',
    size: ' min-w-[70px]',
  },
]

export const productsHeader = [
  {
    text: 'id',
    size: ' min-w-[50px]',
  },
  {
    text: 'img',
    size: ' min-w-[110px]',
  },
  {
    text: 'title',
    size: 'min-w-[220px]',
  },
  {
    text: 'part',
    size: ' min-w-[200px]',
  },
  {
    text: 'brand',
    size: ' min-w-[100px]',
  },
  {
    text: 'category',
    size: ' min-w-[150px]',
  },
  {
    text: 'made in',
    size: ' min-w-[100px]',
  },
  {
    text: 'start price',
    size: ' min-w-[120px]',
  },
  {
    text: 'model & price',
    size: ' min-w-[240px]',
  },

  {
    text: 'created at',
    size: ' min-w-[100px]',
  },
  {
    text: 'updated at',
    size: ' min-w-[100px]',
  },

  {
    text: 'action',
    size: ' min-w-[70px]',
  },
]

export const statusOptions = [
  {
    _id: 'Pending',
    title: 'Pending',
  },
  {
    _id: 'Delivered',
    title: 'Delivered',
  },
]

export const roleOptions = [
  {
    _id: 'ADMIN',
    title: 'ADMIN',
  },
  {
    _id: 'USER',
    title: 'USER',
  },
]
