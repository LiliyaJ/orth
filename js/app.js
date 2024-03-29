/*====== Slideshow ======*/

var simpleSlides = function () {
    var i;
    var slides = document.querySelectorAll(".slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].setAttribute("style","display:none");
    }
    count++;
    if (count > slides.length) { count = 1; }
        slides[count-1].setAttribute("style","display:block");
        setTimeout(simpleSlides, 3800);
}

let count = 0;
simpleSlides();

/*===== Whyus List ======*/

var model_benefit = {

    benefits: [
        {
            imgSrc: 'img/benefit_01.jpg',
            h_four: 'Немецкая медицина',
            text: 'одна из лучших в мире.'
        },

        {
            imgSrc: 'img/benefit_02.jpg',
            h_four: 'Экономия средств и времени,',
            text: 'благодаря комплексному подходу к обследованию и лечению.'
        },

        {
            imgSrc: 'img/benefit_03.jpg',
            h_four: 'Гарантированный результат',
            text: 'Высококлассные специалисты составят для вас грамотную программу лечения.'
        },

    ]
}

fillBenefitsHTML = (benefits = model_benefit.benefits)=>{
    const ul = document.getElementById('whyus');
    benefits.forEach(benefit => {
        ul.append(createBenefitsHTML(benefit));
    });
}

createBenefitsHTML = (benefit) => {
    const li = document.createElement('li');
    
    const h_four = document.createElement('h4');
    h_four.innerHTML = benefit.h_four;
  
    const image = document.createElement('img');
    image.className = 'benefit-img';
    image.src = benefit.imgSrc;
    image.alt = h_four;
    li.append(image);

    li.append(h_four);

    const text = document.createElement('p');
    text.innerHTML = benefit.text;
    li.append(text);
  
    return li
  }

fillBenefitsHTML();

/*===== Whyus-twocol List ======*/

var model_benefit_twocol = {

    benefits: [

        {
            imgSrc: 'img/benefit_04.jpg',
            h_four: 'Быстрое восстановление',
            text: 'Вы быстро вернетесь к привычной жизни, благодаря новейшему оборудованию и современным способам хирургии'
        },

        {
            imgSrc: 'img/benefit_05.jpg',
            h_four: 'Всё организовано за вас',
            text: 'Мы берем на себя все заботы по огранизации вашего приезда и пребывания'
        }

    ]
}

fillBenefitsTwoColHTML = (benefits = model_benefit_twocol.benefits)=>{
    const ul = document.getElementById('whyus-twocol');
    benefits.forEach(benefit => {
        ul.append(createBenefitsHTML(benefit));
    });
}

fillBenefitsTwoColHTML();

/*===== Doctors List ======*/

