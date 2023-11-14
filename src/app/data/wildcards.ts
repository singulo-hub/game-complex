import { IIdea } from "../models/idea";
import { WildcardType } from "../models/idea-types/wildcard";

export let wildcardType = new WildcardType();

export const WILDCARDS: IIdea[] = [
    {
        ideaName: 'Arcade',
        description: 'Include a small mini-game.',
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
        description: 'Scale something up to be MASSIVE!',
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
        description: 'Something has been taken over by nature.',
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
        description: 'Include a shortcut for perceptive players.',
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
        description: 'Include a charming audio jingle and logo intro.',
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
        description: 'Someone or something is following you.',
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
        description: 'Be able to talk to someone or something.',
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
        description: 'Enemies become friends!',
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
        description: 'Include a waiting mechanic to pass time.',
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
        description: 'Have some kind of weather.',
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
        description: 'Interactable water in some form or another.',
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
        description: 'No one is physically harming eachother.',
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
        description: 'It was a dark a stormy night...',
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
        description: 'Include one of your favorite tropes!',
        ideaType: wildcardType,
        icons: [ 
            '/delapouite/elevator.svg',
            '/delapouite/lovers.svg',
            '/delapouite/hand-of-god.svg',
            '/lorc/minions.svg',
            '/lorc/angel-outfit.svg'
        ]
    },
    {
        ideaName: 'Excalibur',
        description: "There's a powerful artifact waiting to be claimed.",
        ideaType: wildcardType,
        icons: [ 
            '/delapouite/sword-altar.svg',
            '/lorc/holy-grail.svg',
            '/delapouite/koholint-egg.svg',
            '/lorc/wingfoot.svg',
            '/lorc/evil-book.svg'
        ]
    },
    {
        ideaName: 'Boss',
        description: 'Someone big and powerful to take down.',
        ideaType: wildcardType,
        icons: [ 
            '/lorc/minions.svg',
            '/delapouite/boss-key.svg',
            '/delapouite/air-man.svg',
            '/delapouite/organigram.svg',
            '/caro-asercion/warlord-helmet.svg'
        ]
    },
    {
        ideaName: 'Custom Difficulty',
        description: "Allow players to customize aspects of your game's difficulty.",
        ideaType: wildcardType,
        icons: [ 
            '/delapouite/toggles.svg',
            '/lorc/on-target.svg',
            '/lorc/despair.svg',
            '/delapouite/weight-lifting-down.svg',
            '/lorc/broken-bone.svg'
        ]
    },
    {
        ideaName: 'Farming',
        description: "Tend to crops. Raise livestock.",
        ideaType: wildcardType,
        icons: [ 
            '/delapouite/chicken.svg',
            '/lorc/wheat.svg',
            '/delapouite/beehive.svg',
            '/delapouite/farmer.svg',
            '/delapouite/cow.svg'
        ]
    },
    {
        ideaName: 'Furry Friends',
        description: "Include a talking animal.",
        ideaType: wildcardType,
        icons: [ 
            '/delapouite/rabbit-head.svg',
            '/skoll/pig.svg',
            '/delapouite/duck.svg',
            '/lorc/cat.svg',
            '/delapouite/cow.svg'
        ]
    },
    {
        ideaName: 'Easter Eggs',
        description: "Hide something special for players to find.",
        ideaType: wildcardType,
        icons: [ 
            '/delapouite/cosmic-egg.svg',
            '/skoll/walther-ppk.svg',
            '/delapouite/sitting-dog.svg',
            '/lorc/sparking-sabre.svg',
            '/delapouite/pick-of-destiny.svg'
        ]
    },
    {
        ideaName: 'Grappling Hook',
        description: "Pull yourself somewhere else or something towards you.",
        ideaType: wildcardType,
        icons: [ 
            '/delapouite/pull.svg',
            '/delapouite/robot-grab.svg',
            '/delapouite/rope-dart.svg',
            '/lorc/grapple.svg',
            '/delapouite/flying-fox.svg'
        ]
    },
    {
        ideaName: 'Rotten',
        description: "Have something you can eat but shouldn't.",
        ideaType: wildcardType,
        icons: [ 
            '/delapouite/soap.svg',
            '/lorc/flowers.svg',
            '/delapouite/cigale.svg',
            '/lorc/carrion.svg',
            '/lorc/spotted-mushroom.svg'
        ]
    }
];