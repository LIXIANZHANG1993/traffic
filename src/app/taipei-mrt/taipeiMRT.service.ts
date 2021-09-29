import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import {
  TaipeiMRTinformation,
  StationId,
  searchInformation,
} from './taipei-mrtinformation';
import { filter, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class taipeiMRTService {
  constructor(private http: HttpClient) {}

  stationIdInformation: StationId[] = [
    {
      stationId: 'BL01',
      stationName: {
        Zh_tw: '頂埔',
        En: 'Dingpu',
      },
    },
    {
      stationId: 'BL02',
      stationName: {
        Zh_tw: '永寧',
        En: 'Yongning',
      },
    },
    {
      stationId: 'BL03',
      stationName: {
        Zh_tw: '土城',
        En: 'Tucheng',
      },
    },
    {
      stationId: 'BL04',
      stationName: {
        Zh_tw: '海山',
        En: 'Haishan',
      },
    },
    {
      stationId: 'BL05',
      stationName: {
        Zh_tw: '亞東醫院',
        En: 'Far Eastern Hospital',
      },
    },
    {
      stationId: 'BL06',
      stationName: {
        Zh_tw: '府中',
        En: 'Fuzhong',
      },
    },
    {
      stationId: 'BL07',
      stationName: {
        Zh_tw: '板橋',
        En: 'Banqiao',
      },
    },
    {
      stationId: 'BL08',
      stationName: {
        Zh_tw: '新埔',
        En: 'Xinpu',
      },
    },
    {
      stationId: 'BL09',
      stationName: {
        Zh_tw: '江子翠',
        En: 'Jiangzicui',
      },
    },
    {
      stationId: 'BL10',
      stationName: {
        Zh_tw: '龍山寺',
        En: 'Longshan Temple',
      },
    },
    {
      stationId: 'BL11',
      stationName: {
        Zh_tw: '西門',
        En: 'Ximen',
      },
    },
    {
      stationId: 'BL12',
      stationName: {
        Zh_tw: '台北車站',
        En: 'Taipei Main Station',
      },
    },
    {
      stationId: 'BL13',
      stationName: {
        Zh_tw: '善導寺',
        En: 'Shandao Temple',
      },
    },
    {
      stationId: 'BL14',
      stationName: {
        Zh_tw: '忠孝新生',
        En: 'Zhongxiao Xinsheng',
      },
    },
    {
      stationId: 'BL15',
      stationName: {
        Zh_tw: '忠孝復興',
        En: 'Zhongxiao Fuxing',
      },
    },
    {
      stationId: 'BL16',
      stationName: {
        Zh_tw: '忠孝敦化',
        En: 'Xhongxiao Dunhua',
      },
    },
    {
      stationId: 'BL17',
      stationName: {
        Zh_tw: '國父紀念館',
        En: 'Sun Yat-Sen Memorial Hall',
      },
    },
    {
      stationId: 'BL18',
      stationName: {
        Zh_tw: '市政府',
        En: 'Taipei City Hall',
      },
    },
    {
      stationId: 'BL19',
      stationName: {
        Zh_tw: '永春',
        En: 'Yongchun',
      },
    },
    {
      stationId: 'BL20',
      stationName: {
        Zh_tw: '後山埤',
        En: 'Houshanpi',
      },
    },
    {
      stationId: 'BL21',
      stationName: {
        Zh_tw: '昆陽',
        En: 'Kunyang',
      },
    },
    {
      stationId: 'BL22',
      stationName: {
        Zh_tw: '南港',
        En: 'Nangang',
      },
    },
    {
      stationId: 'BL23',
      stationName: {
        Zh_tw: '南港展覽館',
        En: 'Taipei Nangang Exhibition Center',
      },
    },
    {
      stationId: 'BR01',
      stationName: {
        Zh_tw: '動物園',
        En: 'Taipei Zoo',
      },
    },
    {
      stationId: 'BR02',
      stationName: {
        Zh_tw: '木柵',
        En: 'Muzha',
      },
    },
    {
      stationId: 'BR03',
      stationName: {
        Zh_tw: '萬芳社區',
        En: 'Wanfang Community',
      },
    },
    {
      stationId: 'BR04',
      stationName: {
        Zh_tw: '萬芳醫院',
        En: 'Wanfang Hospital',
      },
    },
    {
      stationId: 'BR05',
      stationName: {
        Zh_tw: '辛亥',
        En: 'Xinhai',
      },
    },
    {
      stationId: 'BR06',
      stationName: {
        Zh_tw: '麟光',
        En: 'Linguang',
      },
    },
    {
      stationId: 'BR07',
      stationName: {
        Zh_tw: '六張犁',
        En: 'Liuzhangli',
      },
    },
    {
      stationId: 'BR08',
      stationName: {
        Zh_tw: '科技大樓',
        En: 'Technology Building',
      },
    },
    {
      stationId: 'BR09',
      stationName: {
        Zh_tw: '大安',
        En: 'Daan',
      },
    },
    {
      stationId: 'BR10',
      stationName: {
        Zh_tw: '忠孝復興',
        En: 'Zhongxiao Fuxing',
      },
    },
    {
      stationId: 'BR11',
      stationName: {
        Zh_tw: '南京復興',
        En: 'Nanjing Fuxing',
      },
    },
    {
      stationId: 'BR12',
      stationName: {
        Zh_tw: '中山國中',
        En: 'Zhongshan Junior High School',
      },
    },
    {
      stationId: 'BR13',
      stationName: {
        Zh_tw: '松山機場',
        En: 'Songshan Airport',
      },
    },
    {
      stationId: 'BR14',
      stationName: {
        Zh_tw: '大直',
        En: 'Dazhi',
      },
    },
    {
      stationId: 'BR15',
      stationName: {
        Zh_tw: '劍南路',
        En: 'Jiannan Rd.',
      },
    },
    {
      stationId: 'BR16',
      stationName: {
        Zh_tw: '西湖',
        En: 'Xihu',
      },
    },
    {
      stationId: 'BR17',
      stationName: {
        Zh_tw: '港墘',
        En: 'Gangqian',
      },
    },
    {
      stationId: 'BR18',
      stationName: {
        Zh_tw: '文德',
        En: 'Wende',
      },
    },
    {
      stationId: 'BR19',
      stationName: {
        Zh_tw: '內湖',
        En: 'Neihu',
      },
    },
    {
      stationId: 'BR20',
      stationName: {
        Zh_tw: '大湖公園',
        En: 'Dahu Park',
      },
    },
    {
      stationId: 'BR21',
      stationName: {
        Zh_tw: '葫洲',
        En: 'Huzhou',
      },
    },
    {
      stationId: 'BR22',
      stationName: {
        Zh_tw: '東湖',
        En: 'Donghu',
      },
    },
    {
      stationId: 'BR23',
      stationName: {
        Zh_tw: '南港軟體園區',
        En: 'Nangang Software Park',
      },
    },
    {
      stationId: 'BR24',
      stationName: {
        Zh_tw: '南港展覽館',
        En: 'Taipei Nangang Exhibition Center',
      },
    },
    {
      stationId: 'G01',
      stationName: {
        Zh_tw: '新店',
        En: 'Xindian',
      },
    },
    {
      stationId: 'G02',
      stationName: {
        Zh_tw: '新店區公所',
        En: 'Xindian District Office',
      },
    },
    {
      stationId: 'G03',
      stationName: {
        Zh_tw: '七張',
        En: 'Qizhang',
      },
    },
    {
      stationId: 'G04',
      stationName: {
        Zh_tw: '大坪林',
        En: 'Dapinglin',
      },
    },
    {
      stationId: 'G05',
      stationName: {
        Zh_tw: '景美',
        En: 'Jingmei',
      },
    },
    {
      stationId: 'G06',
      stationName: {
        Zh_tw: '萬隆',
        En: 'Wanlong',
      },
    },
    {
      stationId: 'G07',
      stationName: {
        Zh_tw: '公館',
        En: 'Gongguan',
      },
    },
    {
      stationId: 'G08',
      stationName: {
        Zh_tw: '台電大樓',
        En: 'Taipower Building',
      },
    },
    {
      stationId: 'G09',
      stationName: {
        Zh_tw: '古亭',
        En: 'Guting',
      },
    },
    {
      stationId: 'G10',
      stationName: {
        Zh_tw: '中正紀念堂',
        En: 'Chiang Kai-Shek Memorial Hall',
      },
    },
    {
      stationId: 'G11',
      stationName: {
        Zh_tw: '小南門',
        En: 'Xiaonanmen',
      },
    },
    {
      stationId: 'G12',
      stationName: {
        Zh_tw: '西門',
        En: 'Ximen',
      },
    },
    {
      stationId: 'G13',
      stationName: {
        Zh_tw: '北門',
        En: 'Beimen',
      },
    },
    {
      stationId: 'G14',
      stationName: {
        Zh_tw: '中山',
        En: 'Zhongshan',
      },
    },
    {
      stationId: 'G15',
      stationName: {
        Zh_tw: '松江南京',
        En: 'Songjiang Nanjing',
      },
    },
    {
      stationId: 'G16',
      stationName: {
        Zh_tw: '南京復興',
        En: 'Nanjing Fuxing',
      },
    },
    {
      stationId: 'G17',
      stationName: {
        Zh_tw: '台北小巨蛋',
        En: 'Taipei Arena',
      },
    },
    {
      stationId: 'G18',
      stationName: {
        Zh_tw: '南京三民',
        En: 'Nanjing Sanmin',
      },
    },
    {
      stationId: 'G19',
      stationName: {
        Zh_tw: '松山',
        En: 'Songshan',
      },
    },
    {
      stationId: 'G03A',
      stationName: {
        Zh_tw: '小碧潭',
        En: 'Xiaobitan',
      },
    },
    {
      stationId: 'O01',
      stationName: {
        Zh_tw: '南勢角',
        En: 'Nanshijiao',
      },
    },
    {
      stationId: 'O02',
      stationName: {
        Zh_tw: '景安',
        En: 'Jingan',
      },
    },
    {
      stationId: 'O03',
      stationName: {
        Zh_tw: '永安市場',
        En: 'Yongan Market',
      },
    },
    {
      stationId: 'O04',
      stationName: {
        Zh_tw: '頂溪',
        En: 'Dingxi',
      },
    },
    {
      stationId: 'O05',
      stationName: {
        Zh_tw: '古亭',
        En: 'Guting',
      },
    },
    {
      stationId: 'O06',
      stationName: {
        Zh_tw: '東門',
        En: 'Dongmen',
      },
    },
    {
      stationId: 'O07',
      stationName: {
        Zh_tw: '忠孝新生',
        En: 'Zhongxiao Xinsheng',
      },
    },
    {
      stationId: 'O08',
      stationName: {
        Zh_tw: '松江南京',
        En: 'Songjiang Nanjing',
      },
    },
    {
      stationId: 'O09',
      stationName: {
        Zh_tw: '行天宮',
        En: 'Xingtian Temple',
      },
    },
    {
      stationId: 'O10',
      stationName: {
        Zh_tw: '中山國小',
        En: 'Zhongshan Elementary School',
      },
    },
    {
      stationId: 'O11',
      stationName: {
        Zh_tw: '民權西路',
        En: 'Minquan W. Rd.',
      },
    },
    {
      stationId: 'O12',
      stationName: {
        Zh_tw: '大橋頭',
        En: 'Daqiaotou',
      },
    },
    {
      stationId: 'O13',
      stationName: {
        Zh_tw: '台北橋',
        En: 'Taipei Bridge',
      },
    },
    {
      stationId: 'O50',
      stationName: {
        Zh_tw: '三重國小',
        En: 'Sanchong Elementary School',
      },
    },
    {
      stationId: 'O14',
      stationName: {
        Zh_tw: '菜寮',
        En: 'Cailiao',
      },
    },
    {
      stationId: 'O51',
      stationName: {
        Zh_tw: '三和國中',
        En: 'Sanhe Junior High School',
      },
    },
    {
      stationId: 'O52',
      stationName: {
        Zh_tw: '徐匯中學',
        En: 'St.lgnatius High School',
      },
    },
    {
      stationId: 'O15',
      stationName: {
        Zh_tw: '三重',
        En: 'Sanchong',
      },
    },
    {
      stationId: 'O53',
      stationName: {
        Zh_tw: '三民高中',
        En: 'Sanmin Senior High School',
      },
    },
    {
      stationId: 'O16',
      stationName: {
        Zh_tw: '先嗇宮',
        En: 'Xianse Temple',
      },
    },
    {
      stationId: 'O17',
      stationName: {
        Zh_tw: '頭前庄',
        En: 'Touqianzhuang',
      },
    },
    {
      stationId: 'O54',
      stationName: {
        Zh_tw: '蘆洲',
        En: 'Luzhou',
      },
    },
    {
      stationId: 'O18',
      stationName: {
        Zh_tw: '新莊',
        En: 'Xinzhuang',
      },
    },
    {
      stationId: 'O19',
      stationName: {
        Zh_tw: '輔大',
        En: 'Fu Jen University',
      },
    },
    {
      stationId: 'O20',
      stationName: {
        Zh_tw: '丹鳳',
        En: 'Danfeng',
      },
    },
    {
      stationId: 'O21',
      stationName: {
        Zh_tw: '迴龍',
        En: 'Huilong',
      },
    },
    {
      stationId: 'R02',
      stationName: {
        Zh_tw: '象山',
        En: 'Xiangshan',
      },
    },
    {
      stationId: 'R03',
      stationName: {
        Zh_tw: '台北101/世貿',
        En: 'Taipei 101/World Trade Center',
      },
    },
    {
      stationId: 'R04',
      stationName: {
        Zh_tw: '信義安和',
        En: 'Xinyi Anhe',
      },
    },
    {
      stationId: 'R05',
      stationName: {
        Zh_tw: '大安',
        En: 'Daan',
      },
    },
    {
      stationId: 'R06',
      stationName: {
        Zh_tw: '大安森林公園',
        En: 'Daan Park',
      },
    },
    {
      stationId: 'R07',
      stationName: {
        Zh_tw: '東門',
        En: 'Dongmen',
      },
    },
    {
      stationId: 'R08',
      stationName: {
        Zh_tw: '中正紀念堂',
        En: 'Chiang Kai-Shek Memorial Hall',
      },
    },
    {
      stationId: 'R09',
      stationName: {
        Zh_tw: '台大醫院',
        En: 'NTU Hospital',
      },
    },
    {
      stationId: 'R10',
      stationName: {
        Zh_tw: '台北車站',
        En: 'Taipei Main Station',
      },
    },
    {
      stationId: 'R11',
      stationName: {
        Zh_tw: '中山',
        En: 'Zhongshan',
      },
    },
    {
      stationId: 'R12',
      stationName: {
        Zh_tw: '雙連',
        En: 'Shuanglian',
      },
    },
    {
      stationId: 'R13',
      stationName: {
        Zh_tw: '民權西路',
        En: 'Minquan W. Rd.',
      },
    },
    {
      stationId: 'R14',
      stationName: {
        Zh_tw: '圓山',
        En: 'Yuanshan',
      },
    },
    {
      stationId: 'R15',
      stationName: {
        Zh_tw: '劍潭',
        En: 'Jiantan',
      },
    },
    {
      stationId: 'R16',
      stationName: {
        Zh_tw: '士林',
        En: 'Shilin',
      },
    },
    {
      stationId: 'R17',
      stationName: {
        Zh_tw: '芝山',
        En: 'Zhishan',
      },
    },
    {
      stationId: 'R18',
      stationName: {
        Zh_tw: '明德',
        En: 'Mingde',
      },
    },
    {
      stationId: 'R19',
      stationName: {
        Zh_tw: '石牌',
        En: 'Shipai',
      },
    },
    {
      stationId: 'R20',
      stationName: {
        Zh_tw: '唭哩岸',
        En: 'Qilian',
      },
    },
    {
      stationId: 'R21',
      stationName: {
        Zh_tw: '奇岩',
        En: 'Qiyan',
      },
    },
    {
      stationId: 'R22',
      stationName: {
        Zh_tw: '北投',
        En: 'Beitou',
      },
    },
    {
      stationId: 'R23',
      stationName: {
        Zh_tw: '復興崗',
        En: 'Fuxinggang',
      },
    },
    {
      stationId: 'R24',
      stationName: {
        Zh_tw: '忠義',
        En: 'Zhongyi',
      },
    },
    {
      stationId: 'R25',
      stationName: {
        Zh_tw: '關渡',
        En: 'Guandu',
      },
    },
    {
      stationId: 'R26',
      stationName: {
        Zh_tw: '竹圍',
        En: 'Zhuwei',
      },
    },
    {
      stationId: 'R27',
      stationName: {
        Zh_tw: '紅樹林',
        En: 'Hongshulin',
      },
    },
    {
      stationId: 'R28',
      stationName: {
        Zh_tw: '淡水',
        En: 'Tamsui',
      },
    },
    {
      stationId: 'R22A',
      stationName: {
        Zh_tw: '新北投',
        En: 'Xinbeitou',
      },
    },
    {
      stationId: 'Y07',
      stationName: {
        Zh_tw: '大坪林',
        En: 'Dapinglin',
      },
    },
    {
      stationId: 'Y08',
      stationName: {
        Zh_tw: '十四張',
        En: 'Shisizhang',
      },
    },
    {
      stationId: 'Y09',
      stationName: {
        Zh_tw: '秀朗橋',
        En: 'Xiulang Bridge',
      },
    },
    {
      stationId: 'Y10',
      stationName: {
        Zh_tw: '景平',
        En: 'Jingping',
      },
    },
    {
      stationId: 'Y11',
      stationName: {
        Zh_tw: '景安',
        En: 'Jingan',
      },
    },
    {
      stationId: 'Y12',
      stationName: {
        Zh_tw: '中和',
        En: 'Zhonghe',
      },
    },
    {
      stationId: 'Y13',
      stationName: {
        Zh_tw: '橋和',
        En: 'Qiaohe',
      },
    },
    {
      stationId: 'Y14',
      stationName: {
        Zh_tw: '中原',
        En: 'Zhongyuan',
      },
    },
    {
      stationId: 'Y15',
      stationName: {
        Zh_tw: '板新',
        En: 'Banxin',
      },
    },
    {
      stationId: 'Y16',
      stationName: {
        Zh_tw: '板橋',
        En: 'Banqiao',
      },
    },
    {
      stationId: 'Y17',
      stationName: {
        Zh_tw: '新埔民生',
        En: 'Xinpu Minsheng',
      },
    },
    {
      stationId: 'Y18',
      stationName: {
        Zh_tw: '頭前庄',
        En: 'Touqianzhuang',
      },
    },
    {
      stationId: 'Y19',
      stationName: {
        Zh_tw: '幸福',
        En: 'Xingfu',
      },
    },
    {
      stationId: 'Y20',
      stationName: {
        Zh_tw: '新北產業園區',
        En: 'New Taipei Industrial Park',
      },
    },
  ];

  getStationIdInformation() {
    return this.stationIdInformation;
  }

  searchPrice(obj: searchInformation): Observable<TaipeiMRTinformation[]> {
    return this.http
      .get<TaipeiMRTinformation[]>('api/taipeiMRTprice.json')
      .pipe(
        map((item) =>
          item.filter(
            (result) =>
              result.OriginStationID == obj.startStaion &&
              result.DestinationStationID == obj.endStation
          )
        )
      );
  }
}
