import { IProyecto } from "./IProyecto";

export const proyectos: IProyecto[] = [
    {
        id: 1,
        numero: "01",
        titulo: "Plataforma de Comercio Electrónico",
        descripcion:
            "Desarrollo de una plataforma completa de comercio electrónico que permite a los usuarios explorar productos, realizar compras seguras y gestionar sus pedidos.",
        tecnologias: "React, Node.js, MongoDB",
        fecha: "Junio 2022",
        solucion:
            "Proporciona una experiencia de compra fluida y segura, integrando funciones como carrito de compras, pasarela de pago y seguimiento de pedidos.",
        imagenes: ["proyecto1_img1.jpg", "proyecto1_img2.jpg", "proyecto1_img3.jpg"],
    },
    {
        id: 2,
        numero: "02",
        titulo: "Aplicación de Gestión de Eventos",
        descripcion:
            "Creación de una aplicación móvil para gestionar eventos, permitiendo a los usuarios explorar eventos locales, comprar entradas y recibir actualizaciones en tiempo real.",
        tecnologias: "Flutter, Firebase",
        fecha: "Abril 2023",
        solucion:
            "Facilita la organización y participación en eventos, incorporando funcionalidades como mapas de ubicación, registro de asistencia y notificaciones push.",
        imagenes: ["proyecto2_img1.jpg", "proyecto2_img2.jpg", "proyecto2_img3.jpg"],
    },
    {
        id: 3,
        numero: "03",
        titulo: "Sistema de Administración Escolar",
        descripcion:
            "Desarrollo de un sistema integral para la gestión académica y administrativa de una institución educativa, incluyendo registro de estudiantes, calificaciones y comunicación.",
        tecnologias: "Angular, ASP.NET Core, SQL Server",
        fecha: "Enero 2024",
        solucion:
            "Optimiza los procesos educativos, permitiendo a profesores, estudiantes y padres acceder a información académica actualizada y comunicarse de manera efectiva.",
        imagenes: ["proyecto3_img1.jpg", "proyecto3_img2.jpg", "proyecto3_img3.jpg"],
    },
];