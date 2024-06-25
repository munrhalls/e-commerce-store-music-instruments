import { Component } from "@angular/core";

export interface Category {
  data: { id: string; title: string };
  children: Category[];
}

@Component({
  selector: "ngx-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
  categories: Category[] = [
    {
      data: { id: "instruments", title: "Instruments" },
      children: [
        {
          data: { id: "string-instruments", title: "String Instruments" },
          children: [
            {
              data: { id: "guitars", title: "Guitars" },
              children: [
                {
                  data: { id: "acoustic-guitars", title: "Acoustic Guitars" },
                  children: [
                    {
                      data: {
                        id: "steel-string-acoustic-guitars",
                        title: "Steel-string",
                      },
                      children: [],
                    },
                    {
                      data: {
                        id: "nylon-string-acoustic-guitars",
                        title: "Nylon-string (Classical & Flamenco)",
                      },
                      children: [],
                    },
                    {
                      data: {
                        id: "12-string-acoustic-guitars",
                        title: "12-string",
                      },
                      children: [],
                    },
                  ],
                },
                {
                  data: { id: "electric-guitars", title: "Electric Guitars" },
                  children: [
                    {
                      data: {
                        id: "solid-body-electric-guitars",
                        title: "Solid Body",
                      },
                      children: [],
                    },
                    {
                      data: {
                        id: "semi-hollow-electric-guitars",
                        title: "Semi-Hollow",
                      },
                      children: [],
                    },
                    {
                      data: {
                        id: "hollow-body-electric-guitars",
                        title: "Hollow Body",
                      },
                      children: [],
                    },
                  ],
                },
                {
                  data: { id: "bass-guitars", title: "Bass Guitars" },
                  children: [
                    {
                      data: { id: "electric-basses", title: "Electric Basses" },
                      children: [
                        {
                          data: {
                            id: "4-string-electric-basses",
                            title: "4-string",
                          },
                          children: [],
                        },
                        {
                          data: {
                            id: "5-string-electric-basses",
                            title: "5-string",
                          },
                          children: [],
                        },
                        {
                          data: {
                            id: "6-string-electric-basses",
                            title: "6-string",
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      data: { id: "acoustic-basses", title: "Acoustic Basses" },
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              data: { id: "ukuleles", title: "Ukuleles" },
              children: [
                {
                  data: { id: "soprano-ukuleles", title: "Soprano" },
                  children: [],
                },
                {
                  data: { id: "concert-ukuleles", title: "Concert" },
                  children: [],
                },
                {
                  data: { id: "tenor-ukuleles", title: "Tenor" },
                  children: [],
                },
                {
                  data: { id: "baritone-ukuleles", title: "Baritone" },
                  children: [],
                },
              ],
            },
            { data: { id: "banjos", title: "Banjos" }, children: [] },
            { data: { id: "mandolins", title: "Mandolins" }, children: [] },
            { data: { id: "violins", title: "Violins" }, children: [] },
            { data: { id: "violas", title: "Violas" }, children: [] },
            { data: { id: "cellos", title: "Cellos" }, children: [] },
            {
              data: { id: "double-basses", title: "Double Basses" },
              children: [],
            },
            { data: { id: "harp", title: "Harp" }, children: [] },
          ],
        },
        {
          data: { id: "woodwind-instruments", title: "Woodwind Instruments" },
          children: [
            {
              data: { id: "flutes-piccolos", title: "Flutes & Piccolos" },
              children: [],
            },
            { data: { id: "clarinets", title: "Clarinets" }, children: [] },
            { data: { id: "saxophones", title: "Saxophones" }, children: [] },
            { data: { id: "oboes", title: "Oboes" }, children: [] },
            { data: { id: "bassoons", title: "Bassoons" }, children: [] },
            { data: { id: "recorders", title: "Recorders" }, children: [] },
          ],
        },
        {
          data: { id: "brass-instruments", title: "Brass Instruments" },
          children: [
            { data: { id: "trumpets", title: "Trumpets" }, children: [] },
            { data: { id: "trombones", title: "Trombones" }, children: [] },
            {
              data: { id: "french-horns", title: "French Horns" },
              children: [],
            },
            { data: { id: "tubas", title: "Tubas" }, children: [] },
            { data: { id: "cornets", title: "Cornets" }, children: [] },
            { data: { id: "flugelhorns", title: "Flugelhorns" }, children: [] },
          ],
        },
        {
          data: { id: "keyboards-pianos", title: "Keyboards & Pianos" },
          children: [
            {
              data: { id: "digital-pianos", title: "Digital Pianos" },
              children: [],
            },
            {
              data: {
                id: "keyboards-midi-controllers",
                title: "Keyboards & MIDI Controllers",
              },
              children: [],
            },
            {
              data: { id: "stage-pianos", title: "Stage Pianos" },
              children: [],
            },
            {
              data: { id: "synthesizers", title: "Synthesizers" },
              children: [],
            },
            { data: { id: "organs", title: "Organs" }, children: [] },
            { data: { id: "accordions", title: "Accordions" }, children: [] },
          ],
        },
        {
          data: {
            id: "percussion-instruments",
            title: "Percussion Instruments",
          },
          children: [
            {
              data: {
                id: "drum-sets-electronic-drums",
                title: "Drum Sets & Electronic Drums",
              },
              children: [],
            },
            { data: { id: "snare-drums", title: "Snare Drums" }, children: [] },
            { data: { id: "cymbals", title: "Cymbals" }, children: [] },
            {
              data: { id: "drum-hardware", title: "Drum Hardware" },
              children: [],
            },
            {
              data: { id: "world-percussion", title: "World Percussion" },
              children: [
                {
                  data: { id: "congas-bongos", title: "Congas & Bongos" },
                  children: [],
                },
                { data: { id: "djembes", title: "Djembes" }, children: [] },
                {
                  data: { id: "tambourines", title: "Tambourines" },
                  children: [],
                },
                { data: { id: "shakers", title: "Shakers" }, children: [] },
                {
                  data: { id: "hand-drums", title: "Hand Drums" },
                  children: [],
                },
              ],
            },
            {
              data: {
                id: "orchestral-percussion",
                title: "Orchestral Percussion",
              },
              children: [
                { data: { id: "timpani", title: "Timpani" }, children: [] },
                {
                  data: { id: "xylophones", title: "Xylophones" },
                  children: [],
                },
                { data: { id: "marimbas", title: "Marimbas" }, children: [] },
                {
                  data: { id: "vibraphones", title: "Vibraphones" },
                  children: [],
                },
                {
                  data: { id: "glockenspiels", title: "Glockenspiels" },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          data: { id: "folk-instruments", title: "Folk Instruments" },
          children: [
            { data: { id: "harmonicas", title: "Harmonicas" }, children: [] },
            { data: { id: "bagpipes", title: "Bagpipes" }, children: [] },
            {
              data: { id: "accordions-folk", title: "Accordions" },
              children: [],
            }, // Note: This is a duplicate of the accordion category under Keyboards & Pianos
            { data: { id: "concertinas", title: "Concertinas" }, children: [] },
          ],
        },
      ],
    },

    {
      data: { id: "hardware", title: "Hardware" },
      children: [
        {
          data: { id: "amplifiers-effects", title: "Amplifiers & Effects" },
          children: [
            {
              data: { id: "guitar-amplifiers", title: "Guitar Amplifiers" },
              children: [],
            },
            {
              data: { id: "bass-amplifiers", title: "Bass Amplifiers" },
              children: [],
            },
            {
              data: { id: "keyboard-amplifiers", title: "Keyboard Amplifiers" },
              children: [],
            },
            {
              data: { id: "acoustic-amplifiers", title: "Acoustic Amplifiers" },
              children: [],
            },
            {
              data: {
                id: "effects-pedals-processors",
                title: "Effects Pedals & Processors",
              },
              children: [],
            },
            {
              data: {
                id: "rackmount-effects-processors",
                title: "Rackmount Effects & Processors",
              },
              children: [],
            },
            {
              data: {
                id: "pa-systems-live-sound-equipment",
                title: "PA Systems & Live Sound Equipment",
              },
              children: [
                { data: { id: "mixers", title: "Mixers" }, children: [] },
                { data: { id: "speakers", title: "Speakers" }, children: [] },
                {
                  data: { id: "microphones", title: "Microphones" },
                  children: [],
                },
                {
                  data: { id: "cables-snakes", title: "Cables & Snakes" },
                  children: [],
                },
                { data: { id: "monitors", title: "Monitors" }, children: [] },
              ],
            },
          ],
        },
        {
          data: { id: "recording-equipment", title: "Recording Equipment" },
          children: [
            {
              data: { id: "audio-interfaces", title: "Audio Interfaces" },
              children: [],
            },
            {
              data: { id: "microphones-recording", title: "Microphones" },
              children: [],
            },
            {
              data: { id: "studio-monitors", title: "Studio Monitors" },
              children: [],
            },
            { data: { id: "headphones", title: "Headphones" }, children: [] },
            {
              data: { id: "software-plugins", title: "Software & Plugins" },
              children: [],
            },
            {
              data: {
                id: "midi-controllers-keyboards-recording",
                title: "MIDI Controllers & Keyboards",
              },
              children: [],
            },
          ],
        },
      ],
    },

    {
      data: { id: "general-accessories", title: "General Accessories" },
      children: [
        {
          data: { id: "cases-gig-bags", title: "Cases & Gig Bags" },
          children: [
            { data: { id: "hard-cases", title: "Hard Cases" }, children: [] },
            {
              data: {
                id: "soft-cases-gig-bags",
                title: "Soft Cases & Gig Bags",
              },
              children: [],
            },
          ],
        },
        {
          data: { id: "stands-racks", title: "Stands & Racks" },
          children: [
            {
              data: { id: "guitar-stands", title: "Guitar Stands" },
              children: [],
            },
            {
              data: { id: "keyboard-stands", title: "Keyboard Stands" },
              children: [],
            },
            {
              data: { id: "microphone-stands", title: "Microphone Stands" },
              children: [],
            },
            {
              data: { id: "music-stands", title: "Music Stands" },
              children: [],
            },
            {
              data: {
                id: "rackmount-cases-accessories",
                title: "Rackmount Cases & Accessories",
              },
              children: [],
            },
          ],
        },
        {
          data: { id: "strings-reeds", title: "Strings & Reeds" },
          children: [
            {
              data: {
                id: "guitar-strings",
                title: "Guitar Strings (Electric, Acoustic, Bass)",
              },
              children: [],
            },
            {
              data: { id: "ukulele-strings", title: "Ukulele Strings" },
              children: [],
            },
            {
              data: { id: "banjo-strings", title: "Banjo Strings" },
              children: [],
            },
            {
              data: { id: "orchestral-strings", title: "Orchestral Strings" },
              children: [],
            },
            {
              data: {
                id: "reeds",
                title: "Reeds (Clarinet, Saxophone, Oboe, Bassoon)",
              },
              children: [],
            },
          ],
        },
        {
          data: { id: "maintenance-cleaning", title: "Maintenance & Cleaning" },
          children: [
            {
              data: { id: "polishes-cleaners", title: "Polishes & Cleaners" },
              children: [],
            },
            {
              data: { id: "lubricants-oils", title: "Lubricants & Oils" },
              children: [],
            },
            { data: { id: "tools-kits", title: "Tools & Kits" }, children: [] },
          ],
        },
        {
          data: { id: "cables-connectors", title: "Cables & Connectors" },
          children: [
            {
              data: { id: "instrument-cables", title: "Instrument Cables" },
              children: [],
            },
            {
              data: {
                id: "microphone-cables-connectors",
                title: "Microphone Cables",
              },
              children: [],
            },
            {
              data: { id: "speaker-cables", title: "Speaker Cables" },
              children: [],
            },
            {
              data: { id: "patch-cables", title: "Patch Cables" },
              children: [],
            },
            {
              data: {
                id: "adapters-converters",
                title: "Adapters & Converters",
              },
              children: [],
            },
          ],
        },
        {
          data: { id: "other-accessories", title: "Other Accessories" },
          children: [
            {
              data: { id: "straps-harnesses", title: "Straps & Harnesses" },
              children: [],
            },
            {
              data: { id: "picks-slides", title: "Picks & Slides" },
              children: [],
            },
            {
              data: { id: "tuners-metronomes", title: "Tuners & Metronomes" },
              children: [],
            },
            { data: { id: "capos", title: "Capos" }, children: [] },
            { data: { id: "mutes", title: "Mutes" }, children: [] },
            {
              data: {
                id: "sheet-music-songbooks",
                title: "Sheet Music & Songbooks",
              },
              children: [],
            },
          ],
        },
      ],
    },
  ];
}
