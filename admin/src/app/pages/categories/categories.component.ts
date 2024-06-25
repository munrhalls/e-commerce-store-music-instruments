import { Component } from "@angular/core";

export interface Category {
  id: string;
  title: string;
  icon?: string;
  children?: Category[];
}

@Component({
  selector: "ngx-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
  categories: Category[] = [
    {
      id: "instruments",
      title: "Instruments",
      icon: "music-outline",
      children: [
        {
          id: "string-instruments",
          title: "String Instruments",
          children: [
            {
              id: "guitars",
              title: "Guitars",
              children: [
                {
                  id: "acoustic-guitars",
                  title: "Acoustic Guitars",
                  children: [
                    {
                      id: "steel-string-acoustic-guitars",
                      title: "Steel-string",
                    },
                    {
                      id: "nylon-string-acoustic-guitars",
                      title: "Nylon-string (Classical & Flamenco)",
                    },
                    { id: "12-string-acoustic-guitars", title: "12-string" },
                  ],
                },
                {
                  id: "electric-guitars",
                  title: "Electric Guitars",
                  children: [
                    { id: "solid-body-electric-guitars", title: "Solid Body" },
                    {
                      id: "semi-hollow-electric-guitars",
                      title: "Semi-Hollow",
                    },
                    {
                      id: "hollow-body-electric-guitars",
                      title: "Hollow Body",
                    },
                  ],
                },
                {
                  id: "bass-guitars",
                  title: "Bass Guitars",
                  children: [
                    {
                      id: "electric-basses",
                      title: "Electric Basses",
                      children: [
                        { id: "4-string-electric-basses", title: "4-string" },
                        { id: "5-string-electric-basses", title: "5-string" },
                        { id: "6-string-electric-basses", title: "6-string" },
                      ],
                    },
                    { id: "acoustic-basses", title: "Acoustic Basses" },
                  ],
                },
              ],
            },
            {
              id: "ukuleles",
              title: "Ukuleles",
              children: [
                { id: "soprano-ukuleles", title: "Soprano" },
                { id: "concert-ukuleles", title: "Concert" },
                { id: "tenor-ukuleles", title: "Tenor" },
                { id: "baritone-ukuleles", title: "Baritone" },
              ],
            },
            { id: "banjos", title: "Banjos" },
            { id: "mandolins", title: "Mandolins" },
            { id: "violins", title: "Violins" },
            { id: "violas", title: "Violas" },
            { id: "cellos", title: "Cellos" },
            { id: "double-basses", title: "Double Basses" },
            { id: "harp", title: "Harp" },
          ],
        },
        {
          id: "woodwind-instruments",
          title: "Woodwind Instruments",
          children: [
            { id: "flutes-piccolos", title: "Flutes & Piccolos" },
            { id: "clarinets", title: "Clarinets" },
            { id: "saxophones", title: "Saxophones" },
            { id: "oboes", title: "Oboes" },
            { id: "bassoons", title: "Bassoons" },
            { id: "recorders", title: "Recorders" },
          ],
        },
        {
          id: "brass-instruments",
          title: "Brass Instruments",
          children: [
            { id: "trumpets", title: "Trumpets" },
            { id: "trombones", title: "Trombones" },
            { id: "french-horns", title: "French Horns" },
            { id: "tubas", title: "Tubas" },
            { id: "cornets", title: "Cornets" },
            { id: "flugelhorns", title: "Flugelhorns" },
          ],
        },
        {
          id: "keyboards-pianos",
          title: "Keyboards & Pianos",
          children: [
            { id: "digital-pianos", title: "Digital Pianos" },
            {
              id: "keyboards-midi-controllers",
              title: "Keyboards & MIDI Controllers",
            },
            { id: "stage-pianos", title: "Stage Pianos" },
            { id: "synthesizers", title: "Synthesizers" },
            { id: "organs", title: "Organs" },
            { id: "accordions", title: "Accordions" },
          ],
        },
        {
          id: "percussion-instruments",
          title: "Percussion Instruments",
          children: [
            {
              id: "drum-sets-electronic-drums",
              title: "Drum Sets & Electronic Drums",
            },
            { id: "snare-drums", title: "Snare Drums" },
            { id: "cymbals", title: "Cymbals" },
            { id: "drum-hardware", title: "Drum Hardware" },
            {
              id: "world-percussion",
              title: "World Percussion",
              children: [
                { id: "congas-bongos", title: "Congas & Bongos" },
                { id: "djembes", title: "Djembes" },
                { id: "tambourines", title: "Tambourines" },
                { id: "shakers", title: "Shakers" },
                { id: "hand-drums", title: "Hand Drums" },
              ],
            },
            {
              id: "orchestral-percussion",
              title: "Orchestral Percussion",
              children: [
                { id: "timpani", title: "Timpani" },
                { id: "xylophones", title: "Xylophones" },
                { id: "marimbas", title: "Marimbas" },
                { id: "vibraphones", title: "Vibraphones" },
                { id: "glockenspiels", title: "Glockenspiels" },
              ],
            },
          ],
        },
        {
          id: "folk-instruments",
          title: "Folk Instruments",
          children: [
            { id: "harmonicas", title: "Harmonicas" },
            { id: "bagpipes", title: "Bagpipes" },
            { id: "accordions-folk", title: "Accordions" }, // Note: This is a duplicate of the accordion category under Keyboards & Pianos
            { id: "concertinas", title: "Concertinas" },
          ],
        },
      ],
    },
    {
      id: "hardware",
      icon: "settings-2-outline",
      title: "Hardware",
      children: [
        {
          id: "amplifiers-effects",
          title: "Amplifiers & Effects",
          children: [
            { id: "guitar-amplifiers", title: "Guitar Amplifiers" },
            { id: "bass-amplifiers", title: "Bass Amplifiers" },
            { id: "keyboard-amplifiers", title: "Keyboard Amplifiers" },
            { id: "acoustic-amplifiers", title: "Acoustic Amplifiers" },
            {
              id: "effects-pedals-processors",
              title: "Effects Pedals & Processors",
            },
            {
              id: "rackmount-effects-processors",
              title: "Rackmount Effects & Processors",
            },
            {
              id: "pa-systems-live-sound-equipment",
              title: "PA Systems & Live Sound Equipment",
              children: [
                { id: "mixers", title: "Mixers" },
                { id: "speakers", title: "Speakers" },
                { id: "microphones", title: "Microphones" },
                { id: "cables-snakes", title: "Cables & Snakes" },
                { id: "monitors", title: "Monitors" },
              ],
            },
          ],
        },
        {
          id: "recording-equipment",
          title: "Recording Equipment",
          children: [
            { id: "audio-interfaces", title: "Audio Interfaces" },
            { id: "microphones-recording", title: "Microphones" }, // Note: This is a duplicate of the microphone category under PA Systems & Live Sound Equipment
            { id: "studio-monitors", title: "Studio Monitors" },
            { id: "headphones", title: "Headphones" },
            { id: "software-plugins", title: "Software & Plugins" },
            {
              id: "midi-controllers-keyboards-recording",
              title: "MIDI Controllers & Keyboards",
            }, // Note: Duplicate of "Keyboards & MIDI Controllers" under Keyboards & Pianos
          ],
        },
      ],
    },
    {
      id: "general-accessories",
      title: "General Accessories",
      children: [
        {
          id: "cases-gig-bags",
          title: "Cases & Gig Bags",
          children: [
            { id: "hard-cases", title: "Hard Cases" },
            { id: "soft-cases-gig-bags", title: "Soft Cases & Gig Bags" },
          ],
        },
        {
          id: "stands-racks",
          title: "Stands & Racks",
          children: [
            { id: "guitar-stands", title: "Guitar Stands" },
            { id: "keyboard-stands", title: "Keyboard Stands" },
            { id: "microphone-stands", title: "Microphone Stands" },
            { id: "music-stands", title: "Music Stands" },
            {
              id: "rackmount-cases-accessories",
              title: "Rackmount Cases & Accessories",
            },
          ],
        },
        {
          id: "strings-reeds",
          title: "Strings & Reeds",
          children: [
            {
              id: "guitar-strings",
              title: "Guitar Strings (Electric, Acoustic, Bass)",
            },
            { id: "ukulele-strings", title: "Ukulele Strings" },
            { id: "banjo-strings", title: "Banjo Strings" },
            { id: "orchestral-strings", title: "Orchestral Strings" },
            {
              id: "reeds",
              title: "Reeds (Clarinet, Saxophone, Oboe, Bassoon)",
            },
          ],
        },
        {
          id: "maintenance-cleaning",
          title: "Maintenance & Cleaning",
          children: [
            { id: "polishes-cleaners", title: "Polishes & Cleaners" },
            { id: "lubricants-oils", title: "Lubricants & Oils" },
            { id: "tools-kits", title: "Tools & Kits" },
          ],
        },
        {
          id: "cables-connectors",
          title: "Cables & Connectors",
          children: [
            { id: "instrument-cables", title: "Instrument Cables" },
            { id: "microphone-cables-connectors", title: "Microphone Cables" }, // Note: This is a duplicate of the microphone cables category under PA Systems & Live Sound Equipment
            { id: "speaker-cables", title: "Speaker Cables" },
            { id: "patch-cables", title: "Patch Cables" },
            { id: "adapters-converters", title: "Adapters & Converters" },
          ],
        },
        {
          id: "other-accessories",
          title: "Other Accessories",
          children: [
            { id: "straps-harnesses", title: "Straps & Harnesses" },
            { id: "picks-slides", title: "Picks & Slides" },
            { id: "tuners-metronomes", title: "Tuners & Metronomes" },
            { id: "capos", title: "Capos" },
            { id: "mutes", title: "Mutes" },
            { id: "sheet-music-songbooks", title: "Sheet Music & Songbooks" },
          ],
        },
      ],
    },
  ];
}
