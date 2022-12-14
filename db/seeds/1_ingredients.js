/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('LIST_INGREDIENTS').del();
    await knex('LIST_INGREDIENTS').insert([
        { id: 1, name: 'Nutella®' },
        { id: 2, name: 'TABASCO®' },
        { id: 3, name: 'Абрикосовое варенье' },
        { id: 4, name: 'Агар-агар' },
        { id: 5, name: 'Аджика' },
        { id: 6, name: 'Арахисовое масло' },
        { id: 7, name: 'Аргановое масло' },
        { id: 8, name: 'Аррорут' },
        { id: 9, name: 'Бальзамический уксус' },
        { id: 10, name: 'Белый хлеб' },
        { id: 11, name: 'Булочка для гамбургеров' },
        { id: 12, name: 'Варенье' },
        { id: 13, name: 'Варенье из грецких орехов' },
        { id: 14, name: 'Водоросли' },
        { id: 15, name: 'Вустерширский соус' },
        { id: 16, name: 'Горчица' },
        { id: 17, name: 'Горчичное масло' },
        { id: 18, name: 'Детская смесь «Малютка»' },
        { id: 19, name: 'Джем' },
        { id: 20, name: 'Желатин' },
        { id: 21, name: 'Заменитель яиц' },
        { id: 22, name: 'Зеленый жасминовый чай' },
        { id: 23, name: 'Изюм' },
        { id: 24, name: 'Имбирное масло' },
        { id: 25, name: 'Кетчуп' },
        { id: 26, name: 'Кислота лимонная' },
        { id: 27, name: 'Кленовый сироп' },
        { id: 28, name: 'Клетчатка' },
        { id: 29, name: 'Кокосовое масло' },
        { id: 30, name: 'Кокосовое молоко' },
        { id: 31, name: 'Кондитерские украшения' },
        { id: 32, name: 'Конопляное масло' },
        { id: 33, name: 'Консервированные сердцевины пальмы ' },
        { id: 34, name: 'Конфеты' },
        { id: 35, name: 'Конфитюр' },
        { id: 36, name: 'Коптильная жидкость' },
        { id: 37, name: 'Коричневый соус HP' },
        { id: 38, name: 'Крахмал' },
        { id: 39, name: 'Кукурузное масло' },
        { id: 40, name: 'Кунжутное масло' },
        { id: 41, name: 'Лапша' },
        { id: 42, name: 'Майонез' },
        { id: 43, name: 'Марципан' },
        { id: 44, name: 'Масло авокадо' },
        { id: 45, name: 'Масло для фритюра' },
        { id: 46, name: 'Масло из виноградных косточек' },
        { id: 47, name: 'Масло канолы' },
        { id: 48, name: 'Масло тмина' },
        { id: 49, name: 'Мед' },
        { id: 50, name: 'Миндальное масло' },
        { id: 51, name: 'Мюсли' },
        { id: 52, name: 'Напиток Gatorade голубой' },
        { id: 53, name: 'Напиток «Гуарана»' },
        { id: 54, name: 'Ньокки' },
        { id: 55, name: 'Оливковое масло' },
        { id: 56, name: 'Ореховое масло' },
        { id: 57, name: 'Отрубной хлеб' },
        { id: 58, name: 'Пальмовое масло' },
        { id: 59, name: 'Панировочные сухари' },
        { id: 60, name: 'Паста' },
        { id: 61, name: 'Паста анко' },
        { id: 62, name: 'Пектин' },
        { id: 63, name: 'Пищевой краситель' },
        { id: 64, name: 'Повидло' },
        { id: 65, name: 'Помидоры в собственном соку' },
        { id: 66, name: 'Попкорн' },
        { id: 67, name: 'Растительное масло' },
        { id: 68, name: 'Растительные сливки' },
        { id: 69, name: 'Рафинированное масло' },
        { id: 70, name: 'Рисовый уксус' },
        { id: 71, name: 'Розовая вода ' },
        { id: 72, name: 'Рыбный соус' },
        { id: 73, name: 'Сахар' },
        { id: 74, name: 'Свежие дрожжи' },
        { id: 75, name: 'Сироп агавы' },
        { id: 76, name: 'Сироп из топинамбура' },
        { id: 77, name: 'Сладкий соус чили ' },
        { id: 78, name: 'Сода' },
        { id: 79, name: 'Соевое масло' },
        { id: 80, name: 'Соевое молоко' },
        { id: 81, name: 'Соевый соус' },
        { id: 82, name: 'Соус наршараб' },
        { id: 83, name: 'Соус тако' },
        { id: 84, name: 'Соус терияки' },
        { id: 85, name: 'Соус чили с чесноком' },
        { id: 86, name: 'Сухие дрожжи Dr.Oetker' },
        { id: 87, name: 'Сухофрукты' },
        { id: 88, name: 'Тапиока' },
        { id: 89, name: 'Темпура микс' },
        { id: 90, name: 'Томатная паста ' },
        { id: 91, name: 'Томатный соус пассата' },
        { id: 92, name: 'Тофу' },
        { id: 93, name: 'Тыквенное масло' },
        { id: 94, name: 'Уксус' },
        { id: 95, name: 'Устричный соус' },
        { id: 96, name: 'Фанта' },
        { id: 97, name: 'Фруктовый мармелад' },
        { id: 98, name: 'Фруктоза' },
        { id: 99, name: 'Хлопковое масло' },
        { id: 100, name: 'Цукаты' },
        { id: 101, name: 'Чай' },
        { id: 102, name: 'Черная лакрица' },
        { id: 103, name: 'Черный чай' },
        { id: 104, name: 'Черный чай в пакетиках' },
        { id: 105, name: 'Шоколадная стружка' },
        { id: 106, name: 'Яблочный уксус' },
        { id: 107, name: 'Ягодное варенье ' },
        { id: 108, name: 'Абсент' },
        { id: 109, name: 'Ангостура' },
        { id: 110, name: 'Арак' },
        { id: 111, name: 'Арманьяк' },
        { id: 112, name: 'Бальзам' },
        { id: 113, name: 'Белое сухое игристое вино' },
        { id: 114, name: "Биттер Peychaud's" },
        { id: 115, name: 'Бренди' },
        { id: 116, name: 'Бурбон' },
        { id: 117, name: 'Вермут' },
        { id: 118, name: 'Вино' },
        { id: 119, name: 'Виски' },
        { id: 120, name: 'Граппа' },
        { id: 121, name: 'Джин' },
        { id: 122, name: 'Джин Hendrick’s' },
        { id: 123, name: 'Золотая текила' },
        { id: 124, name: 'Игристое полусладкое вино' },
        { id: 125, name: 'Имбирное зеленое вино' },
        { id: 126, name: 'Имбирный эль' },
        { id: 127, name: 'Кава' },
        { id: 128, name: 'Кагор' },
        { id: 129, name: 'Кальвадос' },
        { id: 130, name: 'Кампари' },
        { id: 131, name: 'Кашаса' },
        { id: 132, name: 'Коньяк' },
        { id: 133, name: 'Красное ламбруско ' },
        { id: 134, name: 'Красное полусладкое вино' },
        { id: 135, name: 'Ликер «Гран Марнье»' },
        { id: 136, name: 'Мадера' },
        { id: 137, name: 'Марсала' },
        { id: 138, name: 'Мартини' },
        { id: 139, name: 'Мускат' },
        { id: 140, name: 'Оранж биттер' },
        { id: 141, name: 'Перно' },
        { id: 142, name: 'Полусухое шампанское' },
        { id: 143, name: 'Портвейн' },
        { id: 144, name: 'Розовое шампанское' },
        { id: 145, name: 'Ром' },
        { id: 146, name: 'Ром «Бакарди лимон»' },
        { id: 147, name: 'Ром «Бакарди»' },
        { id: 148, name: 'Рутбир' },
        { id: 149, name: 'Саке' },
        { id: 150, name: 'Самбука' },
        { id: 151, name: 'Сангрита' },
        { id: 152, name: 'Светлый эль' },
        { id: 153, name: 'Сидр' },
        { id: 154, name: 'Сухое шампанское' },
        { id: 155, name: 'Текила' },
        { id: 156, name: 'Темный эль' },
        { id: 157, name: 'Узо' },
        { id: 158, name: 'Фрамбуаз' },
        { id: 159, name: 'Херес' },
        { id: 160, name: 'Чинзано' },
        { id: 161, name: 'Шардоне' },
        { id: 162, name: 'Шоколадный ликер' },
        { id: 163, name: 'Амаретти' },
        { id: 164, name: 'Арахисовый соус' },
        { id: 165, name: 'Багель' },
        { id: 166, name: 'Батон' },
        { id: 167, name: 'Безе' },
        { id: 168, name: 'Бисквит' },
        { id: 169, name: 'Блины' },
        { id: 170, name: 'Брусничный  соус' },
        { id: 171, name: 'Бублик' },
        { id: 172, name: 'Булочка' },
        { id: 173, name: 'Бульон' },
        { id: 174, name: 'Ванильный сахар Dr.Oetker' },
        { id: 175, name: 'Вафли' },
        { id: 176, name: 'Вода' },
        { id: 177, name: 'Галеты' },
        { id: 178, name: 'Горчичный соус с базиликом' },
        { id: 179, name: 'Гренадин' },
        { id: 180, name: 'Гренки' },
        { id: 181, name: 'Грибной соус' },
        { id: 182, name: 'Грильяж' },
        { id: 183, name: 'Грушевый сок' },
        { id: 184, name: 'Гуакамоле' },
        { id: 185, name: 'Джем из красной смородины' },
        { id: 186, name: 'Дрожжевое тесто' },
        { id: 187, name: 'Желатин Dr.Oetker' },
        { id: 188, name: 'Желе' },
        { id: 189, name: 'Заварной крем' },
        { id: 190, name: 'Загуститель для сливок Dr.Oetker' },
        { id: 191, name: 'Зефир' },
        { id: 192, name: 'Итальянская лепешка' },
        { id: 193, name: 'Карамельный пудинг' },
        { id: 194, name: 'Карамельный сироп' },
        { id: 195, name: 'Карамельный соус' },
        { id: 196, name: 'Кекс английский' },
        { id: 197, name: 'Клубничный конфитюр' },
        { id: 198, name: 'Кока-кола' },
        { id: 199, name: 'Концентрат лимонада' },
        { id: 200, name: 'Крекеры' },
        { id: 201, name: 'Крутоны из муки грубого помола' },
        { id: 202, name: 'Куриный бульон' },
        { id: 203, name: 'Лед' },
        { id: 204, name: 'Лепешки «Тако»' },
        { id: 205, name: 'Лепешки пиде' },
        { id: 206, name: 'Лимонад' },
        { id: 207, name: 'Лимонный крем' },
        { id: 208, name: 'Маленькие ириски' },
        { id: 209, name: 'Маца' },
        { id: 210, name: 'Медово-горчичный соус' },
        { id: 211, name: 'Миндальные макаруны' },
        { id: 212, name: 'Мисо суп' },
        { id: 213, name: 'Мятная карамель' },
        { id: 214, name: 'Огуречный сок' },
        { id: 215, name: 'Панеттоне' },
        { id: 216, name: 'Пастила' },
        { id: 217, name: 'Паштет' },
        { id: 218, name: 'Песочное тесто' },
        { id: 219, name: 'Песто' },
        { id: 220, name: 'Печенье' },
        { id: 221, name: 'Пико де галло' },
        { id: 222, name: 'Пита' },
        { id: 223, name: 'Пряники' },
        { id: 224, name: 'Пумперникель' },
        { id: 225, name: 'Разноцветная карамель' },
        { id: 226, name: 'Сацебели' },
        { id: 227, name: 'Свекольный сок' },
        { id: 228, name: 'Сливочная карамель' },
        { id: 229, name: 'Сливочный соус' },
        { id: 230, name: 'Слоеное тесто' },
        { id: 231, name: 'Смесь для выпечки «Шоколадный бисквит»' },
        { id: 232, name: 'Соевый йогурт' },
        { id: 233, name: 'Соевый соус Heinz «Оригинальный вкус»' },
        { id: 234, name: 'Сок гуавы' },
        { id: 235, name: 'Сок из клементинов' },
        { id: 236, name: 'Сок личи' },
        { id: 237, name: 'Сок манго' },
        { id: 238, name: 'Соус «1000 островов»' },
        { id: 239, name: 'Соус адобо' },
        { id: 240, name: 'Соус айоли' },
        { id: 241, name: 'Соус сальса' },
        { id: 242, name: 'Соус тартар' },
        { id: 243, name: 'Соус эспаньоль' },
        { id: 244, name: 'Табуле' },
        { id: 245, name: 'Тапенад' },
        { id: 246, name: 'Тарталетки' },
        { id: 247, name: 'Тахини' },
        { id: 248, name: 'Тертый шоколад' },
        { id: 249, name: 'Тесто для пельменей' },
        { id: 250, name: 'Тесто для пиццы' },
        { id: 251, name: 'Томатный сок' },
        { id: 252, name: 'Томатный соус' },
        { id: 253, name: 'Тонкая вермишель ' },
        { id: 254, name: 'Тортильи' },
        { id: 255, name: 'Тцатцики' },
        { id: 256, name: 'Французский багет' },
        { id: 257, name: 'Хаггис' },
        { id: 258, name: 'Хек' },
        { id: 259, name: 'Хересный уксус' },
        { id: 260, name: 'Хлебные палочки' },
        { id: 261, name: 'Хлебный квас' },
        { id: 262, name: 'Шоколадные конфеты с мятной начинкой' },
        { id: 263, name: 'Шоколадные чипсы' },
        { id: 264, name: 'Шоколадный женуаз' },
        { id: 265, name: 'Шоколадный сироп' },
        { id: 266, name: 'Шоколадный соус' },
        { id: 267, name: 'Яблочный сок' },
        { id: 268, name: 'Белые грибы' },
        { id: 269, name: 'Вешенки' },
        { id: 270, name: 'Грибы' },
        { id: 271, name: 'Грибы шиитаке' },
        { id: 272, name: 'Грибы эноки' },
        { id: 273, name: 'Лисички' },
        { id: 274, name: 'Маслята' },
        { id: 275, name: 'Опята' },
        { id: 276, name: 'Подберезовики' },
        { id: 277, name: 'Рыжики' },
        { id: 278, name: 'Свежие коричневые шампиньоны' },
        { id: 279, name: 'Сморчки' },
        { id: 280, name: 'Сухие китайские грибы' },
        { id: 281, name: 'Трюфели' },
        { id: 282, name: 'Шампиньоны' },
        { id: 283, name: 'Базилик' },
        { id: 284, name: 'Брокколи рааб' },
        { id: 285, name: 'Букет гарни' },
        { id: 286, name: 'Вербена лимонная' },
        { id: 287, name: 'Водяной кресс' },
        { id: 288, name: 'Джусай' },
        { id: 289, name: 'Зеленый лук' },
        { id: 290, name: 'Зеленый салат' },
        { id: 291, name: 'Зелень' },
        { id: 292, name: 'Каркаде' },
        { id: 293, name: 'Кервель' },
        { id: 294, name: 'Крапива' },
        { id: 295, name: 'Лавровый лист' },
        { id: 296, name: 'Лепестки роз' },
        { id: 297, name: 'Лимонная трава' },
        { id: 298, name: 'Листья банана' },
        { id: 299, name: 'Листья боярышника' },
        { id: 300, name: 'Листья винограда' },
        { id: 301, name: 'Листья карри' },
        { id: 302, name: 'Листья малины' },
        { id: 303, name: 'Листья одуванчика' },
        { id: 304, name: 'Листья пандана' },
        { id: 305, name: 'Листья шисо' },
        { id: 306, name: 'Лук-резанец' },
        { id: 307, name: 'Майоран' },
        { id: 308, name: 'Мангольд' },
        { id: 309, name: 'Мелисса' },
        { id: 310, name: 'Мизуна' },
        { id: 311, name: 'Мята' },
        { id: 312, name: 'Орегано' },
        { id: 313, name: 'Петрушка' },
        { id: 314, name: 'Портулак' },
        { id: 315, name: 'Розмарин' },
        { id: 316, name: 'Рукола' },
        { id: 317, name: 'Салат пак-чой' },
        { id: 318, name: 'Свежий шиповник' },
        { id: 319, name: 'Смесь салатных листьев Girls mix «Белая Дача»' },
        { id: 320, name: 'Смесь салатных листьев Vita mix «Белая Дача»' },
        { id: 321, name: 'Смесь салатных листьев Пати микс «Белая Дача»' },
        { id: 322, name: 'Смесь салатных листьев Танго микс «Белая Дача»' },
        { id: 323, name: 'Тимьян' },
        { id: 324, name: 'Укроп' },
        { id: 325, name: 'Физалис' },
        { id: 326, name: 'Хвоя' },
        { id: 327, name: 'Цветы акации' },
        { id: 328, name: 'Цветы лаванды' },
        { id: 329, name: 'Цикорий' },
        { id: 330, name: 'Чабер' },
        { id: 331, name: 'Черемша' },
        { id: 332, name: 'Шалфей' },
        { id: 333, name: 'Шпинат' },
        { id: 334, name: 'Щавель' },
        { id: 335, name: 'Эстрагон' },
        { id: 336, name: 'Бобы' },
        { id: 337, name: 'Булгур' },
        { id: 338, name: 'Геркулес' },
        { id: 339, name: 'Гранола' },
        { id: 340, name: 'Гречневая крупа' },
        { id: 341, name: 'Гречневая мука' },
        { id: 342, name: 'Дикий рис' },
        { id: 343, name: 'Какао' },
        { id: 344, name: 'Киноа' },
        { id: 345, name: 'Кукурузная мука' },
        { id: 346, name: 'Кукурузные хлопья' },
        { id: 347, name: 'Кускус' },
        { id: 348, name: 'Льняная мука' },
        { id: 349, name: 'Манная крупа' },
        { id: 350, name: 'Мука из киноа' },
        { id: 351, name: 'Натуральный кофе' },
        { id: 352, name: 'Нут' },
        { id: 353, name: 'Нутовая мука' },
        { id: 354, name: 'Овсяная крупа' },
        { id: 355, name: 'Овсяные хлопья' },
        { id: 356, name: 'Отруби' },
        { id: 357, name: 'Перловая крупа' },
        { id: 358, name: 'Полба' },
        { id: 359, name: 'Пшеничная крупа' },
        { id: 360, name: 'Пшеничная мука' },
        { id: 361, name: 'Пшено' },
        { id: 362, name: 'Ржаная крупа' },
        { id: 363, name: 'Рис' },
        { id: 364, name: 'Рисовая мука' },
        { id: 365, name: 'Саго' },
        { id: 366, name: 'Фасоль' },
        { id: 367, name: 'Чечевица' },
        { id: 368, name: 'Шоколад' },
        { id: 369, name: 'Ячмень' },
        { id: 370, name: '«Активия натуральная»' },
        { id: 371, name: 'Айран' },
        { id: 372, name: 'Йогурт' },
        { id: 373, name: 'Кварк' },
        { id: 374, name: 'Кефир' },
        { id: 375, name: 'Клубничный творожок' },
        { id: 376, name: 'Куриное яйцо' },
        { id: 377, name: 'Маргарин' },
        { id: 378, name: 'Молоко' },
        { id: 379, name: 'Мороженое' },
        { id: 380, name: 'Обезжиренный йогурт' },
        { id: 381, name: 'Обезжиренный творог' },
        { id: 382, name: 'Пахта' },
        { id: 383, name: 'Перепелиное яйцо' },
        { id: 384, name: 'Питьевой йогурт' },
        { id: 385, name: 'Простокваша' },
        { id: 386, name: 'Ряженка ' },
        { id: 387, name: 'Сгущенное молоко' },
        { id: 388, name: 'Сливки' },
        { id: 389, name: 'Сливочное масло' },
        { id: 390, name: 'Сметана' },
        { id: 391, name: 'Творог' },
        { id: 392, name: 'Утиное яйцо' },
        { id: 393, name: 'Бекон' },
        { id: 394, name: 'Ветчина' },
        { id: 395, name: 'Говядина' },
        { id: 396, name: 'Заяц' },
        { id: 397, name: 'Колбаса' },
        { id: 398, name: 'Колбаски' },
        { id: 399, name: 'Кролик' },
        { id: 400, name: 'Мясо' },
        { id: 401, name: 'Сардельки' },
        { id: 402, name: 'Свинина' },
        { id: 403, name: 'Свиное филе' },
        { id: 404, name: 'Свиной стейк' },
        { id: 405, name: 'Сервелат' },
        { id: 406, name: 'Сосиски' },
        { id: 407, name: 'Телятина' },
        { id: 408, name: 'Улитки' },
        { id: 409, name: 'Фарш' },
        { id: 410, name: 'Шпик' },
        { id: 411, name: 'Эскалоп' },
        { id: 412, name: 'Ягнятина' },
        { id: 413, name: 'Артишоки' },
        { id: 414, name: 'Баклажаны' },
        { id: 415, name: 'Бамия' },
        { id: 416, name: 'Батат' },
        { id: 417, name: 'Белокочанная капуста' },
        { id: 418, name: 'Брюква' },
        { id: 419, name: 'Брюссельская капуста' },
        { id: 420, name: 'Галангал' },
        { id: 421, name: 'Горох' },
        { id: 422, name: 'Джикама' },
        { id: 423, name: 'Зеленый горошек' },
        { id: 424, name: 'Имбирь' },
        { id: 425, name: 'Кабачки' },
        { id: 426, name: 'Кайенский перец' },
        { id: 427, name: 'Каперсы' },
        { id: 428, name: 'Капуста' },
        { id: 429, name: 'Капуста брокколи' },
        { id: 430, name: 'Капуста романеско' },
        { id: 431, name: 'Картофель' },
        { id: 432, name: 'Китайская капуста' },
        { id: 433, name: 'Кольраби' },
        { id: 434, name: 'Консервированный перец пименто ' },
        { id: 435, name: 'Корень куркумы' },
        { id: 436, name: 'Коренья' },
        { id: 437, name: 'Краснокочанная капуста' },
        { id: 438, name: 'Красный лук' },
        { id: 439, name: 'Крачай' },
        { id: 440, name: 'Лук-порей' },
        { id: 441, name: 'Лук-шалот' },
        { id: 442, name: 'Маринованные огурцы' },
        { id: 443, name: 'Маслины' },
        { id: 444, name: 'Молодые плоды люфы' },
        { id: 445, name: 'Морковь' },
        { id: 446, name: 'Овощи' },
        { id: 447, name: 'Огурцы' },
        { id: 448, name: 'Оливки' },
        { id: 449, name: 'Очищенный консервированный перец пикийо' },
        { id: 450, name: 'Пальчиковые помидоры' },
        { id: 451, name: 'Пастернак' },
        { id: 452, name: 'Патиссоны' },
        { id: 453, name: 'Пекинская капуста' },
        { id: 454, name: 'Перец чили' },
        { id: 455, name: 'Помидоры' },
        { id: 456, name: 'Помидоры черри' },
        { id: 457, name: 'Ревень' },
        { id: 458, name: 'Редис' },
        { id: 459, name: 'Редька' },
        { id: 460, name: 'Репа' },
        { id: 461, name: 'Репчатый лук' },
        { id: 462, name: 'Савойская капуста' },
        { id: 463, name: 'Свежая кукуруза' },
        { id: 464, name: 'Свежий перец' },
        { id: 465, name: 'Свекла' },
        { id: 466, name: 'Сельдерей' },
        { id: 467, name: 'Сладкий перец' },
        { id: 469, name: 'Смесь проростков' },
        { id: 470, name: 'Спаржа' },
        { id: 471, name: 'Стручковая фасоль' },
        { id: 472, name: 'Томатилло' },
        { id: 473, name: 'Топинамбур' },
        { id: 474, name: 'Тыква' },
        { id: 475, name: 'Фенхель' },
        { id: 476, name: 'Хрен' },
        { id: 477, name: 'Цветная капуста' },
        { id: 478, name: 'Цукини' },
        { id: 479, name: 'Чеснок' },
        { id: 480, name: 'Ямс' },
        { id: 481, name: 'Арахис' },
        { id: 482, name: 'Бразильские орехи' },
        { id: 483, name: 'Грецкие орехи' },
        { id: 484, name: 'Каштаны' },
        { id: 485, name: 'Кедровые орехи' },
        { id: 486, name: 'Кешью' },
        { id: 487, name: 'Кокос' },
        { id: 488, name: 'Миндаль' },
        { id: 489, name: 'Мускатный орех' },
        { id: 490, name: 'Орехи' },
        { id: 491, name: 'Орехи макадамия' },
        { id: 492, name: 'Орехи пинии' },
        { id: 493, name: 'Пекан' },
        { id: 494, name: 'Фисташки' },
        { id: 495, name: 'Фундук' },
        { id: 496, name: 'Гусь' },
        { id: 497, name: 'Индейка' },
        { id: 498, name: 'Куриные шейки' },
        { id: 499, name: 'Курица' },
        { id: 500, name: 'Перепелка' },
        { id: 501, name: 'Утка' },
        { id: 502, name: 'Фазан' },
        { id: 503, name: 'Фуа-гра' },
        { id: 504, name: 'Цесарка' },
        { id: 505, name: 'Цыпленок' },
        { id: 506, name: 'Анчоусы' },
        { id: 507, name: 'Барабулька' },
        { id: 508, name: 'Баррамунди' },
        { id: 509, name: 'Белая акула' },
        { id: 510, name: 'Белуга' },
        { id: 511, name: 'Голец' },
        { id: 512, name: 'Горбуша' },
        { id: 513, name: 'Гребешки' },
        { id: 514, name: 'Дорада' },
        { id: 515, name: 'Икра' },
        { id: 516, name: 'Кальмары' },
        { id: 517, name: 'Камбала' },
        { id: 518, name: 'Каракатица' },
        { id: 519, name: 'Карась' },
        { id: 520, name: 'Карп' },
        { id: 521, name: 'Кефаль' },
        { id: 522, name: 'Килька' },
        { id: 523, name: 'Консервированный тунец в собственном соку' },
        { id: 524, name: 'Крабы' },
        { id: 525, name: 'Креветки' },
        { id: 526, name: 'Лангуст' },
        { id: 527, name: 'Лангустины' },
        { id: 528, name: 'Лобстер' },
        { id: 529, name: 'Лосось' },
        { id: 530, name: 'Макрель' },
        { id: 531, name: 'Мидии' },
        { id: 532, name: 'Миноги' },
        { id: 533, name: 'Минтай' },
        { id: 534, name: 'Мойва' },
        { id: 535, name: 'Моллюски' },
        { id: 536, name: 'Морской лещ' },
        { id: 537, name: 'Морской язык' },
        { id: 538, name: 'Окунь' },
        { id: 539, name: 'Осетрина' },
        { id: 540, name: 'Осьминог' },
        { id: 541, name: 'Палтус' },
        { id: 542, name: 'Раки' },
        { id: 543, name: 'Ракушки-венерки (вонголе)' },
        { id: 544, name: 'Сазан' },
        { id: 545, name: 'Сайда' },
        { id: 546, name: 'Сардины' },
        { id: 547, name: 'Свежие устрицы ' },
        { id: 548, name: 'Севрюга' },
        { id: 549, name: 'Сельдь' },
        { id: 550, name: 'Семга' },
        { id: 551, name: 'Сибас' },
        { id: 552, name: 'Скумбрия' },
        { id: 553, name: 'Снеппер' },
        { id: 554, name: 'Сом' },
        { id: 555, name: 'Ставрида' },
        { id: 556, name: 'Стерлядь' },
        { id: 557, name: 'Сушеные снетки' },
        { id: 558, name: 'Треска' },
        { id: 559, name: 'Тунец' },
        { id: 560, name: 'Угорь' },
        { id: 561, name: 'Фаланги краба' },
        { id: 562, name: 'Филе пикши' },
        { id: 563, name: 'Филе ската' },
        { id: 564, name: 'Форель' },
        { id: 565, name: 'Шпроты' },
        { id: 566, name: 'Щука' },
        { id: 567, name: 'Ажгон' },
        { id: 568, name: 'Амчур' },
        { id: 569, name: 'Анис (бадьян)' },
        { id: 570, name: 'Белый перец горошком' },
        { id: 571, name: 'Бульонный кубик' },
        { id: 572, name: 'Ваниль' },
        { id: 573, name: 'Васаби' },
        { id: 574, name: 'Гвоздика' },
        { id: 575, name: 'Длинный черный перец' },
        { id: 576, name: 'Заатар' },
        { id: 577, name: 'Зеленый перец горошком' },
        { id: 578, name: 'Кардамон' },
        { id: 579, name: 'Карри' },
        { id: 580, name: 'Китайские пряности «Пять специй»' },
        { id: 581, name: 'Кора дуба' },
        { id: 582, name: 'Корица' },
        { id: 583, name: 'Кумин (зира)' },
        { id: 584, name: 'Кунжутные семечки' },
        { id: 585, name: 'Куркума' },
        { id: 586, name: 'Мак' },
        { id: 587, name: 'Марокканская смесь специй' },
        { id: 588, name: 'Масала' },
        { id: 589, name: 'Паприка' },
        { id: 590, name: 'Пассифлора' },
        { id: 591, name: 'Пекарский порошок ' },
        { id: 592, name: 'Порошок мескитового дерева' },
        { id: 593, name: 'Пряности' },
        { id: 594, name: 'Розовый перец' },
        { id: 595, name: 'Салатная заправка' },
        { id: 596, name: 'Семена горчицы' },
        { id: 597, name: 'Семена кориандра' },
        { id: 598, name: 'Семена льна' },
        { id: 599, name: 'Семечки подсолнуха' },
        { id: 600, name: 'Смесь «Четыре специи»' },
        { id: 601, name: 'Смесь итальянских трав' },
        { id: 602, name: 'Смесь перцев' },
        { id: 603, name: 'Соль' },
        { id: 604, name: 'Соус хойсин' },
        { id: 605, name: 'Сушеный перец чили' },
        { id: 606, name: 'Сычуаньский перец' },
        { id: 607, name: 'Тандури' },
        { id: 608, name: 'Тмин' },
        { id: 609, name: 'Турмерик' },
        { id: 610, name: 'Харисса' },
        { id: 611, name: 'Черный душистый перец' },
        { id: 612, name: 'Черный перец горошком' },
        { id: 613, name: 'Шафран' },
        { id: 614, name: 'Адыгейский сыр' },
        { id: 615, name: 'Голландский сыр' },
        { id: 616, name: 'Голубой сыр' },
        { id: 617, name: 'Домашний сыр' },
        { id: 618, name: 'Зеленый сыр' },
        { id: 619, name: 'Имеретинский сыр' },
        { id: 620, name: 'Козий сыр' },
        { id: 621, name: 'Мягкий сыр' },
        { id: 622, name: 'Овечий сыр' },
        { id: 623, name: 'Пошехонский сыр' },
        { id: 624, name: 'Российский сыр' },
        { id: 625, name: 'Сливочный сыр' },
        { id: 626, name: 'Сыр асьяго' },
        { id: 627, name: 'Сыр базирон песто' },
        { id: 628, name: 'Сыр бри' },
        { id: 629, name: 'Сыр брынза' },
        { id: 630, name: 'Сыр буррата' },
        { id: 631, name: 'Сыр бурсен' },
        { id: 632, name: 'Сыр гауда' },
        { id: 633, name: 'Сыр горгонзола' },
        { id: 634, name: 'Сыр грана-падано' },
        { id: 635, name: 'Сыр грюйер' },
        { id: 636, name: 'Сыр дабл глостер' },
        { id: 637, name: 'Сыр дорблю' },
        { id: 638, name: 'Сыр камамбер' },
        { id: 639, name: 'Сыр камбозола' },
        { id: 640, name: 'Сыр конте' },
        { id: 641, name: 'Сыр маасдам' },
        { id: 642, name: 'Сыр манчего' },
        { id: 643, name: 'Сыр маскарпоне' },
        { id: 644, name: 'Сыр моцарелла' },
        { id: 645, name: 'Сыр надуги' },
        { id: 646, name: 'Сыр нешатель' },
        { id: 647, name: 'Сыр пармезан' },
        { id: 648, name: 'Сыр пекорино романо' },
        { id: 649, name: 'Сыр проволоне' },
        { id: 650, name: 'Сыр рикотта' },
        { id: 651, name: 'Сыр рокфор' },
        { id: 652, name: 'Сыр скаморца' },
        { id: 653, name: 'Сыр стилтон' },
        { id: 654, name: 'Сыр сулугуни' },
        { id: 655, name: 'Сыр таледжо' },
        { id: 656, name: 'Сыр тильзитер' },
        { id: 657, name: 'Сыр фета' },
        { id: 658, name: 'Сыр фетакса' },
        { id: 659, name: 'Сыр филадельфия' },
        { id: 660, name: 'Сыр фонтина' },
        { id: 661, name: 'Сыр халуми' },
        { id: 662, name: 'Сыр чеддер' },
        { id: 663, name: 'Сыр эдам' },
        { id: 664, name: 'Сыр эмменталь' },
        { id: 665, name: 'Сырная косичка' },
        { id: 666, name: 'Твердый сыр' },
        { id: 667, name: 'Тертый сыр гравьера' },
        { id: 668, name: 'Швейцарский сыр' },
        { id: 669, name: 'Шоколадный сыр' },
        { id: 670, name: 'Абрикосовое пюре' },
        { id: 671, name: 'Абрикосы' },
        { id: 672, name: 'Авокадо' },
        { id: 673, name: 'Айва' },
        { id: 674, name: 'Ананас' },
        { id: 675, name: 'Апельсины' },
        { id: 676, name: 'Арбуз' },
        { id: 677, name: 'Банановое пюре' },
        { id: 678, name: 'Бананы' },
        { id: 679, name: 'Барбарис' },
        { id: 680, name: 'Брусника' },
        { id: 681, name: 'Виноград' },
        { id: 682, name: 'Вишня' },
        { id: 683, name: 'Голубика' },
        { id: 684, name: 'Гранаты' },
    ]);
};
