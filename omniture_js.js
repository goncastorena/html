jQuery(document).ready(function ($) {
    var first = datafields.firstTime;
    var delayTime = 250;
    setEnviorment(datafields.environment);
    var data = new Array();
    data.Idioma = datafields.idioma; // variable de sesion el idioma
    data.UID = datafields.UID; // variable de sesion
    data.CargoFuncional = datafields.CargoFuncional; // variable de sesion
    data.Empleado = datafields.Empleado; //// variable de sesion
    data.App_actual = datafields.App_actual; // campo url
    data.OrigenDatos = datafields.OrigenDatos;
    data.Pais = datafields.Pais; /// variable de sesion
    data.Empresa = datafields.Empresa;// variable de sesion
    ous = datafields.ous;
    data.UONivel1 = ous[0]['ouCode'];
    data.UONivel2 = ous[1]['ouCode'];
    data.UONivel3 = ous[2]['ouCode'];
    data.UONivel4 = ous[3]['ouCode'];
    data.UONivel5 = ous[4]['ouCode'];
    data.UONivel6 = ous[5]['ouCode'];
    data.UONivel7 = ous[6]['ouCode'];
    data.UONivel8 = ous[7]['ouCode'];
    data.UONivel9 = ous[8]['ouCode'];
    data.UONivel10 = ous[9]['ouCode'];

    var miestatistic = new Stadistic();
    miestatistic.init(data);
    var url = url_modificada(datafields.url_actual);
    var referer = $('body').attr('data-referer');

    function url_modificada(url_replace) {
        url_replace = url_replace.replace('https://', '');
        url_replace = url_replace.replace('.appspot.com', '');
        return url_replace;
    };

    function url_delay(objectJquery, event) {
        event.preventDefault();
        if (objectJquery.attr('href')) {
            var href = objectJquery.attr('href');

            var target = objectJquery.attr('target') ? objectJquery.attr('target') : '_self';
            setTimeout(function () {
                window.open(href, target);
            }, delayTime);
        }
    }

    if (first == 'first') {
        //Aterrizo en cualquier página
        console.log('data send:' + JSON.stringify({"eVar73": url, "eVar74": 'url'}));
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": url}, {
            "prop73": url,
            "prop74": url
        }, ["event71", "event72", "event1"], true);
    }

    //Click Header Menú
    $('nav.navbar.sticky-top.header-menu a:not(.icon-arrow)').on('click', function (e) {
        var text = $(this).text().trim();//Para el menú
        var breadcrums = 'menu/';
        //Para los submenús
        if ($(this).has('h2.title').length) {
            text = $(this).children('h2').text().trim();
            breadcrums += $(this).parents('.nav-main.dropdown-main').prev().text().trim() + ':' + text;
        } else if ($(this).parents('.desktop-menu').length) {
            breadcrums += text;
        }
        //Submenu mobile
        if ($(this).has('.card_menu_movil').length) {
            text = $(this).children('.card_menu_movil').children('h2').text().trim();
            breadcrums += $(this).parents('.collapse').prev().text().trim() + ':' + text;
        } else if ($(this).parents('.mobile-menu').length) {
            breadcrums += text;
        }

        console.log(breadcrums);

        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
        url_delay($(this), e);

    });

    //Click Footer Menú
    $('footer a').on('click', function (e) {
        var text = $(this).text().trim();//Para el menú
        console.log(text);
        var breadcrums = 'footer/';
        if ($(this).parents('ul').length) {
            // text = $(this).children('.card_menu_movil').children('h2').text().trim();
            breadcrums += $(this).parents('ul').prev().text().trim() + ':' + text;
        } else {
            breadcrums += text;
        }
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
        url_delay($(this), e);
    });

    //Bloque video-home
    $('.video-home .icon-play, .video-home-resp .icon-play').on('click', function () {
        var id_video = $(this).attr('data-id-video');
        //evar71 -> dependiendo de que play sea? si es el del video-home o el del recomendador?
        console.log('data send:' + JSON.stringify({"eVar70": url, "eVar71": 'playVideo', "eVar72": id_video}));
        miestatistic.registraSeguimientoGenerico({
            "eVar70": url,
            "eVar71": 'playVideo',
            "eVar72": id_video
        }, {"prop70": url, "prop71": 'playVideo', "prop72": id_video}, ["event70"]);
    });

    //Cuadro de mandos
    //Al ser un elemento que se carga por ajax hay que agergar así el evento
    $(document).on('click', '.cornestonne-component a:not(.nav-link)', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/cuadrodemando:';

        if ($(this).parents('.personal-info').length) {
            breadcrums += 'personal-data - ';
        } else if ($(this).parents('.analitic-info').length) {
            breadcrums += 'myAssesment - ';
        } else if ($(this).parents('.formation-info').length) {
            breadcrums += 'development_plan - ';
        } else if ($(this).parents('.skills-info').length) {
            breadcrums += 'formationInfo - ';
        } else if ($(this).parents('.growth-info').length) {
            breadcrums += 'learningInfo - ';
        } else if ($(this).parents('.myMobility-row').length) {
            breadcrums += 'mobility - ';
        }

        breadcrums += $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
        url_delay($(this), e);
    });

    //Tarjetas - Home
    $('.cards-container a').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/tarjetas:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);

        url_delay($(this), e);
    })

    //Destacado recomendador - ESPECIAL
    $('.call_to_action-component a.btn.btn-bbva').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/recomendador:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({
            "eVar70": url,
            "eVar71": breadcrums,
            "eVar72": "recomendadorinicio"
        }, {"prop70": url, "prop71": breadcrums, "prop72": "recomendadorinicio"}, ["event70"]);
        url_delay($(this), e);
    });


    //Tips
    $('.last_news-component .card-blog a').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/tips:' + $(this).find('.title-post').text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);

        url_delay($(this), e);
    });

    $('.last_news-component .see-all-tips a').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/tips:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);

        url_delay($(this), e);
    });

    //Feedback - Valoracion
    $('.valoration-component .stars-container input').on('change', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/valorationcomponent';
        var value = $(this).val();
        miestatistic.registraSeguimientoGenerico({
            "eVar70": url,
            "eVar71": breadcrums,
            "eVar72": "feedbackvoto",
            "eVar75": value
        }, {"prop70": url, "prop71": breadcrums, "prop72": "feedbackvoto", "prop75": value}, ["event70"]);
        console.log(breadcrums);
    });
    $('.valoration-component a.icon-form').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/valorationcomponent:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({
            "eVar70": url,
            "eVar71": breadcrums,
            "eVar72": "feedbackformulario"
        }, {"prop70": url, "prop71": breadcrums, "prop72": "feedbackformulario"}, ["event70"]);
        url_delay($(this), e);
    });

    //FeedbackForm

    $('section.form-steps a.leave-form').on('click', function (e) {

        var breadcrums = $('body').attr('data-actual-page') + '/feedbackform:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({
            "eVar70": url,
            "eVar71": breadcrums,
            "eVar72": "feedbackabandonar"
        }, {"prop70": url, "prop71": breadcrums, "prop72": "feedbackabandonar"}, ["event70"]);
        url_delay($(this), e);
    });

    $('section.form-steps a#send_feed_back_btn').on('click', function (e) {

        var breadcrums = $('body').attr('data-actual-page') + '/feedbackform:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({
            "eVar70": url,
            "eVar71": breadcrums,
            "eVar72": "feedbackfinalizar"
        }, {"prop70": url, "prop71": breadcrums, "prop72": "feedbackfinalizar"}, ["event70"]);
        // url_delay($(this), e);
    });

    //Bloque caracteristicas
    $('.nav-middle-content a').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/bloquecaracteristicas:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
        url_delay($(this), e);
    });

    //Elementos perfilados
    $('.tools-section a').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/elementosperfilados:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
        url_delay($(this), e);
    });

    //FAQs
    //Cualquier enlace que no sea los TABS
    $('.faqs a:not(.nav-link)').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/faqs:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
        url_delay($(this), e);
    });
    //Los TABS
    $('.faqs a.nav-link').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/faqs:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
    });

    //Anterior y siguiente
    $('.faqs-modal .modal').on('slid.bs.carousel', function (e) {
        // var breadcrums = $('body').attr('data-actual-page') + '/faqs:' + $(this).text().trim();
        var breadcrums = $('body').attr('data-actual-page') + '/faqs:' + $(this).find('.modal-body .carousel-item.active .modal-title').text();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);

    });

    //Mosaico
    $('.roles-section a').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/mosaico:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
        url_delay($(this), e);
    });

    //Lista Enlaces
    $('.module-links  a').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/listaenlaces:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
        url_delay($(this), e);
    });

    //Detalles
    $('.module-criteria a').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/detalles:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
        url_delay($(this), e);
    });

    //Información + Imagen
    //TODO
    // $('.module-criteria a').on('click',function (e) {
    //     var breadcrums = $('body').attr('data-actual-page') + '/detalles:' + $(this).text().trim();
    //     console.log(breadcrums);
    //     miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
    //         "prop73": url,
    //         "prop74": breadcrums
    //     }, ["event72", "event1"], true);
    //     url_delay($(this), e);
    // });

    //Recomendación + Video
    $('.recomendacion-accesos-video a').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/recomendacionvideo:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
        url_delay($(this), e);
    });

    //Recomendación + enlace
    $('.recomendacion-accesos a').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/recomendacionenalces:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
        url_delay($(this), e);
    });

    //Responsable - Gestor
    $('.recomendacion-dudas a').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/responsablegestor:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
        url_delay($(this), e);
    });

    //Selector Recomendador (formulario)
    $('.recomendacion-test a#bt-r-test').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/recomendador:' + $(this).text().trim();
        console.log(breadcrums);
        var option = $('input[name="recomendacion-test"]:checked').next().find('.item-question').text().trim();
        miestatistic.registraSeguimientoGenerico({
            "eVar70": url,
            "eVar71": breadcrums,
            "eVar72": 'recomendadoropcion',
            "eVar75": option
        }, {"prop70": url, "prop71": breadcrums, "prop72": 'recomendadoropcion', "prop75": option}, ["event70"]);
        url_delay($(this), e);
    });
    //Page header - BUTTON
    $('main.main a').on('click', function (e) {
        var breadcrums = $('body').attr('data-actual-page') + '/pageheader:' + $(this).text().trim();
        console.log(breadcrums);
        miestatistic.registraSeguimientoGenerico({"eVar73": url, "eVar74": breadcrums}, {
            "prop73": url,
            "prop74": breadcrums
        }, ["event72", "event1"], true);
        url_delay($(this), e);
    });

});