const model_doctors = {

    doctors: [
        {
            name: 'Профессор доктор Ф. Шёттле',
            imgSrc: 'img/schoettle.png',
            area: 'Лечение и хирургия коленных суставов',
            short_description: 'Один из крупнейших мировых экспертов в области лечения колена. В его честь названа точка в колене - "точка Шёттле". Он является консультантом Ватикана по вопросам применения стволовых клеток в медицине.',
            description: 'Один из крупнейших мировых экспертов в области лечения колена. Проводит более 500 операций ежегодно. Его исследовательские труды преподаются в университете на медицинском факультете. Его инновационные методики малоинвазивной хирургии и эргономичные коленные протезы используются по всему миру. В его честь названа точка в колене - "точка Шёттле". Он является консультантом Ватикана по вопросам лечения стволовыми клетками. Среди пациентов мировые спортивные звезды. Кроме того, он очень приятный и отзывчивый человек.',
            seniority: 'Стаж: 21 год',
            rating: 'img/star1_1.png',
            price: 'Цена от 470€',
            jameda: 'img/jm_schoettle.jpg'
        },

        {
            name: 'Доктор М. Марианович',
            imgSrc: 'img/marian.png',
            area: 'Лечение и хирургия позвоночника',
            short_description: 'Один из ведущих специалистов по лечению заболеваний позвоночника в Европе. Известен на весь мир малоинвазивными методами лечения. Большой противник излишних хирургических вмешательств.',
            description: 'Один из ведущих специалистов по лечению заболеваний позвоночника в Европе. Известен на весь мир малоинвазивными методами лечения. Большой противник излишних хирургических вмешательств. Проводит большую исследовательскую работу по болям в позвоночнике. Последователь Intervantional Pain практики. Председатель Мирового Института Боли (World Institute of Pain). Очень добрый человек.',
            seniority: 'Стаж: 28 лет',
            rating: 'img/star1_2.png',
            price: 'Цена от 590€',
            jameda: 'img/jm_marian.jpg'
        },

        {
            name: 'Профессор доктор Х. Гольвитцер',
            imgSrc: 'img/golwitzer.png',
            area: 'Лечение и хирургия тазобедренного сустава',
            short_description: 'Блестящий хирург, специализирующийся на хирургии и протезировании тазобедренного сустава. С 2019 года вице-президент Немецкого Общества Тазобедренного Сустава.',
            description: 'Блестящий хирург, специализирующийся на хирургии и протезировании тазобедренного сустава. С 2019 года вице-президент Немецкого Общества Тазобедренного Сустава (DHG e.V.). Знает про тазобедренный сустав все и может рассказать об этом доступным языком. Ежегодно проводит более 700 операций и протезирований. Также последователь малоинвазивных методов и противник ненужных хирургических вмешательств. Исследует новые малоинвазивные методы операции тазобедренного сустава. Очень доброжелательный и открытый человек.',
            seniority: 'Стаж: 19 лет',
            rating: 'img/star1_0.png',
            price: 'Цена от 530€',
            jameda: 'img/jm_golwitzer.jpg'
        },

        {
            name: 'Доктор Э. Рембек',
            imgSrc: 'img/rembek.png',
            area: 'Спортивная травмотология',
            short_description: 'Выдающийся спортивный хирург-травматолог. Одновременно является врачом нескольких спортивных клубов Мюнхена: TSV 1860 München, Tennis. Лечил министра иностранных дел РФ С.Лаврова.',
            description: 'Выдающийся спортивный хирург-травматолог. Одновременно является врачом нескольких спортивных клубов Мюнхена: TSV 1860 München, Tennis Davis Cup Teams Hedos München, EHC Red Bull München. О спортивных травмах знает все. Занимается спортивной медициной с 1987 года. Также консультирует по вопросам быстрой и эффективной реабилитации. Между прочим, лечил министра иностранных дел России господина Лаврова. Очень компетентный специалист и человек с большим сердцем.',
            seniority: 'Стаж: 29 лет',
            rating: 'img/star1_2.png',
            price: 'Цена от 530€',
            jameda: 'img/jm_rembeck.jpg'
        },

        {
            name: 'Доктор В. Вальтер',
            imgSrc: 'img/walter.png',
            area: 'Лечение и хирургия позвоночника',
            short_description: 'Если у вас боли в спине неизвестного происхождения, то вам непременно нужно познакомиться с доктором Вальтером. Блестящий специалист своего дела.',
            description: 'Если у вас боли в спине неизвестного происхождения, то вам непременно нужно познакомиться с доктором Вальтером. С 2001 года он серьезно занимается исследованием на тему терапии болей и малоинвазивной декомпрессии межпозвоночных дисков. Он помог уже более 1000 пациентов избавиться от болей в позвоночнике при помощи собственных методик и микролазерной терапии. Член Общества регенеративной медицины, член Мирового Института Боли. Прекрасный врач, который вас слушает и слышит.',
            seniority: 'Стаж: 18 лет',
            rating: 'img/star1_1.png',
            price: 'Цена от 560€',
            jameda: 'img/jm_walter.jpg'
        },

        {
            name: 'Доктор М. Шеттле',
            imgSrc: 'img/schettle.png',
            area: 'Биорегенеративная терапия, лечение позвоночника',
            short_description: 'Вы думаете все хирурги работают скальпелем. А вот и нет! Доктор Шеттле большой эксперт по биорегенеративной терапии. Он активно использует терапию стволовыми клетками.',
            description: 'Вы думаете все хирурги работают скальпелем. А вот и нет! Доктор Шеттле большой эксперт по биорегенеративной терапии. Он активно использует терапию стволовыми клетками при болях в суставах и артрозе. Конечно, при необходимости, он проводит хирургические операции, но его приоритет - вылечить без скальпеля. Очень обаятельный и любезный человек.',
            seniority: 'Стаж: 12 лет',
            rating: 'img/star1_1.png',
            price: 'Цена от 360€',
            jameda: 'img/jm_schettle.jpg'
        },

        {
            name: 'Профессор доктор Х. Майр',
            imgSrc: 'img/mayr.png',
            area: 'Лечение и хирургия плечевых суставов',
            short_description: 'Мастер в области ортопедической хирургии. Профессор проводит около 800 операций ежегодно. Неоднократно попадал в список лучших врачей Германии по версии журнала Focus.',
            description: 'Мастер в области ортопедической хирургии. Профессор проводит около 800 операций ежегодно. Неоднократно попадал в список лучших врачей Германии по версии журнала Focus. С 1991 года врач немецкой национальной горнолыжной сборной. Знает толк в плечах и в коленях. Огромнейший опыт работы со спортивными травмами. Выглядит всегда очень элегантно.',
            seniority: 'Стаж: 32 года',
            rating: 'img/star1_4.png',
            price: 'Цена от 300€',
            jameda: 'img/jm_mayr.jpg'
        },

        {
            name: 'Профессор доктор М. Таубер',
            imgSrc: 'img/tauber.png',
            area: 'Лечение и хирургия плечевых суставов',
            short_description: 'Занимается исключительно плечевыми суставами и знает об этом все. Обеспечивает полный спектр услуг по современному лечению и хирургии плечевого сустава.',
            description: 'Занимается исключительно плечевыми суставами и знает об этом все. Обеспечивает полный спектр услуг по современному лечению и хирургии плечевого сустава. Имплантация и замена плечевого сустава, артроскопическия, стабилизация плеча после вывиха, регенерация хряща. Член немецкой ассоциации хирургии плеча и локтя. Врач и человек экстра-класса.',
            seniority: 'Стаж: 17 лет',
            rating: 'img/star1_0.png',
            price: 'Цена от 360€',
            jameda: 'img/jm_tauber.jpg'
        },

        {
            name: 'Доктор Б. Лукас',
            imgSrc: 'img/lukas.png',
            area: 'Лечение и хирургия рук',
            short_description: 'Филигранный мастер в хирургии кистей и рук. Возращает не только здоровьем, но и красоту вашим рукам. Совмещает травматическую и пластическую хиурургии кистей.',
            description: 'Филигранный мастер в хирургии кистей и рук. Возращает не только здоровьем вашим кистям, но и красоту. Совмещает травматическую и пластическую хиурургии кистей. С 1989 года занимается лечением травм рук и восстановлением кистей рук. Его любимые слова: "в тишине сила", характеризуют его личность. Он спокойный и большой. Очень любит людей и относится к пациентам, как к своим близким.',
            seniority: 'Стаж: 29 лет',
            rating: 'img/star1_4.png',
            price: 'Цена от 320€',
            jameda: 'img/jm_lukas.jpg'
        } ,

        {
            name: 'Приват-доцент доктор А. Лених',
            imgSrc: 'img/lenich.png',
            area: 'Лечение и хирургия рук и локтевых суставов',
            short_description: 'Доктор Лених выглядит моложе, чем есть на самом деле, и любит иногда пошутить на эту тему с пациентами, притворившись практикантом. Его послужной список огромен.',
            description: 'Доктор Лених выглядит моложе, чем есть на самом деле, и любит иногда пошутить на эту тему с пациентами, притворившись практикантом. Его послужной список очень большой. Он знает толк в быстром и эффективном восстановлении после операции. Если вам нужна операция в пятницу, а выход на работу в понедельник, вам к доктору Лениху. Но он не только выдающийся хирург-травматолог, но и очень веселый и жизнерадостный человек.',
            seniority: 'Стаж: 19 лет',
            rating: 'img/star1_1.png',
            price: 'Цена от 360€',
            jameda: 'img/jm_lenich.jpg'
        },

        {
            name: 'Доктор К. Кинаст',
            imgSrc: 'img/kinast.png',
            area: 'Лечение и хирургия ступней, голеностопов, вальгусной деформации пальца стопы',
            short_description: 'Хотите бегать, прыгать, заниматься спортом без болей в голеностопе? Вам к доктору Кинаст. Поклонник малоинвазивных методик.',
            description: 'Хотите бегать, прыгать, заниматься спортом без болей в голеностопе? Вам к доктору Кинаст. Он расскажет вам все как есть, отговорит от операции, если она не нужна и предложит другой метод лечения, или проведет хирургическую операцию. Поклонник малоинвазивных методик. Его работа не заканчивается проведением операции. Он обязательно убедится, что вы без болей и жалоб можете продолжать свою ежедневную жизнь. К пациентам относится очень внимательно. Более 35 лет возвращает людям возможность безболезненно бегать, прыгать, заниматься спортом, играть в футбол.',
            seniority: 'Стаж: 35 лет',
            rating: 'img/star1_4.png',
            price: 'Цена от 380€',
            jameda: 'img/jm_kinast.jpg'
        },

        {
            name: 'Профессор доктор П. Хебермейр',
            imgSrc: 'img/hebermeyer.png',
            area: 'Лечение и хирургия коленей, локтевых и плечевых суставов',
            short_description: 'С 1982 года специализируется на хирургии плечевых суставов. В 1984 основывает первый в Германии центр по хирургии плеча. В настоящий момент специалист мирового уровня в хирургии плечевого и локтевого сустава.',
            description: 'С 1982 года специализируется на хирургии плечевых суставов. В 1984 основывает первый в Германии центр по хирургии плеча. В настоящий момент специалист мирового уровня в хирургии плечевого и локтевого сустава. Занимается протезированием, артроскопией, лечение артроза. Важнейшим пунктом считает точную диагностику, обдуманную технику операции и надежную реабилитацию. Очень серьезно относится к работе.',
            seniority: 'Стаж: 36 лет',
            rating: 'img/star1_2.png',
            price: 'Цена от 380€',
            jameda: 'img/jm_hebermeyer.jpg'
        }
    ]
};

