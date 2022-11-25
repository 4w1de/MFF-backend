/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('SECTIONS').del();
    await knex('SECTIONS').insert([
        { id: 1, name: 'Салаты' },
        { id: 2, name: 'Торты домашние' },
        { id: 3, name: 'Супы первые блюда' },
        { id: 4, name: 'Выпечка' },
        { id: 5, name: 'Способы приготовления' },
        { id: 6, name: 'Вторые горячие блюда' },
        { id: 7, name: 'Закуски' },
        { id: 8, name: 'Тесто домашнее ' },
        { id: 9, name: 'Бутерброды' },
        { id: 10, name: 'Напитки' },
        { id: 11, name: 'Гарниры' },
        { id: 12, name: 'Фрукты' },
        { id: 13, name: 'Грибы' },
        { id: 14, name: 'Десерты' },
        { id: 15, name: 'Мясо и мясопродукты' },
        { id: 16, name: 'Национальные кухни' },
        { id: 17, name: 'Соусы' },
        { id: 18, name: 'Праздничный стол' },
        { id: 19, name: 'Овощи' },
    ]);
};
