// ============================================================
//  ВКУСНОДОМ — общая логика всех страниц
// ============================================================

// ===== ДАННЫЕ РЕЦЕПТОВ =====
const recipesData = {
    "recipes": [
        {"id":1,"title":"Борщ классический","description":"Традиционный борщ с мясом, свёклой и ароматными специями","image":"https://lgz.ru/upload/articles/312/bok7aoc32pdxc5duznmqdh6feoly39cy.jpg?utm_source=copy_link&utm_medium=social&utm_campaign=share","time":120,"servings":6,"difficulty":"средняя","category":"супы","ingredients":[{"name":"говядина","amount":"500 г"},{"name":"свёкла","amount":"2 шт"},{"name":"капуста","amount":"300 г"},{"name":"картофель","amount":"3 шт"},{"name":"морковь","amount":"1 шт"},{"name":"лук","amount":"1 шт"},{"name":"томатная паста","amount":"2 ст.л."},{"name":"чеснок","amount":"3 зубчика"},{"name":"сметана","amount":"для подачи"}],"steps":["Сварите мясной бульон из говядины 1.5 часа, снимая пену.","Нарежьте свёклу соломкой и потушите с томатной пастой 15 минут.","Добавьте нарезанный картофель в бульон, варите 10 минут.","Нашинкуйте капусту и добавьте в кастрюлю.","Обжарьте лук и морковь на растительном масле до золотистого цвета.","Добавьте зажарку и тушёную свёклу в борщ, варите 15 минут.","В конце добавьте чеснок, соль, перец и лавровый лист.","Дайте борщу настояться 30 минут под крышкой.","Подавайте со сметаной и свежей зеленью."]},
        {"id":2,"title":"Паста Карбонара","description":"Итальянская паста с хрустящим беконом и нежным яичным соусом","image":"https://eda.rambler.ru/images/RecipeOpenGraph/1200x630/spagetti-karbonara-s-bekonom_15630_ogimage.jpg?utm_source=copy_link&utm_medium=social&utm_campaign=share","time":30,"servings":2,"difficulty":"лёгкая","category":"основные блюда","ingredients":[{"name":"спагетти","amount":"200 г"},{"name":"бекон","amount":"150 г"},{"name":"яйца","amount":"3 шт"},{"name":"пармезан","amount":"80 г"},{"name":"чеснок","amount":"2 зубчика"},{"name":"оливковое масло","amount":"2 ст.л."},{"name":"чёрный перец","amount":"по вкусу"}],"steps":["Сварите спагетти в подсоленной воде до состояния аль денте.","Нарежьте бекон кубиками и обжарьте до хрустящей корочки.","Смешайте яйца, тёртый пармезан и свежемолотый перец.","Добавьте горячие спагетти к бекону и снимите с огня.","Быстро влейте яичную смесь, интенсивно перемешивая.","Подавайте сразу, посыпав дополнительным пармезаном."]},
        {"id":3,"title":"Салат Цезарь","description":"Классический салат с сочной курицей, хрустящими крутонами и соусом","image":"https://static.tildacdn.com/tild3038-3266-4663-a361-346561316361/image-3.png","time":25,"servings":2,"difficulty":"лёгкая","category":"салаты","ingredients":[{"name":"куриное филе","amount":"300 г"},{"name":"салат ромэн","amount":"1 кочан"},{"name":"хлеб","amount":"2 ломтика"},{"name":"пармезан","amount":"50 г"},{"name":"яйцо","amount":"1 шт"},{"name":"оливковое масло","amount":"4 ст.л."},{"name":"чеснок","amount":"1 зубчик"},{"name":"лимонный сок","amount":"1 ст.л."}],"steps":["Обжарьте куриное филе на гриле до готовности, нарежьте ломтиками.","Нарежьте хлеб кубиками и подсушите в духовке с оливковым маслом.","Приготовьте соус: взбейте яйцо с маслом, чесноком и лимонным соком.","Порвите салат руками в большую миску.","Добавьте курицу, крутоны и полейте соусом.","Посыпьте тёртым пармезаном и сразу подавайте."]},
        {"id":4,"title":"Тирамису","description":"Нежнейший итальянский десерт с маскарпоне и ароматом кофе","image":"https://menunedeli.ru/wp-content/uploads/2025/01/Tort-Tiramisu-21-1000x644.jpg?utm_source=copy_link&utm_medium=social&utm_campaign=share","time":240,"servings":8,"difficulty":"средняя","category":"десерты","ingredients":[{"name":"маскарпоне","amount":"500 г"},{"name":"яйца","amount":"4 шт"},{"name":"сахар","amount":"100 г"},{"name":"печенье савоярди","amount":"300 г"},{"name":"кофе эспрессо","amount":"300 мл"},{"name":"какао-порошок","amount":"2 ст.л."},{"name":"амаретто","amount":"2 ст.л. (по желанию)"}],"steps":["Сварите крепкий кофе и полностью остудите, добавьте амаретто.","Взбейте желтки с сахаром до пышной белой массы.","Добавьте маскарпоне и аккуратно перемешайте до однородности.","Взбейте белки в устойчивую пену и введите в крем.","Быстро обмакивайте печенье в кофе и выкладывайте слоем.","Покройте слоем крема. Повторите слои.","Уберите в холодильник минимум на 4 часа.","Перед подачей щедро посыпьте какао через сито."]},
        {"id":5,"title":"Плов узбекский","description":"Ароматный рассыпчатый плов с бараниной и восточными специями","image":"https://avatars.mds.yandex.net/get-vertis-journal/3934100/21ee0094-54c8-4081-b006-4b165ce9fb6f.jpg/1600x1600?utm_source=copy_link&utm_medium=social&utm_campaign=share","time":150,"servings":6,"difficulty":"сложная","category":"основные блюда","ingredients":[{"name":"баранина","amount":"700 г"},{"name":"рис девзира","amount":"500 г"},{"name":"морковь","amount":"500 г"},{"name":"лук","amount":"3 шт"},{"name":"чеснок","amount":"2 головки"},{"name":"зира","amount":"1 ст.л."},{"name":"барбарис","amount":"1 ст.л."},{"name":"растительное масло","amount":"150 мл"}],"steps":["Замочите рис в тёплой воде на 30 минут.","Раскалите казан и обжарьте лук до золотистого цвета.","Добавьте мясо и обжарьте до румяной корочки.","Добавьте морковь, нарезанную длинной соломкой.","Залейте горячей водой, добавьте специи и целые головки чеснока.","Тушите зирвак на медленном огне 40 минут.","Выложите промытый рис ровным слоем, не перемешивая.","Залейте кипятком на 1 см выше риса.","Варите без крышки до полного впитывания воды.","Соберите рис горкой, закройте крышкой и томите 25 минут."]},
        {"id":6,"title":"Блины на молоке","description":"Тонкие ажурные блинчики с дырочками — идеальны с мёдом или вареньем","image":"https://www.konditer-club.ru/i/gallery/encyclopediaitems/image356b.jpg?utm_source=copy_link&utm_medium=social&utm_campaign=share","time":40,"servings":4,"difficulty":"лёгкая","category":"завтраки","ingredients":[{"name":"молоко","amount":"500 мл"},{"name":"яйца","amount":"2 шт"},{"name":"мука","amount":"200 г"},{"name":"сахар","amount":"2 ст.л."},{"name":"соль","amount":"0.5 ч.л."},{"name":"растительное масло","amount":"3 ст.л."}],"steps":["Взбейте яйца с сахаром и солью до однородности.","Добавьте половину молока и перемешайте.","Всыпьте просеянную муку, размешайте до однородности без комочков.","Влейте оставшееся молоко и растительное масло.","Дайте тесту постоять 15 минут при комнатной температуре.","Разогрейте сковороду и выпекайте тонкие блины с двух сторон.","Подавайте горячими со сметаной, мёдом или вареньем."]},
        {"id":7,"title":"Чизкейк Нью-Йорк","description":"Классический американский чизкейк с нежной сливочной текстурой","image":"https://fissman.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/87d/i2jt18gsasyhyx0ufmycs3h7667smeg3/800_800_1/chizkeyk.webp","time":180,"servings":10,"difficulty":"сложная","category":"десерты","ingredients":[{"name":"сливочный сыр","amount":"800 г"},{"name":"сахар","amount":"200 г"},{"name":"яйца","amount":"5 шт"},{"name":"сливки 33%","amount":"200 мл"},{"name":"ванильный экстракт","amount":"1 ч.л."},{"name":"печенье для основы","amount":"250 г"},{"name":"сливочное масло","amount":"100 г"}],"steps":["Измельчите печенье в крошку и смешайте с растопленным маслом.","Выложите основу в форму, утрамбуйте и уберите в холодильник.","Взбейте сливочный сыр с сахаром до гладкости.","Добавляйте яйца по одному, продолжая взбивать.","Влейте сливки и ваниль, перемешайте до однородности.","Вылейте начинку на основу.","Выпекайте при 160°C 60-70 минут в водяной бане.","Остудите в духовке с приоткрытой дверцей.","Уберите в холодильник минимум на 6 часов."]},
        {"id":8,"title":"Панкейки с ягодами","description":"Пышные американские блинчики со свежими ягодами и кленовым сиропом","image":"https://images.news.ru/2026/06/12/Htn0eluEukRTljW2WoArv5cSLxpyDMQWEy4OxQ2E_1200.png?utm_source=copy_link&utm_medium=social&utm_campaign=share","time":25,"servings":3,"difficulty":"лёгкая","category":"завтраки","ingredients":[{"name":"мука","amount":"250 г"},{"name":"молоко","amount":"300 мл"},{"name":"яйца","amount":"2 шт"},{"name":"сахар","amount":"3 ст.л."},{"name":"разрыхлитель","amount":"2 ч.л."},{"name":"сливочное масло","amount":"50 г"},{"name":"ягоды","amount":"200 г"},{"name":"кленовый сироп","amount":"для подачи"}],"steps":["Смешайте муку, сахар и разрыхлитель в миске.","В отдельной миске взбейте яйца с молоком и растопленным маслом.","Соедините сухие и жидкие ингредиенты, перемешайте до однородности.","Дайте тесту постоять 5 минут.","Выпекайте панкейки на среднем огне по 2 минуты с каждой стороны.","Подавайте стопкой со свежими ягодами и кленовым сиропом."]},
        {"id":9,"title":"Овсянка с фруктами","description":"Полезный завтрак с овсяными хлопьями, свежими фруктами и мёдом","image":"https://images.gastronom.ru/YZNj8OojvamFNnLZiJGNLZLoB1Eypy9vnLmC6DhSd6U/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzhjYmY0ZjMxLWVmMTctNDk3MS1hMWI2LTQwMjA2NThkMGJhOS5qcGc.webp","time":15,"servings":2,"difficulty":"лёгкая","category":"завтраки","ingredients":[{"name":"овсяные хлопья","amount":"100 г"},{"name":"молоко","amount":"300 мл"},{"name":"банан","amount":"1 шт"},{"name":"мёд","amount":"2 ст.л."},{"name":"корица","amount":"0.5 ч.л."},{"name":"ягоды","amount":"100 г"}],"steps":["Залейте овсяные хлопья молоком.","Варите 5-7 минут, помешивая.","Нарежьте банан кружочками.","Выложите кашу в тарелку, сверху добавьте банан и ягоды.","Полейте мёдом и посыпьте корицей."]},
        {"id":10,"title":"Сырники со сметаной","description":"Пышные творожные сырники с хрустящей корочкой","image":"https://gonec-eda.ru/wp-content/uploads/2025/09/2609_162.jpg?utm_source=copy_link&utm_medium=social&utm_campaign=share","time":25,"servings":3,"difficulty":"лёгкая","category":"завтраки","ingredients":[{"name":"творог","amount":"400 г"},{"name":"яйца","amount":"1 шт"},{"name":"мука","amount":"3 ст.л."},{"name":"сахар","amount":"2 ст.л."},{"name":"ванилин","amount":"щепотка"},{"name":"сметана","amount":"для подачи"},{"name":"растительное масло","amount":"для жарки"}],"steps":["Смешайте творог, яйцо, сахар и ванилин.","Добавьте муку и замесите тесто.","Сформируйте небольшие лепёшки.","Обжарьте на среднем огне по 3 минуты с каждой стороны.","Подавайте со сметаной и мёдом."]},
        {"id":11,"title":"Куриный суп с лапшой","description":"Лёгкий и сытный домашний суп с курицей и домашней лапшой","image":"https://volshebnaya-eda.ru/wp-content/uploads/2016/03/sup-verm-7.jpg","time":60,"servings":6,"difficulty":"лёгкая","category":"супы","ingredients":[{"name":"курица","amount":"500 г"},{"name":"лапша","amount":"150 г"},{"name":"морковь","amount":"2 шт"},{"name":"лук","amount":"1 шт"},{"name":"картофель","amount":"3 шт"},{"name":"зелень","amount":"пучок"},{"name":"лавровый лист","amount":"2 шт"},{"name":"соль","amount":"по вкусу"}],"steps":["Сварите куриный бульон 40 минут, снимая пену.","Добавьте нарезанный картофель, варите 10 минут.","Добавьте нарезанную морковь и лук.","Всыпьте лапшу, варите 5-7 минут.","Добавьте лавровый лист, соль, зелень.","Дайте настояться 10 минут под крышкой."]},
        {"id":12,"title":"Греческий салат","description":"Свежий средиземноморский салат с фетой и оливками","image":"https://static.1000.menu/img/content-v2/9a/aa/1980/salat-grecheskii-s-kuricei-klassicheskii_1648792153_2_max.jpg","time":20,"servings":2,"difficulty":"лёгкая","category":"салаты","ingredients":[{"name":"помидоры","amount":"3 шт"},{"name":"огурцы","amount":"2 шт"},{"name":"сыр фета","amount":"150 г"},{"name":"оливки","amount":"100 г"},{"name":"красный лук","amount":"1 шт"},{"name":"оливковое масло","amount":"3 ст.л."},{"name":"орегано","amount":"1 ч.л."}],"steps":["Нарежьте помидоры крупными дольками.","Нарежьте огурцы полукольцами.","Нарежьте красный лук тонкими полукольцами.","Смешайте овощи в миске.","Добавьте оливки и кубики феты.","Заправьте оливковым маслом, посыпьте орегано."]},
        {"id":13,"title":"Стейк рибай","description":"Сочный стейк из мраморной говядины с розмарином","image":"https://img.povar.ru/uploads/0d/fc/db/eb/f72471799dc9fdae2182ef54e16d1a7c.jpeg","time":30,"servings":2,"difficulty":"средняя","category":"основные блюда","ingredients":[{"name":"стейк рибай","amount":"2 шт по 300 г"},{"name":"розмарин","amount":"2 веточки"},{"name":"чеснок","amount":"3 зубчика"},{"name":"сливочное масло","amount":"50 г"},{"name":"соль","amount":"по вкусу"},{"name":"чёрный перец","amount":"по вкусу"},{"name":"оливковое масло","amount":"2 ст.л."}],"steps":["Достаньте стейк из холодильника за 30 минут до готовки.","Промокните бумажным полотенцем, посолите и поперчите.","Разогрейте сковороду до максимума с оливковым маслом.","Обжарьте стейк по 3-4 минуты с каждой стороны.","Добавьте сливочное масло, чеснок и розмарин.","Поливайте стейк ароматным маслом 1-2 минуты.","Дайте отдохнуть 5 минут перед подачей."]},
        {"id":14,"title":"Лазанья Болоньезе","description":"Итальянская запеканка с мясным соусом и бешамелем","image":"https://www.chefmarket.ru/blog/wp-content/uploads/2021/01/a-piece-of-chicken--2000x1200.jpg","time":90,"servings":8,"difficulty":"сложная","category":"основные блюда","ingredients":[{"name":"говяжий фарш","amount":"500 г"},{"name":"листы лазаньи","amount":"12 шт"},{"name":"моцарелла","amount":"200 г"},{"name":"томаты в собственном соку","amount":"400 г"},{"name":"молоко","amount":"500 мл"},{"name":"сливочное масло","amount":"50 г"},{"name":"мука","amount":"50 г"},{"name":"лук","amount":"1 шт"},{"name":"морковь","amount":"1 шт"},{"name":"пармезан","amount":"100 г"}],"steps":["Приготовьте соус болоньезе: обжарьте лук и морковь, добавьте фарш и томаты, тушите 30 минут.","Приготовьте бешамель: растопите масло, добавьте муку, влейте молоко, варите до загустения.","Выложите слой болоньезе, затем листы лазаньи, затем бешамель.","Повторите слои 3-4 раза.","Посыпьте тёртой моцареллой и пармезаном.","Запекайте при 180°C 35-40 минут до золотистой корочки."]},
        {"id":15,"title":"Пицца Маргарита","description":"Классическая итальянская пицца с томатами и моцареллой","image":"https://www.chefmarket.ru/blog/wp-content/uploads/2020/10/pizza-margherita--2000x1200.jpg?utm_source=copy_link&utm_medium=social&utm_campaign=share","time":45,"servings":4,"difficulty":"средняя","category":"основные блюда","ingredients":[{"name":"тесто для пиццы","amount":"400 г"},{"name":"томаты","amount":"3 шт"},{"name":"моцарелла","amount":"250 г"},{"name":"базилик","amount":"пучок"},{"name":"оливковое масло","amount":"2 ст.л."},{"name":"соль","amount":"щепотка"},{"name":"чеснок","amount":"1 зубчик"}],"steps":["Раскатайте тесто в тонкий круг.","Смажьте томатным соусом (томаты + чеснок + соль).","Выложите ломтики моцареллы.","Сбрызните оливковым маслом.","Выпекайте при 250°C 10-12 минут.","Украсьте свежим базиликом перед подачей."]},
        {"id":16,"title":"Хачапури по-аджарски","description":"Грузинская лодочка с сыром и яйцом","image":"https://images.gastronom.ru/hB2ErHqC_Y8EPQb51KjH-SbprwdUSzdgXkHbkD6XRjw/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2RkZjFkZDkxLWU2MWUtNDc4NC04NjRlLWQ2ZjRlN2M5YmM5My5qcGc.webp","time":60,"servings":2,"difficulty":"средняя","category":"выпечка","ingredients":[{"name":"тесто дрожжевое","amount":"300 г"},{"name":"сыр сулугуни","amount":"300 г"},{"name":"яйца","amount":"2 шт"},{"name":"сливочное масло","amount":"50 г"},{"name":"молоко","amount":"100 мл"}],"steps":["Раскатайте тесто в овал, заверните края лодочкой.","Смешайте тёртый сулугуни с молоком, выложите в центр.","Выпекайте при 220°C 15 минут.","Достаньте, разбейте в центр яйцо.","Верните в духовку на 3-4 минуты.","Добавьте кусочек сливочного масла перед подачей."]},
        {"id":17,"title":"Том-ям с креветками","description":"Острый тайский суп с креветками и кокосовым молоком","image":"https://avatars.mds.yandex.net/get-vertis-journal/4466156/Tayskiy_sup_s_moreproduktami_Tom_Yam.jpg_1776162783690/1600x1600","time":40,"servings":4,"difficulty":"средняя","category":"супы","ingredients":[{"name":"креветки","amount":"400 г"},{"name":"кокосовое молоко","amount":"400 мл"},{"name":"лемонграсс","amount":"2 стебля"},{"name":"грибы шиитаке","amount":"200 г"},{"name":"перец чили","amount":"2 шт"},{"name":"имбирь","amount":"30 г"},{"name":"лайм","amount":"2 шт"},{"name":"рыбный соус","amount":"2 ст.л."},{"name":"кинза","amount":"пучок"}],"steps":["Вскипятите воду, добавьте лемонграсс, имбирь и чили.","Варите 10 минут для ароматного бульона.","Добавьте грибы и варите 5 минут.","Влейте кокосовое молоко, доведите до кипения.","Добавьте креветки, варите 3-4 минуты.","Заправьте рыбным соусом и соком лайма.","Подавайте с кинзой и дольками лайма."]},
        {"id":18,"title":"Торт Медовик","description":"Классический медовый торт со сметанным кремом","image":"https://i.pinimg.com/originals/77/22/1a/77221a57d8f7f7eb5c79ac2cbb7511ff.jpg?utm_source=copy_link&utm_medium=social&utm_campaign=share","time":180,"servings":10,"difficulty":"сложная","category":"десерты","ingredients":[{"name":"мёд","amount":"100 г"},{"name":"сметана","amount":"600 г"},{"name":"мука","amount":"500 г"},{"name":"сахар","amount":"300 г"},{"name":"сливочное масло","amount":"200 г"},{"name":"яйца","amount":"3 шт"},{"name":"сода","amount":"1 ч.л."}],"steps":["Растопите мёд с маслом и сахаром.","Добавьте яйца и соду, взбейте.","Постепенно всыпьте муку, замесите тесто.","Разделите на 8 частей, раскатайте тонкие коржи.","Выпекайте каждый корж 5-7 минут при 180°C.","Взбейте сметану с сахаром для крема.","Промажьте коржи кремом, оставьте на 6 часов в холодильнике."]},
        {"id":19,"title":"Салат Оливье","description":"Традиционный новогодний салат с колбасой и горошком","image":"https://hoff.ru/upload/medialibrary/41a/0lzdu04gdtiiwq12lj9p14g8lgskxbts.jpg","time":50,"servings":6,"difficulty":"лёгкая","category":"салаты","ingredients":[{"name":"картофель","amount":"4 шт"},{"name":"морковь","amount":"2 шт"},{"name":"яйца","amount":"4 шт"},{"name":"колбаса варёная","amount":"300 г"},{"name":"горошек консервированный","amount":"1 банка"},{"name":"огурцы солёные","amount":"3 шт"},{"name":"майонез","amount":"200 г"},{"name":"соль","amount":"по вкусу"}],"steps":["Отварите картофель, морковь и яйца.","Остудите и нарежьте мелкими кубиками.","Нарежьте колбасу и огурцы такими же кубиками.","Смешайте все ингредиенты в миске.","Добавьте горошек (без жидкости).","Заправьте майонезом, посолите по вкусу."]},
        {"id":20,"title":"Эклеры с заварным кремом","description":"Воздушные французские пирожные с нежным кремом","image":"https://avatars.mds.yandex.net/i?id=46afe14051cd4ed408abe7f107566ae8_l-10533404-images-thumbs&n=13","time":90,"servings":12,"difficulty":"сложная","category":"десерты","ingredients":[{"name":"мука","amount":"150 г"},{"name":"яйца","amount":"4 шт"},{"name":"молоко","amount":"250 мл"},{"name":"сливочное масло","amount":"100 г"},{"name":"сахар","amount":"150 г"},{"name":"ванильный экстракт","amount":"1 ч.л."},{"name":"шоколад","amount":"100 г"},{"name":"соль","amount":"щепотка"}],"steps":["Вскипятите молоко с маслом и солью.","Всыпьте муку, быстро перемешайте до однородности.","Остудите тесто, добавьте яйца по одному.","Отсадите полоски теста на противень.","Выпекайте при 200°C 25-30 минут.","Приготовьте заварной крем: молоко, сахар, яйца, мука.","Наполните эклеры кремом через отверстие.","Покройте растопленным шоколадом."]}
    ]
};