fillDoctorsHTML = (doctors = model_doctors.doctors)=>{
    const ul = document.getElementById('doctors');
    doctors.forEach(doctor => {
        ul.append(createDoctorHTML(doctor));
    });
}

getDoctorName = (doctor) => {
    let doc_name_arr = doctor.name;
    for(i=doc_name_arr.length; i>=0; i--){
        let letter = doc_name_arr[i];
        if (letter === ' '){
            const doc_name = doc_name_arr.slice(i+1, doc_name_arr.length);
            return doc_name;
        }
    }
}

createDoctorHTML = (doctor) => {
    const li = document.createElement('li');
    li.className = 'doctor-block ' + doctor.name;
  
    const image = document.createElement('img');
    image.className = 'doctor-img';
    image.src = doctor.imgSrc;
    image.alt = "Фото доктора " + doctor.name;
    li.append(image);

    const name = document.createElement('h4');
    name.innerHTML = doctor.name;
    li.append(name);

    const area = document.createElement('h5');
    area.innerHTML = doctor.area;
    li.append(area);

    const text = document.createElement('p');
    text.innerHTML = doctor.short_description;
    li.append(text);

    const read_more = document.createElement('a');
    read_more.href = "javascript:void(0)"
    read_more.innerHTML = "Подробнее..."
    read_more.className = 'read-more'
    li.append(read_more);

    const seniority = document.createElement('p');
    seniority.innerHTML = doctor.seniority;
    seniority.className = 'doctor-seniority';
    li.append(seniority);

    const div = document.createElement('div');
    div.className = 'rating-box'

    const rating = document.createElement('span')
    rating.innerHTML = 'Рейтинг: '
    div.append(rating);

    const star = document.createElement('img');
    star.className = 'doctor-star';
    star.src = doctor.rating;
    div.append(star);

    li.append(div);

    const price = document.createElement('p');
    price.innerHTML = doctor.price;
    price.className = 'doctor-price';
    li.append(price);
  /*
    const btn = document.createElement('a')
    btn.href = "javascript:void(0)"
    btn.className = 'btn doc-btn'
    btn.innerHTML = 'Расчитать стоимость лечения у доктора ' + getDoctorName(doctor);
    li.append(btn);
*/
    return li
  }

