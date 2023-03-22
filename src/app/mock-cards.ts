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
        description: 'Someone needs something, and a lot of it.',
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
        description: "Someone wants to avoid something.",
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
    },
    {
        cardName: 'Chase',
        description: "Everyone loves the thrill of the chase!",
        cardType: goal,
        icons: [
            '/delapouite/speed-boat.svg',
            '/caro-asercion/cloaked-figure-on-horseback.svg',
            '/quoting/biplane.svg',
            '/skoll/race-car.svg',
            '/delapouite/deer-track.svg',
            '/lorc/grab.svg',
            '/lorc/food-chain.svg',
            '/darkzaitzev/running-ninja.svg',
            '/delapouite/bug-net.svg'
        ]
    },
    {
        cardName: 'Conquest',
        description: "Capturing anything by force with a valiant effort.",
        cardType: goal,
        icons: [
            '/delapouite/flag-objective.svg',
            '/delapouite/exploding-planet.svg',
            '/quoting/bunker-assault.svg',
            '/cathelineau/annexation.svg',
            '/delapouite/trojan-horse.svg',
            '/delapouite/planet-conquest.svg',
            '/lorc/sword-clash.svg',
            '/cathelineau/occupy.svg',
            '/delapouite/charging-bull.svg'
        ]
    },
    {
        cardName: 'Delivery',
        description: "Give something to someone.",
        cardType: goal,
        icons: [
            '/delapouite/delivery-drone.svg',
            '/lorc/galleon.svg',
            '/delapouite/cardboard-box-closed.svg',
            '/delapouite/mine-wagon.svg',
            '/delapouite/cargo-ship.svg',
            '/delapouite/stork-delivery.svg',
            '/delapouite/cargo-crate.svg',
            '/delapouite/mailbox.svg',
            '/delapouite/hand-truck.svg'
        ]
    },
    {
        cardName: 'Destroy',
        description: "Whatever is standing, it won't be for long!",
        cardType: goal,
        icons: [
            '/skoll/carpet-bombing.svg',
            '/lorc/demolish.svg',
            '/lorc/pyromaniac.svg',
            '/lorc/wrecking-ball.svg',
            '/delapouite/hammer-break.svg',
            '/delapouite/death-star.svg',
            '/delapouite/ship-wreck.svg',
            '/lorc/spiky-explosion.svg',
            '/delapouite/dynamite.svg'
        ]
    },
    {
        cardName: 'Escape',
        description: "Someone wants to leave where they are.",
        cardType: goal,
        icons: [
            '/delapouite/forest-entrance.svg',
            '/delapouite/cave-entrance.svg',
            '/delapouite/evasion.svg',
            '/delapouite/fish-escape.svg',
            '/lorc/sinking-trap.svg',
            '/skoll/siren.svg',
            '/delapouite/prisoner.svg',
            '/delapouite/cage.svg',
            '/delapouite/exit-door.svg'
        ]
    },
    {
        cardName: 'Fight',
        description: "Someone is attacking or being attacked.",
        cardType: goal,
        icons: [
            '/lorc/sword-clash.svg',
            '/lorc/cannon-shot.svg',
            '/delapouite/coliseum.svg',
            '/skoll/knockout.svg',
            '/lorc/internal-injury.svg',
            '/delapouite/armor-punch.svg',
            '/delapouite/boxing-ring.svg',
            '/delapouite/shield-impact.svg',
            '/lorc/bleeding-wound.svg'
        ]
    },
    {
        cardName: 'Rescue',
        description: "Someone is in trouble and needs help!",
        cardType: goal,
        icons: [
            '/lorc/paranoia.svg',
            '/lorc/shield-reflect.svg',
            '/delapouite/lighthouse.svg',
            '/lorc/angel-outfit.svg',
            '/delapouite/life-buoy.svg',
            '/lorc/hospital-cross.svg',
            '/lorc/fire-axe.svg',
            '/delapouite/buoy.svg',
            '/delapouite/helicopter.svg'
        ]
    },
    {
        cardName: 'Steal',
        description: "Someone wants to take something that isn't thier's.",
        cardType: goal,
        icons: [
            '/lorc/paranoia.svg',
            '/lorc/shield-reflect.svg',
            '/delapouite/lighthouse.svg',
            '/lorc/angel-outfit.svg',
            '/delapouite/life-buoy.svg',
            '/lorc/hospital-cross.svg',
            '/lorc/fire-axe.svg',
            '/delapouite/buoy.svg',
            '/delapouite/helicopter.svg'
        ]
    },
    {
        cardName: 'Survive',
        description: "Do whatever it takes to survive just one more day.",
        cardType: goal,
        icons: [
            '/lorc/snowflake-2.svg',
            '/delapouite/water-bottle.svg',
            '/delapouite/life-bar.svg',
            '/lorc/wolf-howl.svg',
            '/delapouite/opened-food-can.svg',
            '/lorc/kindle.svg',
            '/delapouite/stomach.svg',
            '/delapouite/jerrycan.svg',
            '/lorc/wolf-trap.svg'
        ]
    },
    {
        cardName: 'Thrive',
        description: "Make a new home and make it grow and prosper.",
        cardType: goal,
        icons: [
            '/delapouite/castle.svg',
            '/lorc/hammer-nails.svg',
            '/lorc/wheat.svg',
            '/delapouite/well.svg',
            '/delapouite/factory-arm.svg',
            '/delapouite/lovers.svg',
            '/delapouite/stakes-fence.svg',
            '/delapouite/village.svg',
            '/delapouite/concrete-bag.svg'
        ]
    },
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
    },
    {
        cardName: 'Duality',
        description: 'Having two parts, often with opposite meanings.',
        cardType: theme,
        icons: [
            '/delapouite/multi-directions.svg',
            '/delapouite/toggles.svg',
            '/lorc/magnet.svg',
            '/delapouite/skills.svg',
            '/lorc/duality-mask.svg',
            '/delapouite/yin-yang.svg',
            '/lorc/duality.svg',
            '/delapouite/half-dead.svg',
            '/lorc/half-heart.svg'
        ]
    },
    {
        cardName: 'Exploration',
        description: 'Discover the mysteries of the world.',
        cardType: theme,
        icons: [
            '/lorc/treasure-map.svg',
            '/delapouite/lunar-module.svg',
            '/caro-asercion/mountain-climbing.svg',
            '/lorc/journey.svg',
            '/lorc/open-book.svg',
            '/lorc/scroll-unfurled.svg',
            '/delapouite/underground-cave.svg',
            '/delapouite/hole-ladder.svg',
            '/delapouite/iceberg.svg'
        ]
    },
    {
        cardName: 'Extinction',
        description: 'An extinction event is threatening all life!',
        cardType: theme,
        icons: [
            '/lorc/mushroom-cloud.svg',
            '/lorc/snowing.svg',
            '/caro-asercion/sauropod-skeleton.svg',
            '/delapouite/plague-doctor-profile.svg',
            '/lorc/evil-moon.svg',
            '/lorc/big-wave.svg',
            '/delapouite/desert.svg',
            '/lorc/meteor-impact.svg',
            '/lorc/volcano.svg'
        ]
    },
    {
        cardName: 'Fear',
        description: 'Sending chills up your spine.',
        cardType: theme,
        icons: [
            '/skoll/raise-zombie.svg',
            '/lorc/dark-squad.svg',
            '/delapouite/spooky-house.svg',
            '/delapouite/alien-egg.svg',
            '/delapouite/evil-tower.svg',
            '/delapouite/spiked-dragon-head.svg',
            '/lorc/spectre.svg',
            '/lorc/terror.svg',
            '/lorc/apple-maggot.svg'
        ]
    },
    {
        cardName: 'Forbidden',
        description: "Don't push that button.",
        cardType: theme,
        icons: [
            '/delapouite/button-finger.svg',
            '/lorc/temptation.svg',
            '/lorc/locked-chest.svg',
            '/delapouite/locked-box.svg',
            '/lorc/locked-fortress.svg',
            '/delapouite/locked-door.svg',
            '/lorc/evil-book.svg',
            '/delapouite/barrier.svg',
            '/lorc/interdiction.svg'
        ]
    },
    {
        cardName: 'Greed',
        description: "It's all about taking more than you give.",
        cardType: theme,
        icons: [
            '/lorc/top-hat.svg',
            '/delapouite/piggy-bank.svg',
            '/kier-heyl/dwarf-helmet.svg',
            '/delapouite/imperial-crown.svg',
            '/delapouite/credits-currency.svg',
            '/delapouite/take-my-money.svg',
            '/lorc/snatch.svg',
            '/delapouite/coins-pile.svg',
            '/delapouite/planet-conquest.svg'
        ]
    },
    {
        cardName: 'Home',
        description: 'Everyone wants a place to call home.',
        cardType: theme,
        icons: [
            '/delapouite/hot-meal.svg',
            '/delapouite/family-house.svg',
            '/delapouite/fireplace.svg',
            '/delapouite/bed.svg',
            '/priorblue/battery-plus.svg',
            '/delapouite/bookshelf.svg',
            '/delapouite/bathtub.svg',
            '/delapouite/heart-shield.svg',
            '/delapouite/wine-bottle.svg'
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
        cardName: 'Post-Apocalypse',
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
    },
    {
        cardName: 'Classical',
        description: "Hellenic era with magical creatures and great heroes.",
        cardType: setting,
        icons: [
            '/delapouite/coliseum.svg',
            '/lorc/hydra.svg',
            '/caro-asercion/philosopher-bust.svg',
            '/delapouite/roman-toga.svg',
            '/delapouite/caesar.svg',
            '/delapouite/aqueduct.svg',
            '/delapouite/spartan-helmet.svg',
            '/cathelineau/chariot.svg',
            '/delapouite/centaur.svg'
        ]
    },
    {
        cardName: 'Colony',
        description: "Located in a foreign land, far from civilization.",
        cardType: setting,
        icons: [
            '/delapouite/well.svg',
            '/delapouite/caravel.svg',
            '/delapouite/stakes-fence.svg',
            '/delapouite/cornucopia.svg',
            '/skoll/musket.svg',
            '/delapouite/war-bonnet.svg',
            '/delapouite/village.svg',
            '/delapouite/pilgrim-hat.svg',
            '/delapouite/wood-cabin.svg'
        ]
    },
    {
        cardName: 'Cosmic Horror',
        description: "Fear of the unknown is a powerful thing.",
        cardType: setting,
        icons: [
            '/lorc/paranoia.svg',
            '/lorc/evil-comet.svg',
            '/lorc/alien-skull.svg',
            '/delapouite/fish-monster.svg',
            '/lorc/evil-book.svg',
            '/lorc/sacrificial-dagger.svg',
            '/delapouite/brain-tentacle.svg',
            '/lorc/robe.svg',
            '/lorc/infested-mass.svg'
        ]
    },
    {
        cardName: 'Crime',
        description: "Crime never pays. Or does it?",
        cardType: setting,
        icons: [
            '/delapouite/lock-picking.svg',
            '/lorc/handcuffs.svg',
            '/delapouite/mug-shot.svg',
            '/delapouite/cigarette.svg',
            '/delapouite/finger-print.svg',
            '/delapouite/chalk-outline-murder.svg',
            '/delapouite/robber-mask.svg',
            '/delapouite/police-car.svg',
            '/delapouite/sherlock-holmes.svg'
        ]
    },
    {
        cardName: 'Fantasy',
        description: "Anything magical or supernatural.",
        cardType: setting,
        icons: [
            '/lorc/dragon-head.svg',
            '/delapouite/fire-spell-cast.svg',
            '/lorc/wing-cloak.svg',
            '/lorc/evil-fork.svg',
            '/caro-asercion/round-potion.svg',
            '/delapouite/orc-head.svg',
            '/lorc/haunting.svg',
            '/delapouite/deku-tree.svg',
            '/delapouite/fairy.svg'
        ]
    },
    {
        cardName: 'Japanese',
        description: "Follow the path of the samurai.",
        cardType: setting,
        icons: [
            '/delapouite/bamboo-fountain.svg',
            '/delapouite/kimono.svg',
            '/delapouite/samurai-helmet.svg',
            '/delapouite/teapot-leaves.svg',
            '/lorc/meditation.svg',
            '/delapouite/katana.svg',
            '/darkzaitzev/running-ninja.svg',
            '/delapouite/bonsai-tree.svg',
            '/delapouite/shinto-shrine.svg'
        ]
    },
    {
        cardName: 'Medieval',
        description: "Horseback riding and swordsmanship.",
        cardType: setting,
        icons: [
            '/delapouite/throne-king.svg',
            '/delapouite/uprising.svg',
            '/caro-asercion/frog-mouth-helm.svg',
            '/skoll/mounted-knight.svg',
            '/lorc/arrow-flights.svg',
            '/delapouite/castle.svg',
            '/lorc/cash.svg',
            '/delapouite/blacksmith.svg',
            '/lorc/sword-in-stone.svg'
        ]
    },
    {
        cardName: 'Modern',
        description: "Technology or events that are close to the real world.",
        cardType: setting,
        icons: [
            '/delapouite/satellite-communication.svg',
            '/delapouite/commercial-airplane.svg',
            '/skoll/mp5.svg',
            '/delapouite/smartphone.svg',
            '/delapouite/delivery-drone.svg',
            '/delapouite/gas-pump.svg',
            '/lorc/battle-tank.svg',
            '/delapouite/city-car.svg',
            '/lorc/light-bulb.svg'
        ]
    },
    {
        cardName: 'Pirates',
        description: "Swashbucklers sailing the seven seas for treasure!",
        cardType: setting,
        icons: [
            '/skoll/open-treasure-chest.svg',
            '/delapouite/eyepatch.svg',
            '/lorc/treasure-map.svg',
            '/delapouite/ship-wheel.svg',
            '/lorc/crossed-sabres.svg',
            '/delapouite/crow-nest.svg',
            '/delapouite/pirate-cannon.svg',
            '/lorc/parrot-head.svg',
            '/lorc/galleon.svg'
        ]
    },
    {
        cardName: 'Science Fiction',
        description: "Any futuristic speculative technology.",
        cardType: setting,
        icons: [
            '/delapouite/cryo-chamber.svg',
            '/lorc/ray-gun.svg',
            '/lorc/bubble-field.svg',
            '/delapouite/star-gate.svg',
            '/lorc/missile-mech.svg',
            '/delapouite/cyborg-face.svg',
            '/delapouite/robot-antennas.svg',
            '/delapouite/backward-time.svg',
            '/delapouite/alien-bug.svg'
        ]
    },
    {
        cardName: 'Space',
        description: "Explore the stars with rockets, space suits, and satelites.",
        cardType: setting,
        icons: [
            '/delapouite/solar-system.svg',
            '/lorc/burning-meteor.svg',
            '/delapouite/astronaut-helmet.svg',
            '/lorc/star-swirl.svg',
            '/delapouite/rocket-thruster.svg',
            '/delapouite/asteroid.svg',
            '/delapouite/habitat-dome.svg',
            '/delapouite/mars-curiosity.svg',
            '/delapouite/defense-satellite.svg'
        ]
    },
    {
        cardName: 'Steampunk',
        description: "What if everything was powered by steam?",
        cardType: setting,
        icons: [
            '/skoll/pocket-watch.svg',
            '/delapouite/corset.svg',
            '/cathelineau/iron-hulled-warship.svg',
            '/delapouite/pipes.svg',
            '/delapouite/steampunk-goggles.svg',
            '/delapouite/steam-locomotive.svg',
            '/skoll/zeppelin.svg',
            '/lorc/top-hat.svg',
            '/lorc/gears.svg'
        ]
    },
    {
        cardName: 'Vikings',
        description: "Plunder, pillage, and raze your enemies!",
        cardType: setting,
        icons: [
            '/lorc/crossed-axes.svg',
            '/lorc/hunting-horn.svg',
            '/delapouite/sverd-i-fjell.svg',
            '/delapouite/giant.svg',
            '/lorc/rune-sword.svg',
            '/lorc/rune-stone.svg',
            '/delapouite/drakkar.svg',
            '/delapouite/viking-longhouse.svg',
            '/delapouite/thor-hammer.svg'
        ]
    },
    {
        cardName: 'Western',
        description: "Folk tales about the untamed frontier.",
        cardType: setting,
        icons: [
            '/delapouite/bandit.svg',
            '/delapouite/saddle.svg',
            '/delapouite/cowboy-boot.svg',
            '/delapouite/saloon-doors.svg',
            '/delapouite/wanted-reward.svg',
            '/delapouite/booze.svg',
            '/skoll/winchester-rifle.svg',
            '/delapouite/old-wagon.svg',
            '/delapouite/war-bonnet.svg'
        ]
    },
    {
        cardName: 'Zombies',
        description: "Undead shambling corpses have taken over!",
        cardType: setting,
        icons: [
            '/lorc/dozen.svg',
            '/quoting/lost-limb.svg',
            '/skoll/raise-zombie.svg',
            '/delapouite/half-body-crawling.svg',
            '/delapouite/shambling-zombie.svg',
            '/delapouite/skull-staff.svg',
            '/lorc/deathcab.svg',
            '/lorc/cultist.svg',
            '/lorc/virus.svg'
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
        description: 'Go back to an earlier area, hopefully with something new!',
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
    },
    {
        cardName: 'Cheats',
        description: 'Include cheats that can be unlocked or discovered.',
        cardType: wildcard,
        icons: [
            '/delapouite/hand-of-god.svg',
            '/delapouite/giant.svg',
            '/delapouite/mighty-force.svg',
            '/lorc/third-eye.svg',
            '/delapouite/push.svg',
            '/lorc/sprint.svg',
            '/lorc/lift.svg',
            '/lorc/psychic-waves.svg',
            '/delapouite/invisible.svg'
        ]
    },
    {
        cardName: 'Collectibles',
        description: 'Be able to collect all sorts of interesting objects to show off!',
        cardType: wildcard,
        icons: [
            '/delapouite/bookshelf.svg',
            '/lorc/gems.svg',
            '/delapouite/trophies-shelf.svg',
            '/delapouite/stars-stack.svg',
            '/delapouite/bug-net.svg',
            '/lorc/crown-coin.svg',
            '/skoll/cement-shoes.svg',
            '/delapouite/aquarium.svg',
            '/lorc/spiral-shell.svg'
        ]
    },
    {
        cardName: 'Companion',
        description: 'You get a companion of some kind.',
        cardType: wildcard,
        icons: [
            '/delapouite/labrador-head.svg',
            '/lorc/paw-heart.svg',
            '/delapouite/three-friends.svg',
            '/delapouite/companion-cube.svg',
            '/lorc/surrounded-shield.svg',
            '/lorc/rally-the-troops.svg',
            '/lorc/all-for-one.svg',
            '/delapouite/healing.svg',
            '/lorc/pointing.svg'
        ]
    },
    {
        cardName: 'Cooking',
        description: 'Add a cooking mini-game.',
        cardType: wildcard,
        icons: [
            '/delapouite/hot-meal.svg',
            '/delapouite/eating.svg',
            '/delapouite/noodles.svg',
            '/delapouite/camp-cooking-pot.svg',
            '/delapouite/coffee-cup.svg',
            '/delapouite/marshmallows.svg',
            '/delapouite/sandwich.svg',
            '/lorc/pie-slice.svg',
            '/darkzaitzev/fish-cooked.svg'
        ]
    },
    {
        cardName: 'Crafting',
        description: 'Include some ability to create your own items.',
        cardType: wildcard,
        icons: [
            '/delapouite/shoulder-armor.svg',
            '/lorc/sword-smithing.svg',
            '/caro-asercion/sewing-machine.svg',
            '/delapouite/mechanic-garage.svg',
            '/lorc/stone-crafting.svg',
            '/heavenly-dog/defensive-wall.svg',
            '/lorc/mailed-fist.svg',
            '/delapouite/crafting.svg',
            '/delapouite/wooden-pier.svg'
        ]
    },
    {
        cardName: 'Currency',
        description: 'There is some form of currency being used.',
        cardType: wildcard,
        icons: [
            '/lorc/ringing-bell.svg',
            '/delapouite/banknote.svg',
            '/lorc/gems.svg',
            '/delapouite/receive-money.svg',
            '/delapouite/nano-bot.svg',
            '/lorc/screw.svg',
            '/lorc/bullets.svg',
            '/delapouite/water-gallon.svg',
            '/delapouite/bottle-cap.svg',
        ]
    },
    {
        cardName: 'Customization',
        description: 'Be able to customize something and give it new looks or stats.',
        cardType: wildcard,
        icons: [
            '/delapouite/skills.svg',
            '/delapouite/nose-side.svg',
            '/delapouite/paint-bucket.svg',
            '/delapouite/cyber-eye.svg',
            '/delapouite/switch-weapon.svg',
            '/delapouite/steering-wheel.svg',
            '/delapouite/mustache.svg',
            '/delapouite/leapfrog.svg',
            '/lorc/trousers.svg'
        ]
    },
    {
        cardName: 'Destructible',
        description: 'Make something able to collapse or explode!',
        cardType: wildcard,
        icons: [
            '/lorc/tower-fall.svg',
            '/delapouite/hammer-break.svg',
            '/delapouite/castle-ruins.svg',
            '/delapouite/falling-rocks.svg',
            '/quoting/damaged-house.svg',
            '/delapouite/ancient-ruins.svg',
            '/skoll/breaking-chain.svg',
            '/lorc/crumbling-ball.svg',
            '/lorc/bright-explosion.svg'
        ]
    },
    {
        cardName: 'Diegetic',
        description: 'The UI / HUD exists in the game world.',
        cardType: wildcard,
        icons: [
            '/lorc/treasure-map.svg',
            '/delapouite/binoculars.svg',
            '/delapouite/life-bar.svg',
            '/delapouite/speedometer.svg',
            '/lorc/folded-paper.svg',
            '/delapouite/watch.svg',
            '/skoll/talk.svg',
            '/delapouite/reload-gun-barrel.svg',
            '/lorc/compass.svg'
        ]
    },
    {
        cardName: 'Fast Travel',
        description: 'Have some way to travel quickly through the game world.',
        cardType: wildcard,
        icons: [
            '/delapouite/speed-boat.svg',
            '/delapouite/plane-wing.svg',
            '/lorc/magic-portal.svg',
            '/caro-asercion/subway-train.svg',
            '/delapouite/truck.svg',
            '/lorc/teleport.svg',
            '/delapouite/elephant.svg',
            '/delapouite/elevator.svg',
            '/caro-asercion/bus-stop.svg'
        ]
    },
    {
        cardName: 'Fishing',
        description: 'Pull up fish and occasionally treasure!',
        cardType: wildcard,
        icons: [
            '/delapouite/boat-fishing.svg',
            '/delapouite/fishing-lure.svg',
            '/delapouite/shark-bite.svg',
            '/delapouite/spearfishing.svg',
            '/lorc/fishing-net.svg',
            '/lorc/triton-head.svg',
            '/various-artists/salmon.svg',
            '/delapouite/fishing-pole.svg',
            '/lorc/food-chain.svg'
        ]
    },
    {
        cardName: 'Fog',
        description: 'Dense fog limits your view.',
        cardType: wildcard,
        icons: [
            '/delapouite/light-projector.svg',
            '/delapouite/lighthouse.svg',
            '/skoll/sight-disabled.svg',
            '/skoll/evil-eyes.svg',
            '/delapouite/fog.svg',
            '/delapouite/street-light.svg',
            '/lorc/monster-grasp.svg',
            '/delapouite/flashlight.svg',
            '/delapouite/tightrope.svg'
        ]
    },
    {
        cardName: 'Level Up',
        description: 'Be able to upgrade something.',
        cardType: wildcard,
        icons: [
            '/delapouite/jump-across.svg',
            '/delapouite/upgrade.svg',
            '/delapouite/family-house.svg',
            '/darkzaitzev/acrobatic.svg',
            '/lorc/sprint.svg',
            '/delapouite/team-upgrade.svg',
            '/lorc/muscle-up.svg',
            '/delapouite/police-target.svg',
            '/lorc/brain.svg'
        ]
    },
    {
        cardName: 'Leviathan',
        description: 'Scale something up so drastically that your jaw drops!',
        cardType: wildcard,
        icons: [
            '/delapouite/giant.svg',
            '/lorc/big-wave.svg',
            '/lorc/paranoia.svg',
            '/lorc/stomp.svg',
            '/lorc/dinosaur-rex.svg',
            '/delapouite/giant-squid.svg',
            '/delapouite/kraken-tentacle.svg',
            '/delapouite/iceberg.svg',
            '/delapouite/koholint-egg.svg'
        ]
    },
    {
        cardName: 'Limited',
        description: 'A resource / ability is limited further in some way.',
        cardType: wildcard,
        icons: [
            '/lorc/batteries.svg',
            '/sbed/weight-crush.svg',
            '/delapouite/backpack.svg',
            '/delapouite/suitcase.svg',
            '/delapouite/opened-food-can.svg',
            '/delapouite/water-flask.svg',
            '/lorc/recycle.svg',
            '/delapouite/machine-gun-magazine.svg',
            '/lorc/trade.svg'
        ]
    },
    {
        cardName: 'Multitool',
        description: 'One tool or weapon with many uses.',
        cardType: wildcard,
        icons: [
            '/delapouite/tomahawk.svg',
            '/delapouite/swiss-army-knife.svg',
            '/lorc/whip.svg',
            '/lorc/hammer-nails.svg',
            '/delapouite/chainsaw.svg',
            '/delapouite/switch-weapon.svg',
            '/lorc/bouncing-sword.svg',
            '/delapouite/armored-boomerang.svg',
            '/delapouite/crowbar.svg'
        ]
    },
    {
        cardName: 'Mute',
        description: 'No talking or reading. Just atmosphere.',
        cardType: wildcard,
        icons: [
            '/delapouite/musical-notes.svg',
            '/delapouite/silenced.svg',
            '/delapouite/mute.svg',
            '/delapouite/secret-book.svg',
            '/lorc/inner-self.svg',
            '/lorc/swan-breeze.svg',
            '/lorc/silence.svg',
            '/caro-asercion/birch-trees.svg',
            '/caro-asercion/windchimes.svg'
        ]
    },
    {
        cardName: 'My Name Is',
        description: 'Let the player name their character.',
        cardType: wildcard,
        icons: [
            '/delapouite/id-card.svg',
            '/delapouite/skills.svg',
            '/delapouite/discussion.svg',
            '/delapouite/passport.svg',
            '/delapouite/notebook.svg',
            '/caro-asercion/boarding-pass.svg',
            '/delapouite/mug-shot.svg',
            '/caro-asercion/subway-pass.svg',
            '/delapouite/morgue-feet.svg'
        ]
    },
    {
        cardName: 'New Game+',
        description: 'New content that is only accessible after beating the game.',
        cardType: wildcard,
        icons: [
            '/delapouite/bolt-spell-cast.svg',
            '/lorc/divergence.svg',
            '/delapouite/target-prize.svg',
            '/skoll/open-treasure-chest.svg',
            '/delapouite/magic-axe.svg',
            '/delapouite/puzzle.svg',
            '/lorc/lightning-bow.svg',
            '/lorc/strong.svg',
            '/delapouite/upgrade.svg'
        ]
    },
    {
        cardName: 'One Life',
        description: 'One chance, then the game restarts.',
        cardType: wildcard,
        icons: [
            '/skoll/knockout.svg',
            '/lorc/internal-injury.svg',
            '/lorc/internal-organ.svg',
            '/quoting/lost-limb.svg',
            '/lorc/life-in-the-balance.svg',
            '/lorc/body-swapping.svg',
            '/delapouite/life-bar.svg',
            '/lorc/decapitation.svg',
            '/delapouite/healing.svg'
        ]
    },
    {
        cardName: 'Overgrown',
        description: 'Part of a level has been taken over by nature.',
        cardType: wildcard,
        icons: [
            '/delapouite/high-grass.svg',
            '/delapouite/stump-regrowth.svg',
            '/delapouite/ancient-ruins.svg',
            '/lorc/raining.svg',
            '/lorc/recycle.svg',
            '/delapouite/river.svg',
            '/lorc/dinosaur-bones.svg',
            '/delapouite/plant-roots.svg',
            '/lorc/fossil.svg'
        ]
    },
    {
        cardName: 'Party',
        description: 'Control multiple characters.',
        cardType: wildcard,
        icons: [
            '/lorc/dozen.svg',
            '/delapouite/three-friends.svg',
            '/lorc/rally-the-troops.svg',
            '/lorc/minions.svg',
            '/delapouite/hand-of-god.svg',
            '/lorc/divergence.svg',
            '/delapouite/round-table.svg',
            '/delapouite/school-of-fish.svg',
            '/delapouite/team-downgrade.svg'
        ]
    },
    {
        cardName: 'Pet Rock',
        description: 'Make an inanimate object sentient and have character.',
        cardType: wildcard,
        icons: [
            '/skoll/race-car.svg',
            '/john-colburn/pistol-gun.svg',
            '/delapouite/stone-bust.svg',
            '/lorc/pumpkin-lantern.svg',
            '/lorc/rock.svg',
            '/delapouite/sunflower.svg',
            '/delapouite/katana.svg',
            '/lorc/wooden-door.svg',
            '/delapouite/deku-tree.svg'
        ]
    },
    {
        cardName: 'Playable Menu',
        description: 'The main menu is also playable.',
        cardType: wildcard,
        icons: [
            '/delapouite/pool-dive.svg',
            '/delapouite/toggles.svg',
            '/delapouite/hamburger-menu.svg',
            '/delapouite/exit-door.svg',
            '/delapouite/move.svg',
            '/lorc/magic-portal.svg',
            '/delapouite/settings-knobs.svg',
            '/delapouite/laptop.svg',
            '/skoll/retro-controller.svg'
        ]
    },
    {
        cardName: 'Power-ups',
        description: 'Add temporary benefits / abilities to be obtained.',
        cardType: wildcard,
        icons: [
            '/delapouite/jump-across.svg',
            '/delapouite/shield-impact.svg',
            '/delapouite/healing.svg',
            '/delapouite/speedometer.svg',
            '/lorc/boots.svg',
            '/delapouite/strong-man.svg',
            '/lorc/grapple.svg',
            '/lorc/feather.svg',
            '/lorc/super-mushroom.svg'
        ]
    },
    {
        cardName: 'Procedural',
        description: 'Randomly generate something in your game.',
        cardType: wildcard,
        icons: [
            '/delapouite/mountain-road.svg',
            '/delapouite/skills.svg',
            '/delapouite/rolling-dices.svg',
            '/delapouite/rule-book.svg',
            '/lorc/cubes.svg',
            '/delapouite/crossroad.svg',
            '/lorc/divergence.svg',
            '/delapouite/floating-platforms.svg',
            '/delapouite/palette.svg'
        ]
    },
    {
        cardName: 'Punny',
        description: 'Include your favorite pun. Please just one, though.',
        cardType: wildcard,
        icons: [
            '/cathelineau/tree-face.svg',
            '/lorc/grapes.svg',
            '/delapouite/3d-stairs.svg',
            '/delapouite/throwing-ball.svg',
            '/delapouite/photo-camera.svg',
            '/delapouite/calendar.svg',
            '/delapouite/windmill.svg',
            '/lorc/wind-slap.svg',
            '/lorc/coffee-mug.svg'
        ]
    },
    {
        cardName: 'Real-World Time',
        description: 'Your game uses real-world time in some way.',
        cardType: wildcard,
        icons: [
            '/delapouite/family-tree.svg',
            '/delapouite/tree-growth.svg',
            '/delapouite/camp-cooking-pot.svg',
            '/delapouite/player-time.svg',
            '/delapouite/finish-line.svg',
            '/delapouite/night-sleep.svg',
            '/delapouite/ages.svg',
            '/lorc/orbital.svg',
            '/lorc/snowing.svg'
        ]
    },
    {
        cardName: 'Secret',
        description: "There's a secret hidden somewhere.",
        cardType: wildcard,
        icons: [
            '/lorc/treasure-map.svg',
            '/lorc/sinking-trap.svg',
            '/lorc/wolf-trap.svg',
            '/delapouite/metal-detector.svg',
            '/lorc/land-mine.svg',
            '/delapouite/secret-door.svg',
            '/lorc/hidden.svg',
            '/delapouite/lock-spy.svg',
            '/delapouite/secret-book.svg'
        ]
    },
    {
        cardName: 'Shortcut',
        description: "Include a shortcut for perceptive players.",
        cardType: wildcard,
        icons: [
            '/delapouite/underground-cave.svg',
            '/delapouite/open-gate.svg',
            '/delapouite/exit-door.svg',
            '/delapouite/dig-hole.svg',
            '/delapouite/trail.svg',
            '/lorc/magic-gate.svg',
            '/delapouite/path-distance.svg',
            '/delapouite/secret-door.svg',
            '/delapouite/dungeon-gate.svg'
        ]
    },
    {
        cardName: 'Splash Screen',
        description: "Include a charming audio jingle and logo intro.",
        cardType: wildcard,
        icons: [
            '/delapouite/sound-on.svg',
            '/delapouite/entry-door.svg',
            '/delapouite/theater-curtains.svg',
            '/lorc/drama-masks.svg',
            '/delapouite/video-conference.svg',
            '/delapouite/button-finger.svg',
            '/delapouite/fast-forward-button.svg',
            '/viscious-speed/abstract-062.svg',
            '/skoll/sound-waves.svg'
        ]
    },
    {
        cardName: 'Stalker',
        description: "Someone or something is following you.",
        cardType: wildcard,
        icons: [
            '/delapouite/hunter-eyes.svg',
            '/lorc/paranoia.svg',
            '/lorc/shadow-follower.svg',
            '/skoll/footsteps.svg',
            '/lorc/werewolf.svg',
            '/lorc/run.svg',
            '/delapouite/tiger-head.svg',
            '/delapouite/human-target.svg',
            '/delapouite/sniffing-dog.svg'
        ]
    },
    {
        cardName: 'Talking',
        description: "Be able to talk to people, creatures, or things.",
        cardType: wildcard,
        icons: [
            '/delapouite/tribunal-jury.svg',
            '/lorc/conversation.svg',
            '/lorc/checkbox-tree.svg',
            '/lorc/shouting.svg',
            '/lorc/divergence.svg',
            '/delapouite/walkie-talkie.svg',
            '/lorc/parrot-head.svg',
            '/delapouite/convince.svg',
            '/delapouite/team-idea.svg'
        ]
    },
    {
        cardName: 'Taming',
        description: "Enemies become friends!",
        cardType: wildcard,
        icons: [
            '/delapouite/health-potion.svg',
            '/delapouite/take-my-money.svg',
            '/delapouite/three-friends.svg',
            '/delapouite/hot-meal.svg',
            '/delapouite/dart.svg',
            '/lorc/love-injection.svg',
            '/caro-asercion/prank-glasses.svg',
            '/lorc/cut-palm.svg',
            '/delapouite/honey-jar.svg'
        ]
    },
    {
        cardName: 'Time Passage',
        description: "Include a waiting mechanic to pass time.",
        cardType: wildcard,
        icons: [
            '/delapouite/watch.svg',
            '/skoll/read.svg',
            '/delapouite/coffee-cup.svg',
            '/delapouite/sleeping-bag.svg',
            '/lorc/campfire.svg',
            '/delapouite/tv-remote.svg',
            '/delapouite/sofa.svg',
            '/lorc/meditation.svg',
            '/delapouite/alarm-clock.svg'
        ]
    },
    {
        cardName: 'Weather',
        description: "Have some kind of weather.",
        cardType: wildcard,
        icons: [
            '/lorc/raining.svg',
            '/lorc/snowing.svg',
            '/lorc/lightning-tree.svg',
            '/lorc/earth-spit.svg',
            '/lorc/wave-crest.svg',
            '/lorc/tornado.svg',
            '/lorc/volcano.svg',
            '/delapouite/sandstorm.svg',
            '/lorc/flower-twirl.svg'
        ]
    }
];