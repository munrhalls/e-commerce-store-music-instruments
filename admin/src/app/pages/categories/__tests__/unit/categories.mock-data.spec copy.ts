import { CategoryTree } from "../../categories.service";

// import { root } from "rxjs/internal-compatibility";
// import { CategoryTree } from "../categories.service";

// const getRandomID = function () {
//   return String(Math.random() / Math.random());
// };

// export const IDs = {
//   root: getRandomID(),
//   IDcategory1: getRandomID(),
//   IDcategory2: getRandomID(),
//   IDcategory21: getRandomID(),
//   IDcategory211: getRandomID(),
//   IDcategory212: getRandomID(),
//   IDcategory213: getRandomID(),
//   IDcategory214: getRandomID(),
//   IDcategory3: getRandomID(),
//   IDcategory31: getRandomID(),
//   IDcategory4: getRandomID(),
//   IDcategory41: getRandomID(),
//   IDcategory42: getRandomID(),
//   IDcategory43: getRandomID(),
//   IDcategory44: getRandomID(),
//   IDcategory45: getRandomID(),
//   IDcategory5: getRandomID(),
//   IDcategory51: getRandomID(),
//   IDcategory52: getRandomID(),
//   IDcategory53: getRandomID(),
//   IDcategory54: getRandomID(),
//   IDcategory55: getRandomID(),
//   IDcategory6: getRandomID(),
//   IDcategory61: getRandomID(),
//   IDcategory62: getRandomID(),
//   IDcategory63: getRandomID(),
//   IDcategory64: getRandomID(),
//   IDcategory65: getRandomID(),
//   IDcategory7: getRandomID(),
//   IDcategory71: getRandomID(),
//   IDcategory711: getRandomID(),
//   IDcategory712: getRandomID(),
//   IDcategory713: getRandomID(),
//   IDcategory714: getRandomID(),
//   IDcategory7111: getRandomID(),
//   IDcategory7112: getRandomID(),
//   IDcategory7113: getRandomID(),
//   IDcategory7114: getRandomID(),
//   IDcategory7115: getRandomID(),
//   IDcategory7116: getRandomID(),
//   IDcategory7117: getRandomID(),
//   IDcategory7118: getRandomID(),
//   IDcategory7119: getRandomID(),
//   IDcategory71110: getRandomID(),
//   IDcategory71111: getRandomID(),
//   IDcategory71112: getRandomID(),
//   IDcategory71113: getRandomID(),
//   IDcategory71114: getRandomID(),
//   IDcategory7121: getRandomID(),
//   IDcategory7122: getRandomID(),
//   IDcategory7123: getRandomID(),
//   IDcategory7131: getRandomID(),
//   IDcategory7132: getRandomID(),
//   IDcategory7133: getRandomID(),
//   IDcategory7141: getRandomID(),
//   IDcategory7142: getRandomID(),
//   IDcategory7143: getRandomID(),

//   IDcategory72: getRandomID(),
//   IDcategory721: getRandomID(),
//   IDcategory722: getRandomID(),
//   IDcategory723: getRandomID(),
//   IDcategory724: getRandomID(),
//   IDcategory725: getRandomID(),

//   IDcategory73: getRandomID(),
//   IDcategory731: getRandomID(),
//   IDcategory732: getRandomID(),
//   IDcategory733: getRandomID(),
//   IDcategory734: getRandomID(),
//   IDcategory735: getRandomID(),

//   IDcategory74: getRandomID(),
//   IDcategory741: getRandomID(),
//   IDcategory742: getRandomID(),
//   IDcategory743: getRandomID(),
//   IDcategory744: getRandomID(),
//   IDcategory745: getRandomID(),

//   IDcategory75: getRandomID(),
//   IDcategory751: getRandomID(),
//   IDcategory752: getRandomID(),
//   IDcategory753: getRandomID(),
//   IDcategory754: getRandomID(),

//   IDcategory8: getRandomID(),

//   IDcategory81: getRandomID(),
//   IDcategory82: getRandomID(),
//   IDcategory83: getRandomID(),
//   IDcategory84: getRandomID(),
//   IDcategory85: getRandomID(),
//   IDcategory9: getRandomID(),
//   IDcategory91: getRandomID(),
//   IDcategory92: getRandomID(),
// };