fillDoctorsHTML();

/*===== Doctor PopUp ======*/

let popup = document.querySelector('.js--doctors-popup')
 
fillDoctorsPopupHTML = ()=>{
    doctor => {
        popup.append(createDoctorPopupHTML(doctor));
    };
}

createDoctorPopupHTML = (doctor) => {
    popup.style.display = 'block'

    const div = document.createElement('div')
    div.className = 'to-remove'
    clearDoctorPopupHTML();

    const jameda = document.createElement('img')
    jameda.className = 'jm-img'
    jameda.src = doctor.jameda;
    div.append(jameda)

    const text_div = document.createElement('div')
    const name = document.createElement('h4');
    name.innerHTML = doctor.name;
    text_div.append(name);

    const area = document.createElement('h5');
    area.innerHTML = doctor.area;
    text_div.append(area);
   
    const full_text = document.createElement('p');
    full_text.innerHTML = doctor.description;
    text_div.append(full_text);

    div.append(text_div);
    popup.append(div)

    return popup
}

clearDoctorPopupHTML = () => {
   const elementsToRemove = document.querySelectorAll('.to-remove');
    elementsToRemove.forEach(element => { 
        element.remove()})
}


document.addEventListener('click', function(){
    if (event.target.closest('.doctor-block')){
        if(event.target.closest('.Шёттле')){
            createDoctorPopupHTML(model_doctors.doctors[0]);
        }else if(event.target.closest('.Марианович'))  {
            createDoctorPopupHTML(model_doctors.doctors[1]);
        }else if(event.target.closest('.Гольвитцер'))  {
            createDoctorPopupHTML(model_doctors.doctors[2]);
        }else if(event.target.closest('.Рембек'))  {
            createDoctorPopupHTML(model_doctors.doctors[3]);
        }else if(event.target.closest('.Вальтер'))  {
            createDoctorPopupHTML(model_doctors.doctors[4]);
        }else if(event.target.closest('.Шеттле'))  {
            createDoctorPopupHTML(model_doctors.doctors[5]);
        }else if(event.target.closest('.Майр'))  {
            createDoctorPopupHTML(model_doctors.doctors[6]);
        }else if(event.target.closest('.Таубер'))  {
            createDoctorPopupHTML(model_doctors.doctors[7]);
        }else if(event.target.closest('.Лукас'))  {
            createDoctorPopupHTML(model_doctors.doctors[8]);
        }else if(event.target.closest('.Лених'))  {
            createDoctorPopupHTML(model_doctors.doctors[9]);
        }else if(event.target.closest('.Кинаст'))  {
            createDoctorPopupHTML(model_doctors.doctors[10]);
        }else if(event.target.closest('.Хебермейр'))  {
            createDoctorPopupHTML(model_doctors.doctors[11]);
        }
    }
})

