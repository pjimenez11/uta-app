import { LuBookMarked, LuBookmark, LuGlobe, LuGlobe2 } from "react-icons/lu";


export const headerNavigation = [
    {
        name: "Programas de estudio", href: "/programas-de-estudio", current: false, isExternal: false, subNavigation: [
            { name: "Grado", href: "/programas-de-estudio/grado", current: false, isExternal: false, icon: LuBookMarked },
            { name: "Posgrados", href: "/programas-de-estudio/posgrados", current: false, isExternal: false, icon: LuBookmark },
            { name: "Educación continua", href: "/programas-de-estudio/educacion-continua", isExternal: true, current: false, icon: LuGlobe },
            { name: "Idiomas", href: "/programas-de-estudio/idiomas", current: false, isExternal: false, icon: LuGlobe2 },
        ]
    },
    { name: "Investigación", href: "https://investigacion.uta.edu.ec/v4.0/", current: false, isExternal: true, subNavigation: [] },
    { name: "Vinculación", href: "https://diviso.uta.edu.ec/v4.0/", current: false, isExternal: true, subNavigation: [] },
    {
        name: "Nosotros", href: "/nosotros", current: false, subNavigation: [
            { name: "Autoridades", href: "/nosotros/aurtoridades", current: false, isExternal: false },
            { name: "Rendicion de cuentas", href: "/nosotros/rendicion-de-cuentas", current: false, isExternal: false },
            { name: "Políticas", href: "https://utaedu-my.sharepoint.com/personal/ae_sanchez_uta_edu_ec/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fae%5Fsanchez%5Futa%5Fedu%5Fec%2FDocuments%2FNORMATIVA%20UNIVERSITARIA", current: false, isExternal: true },
            { name: "Historia", href: "/nosotros/historia", current: false, isExternal: false },
            { name: "Himno", href: "/nosotros/himno", current: false, isExternal: false },
            { name: "Ruta de buses", href: "/nosotros/ruta-de-buses", current: false, isExternal: false },
        ]
    },
    { name: "Calendario", href: "/calendars", current: false, isExternal: false, subNavigation: [] },
];

export const servicesNavigation = [
    { name: "Servicios Web", href: "/servicios-web", current: false, isExternal: false, icon: "https://www.loginetmultimedia.com/wp-content/uploads/2018/03/servicios.png" },
    { name: "Correo Institucional", href: "https://login.microsoftonline.com/", isExternal: true, current: false, icon: "https://www.pngplay.com/wp-content/uploads/6/Email-PNG-Clipart-Background.png" },
    { name: "Biblioteca", href: "https://elibro.net/es/lc/uta/login_usuario/?next=/es/lc/uta/inicio/", current: false, isExternal: true, icon: "https://images.vexels.com/media/users/3/254871/isolated/preview/645461cfc1e11e8bd993f4b1855a806b-escuela-aulaiconos-joven-y-dulce-vinilocolor-cr-18.png" },
    { name: "DEADV", href: "/programas-de-estudio/educacion-continua", current: false, isExternal: true, icon: "https://deadv.uta.edu.ec/images/2020/01/22/deadv-rojo.png" },
    { name: "Sistema Integrado", href: "https://servicios.uta.edu.ec/SistemaIntegrado/Cuenta/Login?ReturnUrl=%2fSistemaIntegrado%2f", current: false, isExternal: true, icon: "https://cdn-icons-png.flaticon.com/512/4862/4862384.png" },
];

