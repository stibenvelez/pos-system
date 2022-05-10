import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";


export const SidebarData = [
    {
        title: "Ventas",
        path: "#",
        icon: null,
        iconClosed: null,
        iconOpened: null,

        subNav: [
            {
                title: "Nueva venta",
                path: "/sales/new-sale",
                icon: null,
                cName: "sub-nav",
            },
            {
                title: "Lista de Ventas",
                path: "/sales",
                icon: null,
                cName: "sub-nav",
            },
        ],
    },
    {
        title: "Products",
        path: "#",
        icon: null,
        icon: null,
        iconClosed: null,
        iconOpened: null,

        subNav: [
            {
                title: "Administrar Productos",
                path: "/products",
                icon: null,
                cName: "sub-nav",
            },
            {
                title: "Agregar un producto",
                path: "products/new-product",
                icon: null,
                cName: "sub-nav",
            },
        ],
    },
    {
        title: "Empleados",
        path: "#",
        icon: null,
        iconClosed: null,
        iconOpened: null,

        subNav: [
            {
                title: "Empleados",
                path: "/employees",
                icon: null,
            },
            {
                title: "Agregar emploado",
                path: "#",
                icon: null,
            },
        ],
    },
    {
        title: "Messages",
        path: "#",
        icon: null,

        iconClosed: null,
        iconOpened: null,

        subNav: [
            {
                title: "Message 1",
                path: "#",
                icon: null,
            },
            {
                title: "Message 2",
                path: "#",
                icon: null,
            },
        ],
    },
    {
        title: "Support",
        path: "#",
        icon: null,
    },
];