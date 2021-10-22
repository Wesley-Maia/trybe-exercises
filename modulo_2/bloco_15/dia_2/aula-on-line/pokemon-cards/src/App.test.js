import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

const pokemonMock = {
  cards: [
    {
      "id": "xyp-XY174",
      "name": "Pikachu-EX",
      "nationalPokedexNumber": 25,
      "imageUrl": "https://images.pokemontcg.io/xyp/XY174.png",
      "imageUrlHiRes": "https://images.pokemontcg.io/xyp/XY174_hires.png",
      "types": [
        "Lightning"
      ],
      "supertype": "Pokémon",
      "subtype": "EX",
      "hp": "130",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "XY174",
      "artist": "5ban Graphics",
      "rarity": "Common",
      "series": "XY",
      "set": "XY Black Star Promos",
      "setCode": "xyp",
      "text": [
        "When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
      ],
      "attacks": [
        {
          "cost": [
            "Lightning",
            "Colorless"
          ],
          "name": "Thunder Shock",
          "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
          "damage": "30",
          "convertedEnergyCost": 2
        },
        {
          "cost": [
            "Lightning",
            "Lightning",
            "Colorless"
          ],
          "name": "Mega Thunderbolt",
          "text": "Discard all Energy attached to this Pokémon.",
          "damage": "160",
          "convertedEnergyCost": 3
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ]
    }
  ]
}

describe('App.js tests', () => {
  test('Exibe a logo e o texto de pesquisar', () => {
    render(<App />);

    const logoImg = screen.getByRole('img');
    expect(logoImg).toBeInTheDocument();

    const h3Text = screen.getByRole('heading', {
      name: /pokemon/i
    });
    expect(h3Text).toBeInTheDocument();
  });

  test('Exibe o input e o botão', () => {
    render(<App />);

    const inputPokemon = screen.getByRole('textbox');
    expect(inputPokemon).toBeInTheDocument();

    const searchButton = screen.getByRole('button', {
      name: /pesquisar/i
    });
    expect(searchButton).toBeInTheDocument();
  });

  test('Verifica se o input recebe entrada de dados', () => {
    render(<App />);

    const inputPokemon = screen.getByRole('textbox');
    userEvent.type(inputPokemon, 'oi');

    expect(inputPokemon).toHaveValue('oi');
  });

  test('Aparece o card quando pesquisado o pokemon', async () => {
    global.fetch = jest.fn().mockImplementation( // mockResolvedValue()
      function (url) {
        return Promise.resolve({
          json: () => Promise.resolve(pokemonMock)
        })
      }
    )

    render(<App />);

    const inputPokemon = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', {
      name: /pesquisar/i
    });

    userEvent.type(inputPokemon, 'pikachu');
    userEvent.click(searchButton);

    const pikachuName = await screen.findByText('Pikachu-EX')
    expect(pikachuName).toBeInTheDocument();
  });
});

// Anotações implementação FETCH

// fetch (url)
//   .then((response) => response.json())
//   .then(res => console.log(res))

// fetch(url) {
//   // faz uma chamada a api
//   // recebe os dados
//   // converte esses dados pra json 
// }

// function (url) {
//   return Promise.resolve({
//     json: () => Promise.resolve(pokemonMock)
//   })
// }
