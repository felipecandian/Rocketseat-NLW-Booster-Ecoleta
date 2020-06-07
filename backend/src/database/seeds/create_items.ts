import Knex from 'knex';

export async function seed(knex: Knex){
 await knex('items').insert([
    {title: 'Lâmpadas', image: 'lampada.svg' },
    {title: 'Pilhas e baterias', image: 'baterias.svg' },
    {title: 'Papeis e papelão', image: 'papeis-papelao.svg' },
    {title: 'Resíduos e Eletronicos', image: 'eletronicos.svg' },
    {title: 'Resíduos e Orgânicos', image: 'organicos.svg' },
    {title: 'Óleo de cozinha', image: 'oleo.svg' },
  ])
}