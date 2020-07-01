if (window.SimpleSlide) {
    new SimpleSlide({
        slide: "quote-cliente", // nome do atributo data-slide="principal"
        nav: false, // se deve ou não mostrar a navegação
        auto: true, // se o slide deve passar automaticamente
        time: 5000, // tempo de transição dos slides
        pauseOnHover: true // pausa a transição automática
    });

    new SimpleSlide({
        slide: "portifolio", // nome do atributo data-slide="principal"
        nav: true, // se deve ou não mostrar a navegação
        auto: true, // se o slide deve passar automaticamente
        time: 5000, // tempo de transição dos slides
        pauseOnHover: true // pausa a transição automática
    });

}

if (window.SimpleAnime) {
    new SimpleAnime ();
}