document.addEventListener('click', function(){
    if (event.target.matches('.close-doc-popup')){
        popup.style.display = 'none';
    }
})

fillDoctorsPopupHTML();


/*===== Feedback ======*/

var model_feedbacks = {

    feedbacks: [
        {
            quote: 'Здравствуйте! Меня зовут Терри Чор. Раньше у меня были очень серьезные проблемы с коленями. Они опухали до такой степени, что я не мог ни ходить, ни тем более кататься на лыжах, рыбачить и заниматься другими привычными для меня вещами. Друг посоветовал мне обратиться к доктору Филипу Шёттле, который занимается лечением коленей стволовыми клетками. Я отправился в Мюнхен и всего за один день прошел лечение. После операции и курса поддерживающих упражнений мои колени почти полностью восстановились. Операция была очень простой и совершенно безболезненной, и проведена очень профессионально. Спасибо!',
            pic: 'img/bewertung03.png',
            name:'@Терри Чор, 51 год, Нью-Йорк.',
            diagnose:'Диагноз: Артроз обоих коленей. Не мог ходить.'
        },

        {
            quote: 'Девочки, мы с мужем хотим выразить вам нашу безмерную благодарность! Все так хорошо организовано для русских пациентов. Передавайте наш теплый привет Олене и Диане, они очень здорово переводили и поддерживали нас! С теплым приветом из холодной Москвы :)',
            pic: 'img/bewertung04.png',
            name:'@Ирина с мужем Игорем, Москва.',
            diagnose:'Диагноз: межпозвоночная грыжа.'
        },

        {
            quote: 'Меня забеспокоила старая спортивная травма плеча. Времени на длительное лечение и восстановление не было. Когда узнал, что смогу вернуться домой через 2 дня после операции, а через 2 недели снова тренироваться, не поверил. Лечением очень доволен: травма не беспокоит и из тренировок не выпал. Спасибо! Все прошло быстро и легко.',
            pic: 'img/bewertung01.png',
            name:'@Виталий Семенов, Санкт-Петербург.',
            diagnose:'Диагноз: травма вращательной манжеты плеча.'
        },
    ] 
};

