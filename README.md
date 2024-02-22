# solvedac-cards

Generates solved.ac cards

## Usage

Base URL: `https://solvedac-cards-starcea.paring.moe/`

- `/profile/:handle`

  Show solved.ac profile

  - `?size={int}`
    - Set card's height (default: 100px, valid range: 100px ~ 500px)
  - `?color={dark|light}`
    - Set card's color scheme (default: `dark`, valid value: `light`, `dark`)

![Example (starcea)](https://solvedac-cards-starcea.paring.moe/profile/starcea)
![Example (koosaga)](https://solvedac-cards-starcea.paring.moe/profile/koosaga?color=light)

- `/problems/:handle`

  Show tier distribution of solved problems

  - `?size={int}`
    - Set card's height (default: 200px, valid range: 200px ~ 1000px)
  - `?color={dark|light}`
    - Set card's color scheme (default: `dark`, valid value: `light`, `dark`)

![Example (starcea)](https://solvedac-cards-starcea.paring.moe/problems/starcea)
![Example (koosaga)](https://solvedac-cards-starcea.paring.moe/problems/koosaga?color=light)

- `/tags/:handle`

  Show tag tier graph

  - `?size={int}`
    - Set card's height (default: 200px, valid range: 200px ~ 1000px)
  - `?color={dark|light}`
    - Set card's color scheme (default: `dark`, valid value: `light`, `dark`)
  - `?top={boolean}`
    - Show top 8 tags instead of default tags (default: `false`, valid value: `true`, `false`)
  - `?text={boolean}`
    - Show tag name on the graph (default: `false`, valid value: `true`, `false`)

![Example (starcea)](https://solvedac-cards-starcea.paring.moe/tags/starcea)
![Example (koosaga)](https://solvedac-cards-starcea.paring.moe/tags/koosaga?color=light)
![Example (starcea, top)](https://solvedac-cards-starcea.paring.moe/tags/starcea?top=true)
![Example (koosaga, text)](https://solvedac-cards-starcea.paring.moe/tags/koosaga?text=true)

## Special Thanks

[@pikokr](https://github.com/pikokr) - Server & Domain
