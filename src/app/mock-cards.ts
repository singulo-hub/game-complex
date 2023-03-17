import { ICard } from './models/card';
import { Goal } from './models/goal';
import { Setting } from './models/setting';
import { Theme } from './models/theme';
import { Wildcard } from './models/wildcard';

let goal = new Goal();
let theme = new Theme();
let wildcard = new Wildcard();
let setting = new Setting();

export const CARD: ICard =
{
    cardName: 'Placeholder',
    icons: ['/lorc/uncertainty.svg'],
    description: 'You should probably change this.',
    cardType: goal
};

export const GOALS: ICard[] = [
    {
        cardName: 'Acquire',
        description: 'You need to get something, maybe even alot of it.',
        cardType: goal,
        icons: [
            '/lorc/battle-tank.svg',
            '/delapouite/medallist.svg',
            '/lorc/dozen.svg',
            '/delapouite/spell-book.svg',
            '/delapouite/coins-pile.svg',
            '/lorc/zeus-sword.svg',
            '/delapouite/animal-hide.svg',
            '/lorc/stigmata.svg',
            '/delapouite/conqueror.svg'
        ]
    },
    {
        cardName: 'Avoid',
        description: "You don't want to be near something.",
        cardType: goal,
        icons: [
            '/felbrigg/dodge.svg',
            '/delapouite/boulder-dash.svg',
            '/lorc/dinosaur-rex.svg',
            '/delapouite/detour.svg',
            '/lorc/tripwire.svg',
            '/delapouite/avoidance.svg',
            '/lorc/dodging.svg',
            '/delapouite/jump-across.svg',
            '/delapouite/pool-dive.svg'
        ]
    },
    {
        cardName: 'Build',
        description: "It's cool because you made it.",
        cardType: goal,
        icons: [
            '/lorc/dozen.svg',
            '/delapouite/crane.svg',
            '/delapouite/concrete-bag.svg',
            '/lorc/tinker.svg',
            '/caro-asercion/paper-crane.svg',
            '/delapouite/mechanic-garage.svg',
            '/lorc/circuitry.svg',
            '/lorc/hammer-nails.svg',
            '/lorc/anvil-impact.svg'
        ]
    }
];

export const THEMES: ICard[] = [
    {
        cardName: 'Betrayal',
        description: 'Someone has been betrayed!',
        cardType: theme,
        icons: [
            '/lorc/deathcab.svg',
            '/delapouite/broken-axe.svg',
            '/lorc/screaming.svg',
            '/delapouite/gps.svg',
            '/lorc/maze.svg',
            '/lorc/skeleton-inside.svg',
            '/lorc/paranoia.svg',
            '/lorc/suspicious.svg',
            '/lorc/backstab.svg'
        ]
    },
    {
        cardName: 'Chance',
        description: '"Just one more roll!"',
        cardType: theme,
        icons: [
            '/caro-asercion/coinflip.svg',
            '/caro-asercion/slot-machine.svg',
            '/delapouite/coins.svg',
            '/delapouite/rolling-dice-cup.svg',
            '/delapouite/dice-twenty-faces-one.svg',
            '/skoll/bullseye.svg',
            '/skoll/revolver.svg',
            '/faithtoken/card-random.svg',
            '/delapouite/expense.svg'
        ]
    },
    {
        cardName: 'Cost',
        description: 'Everything has a price.',
        cardType: theme,
        icons: [
            '/delapouite/price-tag.svg',
            '/lorc/frankenstein-creature.svg',
            '/lorc/life-in-the-balance.svg',
            '/lorc/bleeding-wound.svg',
            '/delapouite/devil-mask.svg',
            '/delapouite/locked-box.svg',
            '/lorc/imprisoned.svg',
            '/lorc/deathcab.svg',
            '/delapouite/half-dead.svg'
        ]
    }
];

export const SETTINGS: ICard[] = [
    {
        cardName: 'A E S T H E T I C',
        description: "Nostalgic 80's vibes celebrating a time past.",
        cardType: setting,
        icons: [
            '/delapouite/headphones.svg',
            '/skoll/f1-car.svg',
            '/delapouite/island.svg',
            '/delapouite/sunglasses.svg',
            '/delapouite/audio-cassette.svg',
            '/delapouite/striped-sun.svg',
            '/delapouite/full-motorcycle-helmet.svg',
            '/delapouite/gear-stick-pattern.svg',
            '/lorc/mesh-ball.svg'
        ]
    },
    {
        cardName: 'Ancient',
        description: 'The oldest kingdoms in existence.',
        cardType: setting,
        icons: [
            '/delapouite/oasis.svg',
            '/delapouite/nefertiti.svg',
            '/delapouite/egyptian-pyramids.svg',
            '/delapouite/bastet.svg',
            '/delapouite/cleopatra.svg',
            '/delapouite/pharoah.svg',
            '/delapouite/egyptian-sphinx.svg',
            '/delapouite/horus.svg',
            '/delapouite/anubis.svg'
        ]
    },
    {
        cardName: 'Apocalypse',
        description: "The world has already ended, and you're stuck in it.",
        cardType: setting,
        icons: [
            '/delapouite/lock-picking.svg',
            '/delapouite/heart-armor.svg',
            '/delapouite/robber.svg',
            '/delapouite/stomach.svg',
            '/delapouite/slipknot.svg',
            '/lorc/cobweb.svg',
            '/delapouite/water-flask.svg',
            '/delapouite/desert-camp.svg',
            '/lorc/backstab.svg'
        ]
    }
];

export const WILDCARDS: ICard[] = [
    {
        cardName: 'Arcade',
        description: 'Include a small arcade game.',
        cardType: wildcard,
        icons: [
            '/delapouite/floating-platforms.svg',
            '/delapouite/finish-line.svg',
            '/delapouite/joystick.svg',
            '/delapouite/alien-bug.svg',
            '/delapouite/sonic-shoes.svg',
            '/lorc/super-mushroom.svg',
            '/delapouite/pinball-flipper.svg',
            '/delapouite/asteroid.svg',
            '/delapouite/ufo.svg'
        ]
    },
    {
        cardName: 'Backtracking',
        description: 'Go back to where you were before.',
        cardType: wildcard,
        icons: [
            '/delapouite/drawbridge.svg',
            '/lorc/return-arrow.svg',
            '/delapouite/player-previous.svg',
            '/delapouite/backward-time.svg',
            '/lorc/corner-explosion.svg',
            '/lorc/broken-shield.svg',
            '/delapouite/clockwise-rotation.svg',
            '/delapouite/open-gate.svg',
            '/lorc/lever.svg'
        ]
    },
    {
        cardName: 'Breathtaking',
        description: 'Have a scenic vista somewhere.',
        cardType: wildcard,
        icons: [
            '/delapouite/viking-church.svg',
            '/delapouite/binoculars.svg',
            '/lorc/spiky-eclipse.svg',
            '/delapouite/greek-sphinx.svg',
            '/delapouite/saint-basil-cathedral.svg',
            '/delapouite/castle.svg',
            '/delapouite/forest.svg',
            '/lorc/peaks.svg',
            '/delapouite/boat-horizon.svg'
        ]
    }
];