// ===== СОСТОЯНИЕ =====
let recipes = [...recipesData.recipes, ...JSON.parse(localStorage.getItem('userRecipes') || '[]')];
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let selectedIngredients = new Set();
let activeCategory = 'все';

// Заглушка, если фото не загрузилось
const FALLBACK_IMG = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400"><rect width="100%" height="100%" fill="#f4a261"/><text x="50%" y="50%" font-size="80" text-anchor="middle" dominant-baseline="middle">🍳</text></svg>'
);
function imgFallback(el) { el.onerror = null; el.src = FALLBACK_IMG; }

// ===== ИНГРЕДИЕНТЫ =====
function getAllIngredients() {
    const set = new Set();
    recipes.forEach(r => r.ingredients.forEach(i => set.add(i.name.toLowerCase())));
    return Array.from(set).sort();
}

// ===== ФИЛЬТРАЦИЯ (index) =====
function filterRecipes() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const maxTime = parseInt(document.getElementById('timeFilter').value);
    const minServ = parseInt(document.getElementById('servingsFilter').value);

    return recipes.filter(r => {
        const matchQuery = !query ||
            r.title.toLowerCase().includes(query) ||
            r.description.toLowerCase().includes(query) ||
            r.ingredients.some(i => i.name.toLowerCase().includes(query)) ||
            r.category.toLowerCase().includes(query);

        const matchIngredients = selectedIngredients.size === 0 ||
            Array.from(selectedIngredients).every(sel =>
                r.ingredients.some(i => i.name.toLowerCase() === sel));

        const matchTime = r.time <= maxTime;
        const matchServings = r.servings >= minServ;

        return matchQuery && matchIngredients && matchTime && matchServings;
    });
}

