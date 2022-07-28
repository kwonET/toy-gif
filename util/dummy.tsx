export type CtgrType =
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
export type PicsType = PicType[];
//["억울","불만","화남","웃김","신남","설렘","놀림","어이","무시","한숨","슬픔","억장","정색","애교","놀람","대박","뜨헉"]
export const dummyData: PicsType = [
  {
    //1
    ctgrs: ["억울", "어이", "억장"],
    title: "개굴 개굴 눈물",
    imgUrl:
    "/4.jpeg",
  },
  {
    //2
    ctgrs: ["불만", "어이", "무시"],
    title: "어쩔 티비 표정",
    imgUrl:
      "/1.jpeg",
  },
  {
    //3
    ctgrs: ["억울", "슬픔", "억장"],
    title: "만세 눈물 찌잉",
    imgUrl:
      "/11.jpeg",
  },
  {
    //4
    ctgrs: ["어이", "정색", "화남"],
    title: "광수 정색 경직",
    imgUrl:
      "/5.jpeg",
  },
  {
    //5
    ctgrs: ["설렘", "신남", "애교"],
    title: "문희 포도 싶은뎅",
    imgUrl:
      "/8.jpeg",
  },
  {
    //6
    ctgrs: ["놀람", "대박", "뜨헉"],
    title: "문 뒤에서 놀람",
    imgUrl:
      "/2.jpeg",
  },
  {
    //7
    ctgrs: ["신남", "설렘", "애교"],
    title: "맹구 콧물 하트",
    imgUrl:
      "/10.jpeg",
  },
  {
    //8
    ctgrs: ["불만", "화남", "정색"],
    title: "이슬이 주먹 말려",
    imgUrl:
      "/6.jpeg",
  },
  {
    //9
    ctgrs: ["놀람", "눈물", "설렘"],
    title: "기영 바나나 눈물",
    imgUrl:
      "/1.jpeg",
  },
  {
    //10
    ctgrs: ["슬픔", "한숨", "억울"],
    title: "서준 눈물 인생",
    imgUrl:
      "/7.jpeg",
  },
  {
    //11
    ctgrs: ["무시", "한숨", "뜨헉"],
    title: "경멸 스런 눈빛",
    imgUrl:
      "/3.jpeg",
  },
  {
    //12
    ctgrs: ["웃김", "놀람", "대박"],
    title: "루피 웃겨 죽어",
    imgUrl:
      "/9.jpeg",
  },
];
