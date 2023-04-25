import { IIdea } from './models/idea';
import { GoalType } from './models/idea-types/goal';
import { SettingType } from './models/idea-types/setting';
import { ThemeType } from './models/idea-types/theme';
import { WildcardType } from './models/idea-types/wildcard';

export let goalType = new GoalType();
export let themeType = new ThemeType();
export let wildcardType = new WildcardType();
export let settingType = new SettingType();

export const IDEA: IIdea =
{
    ideaName: 'Placeholder',
    icons: ['/lorc/uncertainty.svg'],
    description: 'You should probably change this.',
    ideaType: goalType
};

export const THEMES: IIdea[] = [
    {
        ideaName: 'Beauty',
        description: 'The world is beautiful.',
        ideaType: themeType,
        icons: [
            '/lorc/rainbow-star.svg',
            '/lorc/flowers.svg',
            '/lorc/night-sky.svg',
            '/lorc/lightning-tree.svg',
            '/lorc/sunrise.svg'
        ]
    },
    {
        ideaName: 'Betrayal',
        description: 'Someone has been betrayed!',
        ideaType: themeType,
        icons: [
            '/lorc/deathcab.svg',
            '/delapouite/broken-axe.svg',
            '/lorc/screaming.svg',
            '/delapouite/gps.svg',
            '/lorc/maze.svg'
        ]
    },
    {
        ideaName: 'Chance',
        description: '"Just one more roll!"',
        ideaType: themeType,
        icons: [
            '/caro-asercion/coinflip.svg',
            '/caro-asercion/slot-machine.svg',
            '/delapouite/coins.svg',
            '/delapouite/rolling-dice-cup.svg',
            '/delapouite/dice-twenty-faces-one.svg'
        ]
    },
    {
        ideaName: 'Cost',
        description: 'Everything has a price.',
        ideaType: themeType,
        icons: [
            '/delapouite/price-tag.svg',
            '/lorc/frankenstein-creature.svg',
            '/lorc/life-in-the-balance.svg',
            '/lorc/bleeding-wound.svg',
            '/delapouite/devil-mask.svg'
        ]
    },
    {
        ideaName: 'Duality',
        description: 'Having two parts, often with opposite meanings.',
        ideaType: themeType,
        icons: [
            '/delapouite/toggles.svg',
            '/lorc/magnet.svg',
            '/delapouite/skills.svg',
            '/lorc/duality-mask.svg',
            '/delapouite/multi-directions.svg'
        ]
    },
    {
        ideaName: 'Fear',
        description: 'Sending chills up your spine.',
        ideaType: themeType,
        icons: [
            '/skoll/raise-zombie.svg',
            '/lorc/dark-squad.svg',
            '/delapouite/spooky-house.svg',
            '/delapouite/alien-egg.svg',
            '/delapouite/evil-tower.svg'
        ]
    },
    {
        ideaName: 'Forbidden',
        description: "Don't push that button.",
        ideaType: themeType,
        icons: [
            '/delapouite/button-finger.svg',
            '/lorc/temptation.svg',
            '/lorc/locked-chest.svg',
            '/delapouite/locked-box.svg',
            '/lorc/locked-fortress.svg'
        ]
    },
    {
        ideaName: 'Greed',
        description: "It's all about taking more than you give.",
        ideaType: themeType,
        icons: [
            '/lorc/top-hat.svg',
            '/delapouite/piggy-bank.svg',
            '/kier-heyl/dwarf-helmet.svg',
            '/delapouite/imperial-crown.svg',
            '/delapouite/credits-currency.svg'
        ]
    },
    {
        ideaName: 'Home',
        description: 'Everyone wants a place to call home.',
        ideaType: themeType,
        icons: [
            '/delapouite/hot-meal.svg',
            '/delapouite/family-house.svg',
            '/delapouite/fireplace.svg',
            '/delapouite/bed.svg',
            '/priorblue/battery-plus.svg'
        ]
    },
    {
        ideaName: 'Power',
        description: 'UNLIMITED POWER!',
        ideaType: themeType,
        icons: [
            '/delapouite/power-ring.svg',
            '/lorc/power-lightning.svg',
            '/lorc/embrassed-energy.svg',
            '/delapouite/imperial-crown.svg',
            '/cathelineau/annexation.svg'
        ]
    },
    {
        ideaName: 'Justice',
        description: 'People should be treated fairly.',
        ideaType: themeType,
        icons: [
            '/lorc/scales.svg',
            '/lorc/hammer-drop.svg',
            '/delapouite/handcuffed.svg',
            '/delapouite/congress.svg',
            '/delapouite/prisoner.svg'
        ]
    },
    {
        ideaName: 'Life & Death',
        description: 'Make life what you make it.',
        ideaType: themeType,
        icons: [
            '/delapouite/baby-face.svg',
            '/delapouite/ages.svg',
            '/delapouite/family-tree.svg',
            '/delapouite/person-in-bed.svg',
            '/delapouite/graveyard.svg'
        ]
    },
    {
        ideaName: 'Loyalty',
        description: 'Devotion to a particular person, duty, or cause.',
        ideaType: themeType,
        icons: [
            '/lorc/crown.svg',
            '/lorc/prayer.svg',
            '/lorc/rally-the-troops.svg',
            '/delapouite/three-friends.svg',
            '/lorc/shield-reflect.svg'
        ]
    },
    {
        ideaName: 'Change',
        description: 'Times are changing.',
        ideaType: themeType,
        icons: [
            '/delapouite/pylon.svg',
            '/delapouite/modern-city.svg',
            '/delapouite/coronation.svg',
            '/delapouite/conqueror.svg',
            '/lorc/rocket-flight.svg'
        ]
    },
    {
        ideaName: 'Corruption',
        description: 'Everybody has a price.',
        ideaType: themeType,
        icons: [
            '/delapouite/receive-money.svg',
            '/lorc/backstab.svg',
            '/delapouite/armor-punch.svg',
            '/delapouite/dungeon-light.svg',
            '/delapouite/convince.svg'
        ]
    },
    {
        ideaName: 'War',
        description: 'War never changes.',
        ideaType: themeType,
        icons: [
            '/lorc/gas-mask.svg',
            '/delapouite/planet-conquest.svg',
            '/cathelineau/annexation.svg',
            '/delapouite/sword-brandish.svg',
            '/lorc/missile-swarm.svg'
        ]
    },
    {
        ideaName: 'Love',
        description: 'Emotional bonds of passion and intimacy.',
        ideaType: themeType,
        icons: [
            '/delapouite/lovers.svg',
            '/delapouite/love-letter.svg',
            '/lorc/cupidon-arrow.svg',
            '/lorc/linked-rings.svg',
            '/delapouite/cherish.svg'
        ]
    },
    {
        ideaName: 'Tradition',
        description: 'Passed down beliefs from the previous generation.',
        ideaType: themeType,
        icons: [
            '/lorc/firework-rocket.svg',
            '/delapouite/present.svg',
            '/delapouite/coronation.svg',
            '/delapouite/chef-toque.svg',
            '/delapouite/cavalry.svg'
        ]
    },
    {
        ideaName: 'Family',
        description: "It's all about the family.",
        ideaType: themeType,
        icons: [
            '/delapouite/family-tree.svg',
            '/delapouite/three-friends.svg',
            '/delapouite/griffin-shield.svg',
            '/delapouite/dagger-rose.svg',
            '/delapouite/family-house.svg'
        ]
    },
    {
        ideaName: 'Coming of Age',
        description: 'Growing up into adulthood.',
        ideaType: themeType,
        icons: [
            '/delapouite/suitcase.svg',
            '/delapouite/id-card.svg',
            '/delapouite/family-house.svg',
            '/delapouite/baby-bottle.svg',
            '/delapouite/money-stack.svg'
        ]
    },
    {
        ideaName: 'Revenge',
        description: 'Getting back at those that wronged you.',
        ideaType: themeType,
        icons: [
            '/lorc/backstab.svg',
            '/lorc/imprisoned.svg',
            '/lorc/sword-clash.svg',
            '/lorc/cloak-dagger.svg',
            '/lorc/gunshot.svg'
        ]
    },
    {
        ideaName: 'Adaptation',
        description: 'To become better suited towards your environment.',
        ideaType: themeType,
        icons: [
            '/lorc/snowing.svg',
            '/delapouite/desert-camp.svg',
            '/lorc/wheat.svg',
            '/delapouite/flood.svg',
            '/lorc/quicksand.svg'
        ]
    },
    {
        ideaName: 'Savage Wilds',
        description: 'The untamed wilderness is actually very dangerous.',
        ideaType: themeType,
        icons: [
            '/lorc/werewolf.svg',
            '/lorc/sea-serpent.svg',
            '/lorc/quicksand.svg',
            '/delapouite/carnivorous-plant.svg',
            '/delapouite/ceiling-barnacle.svg'
        ]
    },
    {
        ideaName: 'Duplication',
        description: 'Creating a copy of oneself.',
        ideaType: themeType,
        icons: [
            '/lorc/virus.svg',
            '/lorc/tumor.svg',
            '/delapouite/team-downgrade.svg',
            '/lorc/teleport.svg',
            '/lorc/trade.svg'
        ]
    },
    {
        ideaName: 'Fate',
        description: 'It was predetermined that you would get this theme.',
        ideaType: themeType,
        icons: [
            '/delapouite/sword-altar.svg',
            '/delapouite/coronation.svg',
            '/delapouite/ring.svg',
            '/caro-asercion/cootie-catcher.svg',
            '/delapouite/sinking-ship.svg'
        ]
    }
];

