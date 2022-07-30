import React from 'react';

import serviceHplp from '../images/service/service-hplp.svg';
import serviceWp from '../images/service/service-wp.svg';
import serviceWebdesign from '../images/service/service-webdesign.svg';
import serviceCoding from '../images/service/service-coding.svg';
import servicePixelart from '../images/service/service-pixelart.svg';

export const serviceData = [
  {
    titleJp: 'ホームページ・LP', titleEn: 'HP / LP', id: 'hplp', image: serviceHplp, alt: 'ホームページ・ランディングページ制作', text: () => {
      return (<p>個人・企業・業種を問わず、ホームページ・ランディングページを制作いたします。<br />
        ヒアリング〜要件定義〜デザイン〜コーディング〜公開までワンストップで行い、お客様のご要望とユーザーのニーズに合わせ、満足度の高いサイトを提供します。<br />
        レスポンシブ対応やサイトスピードの軽量化、保守管理メンテナンス等もお任せください。</p>)
    }
  },
  {
    titleJp: 'ワードプレス', titleEn: 'WordPress', id: 'wp', image: serviceWp, alt: 'ワードプレスカスタマイズ', text: () => {
      return (<p>世界・国内問わず最大のシェア率を誇るCMSであるワードプレスを使用することで、専門的な知識がなくともお客様ご自身でホームページの更新も可能になります。<br />
        静的サイトのWP化やテーマ修正、プラグイン導入等も柔軟に対応いたします。<br />
        保守管理・メンテナンスを含め、手厚いサポートをご提供いたします。</p>)
    }
  },
  {
    titleJp: 'Webデザイン', titleEn: 'Web Design', id: 'webdesign', image: serviceWebdesign, alt: 'Webデザイン', text: () => {
      return (<p>サイトの印象は全てデザインで決まると言っても過言ではないでしょう。<br />
        お客様の提供するコンテンツを最大限に活かしてアピールするために、ご要望に合ったデザインを表現します。<br />
        サイトの滞在・回遊時間に繋がるUI/UXを意識した設計を行うことで、更なる成果への期待ができます。</p>)
    }
  },
  {
    titleJp: 'コーディング', titleEn: 'Coding', id: 'coding', image: serviceCoding, alt: 'コーディング・プログラミング', text: () => {
      return (<p>過去多数の実務案件により培われたコーディング技術を用い、レスポンシブデザイン、W3C勧告に基づく設計、無駄なコードを削減し軽量化するなど、洗練したコードを提供いたします。<br />
        また保守メンテナンス性にも直結するコードの視認性や整理整頓は、多数のクライアント様からもご好評いただいております。</p>)
    }
  },
  {
    titleJp: 'ドット絵', titleEn: 'Pixel Art', id: 'pixelart', image: servicePixelart, alt: 'ドット絵・ピクセルアート制作', text: () => {
      return (<p>当サイトで使用されている様なオリジナルのドット絵を制作いたします。<br />
        主にSNSなどで使用していただける様なプロフィールアバターや似顔絵、簡単なイメージにも対応します。<br />
        ファイル形式もJPG・PNG・SVG・AI・EPS等お好きな形式でご提供するので、お気軽にご相談ください。</p>)
    }
  },
];
