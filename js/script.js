"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");  
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", "");
            const b = prompt("На сколько оцените его?", "");    
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b; // qqq: "222" - в массив [a] записывается  значение b
                console.log('done');
            } else {
                console.log ('error');
                i--;
            }    
        }
    }, 
    detectPersonalLevel: function() {
        if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Киноман');
        } else {
            console.log('error');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        //for (let i = 1; i <= 3; i++) {    
            //personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
            //if (personalMovieDB.genres[i-1] != null && personalMovieDB.genres[i-1] != "") {
            //    console.log('ok');
            //} else {
            //    i--;
            //}
        //}   
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Введите ваши любимые жанры через запятую`);
            const allGenres = genre.split(", ");
            if (genre == "" || genre == null) {
                console.log('Некорректно');
                i--;
            } else {
                personalMovieDB.genres = allGenres;
            }
        }
          
        personalMovieDB.genres.forEach(function(item, i){
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
        console.log(personalMovieDB);   
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};


