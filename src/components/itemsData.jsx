import imgAlways from '../images/items/items-always.png';
import imgBouguya from '../images/items/items-bouguya.png';
import imgCb from '../images/items/items-cb.png';
import imgDoes from '../images/items/items-does.png';
import imgHg from '../images/items/items-hg.png';
import imgNomijoshi from '../images/items/items-nomijoshi.png';
import imgSalways from '../images/items/items-salways.png';
import imgTrinity from '../images/items/items-trinity.png';
import imgYsstudio from '../images/items/items-ysstudio.png';

const tagsData = {
  design: {
    name: 'Design',
    class: '-design'
  },
  coding: {
    name: 'Coding',
    class: '-coding'
  },
  writing: {
    name: 'Writing',
    class: '-writing'
  },
  wordpress: {
    name: 'WordPress',
    class: '-wordpress'
  },
  other: {
    name: 'Other',
    class: '-other'
  }
};

export const itemsData = [
  {
    title: '株式会社オルウェイズ 様', id: 'always', image: imgAlways, alt: '株式会社オルウェイズ 様 ホームページリニューアル', tags: [tagsData.design, tagsData.coding, tagsData.writing, tagsData.wordpress], url: 'http://always-net.com',
  },
  {
    title: 'スタジオオルウェイズ 様', id: 'salways', image: imgSalways, alt: 'スタジオオルウェイズ 様 ホームページリニューアル', tags: [tagsData.design, tagsData.coding, tagsData.writing, tagsData.wordpress], url: 'http://studio.always-net.com',
  },
  {
    title: '株式会社トリニティ 様', id: 'trinity', image: imgTrinity, alt: '株式会社トリニティ 様 ホームページリニューアル', tags: [tagsData.coding, tagsData.wordpress], url: 'http://ikt-trinity.co.jp',
  },
  {
    title: '株式会社ダズ・インターナショナル 様', id: 'does', image: imgDoes, alt: '株式会社ダズ・インターナショナル 様 ホームページリニューアル', tags: [tagsData.coding], url: 'https://does-inter.com',
  },
  {
    title: 'コミック・バスター THE ROOM 五反田西口店 様', id: 'cb', image: imgCb, alt: 'コミック・バスター THE ROOM 五反田西口店 様 LP制作', tags: [tagsData.coding], url: 'https://www.xn--pckhtyr3f0e1k.jp/gotanda_telework',
  },
  {
    title: 'BOUGUYA', id: 'bouguya', image: imgBouguya, alt: 'BOUGUYA ECサイト制作', tags: [tagsData.design, tagsData.coding, tagsData.other], url: 'https://bouguya.jp',
  },
  {
    title: 'ハートガード', id: 'heartguard', image: imgHg, alt: 'ハートガード ホームページ制作', tags: [tagsData.design, tagsData.coding], url: 'https://www.heartguard.jp/',
  },
  {
    title: '飲み女子セレクション', id: 'nomijoshi', image: imgNomijoshi, alt: '飲み女子セレクション ホームページリニューアル', tags: [tagsData.coding, tagsData.other], url: 'https://nomihosu.com/',
  },
  {
    title: 'YSstudio 様', id: 'ysstudio', image: imgYsstudio, alt: 'YSstudio 様 ホームページ制作', tags: [tagsData.design, tagsData.coding, tagsData.writing, tagsData.wordpress], url: 'https://sakanagano.com',
  },
];