export const GOALS: IIdea[] = [
    {
        ideaName: 'Collect',
        description: 'Complete your collection!',
        ideaType: goalType,
        icons: [
            '/lorc/holy-grail.svg',
            '/delapouite/medallist.svg',
            '/lorc/dozen.svg',
            '/delapouite/spell-book.svg',
            '/delapouite/coins-pile.svg'
        ]
    },
    {
        ideaName: 'Avoid',
        description: "Someone wants to avoid something.",
        ideaType: goalType,
        icons: [
            '/felbrigg/dodge.svg',
            '/delapouite/boulder-dash.svg',
            '/lorc/dinosaur-rex.svg',
            '/delapouite/detour.svg',
            '/lorc/tripwire.svg'
        ]
    },
    {
        ideaName: 'Build',
        description: "It's cool because you made it.",
        ideaType: goalType,
        icons: [
            '/lorc/dozen.svg',
            '/delapouite/crane.svg',
            '/delapouite/concrete-bag.svg',
            '/lorc/tinker.svg',
            '/caro-asercion/paper-crane.svg'
        ]
    },
    {
        ideaName: 'Chase',
        description: "Everyone loves the thrill of the chase!",
        ideaType: goalType,
        icons: [
            '/delapouite/speed-boat.svg',
            '/caro-asercion/cloaked-figure-on-horseback.svg',
            '/quoting/biplane.svg',
            '/skoll/race-car.svg',
            '/delapouite/deer-track.svg'
        ]
    },
    {
        ideaName: 'Conquest',
        description: "Capturing anything by force with a valiant effort.",
        ideaType: goalType,
        icons: [
            '/delapouite/flag-objective.svg',
            '/delapouite/exploding-planet.svg',
            '/quoting/bunker-assault.svg',
            '/cathelineau/annexation.svg',
            '/delapouite/trojan-horse.svg'
        ]
    },
    {
        ideaName: 'Deliver',
        description: "Give something to someone.",
        ideaType: goalType,
        icons: [
            '/delapouite/delivery-drone.svg',
            '/lorc/galleon.svg',
            '/delapouite/cardboard-box-closed.svg',
            '/delapouite/mine-wagon.svg',
            '/delapouite/cargo-ship.svg'
        ]
    },
    {
        ideaName: 'Destroy',
        description: "Whatever is standing, it won't be for long!",
        ideaType: goalType,
        icons: [
            '/skoll/carpet-bombing.svg',
            '/lorc/demolish.svg',
            '/lorc/pyromaniac.svg',
            '/lorc/wrecking-ball.svg',
            '/delapouite/hammer-break.svg'
        ]
    },
    {
        ideaName: 'Escape',
        description: "Someone wants to leave where they are.",
        ideaType: goalType,
        icons: [
            '/delapouite/forest-entrance.svg',
            '/delapouite/cave-entrance.svg',
            '/delapouite/evasion.svg',
            '/delapouite/fish-escape.svg'
        ]
    },
    {
        ideaName: 'Fight',
        description: "Someone is attacking or being attacked.",
        ideaType: goalType,
        icons: [
            '/lorc/sword-clash.svg',
            '/lorc/cannon-shot.svg',
            '/delapouite/coliseum.svg',
            '/skoll/knockout.svg',
            '/lorc/internal-injury.svg'
        ]
    },
    {
        ideaName: 'Rescue',
        description: "Someone is in trouble and needs help!",
        ideaType: goalType,
        icons: [
            '/lorc/paranoia.svg',
            '/lorc/shield-reflect.svg',
            '/delapouite/lighthouse.svg',
            '/lorc/angel-outfit.svg',
            '/delapouite/life-buoy.svg'
        ]
    },
    {
        ideaName: 'Steal',
        description: "Someone wants to take something that isn't thier's.",
        ideaType: goalType,
        icons: [
            '/lorc/paranoia.svg',
            '/lorc/shield-reflect.svg',
            '/delapouite/lighthouse.svg',
            '/lorc/angel-outfit.svg',
            '/delapouite/life-buoy.svg'
        ]
    },
    {
        ideaName: 'Survive',
        description: "Do whatever it takes to survive just one more day.",
        ideaType: goalType,
        icons: [
            '/lorc/snowflake-2.svg',
            '/delapouite/water-bottle.svg',
            '/delapouite/life-bar.svg',
            '/lorc/wolf-howl.svg',
            '/delapouite/opened-food-can.svg'
        ]
    },
    {
        ideaName: 'Settle',
        description: "Make a new home and make it grow and prosper.",
        ideaType: goalType,
        icons: [
            '/delapouite/castle.svg',
            '/lorc/hammer-nails.svg',
            '/lorc/wheat.svg',
            '/delapouite/well.svg',
            '/delapouite/factory-arm.svg'
        ]
    },
    {
        ideaName: 'Solve',
        description: "Unravel the mystery. Complete the puzzle.",
        ideaType: goalType,
        icons: [
            '/delapouite/archive-research.svg',
            '/delapouite/puzzle.svg',
            '/delapouite/spy.svg',
            '/delapouite/cctv-camera.svg',
            '/delapouite/key-card.svg'
        ]
    },
    {
        ideaName: 'Score',
        description: "If there are points, you want them.",
        ideaType: goalType,
        icons: [
            '/delapouite/basketball-basket.svg',
            '/delapouite/level-end-flag.svg',
            '/lorc/empty-hourglass.svg',
            '/delapouite/jumping-dog.svg',
            '/lorc/crown-coin.svg'
        ]
    },
    {
        ideaName: 'Race',
        description: "Get to the finish line!",
        ideaType: goalType,
        icons: [
            '/skoll/race-car.svg',
            '/delapouite/finish-line.svg',
            '/lorc/empty-hourglass.svg',
            '/delapouite/medallist.svg',
            '/delapouite/banana-peel.svg'
        ]
    },
    {
        ideaName: 'Explore',
        description: "Get lost for fun!",
        ideaType: goalType,
        icons: [
            '/caro-asercion/mountain-climbing.svg',
            '/delapouite/swimfins.svg',
            '/delapouite/hang-glider.svg',
            '/lorc/grapple.svg',
            '/delapouite/binoculars.svg'
        ]
    },
    {
        ideaName: 'Climb',
        description: "Get to the top.",
        ideaType: goalType,
        icons: [
            '/caro-asercion/mountain-climbing.svg',
            '/delapouite/tower-flag.svg',
            '/heavenly-dog/defensive-wall.svg',
            '/lorc/grapple.svg',
            '/lorc/rocket-flight.svg'
        ]
    },
    {
        ideaName: 'Dig',
        description: "Go as low as you can go.",
        ideaType: goalType,
        icons: [
            '/lorc/diamond-hard.svg',
            '/delapouite/dig-hole.svg',
            '/lorc/drill.svg',
            '/delapouite/dynamite.svg',
            '/delapouite/flashlight.svg'
        ]
    },
    {
        ideaName: 'Research',
        description: "Discover the secrets of the universe.",
        ideaType: goalType,
        icons: [
            '/lord-berandas/microscope.svg',
            '/lorc/light-bulb.svg',
            '/delapouite/car-wheel.svg',
            '/delapouite/observatory.svg',
            '/skoll/atom.svg'
        ]
    },
    {
        ideaName: 'Persuade',
        description: "Convince someone of something.",
        ideaType: goalType,
        icons: [
            '/delapouite/monk-face.svg',
            '/delapouite/love-letter.svg',
            '/lorc/trade.svg',
            '/skoll/talk.svg',
            '/lorc/sabers-choc.svg'
        ]
    },
    {
        ideaName: 'Accomplish',
        description: "Recieve the highest medals and honors.",
        ideaType: goalType,
        icons: [
            '/delapouite/medallist.svg',
            '/delapouite/trophies-shelf.svg',
            '/delapouite/coronation.svg',
            '/skoll/rank-3.svg',
            '/delapouite/high-kick.svg'
        ]
    },
    {
        ideaName: 'Protect',
        description: "Prevent someone or something from being harmed.",
        ideaType: goalType,
        icons: [
            '/lorc/cat.svg',
            '/delapouite/baby-face.svg',
            '/delapouite/griffin-shield.svg',
            '/lorc/bubble-field.svg',
            '/delapouite/ecology.svg'
        ]
    },
    {
        ideaName: 'Sneak',
        description: "Don't be detected.",
        ideaType: goalType,
        icons: [
            '/delapouite/stealth-bomber.svg',
            '/lorc/cloak-dagger.svg',
            '/darkzaitzev/ninja-heroic-stance.svg',
            '/darkzaitzev/smoke-bomb.svg',
            '/delapouite/double-street-lights.svg'
        ]
    },
    {
        ideaName: 'Capture',
        description: "Contain something or someone.",
        ideaType: goalType,
        icons: [
            '/delapouite/cage.svg',
            '/delapouite/bug-net.svg',
            '/skoll/box-trap.svg',
            '/lorc/mantrap.svg',
            '/delapouite/daemon-pull.svg'
        ]
    }
];

