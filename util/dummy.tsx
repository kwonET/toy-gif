type CtgrType =
  | "억울"
  | "어이"
  | "억장"
  | "불만"
  | "화남"
  | "웃김"
  | "신남"
  | "설렘"
  | "무시"
  | "한숨"
  | "슬픔"
  | "정색"
  | "애교"
  | "놀람"
  | "대박"
  | "뜨헉"
  | "눈물";

export const CtgrList: CtgrType[] = [
  "억울",
  "어이",
  "억장",
  "불만",
  "화남",
  "웃김",
  "신남",
  "설렘",
  "무시",
  "한숨",
  "슬픔",
  "정색",
  "애교",
  "놀람",
  "대박",
  "뜨헉",
  "눈물",
];
interface PicType {
  ctgrs: CtgrType[];
  title: string;
  imgUrl: string;
}
type PicsType = PicType[];
//["억울","불만","화남","웃김","신남","설렘","놀림","어이","무시","한숨","슬픔","억장","정색","애교","놀람","대박","뜨헉"]
export const dummyData: PicsType = [
  {
    //1
    ctgrs: ["억울", "어이", "억장"],
    title: "개굴 개굴 눈물",
    imgUrl:
      "https://i.pinimg.com/564x/25/c3/cc/25c3cce3928f3f8d875c3b6948db1354.jpg",
  },
  {
    //2
    ctgrs: ["불만", "어이", "무시"],
    title: "어쩔 티비 표정",
    imgUrl:
      "https://i.pinimg.com/564x/fd/3b/31/fd3b31b0af42697c2c1565eb2163d855.jpg",
  },
  {
    //3
    ctgrs: ["억울", "슬픔", "억장"],
    title: "만세 눈물 찌잉",
    imgUrl:
      "https://i.pinimg.com/564x/f9/f1/f7/f9f1f76d990137d1a91e888c00dbf4cd.jpg",
  },
  {
    //4
    ctgrs: ["어이", "정색", "화남"],
    title: "광수 정색 경직",
    imgUrl:
      "https://i.pinimg.com/564x/91/e4/3a/91e43a6b97f631dae6a17a894ebe62e5.jpg",
  },
  {
    //5
    ctgrs: ["설렘", "신남", "애교"],
    title: "문희 포도 싶은뎅",
    imgUrl:
      "https://i.pinimg.com/564x/d7/b4/43/d7b4439fd19d7cd2c101de872a522ed2.jpg",
  },
  {
    //6
    ctgrs: ["놀람", "대박", "뜨헉"],
    title: "문 뒤에서 놀람",
    imgUrl:
      "https://i.pinimg.com/564x/3e/f8/76/3ef87678b5e2697befd9cb0fd2b0977b.jpg",
  },
  {
    //7
    ctgrs: ["신남", "설렘", "애교"],
    title: "맹구 콧물 하트",
    imgUrl:
      "https://i.pinimg.com/564x/f2/f2/f6/f2f2f60886cb1810aa711d52020ec3b1.jpg",
  },
  {
    //8
    ctgrs: ["불만", "화남", "정색"],
    title: "이슬이 주먹 말려",
    imgUrl:
      "https://i.pinimg.com/564x/95/0a/d0/950ad09878b0f1c80409b4cc9c1992f4.jpg",
  },
  {
    //9
    ctgrs: ["놀람", "눈물", "설렘"],
    title: "기영 바나나 눈물",
    imgUrl:
      "https://i.pinimg.com/564x/1b/6a/d5/1b6ad58522136ecd25a22cb5cc166203.jpg",
  },
  {
    //10
    ctgrs: ["슬픔", "한숨", "억울"],
    title: "서준 눈물 인생",
    imgUrl:
      "https://i.pinimg.com/564x/26/70/ba/2670baa9d34749c33e4e24e4aaa9201e.jpg",
  },
  {
    //11
    ctgrs: ["무시", "한숨", "뜨헉"],
    title: "경멸 스런 눈빛",
    imgUrl:
      "https://i.pinimg.com/564x/4a/0e/5e/4a0e5e1da76d638fc39e72badf7aa697.jpg",
  },
  {
    //12
    ctgrs: ["웃김", "놀람", "대박"],
    title: "루피 웃겨 죽어",
    imgUrl:
      "https://i.pinimg.com/564x/ec/9c/9a/ec9c9ac248fb07937bd104be6fd40fad.jpg",
  },
];
