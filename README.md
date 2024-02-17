# solvedac-cards

Generates solved.ac cards

## Usage

Base URL: `https://solvedac-cards-starcea.paring.moe/`

- `/profile/:handle`

  - Show solved.ac profile

  - `?size={int}`
    - Set card's height (default: 100px, valid range: 100px ~ 500px)
  - `?color={dark|light}`
    - Set card's color scheme (default: `dark`, valid value: `light`, `dark`)

## Examples (size: 200px)

![Example (starcea)](https://solvedac-cards-starcea.paring.moe/profile/starcea?size=200)
![Example (koosaga)](https://solvedac-cards-starcea.paring.moe/profile/koosaga?size=200&color=light)

## Special Thanks

[@pikokr](https://github.com/pikokr) - Server & Domain