export const SETTINGS: IIdea[] = [
    {
        ideaName: 'A E S T H E T I C',
        description: "Nostalgic 80's elements celebrating a time past.",
        ideaType: settingType,
        icons: [
            '/delapouite/headphones.svg',
            '/skoll/f1-car.svg',
            '/delapouite/island.svg',
            '/delapouite/sunglasses.svg',
            '/delapouite/audio-cassette.svg'
        ]
    },
    {
        ideaName: 'Extinction',
        description: 'An extinction event is threatening all life!',
        ideaType: settingType,
        icons: [
            '/lorc/mushroom-cloud.svg',
            '/lorc/snowing.svg',
            '/caro-asercion/sauropod-skeleton.svg',
            '/delapouite/plague-doctor-profile.svg',
            '/lorc/evil-moon.svg'
        ]
    },
    {
        ideaName: 'Ancient',
        description: 'The oldest kingdoms in existence.',
        ideaType: settingType,
        icons: [
            '/delapouite/oasis.svg',
            '/delapouite/nefertiti.svg',
            '/delapouite/egyptian-pyramids.svg',
            '/delapouite/bastet.svg',
            '/delapouite/cleopatra.svg'
        ]
    },
    {
        ideaName: 'Another Dimension',
        description: 'Existing in a different dimension than your own.',
        ideaType: settingType,
        icons: [
            '/delapouite/heaven-gate.svg',
            '/lorc/magic-gate.svg',
            '/lorc/ghost.svg',
            '/lorc/processor.svg',
            '/lorc/flaming-trident.svg'
        ]
    },
    {
        ideaName: 'Post-Apocalyptic',
        description: "The world has already ended, and you're stuck in it.",
        ideaType: settingType,
        icons: [
            '/delapouite/lock-picking.svg',
            '/delapouite/heart-armor.svg',
            '/delapouite/robber.svg',
            '/delapouite/stomach.svg',
            '/delapouite/slipknot.svg'
        ]
    },
    {
        ideaName: 'Mythic',
        description: "Filled with magical creatures, walking gods, and great heroes.",
        ideaType: settingType,
        icons: [
            '/delapouite/coliseum.svg',
            '/lorc/hydra.svg',
            '/caro-asercion/philosopher-bust.svg',
            '/delapouite/roman-toga.svg',
            '/delapouite/caesar.svg'
        ]
    },
    {
        ideaName: 'Colony',
        description: "Located in a foreign land, far from civilization.",
        ideaType: settingType,
        icons: [
            '/delapouite/well.svg',
            '/delapouite/caravel.svg',
            '/delapouite/stakes-fence.svg',
            '/delapouite/cornucopia.svg',
            '/skoll/musket.svg'
        ]
    },
    {
        ideaName: 'Horror',
        description: "Fear the unknown.",
        ideaType: settingType,
        icons: [
            '/lorc/paranoia.svg',
            '/lorc/evil-comet.svg',
            '/lorc/alien-skull.svg',
            '/delapouite/fish-monster.svg',
            '/lorc/evil-book.svg'
        ]
    },
    {
        ideaName: 'Crime',
        description: "Crime never pays. Or does it?",
        ideaType: settingType,
        icons: [
            '/delapouite/lock-picking.svg',
            '/lorc/handcuffs.svg',
            '/delapouite/mug-shot.svg',
            '/delapouite/cigarette.svg',
            '/delapouite/finger-print.svg'
        ]
    },
    {
        ideaName: 'Fantasy',
        description: "Anything magical or supernatural.",
        ideaType: settingType,
        icons: [
            '/lorc/dragon-head.svg',
            '/delapouite/fire-spell-cast.svg',
            '/lorc/wing-cloak.svg',
            '/lorc/evil-fork.svg',
            '/willdabeast/chain-lightning.svg'
        ]
    },
    {
        ideaName: 'Superheroes',
        description: "A select few people have access to superpowers.",
        ideaType: settingType,
        icons: [
            '/delapouite/weight-lifting-up.svg',
            '/lorc/angel-wings.svg',
            '/delapouite/scuba-mask.svg',
            '/delapouite/night-vision.svg',
            '/lorc/laserburn.svg'
        ]
    },
    {
        ideaName: 'Slipstream',
        description: "Weird is normal and normal is weird.",
        ideaType: settingType,
        icons: [
            '/lorc/nailed-head.svg',
            '/lorc/squid-head.svg',
            '/cathelineau/flying-trout.svg',
            '/delapouite/smart.svg',
            '/lorc/angler-fish.svg'
        ]
    },
    {
        ideaName: 'Cyborgs',
        description: "Your world has access to robotic enhancements.",
        ideaType: settingType,
        icons: [
            '/delapouite/cyber-eye.svg',
            '/lorc/metal-hand.svg',
            '/delapouite/robot-leg.svg',
            '/lorc/techno-heart.svg',
            '/delapouite/cyborg-face.svg'
        ]
    },
    {
        ideaName: 'Feudal Japan',
        description: "Back during the time of the samurai.",
        ideaType: settingType,
        icons: [
            '/delapouite/bamboo-fountain.svg',
            '/delapouite/kimono.svg',
            '/delapouite/samurai-helmet.svg',
            '/delapouite/teapot-leaves.svg',
            '/lorc/meditation.svg'
        ]
    },
    {
        ideaName: 'Medieval',
        description: "Horseback riding and swordsmanship.",
        ideaType: settingType,
        icons: [
            '/delapouite/throne-king.svg',
            '/delapouite/uprising.svg',
            '/caro-asercion/frog-mouth-helm.svg',
            '/skoll/mounted-knight.svg',
            '/lorc/arrow-flights.svg'
        ]
    },
    {
        ideaName: 'Modern',
        description: "Technology or events that are close to the real world.",
        ideaType: settingType,
        icons: [
            '/delapouite/satellite-communication.svg',
            '/delapouite/commercial-airplane.svg',
            '/skoll/mp5.svg',
            '/delapouite/smartphone.svg',
            '/delapouite/delivery-drone.svg'
        ]
    },
    {
        ideaName: 'Pirates',
        description: "Swashbucklers sailing the seven seas for treasure!",
        ideaType: settingType,
        icons: [
            '/skoll/open-treasure-chest.svg',
            '/delapouite/eyepatch.svg',
            '/lorc/treasure-map.svg',
            '/delapouite/ship-wheel.svg',
            '/lorc/crossed-sabres.svg'
        ]
    },
    {
        ideaName: 'Science Fiction',
        description: "Any futuristic speculative technology.",
        ideaType: settingType,
        icons: [
            '/delapouite/cryo-chamber.svg',
            '/lorc/ray-gun.svg',
            '/lorc/bubble-field.svg',
            '/delapouite/star-gate.svg',
            '/lorc/missile-mech.svg'
        ]
    },
    {
        ideaName: 'Space',
        description: "Explore the stars with rockets, space suits, and satelites.",
        ideaType: settingType,
        icons: [
            '/delapouite/solar-system.svg',
            '/lorc/burning-meteor.svg',
            '/delapouite/astronaut-helmet.svg',
            '/lorc/star-swirl.svg',
            '/delapouite/rocket-thruster.svg'
        ]
    },
    {
        ideaName: 'Steampowered',
        description: "What if everything was powered by steam?",
        ideaType: settingType,
        icons: [
            '/skoll/pocket-watch.svg',
            '/delapouite/corset.svg',
            '/cathelineau/iron-hulled-warship.svg',
            '/delapouite/pipes.svg',
            '/delapouite/steampunk-goggles.svg'
        ]
    },
    {
        ideaName: 'Vikings',
        description: "Plunder, pillage, and raze your enemies!",
        ideaType: settingType,
        icons: [
            '/lorc/crossed-axes.svg',
            '/lorc/hunting-horn.svg',
            '/delapouite/sverd-i-fjell.svg',
            '/delapouite/giant.svg',
            '/lorc/rune-sword.svg'
        ]
    },
    {
        ideaName: 'Western',
        description: "Folk tales about the untamed frontier.",
        ideaType: settingType,
        icons: [
            '/delapouite/bandit.svg',
            '/delapouite/saddle.svg',
            '/delapouite/cowboy-boot.svg',
            '/delapouite/saloon-doors.svg',
            '/delapouite/wanted-reward.svg'
        ]
    },
    {
        ideaName: 'Zombies',
        description: "Shambling corpses have taken over!",
        ideaType: settingType,
        icons: [
            '/lorc/dozen.svg',
            '/quoting/lost-limb.svg',
            '/skoll/raise-zombie.svg',
            '/delapouite/half-body-crawling.svg',
            '/delapouite/shambling-zombie.svg'
        ]
    },
    {
        ideaName: 'Anthropomorphic',
        description: "Humanoid looking creatures are present.",
        ideaType: settingType,
        icons: [
            '/caro-asercion/badger.svg',
            '/delapouite/frog-prince.svg',
            '/lorc/minotaur.svg',
            '/lorc/werewolf.svg',
            '/delapouite/panda.svg'
        ]
    },
    {
        ideaName: 'Gunpowder',
        description: "Massive boats with cannons and muskets.",
        ideaType: settingType,
        icons: [
            '/delapouite/caravel.svg',
            '/skoll/musket.svg',
            '/delapouite/pirate-cannon.svg',
            '/lorc/quill-ink.svg',
            '/delapouite/pirate-coat.svg'
        ]
    },
    {
        ideaName: 'Underground',
        description: "Takes place in caves or caverns.",
        ideaType: settingType,
        icons: [
            '/delapouite/cave-entrance.svg',
            '/delapouite/underground-cave.svg',
            '/delapouite/swamp-bat.svg',
            '/lorc/dark-squad.svg',
            '/lorc/mining.svg'
        ]
    },
    {
        ideaName: 'Underwater',
        description: "Takes place in a body of water.",
        ideaType: settingType,
        icons: [
            '/delapouite/earth-america.svg',
            '/delapouite/giant-squid.svg',
            '/delapouite/diving-helmet.svg',
            '/delapouite/submarine.svg',
            '/lorc/angler-fish.svg'
        ]
    },
    {
        ideaName: 'World Wars',
        description: "War across the entire planet.",
        ideaType: settingType,
        icons: [
            '/skoll/bayonet.svg',
            '/lorc/mushroom-cloud.svg',
            '/battle-tank.svg',
            '/delapouite/flamethrower-soldier.svg',
            '/lorc/gas-mask.svg'
        ]
    },
    {
        ideaName: 'Simulation',
        description: "Red pill or blue pill?",
        ideaType: settingType,
        icons: [
            '/lorc/anatomy.svg',
            '/delapouite/server-rack.svg',
            '/delapouite/vr-headset.svg',
            '/lord-berandas/computing.svg',
            '/lorc/circuitry.svg'
        ]
    },
    {
        ideaName: 'Dream',
        description: "Wake up.",
        ideaType: settingType,
        icons: [
            '/delapouite/sleeping-bag.svg',
            '/delapouite/time-synchronization.svg',
            '/sbed/falling.svg',
            '/cathelineau/flying-trout.svg',
            '/lorc/beanstalk.svg'
        ]
    },
    {
        ideaName: 'Desert',
        description: "Dry and full of sand.",
        ideaType: settingType,
        icons: [
            '/delapouite/desert.svg',
            '/delapouite/desert-camp.svg',
            '/delapouite/egyptian-temple.svg',
            '/delapouite/sandstorm.svg',
            '/delapouite/sand-snake.svg'
        ]
    },
    {
        ideaName: 'Jungle',
        description: "Wet with tall tree canopies.",
        ideaType: settingType,
        icons: [
            '/delapouite/jungle.svg',
            '/delapouite/vines.svg',
            '/caro-asercion/treehouse.svg',
            '/lorc/monkey.svg',
            '/delapouite/cuauhtli.svg'
        ]
    },
    {
        ideaName: 'Forest',
        description: "Mundane but serene woodlands.",
        ideaType: settingType,
        icons: [
            '/delapouite/forest.svg',
            '/delapouite/squirrel.svg',
            '/caro-asercion/deer.svg',
            '/delapouite/waterfall.svg',
            '/lorc/bird-twitter.svg'
        ]
    },
    {
        ideaName: 'Urban',
        description: "Set inside a large gathering of structures.",
        ideaType: settingType,
        icons: [
            '/delapouite/modern-city.svg',
            '/delapouite/bus.svg',
            '/delapouite/village.svg',
            '/lorc/dozen.svg',
            '/delapouite/traffic-lights-ready-to-go.svg'
        ]
    },
    {
        ideaName: 'Beach',
        description: "Bask in the sunlight!",
        ideaType: settingType,
        icons: [
            '/lorc/sunbeams.svg',
            '/lorc/big-wave.svg',
            '/delapouite/sunglasses.svg',
            '/delapouite/sand-castle.svg',
            '/delapouite/metal-detector.svg'
        ]
    },
    {
        ideaName: 'Island',
        description: "Stranded or on vacation?",
        ideaType: settingType,
        icons: [
            '/delapouite/island.svg',
            '/delapouite/moai.svg',
            '/lorc/spiral-shell.svg',
            '/delapouite/koholint-egg.svg',
            '/delapouite/lighthouse.svg'
        ]
    },
    {
        ideaName: 'Savannah',
        description: "Lots of grass.",
        ideaType: settingType,
        icons: [
            '/lorc/lion.svg',
            '/delapouite/grass.svg',
            '/delapouite/baobab.svg',
            '/delapouite/elephant.svg',
            '/lorc/sunrise.svg'
        ]
    },
    {
        ideaName: 'Swamp',
        description: "Stay out.",
        ideaType: settingType,
        icons: [
            '/delapouite/swamp.svg',
            '/lorc/dragonfly.svg',
            '/lorc/frog.svg',
            '/caro-asercion/willow-tree.svg',
            '/delapouite/reed.svg'
        ]
    },
    {
        ideaName: 'Mountainous',
        description: "Difficult to traverse.",
        ideaType: settingType,
        icons: [
            '/delapouite/summits.svg',
            '/caro-asercion/mountain-climbing.svg',
            '/delapouite/skier.svg',
            '/lorc/wolf-head.svg',
            '/delapouite/falling-rocks.svg'
        ]
    },
    {
        ideaName: 'Fleshland',
        description: "The earth is made of flesh and blood.",
        ideaType: settingType,
        icons: [
            '/skoll/blood.svg',
            '/lorc/eyestalk.svg',
            '/lorc/heart-organ.svg',
            '/lorc/open-wound.svg',
            '/lorc/fleshy-mass.svg'
        ]
    },
    {
        ideaName: 'Metalscape',
        description: "The surface is all metallic.",
        ideaType: settingType,
        icons: [
            '/delapouite/metal-plate.svg',
            '/lorc/metal-disc.svg',
            '/lorc/metal-scales.svg',
            '/delapouite/hexagonal-nut.svg',
            '/delapouite/spiky-pit.svg'
        ]
    },
    {
        ideaName: 'Volcanic',
        description: "Lots of lava everywhere.",
        ideaType: settingType,
        icons: [
            '/delapouite/planet-core.svg',
            '/lorc/eruption.svg',
            '/lorc/caldera.svg',
            '/lorc/smoking-orb.svg',
            '/lorc/fire-zone.svg'
        ]
    },
    {
        ideaName: 'Bioengineered',
        description: "Genetic engineering the perfect specimen.",
        ideaType: settingType,
        icons: [
            '/lorc/dna2.svg',
            '/lorc/octoman.svg',
            '/lorc/anatomy.svg',
            '/delapouite/mighty-force.svg',
            '/skoll/skeleton.svg'
        ]
    },
    {
        ideaName: 'Psychic',
        description: "All minds connected to another dimension.",
        ideaType: settingType,
        icons: [
            '/lorc/psychic-waves.svg',
            '/lorc/meditation.svg',
            '/lorc/minions.svg',
            '/lorc/telepathy.svg',
            '/lorc/third-eye.svg'
        ]
    },
    {
        ideaName: 'Vampires',
        description: "Bloodsucking undead creatures of the night.",
        ideaType: settingType,
        icons: [
            '/delapouite/neck-bite.svg',
            '/delapouite/vampire-cape.svg',
            '/delapouite/moon-bats.svg',
            '/delapouite/vampire-dracula.svg',
            '/lorc/coffin.svg'
        ]
    },
    {
        ideaName: 'Lycanthropes',
        description: "Transformed creatures of the night.",
        ideaType: settingType,
        icons: [
            '/lorc/werewolf.svg',
            '/lorc/wolf-howl.svg',
            '/delapouite/silver-bullet.svg',
            '/skoll/fangs.svg',
            '/lorc/grasping-claws.svg'
        ]
    },
    {
        ideaName: 'Clouds',
        description: "Up in the sky!",
        ideaType: settingType,
        icons: [
            '/delapouite/sun-cloud.svg',
            '/delapouite/hand-wing.svg',
            '/delapouite/heaven-gate.svg',
            '/skoll/zeppelin.svg',
            '/lorc/rainbow-star.svg'
        ]
    },
    {
        ideaName: 'Hell',
        description: "Fire and brimstone.",
        ideaType: settingType,
        icons: [
            '/delapouite/devil-mask.svg',
            '/lorc/evil-fork.svg',
            '/lorc/fire-silhouette.svg',
            '/skoll/pentacle.svg',
            '/delapouite/hades-symbol.svg'
        ]
    },
    {
        ideaName: 'Frozen',
        description: "Extremely cold.",
        ideaType: settingType,
        icons: [
            '/delapouite/thermometer-cold.svg',
            '/lorc/ice-cube.svg',
            '/delapouite/ice-iris.svg',
            '/lorc/eskimo.svg',
            '/lorc/snowman.svg'
        ]
    },
    {
        ideaName: 'Sweltering',
        description: "Extremely hot.",
        ideaType: settingType,
        icons: [
            '/delapouite/thermometer-hot.svg',
            '/lorc/sunbeams.svg',
            '/lorc/wildfires.svg',
            '/lorc/hot-spices.svg',
            '/lorc/caldera.svg'
        ]
    }
];