fillFeedbackHTML = (feedbacks = model_feedbacks.feedbacks)=>{
    const ul = document.getElementById('feedbacks');
    feedbacks.forEach(feedback => {
        ul.append(createFeedbackHTML(feedback));
    });
}

createFeedbackHTML = (feedback) =>{
    const li = document.createElement('li');

    const name = document.createElement('p');

    const pic = document.createElement('img');
    pic.className = 'feedback-img';
    pic.alt = 'Фото пациента ' + name;
    pic.src = feedback.pic;
    li.append(pic);


    name.className = 'feedback-name'
    name.innerHTML = feedback.name;
    li.append(name);

    const diagnose = document.createElement('p');
    diagnose.className = 'feedback-diagnose';
    diagnose.innerHTML = feedback.diagnose;
    li.append(diagnose);

    const quote = document.createElement('q');
    quote.className = 'feedback-quote';
    quote.innerHTML = feedback.quote;
    li.append(quote); 

    return li
}

fillFeedbackHTML();

/*====== Bookmark ======*/

function getBrowserInfo() {
    var t,v = undefined;
    if (window.chrome) t = 'Chrome';
    else if (window.opera) t = 'Opera';
    else if (document.all) {
        t = 'IE';
        var nv = navigator.appVersion;
        var s = nv.indexOf('MSIE')+5;
        v = nv.substring(s,s+1);
    }
    else if (navigator.appName) t = 'Netscape';
    return {type:t,version:v};
}
function bookmark(a){
    var url = window.document.location;
    var title = window.document.title;
    var b = getBrowserInfo();
    if (b.type == 'IE' && 8 >= b.version && b.version >= 4) window.external.AddFavorite(url,title);
    else if (b.type == 'Opera') {
        a.href = url;
        a.rel = "sidebar";
        a.title = url+','+title;
        return true;
    }
    else if (b.type == "Netscape") window.sidebar.addPanel(title,url,"");
    else alert("Нажмите CTRL-D, чтобы добавить страницу в закладки.");
    return false;
}