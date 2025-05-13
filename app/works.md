---
layout: page
aside: false
sidebar: false
footer: true
---

<div class="mt-12 flex flex-col justify-center items-center p-10">
  <div class="text-4xl font-medium text-center">WORKS</div>
</div>

<div class="mt-20 my-25 mx-10">
  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 justify-items-center items-center">
    <div v-for="work in works" :key="work.id" class="flex flex-col sm:flex-col md:flex-row justify-center gap-4 border-2 border-[var(--vp-c-brand-1)] rounded-xl p-4 max-w-[50vw]">
      <img class="min-w-1/4 h-100 object-fill rounded-xl" :src="work.image">
      <div>
        <h1>{{ work.title }}</h1>
        <h3>Worked on: <span class="font-medium text-[var(--vp-c-brand-1)]">{{ work.episode }}</span></h3>
        <p>{{ work.description }}</p>
      </div>
    </div>
  </div>
</div>

<script setup>
const works = [
  {
    id: 1,
    title: "BORUTO: NARUTO NEXT GENERATIONS",
    episode: "S1, EP265 (Key Animation)",
    description: "Naruto was a young shinobi with an incorrigible knack for mischief. He achieved his dream to become the greatest ninja in the village and his face sits atop the Hokage monument. But this is not his story... A new generation of ninja are ready to take the stage, led by Naruto's own son, Boruto!",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97938-BnF6M5yTaNB1.jpg"
  },
  {
    id: 2,
    title: "Luminous Witches",
    episode: "S1, EP11 (Key animation)",
    description: "The war against invading aliens can’t be won by missiles alone! Team morale matters just as much as launching a counterassault, and that’s where Ginny and her friends come in. Instead of standing on the front lines with the 501st Joint Fighter Wing, the Luminous Witches of the League of Nations Air Force bring smiles to civilians displaced in the human-Neuroi war world with thrilling song and dance — not to mention aerial displays the likes of which the music world has never seen! While they might be non-combatants, these performers know the value of preserving the people’s smiles, and they’ll fight in their unique way to make sure those smiles never fade.",
    image: "https://cdn.myanimelist.net/images/anime/1085/125306.jpg"
  },
  {
    id: 3,
    title: "RWBY: Hyousetsu Teikoku",
    episode: "S1, EP11 (Key animation)",
    description: "In the world of Remnant, a place where science and fairy tales coexist, human civilization is plagued by deadly monsters known as the Grimm. For a time, victory by the Grimm seemed all but certain, if not for the heroism of those sworn to protect humanity -- Huntsmen and Huntresses. These warriors are trained and assembled into teams at schools like Beacon Academy, where Ruby meets Weiss and Blake -- forming Team RWBY along with Ruby’s sister, Yang. While team RWBY studies to become the greatest Huntresses the world of Remnant has ever known, they are faced with a horrifying threat..",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146668-JNIr7FRzEUaM.jpg"
  },
  {
    id: 4,
    title: "Boku No Hero Academia",
    episode: "S6, E18 (Key animation)",
    description: "With Tomura Shigaraki at its helm, the former Liberation Army is now known as the Paranormal Liberation Front. This organized criminal group poses an immense threat to the Hero Association, not only because of its sheer size and strength, but also the overpowering quirks of Jin 'Twice' Bubaigawara and Gigantomachia.",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx139630-3v4gxWtNZxLV.jpg"
  },
  {
    id: 5,
    title: "Urusei Yatsura",
    episode: "S1, EP22 (Animation Director)",
    description: "When an alien race known as the Oni invade Earth, the chronically unlucky and unapologetically lecherous Ataru Moroboshi is selected as humanity’s representative in a duel for the fate of the planet! His opponent is Lum, the Oni’s very pretty princess, and it’s only thanks to Ataru’s unscrupulous behavior that he’s able to scrape out a win in a treacherous game of tag against her. Ataru thinks he’s had his lucky break at last, but when Lum takes a shine to him off the battlefield, the conflict follows him home as Lum invades not only planet Earth, but also the womanizing Ataru’s love life!",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143277-snjd4UzsUl8M.jpg"
  },
  {
    id: 6,
    title: "Mahou Shoujo Magical Destroyers",
    episode: "S1, EP3 (Animation Director)",
    description: "Freedom of expression is threatened when a mysterious group, the SSC, destroy Japan’s otaku culture. However, a young revolutionary, Otaku Hero—who loves the culture more than anything—rises up. With the help of three rambunctious magical girls—Anarchy, Blue, and Pink—they’ll team up to create a world free of this oppressive rule. Be part of the rebellion to bring back fandom!",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx134131-70vYnpBHFtHy.jpg"
  },
  {
    id: 7,
    title: "Dead Mount Death Play",
    episode: "S1, EP4 (Animation Director) & S1, EP6 (Animation Director & Key Animator)",
    description: "As a legendary hero nears victory against a necromancer known as The Corpse God, things take an unexpected turn with the dark sorcerer’s final gambit—reincarnation magic. This last-ditch effort catches the brave fighter off guard, and now he’s a boy named Polka Shinoyama in a whole new world! The showdown between good and evil just got epic.",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx157198-LVZ7PgxWwc6v.jpg"
  },
  {
    id: 8,
    title: "Spy x Family",
    episode: "S2, EP7 (Key Animator)",
    description: "The Forger family will face a new familial mission as Yor heads on a cruise ship expedition!",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b158927-lfO85WVguYgc.png"
  },
  {
    id: 9,
    title: "Astro Note",
    episode: "S1, EP7 (Key Animator)",
    description: "Takumi, a gifted chef, was just let go from his job. He lands a gig at an old boarding house called Astro-sou, but hesitates to accept after learning he must also live there full-time. That is until he meets the beautiful and charming caretaker, Mira, and he’s sold. The two begin to work together and their connection deepens. But Mira has a secret: she isn’t from this world!`",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171040-o1oMiDGZT98Z.jpg"
  },
  {
    id: 10,
    title: "Re:Monster",
    episode: "S1, EP8 (Key Animator)",
    description: "After meeting an untimely death, Tomokui Kanata is reincarnated as a lowly goblin, but he’s worked up a monstrous appetite. Thanks to his new ability that allows him to grow stronger the more he feeds, his feeble status quickly changes, and he rises to become the goblin leader. With a mix of his past memories, new body, and strong stomach, he’s taking a bite out of this new fantastical world!",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169417-izsfKg0hasRd.png"
  },
  {
    id: 11,
    title: "Date A Live",
    episode: "S5, EP11 (Key Animator)",
    description: "Shidou Itsuka faces greater peril than ever due to his continued involvement with Ratatoskr. He has already sealed 10 Spirits, and Isaac Westcott, leader of Deus Ex Machina Industries, has finally decided to kill Shidou and plunder the Spirits' powers for himself. ",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151380-gvN5PjrybTw2.jpg"
  },
  {
    id: 12,
    title: "Kinnikuman: Kanpeki Choujin Shiso-hen",
    episode: "S1EP9 (Key Animator)",
    description: "Kinnikuman returns to the ring in an epic three-way battle between the Justice, Devil and Perfect Chojin factions, and reveals the roots of the Chojin.",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162796-CFwUdsPSLpzv.jpg"
  },
  {
    id: 13,
    title: "Fuguushoku [Kanteishi] ga Jitsu wa Saikyou Datta: Naraku de Kitaeta Saikyou no [Shingan] de Musou Suru",
    episode: "S1, EP12 (Animation Director) ",
    description: "Ein has been saddled with the job of 'Appraiser,' the weakest and least fortunate of all the jobs one can be born with, as the only power it grants is the ability to appraise things. Treated cruelly by all and reduced to a litter collector by his peers, Ein has grown to hate himself and lives his days in spineless self-abasement. But when he meets Yuuri, the spirit of the World Tree, and her protector, Ursula the sage, Ein's fate takes a drastic turn.",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx178548-4QkzBuJAx8w7.jpg"
  }
]
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 10px;
  line-height: 1;
}
h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 10px;
}
p {
  font-size: 1rem;
  font-weight: 400;
}
</style>