// ===== КАРТОЧКА =====
function renderRecipeCard(recipe) {
    const isFav = favorites.includes(recipe.id);
    const isUser = recipe.id > 1000;
    return `
        <div class="recipe-card" onclick="openRecipe(${recipe.id})">
            ${isUser ? '<span class="user-badge">Мой рецепт</span>' : ''}
            <button class="favorite-btn ${isFav ? 'active' : ''}"
                    onclick="toggleFavorite(event, ${recipe.id})"
                    title="${isFav ? 'Убрать из избранного' : 'Добавить в избранное'}">
                ${isFav ? '❤️' : '🤍'}
            </button>
            <img src="${recipe.image || FALLBACK_IMG}" alt="${recipe.title}"
                 onerror="imgFallback(this)">
            <div class="recipe-card-body">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time} мин</span>
                    <span>👥 ${recipe.servings} порц.</span>
                    <span>📊 ${recipe.difficulty}</span>
                </div>
            </div>
        </div>
    `;
}

// ===== МОДАЛЬНОЕ ОКНО =====
function openRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    const isFav = favorites.includes(recipe.id);
    document.getElementById('recipeDetail').innerHTML = `
        <div class="recipe-hero">
            <img src="${recipe.image || FALLBACK_IMG}" alt="${recipe.title}" onerror="imgFallback(this)">
            <div class="recipe-hero-overlay">
                <h1>${recipe.title}</h1>
                <p>${recipe.description}</p>
            </div>
        </div>
        <div class="recipe-info">
            <div class="info-item"><span class="label">Время</span><span class="value">⏱️ ${recipe.time} мин</span></div>
            <div class="info-item"><span class="label">Порции</span><span class="value">👥 ${recipe.servings}</span></div>
            <div class="info-item"><span class="label">Сложность</span><span class="value">📊 ${recipe.difficulty}</span></div>
            <div class="info-item"><span class="label">Категория</span><span class="value">🏷️ ${recipe.category}</span></div>
            <button class="btn ${isFav ? 'btn-danger' : 'btn-primary'}"
                    onclick="toggleFavorite(event, ${recipe.id})">
                ${isFav ? '❤️ В избранном' : '🤍 В избранное'}
            </button>
        </div>
        <div class="recipe-content">
            <div class="ingredients-list">
                <h2>🧺 Ингредиенты</h2>
                <ul>
                    ${recipe.ingredients.map(i => `
                        <li><span>${i.name}</span><span class="amount">${i.amount}</span></li>
                    `).join('')}
                </ul>
            </div>
            <div class="steps-list">
                <h2>👨‍🍳 Шаги приготовления</h2>
                <ol>
                    ${recipe.steps.map((s, i) => `
                        <li data-step="${i + 1}">${s}</li>
                    `).join('')}
                </ol>
            </div>
        </div>
    `;

    document.getElementById('recipeModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('recipeModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== ИЗБРАННОЕ =====
function toggleFavorite(event, id) {
    event.stopPropagation();
    const idx = favorites.indexOf(id);
    if (idx > -1) {
        favorites.splice(idx, 1);
        showToast('Удалено из избранного');
    } else {
        favorites.push(id);
        showToast('Добавлено в избранное ❤️');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    refreshCurrentView();
    if (document.getElementById('recipeModal').classList.contains('active')) openRecipe(id);
}

// ===== ТОСТ =====
function showToast(msg, isError = false) {
    const t = document.createElement('div');
    t.className = 'toast' + (isError ? ' error' : '');
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2500);
}

// ===== ОБЩИЙ ПУСТОЙ БЛОК =====
function emptyHTML(title, text, btnLabel, btnAction) {
    return `
        <div class="empty-state">
            <div class="icon">🍽️</div>
            <h3>${title}</h3>
            <p>${text}</p>
            <button class="btn btn-primary" onclick="${btnAction}" style="margin-top:1rem">${btnLabel}</button>
        </div>`;
}

// ===== СТРАНИЦА: ПОИСК =====
function renderRecipes() {
    const grid = document.getElementById('recipesGrid');
    const info = document.getElementById('resultsInfo');
    const list = filterRecipes();
    const total = recipes.length;

    info.innerHTML = (list.length === total)
        ? `<strong>Найдено:</strong> ${total} рецептов`
        : `<strong>Найдено:</strong> ${list.length} из ${total} рецептов`;

    if (!list.length) {
        grid.innerHTML = emptyHTML('Ничего не найдено',
            'Попробуйте изменить параметры поиска или сбросить фильтры',
            'Сбросить фильтры', 'resetFilters()');
        return;
    }
    grid.innerHTML = list.map(renderRecipeCard).join('');
}

function renderIngredientChips() {
    document.getElementById('ingredientsFilter').innerHTML = getAllIngredients().map(ing => `
        <div class="ingredient-chip ${selectedIngredients.has(ing) ? 'selected' : ''}"
             onclick="toggleIngredient('${ing.replace(/'/g, "\\'")}')">${ing}</div>
    `).join('');
}

function toggleIngredient(ing) {
    selectedIngredients.has(ing) ? selectedIngredients.delete(ing) : selectedIngredients.add(ing);
    renderIngredientChips();
    renderRecipes();
}

function resetFilters() {
    selectedIngredients.clear();
    document.getElementById('searchInput').value = '';
    document.getElementById('timeFilter').value = '999';
    document.getElementById('servingsFilter').value = '0';
    renderIngredientChips();
    renderRecipes();
    showToast('Фильтры сброшены');
}

function initIndex() {
    renderIngredientChips();
    renderRecipes();
    document.getElementById('searchInput').addEventListener('input', renderRecipes);
    document.getElementById('timeFilter').addEventListener('change', renderRecipes);
    document.getElementById('servingsFilter').addEventListener('change', renderRecipes);
}

// ===== СТРАНИЦА: ВСЕ РЕЦЕПТЫ =====
function renderCategoryTabs() {
    const cats = ['все', ...new Set(recipes.map(r => r.category))];
    document.getElementById('categoryTabs').innerHTML = cats.map(c => `
        <button class="category-tab ${c === activeCategory ? 'active' : ''}"
                onclick="setCategory('${c.replace(/'/g, "\\'")}')">${c}</button>
    `).join('');
}

function setCategory(cat) {
    activeCategory = cat;
    renderCategoryTabs();
    renderAllRecipes();
}

function renderAllRecipes() {
    const grid = document.getElementById('recipesGrid');
    const info = document.getElementById('resultsInfo');
    const list = activeCategory === 'все' ? recipes : recipes.filter(r => r.category === activeCategory);
    info.innerHTML = `<strong>Всего рецептов:</strong> ${list.length}` +
        (activeCategory !== 'все' ? ` (категория «${activeCategory}»)` : '');

    grid.innerHTML = list.length
        ? list.map(renderRecipeCard).join('')
        : emptyHTML('Здесь пусто', 'В этой категории пока нет рецептов', 'Показать все', "setCategory('все')");
}

function initRecipes() {
    renderCategoryTabs();
    renderAllRecipes();
}

// ===== СТРАНИЦА: ИЗБРАННОЕ =====
function renderFavorites() {
    const grid = document.getElementById('recipesGrid');
    const info = document.getElementById('resultsInfo');
    const list = recipes.filter(r => favorites.includes(r.id));
    info.innerHTML = `<strong>В избранном:</strong> ${list.length} рецептов`;

    grid.innerHTML = list.length
        ? list.map(renderRecipeCard).join('')
        : emptyHTML('В избранном пока пусто',
            'Нажмите 🤍 на любой карточке рецепта, чтобы сохранить его здесь',
            'Перейти к поиску', "location.href='index.html'");
}

function initFavorites() { renderFavorites(); }

// ===== СТРАНИЦА: ДОБАВИТЬ =====
function addIngredientRow(name = '', amount = '') {
    const container = document.getElementById('ingredientsContainer');
    const row = document.createElement('div');
    row.className = 'ingredient-row';
    row.innerHTML = `
        <input type="text" class="ing-name" placeholder="Ингредиент" value="${name}">
        <input type="text" class="ing-amount" placeholder="Количество" value="${amount}">
        <button type="button" class="remove-row" onclick="this.parentElement.remove()">✕</button>
    `;
    container.appendChild(row);
}

function renderMyRecipes() {
    const userRecipes = JSON.parse(localStorage.getItem('userRecipes') || '[]');
    const block = document.getElementById('myRecipesBlock');
    const list = document.getElementById('myRecipesList');
    if (!userRecipes.length) { block.style.display = 'none'; return; }
    block.style.display = 'block';
    list.innerHTML = userRecipes.map(r => `
        <div class="my-recipe-item">
            <span><strong>${r.title}</strong> · ${r.category} · ${r.time} мин</span>
            <button onclick="deleteUserRecipe(${r.id})">🗑️ Удалить</button>
        </div>
    `).join('');
}

function deleteUserRecipe(id) {
    let userRecipes = JSON.parse(localStorage.getItem('userRecipes') || '[]');
    userRecipes = userRecipes.filter(r => r.id !== id);
    localStorage.setItem('userRecipes', JSON.stringify(userRecipes));
    favorites = favorites.filter(f => f !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    recipes = [...recipesData.recipes, ...userRecipes];
    renderMyRecipes();
    showToast('Рецепт удалён');
}

function initAdd() {
    addIngredientRow();
    addIngredientRow();
    renderMyRecipes();

    document.getElementById('addForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const ingredients = Array.from(document.querySelectorAll('.ingredient-row'))
            .map(row => ({
                name: row.querySelector('.ing-name').value.trim(),
                amount: row.querySelector('.ing-amount').value.trim() || 'по вкусу'
            }))
            .filter(i => i.name);

        const steps = document.getElementById('steps').value
            .split('\n').map(s => s.trim()).filter(Boolean);

        if (!ingredients.length) { showToast('Добавьте хотя бы один ингредиент', true); return; }
        if (!steps.length) { showToast('Добавьте хотя бы один шаг', true); return; }

        const newRecipe = {
            id: Date.now(),
            title: document.getElementById('title').value.trim(),
            description: document.getElementById('description').value.trim(),
            image: document.getElementById('image').value.trim(),
            time: parseInt(document.getElementById('time').value),
            servings: parseInt(document.getElementById('servings').value),
            difficulty: document.getElementById('difficulty').value,
            category: document.getElementById('category').value,
            ingredients,
            steps
        };

        const userRecipes = JSON.parse(localStorage.getItem('userRecipes') || '[]');
        userRecipes.push(newRecipe);
        localStorage.setItem('userRecipes', JSON.stringify(userRecipes));
        recipes.push(newRecipe);

        showToast('Рецепт добавлен! Переходим к рецептам…');
        setTimeout(() => location.href = 'recipes.html', 1200);
    });
}

// ===== ОБЩИЙ РЕНДЕР ТЕКУЩЕЙ СТРАНИЦЫ =====
function refreshCurrentView() {
    const page = document.body.dataset.page;
    if (page === 'index') renderRecipes();
    else if (page === 'recipes') renderAllRecipes();
    else if (page === 'favorites') renderFavorites();
    else if (page === 'add') renderMyRecipes();
}

// ===== СТАРТ =====
document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;
    if (page === 'index') initIndex();
    else if (page === 'recipes') initRecipes();
    else if (page === 'favorites') initFavorites();
    else if (page === 'add') initAdd();

    // Общие обработчики модального окна
    document.getElementById('recipeModal').addEventListener('click', (e) => {
        if (e.target.id === 'recipeModal') closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});