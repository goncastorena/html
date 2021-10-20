jQuery(document).ready(function ($) {

    //Load cornestonneDataAsyn
    if ($('.cornestonne-component').length) {

        // Actualiza personalData
        $.ajax({
            type: 'post',
            url: frontend_data.ajax_url,
            data: {
                action: 'bbva_theme_cornestonne_personalData',
                uid: $('.cornestonne-component').attr('data-uid'),
                email: $('.cornestonne-component').attr('data-email'),
                post_id: $('.cornestonne-component').attr('data-post-id')
            },
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                $('.cornestonne-component .personal-info .container-spinner').addClass('d-none');
                $('.cornestonne-component .personal-info').append(response);
                if ($('#miPanel').hasClass('active')) {
                    var height_cornestonne = $('.cornestonne-component').height('auto');
                    $('.cornestonne-component').height(height_cornestonne.height() - 80);
                }

            }
        });

        //Actualiza MyAssessment
        $.ajax({
            type: 'post',
            url: frontend_data.ajax_url,
            data: {
                action: 'bbva_theme_cornestonne_myAssesment',
                uid: $('.cornestonne-component').attr('data-uid'),
                email: $('.cornestonne-component').attr('data-email'),
                post_id: $('.cornestonne-component').attr('data-post-id')
            },
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                $('.cornestonne-component .analitic-info .container-spinner').addClass('d-none');
                $('.cornestonne-component .analitic-info').append(response);
                if ($('#miPanel').hasClass('active')) {
                    var height_cornestonne = $('.cornestonne-component').height('auto');
                    $('.cornestonne-component').height(height_cornestonne.height() - 80);
                }
            }
        });

        //Actualiza FormationInfo
        $.ajax({
            type: 'post',
            url: frontend_data.ajax_url,
            data: {
                action: 'bbva_theme_cornestonne_formationInfo',
                uid: $('.cornestonne-component').attr('data-uid'),
                email: $('.cornestonne-component').attr('data-email'),
                post_id: $('.cornestonne-component').attr('data-post-id')
            },
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                $('.cornestonne-component .formation-info .container-spinner').addClass('d-none');
                $('.cornestonne-component .formation-info').append(response);
                if ($('#miPanel').hasClass('active')) {
                    var height_cornestonne = $('.cornestonne-component').height('auto');
                    $('.cornestonne-component').height(height_cornestonne.height() - 80);
                }
            }
        });

        //Actualiza DevelopmentPlan
        $.ajax({
            type: 'post',
            url: frontend_data.ajax_url,
            data: {
                action: 'bbva_theme_cornestonne_development_plan',
                uid: $('.cornestonne-component').attr('data-uid'),
                email: $('.cornestonne-component').attr('data-email'),
                post_id: $('.cornestonne-component').attr('data-post-id')
            },
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                $('.cornestonne-component .skills-info .container-spinner').addClass('d-none');
                $('.cornestonne-component .skills-info').append(response);
                $('.circle-percentage').circleProgress({
                    size: 123,
                    thickness: 3,
                    startAngle: -Math.PI / 2,
                    emptyFill: "rgba(0, 0, 0, 0)",
                }).on('circle-animation-progress', function (event, progress) {
                    if ($('#miPanel').hasClass('active')) {
                        var height_cornestonne = $('.cornestonne-component').height('auto');
                        $('.cornestonne-component').height(height_cornestonne.height() - 80);
                    }
                });
            }
        });

        //Actualiza LearningInfo
        $.ajax({
            type: 'post',
            url: frontend_data.ajax_url,
            data: {
                action: 'bbva_theme_cornestonne_learningInfo',
                uid: $('.cornestonne-component').attr('data-uid'),
                email: $('.cornestonne-component').attr('data-email'),
                post_id: $('.cornestonne-component').attr('data-post-id'),
                language: $('.cornestonne-component').attr('data-language')
            },
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                $('.cornestonne-component .growth-info .container-spinner').addClass('d-none');
                $('.cornestonne-component .growth-info').append(response);
                if ($('#miPanel').hasClass('active')) {
                    var height_cornestonne = $('.cornestonne-component').height('auto');
                    $('.cornestonne-component').height(height_cornestonne.height() - 80);
                }
            }
        });

        //Actualiza MyMobility
        $.ajax({
            type: 'post',
            url: frontend_data.ajax_url,
            data: {
                action: 'bbva_theme_cornestonne_myMobility',
                uid: $('.cornestonne-component').attr('data-uid'),
                email: $('.cornestonne-component').attr('data-email'),
                post_id: $('.cornestonne-component').attr('data-post-id')
            },
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                $('.cornestonne-component .myMobility-row').append(response);
                if ($('#miPanel').hasClass('active')) {
                    var height_cornestonne = $('.cornestonne-component').height('auto');
                    $('.cornestonne-component').height(height_cornestonne.height() - 80);
                }
            }
        });

        //Actualiza MyTeam
        $.ajax({
            type: 'post',
            url: frontend_data.ajax_url,
            data: {
                action: 'bbva_theme_cornestonne_myTeam',
                uid: $('.cornestonne-component').attr('data-uid'),
                email: $('.cornestonne-component').attr('data-email'),
                post_id: $('.cornestonne-component').attr('data-post-id')
            },
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                $('.cornestonne-component .myTeam-row').append(response);
                if ($('#miPanel').hasClass('active')) {
                    var height_cornestonne = $('.cornestonne-component').height('auto');
                    $('.cornestonne-component').height(height_cornestonne.height() - 80);
                }
            }
        });

        //Actualiza MyTalentMap
        $.ajax({
            type: 'post',
            url: frontend_data.ajax_url,
            data: {
                action: 'bbva_theme_cornestonne_myTalentMap',
                uid: $('.cornestonne-component').attr('data-uid'),
                email: $('.cornestonne-component').attr('data-email'),
                post_id: $('.cornestonne-component').attr('data-post-id')
            },
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                if(response == 'no_access'){
                  $('.cornestonne-component .development-info').addClass('d-none');
                  $('.cornestonne-component .development-info').parent().css('height','205px');

                }
                else{
                    $('.cornestonne-component .development-info .container-spinner').addClass('d-none');
                    $('.cornestonne-component .development-info').append(response);
                    if ($('#miPanel').hasClass('active')) {
                        var height_cornestonne = $('.cornestonne-component').height('auto');
                        $('.cornestonne-component').height(height_cornestonne.height() - 80);
                    }
                }
            }
        });

        //Actualizamos el cornerDate
        $.ajax({
            type: 'post',
            url: frontend_data.ajax_url,
            data: {
                action: 'bbva_theme_cornestonne_lastUpdate',
                uid: $('.cornestonne-component').attr('data-uid'),
                email: $('.cornestonne-component').attr('data-email'),
                post_id: $('.cornestonne-component').attr('data-post-id')
            },
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                $('.cornestonne-component .cornerdate').append(response);
                if ($('#miPanel').hasClass('active')) {
                    var height_cornestonne = $('.cornestonne-component').height('auto');
                    $('.cornestonne-component').height(height_cornestonne.height() - 80);
                }
            }
        });


    }


    $('.valoration-component .stars-container input').on('change', function () {

        $form_attrs = $(this).parents('.valoration-component .valoration-container');

        $.ajax({
            type: 'post',
            url: frontend_data.ajax_url,
            data: {
                action: 'bbva_theme_valoration',
                value: $(this).val(),
                post_id: $(this).parent().attr('data-id')
            },
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                //Reemplaza "full active por full" a cada label
                $form_attrs.find('.stars-container label.full.active').each(function (i) {
                    $(this).removeClass('active')
                });
                console.log(response);
            }
        });
    });


    $('section.recomendacion-test .radio-tests').on('click', function () {
        $(this).parents('.recomendacion-test').find('.btn-bbva').removeClass('disabled');
        $(this).parents('.recomendacion-test').find('.btn-bbva').attr('href', $(this).parent().siblings('input').val());

    });


    //Form tabs
    $('.form-steps .next').click(function () {
        var nextId = $(this).parents('.tab-pane').next().attr("id");
        $('[href="#' + nextId + '"]').tab('show');
        $('.list-ask-item > .active').removeClass('active');
    });


    //Quitar disabled form
    $('.form-steps .list-form-item, .form-steps .list-check-item').on('click', function () {
        $(this).parents('.tab-pane').find('a.btn.btn-bbva.next.disabled').removeClass('disabled');
    });

    $('.form-steps textarea').on('keyup', function () {
        if ($(this).val().length == 0) {
            $(this).parents('.tab-pane').find('a.btn.btn-bbva.next').addClass('disabled');
        } else {
            $(this).parents('.tab-pane').find('a.btn.btn-bbva.next.disabled').removeClass('disabled');
        }

    });


    $('.form-steps .prev').click(function () {
        var prevId = $(this).parents('.tab-pane').prev().attr("id");
        $('[href="#' + prevId + '"]').tab('show');
    });

    $(".form-steps #myWizard #send_feed_back_btn").on("click", function (e) {
        // el seleccionador tiene que poder agreagar X checked  y los combierte en un Array
        // y lo envia al ajax.php el array con los objeto seleccionados..
        var gusta_sitio1 = new Array();
        $.each($("#step3 ul.list-check li input:checked"), function () {
            gusta_sitio1.push($(this).val());
        });

        var nogusta1 = new Array();
        $.each($('#step4 .card ul.list-check li input:checked'), function () {
            nogusta1.push($(this).val());
        });
        $.ajax({
            type: 'post', //envian los datos por post
            url: frontend_data.ajax_url,
            data: {
                //nombre de referencia en add_action del ajax.php
                action: 'bbva_theme_feedback_form',
                //nombre del campo y su ubicacion dentro del html
                busqueda_web: $('#step1 .plex_grid .list-form-item input:checked').val(),
                claridad_web: $('#step2 .plex_grid .list-form-item input:checked').val(),
                gusta_sitio1: gusta_sitio1,
                gusta_sitio2: $('#step3 textarea').val(),
                nogusta1: nogusta1,
                nogusta2: $('#step4 .card  textarea').val(),
                opinion_feed: $('#step5 .card textarea').val(),
            },
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                console.log(response);
            }
        });
    });

    //End form tabs

    //FAQs
    $('.faqs-modal  .carousel').carousel({
        interval: false
    });
    //End FAQs

    //Si el modal tiene video resetear la url para detener su ejecución
    $('.modal').on('hide.bs.modal', function (e) {
        if ($(this).find('.embed-responsive iframe').length > 0) {
            var video = $(this).find('.embed-responsive iframe').attr('src');
            $(this).find('.embed-responsive iframe').attr('src', '');
            $(this).find('.embed-responsive iframe').attr('src', video);
        }
    });

    //Al hacer un top -72 el alto del componente se descoloca por lo que es necesario fixearlo desde JS
    //Si es ordenador
    if ($(window).width() > 768) {
        $('.cornestonne-component').height($('.cornestonne-component').height() - 80);
    } else {
        $('.cornestonne-component').height($('.cornestonne-component').height() - 8);
    }
    $(window).resize(function () {
        //Cogemos el tamaño que tendría cada vez que se redimensiona
        var height_cornestonne = $('.cornestonne-component').height('auto');
        $('.cornestonne-component').height(height_cornestonne.height() - 80);

    });

    //Al poder contener un tab más alto que otro necesitamos recargar el alto del componente para reajustarlo
    $('.cornestonne-component .container-last-procces .nav-pills a').on('shown.bs.tab', function (e) {
        var height_cornestonne = $('.cornestonne-component').height('auto');
        $('.cornestonne-component').height(height_cornestonne.height() - 80);
    });


    //Scroll cambiar menu
    function offSetManager() {

        var yOffset = 0;
        var currYOffSet = window.pageYOffset;

        if (yOffset < currYOffSet) {
            $('nav.header-menu').addClass('changed');
        } else if (currYOffSet == yOffset) {
            $('nav.header-menu').removeClass('changed');
        }

    }

    /**
     * bind to the document scroll detection
     */
    window.onscroll = function (e) {
        offSetManager();
    }


    //scrooltop
    $(window).scroll(function () {
        $("#totop").css("display", "none").fadeIn(500);
    });
    //hidde scroll to margin all page botton
    $(window).on('scroll', function () { // Evento de Scroll
        if (($(window).scrollTop() + $(window).height()) == $(document).height()) { // Si estamos al final de la página
            $('.myBtn1, .myBtn2').stop(true).animate({ // Escondemos el elemento
                opacity: 0
            }, 250);
        } else { // Si no
            $('.myBtn1, .myBtn2').stop(true).animate({ // Mostramos el elemento
                opacity: 1
            }, 250);
        }
    });

    // script hide breadcrumbs
    $('.form-steps a.btn.btn-bbva.next').on('click', function (e) {

        $('section.breadcrumbs.breadcrumb').hide();
        $('footer').hide();
    });


    //hacre aparecer el footer al clink de enviar
    $('.form-steps #step5 .btn.btn-bbva.next').on('click', function (e) {
        $('footer').show();
    });


    //Notifications
    $('.notifications-slider .notification-item .notification-group .close-notifications').on('click', function () {
        $('.notifications-slider').hide();
    });


    //Hace que el spyscroll horizontal se mueva tal cual baja cambia el active
    // lanzar jquery eb solo divece

    // $(window).on('activate.bs.scrollspy', function (e, obj) {
    //     var scrollArea = $('.nav-middle.sticky-top.navbar .nav-middle-list');
    //     $('#stickyspy-middle').addClass('mobile');
    //     var active = $("[href='" + obj.relatedTarget + "']").offset().left;
    //     console.log(active - scrollArea.offset().left + scrollArea.scrollLeft());
    //     scrollArea.animate({scrollLeft:  (active - scrollArea.offset().left + scrollArea.scrollLeft() ) }, 200);
    // });


    // if (screen.width < 1024) {
    //
    //     console.log("MOVIL")
    //
    //     $(window).on('activate.bs.scrollspy', function (e, obj) {
    //         var scrollArea = $('.nav-middle.sticky-top.navbar .nav-middle-list');
    //         $('#stickyspy-middle').addClass('mobile');
    //         var active = $("[href='" + obj.relatedTarget + "']").offset().left;
    //         //console.log(active - scrollArea.offset().left + scrollArea.scrollLeft());
    //         scrollArea.animate({scrollLeft: (active - scrollArea.offset().left + scrollArea.scrollLeft())}, 200);
    //     });
    //
    // } else {
    //     console.log("DESKTOP");
    // }
    //

    //Header Pages mobile
    $('.main-side-image .see-more-description').on('click', function (e) {
        $(this).parents('.main-side-short-description').addClass('d-none');
        $(this).parents('.main-side-short-description').next('.main-side-long-description').addClass('d-block');
    });


    //Calendar & Tabs Cornestonne
    if ($('.cornestonne-component #calendar').length) {
        var calendarEl = $('.cornestonne-component #calendar')[0];
        var allEvents = null;

        //El listado de eventos para el calendar.io
        $.ajax({
            type: 'post',
            url: frontend_data.ajax_url,
            data: {
                action: 'bbva_theme_cornestonne_event_list_fullCalendar',
                companyCode: $('.cornestonne-component .calendar-block').attr('companyCode'),
                lang: $('.cornestonne-component .calendar-block').attr('lang'),

            },
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                // console.log(response);
                calendar.addEventSource(response);
            }
        });


        //Para que empiece en 2020 y termine un año despues del año actual.
        var date = new Date();
        var min_year = date.getFullYear() - 1;
        if (min_year <= '2020') {
            min_year = '2020'
        }
        var max_year = Number(min_year) + 1;

        var default_event = $('.cornestonne-component .calendar-details .event.default');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: ['dayGrid'],
            height: 'auto',
            selectable: false,
            locale: $('#calendar').attr('locale'),
            showNonCurrentDates: false,
            validRange: {
                start: min_year + '-01-01',//Para que el calendario se muestre a partir de esa fecha
                end: max_year + '-12-31' // Fin del calendario
            },
            eventClick: function (info) {
                //Quitamos la clase a todos los eventos
                this.getEvents().forEach(function (event, index, array) {
                    if (event.classNames.includes('active')) {
                        var classNames = event.classNames.join();
                        classNames = classNames.replace(/active/g, '');
                        classNames = classNames.replace(/,/g, ' ');//eliminamos todas las "," del join
                        event.setProp('classNames', classNames);
                    }
                });

                //Cambia el color del evento al que se hace click
                info.event.setProp('classNames', info.event.classNames.join().replace(/,/g, ' ') + ' active');
                //Quitamos el active de los eventos del lateral
                $('.events-container').find('.event.active').removeClass('active');
                //Hacemos que se seleccione el evento relacionado.
                $('#event-calendar-' + info.event.id).addClass('active');

            },
            eventRender: function (eventCalendar) {
                //Para agregar un attr a cada elemento y poder relacionarlos
                eventCalendar.el.setAttribute('fullCalendar_id_relation', eventCalendar.event.id);
            },
            datesRender: function (info) {

                //Cambiamos el texto del formato movil
                var month = $('.cornestonne-component .calendar-block .fc-header-toolbar .fc-center').text();
                $('.cornestonne-component .calendar-block .fc-mobile-title .date h2').text(month);

                //Se ejecuta cuando se renderiza el mes entero
                //Elimino los eventos que hayan seleccionados en el lateral
                $('.events-container').find('.event.active').removeClass('active');
                var getEventActive = '';
                info.view.calendar.getEvents().forEach(function (event, index, array) {
                    if (event.classNames.indexOf('active') > -1) {
                        getEventActive = event.id;
                    }
                    // var classNames = event.classNames.join();
                    // classNames = classNames.replace(/active/g, '');
                    // classNames = classNames.replace(/,/g, ' ');
                    // event.setProp('classNames', classNames);
                });

                var month = info.view.calendar.getDate().getMonth(); // 0 - 11
                $(info.el).parents('#calendar').attr('fullCalendar_actual_month', month);
                var year = info.view.calendar.getDate().getFullYear();
                // console.log(month + '-' + year);
                console.log(default_event);
                $('.cornestonne-component .events-container').empty();


                startDate = new Date(year, month, 1);
                endDate = new Date(year, month + 1, 0);

                var events_show = allEvents.filter(function (a) {
                    var start_event = new Date(a.start);
                    var end_event = new Date(a.end);
                    if (
                        (startDate >= start_event && startDate <= end_event) ||
                        (start_event >= startDate && start_event <= endDate)
                    ) {
                        return a.code;
                    }
                });
                //Extraemos el value del code en un array y con el join lo transformamos en un string
                // console.log(events_show.map(a => a.code).join(''));

                if (getEventActive != '') {
                    for (var i = 0; i < events_show.length; i++) {

                        if (events_show[i]['code'].search('event-calendar-' + getEventActive) > -1) {
                            events_show[i]['code'] = events_show[i]['code'].replace('class="event"', 'class="event active"')
                        } else {
                            events_show[i]['code'] = events_show[i]['code'].replace('class="event active"', 'class="event"')
                        }

                    }
                }
                if (events_show.length > 0) {
                    $('.cornestonne-component .events-container').append(events_show.map(a => a.code).join(''));
                }else{
                    $('.cornestonne-component .events-container').append(default_event);
                    $('.cornestonne-component .events-container .event.default').removeClass('d-none');
                }
                if ($('#calendario').hasClass('active')) {
                    var height_cornestonne = $('.cornestonne-component').height('auto');
                    $('.cornestonne-component').height(height_cornestonne.height() - 40);
                }
            }
        });

        //Eventos con descripciones
        $.ajax({
            type: 'post',
            url: frontend_data.ajax_url,
            data: {
                action: 'bbva_theme_cornestonne_calendarEvents',
                post_id: $('.cornestonne-component').attr('data-post-id'),
                lang: $('.cornestonne-component .calendar-block').attr('lang'),
            },
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                $('.cornestonne-component #calendario .container-spinner ').addClass('d-none');
                allEvents = response;
                calendar.render();
                if ($('#calendario').hasClass('active')) {
                    var height_cornestonne = $('.cornestonne-component').height('auto');
                    $('.cornestonne-component').height(height_cornestonne.height() - 40);
                }
            }
        });

        //Pulsar adelante mobile
        $('.cornestonne-component .calendar-block .fc-mobile-title .fc-next-button').on('click', function (e) {
            calendar.next();

            $(this).prop('disabled', false);
            if ($(this).parents('.fc-mobile-title').prev().find('.fc-header-toolbar .fc-next-button').is(':disabled')) {
                $(this).prop('disabled', true);
            }

            $(this).parents('.fc-mobile-title').find('.fc-prev-button').prop('disabled', false);
            if ($(this).parents('.fc-mobile-title').prev().find('.fc-header-toolbar .fc-prev-button').is(':disabled')) {
                $(this).parents('.fc-mobile-title').find('.fc-prev-button').prop('disabled', true);
            }

        });

        $('.cornestonne-component .calendar-block .fc-mobile-title .fc-prev-button').on('click', function (e) {
            calendar.prev();
            $(this).prop('disabled', false);
            if ($(this).parents('.fc-mobile-title').prev().find('.fc-header-toolbar .fc-prev-button').is(':disabled')) {
                $(this).prop('disabled', true);
            }

            $(this).parents('.fc-mobile-title').find('.fc-next-button').prop('disabled', false);
            if ($(this).parents('.fc-mobile-title').prev().find('.fc-header-toolbar .fc-next-button').is(':disabled')) {
                $(this).parents('.fc-mobile-title').find('.fc-next-button').prop('disabled', true);
            }

        });

        $('.cornestonne-component a[data-toggle="tab"][ href="#calendario"]').on('shown.bs.tab', function () {
            if ($(this).hasClass('notification')) {
                //Para quitar el simbolo de notificación del mes en el backend
                $.ajax({
                    type: 'post',
                    url: frontend_data.ajax_url,
                    data: {
                        action: 'bbva_theme_notification_alert',
                    },
                    error: function (response) {
                        console.log(response);
                    },
                    success: function (response) {
                        console.log(response);
                    }
                });
            }
            var height_cornestonne = $('.cornestonne-component').height('auto');
            $('.cornestonne-component').height(height_cornestonne.height() - 40);

        });

        $('.cornestonne-component a[data-toggle="tab"][ href="#miPanel"]').on('shown.bs.tab', function () {
            var height_cornestonne = $('.cornestonne-component').height('auto');
            $('.cornestonne-component').height(height_cornestonne.height() - 80);
        });


        //Scroll Calendar blur gradient
        $(".cornestonne-component .calendar-block .events-container").scroll(function () {
            if (Math.ceil($(this).scrollTop()) + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                $(this).parent().removeClass("overflow-scroll-gradient-bottom");
            } else {
                $(this).parent().addClass("overflow-scroll-gradient-bottom");
            }
        });


        $(document).on('click', '.cornestonne-component .calendar-block .events-container .event', function (e) {
            var id_event = $(this).attr('fullCalendar-relation');
            //Quitamos los active de los eventos
            calendar.getEvents().forEach(function (event, index, array) {
                var classNames = event.classNames.join();
                classNames = classNames.replace(/active/g, '');
                classNames = classNames.replace(/,/g, ' ');
                event.setProp('classNames', classNames);
            });


            //Cambia el color del evento al que se hace click
            var classNames = calendar.getEventById(id_event).classNames.join(' ');
            calendar.getEventById(id_event).setProp('classNames', classNames + ' active');

            $('.events-container').find('.event.active').removeClass('active');
            $(this).addClass('active');
        });


        //El desplegable de los eventos
        $(document).on('click', '.cornestonne-component .calendar-block .events-container .event .truncate', function (e) {
            $(this).toggleClass('truncated');
        });

        //Cuando se cambia de pestaña en myMobility
        $(document).on('shown.bs.tab', '.cornestonne-component .last-procces-mobility a.nav-link', function () {
            var height_cornestonne = $('.cornestonne-component').height('auto');
            $('.cornestonne-component').height(height_cornestonne.height() - 80);

        });

        //Para cargar los elementos Asyncronos
        $(document).on('click', '.cornestonne-component span[data-action]', function (e) {
            var component = $(this).parents('.no-data').parent();
            $(this).parents('.no-data').addClass('d-none');
            component.find('.container-spinner').removeClass('d-none');
            $.ajax({
                type: 'post',
                url: frontend_data.ajax_url,
                data: {
                    action: 'bbva_theme_cornestonne_' + $(this).attr('data-action'),
                    uid: $('.cornestonne-component').attr('data-uid'),
                    email: $('.cornestonne-component').attr('data-email'),
                    post_id: $('.cornestonne-component').attr('data-post-id')
                },
                error: function (response) {
                    console.log(response);
                },
                success: function (response) {
                    component.find('.container-spinner').addClass('d-none');
                    component.append(response);
                }
            });
        });
    }

    // cargar popup modal bootstrap si el usuario hace cambio de idioma -- 09.01.2020 ----

    var URLsearch = window.location.search;
    if (URLsearch.includes('forceredirect=true')) {
        $("#mostrarmodal").modal("show");
    }


});