export const WILDCARDS: IIdea[] = [
    {
        ideaName: 'Arcade',
        description: 'Include a small arcade game.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/floating-platforms.svg',
            '/delapouite/finish-line.svg',
            '/delapouite/joystick.svg',
            '/delapouite/alien-bug.svg',
            '/delapouite/sonic-shoes.svg'
        ]
    },
    {
        ideaName: 'Backtracking',
        description: 'Go back to an earlier area, hopefully with something new!',
        ideaType: wildcardType,
        icons: [
            '/delapouite/drawbridge.svg',
            '/lorc/return-arrow.svg',
            '/delapouite/player-previous.svg',
            '/delapouite/backward-time.svg',
            '/lorc/corner-explosion.svg'
        ]
    },
    {
        ideaName: 'Breathtaking',
        description: 'Have a scenic vista somewhere.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/viking-church.svg',
            '/delapouite/binoculars.svg',
            '/lorc/spiky-eclipse.svg',
            '/delapouite/greek-sphinx.svg',
            '/delapouite/saint-basil-cathedral.svg'
        ]
    },
    {
        ideaName: 'Cheats',
        description: 'Include cheats that can be unlocked or discovered.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/hand-of-god.svg',
            '/delapouite/giant.svg',
            '/delapouite/mighty-force.svg',
            '/lorc/third-eye.svg',
            '/delapouite/push.svg'
        ]
    },
    {
        ideaName: 'Collectibles',
        description: 'Be able to collect all sorts of interesting objects to show off!',
        ideaType: wildcardType,
        icons: [
            '/delapouite/bookshelf.svg',
            '/lorc/gems.svg',
            '/delapouite/trophies-shelf.svg',
            '/delapouite/stars-stack.svg',
            '/delapouite/bug-net.svg'
        ]
    },
    {
        ideaName: 'Companion',
        description: 'You get a companion of some kind.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/labrador-head.svg',
            '/lorc/paw-heart.svg',
            '/delapouite/three-friends.svg',
            '/delapouite/companion-cube.svg',
            '/lorc/surrounded-shield.svg'
        ]
    },
    {
        ideaName: 'Cooking',
        description: 'Add a cooking mini-game.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/hot-meal.svg',
            '/delapouite/eating.svg',
            '/delapouite/noodles.svg',
            '/delapouite/camp-cooking-pot.svg',
            '/delapouite/coffee-cup.svg'
        ]
    },
    {
        ideaName: 'Crafting',
        description: 'Include some ability to create your own items.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/shoulder-armor.svg',
            '/lorc/sword-smithing.svg',
            '/caro-asercion/sewing-machine.svg',
            '/delapouite/mechanic-garage.svg',
            '/lorc/stone-crafting.svg'
        ]
    },
    {
        ideaName: 'Currency',
        description: 'There is some form of currency being used.',
        ideaType: wildcardType,
        icons: [
            '/lorc/ringing-bell.svg',
            '/delapouite/banknote.svg',
            '/lorc/gems.svg',
            '/delapouite/receive-money.svg',
            '/delapouite/nano-bot.svg'
        ]
    },
    {
        ideaName: 'Customization',
        description: 'Be able to customize something and give it new looks or stats.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/skills.svg',
            '/delapouite/nose-side.svg',
            '/delapouite/paint-bucket.svg',
            '/delapouite/cyber-eye.svg',
            '/delapouite/switch-weapon.svg'
        ]
    },
    {
        ideaName: 'Destructible',
        description: 'Make something able to collapse or explode!',
        ideaType: wildcardType,
        icons: [
            '/lorc/tower-fall.svg',
            '/delapouite/hammer-break.svg',
            '/delapouite/castle-ruins.svg',
            '/delapouite/falling-rocks.svg',
            '/quoting/damaged-house.svg'
        ]
    },
    {
        ideaName: 'Diegetic',
        description: 'The UI / HUD exists in the game world.',
        ideaType: wildcardType,
        icons: [
            '/lorc/treasure-map.svg',
            '/delapouite/binoculars.svg',
            '/delapouite/life-bar.svg',
            '/delapouite/speedometer.svg',
            '/lorc/folded-paper.svg'
        ]
    },
    {
        ideaName: 'Fast Travel',
        description: 'Have some way to travel quickly through the game world.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/speed-boat.svg',
            '/delapouite/plane-wing.svg',
            '/lorc/magic-portal.svg',
            '/caro-asercion/subway-train.svg',
            '/delapouite/truck.svg'
        ]
    },
    {
        ideaName: 'Fishing',
        description: 'Pull up fish and occasionally treasure!',
        ideaType: wildcardType,
        icons: [
            '/delapouite/boat-fishing.svg',
            '/delapouite/fishing-lure.svg',
            '/delapouite/shark-bite.svg',
            '/delapouite/spearfishing.svg',
            '/lorc/fishing-net.svg'
        ]
    },
    {
        ideaName: 'Fog',
        description: 'Dense fog limits your view.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/light-projector.svg',
            '/delapouite/lighthouse.svg',
            '/skoll/sight-disabled.svg',
            '/skoll/evil-eyes.svg',
            '/delapouite/fog.svg'
        ]
    },
    {
        ideaName: 'Level Up',
        description: 'Be able to upgrade something.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/jump-across.svg',
            '/delapouite/upgrade.svg',
            '/delapouite/family-house.svg',
            '/darkzaitzev/acrobatic.svg',
            '/lorc/sprint.svg'
        ]
    },
    {
        ideaName: 'Leviathan',
        description: 'Scale something up so drastically that your jaw drops!',
        ideaType: wildcardType,
        icons: [
            '/delapouite/giant.svg',
            '/lorc/big-wave.svg',
            '/lorc/paranoia.svg',
            '/lorc/stomp.svg',
            '/lorc/dinosaur-rex.svg'
        ]
    },
    {
        ideaName: 'Limited',
        description: 'A resource / ability is limited further in some way.',
        ideaType: wildcardType,
        icons: [
            '/lorc/batteries.svg',
            '/sbed/weight-crush.svg',
            '/delapouite/backpack.svg',
            '/delapouite/suitcase.svg',
            '/delapouite/opened-food-can.svg'
        ]
    },
    {
        ideaName: 'Multitool',
        description: 'One tool or weapon with many uses.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/tomahawk.svg',
            '/delapouite/swiss-army-knife.svg',
            '/lorc/whip.svg',
            '/lorc/hammer-nails.svg',
            '/delapouite/chainsaw.svg'
        ]
    },
    {
        ideaName: 'Mute',
        description: 'No talking or reading. Just atmosphere.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/musical-notes.svg',
            '/delapouite/silenced.svg',
            '/delapouite/mute.svg',
            '/delapouite/secret-book.svg',
            '/lorc/inner-self.svg'
        ]
    },
    {
        ideaName: 'My Name Is',
        description: 'Let the player name their character.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/id-card.svg',
            '/delapouite/skills.svg',
            '/delapouite/discussion.svg',
            '/delapouite/passport.svg',
            '/delapouite/notebook.svg'
        ]
    },
    {
        ideaName: 'New Game+',
        description: 'New content that is only accessible after beating the game.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/bolt-spell-cast.svg',
            '/lorc/divergence.svg',
            '/delapouite/target-prize.svg',
            '/skoll/open-treasure-chest.svg',
            '/delapouite/magic-axe.svg'
        ]
    },
    {
        ideaName: 'One Life',
        description: 'One chance, then the game restarts.',
        ideaType: wildcardType,
        icons: [
            '/skoll/knockout.svg',
            '/lorc/internal-injury.svg',
            '/lorc/internal-organ.svg',
            '/quoting/lost-limb.svg',
            '/lorc/life-in-the-balance.svg'
        ]
    },
    {
        ideaName: 'Overgrown',
        description: 'Part of a level has been taken over by nature.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/high-grass.svg',
            '/delapouite/stump-regrowth.svg',
            '/delapouite/ancient-ruins.svg',
            '/lorc/raining.svg',
            '/lorc/recycle.svg'
        ]
    },
    {
        ideaName: 'Party',
        description: 'Control multiple characters.',
        ideaType: wildcardType,
        icons: [
            '/lorc/dozen.svg',
            '/delapouite/three-friends.svg',
            '/lorc/rally-the-troops.svg',
            '/lorc/minions.svg',
            '/delapouite/hand-of-god.svg'
        ]
    },
    {
        ideaName: 'Pet Rock',
        description: 'Make an inanimate object sentient and have character.',
        ideaType: wildcardType,
        icons: [
            '/skoll/race-car.svg',
            '/john-colburn/pistol-gun.svg',
            '/delapouite/stone-bust.svg',
            '/lorc/pumpkin-lantern.svg',
            '/lorc/rock.svg'
        ]
    },
    {
        ideaName: 'Playable Menu',
        description: 'The main menu is also playable.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/pool-dive.svg',
            '/delapouite/toggles.svg',
            '/delapouite/hamburger-menu.svg',
            '/delapouite/exit-door.svg',
            '/delapouite/move.svg'
        ]
    },
    {
        ideaName: 'Power-ups',
        description: 'Add temporary benefits / abilities to be obtained.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/jump-across.svg',
            '/delapouite/shield-impact.svg',
            '/delapouite/healing.svg',
            '/delapouite/speedometer.svg',
            '/lorc/boots.svg'
        ]
    },
    {
        ideaName: 'Procedural',
        description: 'Randomly generate something in your game.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/mountain-road.svg',
            '/delapouite/skills.svg',
            '/delapouite/rolling-dices.svg',
            '/delapouite/rule-book.svg',
            '/lorc/cubes.svg'
        ]
    },
    {
        ideaName: 'Punny',
        description: 'Include your favorite pun. Please just one, though.',
        ideaType: wildcardType,
        icons: [
            '/cathelineau/tree-face.svg',
            '/lorc/grapes.svg',
            '/delapouite/3d-stairs.svg',
            '/delapouite/throwing-ball.svg',
            '/delapouite/photo-camera.svg'
        ]
    },
    {
        ideaName: 'Real-World Time',
        description: 'Your game uses real-world time in some way.',
        ideaType: wildcardType,
        icons: [
            '/delapouite/family-tree.svg',
            '/delapouite/tree-growth.svg',
            '/delapouite/camp-cooking-pot.svg',
            '/delapouite/player-time.svg',
            '/delapouite/finish-line.svg'
        ]
    },
    {
        ideaName: 'Secret',
        description: "There's a secret hidden somewhere.",
        ideaType: wildcardType,
        icons: [
            '/lorc/treasure-map.svg',
            '/lorc/sinking-trap.svg',
            '/lorc/wolf-trap.svg',
            '/delapouite/metal-detector.svg',
            '/lorc/land-mine.svg'
        ]
    },
    {
        ideaName: 'Shortcut',
        description: "Include a shortcut for perceptive players.",
        ideaType: wildcardType,
        icons: [
            '/delapouite/underground-cave.svg',
            '/delapouite/open-gate.svg',
            '/delapouite/exit-door.svg',
            '/delapouite/dig-hole.svg',
            '/delapouite/trail.svg'
        ]
    },
    {
        ideaName: 'Splash Screen',
        description: "Include a charming audio jingle and logo intro.",
        ideaType: wildcardType,
        icons: [
            '/delapouite/sound-on.svg',
            '/delapouite/entry-door.svg',
            '/delapouite/theater-curtains.svg',
            '/lorc/drama-masks.svg',
            '/delapouite/video-conference.svg'
        ]
    },
    {
        ideaName: 'Follower',
        description: "Someone or something is following you.",
        ideaType: wildcardType,
        icons: [
            '/delapouite/hunter-eyes.svg',
            '/lorc/paranoia.svg',
            '/lorc/shadow-follower.svg',
            '/skoll/footsteps.svg',
            '/lorc/hound.svg'
        ]
    },
    {
        ideaName: 'Talking',
        description: "Be able to talk to people, creatures, or things.",
        ideaType: wildcardType,
        icons: [
            '/delapouite/tribunal-jury.svg',
            '/lorc/conversation.svg',
            '/lorc/checkbox-tree.svg',
            '/lorc/shouting.svg',
            '/lorc/divergence.svg'
        ]
    },
    {
        ideaName: 'Taming',
        description: "Enemies become friends!",
        ideaType: wildcardType,
        icons: [
            '/delapouite/health-potion.svg',
            '/delapouite/take-my-money.svg',
            '/delapouite/three-friends.svg',
            '/delapouite/hot-meal.svg',
            '/delapouite/dart.svg'
        ]
    },
    {
        ideaName: 'Time Passage',
        description: "Include a waiting mechanic to pass time.",
        ideaType: wildcardType,
        icons: [
            '/delapouite/watch.svg',
            '/skoll/read.svg',
            '/delapouite/coffee-cup.svg',
            '/delapouite/sleeping-bag.svg',
            '/lorc/campfire.svg'
        ]
    },
    {
        ideaName: 'Weather',
        description: "Have some kind of weather.",
        ideaType: wildcardType,
        icons: [
            '/lorc/raining.svg',
            '/lorc/snowing.svg',
            '/lorc/lightning-tree.svg',
            '/lorc/earth-spit.svg',
            '/lorc/wave-crest.svg'
        ]
    },
    {
        ideaName: 'Water',
        description: "Interactable water in some form or another.",
        ideaType: wildcardType,
        icons: [
            '/lorc/raining.svg',
            '/delapouite/water-bottle.svg',
            '/lorc/water-splash.svg',
            '/lorc/drowning.svg',
            '/lorc/wave-crest.svg'
        ]
    },
    {
        ideaName: 'Nonviolent',
        description: "No one is physically harming eachother.",
        ideaType: wildcardType,
        icons: [
            '/skoll/talk.svg',
            '/delapouite/hiking.svg',
            '/delapouite/farmer.svg',
            '/delapouite/stork-delivery.svg',
            '/lorc/portal.svg'
        ]
    },
    {
        ideaName: 'Nighttime',
        description: "It was a dark a stormy night...",
        ideaType: wildcardType,
        icons: [ 
            '/lorc/night-sky.svg',
            '/delapouite/flashlight.svg',
            '/lorc/wolf-howl.svg',
            '/lorc/campfire.svg',
            '/lorc/evil-moon.svg'
        ]
    },
    {
        ideaName: 'Tropes',
        description: "Include one of your favorite tropes!",
        ideaType: wildcardType,
        icons: [ 
            '/delapouite/elevator.svg',
            '/delapouite/lovers.svg',
            '/delapouite/hand-of-god.svg',
            '/lorc/minions.svg',
            '/lorc/angel-outfit.svg'
        ]
    }
];