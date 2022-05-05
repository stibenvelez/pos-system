import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";


export const SidebarData = [
    {
        title: "Overview",
        path: "#",
        icon: null,
        iconClosed: null,
        iconOpened: null,

        subNav: [
            {
                title: "Users",
                path: "/overview/users",
                icon: null,
            },
            {
                title: "Revenue",
                path: "/overview/revenue",
                icon: null,
            },
        ],
    },
    {
        title: "Ventas",
        path: "#",
        icon: null,
        iconClosed: null,
        iconOpened: null,

        subNav: [
            {
                title: "Lista de Ventas",
                path: "/sales",
                icon: null,
                cName: "sub-nav",
            },
            {
                title: "Nueva venta",
                path: "/sales/new-sale" ,
                icon: null,
                cName: "sub-nav",
            },
        ],
    },
    {
        title: "Products",
        path: "#",
        icon: null,
    },
    {
        title: "Team",
        path: "#",
        icon: null,
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