// export let categoryTree: CategoryTree = {
//   id: IDs.root,
//   name: "root",
//   pathIds: [],
//   children: [
//     {
//       id: IDs.IDcategory1,
//       name: "Category 1",
//       pathIds: [IDs.IDcategory1],
//       children: [],
//     },
//     {
//       id: IDs.IDcategory2,
//       name: "Category 2",
//       pathIds: [IDs.IDcategory2],
//       children: [
//         {
//           id: IDs.IDcategory21,
//           name: "Category 2.1",
//           pathIds: [IDs.IDcategory2, IDs.IDcategory21],
//           children: [
//             {
//               id: IDs.IDcategory211,
//               name: "Category 2.1.1",
//               pathIds: [IDs.IDcategory2, IDs.IDcategory21, IDs.IDcategory211],
//               children: [],
//             },
//             {
//               id: IDs.IDcategory212,
//               name: "Category 2.1.2",
//               pathIds: [IDs.IDcategory2, IDs.IDcategory21, IDs.IDcategory211],
//               children: [],
//             },
//             {
//               id: IDs.IDcategory213,
//               name: "Category 2.1.3",
//               pathIds: [IDs.IDcategory2, IDs.IDcategory21, IDs.IDcategory213],
//               children: [],
//             },
//             {
//               id: IDs.IDcategory214,
//               name: "Category 2.1.4",
//               pathIds: [IDs.IDcategory2, IDs.IDcategory21, IDs.IDcategory214],
//               children: [],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: IDs.IDcategory3,
//       name: "Category 3",
//       pathIds: [IDs.IDcategory3],
//       children: [
//         {
//           id: IDs.IDcategory31,
//           name: "Category 3.1",
//           pathIds: [IDs.IDcategory3, IDs.IDcategory31],
//           children: [],
//         },
//       ],
//     },
//     {
//       id: IDs.IDcategory4,
//       name: "Category 4",
//       pathIds: [IDs.IDcategory4],
//       children: [
//         {
//           id: IDs.IDcategory41,
//           name: "Category 4.1",
//           pathIds: [IDs.IDcategory4, IDs.IDcategory41],
//           children: [],
//         },
//         {
//           id: IDs.IDcategory42,
//           name: "Category 4.2",
//           pathIds: [IDs.IDcategory4, IDs.IDcategory42],
//           children: [],
//         },
//         {
//           id: IDs.IDcategory43,
//           name: "Category 4.3",
//           pathIds: [IDs.IDcategory4, IDs.IDcategory43],
//           children: [],
//         },
//         {
//           id: IDs.IDcategory44,
//           name: "Category 4.4",
//           pathIds: [IDs.IDcategory4, IDs.IDcategory44],
//           children: [],
//         },
//         {
//           id: IDs.IDcategory45,
//           name: "Category 4.5",
//           pathIds: [IDs.IDcategory4, IDs.IDcategory45],
//           children: [],
//         },
//       ],
//     },
//     {
//       id: IDs.IDcategory5,
//       name: "Category 5",
//       pathIds: [IDs.IDcategory5],
//       children: [
//         {
//           id: IDs.IDcategory51,
//           name: "Category 5.1",
//           pathIds: [IDs.IDcategory5, IDs.IDcategory51],
//           children: [],
//         },
//         {
//           id: IDs.IDcategory52,
//           name: "Category 5.2",
//           pathIds: [IDs.IDcategory5, IDs.IDcategory52],
//           children: [],
//         },
//         {
//           id: IDs.IDcategory53,
//           name: "Category 5.3",
//           pathIds: [IDs.IDcategory5, IDs.IDcategory53],
//           children: [],
//         },
//         {
//           id: IDs.IDcategory54,
//           name: "Category 5.4",
//           pathIds: [IDs.IDcategory5, IDs.IDcategory54],
//           children: [],
//         },
//         {
//           id: IDs.IDcategory55,
//           name: "Category 5.5",
//           pathIds: [IDs.IDcategory5, IDs.IDcategory55],
//           children: [],
//         },
//       ],
//     },
//     {
//       id: IDs.IDcategory6,
//       name: "Category 6",
//       pathIds: [IDs.IDcategory6],
//       children: [
//         {
//           id: IDs.IDcategory61,
//           name: "Category 6.1",
//           pathIds: [IDs.IDcategory6, IDs.IDcategory61],
//           children: [],
//         },
//         {
//           id: IDs.IDcategory62,
//           name: "Category 6.2",
//           pathIds: [IDs.IDcategory6, IDs.IDcategory62],
//           children: [],
//         },
//         {
//           id: IDs.IDcategory63,
//           name: "Category 6.3",
//           pathIds: [IDs.IDcategory6, IDs.IDcategory63],
//           children: [],
//         },
//         {
//           id: IDs.IDcategory64,
//           name: "Category 6.4",
//           pathIds: [IDs.IDcategory6, IDs.IDcategory64],
//           children: [],
//         },
//         {
//           id: IDs.IDcategory65,
//           name: "Category 6.5",
//           pathIds: [IDs.IDcategory6, IDs.IDcategory65],
//           children: [],
//         },
//       ],
//     },
//     {
//       id: "IDcategory7",
//       name: "Category 7",
//       pathIds: ["IDcategory7"],
//       children: [
//         {
//           id: "IDcategory71",
//           name: "Category 7.1",
//           pathIds: ["IDcategory7", "IDcategory71"],
//           children: [
//             {
//               id: "IDcategory711",
//               name: "Category 7.1.1",
//               pathIds: ["IDcategory7", "IDcategory71", "IDcategory711"],
//               children: [
//                 {
//                   id: "IDcategory7111",
//                   name: "Category 711.1",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory7111",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7112",
//                   name: "Category 711.2",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory7112",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7113",
//                   name: "Category 711.3",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory7113",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7114",
//                   name: "Category 711.4",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory7114",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7115",
//                   name: "Category 711.5",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory7115",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7116",
//                   name: "Category 711.6",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory7116",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7117",
//                   name: "Category 711.7",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory7117",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7118",
//                   name: "Category 711.8",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory7118",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7119",
//                   name: "Category 711.9",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory7119",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory71110",
//                   name: "Category 711.10",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory71110",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory71111",
//                   name: "Category 711.11",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory71111",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory71112",
//                   name: "Category 711.12",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory71112",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory71113",
//                   name: "Category 711.13",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory71113",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory71114",
//                   name: "Category 711.14",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory711",
//                     "IDcategory71114",
//                   ],
//                   children: [],
//                 },
//               ],
//             },
//             {
//               id: "IDcategory712",
//               name: "Category 7.1.2",
//               pathIds: ["IDcategory7", "IDcategory71", "IDcategory712"],
//               children: [
//                 {
//                   id: "IDcategory7121",
//                   name: "Category 712.1",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory712",
//                     "IDcategory7121",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7122",
//                   name: "Category 712.2",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory712",
//                     "IDcategory7122",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7123",
//                   name: "Category 712.3",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory712",
//                     "IDcategory7123",
//                   ],
//                   children: [],
//                 },
//               ],
//             },
//             {
//               id: "IDcategory713",
//               name: "Category 7.1.3",
//               pathIds: ["IDcategory7", "IDcategory71", "IDcategory713"],
//               children: [
//                 {
//                   id: "IDcategory7131",
//                   name: "Category 713.1",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory713",
//                     "IDcategory7131",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7132",
//                   name: "Category 713.2",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory713",
//                     "IDcategory7132",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7133",
//                   name: "Category 713.3",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory713",
//                     "IDcategory7133",
//                   ],
//                   children: [],
//                 },
//               ],
//             },
//             {
//               id: "IDcategory714",
//               name: "Category 7.1.4",
//               pathIds: ["IDcategory7", "IDcategory71", "IDcategory714"],
//               children: [
//                 {
//                   id: "IDcategory7141",
//                   name: "Category 714.1",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory714",
//                     "IDcategory7141",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7142",
//                   name: "Category 714.2",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory714",
//                     "IDcategory7142",
//                   ],
//                   children: [],
//                 },
//                 {
//                   id: "IDcategory7143",
//                   name: "Category 714.3",
//                   pathIds: [
//                     "IDcategory7",
//                     "IDcategory71",
//                     "IDcategory714",
//                     "IDcategory7143",
//                   ],
//                   children: [],
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           id: "IDcategory72",
//           name: "Category 7.2",
//           pathIds: ["IDcategory7", "IDcategory72"],
//           children: [
//             {
//               id: "IDcategory721",
//               name: "Category 721",
//               pathIds: ["IDcategory7", "IDcategory72", "IDcategory721"],
//               children: [],
//             },
//             {
//               id: "IDcategory722",
//               name: "Category 722",
//               pathIds: ["IDcategory7", "IDcategory72", "IDcategory722"],
//               children: [],
//             },
//             {
//               id: "IDcategory723",
//               name: "Category 723",
//               pathIds: ["IDcategory7", "IDcategory72", "IDcategory723"],
//               children: [],
//             },
//             {
//               id: "IDcategory724",
//               name: "Category 724",
//               pathIds: ["IDcategory7", "IDcategory72", "IDcategory724"],
//               children: [],
//             },
//             {
//               id: "IDcategory725",
//               name: "Category 725",
//               pathIds: ["IDcategory7", "IDcategory72", "IDcategory725"],
//               children: [],
//             },
//           ],
//         },
//         {
//           id: "IDcategory73",
//           name: "Category 7.3",
//           pathIds: ["IDcategory7", "IDcategory73"],
//           children: [
//             {
//               id: "IDcategory731",
//               name: "Category 731",
//               pathIds: ["IDcategory7", "IDcategory73", "IDcategory731"],
//               children: [],
//             },
//             {
//               id: "IDcategory732",
//               name: "Category 732",
//               pathIds: ["IDcategory7", "IDcategory73", "IDcategory732"],
//               children: [],
//             },
//             {
//               id: "IDcategory733",
//               name: "Category 733",
//               pathIds: ["IDcategory7", "IDcategory73", "IDcategory733"],
//               children: [],
//             },
//             {
//               id: "IDcategory734",
//               name: "Category 734",
//               pathIds: ["IDcategory7", "IDcategory73", "IDcategory734"],
//               children: [],
//             },
//             {
//               id: "IDcategory735",
//               name: "Category 735",
//               pathIds: ["IDcategory7", "IDcategory73", "IDcategory735"],
//               children: [],
//             },
//           ],
//         },
//         {
//           id: "IDcategory74",
//           name: "Category 7.4",
//           pathIds: ["IDcategory7", "IDcategory74"],
//           children: [
//             {
//               id: "IDcategory741",
//               name: "Category 741",
//               pathIds: ["IDcategory7", "IDcategory74", "IDcategory741"],
//               children: [],
//             },
//             {
//               id: "IDcategory742",
//               name: "Category 742",
//               pathIds: ["IDcategory7", "IDcategory74", "IDcategory742"],
//               children: [],
//             },
//             {
//               id: "IDcategory743",
//               name: "Category 743",
//               pathIds: ["IDcategory7", "IDcategory74", "IDcategory743"],
//               children: [],
//             },
//             {
//               id: "IDcategory744",
//               name: "Category 744",
//               pathIds: ["IDcategory7", "IDcategory74", "IDcategory744"],
//               children: [],
//             },
//             {
//               id: "IDcategory745",
//               name: "Category 745",
//               pathIds: ["IDcategory7", "IDcategory74", "IDcategory745"],
//               children: [],
//             },
//           ],
//         },
//         {
//           id: "IDcategory75",
//           name: "Category 7.5",
//           pathIds: ["IDcategory7", "IDcategory75"],
//           children: [
//             {
//               id: "IDcategory751",
//               name: "Category 751",
//               pathIds: ["IDcategory7", "IDcategory75", "IDcategory751"],
//               children: [],
//             },
//             {
//               id: "IDcategory752",
//               name: "Category 752",
//               pathIds: ["IDcategory7", "IDcategory75", "IDcategory752"],
//               children: [],
//             },
//             {
//               id: "IDcategory753",
//               name: "Category 753",
//               pathIds: ["IDcategory7", "IDcategory75", "IDcategory753"],
//               children: [],
//             },
//             {
//               id: "IDcategory754",
//               name: "Category 754",
//               pathIds: ["IDcategory7", "IDcategory75", "IDcategory754"],
//               children: [],
//             },
//             {
//               id: "IDcategory755",
//               name: "Category 755",
//               pathIds: ["IDcategory7", "IDcategory75", "IDcategory755"],
//               children: [],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "IDcategory8",
//       name: "Category 8",
//       pathIds: ["IDcategory8"],
//       children: [
//         {
//           id: "IDcategory81",
//           name: "Category 8.1",
//           pathIds: ["IDcategory8", "IDcategory81"],
//           children: [],
//         },
//         {
//           id: "IDcategory82",
//           name: "Category 8.2",
//           pathIds: ["IDcategory8", "IDcategory82"],
//           children: [],
//         },
//         {
//           id: "IDcategory83",
//           name: "Category 8.3",
//           pathIds: ["IDcategory8", "IDcategory83"],
//           children: [],
//         },
//         {
//           id: "IDcategory84",
//           name: "Category 8.4",
//           pathIds: ["IDcategory8", "IDcategory84"],
//           children: [],
//         },
//         {
//           id: "IDcategory85",
//           name: "Category 8.5",
//           pathIds: ["IDcategory8", "IDcategory85"],
//           children: [],
//         },
//       ],
//     },
//     {
//       id: "IDcategory9",
//       name: "Category 9",
//       pathIds: ["IDcategory9"],
//       children: [
//         {
//           id: "IDcategory91",
//           name: "Category 9.1",
//           pathIds: ["IDcategory9", "IDcategory91"],
//           children: [],
//         },
//         {
//           id: "IDcategory92",
//           name: "Category 9.2",
//           pathIds: ["IDcategory9", "IDcategory92"],
//           children: [],
//         },
//       ],
//     },
//   ],
// };
